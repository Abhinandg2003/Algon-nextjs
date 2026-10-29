"use client";
import { useState, useRef, useCallback, useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import ChatWidget from "./ChatWidget";
import "./AI.css";
// const sparkleIcon = "/images/sparkle.svg"; // old star icon (see the commented <img> below)
const DRAG_CLICK_THRESHOLD = 5; // px — beyond this, treat it as a drag, not a click
const EDGE_MARGIN = 30; // px — how close to the screen edge the launcher can be dragged

// Eye squares' hop: up, land, then two smaller bounces, squashing on each landing.
// y is in the SVG's own units (the icon is ~1920 units tall).
const EYE_HOP = {
  y: [0, -420, 0, -130, 0, -35, 0],
  scaleY: [1, 1.12, 0.78, 1.06, 0.9, 1.02, 1],
  scaleX: [1, 0.9, 1.2, 0.96, 1.08, 0.99, 1],
};
const EYE_HOP_TRANSITION = {
  duration: 0.9,
  times: [0, 0.28, 0.5, 0.64, 0.78, 0.89, 1],
  ease: ["easeOut", "easeIn", "easeOut", "easeIn", "easeOut", "easeIn"],
};
const EYE_DELAY = 0.06; // the second eye follows slightly behind

// Algon mark. `hop` changes on every click, which replays the eyes' bounce.
function AlgonMark({ hop }) {
  const eye = (delay) => ({
    initial: { y: 0, scaleX: 1, scaleY: 1 },
    animate: hop ? EYE_HOP : undefined, // no hop on page load
    transition: { ...EYE_HOP_TRANSITION, delay },
    style: { originY: 1 }, // squash against the "floor"
  });
  return (
    <svg viewBox="0 0 1918.55 1922.94" className="h-full w-full p-4" aria-hidden="true" overflow="visible">
      <rect y="301.28" width="301.28" height="1621.66" fill="#fff" />
      <rect x="1617.27" y="301.28" width="301.28" height="1621.66" fill="#fff" />
      <rect x="849.36" y="-464.45" width="301.28" height="1316" transform="translate(765.73 1150.64) rotate(-90)" fill="#fff" />
      <rect x="849.36" y="946.74" width="301.28" height="903.83" transform="translate(-439.38 2355.75) rotate(-90)" fill="#fff" />
      {/* Eyes: wrapped in <g> so the motion transform doesn't replace the rect's own transform */}
      <motion.g key={`l${hop}`} {...eye(0)}>
        <rect x="548.08" y="645.46" width="301.28" height="301.28" transform="translate(-138.11 1451.92) rotate(-90)" fill="#fff" />
      </motion.g>
      <motion.g key={`r${hop}`} {...eye(EYE_DELAY)}>
        <rect x="1150.64" y="645.46" width="301.28" height="301.28" transform="translate(464.45 2054.47) rotate(-90)" fill="#fff" />
      </motion.g>
    </svg>
  );
}

// ── Eyes icon ───────────────────────────────────────────────────────────────
// Idle: every few seconds both eyes glance somewhere (or back to centre); the
// pupils (with their highlights) move further inside the eyeballs. Springs give
// the slight overshoot + jiggle. Click: a blink — eyeballs squash vertically to
// their centre (width unchanged) and pop back with a bounce.
const LOOK_EYE = 140 // how far the whole eye shifts (SVG units; one eye is ~593 wide)
const LOOK_PUPIL = 40 // how far the pupil travels inside the eyeball (max ~164)
const LOOK_EVERY = [1800, 4500] // ms between glances (random in this range)
const LOOK_CENTER_CHANCE = 0.35 // chance a glance returns to looking straight ahead
const LOOK_SPRING = { type: "spring", stiffness: 170, damping: 15, mass: 0.8 }
const BLINK = {
  scaleY: [1, 0.06, 1.12, 0.95, 1.02, 1],
  transition: { duration: 0.65, times: [0, 0.3, 0.55, 0.72, 0.86, 1], ease: ["easeIn", "easeOut", "easeInOut", "easeInOut", "easeOut"] },
}

const EYES = [
  { cx: 296.63, hx: 367.63 },
  { cx: 1268.82, hx: 1339.82 },
]

function EyesMark({ hop }) {
  const [look, setLook] = useState({ x: 0, y: 0 }) // -1..1 direction

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: no-preference)").matches) return
    let t
    const next = () => {
      const [min, max] = LOOK_EVERY
      t = setTimeout(() => {
        if (Math.random() < LOOK_CENTER_CHANCE) setLook({ x: 0, y: 0 })
        else {
          const a = Math.random() * Math.PI * 2
          const d = 0.6 + Math.random() * 0.4
          setLook({ x: Math.cos(a) * d, y: Math.sin(a) * d })
        }
        next()
      }, min + Math.random() * (max - min))
    }
    next()
    return () => clearTimeout(t)
  }, [])

  return (
    <svg viewBox="0 0 1565.45 593.26" className="h-full w-full p-2" aria-hidden="true" overflow="visible">
      {EYES.map(({ cx, hx }) => (
        <motion.g key={cx} animate={{ x: look.x * LOOK_EYE, y: look.y * LOOK_EYE }} transition={LOOK_SPRING}>
          {/* Blink: keyed on the click count so each click replays it */}
          <motion.g
            key={hop}
            initial={{ scaleY: 1 }}
            animate={hop ? { scaleY: BLINK.scaleY } : undefined}
            transition={BLINK.transition}
          >
            <circle cx={cx} cy="296.63" r="296.63" fill="#fff" />
            {/* Pupil + highlight move together */}
            <motion.g animate={{ x: look.x * LOOK_PUPIL, y: look.y * LOOK_PUPIL }} transition={{ ...LOOK_SPRING, stiffness: 150 }}>
              <circle cx={cx} cy="296.63" r="132.14" fill="#1d1d1b" />
              <circle cx={hx} cy="225.63" r="50.94" fill="#fff" />
            </motion.g>
          </motion.g>
        </motion.g>
      ))}
    </svg>
  )
}

// ── Logo icon ───────────────────────────────────────────────────────────────
// Click: a card flip — half a turn (180°) around the vertical axis per click,
// so opening flips it over and closing flips it back, while it scales up a
// little and back.
const LOGO_ICON = "/images/algon-a.png"
const FLIP_DEG = 180 // turn per click
const FLIP_SCALE = 1.15 // size at the middle of the flip
// Ease-out: moves straight away on click, then settles slowly. (An ease-in-out
// barely moves for the first ~0.2s, which reads as a delay after the click.)
const FLIP_TRANSITION = { duration: 1.1, ease: [0.22, 1, 0.36, 1] }

function LogoMark({ hop }) {
  const [scope, animate] = useAnimate()

  // Each click adds another 180°, so it always continues the same way
  useEffect(() => {
    if (!hop) return // no flip on page load
    animate(scope.current, { rotateY: hop * FLIP_DEG, scale: [1, FLIP_SCALE, 1] }, FLIP_TRANSITION)
  }, [hop, animate, scope])

  return (
    // perspective on the parent gives the flip its 3D depth
    <div className="flex h-full w-full items-center justify-center p-3" style={{ perspective: 400 }}>
      <motion.img
        ref={scope}
        src={LOGO_ICON}
        alt=""
        aria-hidden="true"
        draggable={false}
        className="h-full w-full object-contain"
      />
    </div>
  )
}

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [hop, setHop] = useState(0); // click count, replays the eye bounce
  const [rect, setRect] = useState(null); // launcher's live bounding box
  const launcherRef = useRef(null);
  const constraintsRef = useRef(null); // invisible full-viewport box, inset by EDGE_MARGIN
  const dragDistanceRef = useRef(0);

  const measure = useCallback((el) => {
    if (!el) return;
    setRect(el.getBoundingClientRect());
  }, []);

  const setLauncherRef = useCallback(
    (el) => {
      launcherRef.current = el;
      measure(el);
    },
    [measure]
  );

  const updateRect = useCallback(() => {
    measure(launcherRef.current);
  }, [measure]);

  useEffect(() => {
    window.addEventListener("resize", updateRect);
    window.addEventListener("scroll", updateRect, true);
    return () => {
      window.removeEventListener("resize", updateRect);
      window.removeEventListener("scroll", updateRect, true);
    };
  }, [updateRect]);

  // Reset on every pointerdown — this fires for BOTH a plain click and the
  // start of a drag, unlike onDragStart which only fires once Framer's own
  // drag-recognition threshold is crossed. Without this, a stale non-zero
  // value from a past drag would permanently block all future clicks.
  const handlePointerDown = useCallback(() => {
    dragDistanceRef.current = 0;
  }, []);

  const handleDrag = useCallback(
    (e, info) => {
      const dist = Math.hypot(info.offset.x, info.offset.y);
      if (dist > dragDistanceRef.current) dragDistanceRef.current = dist;
      updateRect();
    },
    [updateRect]
  );

  const handleButtonClick = useCallback(() => {
    if (dragDistanceRef.current > DRAG_CLICK_THRESHOLD) return;
    setOpen((o) => !o);
    setHop((h) => h + 1);
  }, []);

  return (
    <>
      {/* Invisible bounding box the launcher is dragged within. Fixed,
          inset by EDGE_MARGIN on every side, and click-through so it never
          blocks anything underneath it. */}
      <div
        ref={constraintsRef}
        style={{
          position: "fixed",
          inset: EDGE_MARGIN,
          pointerEvents: "none",
          zIndex: 999,
        }}
      />

      <motion.div
        ref={setLauncherRef}
        drag
        dragMomentum={false}
        dragConstraints={constraintsRef}
        dragElastic={0}
        onPointerDown={handlePointerDown}
        onDrag={handleDrag}
        onDragEnd={updateRect}
        className="ai-launcher"
        style={{ zIndex: 999999 }}
      >
        <button
          className="ai-button"
          onClick={handleButtonClick}
          aria-label={open ? "Close AI assistant" : "Open AI assistant"}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            className="ai-video"
          >
            <source src="/videos/ai-video-mayamblue2.mp4" type="video/mp4" />
          </video>

          <div className="sparkle">
            <LogoMark hop={hop} />
            {/* Previous icons, kept to switch back: */}
            {/* <EyesMark hop={hop} /> */}
            {/* <AlgonMark hop={hop} /> */}
          </div>

          {/* Old star icon, rotated -90° while open. To bring it back, swap it
              in for the <div> above and uncomment sparkleIcon at the top.
          <motion.div
            className="sparkle"
            animate={{
              rotate: open ? -90 : 0,
            }}
            transition={{
              duration: .45,
              ease: [0.25,1,0.5,1]
            }}
          >
            <img src={sparkleIcon} alt="" aria-hidden="true" decoding="async" className="sparkle-icon p-3" />
          </motion.div>
          */}
        </button>
      </motion.div>

      <ChatWidget open={open} anchorRect={rect} />
    </>
  );
}