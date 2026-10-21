"use client";

const PATTERN = "===+++---===+++---"; // 18 chars = one full cycle
const ADVANCE = "(1ch + 0.25em)";     // one character + its letter-spacing

export default function Loader() {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-[#131313]"
      style={{ zIndex: 99999999 }}
    >
      <span
        className="loader-window select-none text-white/70"
        style={{ fontSize: "clamp(14px, 2vw, 20px)" }}
      >
        <span className="loader-track">{PATTERN + PATTERN}</span>
      </span>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');
        .loader-window {
          display: inline-block;
          width: calc(10 * ${ADVANCE});
          overflow: hidden;
          white-space: nowrap;
          font-family: 'Space Mono', monospace;
          letter-spacing: 0.25em;
        }
        .loader-track {
          display: inline-block;
          animation: loader-slide 1.44s steps(18) infinite; /* 18 ticks x 80ms, same as before */
        }
        @keyframes loader-slide {
          to { transform: translateX(calc(-18 * ${ADVANCE})); }
        }
      `}</style>
    </div>
  );
}