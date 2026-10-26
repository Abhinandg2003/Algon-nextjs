"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Section from "./Section"

gsap.registerPlugin(ScrollTrigger)

// Numbered delivery steps.
// Desktop (lg+, motion allowed): the section pins and the steps slide
// sideways as you scroll. Everywhere else (and if the steps already fit):
// a wrapping grid — 1 column, 2 from sm, 3 from lg — so no step is ever
// off-screen and unreachable.
export default function ProcessSteps({ tone, eyebrow = "How it runs", title, intro, steps = [] }) {
  const pinRef = useRef(null)
  const viewportRef = useRef(null)
  const trackRef = useRef(null)

  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      // Null-safe: ScrollTrigger re-evaluates this on every refresh, and a
      // refresh can land while the page is being swapped out.
      const distance = () => {
        const track = trackRef.current
        const viewport = viewportRef.current
        return track && viewport ? Math.max(0, track.scrollWidth - viewport.clientWidth) : 0
      }

      // Switch to the horizontal row only while pinned (see .is-pinned in
      // servicepage.css), then measure it.
      const track = trackRef.current
      const pinEl = pinRef.current
      track.classList.add("is-pinned")
      pinEl.classList.add("svp-process-pinned")
      const unpin = () => {
        track.classList.remove("is-pinned")
        pinEl.classList.remove("svp-process-pinned")
      }
      if (distance() < 40) {
        unpin() // everything already fits: keep the grid, nothing to scroll
        return
      }

      gsap.to(trackRef.current, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: pinRef.current,
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })

      // Runs when the media query stops matching (resize below lg, or the
      // user turns on reduced motion): back to the grid.
      return unpin
    })
    return () => mm.revert()
  }, [steps.length])

  return (
    // Outer wrapper is owned by React and never moves. GSAP wraps the pinned
    // element (pinRef) in a pin-spacer *inside* it, so React can still remove
    // this component cleanly on navigation.
    <div>
      <div ref={pinRef}>
        <Section
          tone={tone}
          eyebrow={eyebrow}
          title={title}
          intro={intro}
        >
          <div ref={viewportRef}>
            <ol ref={trackRef} className="svp-process-track grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-12">
              {steps.map((s, i) => (
                <li
                  key={s.title}
                  className="svp-step svp-process-step svp-reveal flex flex-col gap-3"
                  style={{ transitionDelay: `${(i % 3) * 70}ms` }}
                >
                  <div className="flex justify-between w-full ">
                    <h3 className="svp-h3">{s.title}</h3>
                    <span className="svp-num">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <p className="svp-body">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </Section>
      </div>
    </div>
  )
}
