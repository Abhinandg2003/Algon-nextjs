"use client";

import { useState, useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToTop from "./ScrollToTop";
import AIAssistant from "./AI/AI";

gsap.registerPlugin(ScrollTrigger);

const ENABLE_LENIS = true; // <-- turn smooth scrolling ON/OFF here

export default function AppShell({ children }) {
  const [phase, setPhase] = useState("loading");
  const lenisRef = useRef(null);

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

    const lenis = new Lenis({
      duration: 1.2,
      lerp: 0.09,
      smoothWheel: true,
      smoothTouch: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      prevent: (node) => node.closest("[data-lenis-prevent]"),
    });

    lenisRef.current = lenis;
    lenis.on("scroll", ScrollTrigger.update);

    const update = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (arguments.length) lenis.scrollTo(value);
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
    });

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
      <div className="min-h-screen flex flex-col bg-[#000000] text-[#ffffff] font-display">
        <main>{children}</main>
      </div>
    </>
  );
}
