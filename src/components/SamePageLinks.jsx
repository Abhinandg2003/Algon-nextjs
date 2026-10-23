"use client"
import { useEffect } from "react"
import { requestScrollRefresh } from "@/lib/scrollRefresh"

// Clicking a link to the page you're already on (e.g. a navbar item for the
// current service page) makes Next.js re-navigate to the same URL: it
// re-renders and jumps the scroll natively, behind Lenis's back, while the
// pathname stays the same — so no route-change cleanup runs and pinned GSAP
// sections are left measured for the old position (stray black/white boxes).
//
// Instead: cancel that navigation and jump to the top like a refresh.
//
// Runs in the capture phase so it sees the click before next/link does.
// next/link still calls the link's own onClick (menus close as normal), then
// skips navigating because the event is already defaultPrevented.
export default function SamePageLinks({ lenisRef }) {
  useEffect(() => {
    const onClick = (e) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const a = e.target.closest?.("a[href]")
      if (!a || (a.target && a.target !== "_self") || a.hasAttribute("download")) return

      const url = new URL(a.href, window.location.href)
      const samePage =
        url.origin === window.location.origin &&
        url.pathname === window.location.pathname &&
        url.search === window.location.search
      if (!samePage || url.hash) return // #section links are handled by SmoothAnchors

      e.preventDefault()

      // A full-screen menu locks the page (body position:fixed) and restores
      // the old scroll position as it closes; wait for that, then jump.
      let frames = 0
      const jump = () => {
        if (document.body.style.position === "fixed" && frames++ < 60) {
          requestAnimationFrame(jump)
          return
        }
        const lenis = lenisRef.current
        if (lenis) lenis.scrollTo(0, { immediate: true, force: true })
        else window.scrollTo(0, 0)
        // Drop a leftover #hash (e.g. /page#svp-contact → /page)
        if (window.location.hash) window.history.replaceState(window.history.state, "", url.pathname + url.search)
        requestScrollRefresh(0)
      }
      requestAnimationFrame(jump)
    }

    document.addEventListener("click", onClick, true)
    return () => document.removeEventListener("click", onClick, true)
  }, [lenisRef])

  return null
}
