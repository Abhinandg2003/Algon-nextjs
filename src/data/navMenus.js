// Single source of truth for the top-bar dropdowns.
// Navbar renders from NAV_MENUS. Each item's page lives at /[type]/[slug]
// (e.g. /ai-development/rag-development-services) and is rendered by
// components/servicepage from the content in data/servicePages, so a new
// menu item also needs an entry there.

export const pageHref = (type, slug) => `/${type}/${slug}`

export const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")

// groups: [{ title, items: [label, ...], chips?, navHidden? }] -> adds slug + href to each item
// navHidden: left out of the navbar only — its pages and hub listing stay live.
const build = (type, groups) =>
  groups.map(({ title, items, chips, navHidden }) => ({
    title,
    chips: Boolean(chips),
    navHidden: Boolean(navHidden),
    items: items.map((label) => {
      const slug = slugify(label)
      return { label, slug, href: pageHref(type, slug) }
    }),
  }))

export const NAV_MENUS = [
  {
    id: "healthcare",
    type: "healthcare",
    hub: "/healthcare", // category landing page, linked as "View all" in the menus
    image: "/images/menu/healthcare.webp", // shown above "View all" in the desktop dropdown
    label: "Healthcare",
    blurb: "Hospital operating systems, clinic automation, and AI for hospitals, clinics and care providers.",
    groups: build("healthcare", [
      {
        title: "Hospital & Clinic Systems",
        items: [
          "Hospital Management System",
          "Clinic Automation",
          "Patient Engagement",
          "Patient Onboarding",
        ],
      },
      {
        title: "AI & Intelligence",
        items: [
          "AI Agents in Healthcare",
          "Clinical Documentation AI",
          "Natural Language Processing",
        ],
      },
      {
        title: "Technology",
        items: [
          "Healthcare Software Development",
          "Healthcare Integration",
          "Health Data Analysis",
          "DevOps in Healthcare",
        ],
      },
    ]),
  },
  {
    id: "ai-development",
    type: "ai-development",
    hub: "/ai-development",
    image: "/images/menu/ai-development.webp",
    label: "AI Development",
    blurb: "Workflow automation, AI agents, and RAG grounded in your own data.",
    groups: build("ai-development", [
      {
        title: "AI Strategy and Build",
        items: ["AI Development Services", "Machine Learning"],
      },
      {
        title: "Agents and Automation",
        items: ["AI Agent Development", "Workflow Automation"],
      },
      {
        title: "LLMs and Knowledge",
        items: ["LLM Development Services", "RAG Development Services"],
      },
    ]),
  },
  {
    id: "product-engineering",
    type: "product-engineering",
    hub: "/product-engineering",
    image: "/images/menu/product-engineering.webp",
    label: "Product Engineering",
    blurb: "Web and SaaS builds, and dedicated engineering teams for a defined project.",
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
        navHidden: true, // temporarily hidden from the navbar
        items: ["React JS", "Node JS", "Next JS", "Python", "TypeScript", "AWS & Cloud"],
      },
    ]),
  },
  {
    id: "company",
    type: "company",
    hub: "/",
    hubLabel: "Home page", // CTA under the image (the other menus say "View all")
    label: "Company",
    image: "/images/menu/company.webp",
    blurb: "Who we are, what we have built, and how to reach us.",
    groups: [
      {
        title: "About Algon",
        items: [
          { label: "About us", href: "/about-us" },
          { label: "Solutions", href: "/solutions" },
        ],
      },
      {
        title: "Our Work",
        items: [
          { label: "Portfolio", href: "/portfolio" },
          { label: "Case Studies", href: "/work" },
        ],
      },
      {
        title: "Insights and Careers",
        items: [
          { label: "Insights", href: "/blogs" },
          { label: "Careers", href: "/careers" },
        ],
      },
    ],
  },
]

// What the navbar shows: NAV_MENUS minus groups marked navHidden.
export const NAVBAR_MENUS = NAV_MENUS.map((m) => ({ ...m, groups: m.groups.filter((g) => !g.navHidden) }))
