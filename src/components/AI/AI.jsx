"use client";
import { useState, useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import ChatWidget from "./ChatWidget";
import "./AI.css";
const sparkleIcon = "/images/sparkle.svg";
const DRAG_CLICK_THRESHOLD = 5; // px — beyond this, treat it as a drag, not a click
const EDGE_MARGIN = 30; // px — how close to the screen edge the launcher can be dragged

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
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
        </button>
      </motion.div>

      <ChatWidget open={open} anchorRect={rect} />
    </>
  );
}