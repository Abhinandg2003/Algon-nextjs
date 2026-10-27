"use client"
import { useEffect, useRef, useState } from "react"
import { HeroHeading } from "./heroParts"

// Variant "banner": minimal 60vh hero — a full-width image with the heading
// inside it, nothing else.
//
// Entrance (once the image has loaded, so it never animates an empty box):
//   - fades up from black (the section background is near-black)
//   - settles from 130% to 100% height, anchored top-centre. Height only:
//     scaleY, so width is untouched and the aspect isn't locked.
// Both run on the same ease-out curve; see .svp-hero--banner in servicepage.css.
export default function HeroBanner({ heading, hero, image }) {
  const { imageAlt } = hero
  const imgRef = useRef(null)
  const [ready, setReady] = useState(!image)

  // A cached image can finish loading before React attaches onLoad
  useEffect(() => {
    if (imgRef.current?.complete) setReady(true)
  }, [])

  return (
    <section data-navbar="light" className={`svp-dark svp-hero--banner ${ready ? "is-ready" : ""}`}>
      {image && (
        <div className="svp-hero-banner-media" aria-hidden={imageAlt ? undefined : "true"}>
          <img
            ref={imgRef}
            src={image}
            alt={imageAlt || ""}
            fetchPriority="high"
            decoding="async"
            onLoad={() => setReady(true)}
            onError={() => setReady(true)}
          />
        </div>
      )}
      {/* <div className="svp-hero-banner-shade" aria-hidden="true" /> */}

      <div className="svp-inner svp-hero-banner-content">
        <HeroHeading heading={heading} className="max-w-[18ch]" />
      </div>
    </section>
  )
}
