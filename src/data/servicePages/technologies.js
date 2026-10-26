// Technology (product-engineering type, "Tech Stack" group) service pages. Keys are navbar slugs (see navMenus.js).
// Schema: see ./index.js. Reference page: healthcare.js -> "hospital-management-system".

// Shared shape for the engagement models table. Wording is tailored per page.
const engagementTable = (eyebrow, intro, bottleneck, defined, managed) => ({
  eyebrow,
  title: "Ways to work with us",
  intro,
  columns: ["Model", "Best when", "How it is priced"],
  rows: [
    ["Bottleneck review", bottleneck, "Fixed fee for a short, defined engagement"],
    ["Defined build", defined, "Fixed scope, paid against agreed milestones"],
    ["Managed team", managed, "Monthly, based on the team composition you need"],
  ],
  highlightLast: false,
  note: "We quote after the first conversation, once we know the scope. Every system is handed over with documentation and a named support contact.",
})

const technologies = {
  // ───────────────────────────────────────────────────────────────────────────
  "react-js": {
    seo: {
      title: "React JS Development Company for Operational Apps",
      description:
        "React JS development for staff dashboards, front desk and ward screens, and customer apps. Component systems, Redux Toolkit, accessible forms and React Native.",
      keywords: [
        "React JS development company",
        "React development services",
        "hire React developers",
        "React dashboard development",
        "React Native app development",
        "Redux Toolkit development",
        "React frontend development India",
        "React web application development",
      ],
    },
    hero: {
      highlight: "React",
      title: "React interfaces that *staff use all day* without a workaround",
      subtitle:
        "We build React screens for the people who run the operation: front desk, wards, dispatch, finance and management. Fast to load, quick to fill in, and shaped around the step each person owns.",
      chips: ["Operations dashboards", "Front desk screens", "Customer apps", "Redux Toolkit", "Forms", "Accessibility", "React Native"],
      formTitle: "Which screen slows your team down?",
      formMessageLabel: "Tell us who uses it and what they wait for",
    },
    stats: [
      { value: "50+", label: "Modules in a hospital system built with React, Node.js and PostgreSQL" },
      { value: "3", label: "Months from start to delivery on that build" },
      { value: "48+", label: "Projects delivered since 2023" },
    ],
    definition: {
      eyebrow: "What it is",
      title: "What is React JS development?",
      paragraphs: [
        "React JS development is building user interfaces with React, an open-source JavaScript library that assembles screens from small, reusable components. Each component holds its own layout and behaviour, so a form field, a patient card or a status badge is built once and used everywhere.",
        "We use React when a screen is busy and used for hours at a time: queues that update, forms with many conditional fields, dashboards that several roles read differently. React's component model keeps those screens consistent as the system grows, and the same team can carry the work into a mobile app with React Native.",
        "We don't use it everywhere. A content site with a few forms is better served by a CMS or by Next.js with mostly static pages. We pick the simplest tool that will hold up, and we say so before quoting.",
      ],
      points: [
        { icon: "MonitorSmartphone", text: "Which screen does your team keep open all day?" },
        { icon: "Timer", text: "How many clicks does the most common task take?" },
        { icon: "Split", text: "Where do staff keep a side register because the screen doesn't fit?" },
      ],
    },
    problems: {
      title: "Why React projects go wrong",
      intro: "React itself is rarely the problem. The trouble starts when screens are designed before anyone maps the work behind them.",
      items: [
        { icon: "Route", title: "Screens before process", text: "Mock-ups are approved before anyone asks who owns each step, so the app shows data but doesn't move work forward." },
        { icon: "Boxes", title: "No component system", text: "Every page is built from scratch, so buttons, tables and forms drift apart and each change has to be made five times." },
        { icon: "Network", title: "State everywhere", text: "Data is fetched and stored in random places, so two screens show different answers to the same question." },
        { icon: "ClipboardList", title: "Forms that fight staff", text: "Long forms with no validation, no saved drafts and no keyboard flow. People fall back to paper." },
        { icon: "Timer", title: "Slow on real devices", text: "Fine on a developer's laptop, sluggish on the front desk PC or a ward tablet on hospital Wi-Fi." },
        { icon: "Eye", title: "Accessibility left out", text: "Poor contrast, missing labels and mouse-only controls shut out some users and slow down everyone else." },
      ],
    },
    services: {
      title: "What we build with React",
      intro: "Each interface is built around the steps a role owns, with the reporting it needs designed in from the start.",
      items: [
        { icon: "LayoutDashboard", title: "Operations dashboards", text: "Live views of queues, occupancy, pending tasks and revenue, so managers can see what is waiting without asking." },
        { icon: "ClipboardCheck", title: "Front desk and ward screens", text: "Registration, check-in, queues, care tasks and hand-overs, laid out for speed and keyboard use." },
        { icon: "Users", title: "Customer-facing web apps", text: "Portals for booking, payments, documents and status updates that customers can use without a phone call." },
        { icon: "Boxes", title: "Component systems", text: "A shared library of tested components and design tokens, so new screens are assembled rather than rebuilt." },
        { icon: "ListChecks", title: "Complex forms and workflows", text: "Multi-step forms with validation, saved drafts, conditional fields and clear error messages, built with React Hook Form and Zod." },
        { icon: "Smartphone", title: "React Native mobile apps", text: "iOS and Android apps for field staff, patients or customers, sharing logic and types with the web app." },
      ],
    },
    tables: [
      {
        eyebrow: "Fit check",
        title: "Where React fits, and where we'd choose something else",
        intro: "React is a strong choice for interactive, long-lived interfaces. It is not the answer to every web project.",
        columns: ["Situation", "Our usual choice", "Why"],
        rows: [
          ["Staff screens used for hours every day", "React", "Fast updates, reusable components and predictable state across many screens"],
          ["Customer portal that also needs search visibility", "React with Next.js", "Server rendering for public pages, React for the logged-in app"],
          ["Mobile app for field staff or patients", "React Native", "One team, shared logic and types with the web app"],
          ["Marketing or catalogue site edited by non-developers", "A CMS, often with Next.js", "Editors change content without a developer; React adds little on its own"],
          ["A simple internal form or a one-off tool", "A low-code tool or a plain server-rendered page", "Cheaper to build and maintain when there is little interaction"],
        ],
      },
      engagementTable(
        "Engagement models",
        "Pick the model that matches where your React project is today.",
        "An existing React app is slow, fragile or hard to change",
        "The screens and workflows are agreed and you want them built",
        "You need a React team for a set project and period"
      ),
    ],
    stack: {
      title: "Our React toolkit",
      intro: "Chosen per project. We prefer well-supported libraries your own team can maintain after hand-over.",
      groups: [
        { label: "Core", items: ["React", "TypeScript", "Vite", "Next.js", "React Native", "Expo"] },
        { label: "State and data", items: ["Redux Toolkit", "RTK Query", "TanStack Query", "Zustand"] },
        { label: "Forms and UI", items: ["React Hook Form", "Zod", "Tailwind CSS", "Radix UI", "shadcn/ui", "Recharts"] },
        { label: "Testing", items: ["Vitest", "Jest", "React Testing Library", "Playwright", "Storybook"] },
        { label: "Delivery", items: ["GitHub Actions", "Vercel", "AWS", "Sentry"] },
      ],
    },
    process: {
      title: "How a React build runs",
      intro: "The new screens run alongside the old way until your staff trust them.",
      steps: [
        { title: "Bottleneck review", text: "We sit with the people who use the screens, map the steps they own and find where time is lost." },
        { title: "Plan", text: "Screens, components, priorities, timeline and cost, agreed and approved by you before the build starts." },
        { title: "Build in short cycles", text: "Working screens every cycle, starting with the one that hurts most, tested on the devices your staff actually use." },
        { title: "Run in parallel", text: "Staff use the new screens alongside the current way of working until the numbers match and they are confident." },
        { title: "Go live and train", text: "Each role is trained on the steps it owns. The component library and code are documented for your team." },
        { title: "Support and improve", text: "A named support contact, monitoring and the next round of improvements based on how the screens are used." },
      ],
    },
    caseStudy: {
      id: "hospital-os-patient-records-opd",
      title: "A 50+ module hospital system, built with React",
      intro: "A psychiatric and mental healthcare practice moved from a manual, offline system to a digitised workflow, built with React, Node.js and PostgreSQL in three months.",
    },
    related: ["product-engineering/frontend-development", "product-engineering/next-js", "product-engineering/web-application-development"],
    faq: [
      { q: "Is React a good choice for internal business software?", a: "Yes, when staff spend a lot of time in the screens and the data changes often. For a few simple forms, a lighter option is usually cheaper." },
      { q: "Can you take over an existing React app?", a: "Yes. We start with a bottleneck review of the code and the way it is used, then fix the worst problems before adding features." },
      { q: "Do you use Redux?", a: "Where it helps. Redux Toolkit suits apps with a lot of shared state across screens. Smaller apps often only need TanStack Query and local state." },
      { q: "Can you build the mobile app too?", a: "Yes, with React Native. It shares types, validation and business logic with the web app, so one team can maintain both." },
      { q: "How do you make React screens accessible?", a: "Semantic markup, proper labels, keyboard navigation, visible focus and sufficient contrast, checked with automated tools and by hand." },
      { q: "Will our own developers be able to maintain it?", a: "That is the aim. We use mainstream libraries and TypeScript, document the component system and hand over with a named support contact." },
      { q: "Do you also build the backend?", a: "Yes. We usually pair React with a Node.js and PostgreSQL backend, and can work with an existing API if you have one." },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  "node-js": {
    seo: {
      title: "Node JS Development Company for APIs and Backends",
      description:
        "Node.js backends and APIs with Express, NestJS and Fastify: REST, GraphQL, live status over WebSockets, queues for reminders, integrations and webhooks.",
      keywords: [
        "Node JS development company",
        "Node.js development services",
        "Node.js API development",
        "NestJS development",
        "Express.js backend development",
        "hire Node.js developers",
        "Node.js integration services",
        "backend development company India",
      ],
    },
    hero: {
      highlight: "Node",
      title: "Node.js backends that *carry the work between systems*",
      subtitle:
        "APIs, background jobs and integrations that move information between departments, staff and customers without anyone chasing it. Built to be read, tested and handed over.",
      chips: ["REST APIs", "GraphQL", "WebSockets", "Queues", "Webhooks", "NestJS", "Express", "Prisma"],
      formTitle: "What should happen automatically?",
      formMessageLabel: "Which update or reminder does someone chase by hand today?",
    },
    stats: [
      { value: "50+", label: "Modules in a hospital system with a Node.js and PostgreSQL backend" },
      { value: "48+", label: "Projects delivered since 2023" },
      { value: "3", label: "Countries we deliver to: USA, India and UAE" },
    ],
    definition: {
      eyebrow: "What it is",
      title: "What is Node.js development?",
      paragraphs: [
        "Node.js development is building server-side software, such as APIs, background workers and integrations, in JavaScript or TypeScript using the Node.js runtime. Node handles many connections at once without blocking, which suits APIs, real-time updates and systems that spend their time waiting on other systems.",
        "Most operational software is mostly plumbing: a booking arrives, a record is created, a reminder is scheduled, a payment webhook comes back, a dashboard updates. Node.js is good at that kind of work, and using TypeScript on both server and browser lets one team share types and validation end to end.",
        "It is not our choice for heavy number-crunching or model training. That work goes to Python, and Node calls it as a service. We pick the simplest tool that will hold up.",
      ],
      points: [
        { icon: "Bell", text: "Which reminder or follow-up depends on someone remembering?" },
        { icon: "Plug", text: "Which two systems are kept in sync by copy and paste?" },
        { icon: "Activity", text: "Which status do staff refresh a page to check?" },
      ],
    },
    problems: {
      title: "Why Node.js backends become hard to live with",
      intro: "Node makes it quick to get an API running. Without structure, it is just as quick to build one nobody can safely change.",
      items: [
        { icon: "Puzzle", title: "No structure", text: "Routes, business rules and database calls mixed in the same files, so every change risks breaking something else." },
        { icon: "Repeat", title: "Jobs run inside requests", text: "Emails, reminders and syncs are done while the user waits, and silently lost when the server restarts." },
        { icon: "Link2", title: "Fragile integrations", text: "No retries, no logs, no record of what was sent. When a partner API fails, nobody notices until a customer complains." },
        { icon: "Lock", title: "Security as an afterthought", text: "Weak input validation, shared admin keys and no audit trail on sensitive records." },
        { icon: "Database", title: "Data model guessed", text: "Collections and tables designed before the workflow was mapped, so reporting needs painful workarounds later." },
        { icon: "Eye", title: "No visibility", text: "No metrics or structured logs, so problems are found by users rather than by the team running the system." },
      ],
    },
    services: {
      title: "What we build with Node.js",
      intro: "Each backend is designed around who owns each step and what management needs to see.",
      items: [
        { icon: "Server", title: "REST and GraphQL APIs", text: "Well-documented APIs with versioning, validation and role-based access, built on Express, NestJS or Fastify." },
        { icon: "Activity", title: "Live status with WebSockets", text: "Queues, bed status, order tracking and dashboards that update the moment something changes." },
        { icon: "Bell", title: "Queues and background jobs", text: "Reminders, follow-ups, report generation and retries that run reliably in the background with BullMQ and Redis." },
        { icon: "Plug", title: "Integrations and webhooks", text: "Payment gateways, messaging, accounting, lab and partner systems, with retries, logs and alerts." },
        { icon: "Database", title: "Data layer", text: "PostgreSQL with Prisma, or MongoDB with Mongoose, with migrations, audit trails and reporting designed in." },
        { icon: "Workflow", title: "Workflow and rules engines", text: "Approvals, escalations and status changes that follow your rules, with a named owner at each step." },
      ],
    },
    tables: [
      {
        eyebrow: "What you get",
        title: "Backend capability, and what it gives your team",
        intro: "The technical pieces matter because of what they change for the people doing the work.",
        columns: ["Capability", "What it gives your team"],
        rows: [
          ["Background job queue", "Reminders and follow-ups go out on time, even if no one is at a desk"],
          ["Webhooks with retries and logs", "A failed payment or message is retried and flagged, not lost"],
          ["WebSocket updates", "Staff see a status change immediately instead of calling to ask"],
          ["Audit trail", "Every change to a record shows who made it and when"],
          ["Documented API", "Your team or a partner can build on the system without reading the code"],
          ["Structured logs and alerts", "Problems are spotted by the team running the system before users notice"],
        ],
      },
      engagementTable(
        "Engagement models",
        "Pick the model that matches where your backend is today.",
        "An API is slow, unreliable or blocking new features",
        "The workflows and integrations are agreed and need building",
        "You need a backend team for a set project and period"
      ),
    ],
    stack: {
      title: "Our Node.js toolkit",
      intro: "Chosen per project, favouring mature libraries with long-term support.",
      groups: [
        { label: "Core", items: ["Node.js", "TypeScript", "Express", "NestJS", "Fastify"] },
        { label: "APIs and real time", items: ["REST", "GraphQL", "Apollo", "Socket.IO", "OpenAPI"] },
        { label: "Data and jobs", items: ["PostgreSQL", "Prisma", "MongoDB", "Mongoose", "Redis", "BullMQ"] },
        { label: "Testing", items: ["Jest", "Vitest", "Supertest", "Postman"] },
        { label: "Deployment", items: ["Docker", "GitHub Actions", "AWS", "Google Cloud", "Azure"] },
      ],
    },
    process: {
      title: "How a Node.js build runs",
      intro: "Integrations are tested against real data while the old process keeps running.",
      steps: [
        { title: "Bottleneck review", text: "We map the hand-offs between people and systems and list what should happen automatically." },
        { title: "Plan", text: "Data model, APIs, jobs, integrations, timeline and cost, approved by you before the build starts." },
        { title: "Build in short cycles", text: "Working endpoints and jobs every cycle, with tests and API documentation kept up to date." },
        { title: "Run in parallel", text: "Automated reminders and syncs run alongside the manual process until the results match." },
        { title: "Go live and train", text: "Cut-over with monitoring in place. Your team gets runbooks and API documentation." },
        { title: "Support and improve", text: "A named support contact, alerts on failures and the next layer of automation once the basics are trusted." },
      ],
    },
    caseStudy: {
      id: "hospital-os-billing-admin-analytics",
      title: "A hospital system backend built on Node.js",
      intro: "A 50+ module hospital management system for a psychiatric and mental healthcare practice, built with React, Node.js and PostgreSQL and delivered in three months.",
    },
    related: ["product-engineering/full-stack-development", "ai-development/workflow-automation", "healthcare/healthcare-integration"],
    faq: [
      { q: "Express, NestJS or Fastify: which do you use?", a: "NestJS for larger systems that need firm structure, Express for smaller services and existing codebases, Fastify where raw throughput matters. We explain the choice in the plan." },
      { q: "Do you build GraphQL or REST APIs?", a: "Both. REST is simpler for most integrations. GraphQL helps when many different screens need different shapes of the same data." },
      { q: "SQL or MongoDB?", a: "Usually PostgreSQL with Prisma, because operational data is relational and reporting is easier. MongoDB with Mongoose fits document-shaped data well." },
      { q: "How do you make sure reminders actually go out?", a: "They run in a job queue, not inside a web request, with retries, logs and an alert when something fails repeatedly." },
      { q: "Can you connect to our existing systems?", a: "Usually, yes. We connect through APIs, webhooks, file drops or the database where that is safe, and log every exchange." },
      { q: "Can you fix an existing Node.js backend?", a: "Yes. A bottleneck review shows where it is slow or fragile, and we fix the worst parts first while it stays in use." },
      { q: "Who owns the code?", a: "You do. It is handed over with documentation and a named support contact." },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  "next-js": {
    seo: {
      title: "Next JS Development Company for Fast Websites & Apps",
      description:
        "Next.js development for fast, search-friendly websites and web apps: server rendering, static pages, App Router, Auth.js or Clerk, deployed on Vercel or your cloud.",
      keywords: [
        "Next JS development company",
        "Next.js development services",
        "hire Next.js developers",
        "Next.js SEO website",
        "Next.js App Router development",
        "Next.js web application",
        "Next.js CMS website",
        "Next.js developers India",
      ],
    },
    hero: {
      highlight: "Next",
      title: "Next.js sites and apps that are *fast to load and easy to find*",
      subtitle:
        "Public pages that search engines can read, logged-in areas that feel instant, and content your team can edit without a developer. This site runs on Next.js too.",
      chips: ["Server rendering", "Static pages", "App Router", "API routes", "Auth", "CMS", "Vercel", "Your own cloud"],
      formTitle: "What should your site do better?",
      formMessageLabel: "Tell us what is slow, hard to edit or hard to find",
    },
    definition: {
      eyebrow: "What it is",
      title: "What is Next.js development?",
      paragraphs: [
        "Next.js development is building websites and web applications with Next.js, a React framework that can render pages on the server, generate them in advance as static files, or render them in the browser. Each page gets the approach that suits it, which makes sites fast to load and easy for search engines to read.",
        "We use Next.js when one product has to do two jobs: public pages that need to rank and load quickly, and a logged-in area that behaves like an application. The App Router, server components and API routes let one codebase handle both, with authentication from Auth.js, Clerk or Auth0. This website is built on Next.js.",
        "For a purely internal tool with no public pages, plain React with a separate API is often simpler. For a site that is mostly content, a CMS does most of the work and Next.js only renders it. We pick the simplest tool that will hold up.",
      ],
      points: [
        { icon: "Timer", text: "How long does your main page take to load on a phone?" },
        { icon: "Search", text: "Can search engines read the pages that matter?" },
        { icon: "FileText", text: "Can your team update content without asking a developer?" },
      ],
    },
    problems: {
      title: "Why Next.js projects underdeliver",
      intro: "Next.js gives you many ways to render a page. Picking the wrong one, or ignoring the content side, undoes most of its benefit.",
      items: [
        { icon: "Split", title: "Wrong rendering choice", text: "Everything rendered in the browser, so pages load blank, search engines see little and the framework's main advantage is lost." },
        { icon: "Timer", title: "Heavy pages", text: "Large images, unused scripts and oversized bundles make a fast framework feel slow on mobile." },
        { icon: "FileText", title: "Content locked in code", text: "Every text change needs a developer and a deployment, so the site goes stale." },
        { icon: "Search", title: "SEO left to the end", text: "Titles, metadata, structured data and sitemaps added after launch, if at all." },
        { icon: "KeyRound", title: "Auth bolted on", text: "Login added late, with protected pages and API routes checked inconsistently." },
        { icon: "Cloud", title: "Locked to one host", text: "Built around platform-specific features with no plan for moving to your own cloud if costs or data rules change." },
      ],
    },
    services: {
      title: "What we build with Next.js",
      intro: "Each build starts from what the site has to achieve for the business, then picks how each page is rendered.",
      items: [
        { icon: "Globe", title: "Company and service websites", text: "Fast, search-friendly sites with clear structure, metadata, sitemaps and structured data built in." },
        { icon: "FileText", title: "CMS-driven sites and catalogues", text: "Content and product catalogues your team edits in a headless CMS, published without a developer." },
        { icon: "PanelsTopLeft", title: "Web apps with public and private areas", text: "Customer portals, booking flows and dashboards behind login, sharing one codebase with the public site." },
        { icon: "GraduationCap", title: "Education platforms", text: "Course pages, student and teacher areas and AI assistants on one platform." },
        { icon: "KeyRound", title: "Authentication and roles", text: "Login with Auth.js, Clerk or Auth0, role-based access and protected API routes." },
        { icon: "Rocket", title: "Migration to Next.js", text: "Moving an older site or React app to Next.js page by page, keeping URLs and search rankings intact." },
      ],
    },
    tables: [
      {
        eyebrow: "Rendering choices",
        title: "How each page should be rendered",
        intro: "Most Next.js sites mix approaches. We choose per page, based on how often the content changes and who sees it.",
        columns: ["Page type", "Rendering approach", "Why"],
        rows: [
          ["Home, service and about pages", "Static generation", "Fastest load, easy for search engines, rebuilt when content changes"],
          ["Product or catalogue pages", "Static with incremental revalidation", "Fast pages that pick up CMS edits without a full rebuild"],
          ["Search results and filtered lists", "Server rendering", "Fresh results that are still readable by search engines"],
          ["Logged-in dashboards", "Server components with client interactivity", "Data loaded securely on the server, interactions handled in the browser"],
          ["Forms and simple back-end tasks", "Route handlers and server actions", "No separate API needed for small jobs"],
        ],
      },
      engagementTable(
        "Engagement models",
        "Pick the model that matches where your site or app is today.",
        "A site is slow, hard to edit or losing search visibility",
        "Pages, content model and features are agreed and need building",
        "You need a Next.js team for a set project and period"
      ),
    ],
    stack: {
      title: "Our Next.js toolkit",
      intro: "Chosen per project. Content tools are picked for the people who will edit the site.",
      groups: [
        { label: "Core", items: ["Next.js", "React", "TypeScript", "App Router", "Server components"] },
        { label: "Content and data", items: ["Sanity", "Strapi", "Contentful", "Payload", "PostgreSQL", "Prisma"] },
        { label: "Auth and UI", items: ["Auth.js", "Clerk", "Auth0", "Tailwind CSS", "shadcn/ui"] },
        { label: "Testing and quality", items: ["Playwright", "Vitest", "Lighthouse", "ESLint"] },
        { label: "Deployment", items: ["Vercel", "AWS", "Google Cloud", "Cloudflare", "Docker"] },
      ],
    },
    process: {
      title: "How a Next.js build runs",
      intro: "Content, URLs and search visibility are planned before the first page is built.",
      steps: [
        { title: "Review", text: "We look at what the site has to achieve, who edits it, current speed and search performance." },
        { title: "Plan", text: "Page list, content model, rendering approach, timeline and cost, approved by you before the build starts." },
        { title: "Build in short cycles", text: "Working pages on a preview link every cycle, with content entered by your team as it is ready." },
        { title: "Run in parallel", text: "For replacements, the new site runs on a preview address while redirects and content are checked against the old one." },
        { title: "Go live and train", text: "Launch with redirects, sitemaps and monitoring in place. Editors are trained on the CMS." },
        { title: "Support and improve", text: "A named support contact, speed and search checks, and new pages or features as you need them." },
      ],
    },
    related: ["product-engineering/cms-development", "product-engineering/react-js", "product-engineering/web-application-development"],
    faq: [
      { q: "Why use Next.js instead of plain React?", a: "When public pages need to load fast and be found in search. Next.js renders them on the server or in advance, which plain React does not do on its own." },
      { q: "Do we have to host on Vercel?", a: "No. Vercel is the simplest option for many sites, but we also deploy Next.js on AWS, Google Cloud or Azure when cost, control or data rules call for it." },
      { q: "Can our team edit the content?", a: "Yes. We connect a headless CMS such as Sanity, Strapi or Payload so your team updates text, images and products without a developer." },
      { q: "Will moving to Next.js hurt our search rankings?", a: "Not if it is planned. We keep or redirect every URL, carry over metadata and check the new site before switching." },
      { q: "Which login option do you recommend?", a: "Auth.js when you want to keep users in your own database, Clerk or Auth0 when you want a managed service with less to maintain." },
      { q: "Is this site really built on Next.js?", a: "Yes. The Algon website, including this page, is built with Next.js." },
      { q: "Can the same codebase include a logged-in app?", a: "Yes. Public pages and a logged-in area can share one Next.js codebase, components and deployment." },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  python: {
    seo: {
      title: "Python Development Company for AI, Data & Automation",
      description:
        "Python development for AI, data and automation: FastAPI, Django and Flask services, RAG pipelines, PyTorch and TensorFlow models, reporting and integration scripts.",
      keywords: [
        "Python development company",
        "Python development services",
        "hire Python developers",
        "FastAPI development",
        "Django development company",
        "Python AI development",
        "Python automation services",
        "RAG pipeline development",
      ],
    },
    hero: {
      title: "Python for the *AI, data and automation* behind your operation",
      subtitle:
        "Services that read documents, answer questions from your own records, produce the reports managers actually use and move data between systems on a schedule. Built to run unattended and to be checked.",
      chips: ["FastAPI", "Django", "Flask", "RAG pipelines", "PyTorch", "Data processing", "Reporting", "Automation scripts"],
      formTitle: "What would you automate first?",
      formMessageLabel: "Which report, document or data task eats the most hours?",
    },
    stats: [
      { value: "8", label: "Weeks to deliver a college platform with AI teacher agents" },
      { value: "48+", label: "Projects delivered since 2023" },
      { value: "3", label: "Countries we deliver to: USA, India and UAE" },
    ],
    definition: {
      eyebrow: "What it is",
      title: "What is Python development?",
      paragraphs: [
        "Python development is building software in Python, a general-purpose programming language with the widest set of libraries for AI, machine learning and data work. It is used for web services and APIs, data pipelines, automation scripts and the models and retrieval systems behind most AI features.",
        "We use Python where the work is about data: cleaning and joining it, training or calling models, retrieving the right passages for an AI answer, or producing a report on a schedule. FastAPI wraps that work in a fast, documented API that the rest of your system can call, and Django suits back-office applications that need an admin interface out of the box.",
        "AI goes in only where it earns its place. If a rule or a well-designed form solves the problem, we build that instead. When AI is the right answer, the records it depends on have to be reliable first.",
      ],
      points: [
        { icon: "FileSearch", text: "Which documents does someone read just to find one answer?" },
        { icon: "BarChart3", text: "Which report is rebuilt by hand every week?" },
        { icon: "Repeat", text: "Which data is copied between systems on a schedule?" },
      ],
    },
    problems: {
      title: "Why Python and AI projects stall",
      intro: "Most stall in the gap between a promising notebook and a service people rely on every day.",
      items: [
        { icon: "FlaskConical", title: "Stuck in the notebook", text: "A model or script works on one laptop but never becomes a service with an API, logs and an owner." },
        { icon: "Database", title: "Data not ready", text: "AI is added before the records are clean and complete, so it gives confident answers from bad data." },
        { icon: "Target", title: "No way to measure", text: "Nobody agreed what a good answer looks like, so there is no way to tell if the AI is improving or getting worse." },
        { icon: "Sparkles", title: "AI where a rule would do", text: "A model is used for a decision a simple rule could make more cheaply and more predictably." },
        { icon: "Terminal", title: "Scripts nobody owns", text: "Automation runs from someone's machine on a timer. When it fails or they leave, the work stops quietly." },
        { icon: "Lock", title: "Data sent without thought", text: "Sensitive records sent to outside AI services without checking where they go or who can see them." },
      ],
    },
    services: {
      title: "What we build with Python",
      intro: "Each service has a named owner, a measure of whether it is working and a person who reviews its output where it matters.",
      items: [
        { icon: "Server", title: "APIs with FastAPI, Django and Flask", text: "Documented services that expose models, data and automation to your web and mobile apps." },
        { icon: "FileSearch", title: "RAG pipelines", text: "Search over your own documents and records, so AI answers come with sources your staff can check." },
        { icon: "Bot", title: "AI agents and assistants", text: "Assistants that draft, summarise, answer and route work, with a person approving anything that matters." },
        { icon: "Brain", title: "Machine learning models", text: "Classification, forecasting and extraction models with PyTorch, TensorFlow or scikit-learn, trained and tested on your data." },
        { icon: "LineChart", title: "Data processing and reporting", text: "Pipelines that clean, join and summarise data into the reports and dashboards managers use every week." },
        { icon: "Workflow", title: "Automation and integration scripts", text: "Scheduled jobs that move data between systems, with logs, retries and alerts instead of someone's laptop." },
      ],
    },
    tables: [
      {
        eyebrow: "Fit check",
        title: "Where Python fits, and where we'd choose something else",
        intro: "Python is our first choice for AI and data work. For other parts of a system, another tool is often simpler.",
        columns: ["Task", "Our usual choice", "Why"],
        rows: [
          ["AI features, RAG and model serving", "Python with FastAPI", "The AI and data libraries are in Python, and FastAPI makes them callable by the rest of the system"],
          ["Data pipelines and scheduled reports", "Python", "Strong libraries for cleaning, joining and summarising data"],
          ["Back-office app with an admin panel", "Django", "Admin, auth and data model included, so less to build"],
          ["Real-time staff screens and live status", "Node.js and React", "Better fit for many open connections and shared types with the frontend"],
          ["A one-off integration between two SaaS tools", "A workflow automation tool", "Cheaper to set up and change when the logic is simple"],
        ],
      },
      engagementTable(
        "Engagement models",
        "Pick the model that matches where your data or AI project is today.",
        "A prototype or script works but is not trusted in daily use",
        "The data, use case and success measure are agreed",
        "You need a Python and AI team for a set project and period"
      ),
    ],
    stack: {
      title: "Our Python toolkit",
      intro: "Chosen per project. Where data must stay with you, we use models that can run in your own infrastructure.",
      groups: [
        { label: "Web and APIs", items: ["Python", "FastAPI", "Django", "Flask", "Pydantic", "Celery"] },
        { label: "AI and ML", items: ["PyTorch", "TensorFlow", "scikit-learn", "Hugging Face", "LangChain", "LlamaIndex"] },
        { label: "Data", items: ["pandas", "Polars", "PostgreSQL", "pgvector", "Airflow"] },
        { label: "Testing", items: ["pytest", "Evaluation sets", "Ruff", "mypy"] },
        { label: "Deployment", items: ["Docker", "GitHub Actions", "AWS", "Google Cloud", "Azure"] },
      ],
    },
    process: {
      title: "How a Python or AI build runs",
      intro: "AI output is checked against real cases before anyone relies on it.",
      steps: [
        { title: "Bottleneck review", text: "We map the task, the data it depends on and who owns the result. We say plainly if AI is not needed." },
        { title: "Plan", text: "Data sources, approach, how success is measured, timeline and cost, approved by you before the build starts." },
        { title: "Build in short cycles", text: "A working pipeline early, tested against real examples your team provides, improved each cycle." },
        { title: "Run in parallel", text: "The automated output is compared with the manual result until the team trusts it." },
        { title: "Go live and train", text: "Deployed as a monitored service. Staff learn how to review, correct and escalate output." },
        { title: "Support and improve", text: "A named support contact, regular checks of accuracy and updates as your data and needs change." },
      ],
    },
    related: ["ai-development/rag-development-services", "ai-development/machine-learning", "ai-development/workflow-automation"],
    faq: [
      { q: "FastAPI, Django or Flask?", a: "FastAPI for APIs and AI services, Django for back-office apps that need an admin panel, Flask for small services or existing Flask code." },
      { q: "Can AI answer questions from our own documents?", a: "Yes. A RAG pipeline finds the relevant passages in your documents and the model answers from them, showing its sources so staff can check." },
      { q: "Does our data have to go to an outside AI provider?", a: "No. Where data must stay with you, we use models that run in your own cloud or on your own servers." },
      { q: "How do you know the AI is accurate enough?", a: "We agree a set of real test cases with your team before building, and measure every change against them." },
      { q: "Can you turn our data scientist's notebook into a service?", a: "Yes. We wrap it in an API, add tests, logging and monitoring, and deploy it so it runs without anyone's laptop." },
      { q: "Do you build the screens as well?", a: "Yes. The Python service usually sits behind a React or Next.js interface that we build or that your team already has." },
      { q: "Will you tell us if we don't need AI?", a: "Yes. If a rule, a report or a better form solves the problem, that is what we recommend." },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  typescript: {
    seo: {
      title: "TypeScript Development Company for Long-Lived Systems",
      description:
        "TypeScript development across frontend and backend: shared types between API and UI, safer refactors and maintainable systems handed over to your own team.",
      keywords: [
        "TypeScript development company",
        "TypeScript development services",
        "hire TypeScript developers",
        "full stack TypeScript",
        "JavaScript to TypeScript migration",
        "TypeScript React Node development",
        "end-to-end type safety",
      ],
    },
    hero: {
      title: "TypeScript systems your team can *still change in three years*",
      subtitle:
        "One language from database to screen, with types shared between API and interface. Mistakes show up while the code is written, not after a release, and your own developers can take over with confidence.",
      chips: ["Shared types", "React", "Node.js", "Next.js", "Safer refactors", "Migration from JavaScript", "Hand-over"],
      formTitle: "Who will maintain your system?",
      formMessageLabel: "Tell us about the codebase and who changes it today",
    },
    definition: {
      eyebrow: "What it is",
      title: "What is TypeScript development?",
      paragraphs: [
        "TypeScript development is writing software in TypeScript, a version of JavaScript that adds types: a description of what shape each piece of data should have. The compiler checks the code against those types before it runs, so many errors are caught while the code is being written rather than by users.",
        "Its value shows up over time. In a system with dozens of screens and services, a renamed field or a changed API response is flagged everywhere it matters. When the same types are shared between the backend and the interface, the two cannot quietly drift apart. That is why we write almost all our React, Next.js and Node.js work in TypeScript.",
        "TypeScript does not replace tests or a clear process. It makes code easier to read and change, which matters most for systems that will outlive the first build and be handed to another team.",
      ],
      points: [
        { icon: "History", text: "How often does a small change break something unrelated?" },
        { icon: "Users", text: "Could a new developer change the code safely in their first week?" },
        { icon: "Split", text: "Do the API and the interface ever disagree about a field?" },
      ],
    },
    problems: {
      title: "Why codebases get harder to change",
      intro: "Systems rarely fail on day one. They slow down as every change gets riskier.",
      items: [
        { icon: "TriangleAlert", title: "Errors found by users", text: "A missing field or wrong data type only shows up when someone hits that screen in production." },
        { icon: "Split", title: "API and UI drift apart", text: "The backend changes a response, the frontend is not updated, and the mismatch is found weeks later." },
        { icon: "Wrench", title: "Refactoring feels unsafe", text: "Nobody is sure what a change will break, so old code is left alone and workarounds pile up." },
        { icon: "Settings", title: "Types switched off", text: "TypeScript is adopted but strict mode is off and 'any' is everywhere, so it gives little protection." },
        { icon: "FileCode", title: "Knowledge in people's heads", text: "The shape of the data is documented nowhere, so only the original developer understands it." },
        { icon: "Handshake", title: "Painful hand-overs", text: "The client's own team inherits a codebase they cannot change without the original vendor." },
      ],
    },
    services: {
      title: "What we build with TypeScript",
      intro: "TypeScript runs through the whole system, so the data has one definition from database to screen.",
      items: [
        { icon: "Layers", title: "Full-stack TypeScript systems", text: "React or Next.js interfaces and Node.js services written in one language by one team." },
        { icon: "Link2", title: "Shared types between API and UI", text: "One definition of each record, used by the database layer, the API and the screens, using Prisma, Zod, tRPC or OpenAPI." },
        { icon: "RefreshCw", title: "JavaScript to TypeScript migration", text: "Converting an existing codebase file by file, tightening checks as we go, without stopping feature work." },
        { icon: "ShieldCheck", title: "Validated inputs", text: "Data checked at the edges with Zod, so bad input from forms, partners or webhooks is rejected with a clear error." },
        { icon: "Package", title: "Shared libraries and SDKs", text: "Typed client libraries for your API, so partners and your own apps integrate with fewer mistakes." },
        { icon: "Handshake", title: "Hand-over-ready codebases", text: "Strict settings, clear structure, tests and documentation, so your team can take over with confidence." },
      ],
    },
    tables: [
      {
        eyebrow: "What you get",
        title: "TypeScript practice, and what it gives your team",
        columns: ["Practice", "What it gives your team"],
        rows: [
          ["Strict mode from the first commit", "Fewer runtime errors and less guesswork about what data can be"],
          ["Types shared between API and UI", "A change on one side is flagged on the other before release"],
          ["Validation at every boundary", "Bad data from forms or partners is caught at the door, with a clear message"],
          ["Typed database access", "Queries match the real schema, and migrations show what they affect"],
          ["Linting and type checks in CI", "Problems are caught on every pull request, not after deployment"],
          ["Documented types and structure", "New developers understand the data model without reverse-engineering it"],
        ],
      },
      engagementTable(
        "Engagement models",
        "Pick the model that matches where your codebase is today.",
        "Changes keep breaking things or a migration has stalled",
        "A new system or a scoped migration is agreed",
        "You need a TypeScript team for a set project and period"
      ),
    ],
    stack: {
      title: "Our TypeScript toolkit",
      groups: [
        { label: "Core", items: ["TypeScript", "React", "Next.js", "Node.js", "NestJS"] },
        { label: "Types across the stack", items: ["Zod", "tRPC", "Prisma", "OpenAPI", "GraphQL Codegen"] },
        { label: "Quality", items: ["ESLint", "Prettier", "Strict mode", "Vitest", "Jest", "Playwright"] },
        { label: "Delivery", items: ["GitHub Actions", "GitLab CI", "Docker", "Vercel", "AWS"] },
      ],
    },
    process: {
      title: "How a TypeScript build or migration runs",
      intro: "For migrations, the existing system keeps running and shipping while it is converted.",
      steps: [
        { title: "Review", text: "We read the codebase or the plan, find where errors and slowdowns come from, and agree what matters most." },
        { title: "Plan", text: "Structure, shared types, migration order, timeline and cost, approved by you before work starts." },
        { title: "Build in short cycles", text: "Working features or converted modules every cycle, with type checks and tests running on each change." },
        { title: "Run in parallel", text: "Converted parts run alongside the old code until behaviour is confirmed to match." },
        { title: "Hand over", text: "Documentation, walkthroughs with your developers and a named support contact." },
        { title: "Support and improve", text: "We stay available for reviews, harder changes and the next phase of work." },
      ],
    },
    caseStudy: {
      id: "hospital-os-ipd-pharmacy-lab",
      title: "A 50+ module system built on one JavaScript stack",
      intro: "A hospital management system for a psychiatric and mental healthcare practice, built with React, Node.js and PostgreSQL in three months.",
    },
    related: ["product-engineering/full-stack-development", "product-engineering/application-modernization", "product-engineering/node-js"],
    faq: [
      { q: "Is TypeScript worth it for a small project?", a: "Usually, yes. The cost is small and it pays back the first time the code changes. For a short-lived script, plain JavaScript can be fine." },
      { q: "Can you convert our JavaScript codebase?", a: "Yes, gradually. TypeScript and JavaScript can run side by side, so we convert file by file while features keep shipping." },
      { q: "Does TypeScript slow development down?", a: "Slightly at the start. It saves far more time later, when changes are checked automatically instead of tested by hand." },
      { q: "How do you share types between backend and frontend?", a: "Through a shared package, typed API clients generated from OpenAPI or GraphQL, or tRPC when both sides are ours." },
      { q: "Does TypeScript replace testing?", a: "No. Types catch shape errors. Tests check behaviour. We use both." },
      { q: "Can our team take over the code?", a: "That is the goal. Every system is handed over with documentation, walkthroughs and a named support contact." },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  "aws-and-cloud": {
    seo: {
      title: "AWS & Cloud Services: Hosting, CI/CD and DevOps",
      description:
        "AWS, Google Cloud and Azure hosting with CI/CD, Docker, monitoring, backups and cost control, or private and on-premise hosting where your data must stay with you.",
      keywords: [
        "AWS cloud services",
        "AWS development company",
        "cloud hosting and DevOps services",
        "CI/CD setup GitHub Actions",
        "Docker Kubernetes deployment",
        "cloud cost optimisation",
        "on-premise hosting",
        "Google Cloud and Azure services",
      ],
    },
    hero: {
      highlight: "AWS",
      title: "Cloud setups that are *boring to run*, and that is the point",
      subtitle:
        "Hosting, deployments, monitoring and backups set up so releases are routine, problems are seen early and the monthly bill makes sense. In the public cloud, or on infrastructure you control.",
      chips: ["AWS", "Google Cloud", "Azure", "Vercel", "Supabase", "CI/CD", "Docker", "Monitoring", "Backups"],
      formTitle: "What worries you about your hosting?",
      formMessageLabel: "Tell us about outages, slow releases or a bill you can't explain",
    },
    definition: {
      eyebrow: "What it is",
      title: "What are AWS and cloud services?",
      paragraphs: [
        "AWS and cloud services cover renting computing infrastructure, such as servers, databases, storage and networking, from providers like Amazon Web Services, Google Cloud or Microsoft Azure instead of running your own hardware. Cloud engineering is the work of setting that infrastructure up, deploying software to it and keeping it secure, monitored and affordable.",
        "We set up the environments our systems run in: separate development, staging and production, automatic deployments, monitoring, backups and access controls. For simpler products we use managed platforms such as Vercel, Supabase, Firebase and Cloudflare, which remove a lot of work. For larger or regulated systems we use AWS, Google Cloud or Azure directly.",
        "Not everything belongs in a public cloud. When patient records or other sensitive data must stay with you, we deploy to a private cloud or to your own servers, with the same deployment and backup discipline.",
      ],
      points: [
        { icon: "Rocket", text: "How many manual steps does a release take today?" },
        { icon: "Database", text: "When were your backups last restored as a test?" },
        { icon: "Wallet", text: "Do you know what each part of your cloud bill pays for?" },
      ],
    },
    problems: {
      title: "Why cloud setups cause trouble",
      intro: "The cloud makes it easy to start. Without care, it is just as easy to end up with something fragile and expensive.",
      items: [
        { icon: "Terminal", title: "Manual deployments", text: "Releases depend on one person running commands by hand, so they are rare, stressful and hard to undo." },
        { icon: "Wallet", title: "Bills nobody understands", text: "Oversized servers, forgotten resources and no tagging, so costs grow without anyone deciding they should." },
        { icon: "Database", title: "Untested backups", text: "Backups exist on paper, but nobody has restored one, so no one knows if they work." },
        { icon: "Eye", title: "No monitoring", text: "Outages and slow pages are reported by users, not spotted by the team running the system." },
        { icon: "KeyRound", title: "Loose access", text: "Shared root accounts, keys in code and no record of who changed what." },
        { icon: "Lock", title: "Data in the wrong place", text: "Sensitive data stored in a region or service that does not meet the client's own rules." },
      ],
    },
    services: {
      title: "What we set up and run",
      intro: "Every environment is documented and handed over, with a named support contact.",
      items: [
        { icon: "Cloud", title: "Cloud architecture and environments", text: "Development, staging and production on AWS, Google Cloud or Azure, sized for today's load and documented." },
        { icon: "GitBranch", title: "CI/CD pipelines", text: "Automatic tests and deployments with GitHub Actions or GitLab CI, so releasing is routine and reversible." },
        { icon: "Boxes", title: "Containers and orchestration", text: "Docker for consistent environments, and Kubernetes where the system is large enough to justify it." },
        { icon: "Activity", title: "Monitoring and alerts", text: "Uptime, errors, performance and logs in one place, with alerts sent to the person who owns the fix." },
        { icon: "ShieldCheck", title: "Backups, recovery and access", text: "Scheduled backups, tested restores, least-privilege access and secrets kept out of code." },
        { icon: "Server", title: "Private and on-premise hosting", text: "Deployments to a private cloud or your own servers when data must stay with you." },
      ],
    },
    tables: [
      {
        eyebrow: "Choosing a platform",
        title: "Which platform fits which job",
        intro: "We choose per project, based on what the system needs, who will run it and where the data must live.",
        columns: ["Platform", "Good fit for", "Things to weigh"],
        rows: [
          ["Vercel", "Next.js sites and web apps that need fast, simple deployments", "Costs can rise with heavy traffic or long-running back-end work"],
          ["Supabase or Firebase", "MVPs and small products that need a database, auth and storage quickly", "Less control over data location and some vendor lock-in"],
          ["Cloudflare", "DNS, caching, security at the edge and light serverless work", "Usually paired with another platform for the main application"],
          ["AWS, Google Cloud or Azure", "Larger systems, integrations, AI workloads and regulated data", "More to configure and manage, so setup and monitoring matter"],
          ["Private cloud or on-premise", "Systems where data must stay inside the client's own infrastructure", "Hardware, power and updates become the client's responsibility"],
        ],
      },
      engagementTable(
        "Engagement models",
        "Pick the model that matches where your infrastructure is today.",
        "Deployments are painful, outages recur or the bill is out of control",
        "A new environment, migration or pipeline is scoped",
        "You need a team to run and improve your infrastructure for a set period"
      ),
    ],
    stack: {
      title: "Platforms and tools",
      intro: "We work across providers and do not resell any of them.",
      groups: [
        { label: "Cloud providers", items: ["AWS", "Google Cloud", "Microsoft Azure"] },
        { label: "Managed platforms", items: ["Vercel", "Cloudflare", "Supabase", "Firebase"] },
        { label: "Build and deploy", items: ["GitHub Actions", "GitLab CI", "Docker", "Kubernetes", "Terraform"] },
        { label: "Monitoring", items: ["CloudWatch", "Grafana", "Prometheus", "Sentry", "Uptime checks"] },
        { label: "Data and backups", items: ["PostgreSQL", "Amazon RDS", "S3", "Automated snapshots"] },
      ],
    },
    process: {
      title: "How a cloud engagement runs",
      intro: "Changes to live infrastructure are planned, tested and reversible.",
      steps: [
        { title: "Review", text: "We look at what runs where, how releases happen, what it costs and what would hurt most if it failed." },
        { title: "Plan", text: "Target setup, migration order, risks, timeline and cost, approved by you before anything changes." },
        { title: "Build and test", text: "Environments, pipelines, monitoring and backups set up in stages, with a tested restore before go-live." },
        { title: "Run in parallel", text: "For migrations, the new environment runs alongside the old one until traffic and data are confirmed." },
        { title: "Switch over and hand over", text: "A planned cut-over with a way back, then runbooks and access handed to your team." },
        { title: "Support and improve", text: "A named support contact, alert response and regular checks on cost, security and backups." },
      ],
    },
    related: ["healthcare/devops-in-healthcare", "product-engineering/managed-engineering-services", "product-engineering/application-modernization"],
    faq: [
      { q: "Which cloud provider do you recommend?", a: "The one that fits the system, your team and where your data must live. Many products start on Vercel or Supabase and move to AWS, Google Cloud or Azure as they grow." },
      { q: "Are you an AWS partner?", a: "No. We work across AWS, Google Cloud and Azure and recommend whichever suits the project. We do not resell cloud services." },
      { q: "Can you reduce our cloud bill?", a: "Often. We look for oversized resources, unused services and missing reserved pricing, and show what each change saves before making it." },
      { q: "Can our system run on our own servers?", a: "Yes. Where data must stay with you, we deploy to a private cloud or on-premise servers with the same deployment, monitoring and backup practices." },
      { q: "Do we need Kubernetes?", a: "Usually not at first. Many systems run well on simpler managed services. We recommend Kubernetes only when the size of the system justifies it." },
      { q: "How do you handle backups?", a: "Automated, stored separately from the main system, and restored as a test on a regular schedule so we know they work." },
      { q: "Will we have access to everything?", a: "Yes. Accounts are in your name, and access, documentation and runbooks are handed over." },
    ],
  },
}

export default technologies
