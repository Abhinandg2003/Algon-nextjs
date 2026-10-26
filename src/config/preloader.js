// Home-page preloader settings.
//
// PRELOADER_VIDEO = true  → first visit in a tab plays the intro video (with Skip).
// PRELOADER_VIDEO = false → the intro video is never rendered or preloaded;
//                           a short loader shows, then fades into the site.
export const PRELOADER_VIDEO = false

// Intro video files, one per device. The breakpoint is shared by the <video>
// sources and the <link rel="preload"> tags so only one file is ever fetched.
export const INTRO_VIDEO = {
  mobile: "/algon-intro-black-mb.mp4",
  desktop: "/algon-intro-black.mp4",
  mobileQuery: "(max-width: 768px)",
  desktopQuery: "(min-width: 769px)",
}

// How long the loader shows when PRELOADER_VIDEO is false (ms).
export const LOADER_ONLY_MS = 500

// The reveal after either preloader: the overlay crossfades out over the
// already-rendered site while the hero content eases in. Ease-out curve:
// starts quickly, settles softly.
export const REVEAL_MS = 1400
export const REVEAL_EASE = "cubic-bezier(0.16, 1, 0.3, 1)"

// sessionStorage key: set after the preloader has been seen in this tab.
export const PRELOADER_SEEN_KEY = "loaded"
