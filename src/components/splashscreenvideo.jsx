"use client";
import { useState, useRef, useEffect } from "react";
import { INTRO_VIDEO } from "@/config/preloader";

export default function SplashScreen({ onFinish, onReady, play }) {
  const [fadingOut, setFadingOut] = useState(false);
  const videoRef = useRef(null);

  // Start playback only once the loader has been removed
  useEffect(() => {
    if (play) videoRef.current?.play().catch(() => {});
  }, [play]);

  const handleEnd = () => {
    setFadingOut(true);
    setTimeout(onFinish, 1200);
  };

  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 9999999, background: "#131313",
        opacity: fadingOut ? 0 : 1, transition: "opacity 1.2s ease",
        pointerEvents: fadingOut ? "none" : "all",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}
    >
      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        onCanPlayThrough={onReady}
        onError={() => { onReady?.(); handleEnd(); }}   // don't hang if the file is missing
        onEnded={handleEnd}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      >
        <source src={INTRO_VIDEO.mobile} media={INTRO_VIDEO.mobileQuery} type="video/mp4" />
        <source src={INTRO_VIDEO.desktop} media={INTRO_VIDEO.desktopQuery} type="video/mp4" />
      </video>

      {play && (
        <button
          onClick={handleEnd}
          className="absolute bottom-[20px] left-1/2 -translate-x-1/2 rounded-full border border-white/30 text-white"
          style={{ padding: "0.4rem 1rem", cursor: "pointer" }}
        >
          Skip
        </button>
      )}
    </div>
  );
}
