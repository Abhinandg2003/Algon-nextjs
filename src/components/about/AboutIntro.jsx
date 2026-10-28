"use client"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import MuxVideo, { muxPoster } from "../MuxVideo"

gsap.registerPlugin(ScrollTrigger)

// ─────────────────────────────────────────────────────────────────────────────
// About page: minimal text hero + a full-width media band under it.
// ─────────────────────────────────────────────────────────────────────────────

// Media shown in the band. Swap the image for a real About photo; to use a
// video instead, uncomment the <video> in AboutMedia and remove the <img>.
const MEDIA_IMAGE = "/images/algon-ai.jpg"
// Band video, streamed from Mux (adaptive quality). The local MP4 is the
// fallback if the stream fails.
const MEDIA_MUX = {
  desktop: "kHjPa01z6CA4yPlw9pzSm6EqFKH8qDXfSHwTqBFVs538", // Mux: "about"
  mobile: "wzWeOePhL8hK6fpHZewXCfXPiuTSbUzqJUCkT5EOGZk", // Mux: "about-mobile"
}
// Local files (before Mux). The WebM is no longer used.
const MEDIA_VIDEO = { webm: "/videos/aboutwebm.webm", mp4: "/videos/aboutwebm.mp4" }

// Band animation settings
const START_INSET = { mobile: 5, desktop: 5 } // % trimmed off each side at the start (90vw / 80vw wide)
const ZOOM = 1.2 // media scale at the start and again at the end
const OVERLAY_MAX = 0.6 // black overlay opacity at the end

// Hero word that swaps with an image
const SWAP_IMAGE = "/images/thoughtful.webp"
const SWAP_MS = 3000 // time each state stays before switching
const SWAP_IMG_H = "0.86em" // image height (the square on hover is this wide too)
const SWAP_IMG_W = "1.9em" // image width while looping
const SWAP_EASE = "cubic-bezier(0.65, 0, 0.35, 1)"

// A word in the heading that turns into an image every SWAP_MS, then back.
// Hovering shows the same image as a square of the same height.
// The width animates, so the rest of the line slides to make room and stays
// centred. The word stays in the DOM, so the heading still reads correctly.
function SwapWord({ word }) {
  const wordRef = useRef(null)
  const [wordW, setWordW] = useState(null) // px, measured from the word
  const [phase, setPhase] = useState("word") // "word" | "image"
  const [hovered, setHovered] = useState(false)
  const [motion, setMotion] = useState(false)

  // Measure the word (and again when the font size changes with the screen)
  useEffect(() => {
    const el = wordRef.current
    const measure = () => setWordW(el.offsetWidth)
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: no-preference)")
    const update = () => setMotion(mq.matches)
    update()
    mq.addEventListener("change", update)
    return () => mq.removeEventListener("change", update)
  }, [])

  // Loop: word ⇄ image. Paused while hovered.
  useEffect(() => {
    if (!motion || hovered) return
    const t = setTimeout(() => setPhase((p) => (p === "word" ? "image" : "word")), SWAP_MS)
    return () => clearTimeout(t)
  }, [phase, hovered, motion])

  const mode = hovered ? "square" : phase
  const width = mode === "word" ? (wordW ?? "auto") : mode === "image" ? SWAP_IMG_W : SWAP_IMG_H
  const showImage = mode !== "word"
  const ease = `0.9s ${SWAP_EASE}`

  return (
    <span
      className="relative inline-block"
      style={{ width, transition: wordW ? `width ${ease}` : "none" }}
      // Mouse only: a tap on phones would otherwise leave it stuck as a square
      onPointerEnter={(e) => e.pointerType === "mouse" && setHovered(true)}
      onPointerLeave={(e) => {
        if (e.pointerType !== "mouse") return
        setHovered(false)
        setPhase("image") // back to the wide image, then the loop carries on
      }}
    >
      {/* In the flow, so the line keeps the word's baseline */}
      <span
        ref={wordRef}
        className="relative left-1/2 inline-block -translate-x-1/2 whitespace-nowrap"
        style={{ opacity: showImage ? 0 : 1, transition: `opacity 0.5s ${SWAP_EASE} ${showImage ? "0s" : "0.3s"}` }}
      >
        {word}
      </span>
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 overflow-hidden rounded-[0.1em]"
        style={{
          height: SWAP_IMG_H,
          opacity: showImage ? 1 : 0,
          transform: `translateY(-50%) scale(${showImage ? 1 : 0.92})`,
          transition: `opacity 0.5s ${SWAP_EASE} ${showImage ? "0.25s" : "0s"}, transform ${ease}`,
        }}
      >
        <img src={SWAP_IMAGE} alt="" draggable={false} className="h-full w-full object-cover" />
      </span>
    </span>
  )
}

export function AboutHeroMinimal() {
  return (
    // Short hero: top padding clears the fixed navbar (72px).
    // Two columns on md+ in a 5-column grid: eyebrow 1, text 4. Phones: stacked.
    <section data-navbar="light" className="relative bg-[#050508] pb-14 h-[55vh] pt-[120px] text-white md:pb-20 md:pt-[140px]">
      <div className="mx-auto grid w-full max-w-[90vw] gap-4 md:max-w-[80vw]  md:gap-10">
        {/* <p className="text-[18px]  text-white md:col-span-1 md:pt-3">About Algon</p> */}
        <div className="md:col-span-4">
          <h1 className=" text-[clamp(40px,4.4vw,60px)] font-extralight text-center leading-[1.05] tracking-[-0.02em]">
            We build <SwapWord word="thoughtful" /> systems, <br /> refining every detail for people who use them.
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
  // null until mounted, so nothing downloads before we know which version to use
  const [isMobile, setIsMobile] = useState(null)

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)")
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener("change", update)
    return () => mq.removeEventListener("change", update)
  }, [])

  // Make sure it's muted from code (see the note on the video below);
  // MuxVideo starts playback itself once the stream is ready.
  useEffect(() => {
    const v = mediaRef.current
    if (v) v.muted = true
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
        <MuxVideo
          ref={mediaRef}
          playbackId={isMobile === null ? null : isMobile ? MEDIA_MUX.mobile : MEDIA_MUX.desktop}
          fallbackSrc={MEDIA_VIDEO.mp4}
          poster={isMobile === null ? undefined : muxPoster(isMobile ? MEDIA_MUX.mobile : MEDIA_MUX.desktop)}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ willChange: "transform" }}
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          disableRemotePlayback
          aria-hidden="true"
        />
        {/* Local version (before Mux):
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
        */}
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
