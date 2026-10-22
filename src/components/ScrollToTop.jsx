"use client";
import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { scrollToElement, targetFromHash } from "@/lib/smoothScroll"

const ScrollToTop = ({ lenisRef }) => {
  const pathname = usePathname()

  useEffect(() => {
    // Arriving with a hash (e.g. a shared /healthcare/...#svp-contact link):
    // go to that section instead of resetting to the top.
    const target = targetFromHash(window.location.hash)
    if (target) {
      scrollToElement(target, lenisRef?.current, { immediate: true })
      return
    }

    if (lenisRef?.current) {
      // 🔥 reset scroll using Lenis
      lenisRef.current.scrollTo(0, { immediate: true })
    } else {
      // fallback
      window.scrollTo(0, 0)
    }
  }, [pathname, lenisRef])

  return null
}

export default ScrollToTop
