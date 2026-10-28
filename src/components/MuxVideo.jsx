"use client"
import { useCallback, useEffect, useRef } from "react"

// ─────────────────────────────────────────────────────────────────────────────
// <video> that streams a Mux video as adaptive HLS: the quality follows each
// visitor's connection and screen size, like webandcrafts.com.
//
// - Chrome / Edge / Firefox / desktop Safari: hls.js (loaded only when needed),
//   with the buffer capped at BUFFER_SECONDS.
// - Browsers without Media Source support (older iPhones): the built-in HLS
//   player, which manages its own buffer.
// - If the stream fails, it falls back to `fallbackSrc` (a local file).
//
// It renders a normal <video>, so refs, play()/pause(), readyState and the
// "loadeddata" event work exactly as before. preload="none" holds back all
// downloading; switching it to "metadata"/"auto" starts loading.
// ─────────────────────────────────────────────────────────────────────────────

const BUFFER_SECONDS = 3 // how far ahead it downloads (3 = less data, 6 = safer on patchy connections)
const START_ESTIMATE = 5_000_000 // assumed bandwidth (bits/s) before the first measurement → starts sharp, then adapts

export const muxStream = (id) => `https://stream.mux.com/${id}.m3u8`
export const muxPoster = (id, time = 0) => `https://image.mux.com/${id}/thumbnail.webp?time=${time}`

export default function MuxVideo({ playbackId, fallbackSrc, preload = "auto", autoPlay, ref, ...props }) {
  const videoRef = useRef(null)
  const hlsRef = useRef(null)
  const nativeRef = useRef(false)

  // Hand the <video> element to the parent's ref too
  const setRefs = useCallback(
    (el) => {
      videoRef.current = el
      if (typeof ref === "function") ref(el)
      else if (ref) ref.current = el
    },
    [ref],
  )

  // Latest preload value, read when hls.js finishes loading (after an await)
  const preloadRef = useRef(preload)
  useEffect(() => {
    preloadRef.current = preload
  }, [preload])

  // Attach the stream (again whenever the playback ID changes)
  useEffect(() => {
    const video = videoRef.current
    if (!video || !playbackId) return
    let cancelled = false
    const src = muxStream(playbackId)

    const switchToFallback = () => {
      hlsRef.current?.destroy()
      hlsRef.current = null
      if (!fallbackSrc) return
      video.src = fallbackSrc
      if (autoPlay) video.play().catch(() => {})
    }

    import("hls.js").then(({ default: Hls }) => {
      if (cancelled) return
      if (Hls.isSupported()) {
        nativeRef.current = false
        const hls = new Hls({
          maxBufferLength: BUFFER_SECONDS,
          maxMaxBufferLength: BUFFER_SECONDS,
          capLevelToPlayerSize: true, // no 1080p into a small box
          abrEwmaDefaultEstimate: START_ESTIMATE,
          autoStartLoad: preloadRef.current !== "none",
        })
        hlsRef.current = hls
        hls.on(Hls.Events.ERROR, (_, data) => {
          if (data.fatal) switchToFallback()
        })
        if (autoPlay) hls.on(Hls.Events.MANIFEST_PARSED, () => video.play().catch(() => {}))
        hls.loadSource(src)
        hls.attachMedia(video)
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        nativeRef.current = true
        video.addEventListener("error", switchToFallback, { once: true })
        video.src = src
      } else {
        switchToFallback()
      }
    })

    return () => {
      cancelled = true
      hlsRef.current?.destroy()
      hlsRef.current = null
    }
  }, [playbackId, fallbackSrc, autoPlay])

  // preload "none" → anything else: start downloading now
  useEffect(() => {
    if (preload === "none") return
    const hls = hlsRef.current
    if (hls) {
      if (!hls.config.autoStartLoad && !hls.__started) {
        hls.__started = true
        hls.startLoad()
      }
    }
    else if (nativeRef.current) {
      const video = videoRef.current
      if (video && video.readyState === 0) video.load()
    }
  }, [preload])

  return <video ref={setRefs} preload={preload} autoPlay={autoPlay} {...props} />
}
