"use client"
import { useEffect } from "react"
import { focusTarget, scrollToElement, targetFromHash } from "@/lib/smoothScroll"

// Site-wide handler for same-page anchor links (<a href="#svp-contact">):
// smooth-scrolls with Lenis instead of the browser's instant hash jump.
// Delegated on document, so any page's anchors work without extra wiring.
export default function SmoothAnchors({ lenisRef }) {
  useEffect(() => {
    const onClick = (e) => {
      // Leave modified clicks, new tabs, downloads and already-handled clicks alone
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const a = e.target.closest?.("a[href]")
      if (!a || (a.target && a.target !== "_self") || a.hasAttribute("download")) return

      const url = new URL(a.href, window.location.href)
      const samePage = url.origin === window.location.origin && url.pathname === window.location.pathname
      if (!samePage || !url.hash || url.hash === "#") return

      const el = targetFromHash(url.hash)
      if (!el) return // unknown id: let the browser do whatever it normally would

      // A full-screen menu has locked the page (body is position:fixed);
      // scrolling now would be undone when the menu restores its position.
      if (document.body.style.position === "fixed") return

      e.preventDefault()
      scrollToElement(el, lenisRef.current)
      // Keep the URL shareable without adding a history entry per click.
      // Passing history.state keeps Next.js router state intact.
      window.history.replaceState(window.history.state, "", url.hash)
      if (e.detail === 0) focusTarget(el) // keyboard activation (Enter) only
    }

    document.addEventListener("click", onClick)
    return () => document.removeEventListener("click", onClick)
  }, [lenisRef])

  return null
}
