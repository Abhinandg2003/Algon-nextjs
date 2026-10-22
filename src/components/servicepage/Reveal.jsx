"use client"
import { useEffect } from "react"

// Fades .svp-reveal elements in as they scroll into view. The hidden state
// only applies once this runs (it adds .svp-js to the page root), so content
// is fully visible to crawlers and to visitors without JavaScript.
export default function Reveal({ rootId }) {
  useEffect(() => {
    const root = document.getElementById(rootId)
    if (!root) return
    root.classList.add("svp-js")

    const els = root.querySelectorAll(".svp-reveal")
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in")
            io.unobserve(e.target)
          }
        })
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [rootId])

  return null
}
