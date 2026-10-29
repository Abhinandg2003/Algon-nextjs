import I from "./_icons.js"

// See ../caseStudiesData.js for the entry shape.
const G = "/images/clients/gallery/drisya"

const SERIES = { key: "catalogue-platform", name: "Product Catalogue Platform", total: 2 }
const CLIENT = "A tiles, marble & sanitaryware retailer, Kerala"
const SCREENSHOT_CHECK = "Check screenshots for the client's name/logo — blur or replace before publishing"
const IMAGE_FOLDER_CHECK = "Image folder path still carries the client's name — rename the folder before publishing"

const TESTIMONIAL = {
  text: "We can now manage our entire product catalogue and content easily. The new website made a huge difference to our visibility.",
  author: "The founder",
  role: "Founder, the company",
}

const catalogue = [
  /* ── Part 1 ─────────────────────────────────────────────────────────── */
  {
    id: "product-catalogue-cms",
    href: "https://drisyamarble.com/", // live site: shows the ↗ button on the detail page
    series: { ...SERIES, part: 1 },
    title: "Catalogue Platform — Structured Product Catalogue",
    tagline: "A normalised, CMS-managed catalogue of 50+ surfaces and fittings that buyers can filter, compare and enquire on.",
    category: "Web & SaaS · CMS Platform",
    client: CLIENT,
    year: "2026",
    duration: "4 weeks (full build)",
    services: [
      "Content Modelling",
      "CMS Integration",
      "Product Catalogue System",
      "Faceted Search & Filtering",
      "Responsive Image Pipeline",
      "Enquiry Workflow",
      "Front-end Development",
    ],
    tags: ["B2B", "Retail", "Catalogue", "CMS"],
    accent: "#298dff",
    thumbnail: `${G}/thumbnail.webp`,
    heroImage: `${G}/hero.webp`,
    mockup: `${G}/mockup.webp`,
    commonImg: `${G}/common.webp`,
    gallery: [`${G}/1.webp`, `${G}/2.webp`, `${G}/3.webp`, `${G}/4.webp`],
    overview:
      "A B2B and retail supplier of tiles, marble and sanitaryware needed its range online as a real catalogue rather than a set of brochure pages. We designed the product content model, the taxonomy that sits on top of it and the templates that render it, then wired the whole catalogue into a CMS so the team could add and edit products without a developer. This part covers the catalogue itself; Part 2 covers content operations, analytics and search visibility.",
    challenge:
      "Stone and tile products vary along many dimensions at once — material, finish, size, thickness, application — and that information lived in price lists, supplier sheets and staff memory rather than in one place. Without consistent attributes there was no way to offer meaningful filters, product pages could not be generated from a template, and every catalogue change depended on someone editing a page by hand. Large, high-resolution product photography also had to load quickly on mobile connections without losing the surface detail buyers judge a slab by.",
    solution:
      "We modelled each product as structured content with normalised attributes — category, material, finish, size and application held as controlled reference values rather than free text — so the same data drives listings, filters and detail pages. A faceted taxonomy lets buyers narrow 50+ products by any combination of attributes, with clean, human-readable slugs for every category and product. Product detail templates pull specifications, imagery and related items from the model, images are served as responsive WebP srcsets with lazy loading below the fold, and every product carries an enquiry action that pre-fills the product reference so sales receives context, not just a name and number.",
    statpoints: [
      "No single source of product data — specs scattered across lists and sheets",
      "No way for buyers to filter by finish, size or application",
      "Every product change needed a developer",
      "Heavy product photography slowed pages on mobile",
      "Enquiries arrived without saying which product they were about",
    ],
    pillars: [
      {
        num: "01",
        title: "Normalised Product Model",
        text: "Products, categories, materials, finishes, sizes and applications modelled as linked content types with controlled values, so one edit updates every listing and filter that uses it.",
      },
      {
        num: "02",
        title: "Faceted Taxonomy",
        text: "Multi-attribute filtering across the catalogue, with a consistent slug strategy for category and product URLs that stays stable as the range grows.",
      },
      {
        num: "03",
        title: "Image Pipeline",
        text: "Responsive WebP srcsets sized per breakpoint, explicit dimensions to prevent layout shift, and lazy loading so long listing pages stay light on mobile.",
      },
      {
        num: "04",
        title: "Enquiry-on-Product",
        text: "An enquiry action on every product page that carries the product reference and selected attributes through to the sales team.",
      },
    ],
    stepsData: [
      {
        phase: "Phase 01",
        title: "Range Audit & Content Model",
        desc: "Catalogued the existing range, agreed the attribute set and defined content types, reference fields and validation rules in the CMS.",
        icon: I.data,
      },
      {
        phase: "Phase 02",
        title: "Taxonomy & URL Design",
        desc: "Built the category hierarchy, facet definitions and slug conventions, then mapped every product onto them.",
        icon: I.plan,
      },
      {
        phase: "Phase 03",
        title: "Templates & Image Pipeline",
        desc: "Developed listing, filter and product detail templates, with responsive image generation and lazy loading throughout.",
        icon: I.build,
      },
      {
        phase: "Phase 04",
        title: "Data Load & Enquiry Flow",
        desc: "Loaded and checked 50+ products, connected product enquiries to the sales inbox and handed the catalogue over to the team.",
        icon: I.launch,
      },
    ],
    results: [
      { metric: "Product catalogue", before: "Unstructured", after: "50+ structured products", delta: "Single source of truth" },
      { metric: "Catalogue updates", before: "Developer edits", after: "Team-managed in the CMS", delta: "Self-service" },
      { metric: "Product discovery", before: "Static pages", after: "Faceted filters", delta: "Browse by attribute" },
      { metric: "Product enquiries", before: "No product context", after: "Product reference attached", delta: "Context for sales" },
    ],
    stats: [
      { value: "50", suffix: "+", label: "Products modelled" },
      { value: "4", suffix: "wk", label: "Full build" },
      { value: "5", suffix: "", label: "Product attribute types" },
      { value: "1", suffix: "", label: "CMS-managed catalogue" },
    ],
    testimonial: TESTIMONIAL,
    _verify: [
      "Kerala as the client's location",
      "The CMS platform used and that products are modelled as linked content types with controlled values",
      "Faceted filtering exists, and on which attributes (category, material, finish, size, application)",
      "The '5 product attribute types' stat matches the actual model",
      "Responsive WebP srcsets and lazy loading are implemented as described",
      "Product enquiry action exists and passes the product reference to sales",
      "Related-products block on product detail pages",
      "Before-state details (specs in price lists/supplier sheets, slow mobile images, enquiries without product context)",
      "Founder is happy for the quote to be used with anonymised attribution",
      SCREENSHOT_CHECK,
      IMAGE_FOLDER_CHECK,
    ],
  },

  /* ── Part 2 ─────────────────────────────────────────────────────────── */
  {
    id: "catalogue-content-ops-analytics",
    href: "https://drisyamarble.com/", // live site: shows the ↗ button on the detail page
    series: { ...SERIES, part: 2 },
    title: "Catalogue Platform — Content Operations & Measurement",
    tagline: "Editor workflows, event tracking and technical SEO that keep the catalogue current, measurable and findable.",
    category: "Web & SaaS · Content & Analytics",
    client: CLIENT,
    year: "2026",
    duration: "4 weeks (full build)",
    services: [
      "CMS Editorial Workflows",
      "Analytics Setup",
      "Google Tag Manager",
      "Conversion Tracking",
      "Technical & On-page SEO",
      "Domain, DNS & SSL",
    ],
    tags: ["B2B", "Content Operations", "Analytics", "SEO"],
    accent: "#298dff",
    thumbnail: `${G}/common.webp`,
    heroImage: `${G}/mockup.webp`,
    mockup: `${G}/mockup.webp`, // detail-page hero, same as the first study
    commonImg: `${G}/thumbnail.webp`,
    gallery: [`${G}/8.webp`, `${G}/9.webp`, `${G}/10.webp`, `${G}/11.webp`, `${G}/12.webp`],
    overview:
      "With the product catalogue in place (Part 1), the site needed to stay current without developer involvement, report on what visitors actually did, and be readable by search engines. We set up editorial workflows for blogs and career listings, an analytics and Google Tag Manager layer that tracks the actions that matter to a sales-led business, and the domain, security and on-page SEO groundwork the whole site depends on.",
    challenge:
      "The team wanted to publish news, guides and job openings themselves, but without structure that tends to produce inconsistent pages and broken layouts. There was no reliable measurement: no way to tell which pages led to enquiries or calls, or whether search traffic was growing. The domain and certificate setup also needed to be put on a clean footing before any of the SEO work could count.",
    solution:
      "We gave editors role-based access to blogs and careers in the CMS, with a draft, preview and publish workflow and a library of reusable content blocks so new pages stay on-brand without design input. Analytics runs through Google Tag Manager with a structured data layer, so enquiries, click-to-call taps and downloads are captured as named events and marked as conversions. On the technical side we configured DNS and SSL with a single canonical host, and shipped per-page metadata, canonical tags, schema.org Organization and Product structured data, an auto-generated XML sitemap, and pages tuned against Core Web Vitals.",
    statpoints: [
      "Blogs and job listings could not be published by the team",
      "No visibility into which pages produced enquiries or calls",
      "No analytics or tag management in place",
      "Limited search visibility and no structured metadata",
    ],
    pillars: [
      {
        num: "01",
        title: "Editorial Workflow",
        text: "Role-based editing for blogs and careers, with draft, preview and publish states so changes are checked before they go live.",
      },
      {
        num: "02",
        title: "Reusable Content Blocks",
        text: "A set of composable blocks — text, image, gallery, call-to-action, job details — that editors assemble into pages without breaking the layout.",
      },
      {
        num: "03",
        title: "Event-Level Measurement",
        text: "A Google Tag Manager data layer that records enquiries, calls and downloads as named events and reports them as conversions in analytics.",
      },
      {
        num: "04",
        title: "Technical SEO Foundation",
        text: "Clean DNS and SSL, canonical tags, per-page metadata, schema.org structured data, an XML sitemap and Core Web Vitals tuning.",
      },
    ],
    stepsData: [
      {
        phase: "Phase 01",
        title: "Domain, DNS & SSL",
        desc: "Configured DNS records, issued the SSL certificate and redirected all variants to one canonical HTTPS host.",
        icon: I.secure,
      },
      {
        phase: "Phase 02",
        title: "Editorial Set-up",
        desc: "Created blog and career content types, editor roles, the preview and publish flow, and the reusable block library.",
        icon: I.flow,
      },
      {
        phase: "Phase 03",
        title: "Tracking Plan & GTM",
        desc: "Defined the events worth measuring, built the data layer and Tag Manager container, and wired conversions into analytics.",
        icon: I.chart,
      },
      {
        phase: "Phase 04",
        title: "On-page SEO & Launch",
        desc: "Added metadata, structured data and the sitemap, checked Core Web Vitals and launched with search console submission.",
        icon: I.launch,
      },
    ],
    results: [
      { metric: "Blogs & careers", before: "Developer-dependent", after: "Published by the team", delta: "Self-service" },
      { metric: "Measurement", before: "None", after: "Analytics + Tag Manager", delta: "Enquiries tracked" },
      { metric: "Search readiness", before: "Limited", after: "On-page SEO in place", delta: "Indexable & structured" },
      { metric: "Domain set-up", before: "Unconfigured", after: "Domain live with SSL", delta: "Secure by default" },
    ],
    stats: [
      { value: "3", suffix: "", label: "Content types editors own" },
      { value: "3", suffix: "", label: "Conversion events tracked" },
      { value: "4", suffix: "wk", label: "Full build" },
      { value: "1", suffix: "", label: "Tag Manager container" },
    ],
    testimonial: TESTIMONIAL,
    _verify: [
      "Kerala as the client's location",
      "Role-based editor access and a draft/preview/publish workflow exist in the CMS",
      "Reusable content blocks exist (and the listed block types)",
      "Analytics platform is GA4 and conversions are configured",
      "Tracked events are enquiries, click-to-call and downloads (the '3 conversion events' stat)",
      "'3 content types editors own' = products, blogs, careers",
      "Before-state of the domain/DNS/SSL and whether a single canonical host redirect was set up",
      "schema.org Organization and Product structured data, canonical tags and XML sitemap are live",
      "Core Web Vitals tuning and search console submission were done",
      "Founder is happy for the quote to be used with anonymised attribution",
      SCREENSHOT_CHECK,
      IMAGE_FOLDER_CHECK,
    ],
  },
]

export default catalogue
