import fs from "node:fs"
import path from "node:path"

// Service-page images are optional and found by convention, so adding a
// picture is just dropping a file into /public — no data edits needed:
//
//   public/images/services/<type>/banner.webp                 category banner (fallback for every page + the hub)
//   public/images/services/<type>/<slug>/banner.webp          page banner (overrides the category one)
//   public/images/services/<type>/<slug>/service-1.webp …     sticky showcase, one per "What we build" item, in order
//
// Server-only: checks the file exists at render/build time, so a missing
// image means the section adapts instead of showing a broken icon.
// (After adding images, rebuild/redeploy so static pages pick them up.)

const EXTS = [".webp", ".jpg", ".png"]

function firstExisting(basePaths) {
  for (const base of basePaths) {
    for (const ext of EXTS) {
      const url = `${base}${ext}`
      if (fs.existsSync(path.join(process.cwd(), "public", url))) return url
    }
  }
  return null
}

export function bannerImage(type, slug) {
  return firstExisting([
    ...(slug ? [`/images/services/${type}/${slug}/banner`] : []),
    `/images/services/${type}/banner`,
  ])
}

export function showcaseImages(type, slug, count) {
  return Array.from({ length: count }, (_, i) => firstExisting([`/images/services/${type}/${slug}/service-${i + 1}`]))
}
