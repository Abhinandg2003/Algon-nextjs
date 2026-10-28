"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

// ─────────────────────────────────────────────────────────────────────────
// Desktop sticky overview: text on the LEFT, pinned images on the RIGHT,
// progress squares between them. Used by the home page ("Our services, built
// to deliver") and the Solutions page ("Four tracks, one company").
//   items:   [{ id, title, desc, picsticky }]
//   heading: the section heading (JSX, so it can include <br />)
// ─────────────────────────────────────────────────────────────────────────

// Progress squares between the two columns
const PROGRESS_SQUARES = 40;      // how many squares span the bar
const PROGRESS_ON = "#265eed";    // lit (brand colour)
const PROGRESS_OFF = "#222";      // not yet reached
const PROGRESS_FADE = true;       // true = squares fade to the new colour, false = instant switch

export default function StickyOverviewPC({ items, heading }) {
  const sectionRef = useRef();
  const imageColRef = useRef();
  const progressDotRefs = useRef([]);
  const imageRefs = useRef([]);
  const textRefs = useRef([]);

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
      // Text items rest at 20% opacity; the one in the middle of the screen
      // eases up to full and back down as it enters / leaves.
      const DIM = 0.2;
      textRefs.current.forEach((el) => {
        gsap.set(el, { autoAlpha: DIM, y: 0 });
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: imageColRef.current,
        pinSpacing: false,
      });

      // Progress squares: light up top → bottom across the section's scroll.
      // Only touches the DOM when the number of lit squares changes.
      let lit = -1;
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          const next = Math.round(self.progress * PROGRESS_SQUARES);
          if (next === lit) return;
          lit = next;
          progressDotRefs.current.forEach((d, i) => {
            if (d) d.style.backgroundColor = i < lit ? PROGRESS_ON : PROGRESS_OFF;
          });
        },
      });

      textRefs.current.forEach((el, i) => {
        if (!el) return;
        ScrollTrigger.create({
          trigger: el,
          start: "top 55%",
          end: "bottom 45%",
          onEnter: () => activateImage(i, false),
          onEnterBack: () => activateImage(i, true),
          onToggle: (self) =>
            gsap.to(el, {
              autoAlpha: self.isActive ? 1 : DIM,
              duration: 0.6,
              ease: "power2.out",
              overwrite: true,
            }),
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
        {/* ── LEFT: text column — scrolls normally, determines section height ── */}
        <div className="w-1/2 flex flex-col">
          <div className="px-[7vw] mt-20">
            <h2 className="text-[clamp(40px,9vw,70px)] font-light leading-[1.08] tracking-normal text-white mb-5">
              {heading}
            </h2>
          </div>

          {items.map((item, i) => (
            <div
              key={item.id}
              ref={(el) => (textRefs.current[i] = el)}
              className="min-h-[60vh] flex flex-col justify-center px-[7vw] py-16"
            >
              <h3
                className="text-[clamp(38px,3vw,48px)] font-light leading-[1.08] text-white mb-5"
                style={{ fontFamily: "DisplayFont" }}
              >
                {item.title}
              </h3>

              <p className="text-[clamp(13px,1.5vw,17px)] font-light leading-[1.75] text-white max-w-[42ch] mb-8">
                {item.desc}
              </p>
            </div>
          ))}

          <div className="h-[40vh]" />
        </div>

        {/* ── RIGHT: image column — pinned to viewport top ──
            `relative` so the centred image box sits inside this column. */}
        <div
          ref={imageColRef}
          className="relative w-1/2 h-screen flex-shrink-0 overflow-hidden"
        >
          {/* Progress: a column of 3×3px squares on this column's left edge
              (= the centre of the screen), spread over the image box's height
              (380px, or less on short screens). They turn brand colour from
              the top as the section scrolls; see PROGRESS_* above the component. */}
          <div
            aria-hidden="true"
            className="absolute left-0 top-1/2 -translate-y-1/2 h-[min(calc(100vh-6rem),380px)] flex flex-col justify-between"
          >
            {Array.from({ length: PROGRESS_SQUARES }, (_, i) => (
              <span
                key={i}
                ref={(el) => (progressDotRefs.current[i] = el)}
                className={`block w-[3px] h-[3px] ${PROGRESS_FADE ? " ease-out" : ""}`}
                style={{ backgroundColor: PROGRESS_OFF }}
              />
            ))}
          </div>

          <div className="absolute inset-0 flex items-center justify-center p-12">
            <div className="relative w-full h-full max-w-[520px] max-h-[380px] rounded-md overflow-hidden">
              {items.map((item, i) => (
                <img
                  key={item.id}
                  ref={(el) => (imageRefs.current[i] = el)}
                  src={item.picsticky}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ willChange: "clip-path" }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
