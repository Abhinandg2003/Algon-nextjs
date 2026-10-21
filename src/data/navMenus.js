// Single source of truth for the top-bar dropdowns.
// Navbar renders from NAV_MENUS, and app/p/[type]/[slug]/page.jsx reads the
// same data, so a new menu item automatically gets a working placeholder page.
//
// URL shape: /p/[type]/[slug]   e.g. /p/ai-development/rag-development-services

export const pageHref = (type, slug) => `/p/${type}/${slug}`

export const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")

// groups: [{ title, items: [label, ...], chips? }] -> adds slug + href to each item
const build = (type, groups) =>
  groups.map(({ title, items, chips }) => ({
    title,
    chips: Boolean(chips),
    items: items.map((label) => {
      const slug = slugify(label)
      return { label, slug, href: pageHref(type, slug) }
    }),
  }))

export const NAV_MENUS = [
  {
    id: "ai-development",
    type: "ai-development",
    label: "AI Development",
    blurb: "Agents, automation, and custom models built for production.",
    groups: build("ai-development", [
      {
        title: "AI Agents and Automation",
        items: [
          "AI Development Services",
          "AI Agent Development",
          "Robotic Process Automation",
        ],
      },
      {
        title: "Models and Data",
        items: [
          "Machine Learning",
          "LLM Development Services",
          "RAG Development Services",
        ],
      },
    ]),
  },
  {
    id: "product-engineering",
    type: "product-engineering",
    label: "Product Engineering",
    blurb: "From first release to long-term engineering support.",
    groups: build("product-engineering", [
      {
        title: "Build and Launch",
        items: ["MVP Development", "Product Development", "Application Modernization"],
      },
      {
        title: "Teams",
        items: ["Hire Dedicated Teams", "Managed Engineering Services"],
      },
      {
        title: "Web and SaaS",
        items: [
          "Web Application Development",
          "Frontend Development",
          "Full Stack Development",
          "CMS Development",
        ],
      },
      {
        title: "Tech Stack",
        
        items: ["React JS", "Node JS", "Next JS", "Python", "TypeScript", "AWS & Cloud"],
      },
    ]),
  },
  {
  id: "healthcare",
  type: "healthcare",
  label: "Healthcare",
  blurb: "Software, data, and AI for hospitals and care providers.",
  groups: build("healthcare", [
    {
      title: "Technology",
      items: [
        "Healthcare Integration",
        "DevOps in Healthcare",
        "Health Data Analysis",
        "Healthcare Software Development Services",
      ],
    },
    {
      title: "AI & Intelligence",
      items: [
        "AI Agents in Healthcare",
        "AI/ML",
        "Natural Language Processing",
      ],
    },
    {
      title: "Services",
      items: [
        "Managed Care",
        "Tech Support",
        "Patient Engagement",
        "Patient Onboarding",
      ],
    },
  ]),
},
  {
  id: "company",
  type: "company",
  label: "Company",
  blurb: "Who we are, what we have built, and how to reach us.",
  groups: [
    {
      chips: false,
      items: [
        { label: "About us", href: "/about-us" },
        { label: "Solutions", href: "/solutions" },
        { label: "Portfolio", href: "/portfolio" },
      ],
    },
    {
      chips: false,
      items: [
        { label: "Insights", href: "/blogs" },
        { label: "Careers", href: "/careers" },
        { label: "Case Studies", href: "/work" },
      ],
    },
  ],
},
]

// Extra links shown in the mobile menu below the accordions
export const MOBILE_LINKS = [
  { label: "Case Studies", href: "/work" },
  { label: "Insights", href: "/blogs" },
]

// ── Helpers for the /p/[type]/[slug] route ──────────────────────────────
export function findPage(type, slug) {
  const menu = NAV_MENUS.find((m) => m.type === type)
  if (!menu) return null
  for (const group of menu.groups) {
    const item = group.items.find((i) => i.slug === slug)
    if (item) return { menu, group, item }
  }
  return null
}

export const allPageParams = () =>
  NAV_MENUS.filter((m) => m.type).flatMap((m) =>
    m.groups.flatMap((g) => g.items.map((i) => ({ type: m.type, slug: i.slug })))
  )