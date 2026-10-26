/* ─────────────────────────────────────────────────────────────────────────────
   CASE STUDIES DATASET

   Clients are anonymised (no names, logos or live links). Larger engagements
   are split into linked parts — one case study per major module of the same
   build — via `series`. Each group lives in its own file in ./caseStudies/.

   Entry shape:
   {
     id,                       // URL slug: /work/<id> — no client names
     series?: { key, name, part, total },   // e.g. { key:"hospital-os", name:"Hospital Operating System", part:2, total:4 }
     title, tagline,
     category,                 // first word drives the /work filter: "Healthcare …", "AI & Automation …", "Web & SaaS …"
     client,                   // anonymised descriptor, e.g. "A specialty mental-health hospital, Kerala"
     year, duration,
     services: [],             // capability names shown on the page
     tags: [],
     accent,
     href?: null,              // client site link — omitted for anonymised studies
     thumbnail, heroImage, mockup, commonImg, gallery: [],
     overview, challenge, solution,
     statpoints: [],           // short "before" pain points
     pillars: [{ num, title, text }],          // 4
     stepsData: [{ phase, title, desc, icon }], // 4, icon from ./caseStudies/_icons
     results: [{ metric, before, after, delta }],
     stats: [{ value, suffix, label }],         // 4
     testimonial?: { text, author, role },     // anonymised attribution
     _verify: [],              // NOT rendered: assumed details to confirm before publishing
   }
──────────────────────────────────────────────────────────────────────────── */

import hospitalOs from "./caseStudies/hospitalOs"
import campusPlatform from "./caseStudies/campusPlatform"
import admissions from "./caseStudies/admissions"
import catalogue from "./caseStudies/catalogue"
import webBuilds from "./caseStudies/webBuilds"

// Order matters: /work lists in this order, and "next case study" follows it.
export const CASE_STUDIES = [...hospitalOs, ...campusPlatform, ...admissions, ...catalogue, ...webBuilds]

// Other parts of the same build, in order (empty for standalone studies).
export function seriesParts(study) {
  if (!study?.series) return []
  return CASE_STUDIES.filter((s) => s.series?.key === study.series.key).sort((a, b) => a.series.part - b.series.part)
}

// One study per build (its Part 1) — for "featured" strips that shouldn't
// show four parts of the same project side by side.
export const LEAD_STUDIES = CASE_STUDIES.filter((s) => !s.series || s.series.part === 1)

// Old (pre-anonymisation) ids → new Part 1 ids, used for redirects.
export const LEGACY_IDS = {
  "mindful-rejuvenation": "hospital-os-patient-records-opd",
  visat: "campus-ai-teacher-agents",
  "desire-study-abroad": "admissions-ai-assistant",
  "drisya-marble": "product-catalogue-cms",
  "unity-heights": "real-estate-lead-website",
  thesneek: "fashion-commerce-storefront",
  corewood: "furniture-mobile-first-website",
  "qot-interiors": "interiors-conversion-tracking",
}

export default CASE_STUDIES
