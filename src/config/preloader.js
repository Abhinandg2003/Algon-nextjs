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

// How long the loader shows when PRELOADER_VIDEO is false (ms), plus its fade.
export const LOADER_ONLY_MS = 500
export const LOADER_FADE_MS = 400

// sessionStorage key: set after the preloader has been seen in this tab.
export const PRELOADER_SEEN_KEY = "loaded"
