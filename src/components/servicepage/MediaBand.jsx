"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { requestScrollRefresh } from "@/lib/scrollRefresh"

gsap.registerPlugin(ScrollTrigger)

// Full-width image band: opens from a rounded inset to full bleed as it
// enters, while the image drifts slower than the page (parallax).
export default function MediaBand({ image, alt, caption }) {
  const wrapRef = useRef(null)
  const frameRef = useRef(null)
  const imgRef = useRef(null)

  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        frameRef.current,
        { clipPath: "inset(10% 7% 10% 7% round 28px)" },
        {
          clipPath: "inset(0% 0% 0% 0% round 0px)",
          ease: "none",
          scrollTrigger: { trigger: wrapRef.current, start: "top 85%", end: "top 15%", scrub: true },
        }
      )
      gsap.fromTo(
        imgRef.current,
        { yPercent: -10 },
        {
          yPercent: 10,
          ease: "none",
          scrollTrigger: { trigger: wrapRef.current, start: "top bottom", end: "bottom top", scrub: true },
        }
      )
    })
    return () => mm.revert()
  }, [])

  // Layout can shift once the image decodes; re-measure triggers (debounced).
  const onLoad = () => requestScrollRefresh()

  return (
    <section ref={wrapRef} data-navbar="light" className="svp-band" aria-label={caption || alt}>
      <div ref={frameRef} className="svp-band-frame">
        <img ref={imgRef} src={image} alt={alt} className="svp-band-img" loading="lazy" decoding="async" onLoad={onLoad} />
        {caption && (
          <div className="svp-band-caption">
            <p className="svp-tagline max-w-[34ch]">{caption}</p>
          </div>
        )}
      </div>
    </section>
  )
}
