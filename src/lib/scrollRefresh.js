import { ScrollTrigger } from "gsap/ScrollTrigger"

// One debounced ScrollTrigger.refresh() for the whole page. Images, fonts and
// route changes all shift layout; refreshing once after they settle is far
// cheaper (and less janky) than a refresh per event, which re-measures every
// pin and scrub on the page each time.
let timer = null

export function requestScrollRefresh(delay = 150) {
  if (typeof window === "undefined") return
  clearTimeout(timer)
  timer = setTimeout(() => ScrollTrigger.refresh(), delay)
}

// Kill triggers whose element has left the page (e.g. after a client-side
// route change where a component didn't clean up). Left alive, they keep
// pinning/measuring detached nodes and make the next page glitch.
export function killOrphanTriggers() {
  ScrollTrigger.getAll().forEach((t) => {
    const el = t.trigger || t.pin
    if (el && !el.isConnected) t.kill(true)
  })
}
