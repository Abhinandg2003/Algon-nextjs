// Smooth scrolling to in-page sections (#svp-contact etc.) that cooperates
// with Lenis. Lenis 1.0.x has no built-in anchor support, and a native hash
// jump bypasses its animation and leaves its internal position out of sync.

const FALLBACK_NAV_HEIGHT = 72

// Height of the fixed site navbar, so targets don't land underneath it.
export function headerOffset() {
  const nav = document.querySelector("[data-site-nav]")
  if (!nav) return FALLBACK_NAV_HEIGHT
  const { position } = getComputedStyle(nav)
  return position === "fixed" || position === "sticky" ? nav.getBoundingClientRect().height : 0
}

export function targetFromHash(hash) {
  if (!hash || hash.length < 2) return null
  try {
    return document.getElementById(decodeURIComponent(hash.slice(1)))
  } catch {
    return null // malformed %-encoding
  }
}

// Scroll so `el` sits just below the navbar. Uses Lenis when it's running,
// native smooth scrolling before it starts (e.g. during the splash phase).
export function scrollToElement(el, lenis, { immediate = false } = {}) {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  const instant = immediate || reduceMotion
  const offset = -headerOffset()

  // Lazy images above the target can load mid-animation and push it down;
  // re-check once the scroll ends and correct any drift.
  const settle = () => {
    const drift = el.getBoundingClientRect().top + offset
    if (Math.abs(drift) <= 2) return
    if (lenis) lenis.scrollTo(el, { offset, immediate: true, force: true })
    else window.scrollBy(0, drift)
  }

  if (lenis) {
    lenis.scrollTo(el, { offset, immediate: instant, force: true, onComplete: settle })
  } else {
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY + offset,
      behavior: instant ? "auto" : "smooth",
    })
  }
}

// Keyboard users should continue tabbing from the section they jumped to.
export function focusTarget(el) {
  if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "-1")
  el.focus({ preventScroll: true })
}
