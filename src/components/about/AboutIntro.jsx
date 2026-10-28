"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

// ─────────────────────────────────────────────────────────────────────────────
// About page: minimal text hero + a full-width media band under it.
// ─────────────────────────────────────────────────────────────────────────────

// Media shown in the band. Swap the image for a real About photo; to use a
// video instead, uncomment the <video> in AboutMedia and remove the <img>.
const MEDIA_IMAGE = "/images/algon-ai.jpg"
// The browser plays the first one it supports: WebM (smaller) first, then the
// MP4 fallback for browsers without WebM (older Safari / iOS).
const MEDIA_VIDEO = { webm: "/videos/aboutwebm.webm", mp4: "/videos/about.mp4" }

// Band animation settings
const START_INSET = { mobile: 5, desktop: 5 } // % trimmed off each side at the start (90vw / 80vw wide)
const ZOOM = 1.2 // media scale at the start and again at the end
const OVERLAY_MAX = 0.6 // black overlay opacity at the end

export function AboutHeroMinimal() {
  return (
    // Short hero: top padding clears the fixed navbar (72px).
    // Two columns on md+ in a 5-column grid: eyebrow 1, text 4. Phones: stacked.
    <section data-navbar="light" className="relative bg-[#050508] pb-14 h-[55vh] pt-[120px] text-white md:pb-20 md:pt-[140px]">
      <div className="mx-auto grid w-full max-w-[90vw] gap-4 md:max-w-[80vw] md:grid-cols-5 md:gap-10">
        <p className="text-[18px]  text-white md:col-span-1 md:pt-3">About Algon</p>
        <div className="md:col-span-4">
          <h1 className=" text-[clamp(30px,4.4vw,60px)] font-extralight leading-[1.05] tracking-[-0.02em]">
            We build thoughtful systems, refining every detail for the people who use them.
          </h1>
          {/* <p className="mt-6 max-w-[76ch] font-light text-[clamp(15px,1.2vw,18px)] leading-[1.7] text-white">
            Founded in 2023 in Kochi, India, Algon builds hospital systems, AI automation and dedicated
            engineering teams for clients in the USA, India and the UAE.
          </p> */}
        </div>
      </div>
    </section>
  )
}

// Scroll-driven band:
//   entering → container opens from 80vw (90vw on phones) to full width and
//              the media settles from 120% to 100%; exactly full width / 100%
//              when the band's centre reaches the centre of the screen.
//   leaving  → the media zooms back to 120% and a black overlay fades in to 60%.
export function AboutMedia() {
  const wrapRef = useRef(null)
  const frameRef = useRef(null)
  const mediaRef = useRef(null)
  const overlayRef = useRef(null)

  // Start the video from code (see the note on the <video> below)
  useEffect(() => {
    const v = mediaRef.current
    if (v instanceof HTMLVideoElement) {
      v.muted = true
      v.play().catch(() => {})
    }
  }, [])

  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add(
      {
        isMobile: "(max-width: 767px)",
        motion: "(prefers-reduced-motion: no-preference)",
      },
      ({ conditions }) => {
        if (!conditions.motion) return
        const inset = conditions.isMobile ? START_INSET.mobile : START_INSET.desktop

        // In: until the band's centre meets the screen's centre.
        // clamp(): the band already peeks in under the short hero on load, so
        // "top bottom" would sit above the top of the page and the band would
        // load half-opened. Clamping starts the animation at scroll 0 instead,
        // so the band really starts at START_INSET.
        const enter = gsap.timeline({
          scrollTrigger: { trigger: wrapRef.current, start: "clamp(top bottom)", end: "center center", scrub: 0.6 },
        })
        enter
          .fromTo(frameRef.current, { clipPath: `inset(0% ${inset}% 0% ${inset}%)` }, { clipPath: "inset(0% 0% 0% 0%)", ease: "power2.out" }, 0)
          .fromTo(mediaRef.current, { scale: ZOOM }, { scale: 1, ease: "power2.out" }, 0)

        // Out: from the centre until the band has left the top of the screen
        const leave = gsap.timeline({
          scrollTrigger: { trigger: wrapRef.current, start: "center center", end: "bottom top", scrub: 0.6 },
        })
        leave
          .fromTo(mediaRef.current, { scale: 1 }, { scale: ZOOM, ease: "power1.in", immediateRender: false }, 0)
          .fromTo(overlayRef.current, { opacity: 0 }, { opacity: OVERLAY_MAX, ease: "power1.in" }, 0)
      },
    )
    return () => mm.revert()
  }, [])

  return (
    <section ref={wrapRef} data-navbar="light" className="relative bg-[#050508]">
      <div ref={frameRef} className="relative h-[70vh] w-full overflow-hidden md:h-screen" style={{ willChange: "clip-path" }}>
        {/* Autoplay needs muted + playsInline (iOS); the effect above also
            starts it from code, because React leaves `muted` out of the
            server HTML and the browser would block the native autoplay. */}
        <video
          ref={mediaRef}
          poster={MEDIA_IMAGE}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ willChange: "transform" }}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src={MEDIA_VIDEO.webm} type="video/webm" />
          <source src={MEDIA_VIDEO.mp4} type="video/mp4" />
        </video>
        {/* Video version: uncomment, and remove the <img> above (keep ref={mediaRef}).
        <video
          ref={mediaRef}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ willChange: "transform" }}
          src={MEDIA_VIDEO}
          poster={MEDIA_IMAGE}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        */}
        <div ref={overlayRef} className="pointer-events-none absolute inset-0 bg-black" style={{ opacity: 0 }} aria-hidden="true" />
      </div>
    </section>
  )
}
