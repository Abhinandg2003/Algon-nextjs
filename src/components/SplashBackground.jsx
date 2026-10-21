"use client";
export default function SplashBackground() {
  return (
    <div
      className="fixed inset-0  pointer-events-none"
      style={{
        zIndex:9999999,
        background: `
          radial-gradient(
            circle at 50% 100%,
            rgba(80,120,255,0.18) 0%,
            rgba(15,15,25,0.85) 35%,
            rgba(5,5,8,0.95) 70%,
            #050508 100%
          )
        `,
      }}
    />
  )
}