"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Section from "./Section"

gsap.registerPlugin(ScrollTrigger)

// Numbered delivery steps.
// Desktop (lg+): the section pins and the steps slide sideways as you scroll.
// Mobile / reduced motion: a plain vertical list.
export default function ProcessSteps({ tone, eyebrow = "How it runs", title, intro, steps = [] }) {
  const pinRef = useRef(null)
  const viewportRef = useRef(null)
  const trackRef = useRef(null)

  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      const distance = () => Math.max(0, trackRef.current.scrollWidth - viewportRef.current.clientWidth)
      if (distance() < 40) return // everything already fits: nothing to scroll

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
    })
    return () => mm.revert()
  }, [steps.length])

  return (
    <div ref={pinRef}>
      <Section
        tone={tone}
        eyebrow={eyebrow}
        title={title}
        intro={intro}
        className="lg:flex lg:min-h-screen lg:flex-col lg:justify-center lg:!py-20"
      >
        <div ref={viewportRef}>
          <ol ref={trackRef} className="svp-process-track flex flex-col gap-10 sm:grid sm:grid-cols-2 lg:flex lg:w-max lg:flex-row lg:gap-6">
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
  )
}
