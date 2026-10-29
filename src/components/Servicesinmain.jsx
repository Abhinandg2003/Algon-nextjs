"use client";
// ServicesSection.jsx
//
// ServicesOverviewMain — short, pinned "sticky reveal": the heading sits
// in place (no entrance animation, it's just there) while each service's
// title + description fades up into view underneath it, one after
// another, as the user scrolls. The whole reveal is deliberately
// compressed into a SHORT scroll distance (~90% of one viewport) so the
// user barely has to scroll before everything's visible — then the
// section unpins and scrolls away normally.
//
// ServicesOverviewPC — unchanged: the SolOverviewpc-style pinned
// image-crop swap, columns swapped (image left, text right).
//
// All custom CSS has been converted to inline Tailwind utility classes —
// no local STYLES constant / <style> tag anymore, no other logic changed.
// ─────────────────────────────────────────────────────────────────────────
 
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
 
// ── Placeholder data — swap with your real services content/images ────────
const SERVICES = [
  {
    id: "01",
    title: "Hospital Management Systems",
    desc: "Hospital operating systems and clinic automation, from front desk to discharge and follow-up.",
    accent: "#666",
    bg: "#0f0f14",
    pic: "/images/services/service-1.png",
    picsticky: "/images/services/service-1-sticky.png",
  },
  {
    id: "02",
    title: "AI & Automation",
    desc: "AI agents, n8n workflows, and RAG grounded in your own data.",
    accent: "#666",
    bg: "#0f0f14",
    pic: "/images/services/service-2.png",
    picsticky: "/images/services/service-2-sticky.png",
  },
  {
    id: "03",
    title: "Managed Engineering",
    desc: "A dedicated team for a defined project: architects, developers, QA, DevOps, and a project lead.",
    accent: "#666",
    bg: "#0f0f14",
    pic: "/images/services/service-3.png",
    picsticky: "/images/services/service-3-sticky.png",
  },
  {
    id: "04",
    title: "Web & SaaS Development",
    desc: "Web apps, SaaS platforms, and MVPs built around how your business runs.",
    accent: "#666",
    bg: "#0f0f14",
    pic: "/images/services/service-4.png",
    picsticky: "/images/services/service-4-sticky.png",
  },
];
 
// ─────────────────────────────────────────────────────────────────────────
// MOBILE — pinned, short sticky reveal (heading static, items fade up)
// ─────────────────────────────────────────────────────────────────────────
export function ServicesOverviewMain() {
  const ref = useRef();
  const itemRefs = useRef([]);
  itemRefs.current = [];
 
  const addItemRef = (el) => {
    if (el && !itemRefs.current.includes(el)) itemRefs.current.push(el);
  };
 
  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = itemRefs.current;
 
      // Items start hidden, offset below — heading needs no entrance
      // animation, it's simply in place the moment the section pins.
      gsap.set(items, { autoAlpha: 0, y: 44 });
 
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: "+=90%", // short — barely any scrolling required
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
 
      // Stagger each item's fade-up in quick succession so the whole
      // list is fully revealed well before the pin distance runs out —
      // by the time the user's scrolled through it, everything's visible.
      items.forEach((el, i) => {
        tl.to(
          el,
          { autoAlpha: 1, y: 0, duration: 0.22, ease: "power3.out" },
          i * 0.2,
        );
      });
    }, ref);
    return () => ctx.revert();
  }, []);
 
  return (
    <section
      ref={ref}
      className="relative h-screen bg-[#fcfcf7] overflow-hidden flex-col justify-center px-[7vw] block md:hidden"
      data-navbar="dark"
    >
      <div className="relative z-[1]">
        <div className="mb-[24px] mt-[11vh]">
          <h2 className="text-[clamp(40px,7vw,58px)] font-normal leading-[1.05] tracking-[-0.03em] text-[#0f0f0f] m-0">
            Our services.
            <br />
            Built to deliver.
          </h2>
        </div>
        <div className="flex flex-col gap-[18px]">
          {SERVICES.map((sv, i) => (
            <div
              key={sv.id}
              ref={addItemRef}
              className="flex flex-col gap-[2px] sm:flex-row sm:items-baseline sm:gap-[20px]  pt-[10px] [will-change:opacity,transform]"
            >
              
              <div>
                <div className="flex justify-between">
                    <div>
                <h3 className="text-[clamp(24px,4vw,24px)] tracking-[-0.01em] text-[#0f0f0f] mt-0 mb-[4px]">
                  {sv.title}
                </h3>
                </div>
                {/* <div className="text-[20px] font-bold opacity-40 tracking-[0.08em] mb-2 text-[#000] flex-shrink-0 w-[24px]">
                {sv.id}
              </div> */}
                </div>
                <p className="text-[18px] mt-1 leading-[1.3] font-light text-[#000] m-0 ">
                  {sv.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}