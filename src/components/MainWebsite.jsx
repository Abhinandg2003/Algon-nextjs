"use client";
import { useState, useEffect, useRef, useCallback, useMemo, memo } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"
import Navbar from "./Navbar"
import ScrollRevealText from "./ScrollRevealText"
import ScrollRevealSection from "./Scrollrevealsection3d"
import USPSection from "./upsection"
import Footer from "./Footer"
import TestimonialSection from "./Testimonialsection"
import CTASection from "./CTASection"
import Loader from "./Loader"
import SplashScreen from "./splashscreenvideo"
import ScrollIndicator from "./ui/ScrollIndicator"
import AlgonHero from "./AlgonHero"
import { ArrowRight } from "lucide-react"
import { CASE_STUDIES } from "../data/caseStudiesData"
import "../casestudies.css"
import TestimonialCarousel from "./testimonialsectionvideos"
import { ServicesOverviewMain } from "./Servicesinmain"
import { LOADER_FADE_MS, LOADER_ONLY_MS, PRELOADER_SEEN_KEY, PRELOADER_VIDEO } from "@/config/preloader"
import { requestScrollRefresh } from "@/lib/scrollRefresh"

gsap.registerPlugin(ScrollTrigger)
ScrollTrigger.config({ ignoreMobileResize: true }) // add this line

/* ────────────────────────────────────────────────────────────────────
   WHY THE ORIGINAL VERSION LAGGED — and what changed
   ──────────────────────────────────────────────────────────────────
   1. Dead imports/components (RadialOrbitalTimeline, ScrollVelocity,
      CurvedLoop, ServicesMarquee, OurClients, Clients, framer-motion's
      `a`, the unused `timelineData` array, `Serviceshead`) were bundled
      and parsed even though nothing rendered them. Removed entirely —
      smaller JS bundle, less parse/eval time on first load.

   2. All 3 hero videos used the browser default `preload="auto"`.
      That means 3 full videos start downloading & decoding the moment
      the hero mounts, fighting each other and the splash video for
      bandwidth and the GPU video decoder. Now only the active slide
      and the *next* slide (pre-warmed just before it's needed) load;
      the third stays `preload="none"` until it's about to be shown.

   3. Two separate `useEffect`s both played/paused the same video refs
      (one on `phase` mount with a setTimeout, one on `current`) —
      duplicated, race-prone logic. Merged into a single effect.

   4. The autoplay `setInterval` was rebuilt on every `current` AND
      every `transitioning` change (two teardown/setup cycles per
      slide). It's now created once and reads the latest index via a
      ref, so the timer itself never gets recreated.

   5. `goTo / next / prev_` were re-created as new function instances
      on every render (fine for plain buttons, but it's free to fix
      and matters if these ever get passed to memoized children) —
      wrapped in `useCallback`.

   6. The crossfade relied on a plain `transition-opacity` over a
      full-viewport `<video>`. Opacity transitions on large video
      elements force the browser to keep both layers fully painted.
      Promoted each slide to its own GPU layer with
      `transform: translateZ(0)` (Tailwind `transform-gpu`) so the
      compositor handles the fade instead of repainting.

   7. CaseCard/CaseStudies were already well optimized in the source —
      the original `casestudies.css` deliberately uses transform/opacity
      -only transitions, scopes `will-change` to `:hover` instead of
      leaving it on permanently, and uses `contain: layout style paint`
      on each card. That stylesheet is restored as-is below (don't
      replace it with Tailwind reinventions — a hand-tuned compositor
      -friendly stylesheet like this is exactly what Tailwind utilities
      would otherwise approximate worse). The only changes are on the
      JS side: a single batched ScrollTrigger for all 6 cards instead
      of one-per-card, and memoized subcomponents so a parent re-render
      doesn't re-render every card.
   ──────────────────────────────────────────────────────────────────── */

const SLIDES = [
  {
    id: 0,
    video: "/videos/algonhero-4.mp4",
    videomob:"/videos/algon-hero-4mobile.mp4",
    headline: "Flawless Medical\nSoftwares",
    sub: "Digital. Physical. Boundless.",
    accent: "rgba(80,120,255,0.9)",
  },
  {
    id: 1,
    video: "/videos/hero-2-comp-comp.mp4",
    videomob:"/videos/hero-2-comp-comp-mob.mp4",
    headline: "Managed Engineering\nServices",
    sub: "Every pixel, intentional.",
    accent: "rgba(255,80,120,0.9)",
  },
  {
    id: 2,
    video: "/videos/hero-4-comp-comp.mp4",
    videomob:"/videos/hero-4-comp-comp-mob.mp4",
    headline: "AI that Actually\nWorks",
    sub: "We just build it first.",
    accent: "rgba(80,220,180,0.9)",
  },
]

const AUTOPLAY_MS = 6000
const TRANSITION_MS = 900

/* ───────────────────────── Hero ───────────────────────── */

// Poster = the video's first frame, at /images/posters/<video file name>.webp
// e.g. /videos/algonhero-4.mp4 → /images/posters/algonhero-4.webp
const posterFor = (src) => `/images/posters/${src.split("/").pop().replace(/\.\w+$/, "")}.webp`

// deferMedia: true while the preloader overlay is up — videos don't download
// (posters show instead) so the intro video gets the bandwidth.
function Hero({ deferMedia = false }) {

  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const media = window.matchMedia("(max-width: 767px)");
  setIsMobile(media.matches); // read after mount (server has no window)

  const listener = (e) => setIsMobile(e.matches);

  media.addEventListener("change", listener);

  return () => media.removeEventListener("change", listener);
}, []);



  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState(null)
  const [transitioning, setTransitioning] = useState(false)

  const sectionRef = useRef(null)
  const videoRefs = useRef([])
  const currentRef = useRef(0) // always holds the latest "current" for the interval closure
  const timerRef = useRef(null)
  const isVisibleRef = useRef(true) // hero in viewport + tab visible

  const goTo = useCallback((idx) => {
    setTransitioning((isTransitioning) => {
      if (isTransitioning) return isTransitioning
      setPrev(currentRef.current)
      setCurrent(idx)
      currentRef.current = idx
      window.setTimeout(() => {
        setPrev(null)
        setTransitioning(false)
      }, TRANSITION_MS)
      return true
    })
  }, [])

  const next = useCallback(() => {
    // OPT: skip autoplay entirely while tab is hidden or hero is offscreen —
    // no point decoding/playing video nobody can see
    if (!isVisibleRef.current) return
    goTo((currentRef.current + 1) % SLIDES.length)
  }, [goTo])

  // Single autoplay timer, created once.
  useEffect(() => {
    timerRef.current = window.setInterval(next, AUTOPLAY_MS)
    return () => window.clearInterval(timerRef.current)
  }, [next])

  // ─── OPT: pause autoplay (and underlying video) when tab is backgrounded ──
  useEffect(() => {
    const handleVisibility = () => {
      isVisibleRef.current = !document.hidden && isVisibleRef.current !== "offscreen"
      const activeVideo = videoRefs.current[currentRef.current]
      if (!activeVideo) return
      if (document.hidden) activeVideo.pause()
      else if (isVisibleRef.current) activeVideo.play().catch(() => {})
    }
    document.addEventListener("visibilitychange", handleVisibility)
    return () => document.removeEventListener("visibilitychange", handleVisibility)
  }, [])

  // ─── OPT: pause autoplay (and underlying video) when hero scrolls offscreen ──
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting && !document.hidden
        const activeVideo = videoRefs.current[currentRef.current]
        if (!activeVideo) return
        if (entry.isIntersecting && !document.hidden) activeVideo.play().catch(() => {})
        else activeVideo.pause()
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Drives actual <video> playback for the active slide.
  useEffect(() => {
    if (deferMedia) return // preloader still up: leave videos idle
    videoRefs.current.forEach((v, i) => {
      if (!v) return
      if (i === current) {
        const play = () => { if (isVisibleRef.current) v.play().catch(() => {}) }
        if (v.readyState >= 2) play()
        else {
          v.addEventListener("loadeddata", play, { once: true })
          // It was held at preload="none" during the preloader; start loading now
          if (v.readyState === 0 && v.networkState !== HTMLMediaElement.NETWORK_LOADING) v.load()
        }
      } else {
        v.pause()
      }
    })
  }, [current, deferMedia])

  // ─── OPT: only ever 2-3 videos mounted at once — current, the next one
  // queued to preload, and (briefly, during crossfade) prev. Old slides are
  // unmounted immediately once they're no longer needed, freeing their
  // decode buffer/GPU texture instead of leaking forever.
  const nextIndex = (current + 1) % SLIDES.length
  const shouldLoad = useCallback(
    (i) => i === current || i === nextIndex || i === prev,
    [current, nextIndex, prev]
  )

  return (
    <section
      ref={sectionRef}
      data-navbar="light"
      className="relative h-screen w-full overflow-hidden touch-scroll-fix"
    >
      {SLIDES.map((slide, i) => {
        const isActive = i === current
        const isPrev = i === prev
        const load = shouldLoad(i)
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transform-gpu transition-opacity ease-in-out ${
              isActive ? "z-10 opacity-100" : isPrev ? "z-0 opacity-0" : "-z-10 opacity-0"
            }`}
            style={{ transitionDuration: `${TRANSITION_MS}ms`, willChange: isActive || isPrev ? "opacity" : "auto" }}
          >
            {load && (
              <video
                ref={(el) => (videoRefs.current[i] = el)}
                src={isMobile ? slide.videomob : slide.video}
                // First frame shown until the video can play (see posterFor)
                poster={posterFor(isMobile ? slide.videomob : slide.video)}
                muted
                playsInline
                loop
                disablePictureInPicture
                disableRemotePlayback
                aria-hidden="true"
                // OPT: only the active slide eagerly buffers; the queued
                // next slide just grabs enough to start cleanly, nothing else
                preload={deferMedia ? "none" : isActive ? "auto" : "metadata"}
                className="h-full w-full object-cover"
              />
            )}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(5,5,8,0.85)_0%,rgba(5,5,8,0.3)_50%,transparent_100%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,5,8,0.7)_0%,transparent_50%)]" />
          </div>
        )
      })}

      {/* Hero text */}
      <div className="absolute inset-0 z-20 flex items-end">
        <div className="ml-[8vw] max-w-[620px] pb-[30%] md:pb-[5%]">
          <h1 className="whitespace-pre-line text-[50px] md:text-[60px] font-light leading-[1.05] tracking-wide">
            {SLIDES[current].headline}
          </h1>
          <button className="mt-10 border border-white  text-[18px]  text-white rounded-full   px-8 py-3    duration-300 transition hover:bg-white hover:text-black">
            Explore Works →
          </button>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-12 left-[8vw] right-[8vw] z-20 flex items-center justify-between md:left-[85vw]">
        <div className="flex items-center gap-2">
          {SLIDES.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} className="p-1" aria-label={`Go to slide ${i + 1}`}>
              <span
                className={`block h-[2px] rounded transition-all duration-400 ${
                  i === current ? "w-7 bg-white" : "w-1.5 bg-white/30"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────── Case studies ───────────────────────── */

const Scanlines = memo(function Scanlines() {
  return <div className="cs2-scanlines" aria-hidden="true" />
})

const TagItem = memo(function TagItem({ tag, accent }) {
  return (
    <span className="cs2-tag" style={{ borderColor: `${accent}33` }}>
      {tag}
    </span>
  )
})

const CaseCard = memo(function CaseCard({ cs, index }) {
  const primaryStat = cs.stats?.[0]
  const statDisplay = primaryStat ? `${primaryStat.value}${primaryStat.suffix}` : null
  const tags = useMemo(() => cs.tags?.slice(0, 3) ?? [], [cs.tags])

  return (
    <Link
      data-card-index={index}
      href={`/work/${cs.id}`}
      className="cs2-card group"
      style={{ "--accent": cs.accent, textDecoration: "none" }}
    >
      <div className="cs2-img-wrap">
        <img
          src={cs.heroImage}
          alt={cs.title}
          className="cs2-img"
          loading="lazy"
          decoding="async"
          fetchPriority="low"
        />
        {/* <Scanlines /> */}
      </div>

      <div className="cs2-bottom">
        <div className="cs2-info">
          <div className="-mb-8 transition-all duration-300 group-hover:mb-0">
            <h3 className="cs2-client">{cs.title}</h3>
            {statDisplay && (
              <div className="cs2-stat" style={{ color: cs.accent }}>
                {statDisplay}&nbsp;
                <span className="cs2-stat-label">{primaryStat.label}</span>
              </div>
            )}
          </div>
          <div className="cs2-cta" style={{ color: cs.accent, borderColor: `${cs.accent}44` }}>
            <ArrowRight size={13} />
          </div>
        </div>

        <div className="cs2-tags">
          {tags.map((t) => (
            <TagItem key={t} tag={t} accent={cs.accent} />
          ))}
        </div>

        <div className="cs2-line" style={{ background: cs.accent }} />
      </div>
    </Link>
  )
})


// ─────────────────────────────────────────────────────────────────────────
// ServicesSection.jsx
//
// Replicated from SolOverview (mobile) + SolOverviewpc (desktop).
// Same data-driven, scroll-animated pattern — new heading copy, and on
// the desktop version the columns are swapped: IMAGES now sit on the
// LEFT, CONTENT (heading + list) sits on the RIGHT.
//
// Assumes the same external deps as the originals: gsap + ScrollTrigger
// registered elsewhere in the app, and a SERVICES data array shaped like:
//   { id, title, desc, accent, bg, pic, picsticky, gradient }
// (mirrors SOLUTIONS — swap in your real content/images here, or map
// USPS-style {label, desc} onto this shape if that's your source data.)
// ─────────────────────────────────────────────────────────────────────────


// ── Placeholder data — swap with your real services content/images ────────
// const SERVICES = [
//   {
//     id: "01",
//     title: "Service One",
//     desc: "Short description of the first service goes here.",
//     accent: "#818cf8",
//     bg: "#0f0f14",
//     pic: "/images/services/service-1.png",
//     picsticky: "/images/services/service-1-sticky.png",
//   },
//   {
//     id: "02",
//     title: "Service Two",
//     desc: "Short description of the second service goes here.",
//     accent: "#34d399",
//     bg: "#0f0f14",
//     pic: "/images/services/service-2.png",
//     picsticky: "/images/services/service-2-sticky.png",
//   },
//   {
//     id: "03",
//     title: "Service Three",
//     desc: "Short description of the third service goes here.",
//     accent: "#f9a8d4",
//     bg: "#0f0f14",
//     pic: "/images/services/service-3.png",
//     picsticky: "/images/services/service-3-sticky.png",
//   },
//   {
//     id: "04",
//     title: "Service Four",
//     desc: "Short description of the fourth service goes here.",
//     accent: "#fbbf24",
//     bg: "#0f0f14",
//     pic: "/images/services/service-4.png",
//     picsticky: "/images/services/service-4-sticky.png",
//   },
// ];

// ─────────────────────────────────────────────────────────────────────────
// MOBILE — replicated from SolOverview
// ─────────────────────────────────────────────────────────────────────────
function ServicesOverview() {
  const ref = useRef();
  const headRef = useRef();
  const cardRefs = useRef([]);
  const bgRefs = useRef([]);

  const BG_SHAPES = [
    { top: "5%", left: "2%", size: 220, color: "#818cf8", delay: 0 },
    { top: "30%", right: "3%", size: 160, color: "#34d399", delay: 0.1 },
    { top: "60%", left: "5%", size: 140, color: "#f9a8d4", delay: 0.2 },
    { top: "80%", right: "5%", size: 180, color: "#fbbf24", delay: 0.15 },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(headRef.current, { autoAlpha: 0, y: 28 });
      gsap.to(headRef.current, {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headRef.current,
          start: "top 80%",
          invalidateOnRefresh: true,
        },
      });

      cardRefs.current.forEach((c, i) => {
        if (!c) return;
        gsap.set(c, { autoAlpha: 0, y: 60, scale: 0.96 });
        gsap.to(c, {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.75,
          ease: "power3.out",
          delay: (i % 2) * 0.1,
          scrollTrigger: {
            trigger: c,
            start: "top 88%",
            invalidateOnRefresh: true,
          },
        });
      });

      bgRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.to(el, {
          y: `-${60 + i * 20}px`,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
            invalidateOnRefresh: true,
          },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="sv-overview block md:hidden">
      {BG_SHAPES.map((s, i) => (
        <div
          key={i}
          ref={(el) => (bgRefs.current[i] = el)}
          style={{
            position: "absolute",
            top: s.top,
            left: s.left,
            right: s.right,
            width: s.size,
            height: s.size,
            opacity: 0.07,
            pointerEvents: "none",
            zIndex: 0,
            background: `radial-gradient(ellipse,${s.color} 0%,transparent 70%)`,
            borderRadius: "50%",
            filter: "blur(1px)",
          }}
        />
      ))}
      <div className="sv-overview-inner" data-navbar="dark">
        <div className="flex items-center justify-center">
          <div ref={headRef} className="sv-white-head">
            <h2 className="sv-title-dark">
              Our services.
              <br />
              Built to deliver.
              <br />
            </h2>
          </div>
        </div>
        <div className="sv-ov-grid">
          {SERVICES.map((sv, i) => (
            <div
              key={sv.id}
              ref={(el) => (cardRefs.current[i] = el)}
              className="sv-ov-card"
            >
              <div className="sv-ov-card-body">
                <div
                  className="sv-ov-num absolute right-0 top-0"
                  style={{ color: sv.accent }}
                >
                  {sv.id}
                </div>
                <h3 className="sv-ov-title">{sv.title}</h3>
                <p className="sv-ov-desc">{sv.desc}</p>
                <img
                  className={`hidden md:flex absolute h-[450px] w-[450px] -right-20 -bottom-20 ${
                    i % 2 === 0 ? "animate-float-soft" : "animate-float-wide"
                  }`}
                  src={sv.pic}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="sv-ov-bar" style={{ background: sv.accent }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// DESKTOP — replicated from SolOverviewpc, COLUMNS SWAPPED
// (images now on the LEFT, text/content now on the RIGHT)
// ─────────────────────────────────────────────────────────────────────────
function ServicesOverviewPC() {
  const sectionRef = useRef();
  const imageColRef = useRef();
  const imageRefs = useRef([]);
  const textRefs = useRef([]);

  const SERVICES = [

    {
    id: "01",
    title: "Hospital Management Systems",
    desc: "Hospital operating systems and clinic automation, from front desk to discharge and follow-up.",
    accent: "#666",
    bg: "#0f0f14",
    pic: "/images/medical.jpg",
    picsticky: "/images/medical.jpg",
  },
  {
    id: "02",
    title: "AI & Automation",
    desc: "AI agents, n8n workflows, and RAG grounded in your own data.",
    accent: "#666",
    bg: "#0f0f14",
    pic: "/images/algon-ai.jpg",
    picsticky: "/images/algon-ai.jpg",
  },
  {
    id: "03",
    title: "Managed Engineering",
    desc: "A dedicated team for a defined project: architects, developers, QA, DevOps, and a project lead.",
    accent: "#666",
    bg: "#0f0f14",
    pic: "/images/managed5.jpg",
    picsticky: "/images/managed5.jpg",
  },
  {
    id: "04",
    title: "Web & SaaS Development",
    desc: "Web apps, SaaS platforms, and MVPs built around how your business runs.",
    accent: "#666",
    bg: "#0f0f14",
    pic: "/images/100x.jpg",
    picsticky: "/images/100x.jpg",
  },

];



  const activateImage = (i, isEnteringFromBelow = false) => {
    const lastIndex = imageRefs.current.length - 1;

    imageRefs.current.forEach((img, j) => {
      if (!img) return;

      if (j === i) {
        if (j === 0) {
          gsap.set(img, { clipPath: "inset(0% 0% 0% 0%)" });
        } else if (j === lastIndex && isEnteringFromBelow) {
          gsap.set(img, { clipPath: "inset(0% 0% 0% 0%)" });
        } else {
          gsap.set(img, { clipPath: "inset(0% 100% 0% 0%)" });
          gsap.to(img, {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 0.35,
            ease: "power2.out",
          });
        }
      } else {
        if (j === 0 || j === lastIndex) {
          gsap.set(img, { clipPath: "inset(0% 0% 0% 100%)" });
        } else {
          gsap.to(img, {
            clipPath: "inset(0% 0% 0% 100%)",
            duration: 0.35,
            ease: "power2.out",
          });
        }
      }
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      imageRefs.current.forEach((img, i) => {
        gsap.set(img, {
          clipPath: i === 0 ? "inset(0% 0% 0% 0%)" : "inset(0% 0% 0% 100%)",
        });
      });
      textRefs.current.forEach((el) => {
        gsap.set(el, { autoAlpha: 1, y: 0 });
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: imageColRef.current,
        pinSpacing: false,
      });

      textRefs.current.forEach((el, i) => {
        if (!el) return;
        ScrollTrigger.create({
          trigger: el,
          start: "top 55%",
          end: "bottom 45%",
          onEnter: () => {
            gsap.set(el, { autoAlpha: 1, y: 0 });
            activateImage(i, false);
          },
          onEnterBack: () => {
            gsap.set(el, { autoAlpha: 1, y: 0 });
            activateImage(i, true);
          },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#050508] hidden md:block"
      data-navbar="light"
    >
      <div className="flex w-full">
        {/* ── LEFT: image column — pinned to viewport top ── */}
        <div
          ref={imageColRef}
          className="w-1/2 h-screen flex-shrink-0 overflow-hidden"
        >
          <div className="absolute inset-0 flex items-center justify-center p-12">
            <div className="relative w-full h-full max-w-[520px] max-h-[380px] rounded-md overflow-hidden">
              {SERVICES.map((sv, i) => (
                <img
                  key={sv.id}
                  ref={(el) => (imageRefs.current[i] = el)}
                  src={sv.picsticky}
                  alt={sv.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ willChange: "clip-path" }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT: text column — scrolls normally, determines section height ── */}
        <div className="w-1/2 flex flex-col">
          <div className="px-[7vw] mt-20">
            <h2 className="text-[clamp(40px,9vw,70px)] font-medium leading-[1.08] tracking-normal text-white mb-5">
              Our services,
              <br />
              built to deliver.
              <br />
            </h2>
          </div>

          {SERVICES.map((sv, i) => (
            <div
              key={sv.id}
              ref={(el) => (textRefs.current[i] = el)}
              className="min-h-[60vh] flex flex-col justify-center px-[7vw] py-16"
            >
              <h3
                className="text-[clamp(38px,3vw,48px)] font-medium leading-[1.08] text-white mb-5"
                style={{ fontFamily: "DisplayFont" }}
              >
                {sv.title}
              </h3>

              <p className="text-[clamp(13px,1.5vw,17px)] font-normal leading-[1.75] text-white max-w-[42ch] mb-8">
                {sv.desc}
              </p>
            </div>
          ))}

          <div className="h-[40vh]" />
        </div>
      </div>
    </section>
  );
}




// function CaseStudies() {
//   const sectionRef = useRef(null)
//   const headRef = useRef(null)
//   const gridRef = useRef(null)

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.set(headRef.current, { autoAlpha: 0, y: 28 })
//       gsap.to(headRef.current, {
//         autoAlpha: 1,
//         y: 0,
//         duration: 0.9,
//         ease: "power3.out",
//         scrollTrigger: { trigger: headRef.current, start: "top 80%", once: true },
//       })

//       // One ScrollTrigger + one staggered tween drives all cards —
//       // this avoids creating 6 separate IntersectionObservers.
//       const cards = gridRef.current.querySelectorAll(".cs2-card")
//       gsap.set(cards, { autoAlpha: 0, y: 52 })
//       gsap.to(cards, {
//         autoAlpha: 1,
//         y: 0,
//         duration: 0.75,
//         ease: "power3.out",
//         stagger: 0.1,
//         scrollTrigger: { trigger: gridRef.current, start: "top 88%", once: true },
//       })
//     }, sectionRef)

//     return () => ctx.revert()
//   }, [])

//   const cases = useMemo(() => CASE_STUDIES.slice(0, 6), [])

//   return (
//     <section data-navbar="light" ref={sectionRef} className="cs2-section">
//       <div className="cs2-inner">
//         <div ref={headRef} className="cs2-head w-screen">
//           <div className="cs2-head-row w-screen">
//             <h2 className="cs2-title">Solutions we've already shipped.</h2>
//             <div className="hidden lg:absolute lg:block right-0 w-30 h-30" aria-hidden="true">
//               <svg className="cs2-ring cs2-ring--sm" viewBox="0 0 200 200">
//                 <circle cx="100" cy="100" r="80" stroke="#C200D0" strokeWidth="12" fill="none" strokeDasharray="12 18" />
//               </svg>
//               <svg className="cs2-ring cs2-ring--lg" viewBox="0 0 200 200">
//                 <circle cx="100" cy="100" r="80" stroke="#C200D0" strokeWidth="12" fill="none" strokeDasharray="12 18" />
//               </svg>
//             </div>
//           </div>
//         </div>

//         <div className="cs2-grid" ref={gridRef}>
//           {cases.map((cs, i) => (
//             <CaseCard key={cs.id} cs={cs} index={i} />
//           ))}
//         </div>

//         <div className="cs2-footer">
//           <a href="/work" className="cs2-footer-link">
//             See all case studies
//             <span className="cs2-footer-arrow">
//               <ArrowRight size={12} />
//             </span>
//           </a>
//         </div>
//       </div>
//     </section>
//   )
// }

/* ───────────────────────── Page shell ───────────────────────── */

// The site is ALWAYS rendered (so the page HTML — what Google indexes — has
// the full home page). The preloader is an overlay on top of it, shown once
// per tab. See src/config/preloader.js for the PRELOADER_VIDEO toggle.
export default function MainWebsite() {
  const [phase, setPhase] = useState("loading")   // "loading" | "site"
  const [ready, setReady] = useState(false)        // intro video buffered
  const [loaderLeaving, setLoaderLeaving] = useState(false) // loader-only fade-out

  const finishSplash = useCallback(() => {
    sessionStorage.setItem(PRELOADER_SEEN_KEY, "true")
    setPhase("site")
    window.dispatchEvent(new Event("site-ready"))
    requestScrollRefresh() // scrollbar returns → widths change → re-measure GSAP
  }, [])

  // Returning visitors in this tab skip the intro
  useEffect(() => {
    if (sessionStorage.getItem(PRELOADER_SEEN_KEY) === "true") setPhase("site")
  }, [])

  // Block scrolling while the overlay is up — WITHOUT overflow:hidden, which
  // removes the scrollbar and makes the page jump sideways when it returns.
  // Capture-phase listeners on window run before Lenis's, and
  // stopPropagation keeps Lenis from smooth-scrolling behind the overlay.
  useEffect(() => {
    if (phase === "site") return
    const SCROLL_KEYS = new Set([" ", "PageDown", "PageUp", "ArrowDown", "ArrowUp", "Home", "End"])
    const block = (e) => {
      e.preventDefault()
      e.stopPropagation()
    }
    const onKey = (e) => { if (SCROLL_KEYS.has(e.key)) block(e) }
    const stayAtTop = () => { if (window.scrollY !== 0) window.scrollTo(0, 0) } // e.g. dragging the scrollbar
    const opts = { passive: false, capture: true }
    window.addEventListener("wheel", block, opts)
    window.addEventListener("touchmove", block, opts)
    window.addEventListener("keydown", onKey, true)
    window.addEventListener("scroll", stayAtTop)
    return () => {
      window.removeEventListener("wheel", block, opts)
      window.removeEventListener("touchmove", block, opts)
      window.removeEventListener("keydown", onKey, true)
      window.removeEventListener("scroll", stayAtTop)
    }
  }, [phase])

  // Video preloader — safety net: never stay on the loader longer than 8s
  useEffect(() => {
    if (!PRELOADER_VIDEO || phase !== "loading" || ready) return
    const t = setTimeout(() => setReady(true), 8000)
    return () => clearTimeout(t)
  }, [phase, ready])

  // No-video preloader: brief loader, quick fade, done.
  useEffect(() => {
    if (PRELOADER_VIDEO || phase !== "loading") return
    const fade = setTimeout(() => setLoaderLeaving(true), LOADER_ONLY_MS)
    const done = setTimeout(finishSplash, LOADER_ONLY_MS + LOADER_FADE_MS)
    return () => {
      clearTimeout(fade)
      clearTimeout(done)
    }
  }, [phase, finishSplash])

  // Hold back the hero videos while the overlay is up so they don't compete
  // with the intro video for bandwidth (their posters still show).
  const deferMedia = phase !== "site"

  return (
    <>
      {phase === "loading" && (
        <div data-splash>
          {PRELOADER_VIDEO ? (
            <>
              <SplashScreen onFinish={finishSplash} onReady={() => setReady(true)} play={ready} />
              {!ready && <Loader />}
            </>
          ) : (
            <div style={{ opacity: loaderLeaving ? 0 : 1, transition: `opacity ${LOADER_FADE_MS}ms ease` }}>
              <Loader />
            </div>
          )}
        </div>
      )}

      <div className="min-h-screen bg-[#050508] text-white">
      <ScrollIndicator />
      <Navbar />
      <Hero deferMedia={deferMedia} />
      <div className="hidden lg:block">
        <AlgonHero deferMedia={deferMedia} />
      </div>
      <ScrollRevealText />
      <ScrollRevealSection />
      <ServicesOverviewMain />
      <ServicesOverviewPC />
      <TestimonialCarousel />
      <CTASection />
      <Footer />
      </div>
    </>
  )
}

