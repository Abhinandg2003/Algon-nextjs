import { bannerImage, heroImage } from "./serviceImages"

// Which hero layout a service page gets. Server-only (checks image files).
//
// HERO_MODE
//   "banner" → every page uses the 60vh image banner (HeroBanner). Image:
//              hero.image, else <slug>/hero.webp, else the page/category banner.
//   "mix"    → the older layouts, picked as described below.
export const HERO_MODE = "banner"

// "mix" order of precedence:
//   1. hero.variant in the page data ("form" | "image" | "light" | "centered")
//   2. the page has a hero image → "image"
//      (hero.image in the data, or public/images/services/<type>/<slug>/hero.webp)
//   3. otherwise one of form / light / centered, picked from the slug
//
// Step 3 is deliberately NOT random per visit: the page is generated once at
// build time, and a random pick would differ between server and browser
// (hydration error) and make the same URL look different on every visit.
// Hashing the slug gives variety across pages but stability per page.

const AUTO_POOL = ["form", "light", "centered"]

function hash(str) {
  let h = 0
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) | 0
  return Math.abs(h)
}

export function pickHeroVariant(type, slug, hero = {}) {
  const image = hero.image || heroImage(type, slug)

  if (HERO_MODE === "banner") return { variant: "banner", image: image || bannerImage(type, slug) }

  if (hero.variant) {
    // An "image" hero with no image would be empty — fall back to the form.
    return { variant: hero.variant === "image" && !image ? "form" : hero.variant, image }
  }
  if (image) return { variant: "image", image }
  return { variant: AUTO_POOL[hash(`${type}/${slug}`) % AUTO_POOL.length], image: null }
}
