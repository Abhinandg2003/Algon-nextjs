"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { killOrphanTriggers, requestScrollRefresh } from "@/lib/scrollRefresh";
import ScrollToTop from "./ScrollToTop";
import SmoothAnchors from "./SmoothAnchors";
import AIAssistant from "./AI/AI";

gsap.registerPlugin(ScrollTrigger);

const ENABLE_LENIS = true; // <-- turn smooth scrolling ON/OFF here

export default function AppShell({ children }) {
  const [phase, setPhase] = useState("loading");
  const lenisRef = useRef(null);
  const pathname = usePathname();

  // Client-side route change: GSAP state from the previous page must not leak
  // into the next one. Children's effects (the new page's triggers) run before
  // this parent effect, so by now the new triggers exist; drop any left over
  // from unmounted components, then re-measure once layout and fonts settle.
  useEffect(() => {
    killOrphanTriggers();
    let raf2;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => requestScrollRefresh(0));
    });
    document.fonts?.ready.then(() => requestScrollRefresh());
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, [pathname]);

  useEffect(() => {
    const timer = setTimeout(() => setPhase("site"), 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (phase === "site") {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }
  }, [phase]);

  // Init Lenis AFTER the splash phase ends
  useEffect(() => {
    if (phase !== "site") return;

    if (!ENABLE_LENIS) {
      ScrollTrigger.refresh();
      return;
    }

    // Touch devices keep native scrolling (syncTouch defaults to false):
    // smoothed touch scrolling is the usual source of jank with pinned
    // ScrollTriggers on phones. (The old `smoothTouch` option doesn't exist
    // in this Lenis version and was being ignored.)
    const lenis = new Lenis({
      lerp: 0.12, // takes precedence over `duration` for wheel smoothing
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      prevent: (node) => node.closest("[data-lenis-prevent]"),
    });

    lenisRef.current = lenis;

    // Standard Lenis + ScrollTrigger wiring: Lenis scrolls the window, so
    // ScrollTrigger reads the real scroll position and only needs a nudge on
    // each Lenis frame. (A scrollerProxy on <body> isn't needed — no trigger
    // uses body as its scroller — so it was removed.)
    lenis.on("scroll", ScrollTrigger.update);
    const update = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
      gsap.ticker.remove(update);
      lenisRef.current = null;
    };
  }, [phase]);

  return (
    <>
      <AIAssistant />
      <ScrollToTop lenisRef={lenisRef} />
      <SmoothAnchors lenisRef={lenisRef} />
      <div className="min-h-screen flex flex-col bg-[#000000] text-[#ffffff] font-display">
        <main>{children}</main>
      </div>
    </>
  );
}
