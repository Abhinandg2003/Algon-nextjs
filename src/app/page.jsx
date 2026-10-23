import MainWebsite from "@/components/MainWebsite";
import { INTRO_VIDEO, PRELOADER_SEEN_KEY, PRELOADER_VIDEO } from "@/config/preloader";

// Runs while the HTML is still parsing, before the splash overlay paints:
// visitors who already saw the preloader in this tab get it hidden instantly
// instead of a flash before React hydrates. (layout.jsx marks <html> with
// suppressHydrationWarning for this class.)
const HIDE_SEEN_SPLASH = `try{if(sessionStorage.getItem(${JSON.stringify(PRELOADER_SEEN_KEY)})==="true")document.documentElement.classList.add("splash-seen")}catch(e){}`

export default function Page() {
  return (
    <>
      {/* Home-only preloads (React hoists them into <head>). Each has a media
          condition so a device fetches only its own version. Chrome ignores
          as="video"; there the splash <video> in the HTML loads early anyway. */}
      {PRELOADER_VIDEO && (
        <>
          <link rel="preload" as="video" href={INTRO_VIDEO.mobile} media={INTRO_VIDEO.mobileQuery} />
          <link rel="preload" as="video" href={INTRO_VIDEO.desktop} media={INTRO_VIDEO.desktopQuery} />
        </>
      )}
      {/* First frame of the first hero slide, so the hero paints instantly */}
      <link rel="preload" as="image" href="/images/posters/algon-hero-4mobile.webp" media="(max-width: 767px)" />
      <link rel="preload" as="image" href="/images/posters/algonhero-4.webp" media="(min-width: 768px)" />

      <script dangerouslySetInnerHTML={{ __html: HIDE_SEEN_SPLASH }} />
      <style>{`html.splash-seen [data-splash]{display:none!important}`}</style>

      <MainWebsite />
    </>
  );
}
