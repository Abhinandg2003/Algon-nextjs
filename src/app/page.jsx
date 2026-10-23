import MainWebsite from "@/components/MainWebsite";

// Home-only preloads (React hoists these <link>s into <head>). Each has a
// `media` condition matching the splash/hero breakpoints, so a device fetches
// only its own version — never both, and never on other pages.
// Note: Chrome ignores as="video" preloads; there the splash <video> in the
// page HTML (whose <source media> also picks one file) does the early loading.
export default function Page() {
  return (
    <>
      <link rel="preload" as="video" href="/algon-intro-black-mb.mp4" media="(max-width: 768px)" />
      <link rel="preload" as="video" href="/algon-intro-black.mp4" media="(min-width: 769px)" />
      {/* First frame of the first hero slide, so the hero paints instantly */}
      <link rel="preload" as="image" href="/images/posters/algon-hero-4mobile.webp" media="(max-width: 767px)" />
      <link rel="preload" as="image" href="/images/posters/algonhero-4.webp" media="(min-width: 768px)" />
      <MainWebsite />
    </>
  );
}
