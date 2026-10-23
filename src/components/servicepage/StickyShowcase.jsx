"use client"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Section from "./Section"
import Icon from "./Icon"

gsap.registerPlugin(ScrollTrigger)

// "What we build" as a sticky showcase (desktop, lg+): items scroll on the
// left while a sticky panel on the right wipes to the active item's image.
// Items without an image get a designed fallback (icon on the hero gradient).
// On mobile each item simply shows its media above the text.
export default function StickyShowcase({ tone, id, eyebrow, title, intro, items = [], images = [] }) {
  const itemRefs = useRef([])
  const slideRefs = useRef([])
  const columnRef = useRef(null)
  const panelRef = useRef(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add("(min-width: 1024px)", () => {
      // Hold the panel in place while the items scroll past. A GSAP pin, not
      // CSS position:sticky: the site sets overflow on html AND body
      // (index.css), which turns body into its own scroll box and silently
      // disables sticky everywhere.
      const TOP = 0.17 // panel sits 17% from the top of the viewport…
      const HEIGHT = 0.66 // …and is 66% of the viewport tall (matches its CSS)
      ScrollTrigger.create({
        trigger: columnRef.current,
        start: () => `top ${window.innerHeight * TOP}px`,
        // release when the bottom of the item list reaches the panel's bottom edge
        end: () => `bottom ${window.innerHeight * (TOP + HEIGHT)}px`,
        pin: panelRef.current,
        pinSpacing: false,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      })

      // Which item is in the middle of the viewport → active slide.
      itemRefs.current.forEach((el, i) => {
        if (!el) return
        ScrollTrigger.create({
          trigger: el,
          start: "top 55%",
          end: "bottom 55%",
          onToggle: (self) => self.isActive && setActive(i),
        })
      })
    })
    return () => mm.revert()
  }, [items.length])

  // Wipe slides: the active one is fully shown, earlier ones exit upward,
  // later ones wait below.
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    slideRefs.current.forEach((el, j) => {
      if (!el) return
      const clip = j === active ? "inset(0% 0% 0% 0%)" : j < active ? "inset(0% 0% 100% 0%)" : "inset(100% 0% 0% 0%)"
      // expo.out: starts fast, settles slowly
      gsap.to(el, { clipPath: clip, duration: reduce ? 0 : 1, ease: "expo.out", overwrite: true })
    })
  }, [active])

  const media = (item, i, inline) =>
    images[i] ? (
      <img
        src={images[i]}
        alt={item.title}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        decoding="async"
        onLoad={inline ? undefined : () => ScrollTrigger.refresh()}
      />
    ) : (
      <div className="svp-show-fallback absolute inset-0">
        <span className="svp-show-fallback-icon"><Icon name={item.icon} size={inline ? 44 : 72} /></span>
        <span className="svp-show-fallback-num">{String(i + 1).padStart(2, "0")}</span>
      </div>
    )

  return (
    <Section tone={tone} id={id} eyebrow={eyebrow} title={title} intro={intro} className="svp-sticky-ok">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <ol className="flex flex-col">
          {items.map((item, i) => (
            <li
              key={item.title}
              ref={(el) => (itemRefs.current[i] = el)}
              data-active={i === active}
              className="svp-show-item flex flex-col justify-center gap-4 py-8 lg:min-h-[52vh] lg:py-12"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[16px] lg:hidden">{media(item, i, true)}</div>
              <span className="svp-num">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="svp-title !text-[clamp(26px,2.6vw,40px)]">{item.title}</h3>
              <p className="svp-lead max-w-[46ch]">{item.text}</p>
            </li>
          ))}
        </ol>

        <div ref={columnRef} className="hidden lg:block">
          <div ref={panelRef} className="svp-show-panel h-[66vh]">
            {items.map((item, i) => (
              <div
                key={item.title}
                ref={(el) => (slideRefs.current[i] = el)}
                className="svp-show-slide"
                style={{ clipPath: i === 0 ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)" }}
                aria-hidden={i !== active}
              >
                {media(item, i, false)}
              </div>
            ))}
            {/* <div className="svp-show-counter" aria-hidden="true">
              {String(active + 1).padStart(2, "0")} <span>/ {String(items.length).padStart(2, "0")}</span>
            </div> */}
          </div>
        </div>
      </div>
    </Section>
  )
}
