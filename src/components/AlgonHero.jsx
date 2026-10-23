"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VIDEO_SRC = "/videos/hitech.mp4";
// First frame of VIDEO_SRC, shown until the video can play
const VIDEO_POSTER = "/images/posters/hitech.webp";

function getMaskSrc() {
  return window.innerWidth < 640
    ? "/images/mask-sm.webp"
    : "/images/maskhi.webp";
}

// deferMedia: true while the home preloader overlay is up — the video stays
// idle (poster shows) so the intro video gets the bandwidth.
export default function AlgonHero({ deferMedia = false }) {
  const sectionRef = useRef(null);
  const stickyRef  = useRef(null);
  const whiteBgRef = useRef(null);
  const maskRef    = useRef(null);
  const videoRef   = useRef(null);

  const [height, setHeight] = useState("350vh");
  useEffect(() => {
    const update = () => setHeight(window.innerWidth < 640 ? "150vh" : "350vh");
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Server render has no window: start with the desktop mask (this hero is
  // desktop-only anyway) and correct it after mount.
  const [maskSrc, setMaskSrc] = useState("/images/maskhi.webp");

  useEffect(() => {
    const handleResize = () => {
      setMaskSrc(getMaskSrc());
      ScrollTrigger.refresh(); // 🔥 important
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Start the video once the preloader is gone
  useEffect(() => {
    if (deferMedia) return;
    const video = videoRef.current;
    if (!video) return;
    if (video.readyState === 0) video.load();
    video.play().catch(() => {});
  }, [deferMedia]);

  useEffect(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger    : sectionRef.current,
        start      : "top top",
        end        : "+=200%",
        scrub      : true,
        pin        : stickyRef.current,
        pinSpacing : false,
      },
    });

    // Phase A — white fades out
    tl.to(whiteBgRef.current, {
      opacity  : 0,
      ease     : "power1.inOut",
      duration : 0.3,
    }, 0);

    // Phase B — zoom mask
    tl.to(maskRef.current, {
      scale    : 12,
      ease     : "power3.in",
      duration : 0.55,
    }, 0.3);

    // Phase C — fade mask
    tl.to(maskRef.current, {
      opacity  : 0,
      ease     : "none",
      duration : 0.5,
    }, 0.6);

    // Phase D — HOLD
    tl.to({}, {
      duration: 0.6,
    });

    return () => {
      // Kill only this hero's timeline + trigger. (Killing ScrollTrigger.getAll()
      // here also destroyed the next page's pins on client-side navigation.)
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <>
      <style>{`
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        html, body { background: #000; }
      `}</style>

      <div ref={sectionRef} style={{ height: height }}>

        <div
          ref={stickyRef}
          className="sticky top-0 w-full h-screen overflow-hidden bg-black"
        >

          {/* Video */}
          <video
          style={{
  transform: "translateZ(0)",
  willChange: "transform, opacity",
  backfaceVisibility: "hidden"
}}
          preload={deferMedia ? "none" : "auto"}
            ref={videoRef}
            src={VIDEO_SRC}
            poster={VIDEO_POSTER}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay={!deferMedia}
            loop
            muted
            playsInline
            aria-hidden="true"
          />

          {/* White overlay */}
          <div
            ref={whiteBgRef}
            className="absolute inset-0 bg-white"
            style={{ zIndex: 10 }}
          />

          {/* Responsive mask */}
          <img
            ref={maskRef}
            src={maskSrc}
            alt=""
            aria-hidden="true"
            fetchPriority="high"
            className="absolute inset-0 w-full h-full object-cover"

            style={{
              zIndex          : 20,
              transformOrigin : "center center",
              willChange      : "transform, opacity",
                transform: "translateZ(0)",
  backfaceVisibility: "hidden"
            }}
          />

        </div>
      </div>

      {/* Next section */}
     
    </>
  );
}