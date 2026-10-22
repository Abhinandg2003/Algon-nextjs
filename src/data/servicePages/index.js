// ─────────────────────────────────────────────────────────────────────────────
// SERVICE PAGE CONTENT
//
// One object per navbar dropdown item, keyed by the item's slug (see
// navMenus.js). The page at /<type>/<slug> is rendered by
// components/servicepage/ServicePage.jsx from this data, so adding a page is
// a data change only.
//
// Page shape (every section except seo/hero/faq is optional and is skipped
// when missing):
//
// {
//   seo:   { title, description, keywords: [] },
//   hero:  { heading?,         // H1; defaults to the navbar label (best for SEO)
//            highlight?,       // part of the H1 on the brand-colour block; default: last word
//            highlightStyle?,  // "bg" (default) or "text"
//            title,            // tagline under the H1; wrap a phrase in *asterisks* to colour it
//            subtitle, chips: [], formTitle?, formMessageLabel? },
//   stats: [{ value, label }],                       // 3–4, facts only
//   definition: { title, paragraphs: [], points?: [{ icon, text }] },
//   problems:   { title, intro?, items: [{ icon, title, text }] },   // why it fails
//   services:   { title, intro?, items: [{ icon, title, text }] },   // what we build
//   tables:     [{ title, intro?, columns: [], rows: [[]], highlightLast?, note? }],
//   process:    { title, intro?, steps: [{ title, text }] },
//   stack:      { title, intro?, groups: [{ label, items: [] }], note? },
//   industries: { title, intro?, items: [{ icon, title, text }] },
//   compliance: { title, intro?, items: [], note? },
//   differentiators: { title, intro?, items: [{ icon, title, text }] },
//   caseStudy:  { id, title?, intro? },               // id from caseStudiesData.js
//   related:    ["type/slug", ...],                   // up to 3 sibling pages
//   faq:        [{ q, a }],                           // 6–8
//   cta:        { title?, text? },
// }
//
// Icon names must exist in components/servicepage/Icon.jsx.
// ─────────────────────────────────────────────────────────────────────────────

import { NAV_MENUS } from "../navMenus"
import healthcare from "./healthcare"
import healthcareTech from "./healthcareTech"
import aiDevelopment from "./aiDevelopment"
import productEngineering from "./productEngineering"
import technologies from "./technologies"

export const SERVICE_PAGES = {
  healthcare: { ...healthcare, ...healthcareTech },
  "ai-development": aiDevelopment,
  "product-engineering": { ...productEngineering, ...technologies },
}

// Menu context (label, group, item) for a type/slug, from the navbar data.
export function findMenuItem(type, slug) {
  const menu = NAV_MENUS.find((m) => m.type === type)
  if (!menu) return null
  for (const group of menu.groups) {
    const item = group.items.find((i) => i.slug === slug)
    if (item) return { menu, group, item }
  }
  return null
}

export function getServicePage(type, slug) {
  const ctx = findMenuItem(type, slug)
  const page = SERVICE_PAGES[type]?.[slug]
  if (!ctx || !page) return null
  return { ...ctx, page, type, slug }
}

// Static params for one service type, e.g. "healthcare".
export function serviceParams(type) {
  const menu = NAV_MENUS.find((m) => m.type === type)
  if (!menu) return []
  return menu.groups.flatMap((g) => g.items).filter((i) => SERVICE_PAGES[type]?.[i.slug]).map((i) => ({ slug: i.slug }))
}
