"use client";
import { useRef, useEffect } from "react";
import { INTRO_VIDEO } from "@/config/preloader";

// Intro video. The fade-out is handled by the overlay in MainWebsite (a
// crossfade into the site), so this just reports when it's done.
export default function SplashScreen({ onFinish, onReady, play }) {
  const videoRef = useRef(null);

  // Start playback only once the loader has been removed
  useEffect(() => {
    if (play) videoRef.current?.play().catch(() => {});
  }, [play]);

  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 9999999, background: "#131313",
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
        onError={() => { onReady?.(); onFinish(); }}   // don't hang if the file is missing
        onEnded={onFinish}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      >
        <source src={INTRO_VIDEO.mobile} media={INTRO_VIDEO.mobileQuery} type="video/mp4" />
        <source src={INTRO_VIDEO.desktop} media={INTRO_VIDEO.desktopQuery} type="video/mp4" />
      </video>

      {play && (
        <button
          onClick={onFinish}
          className="absolute bottom-[20px] left-1/2 -translate-x-1/2 rounded-full border border-white/30 text-white"
          style={{ padding: "0.4rem 1rem", cursor: "pointer" }}
        >
          Skip
        </button>
      )}
    </div>
  );
}
