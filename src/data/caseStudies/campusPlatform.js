import I from "./_icons.js"

// See ../caseStudiesData.js for the entry shape.
const G = "/images/clients/gallery/visat"
const SERIES = { key: "campus-platform", name: "Campus Digital Platform", total: 3 }
const CLIENT = "A multi-department college group, Kerala"
const SCREENSHOT_CHECK = "Check screenshots for the client's name/logo — blur or replace before publishing"

const campusPlatform = [
  /* ── Part 1 — AI teacher agents ─────────────────────────────────────────── */
  {
    id: "campus-ai-teacher-agents",
    series: { ...SERIES, part: 1 },
    title: "Campus Platform — AI Teacher Agents",
    tagline: "One AI teaching assistant per department, grounded in that department's own material.",
    category: "AI & Automation · AI Agents",
    client: CLIENT,
    year: "2024",
    duration: "8 weeks (full build)",
    services: [
      "LLM Agent Design",
      "Retrieval-Augmented Generation",
      "Prompt & Persona Engineering",
      "Guardrails & Safety",
      "Human Hand-off Workflows",
      "Conversation Analytics",
    ],
    tags: ["AI", "LLM", "RAG", "Node.js", "EdTech"],
    accent: "#298dff",
    thumbnail: `${G}/thumbnail.webp`,
    heroImage: `${G}/hero.webp`,
    mockup: `${G}/mockup.webp`,
    commonImg: `${G}/common.webp`,
    gallery: [`${G}/1.webp`, `${G}/2.webp`, `${G}/3.webp`],
    overview:
      "A college group with several departments wanted prospective and current students to get department-specific answers online, at any hour, without every question landing in a faculty inbox. Algon built a set of AI teacher agents — one per department — each presented as a member of that department's faculty and answering in its voice. The agents sit inside the wider campus platform, alongside the department pages they draw on.",
    challenge:
      "Student questions are highly department-specific: a query about lab schedules in one stream has a different answer, and a different tone, from the same question in another. A single general-purpose chatbot would blur those boundaries and, left ungrounded, would invent course details. The institution also needed to know what students were actually asking, and to be sure that anything sensitive or out of scope reached a person rather than a guess.",
    solution:
      "Each department's agent runs on a large language model constrained by a department-specific prompt template and persona, and answers from that department's own syllabus, FAQ and page content via retrieval-augmented generation: content is chunked, embedded and stored in a vector index, and only the most relevant passages are placed into the model's context window for each question. Guardrails keep answers within the department's scope, decline when retrieval finds nothing reliable, and route admissions, fee or personal queries to staff through a human hand-off. Every conversation is logged so faculty can review answer quality and spot gaps in published content.",
    statpoints: [
      "Department questions routed to busy faculty inboxes",
      "No out-of-hours help for students",
      "No visibility into what students were asking",
      "General chatbots risked invented course details",
    ],
    pillars: [
      { num: "01", title: "Agent per Department", text: "A separate assistant for each department, with its own persona, tone and scope rather than one generic bot." },
      { num: "02", title: "Grounded Answers", text: "Retrieval over embedded department content keeps responses tied to what the institution has actually published." },
      { num: "03", title: "Guardrails & Hand-off", text: "Scope checks, refusal on low-confidence retrieval and a clear route to human staff for sensitive questions." },
      { num: "04", title: "Conversation Insight", text: "Logged conversations show faculty which topics students ask about and where published content falls short." },
    ],
    stepsData: [
      { phase: "Phase 01", title: "Department Knowledge Audit", desc: "Collected syllabus, FAQ and page content per department and defined what each agent may and may not answer.", icon: I.plan },
      { phase: "Phase 02", title: "Retrieval Pipeline", desc: "Chunked and embedded department content into a vector index, with retrieval scoped to each department.", icon: I.data },
      { phase: "Phase 03", title: "Personas & Guardrails", desc: "Wrote prompt templates and faculty personas, then added scope checks, fallbacks and human hand-off.", icon: I.ai },
      { phase: "Phase 04", title: "Launch & Review Loop", desc: "Embedded the agents in the platform and set up conversation logging for ongoing faculty review.", icon: I.launch },
    ],
    results: [
      { metric: "Student support", before: "Office hours only", after: "Always-on AI agents", delta: "Out-of-hours coverage" },
      { metric: "Answer source", before: "Ad hoc replies", after: "Department content via RAG", delta: "Grounded" },
      { metric: "Sensitive queries", before: "Unrouted", after: "Handed off to staff", delta: "Human in the loop" },
      { metric: "Question visibility", before: "None", after: "Logged conversations", delta: "Measurable" },
    ],
    stats: [
      { value: "1", suffix: "", label: "AI agent per department" },
      { value: "24", suffix: "/7", label: "Student access" },
      { value: "8", suffix: "wk", label: "Full platform build" },
      { value: "100", suffix: "%", label: "Responsive" },
    ],
    testimonial: {
      text: "The platform completely changed how students interact with us online. The AI agents and 360 view made a huge impact.",
      author: "Chairman",
      role: "The institution",
    },
    _verify: [
      "Confirm the client is based in Kerala",
      "Confirm which LLM / model provider the agents use",
      "Confirm the agents use retrieval (RAG) over department content, and which vector store holds the embeddings",
      "Confirm content sources (syllabus, FAQs, department pages) used to ground the agents",
      "Confirm guardrails and human hand-off to staff were implemented",
      "Confirm conversations are logged and reviewed by faculty",
      "Confirm the '24/7' stat (agents available at all hours)",
      SCREENSHOT_CHECK,
    ],
  },

  /* ── Part 2 — 360° virtual tour ─────────────────────────────────────────── */
  {
    id: "campus-360-virtual-tour",
    series: { ...SERIES, part: 2 },
    title: "Campus Platform — 360° Virtual Tour",
    tagline: "Walk the campus from a phone: linked 360° panoramas with hotspot navigation.",
    category: "Web & SaaS · Interactive Platform",
    client: CLIENT,
    year: "2024",
    duration: "8 weeks (full build)",
    services: [
      "360° Panorama Integration",
      "WebGL Viewer Development",
      "Hotspot Navigation Design",
      "Mobile & Gyroscope Support",
      "Performance Engineering",
      "Responsive Front-end",
    ],
    tags: ["360°", "WebGL", "HTML", "CSS", "JavaScript"],
    accent: "#00b8a9",
    thumbnail: `${G}/mockup.webp`,
    heroImage: `${G}/common.webp`,
    mockup: `${G}/mockup.webp`,
    commonImg: `${G}/common.webp`,
    gallery: [`${G}/4.webp`, `${G}/5.webp`, `${G}/6.webp`],
    overview:
      "For many applicants the first visit to a campus is online, often from another district or state. Algon built an immersive 360° campus view into the institution's platform, letting visitors move between buildings, labs and common spaces as if walking through them. The tour is part of the same responsive site, so it works on a phone as well as on a desktop.",
    challenge:
      "Photo galleries flatten a campus: they show rooms but not how places connect, and they give no sense of scale. Full 360° imagery solves that but is heavy — high-resolution panoramas can stall a page on a mobile connection and drain a phone's battery if rendered carelessly. The tour had to feel immediate on mid-range Android devices without compromising the rest of the site's load time.",
    solution:
      "Campus locations were captured as equirectangular 360° panoramas and rendered in a WebGL panorama viewer, with hotspots placed in each scene to link to neighbouring locations and to the relevant department pages. Images load progressively — a low-resolution preview first, sharper tiles as the visitor looks around — and scenes are lazy-loaded only when a hotspot is approached, keeping the initial page within a fixed performance budget. On mobile the view responds to the device's gyroscope, so visitors can look around by moving their phone, with touch-drag as a fallback.",
    statpoints: [
      "Static photos gave no sense of the campus layout",
      "Remote applicants could not visit in person",
      "Heavy 360° imagery threatened mobile load times",
    ],
    pillars: [
      { num: "01", title: "Equirectangular Capture", text: "Each location captured as a full 360° panorama, mapped onto a sphere for natural look-around viewing." },
      { num: "02", title: "Hotspot Navigation", text: "In-scene hotspots link locations into a walkable route and connect places to their department pages." },
      { num: "03", title: "Progressive Loading", text: "Low-resolution previews first, sharper tiles on demand, and scenes lazy-loaded only when needed." },
      { num: "04", title: "Mobile-First Viewing", text: "Gyroscope look-around on phones, touch-drag fallback, and a layout that adapts to any screen." },
    ],
    stepsData: [
      { phase: "Phase 01", title: "Route Planning", desc: "Chose the locations to capture and mapped how visitors should move between them.", icon: I.plan },
      { phase: "Phase 02", title: "Viewer Build", desc: "Integrated a WebGL panorama viewer and rendered equirectangular scenes on a sphere.", icon: I.screen },
      { phase: "Phase 03", title: "Hotspots & Linking", desc: "Placed navigation hotspots in each scene and linked them to other scenes and department pages.", icon: I.flow },
      { phase: "Phase 04", title: "Performance Tuning", desc: "Added progressive and lazy loading, gyroscope controls and mobile testing against a performance budget.", icon: I.chart },
    ],
    results: [
      { metric: "Campus exploration", before: "Static photos", after: "Walkable 360° tour", delta: "Immersive" },
      { metric: "Remote visitors", before: "No virtual visit", after: "Self-guided tour", delta: "Visit from anywhere" },
      { metric: "Mobile experience", before: "Flat images", after: "Gyroscope look-around", delta: "Phone-native" },
    ],
    stats: [
      { value: "360", suffix: "°", label: "Campus view" },
      { value: "8", suffix: "wk", label: "Full platform build" },
      { value: "100", suffix: "%", label: "Responsive" },
      { value: "4", suffix: "", label: "Delivery phases" },
    ],
    testimonial: {
      text: "Algon Solutions delivered a stunning, highly impressive product perfectly on schedule, exceeding all our expectations.",
      author: "Chairman",
      role: "The institution",
    },
    _verify: [
      "Confirm the client is based in Kerala",
      "Confirm which 360° / WebGL panorama library was used",
      "Confirm the panoramas are equirectangular and who captured them",
      "Confirm hotspot navigation between locations and links to department pages",
      "Confirm progressive/lazy loading and a defined performance budget",
      "Confirm mobile gyroscope support with touch fallback",
      SCREENSHOT_CHECK,
    ],
  },

  /* ── Part 3 — CMS + SEO platform ────────────────────────────────────────── */
  {
    id: "campus-cms-seo-platform",
    series: { ...SERIES, part: 3 },
    title: "Campus Platform — CMS & SEO",
    tagline: "A structured, multi-department CMS with search visibility built into every page.",
    category: "Web & SaaS · CMS Platform",
    client: CLIENT,
    year: "2024",
    duration: "8 weeks (full build)",
    services: [
      "Website Development",
      "CMS Integration",
      "Content Modelling",
      "Role-Based Editing",
      "Technical SEO",
      "Structured Data",
      "Performance Optimisation",
    ],
    tags: ["HTML", "CSS", "Node.js", "CMS", "SEO"],
    accent: "#7c5cff",
    thumbnail: `${G}/common.webp`,
    heroImage: `${G}/mockup.webp`,
    mockup: `${G}/mockup.webp`,
    commonImg: `${G}/common.webp`,
    gallery: [`${G}/7.webp`, `${G}/8.webp`, `${G}/9.webp`],
    overview:
      "Beneath the AI agents and the virtual tour sits the platform that holds it all together: a fully responsive website with detailed pages for every department and service, managed through an integrated CMS. Algon designed the content model, the editing workflow and the technical SEO so that each department could keep its own pages current and those pages could be found in search.",
    challenge:
      "The institution had no detailed digital presence and low search visibility. Each department needed its own programmes, faculty and facilities pages, but content had to stay consistent across departments and be editable by staff without developer help. Without structured content and technical SEO, new pages would not be indexed well, and department material could not be reused by the AI agents.",
    solution:
      "Algon built a Node.js-backed site with full CMS integration and a structured content model per department — programmes, faculty, facilities and services as typed fields rather than free-form pages — so templates render every department consistently. Role-based editing lets department staff update their own section while administrators control site-wide content. Each page ships with schema.org structured data (EducationalOrganization, Course), canonical URLs and an auto-generated XML sitemap, and templates were tuned for Core Web Vitals through image optimisation, deferred scripts and lean HTML and CSS.",
    statpoints: [
      "No detailed online presence for departments",
      "Low search visibility",
      "Content updates depended on developers",
      "Inconsistent information across departments",
    ],
    pillars: [
      { num: "01", title: "Structured Content Model", text: "Programmes, faculty and facilities as typed CMS fields, rendered by shared templates for every department." },
      { num: "02", title: "Role-Based Editing", text: "Department editors manage their own pages; administrators keep control of site-wide content." },
      { num: "03", title: "Technical SEO", text: "schema.org EducationalOrganization and Course markup, canonical URLs and an XML sitemap on every build." },
      { num: "04", title: "Page Speed", text: "Optimised images, deferred scripts and lean markup tuned against Core Web Vitals on mobile." },
    ],
    stepsData: [
      { phase: "Phase 01", title: "Information Architecture", desc: "Mapped every department and service into a navigable site structure and content model.", icon: I.plan },
      { phase: "Phase 02", title: "CMS & Backend", desc: "Built the Node.js backend, integrated the CMS and set up editor roles and permissions.", icon: I.build },
      { phase: "Phase 03", title: "Templates & SEO", desc: "Built responsive templates with structured data, canonical URLs and sitemap generation.", icon: I.integrate },
      { phase: "Phase 04", title: "Speed & Launch", desc: "Optimised for Core Web Vitals, tested across devices and handed over to department editors.", icon: I.launch },
    ],
    results: [
      { metric: "Department coverage", before: "Limited pages", after: "Detailed page per department", delta: "Complete" },
      { metric: "Search visibility", before: "Low", after: "Structured data & sitemap", delta: "SEO enabled" },
      { metric: "Content updates", before: "Developer-dependent", after: "Staff-edited via CMS", delta: "Self-serve" },
      { metric: "Device support", before: "Inconsistent", after: "Fully responsive", delta: "All screens" },
    ],
    stats: [
      { value: "100", suffix: "%", label: "Responsive" },
      { value: "8", suffix: "wk", label: "Full platform build" },
      { value: "1", suffix: "", label: "CMS for all departments" },
      { value: "3", suffix: "", label: "Integrated modules" },
    ],
    _verify: [
      "Confirm the client is based in Kerala",
      "Confirm which CMS product was integrated (headless or traditional)",
      "Confirm the structured per-department content model and role-based editor permissions",
      "Confirm schema.org EducationalOrganization/Course markup, canonical URLs and XML sitemap were implemented",
      "Confirm Core Web Vitals / page-speed optimisation work",
      "Confirm Node.js was used for the backend",
      SCREENSHOT_CHECK,
    ],
  },
]

export default campusPlatform
