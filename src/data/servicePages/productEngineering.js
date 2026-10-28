// Product engineering service pages. Keys are navbar slugs (see navMenus.js).
// Schema: see ./index.js. Reference page: healthcare.js -> "hospital-management-system".

const productEngineering = {
  // ───────────────────────────────────────────────────────────────────────────
  "mvp-development": {
    seo: {
      title: "MVP Development Services for Founders and Startups",
      description:
        "MVP development for founders: a scoped first version built around your users' real workflow, ready for first customers and built to be extended.",
      keywords: [
        "MVP development",
        "MVP development company",
        "MVP development services India",
        "minimum viable product development",
        "startup app development",
        "build an MVP for a startup",
        "SaaS MVP development",
        "product development for founders",
      ],
    },
    hero: {
      highlight: "MVP",
      title: "A first version *built to be extended*, not rewritten",
      subtitle:
        "For founders taking an idea to first customers. We scope the smallest product that proves the idea, build it around how your users actually work, and leave you with code you own and can grow.",
      chips: ["Scope", "Workflow mapping", "Web app", "Mobile app", "Admin panel", "Usage tracking", "Documentation", "Handover"],
      formTitle: "What are you trying to prove first?",
      formMessageLabel: "Who is your first customer, and what do they do today?",
    },
    stats: [
      { value: "48+", label: "Projects delivered since 2023" },
      { value: "3", label: "Countries with clients: USA, India and UAE" },
      { value: "100%", label: "On-time delivery across our projects" },
    ],
    definition: {
      eyebrow: "What it is",
      title: "What is MVP development?",
      paragraphs: [
        "MVP development is building the smallest working version of a product that real customers can use, so a founder can test whether the idea solves a problem people will pay for. A good MVP is narrow in scope but sound underneath, so the second version extends the first instead of replacing it.",
        "Most MVPs start from a feature list. We start from the workflow of your first user: what they do today, where it breaks, and the one change that would make them switch. The features follow from that. Everything that does not serve it waits for version two.",
        "You own the code, data and documentation, per your contract terms. When the MVP works, the same codebase carries you into the next stage.",
      ],
      points: [
        { icon: "Target", text: "Which single job must the first version do well?" },
        { icon: "Users", text: "Who is the first customer, and what do they use today?" },
        { icon: "TrendingUp", text: "What would tell you the idea is working?" },
      ],
    },
    problems: {
      title: "Why first versions get thrown away",
      intro: "Most MVPs are not rewritten because the idea failed. They are rewritten because of how the first version was built.",
      items: [
        {
          icon: "ListChecks",
          title: "Built from a feature list",
          text: "Every idea from the pitch deck makes it into scope, so the first release is late and nothing in it is done well.",
        },
        {
          icon: "Zap",
          title: "Rushed to a demo date",
          text: "Code written for a demo has no structure underneath, so the first real customer request means starting again.",
        },
        {
          icon: "Puzzle",
          title: "Stuck at no-code limits",
          text: "A no-code prototype proves interest, then hits limits on data, permissions or integrations just as customers arrive.",
        },
        {
          icon: "KeyRound",
          title: "The founder doesn't hold the keys",
          text: "Code, hosting and accounts sit with a freelancer or agency. The founder finds out only when they want to move.",
        },
        {
          icon: "Eye",
          title: "No view of usage",
          text: "Without tracking built in, nobody can tell which features customers use, so the next decisions are guesswork.",
        },
        {
          icon: "Handshake",
          title: "Nobody accountable after launch",
          text: "The build team moves on at launch, and the first bugs from real customers have no owner.",
        },
      ],
    },
    services: {
      title: "What goes into an MVP we build",
      intro: "Small in features, complete in the parts that let it grow.",
      items: [
        {
          icon: "Route",
          title: "Workflow and scope",
          text: "We map your first user's day and cut the scope to the steps that prove the idea. You approve it before build.",
        },
        {
          icon: "MonitorSmartphone",
          title: "Web and mobile apps",
          text: "A web app, a mobile app or both, in React, Next.js, React Native or Flutter, depending on where your users are.",
        },
        {
          icon: "LayoutDashboard",
          title: "Admin panel",
          text: "A back office to manage users, content and requests, so you are not editing the database by hand.",
        },
        {
          icon: "Database",
          title: "A data model that can grow",
          text: "Data structured for the next version, so adding features does not mean migrating everything.",
        },
        {
          icon: "LineChart",
          title: "Usage tracking",
          text: "Events and simple dashboards that show which features customers use and where they drop off.",
        },
        {
          icon: "Cloud",
          title: "Deployment and handover",
          text: "Hosting in accounts you own, a deployment pipeline, documentation and a named support contact after launch.",
        },
      ],
    },
    tables: [
      {
        eyebrow: "Compare the options",
        title: "Prototype, rushed build or MVP",
        intro: "Each has its place. What matters is knowing what each one proves and what you are left with afterwards.",
        columns: ["Question", "No-code prototype", "Rushed build", "Algon MVP"],
        rows: [
          ["What it proves", "That people are interested in the idea", "That a demo can be shown on a date", "That customers will use the product for the job it was built for"],
          ["Who owns the code", "The platform; you own the configuration", "Often unclear, depending on who holds the repository", "You, per your contract terms, with repository and hosting in your accounts"],
          ["Can it scale", "Until it hits platform limits on data, logic or integrations", "Rarely without a rewrite", "Yes. The structure is designed for version two"],
          ["Who is accountable", "You", "Unclear once the build is delivered", "A named Algon project lead, during the build and after launch"],
          ["What happens next", "Rebuild in code when customers arrive", "Rewrite once the shortcuts show", "Extend the same codebase"],
        ],
        highlightLast: true,
        note: "A no-code prototype is often a sensible step before an MVP. If that is where you should start, we will say so.",
      },
    ],
    process: {
      title: "From idea to first customers",
      intro: "Short cycles, so you can show working software to prospects early and adjust before it is expensive.",
      steps: [
        { title: "Workflow review", text: "We sit down with you and, where possible, a few target users. We map what they do today and agree the one job the MVP must do." },
        { title: "Scope and plan", text: "A written scope that says what is in and what waits, with timeline and cost. You approve it before build starts." },
        { title: "Build in short cycles", text: "Working software you can click through regularly, so you can test it with prospects and change course early." },
        { title: "First customers", text: "We launch to a small group, fix what they find and watch how they use it." },
        { title: "Handover or next version", text: "Code, data and documentation are handed over. If you continue with us, version two builds on the same codebase." },
      ],
    },
    differentiators: {
      title: "How we keep the first version extendable",
      items: [
        { icon: "Layers", title: "Structure before speed", text: "A clean data model and code structure from the first week. It costs little at the start and saves a rewrite later." },
        { icon: "KeyRound", title: "Your accounts from the start", text: "Repository, hosting and third-party services are set up in your name, not ours." },
        { icon: "FileText", title: "Documented as we build", text: "Decisions, setup and architecture are written down, so a future in-house team can pick it up." },
        { icon: "UserCheck", title: "A named lead", text: "One person accountable for scope, delivery and what happens after launch." },
      ],
    },
    caseStudy: {
      id: "admissions-follow-up-automation",
      title: "Scoped tight, launched in four days",
      intro: "A study-abroad consultancy needed to be live quickly. We cut the scope to what mattered and launched a website with an AI chatbot in four days.",
    },
    related: ["product-engineering/product-development", "product-engineering/full-stack-development", "ai-development/ai-development-services"],
    faq: [
      {
        q: "How long does an MVP take to build?",
        a: "It depends on the scope agreed in the workflow review. You get a timeline before you commit, and the scope is set so the first version reaches customers quickly.",
      },
      {
        q: "Can you work from our no-code prototype or existing designs?",
        a: "Yes. A prototype shows us what users responded to. We use it as input, then build the parts that need to scale in code.",
      },
      {
        q: "Who owns the code?",
        a: "You do, per your contract terms. The repository, hosting and third-party accounts are set up in your name.",
      },
      {
        q: "Do you build mobile apps as well as web apps?",
        a: "Yes. We use React Native or Flutter for mobile and React or Next.js for web, and recommend one or both based on where your first users are.",
      },
      {
        q: "We are not technical. Can we still work with you?",
        a: "Yes. Your job is to know your customers and make the trade-off decisions. We bring the options, costs and risks of each decision in plain language.",
      },
      {
        q: "What happens after launch?",
        a: "We fix what first customers find, help you read the usage data and agree what goes into version two. You have a named support contact throughout.",
      },
      {
        q: "Will we have to rebuild once we grow?",
        a: "That is what we design against. The MVP is narrow in features, not in structure, so the next version extends it.",
      },
    ],
    cta: {
      title: "Have an idea and a first customer in mind?",
      text: "Tell us who it is for and what they do today. We will tell you what the first version should be.",
    },
  },

  // ───────────────────────────────────────────────────────────────────────────
  "product-development": {
    seo: {
      title: "Product Development Services: Growing Past Version One",
      description:
        "Product development for companies past v1: a roadmap from real usage, reporting designed in from the start, and a handover with documentation your team can use.",
      keywords: [
        "product development services",
        "software product development company",
        "SaaS product development",
        "healthcare product development",
        "custom software product development",
        "product engineering services India",
        "software product roadmap",
      ],
    },
    hero: {
      title: "Grow a product *from how it is really used*",
      subtitle:
        "For companies with a product in customers' hands that now needs to grow: new features, more users, larger customers. We plan from real usage, build in short cycles and hand over everything your team needs to run it.",
      chips: ["Roadmap", "New features", "Reporting", "Integrations", "Roles and permissions", "Release pipeline", "Healthcare products", "Documentation"],
      formTitle: "Where is your product stuck?",
      formMessageLabel: "What are customers asking for that you cannot ship yet?",
    },
    definition: {
      eyebrow: "What it is",
      title: "What is software product development?",
      paragraphs: [
        "Software product development is the ongoing work of designing, building and improving a product that many customers use, as opposed to a one-off system for a single organisation. After version one, it means deciding what to build next from evidence, shipping it without breaking what already works, and keeping the product maintainable as it grows.",
        "Products stall after v1 when the roadmap follows the loudest customer, reporting is left for later and knowledge sits in a few people's heads. We plan from usage data and customer workflows, design reporting in alongside each feature and document as we go.",
        "For healthcare product companies, we bring what we have learned from hospital deployments: how front desks, wards, pharmacy and billing really run, and where a product has to fit around them rather than the other way round.",
      ],
      points: [
        { icon: "BarChart3", text: "Which features do customers use every week, and which never?" },
        { icon: "Route", text: "Where does your product stop and a customer's workaround begin?" },
        { icon: "FileText", text: "Could a new engineer understand the system from its documentation?" },
      ],
    },
    problems: {
      title: "Why products stall after version one",
      items: [
        {
          icon: "Inbox",
          title: "Roadmap by request",
          text: "Each large customer asks for something different, and the product turns into a collection of one-off features.",
        },
        {
          icon: "BarChart3",
          title: "Reporting left for later",
          text: "Customers ask for reports the data model cannot produce without reshaping it.",
        },
        {
          icon: "History",
          title: "Launch shortcuts compound",
          text: "Decisions made to hit the first launch now slow every release.",
        },
        {
          icon: "Hospital",
          title: "Doesn't fit the customer's operation",
          text: "In sectors like healthcare, a product that ignores how wards, desks and billing counters run gets worked around, then dropped.",
        },
        {
          icon: "Users",
          title: "Knowledge in a few heads",
          text: "Only one or two people understand parts of the system, so every change waits for them.",
        },
        {
          icon: "TriangleAlert",
          title: "Releases feel risky",
          text: "Without automated tests and staged deployment, each release breaks something that used to work.",
        },
      ],
    },
    services: {
      title: "What we build as the product grows",
      intro: "Each piece is planned against how customers use the product today, not how it was imagined at launch.",
      items: [
        {
          icon: "Target",
          title: "Roadmap from usage",
          text: "We read usage data and talk to your customers' staff, then propose what to build next with the cost and risk of each option.",
        },
        {
          icon: "Boxes",
          title: "New features and modules",
          text: "Built in short cycles and released to a pilot group before every customer gets them.",
        },
        {
          icon: "LayoutDashboard",
          title: "Reporting and analytics",
          text: "The reports customers ask for, and the data structure behind them, designed with each feature rather than after it.",
        },
        {
          icon: "Plug",
          title: "Integrations",
          text: "Connections to the systems your customers already run, from accounting tools to hospital lab and pharmacy software.",
        },
        {
          icon: "ShieldCheck",
          title: "Tests and release pipeline",
          text: "Automated tests and staged deployments, so a release is routine rather than an event.",
        },
        {
          icon: "FileText",
          title: "Documentation and handover",
          text: "Architecture notes, runbooks and onboarding guides, so your in-house team can take over any part.",
        },
      ],
    },
    tables: [
      {
        eyebrow: "Where to start",
        title: "It depends on where the product is",
        intro: "Most products we take on are stuck at one of these points. The first piece of work is different for each.",
        columns: ["Product stage", "Usual problem", "Where we start"],
        rows: [
          ["Just past v1", "Feature requests pile up with no way to rank them", "Usage review and a roadmap tied to customer workflows"],
          ["Growing customer base", "Releases slow down and break older features", "Test coverage, release pipeline and the riskiest modules"],
          ["Selling to larger organisations", "Expected reports, roles and integrations are missing", "Permissions, a reporting layer and integration points"],
          ["Entering healthcare", "The product doesn't match how hospitals run day to day", "Workflow mapping with hospital staff, informed by our deployments"],
          ["Preparing for an in-house team", "Knowledge sits with the original builders", "Documentation, an architecture review and a staged handover"],
        ],
      },
      {
        eyebrow: "Who brings what",
        title: "You know your customers. We bring the build.",
        columns: ["You bring", "We bring"],
        rows: [
          ["Knowledge of your market, customers and rules", "The technology, architecture and execution plan"],
          ["Customer feedback and the people who hear it", "A team that maps, builds, tests and supports the product"],
          ["Decisions on priorities and trade-offs", "Clear options, costs and risks for each decision"],
        ],
      },
    ],
    process: {
      title: "How we work on a growing product",
      intro: "We start from where the product is today and where it needs to be. Work ships in short cycles, is piloted with real users, and is measured before the next step is planned.",
      steps: [
        { title: "Product review", text: "Code, infrastructure, usage data and customer feedback, reviewed with your team. You get a plain account of what we found." },
        { title: "Roadmap", text: "A ranked list of what to build next, with cost and risk for each item. You approve it and can change it at any point." },
        { title: "Build in short cycles", text: "Working features delivered regularly, each with its reporting and tests." },
        { title: "Pilot release", text: "New features go to a small group of customers first, so problems are found before everyone sees them." },
        { title: "Measure and adjust", text: "Usage of each release feeds the next round of decisions." },
        { title: "Handover", text: "Documentation and walkthroughs for your team, and a named support contact for questions." },
      ],
    },
    industries: {
      title: "Products we help grow",
      items: [
        { icon: "Hospital", title: "Healthcare product companies", text: "Products for hospitals and clinics, shaped by what we have seen at front desks, on wards and at billing counters." },
        { icon: "School", title: "Education companies", text: "Admissions, student communication and learning platforms that need to grow with each new intake." },
        { icon: "Rocket", title: "Founder-led startups", text: "Teams moving from a first version to a product with paying customers and growing demands." },
      ],
    },
    caseStudy: {
      id: "hospital-os-billing-admin-analytics",
      title: "Built around how a practice really works",
      intro: "A 50+ module hospital management system delivered in three months, shaped around the daily workflow of a psychiatric and mental healthcare practice.",
    },
    related: ["product-engineering/mvp-development", "product-engineering/managed-engineering-services", "healthcare/healthcare-software-development"],
    faq: [
      {
        q: "Can you take over a product another team built?",
        a: "Yes. We start with a review of the code, infrastructure and documentation, tell you what we found and propose what to fix before adding features.",
      },
      {
        q: "How do you decide what to build next?",
        a: "From usage data, conversations with the people who use the product, and your commercial priorities. We bring options with costs and risks. You decide.",
      },
      {
        q: "We build software for hospitals. How does your hospital work help?",
        a: "We have deployed systems inside hospitals and seen how front desk, nursing, pharmacy and billing actually work. That helps us spot where a product will be worked around before it ships.",
      },
      {
        q: "Why design reporting in from the start?",
        a: "Reports depend on how data is stored. Adding them later often means reshaping the data model, which is slower and riskier than planning for them with the feature.",
      },
      {
        q: "Can you work alongside our in-house developers?",
        a: "Yes. We can own defined parts of the product, or work in the same repositories and rituals as your team.",
      },
      {
        q: "What do we get at handover?",
        a: "Code, data and documentation, per your contract terms: architecture notes, setup and deployment guides, and a named contact for questions.",
      },
      {
        q: "Do you add AI features to products?",
        a: "Where they earn their place and the underlying data is reliable. We would rather fix the workflow first than add AI on top of a broken one.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  "application-modernization": {
    seo: {
      title: "Application Modernization: Staged Moves Off Legacy Systems",
      description:
        "Application modernisation for systems that no longer fit: a staged move off old software, data migrated and checked, and both running until staff trust the new one.",
      keywords: [
        "application modernization services",
        "legacy application modernization",
        "application modernisation",
        "legacy system migration",
        "legacy software replacement",
        "strangler pattern migration",
        "data migration services",
        "replace legacy software",
      ],
    },
    hero: {
      title: "Move off the old system *without stopping the work*",
      subtitle:
        "For companies whose software no longer fits how they operate. We replace it in stages, move the data across with checks, and run old and new side by side until your staff trust the new one.",
      chips: ["System audit", "Staged migration", "Data migration", "Parallel running", "Integrations", "Cloud move", "Retire the old system"],
      formTitle: "Which system is holding you back?",
      formMessageLabel: "What does it do today, and what can it no longer do?",
    },
    definition: {
      eyebrow: "What it is",
      title: "What is application modernisation?",
      paragraphs: [
        "Application modernisation is the process of replacing or rebuilding an existing business system that no longer fits how the organisation works, while keeping daily operations running. It can mean moving to new technology, restructuring the system, migrating its data, or all three.",
        "We use a staged approach, often called the strangler pattern. The new system takes over one part of the work at a time while the old one keeps running everything else. Each stage is small enough to check, and the old system is retired last, once nothing depends on it.",
        "The hardest part is rarely the code. It is the data nobody has cleaned in years and the workarounds staff have built around the old system. We map both before we build anything.",
      ],
      points: [
        { icon: "History", text: "What does the old system do that nobody has written down?" },
        { icon: "Database", text: "How much of its data is still correct and still needed?" },
        { icon: "Users", text: "Which teams would stop work if it went down tomorrow?" },
      ],
    },
    problems: {
      title: "Why modernisation projects go wrong",
      intro: "Replacing a system is riskier than building a new one, because people depend on the old one every day.",
      items: [
        {
          icon: "Zap",
          title: "Big-bang switchover",
          text: "Everything moves on one weekend, and on Monday the team finds out what the old system was quietly doing.",
        },
        {
          icon: "FileSearch",
          title: "Hidden rules",
          text: "Years of business rules live in old code and staff habits, not in any document.",
        },
        {
          icon: "Database",
          title: "Dirty data moved as is",
          text: "Duplicates and broken records are copied across, so the new system starts with the old problems.",
        },
        {
          icon: "Split",
          title: "Staff keep the old way",
          text: "When the new system is forced in before it is trusted, people keep side spreadsheets and the data splits in two.",
        },
        {
          icon: "Link2",
          title: "Integrations forgotten",
          text: "Other systems that read from or write to the old one break on cut-over day.",
        },
        {
          icon: "Clock",
          title: "A rewrite that never ends",
          text: "A full rebuild planned as one project runs for a long time before anyone can use any of it.",
        },
      ],
    },
    services: {
      title: "What a staged modernisation includes",
      items: [
        {
          icon: "FileSearch",
          title: "System and workflow audit",
          text: "We map what the current system does, who relies on it, and which rules live only in people's heads.",
        },
        {
          icon: "Route",
          title: "Migration plan by stage",
          text: "The order in which parts of the work move, chosen by risk and value. You approve each stage.",
        },
        {
          icon: "Layers",
          title: "New system built alongside",
          text: "The replacement takes over one function at a time, with work routed to the old or new system as each part moves.",
        },
        {
          icon: "Database",
          title: "Data migration and reconciliation",
          text: "Data cleaned, mapped and moved, with checks that records and totals match on both sides.",
        },
        {
          icon: "Plug",
          title: "Integration rewiring",
          text: "Connections to accounting, lab, payment or partner systems moved across without breaking them.",
        },
        {
          icon: "Cloud",
          title: "Hosting and infrastructure",
          text: "A move to cloud hosting with monitoring and backups, where that is cheaper and safer than the current setup.",
        },
      ],
    },
    tables: [
      {
        eyebrow: "Two ways to replace a system",
        title: "Big-bang replacement or staged migration",
        intro: "Both end with a new system. Only one keeps the business running normally on the way there.",
        columns: ["Factor", "Big-bang replacement", "Staged migration"],
        rows: [
          ["Operations during the move", "Risk of stopping on switchover day", "The old system keeps running until each part is ready"],
          ["When you see value", "At the end of the whole project", "After the first stage goes live"],
          ["How problems are found", "All at once, in live use", "One stage at a time, with the old system still there"],
          ["Data migration", "One large move under time pressure", "Moved and reconciled stage by stage"],
          ["Staff training", "Everyone, on everything, at once", "Each team, on the part that has moved"],
          ["Retiring the old system", "On day one, ready or not", "Last, when nothing depends on it"],
        ],
        highlightLast: true,
      },
    ],
    process: {
      title: "How a system moves, stage by stage",
      intro: "Each stage follows the same loop, so the risk at any moment is limited to one part of the work.",
      steps: [
        { title: "Audit the current system", text: "We watch how staff use it, read its data and, where available, its code. The result is a written account of what it really does." },
        { title: "Plan the stages", text: "We agree the order of stages, timeline and cost. You approve the plan before any build starts." },
        { title: "Build and move one stage", text: "The new system takes over one function, with its data migrated and reconciled." },
        { title: "Run in parallel", text: "Old and new run side by side. We compare results until the team that owns that work signs off." },
        { title: "Switch and train", text: "That team moves to the new system and is trained on the steps it owns. Then the next stage begins." },
        { title: "Retire the old system", text: "When every stage has moved, the old system is archived and switched off, with its data kept as your contract and regulations require." },
      ],
    },
    industries: {
      title: "Systems we are often asked to replace",
      items: [
        { icon: "Hospital", title: "Hospital and clinic software", text: "Older desktop or on-premise systems where departments have drifted back onto paper and spreadsheets." },
        { icon: "Truck", title: "Distribution and stock systems", text: "Order and inventory software at medical distributors that cannot keep up with more products and locations." },
        { icon: "School", title: "Education administration", text: "Admissions and fee systems that cannot handle new courses, batches or campuses." },
      ],
    },
    related: ["product-engineering/aws-and-cloud", "healthcare/healthcare-integration", "product-engineering/full-stack-development"],
    faq: [
      {
        q: "Do we have to stop using the old system during the move?",
        a: "No. It keeps running everything that has not moved yet. Each part switches over only after running in parallel and being checked.",
      },
      {
        q: "What if nobody fully understands the old system?",
        a: "That is common. We document what it does by watching how staff use it, reading its data and, where available, its code. You get that write-up before any build.",
      },
      {
        q: "How do you make sure no data is lost?",
        a: "Each migration is reconciled: record counts, totals and sample records compared between old and new, and signed off by the team that owns the data.",
      },
      {
        q: "Can we keep parts of the old system?",
        a: "Yes. If a part still works well and is cheap to keep, we connect to it rather than replace it.",
      },
      {
        q: "How long does modernisation take?",
        a: "It depends on the size of the system and how many stages it is split into. Because each stage goes live on its own, you see results before the whole move is finished.",
      },
      {
        q: "Will our staff need retraining?",
        a: "Each team is trained when its part moves, on the steps it owns, not on the whole system at once.",
      },
      {
        q: "Who owns the new system?",
        a: "You do. Code, data and documentation belong to you, per your contract terms.",
      },
    ],
    cta: {
      title: "Is there a system everyone works around?",
      text: "Tell us what it does today. We will map it and show you how it could move in stages.",
    },
  },

  // ───────────────────────────────────────────────────────────────────────────
  "hire-dedicated-teams": {
    seo: {
      title: "Hire Dedicated Development Teams You Review First",
      description:
        "Hire a dedicated development team shaped to your project: project lead, architect, developers, QA and DevOps. You review the team before any work starts.",
      keywords: [
        "hire dedicated development team",
        "dedicated software development team",
        "hire dedicated developers India",
        "offshore development team",
        "dedicated team model",
        "hire React developers",
        "hire Node.js developers",
        "remote development team",
      ],
    },
    hero: {
      title: "The right people, *reviewed by you before day one*",
      subtitle:
        "A dedicated team shaped around your project, not filled from whoever is free. You see who is proposed, what each person owns and why, before any work starts.",
      chips: ["Project lead", "Architect", "Developers", "QA engineers", "Cloud & DevOps", "Team review", "Scale up or down"],
      formTitle: "What kind of team do you need?",
      formMessageLabel: "What will the team build, and which skills are you missing?",
    },
    stats: [
      { value: "5", label: "Core roles a team is shaped from" },
      { value: "48+", label: "Projects delivered since 2023" },
      { value: "3", label: "Countries with clients: USA, India and UAE" },
    ],
    definition: {
      eyebrow: "What it is",
      title: "What is a dedicated development team?",
      paragraphs: [
        "A dedicated development team is a group of engineers assigned to one client's product or project, working to that client's priorities rather than shared across several accounts. The client decides what the team works on; the provider handles hiring, employment and keeping the team running.",
        "What makes it work is composition. A team of developers with no architect makes inconsistent decisions. A team without QA ships faster and breaks more. We propose the mix of roles the work needs, explain each choice, and you review the people before they start.",
        "The team works in your tools and repositories, and grows or shrinks as the work changes.",
      ],
      points: [
        { icon: "Users", text: "Which roles do you already have in-house?" },
        { icon: "Puzzle", text: "Which skills are missing for the next stage of work?" },
        { icon: "Scale", text: "How much will the workload change over the coming months?" },
      ],
    },
    problems: {
      title: "Why dedicated teams disappoint",
      intro: "The model is sound. It usually fails because of who ends up on the team.",
      items: [
        {
          icon: "UserPlus",
          title: "Filled, not shaped",
          text: "Teams are assembled from whoever is available, so the skills don't match the work.",
        },
        {
          icon: "Eye",
          title: "You meet them after they start",
          text: "The client sees CVs at best and finds out about fit a few weeks in.",
        },
        {
          icon: "Layers",
          title: "Nobody owns the architecture",
          text: "Each developer makes their own design decisions, and the codebase drifts.",
        },
        {
          icon: "ClipboardCheck",
          title: "Testing treated as optional",
          text: "Without QA on the team, the client's own staff end up testing every release.",
        },
        {
          icon: "Server",
          title: "Nobody owns deployment",
          text: "Environments, pipelines and hosting costs fall between roles until something breaks.",
        },
        {
          icon: "Repeat",
          title: "Constant rotation",
          text: "People are moved to other accounts, and each replacement starts from zero.",
        },
      ],
    },
    services: {
      title: "How we put the team together",
      items: [
        {
          icon: "Search",
          title: "Needs review",
          text: "We look at the work ahead, the roles you already have and the gaps, before proposing anyone.",
        },
        {
          icon: "Users",
          title: "A proposed team, with reasons",
          text: "Named people, their roles and why each one is on the team. You can ask for changes.",
        },
        {
          icon: "UserCheck",
          title: "Your review before start",
          text: "Interviews or working sessions with the proposed members, so fit is tested before the work depends on it.",
        },
        {
          icon: "Handshake",
          title: "One point of contact",
          text: "A project lead who owns delivery cadence and reporting, so you are not managing each engineer.",
        },
        {
          icon: "RefreshCw",
          title: "Scaling up or down",
          text: "Roles added when the work grows and released when it shrinks, agreed with you in advance.",
        },
        {
          icon: "History",
          title: "Continuity",
          text: "We keep the same people on your work wherever we can. If someone has to change, the hand-over is written down.",
        },
      ],
    },
    tables: [
      {
        eyebrow: "Team composition",
        title: "The roles a team is built from",
        intro: "Not every project needs every role from the start. We propose the mix the work needs, and you review it.",
        columns: ["Role", "What they own"],
        rows: [
          ["Project lead", "The plan, delivery cadence and reporting. Your single point of contact"],
          ["Architect", "System design, technical decisions and the quality of the overall build"],
          ["Developers", "Building features to the agreed plan"],
          ["QA engineers", "Test plans, automated and manual testing, and release sign-off"],
          ["Cloud and DevOps engineers", "Environments, deployment pipelines, monitoring and cost control"],
        ],
        note: "The mix of roles, and how many people fill each, is agreed with you before work starts.",
      },
      {
        eyebrow: "Scaling",
        title: "How the team changes with the work",
        columns: ["Situation", "What usually changes"],
        rows: [
          ["Build phase picks up", "More developers added, with the same project lead and architect"],
          ["Release pressure", "More QA time for test cycles and release sign-off"],
          ["Moving into production", "More cloud and DevOps time for environments, monitoring and cost control"],
          ["Steady maintenance", "The team reduced to the roles needed to support and improve the system"],
        ],
      },
    ],
    process: {
      title: "From request to a working team",
      intro: "You describe the work, we propose the team, and you approve every person on it. The team joins your tools and process, and its shape changes as the work does.",
      steps: [
        { title: "Share the work", text: "What you are building, the skills you have in-house and the timeline you are working to." },
        { title: "Team proposal", text: "We propose roles and named people, with the reason for each." },
        { title: "Your review", text: "You meet the proposed team and ask for changes before anyone starts." },
        { title: "Onboard into your setup", text: "Access to your tools, repositories and rituals, and a first plan agreed with the project lead." },
        { title: "Adjust as the work changes", text: "Roles are added or released with notice, agreed with you." },
      ],
    },
    stack: {
      title: "Skills we staff teams from",
      groups: [
        { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind"] },
        { label: "Mobile", items: ["React Native", "Flutter"] },
        { label: "Backend", items: ["Node.js", "Express", "NestJS", "Python", "FastAPI", "Django"] },
        { label: "Data", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase", "Firebase", "Prisma"] },
        { label: "Cloud & DevOps", items: ["Docker", "Kubernetes", "GitHub Actions", "AWS", "GCP", "Azure", "Vercel", "Cloudflare"] },
        { label: "Testing", items: ["Playwright", "Automated regression suites", "Manual test plans"] },
      ],
    },
    related: ["product-engineering/managed-engineering-services", "product-engineering/full-stack-development", "product-engineering/aws-and-cloud"],
    faq: [
      {
        q: "Can we interview the team before they start?",
        a: "Yes. You review the proposed team before work starts, and you can ask for a different person in any role.",
      },
      {
        q: "Do we need every role?",
        a: "No. A small build might need a project lead, developers and part-time QA. We propose the mix and explain why each role is there.",
      },
      {
        q: "Who manages the team day to day?",
        a: "The project lead, who is your single point of contact. You set priorities; they turn them into a plan and report on it.",
      },
      {
        q: "Can we scale the team up or down?",
        a: "Yes. Roles are added or released as the work changes, with notice agreed in advance.",
      },
      {
        q: "Will the team use our tools?",
        a: "Yes. They work in your repositories, project tools and communication channels, so you see the work directly.",
      },
      {
        q: "Who owns the code the team writes?",
        a: "You do, per your contract terms.",
      },
      {
        q: "How is this different from managed engineering services?",
        a: "A dedicated team is about getting the right people working to your direction. Managed engineering services add our accountability for an agreed outcome over a set period, with reporting against that plan.",
      },
    ],
    cta: {
      title: "Know what you need to build, but not who should build it?",
      text: "Tell us about the work and the skills you have in-house. We will propose a team you can review.",
    },
  },

  // ───────────────────────────────────────────────────────────────────────────
  "managed-engineering-services": {
    seo: {
      title: "Managed Engineering Services for Defined Projects",
      description:
        "Managed engineering services: a dedicated ALGON team for a defined project and period, working inside your process and reporting on outcomes, not hours.",
      keywords: [
        "managed engineering services",
        "managed software development services",
        "project-based development team",
        "outsourced engineering team",
        "managed development team",
        "software project outsourcing",
        "fixed scope software development",
      ],
    },
    hero: {
      highlight: "Managed Engineering",
      title: "A team for your project, *accountable for the outcome*",
      subtitle:
        "When you need a team for a defined project and period, not an agency on retainer, we provide a dedicated ALGON team that works inside your process and answers to your priorities.",
      chips: ["Defined scope", "Set period", "Your process", "Outcome reporting", "Handover", "Close or extend"],
      formTitle: "What needs to get done, and by when?",
      formMessageLabel: "Describe the project and the outcome you need.",
    },
    definition: {
      eyebrow: "What it is",
      title: "What are managed engineering services?",
      paragraphs: [
        "Managed engineering services are an arrangement in which a provider supplies and runs an engineering team for a defined project and period, and is accountable for delivering an agreed outcome, not just for supplying people. The client keeps control of priorities and architecture; the provider owns delivery against the plan.",
        "It sits between hiring a team and handing over a fixed-price project. You get a team that works inside your tools and rituals, with full visibility, and a project lead who reports progress against the plan rather than hours logged.",
        "When the period ends, the work is handed over with documentation, or extended if the next phase is clear.",
      ],
      points: [
        { icon: "Target", text: "What must be true at the end of the period?" },
        { icon: "CalendarCheck", text: "How many months do you need the team for?" },
        { icon: "Settings", text: "Which decisions must stay with your own team?" },
      ],
    },
    problems: {
      title: "Why outsourced projects drift",
      intro: "Most outsourcing goes wrong in the arrangement, before a line of code is written.",
      items: [
        {
          icon: "Timer",
          title: "Hours, not outcomes",
          text: "Reports show time spent, so nobody can tell whether the project is on track.",
        },
        {
          icon: "Repeat",
          title: "Retainers with no end",
          text: "An open-ended agency arrangement keeps running long after the original goal is met or forgotten.",
        },
        {
          icon: "Lock",
          title: "Work hidden from you",
          text: "The team works in its own tools, and you see results only at demos.",
        },
        {
          icon: "Scale",
          title: "Priorities set by the vendor",
          text: "The agency's process and schedule drive the work, not your business.",
        },
        {
          icon: "ListChecks",
          title: "Tasks without an outcome",
          text: "A list of tasks is agreed, but not what they are meant to achieve, so finishing the list doesn't mean finishing the job.",
        },
        {
          icon: "FileText",
          title: "Nothing left behind",
          text: "At the end, knowledge leaves with the team because nothing was written down.",
        },
      ],
    },
    services: {
      title: "What the engagement includes",
      items: [
        {
          icon: "Target",
          title: "An agreed outcome and period",
          text: "Written scope, timeline and team roles, so both sides know what done looks like.",
        },
        {
          icon: "Users",
          title: "A team you have reviewed",
          text: "Shaped to the project, and reviewed by you before it starts.",
        },
        {
          icon: "Workflow",
          title: "Work inside your process",
          text: "Your tools, rituals and repositories, with full visibility of tickets, code and releases.",
        },
        {
          icon: "LineChart",
          title: "Reporting on outcomes",
          text: "The project lead reports progress against the plan, open risks and the decisions needed from you.",
        },
        {
          icon: "Scale",
          title: "Your control of direction",
          text: "Priorities and architecture stay with you. We bring the options, costs and risks of each decision.",
        },
        {
          icon: "FileText",
          title: "Handover or extension",
          text: "Documentation and a structured handover at the end, or an extension if the next phase is clear.",
        },
      ],
    },
    tables: [
      {
        eyebrow: "Engagement models",
        title: "Three ways to work with us",
        intro: "Pick the model that matches how clear the work is today. Many clients start with the first and move to the second or third.",
        columns: ["Model", "Best when", "How it is priced"],
        rows: [
          ["Bottleneck review", "Something is stuck, but you don't know what to do about it", "Fixed, short engagement"],
          ["Defined build", "The scope is clear", "Fixed scope and milestones"],
          ["Managed team", "You need a team for a set project and period", "Monthly, based on team composition"],
        ],
        highlightLast: true,
        note: "Pricing is agreed after a first conversation about scope. We don't publish rates because they depend on the work.",
      },
      {
        eyebrow: "Is it the right fit?",
        title: "When a managed team fits, and when it doesn't",
        columns: ["It fits when", "Something else may suit you better when"],
        rows: [
          ["You have a clear project but not the people", "You need permanent staff for ongoing roles, where hiring in-house makes more sense"],
          ["You keep control of priorities and architecture", "You want a vendor to make the product decisions for you"],
          ["You need the team for months, not permanently", "You need advice on one problem, where a bottleneck review is enough"],
        ],
      },
    ],
    process: {
      title: "How an engagement runs",
      intro: "Five steps, with a defined end point. Extending is a decision, not a default.",
      steps: [
        { title: "Define scope and period", text: "We agree the outcome, timeline and roles in writing before the team is formed." },
        { title: "Shape the team", text: "We propose the team for the project. You review it and ask for changes before it starts." },
        { title: "Work inside your process", text: "The team uses your tools, rituals and repositories. You see every ticket, commit and release." },
        { title: "Report on outcomes", text: "The project lead reports progress against the plan, not hours logged, and raises risks early." },
        { title: "Close or extend", text: "The work is handed over with documentation, or the engagement is extended into the next phase." },
      ],
    },
    differentiators: {
      title: "What keeps the engagement accountable",
      items: [
        { icon: "UserCheck", title: "A named project lead", text: "One person who owns the plan, reports against it and raises risks before they become delays." },
        { icon: "Eye", title: "Full visibility", text: "Your tools and repositories. Nothing sits behind a status report." },
        { icon: "CalendarCheck", title: "A fixed end point", text: "Every engagement has a defined period, so it never turns into an open-ended retainer." },
        { icon: "KeyRound", title: "You own the work", text: "Code, data and documentation belong to you, per your contract terms." },
      ],
    },
    related: ["product-engineering/hire-dedicated-teams", "product-engineering/product-development", "product-engineering/application-modernization"],
    faq: [
      {
        q: "How is this different from hiring a dedicated team?",
        a: "With a dedicated team, you get the people and direct the work. Here we also take responsibility for delivering an agreed outcome in a set period, and report against that plan.",
      },
      {
        q: "Do we lose control of the project?",
        a: "No. You keep priorities and architecture. The project lead brings options, costs and risks; you make the decisions.",
      },
      {
        q: "What do progress reports look like?",
        a: "Progress against the plan: what is done, what is next, open risks and decisions we need from you. Not timesheets.",
      },
      {
        q: "What if the scope changes mid-project?",
        a: "We show what the change means for the timeline, team and cost, and you decide whether to adjust the plan.",
      },
      {
        q: "What happens at the end of the period?",
        a: "Either a handover with documentation and walkthroughs for your team, or an extension if the next phase is clear.",
      },
      {
        q: "What is a bottleneck review?",
        a: "A short, fixed engagement for when something is stuck and the cause isn't clear. We map the problem with your team and give you options before you commit to a build.",
      },
      {
        q: "Do you publish prices?",
        a: "No. Each model is priced differently and depends on scope and team. We agree the price with you before work starts.",
      },
    ],
    cta: {
      title: "Have a project and a deadline, but not the team?",
      text: "Tell us the outcome you need and the period. We will propose a team and a plan.",
    },
  },

  // ───────────────────────────────────────────────────────────────────────────
  "web-application-development": {
    seo: {
      title: "Web Application Development for Operations Platforms",
      description:
        "Web application development for growing businesses: one system for orders, tasks, approvals and reporting, with an owner for every step instead of spreadsheets.",
      keywords: [
        "web application development",
        "custom web application development",
        "web app development company India",
        "business process management software",
        "operations management software",
        "custom ERP development",
        "education management system",
        "student management system",
      ],
    },
    hero: {
      title: "Run the business from *one system, not twenty spreadsheets*",
      subtitle:
        "For growing businesses that run on spreadsheets and chat groups. One web application for orders, tasks, approvals and reporting, with an owner for every step and a clear view of what is waiting.",
      chips: ["Orders", "Tasks", "Approvals", "Reporting", "Customer portals", "Staff apps", "Admissions", "Fee management"],
      formTitle: "What runs on spreadsheets today?",
      formMessageLabel: "Which process gets chased most often?",
    },
    definition: {
      eyebrow: "What it is",
      title: "What is web application development?",
      paragraphs: [
        "Web application development is building software that people use through a browser to do work, such as placing orders, approving requests or managing records, rather than simply read information. A business web application stores data, applies rules and connects to other systems, and runs on a desktop or phone without installation.",
        "Most of the web applications we build are operations platforms: the system that replaces the spreadsheets, chat groups and phone calls a growing business runs on. Each step gets a named owner and a status, so work stops waiting on someone remembering.",
        "Customer-facing and staff-facing parts are built as one system and connected to your back-office tools, such as accounting, from the first release.",
      ],
      points: [
        { icon: "MessageSquare", text: "How many decisions are made in chat groups and never recorded?" },
        { icon: "ClipboardList", text: "How many spreadsheets hold the same customer or order?" },
        { icon: "Eye", text: "Can you see what is waiting right now, and on whom?" },
      ],
    },
    problems: {
      title: "Why growing businesses outgrow spreadsheets",
      intro: "Spreadsheets and chat groups work well for a small team. They stop working once more people touch the same order.",
      items: [
        {
          icon: "FileText",
          title: "The same data in many places",
          text: "Orders, customers and stock sit in several sheets, each slightly different from the others.",
        },
        {
          icon: "MessageSquare",
          title: "Approvals lost in chat",
          text: "Requests are approved in a message thread, and nobody can find the decision a week later.",
        },
        {
          icon: "UserCheck",
          title: "No owner for each step",
          text: "Work waits between people because nobody is clearly responsible for moving it on.",
        },
        {
          icon: "BarChart3",
          title: "Reports built by hand",
          text: "Someone spends days each month pulling numbers together, and they are out of date by the time they are ready.",
        },
        {
          icon: "Store",
          title: "Off-the-shelf misfit",
          text: "Generic software forces the team into workarounds, and the spreadsheets come back.",
        },
        {
          icon: "Link2",
          title: "Customer side disconnected",
          text: "The portal or form customers use doesn't feed the back office, so staff retype everything.",
        },
      ],
    },
    services: {
      title: "What we build",
      intro: "Built around the way you already operate, with every step owned and visible.",
      items: [
        {
          icon: "Workflow",
          title: "Operations platforms",
          text: "Orders, tasks, approvals and reporting in one system, with an owner and a status for each step.",
        },
        {
          icon: "ClipboardCheck",
          title: "Approval workflows",
          text: "Requests, approvals and escalations, with a record of who decided what and when.",
        },
        {
          icon: "GraduationCap",
          title: "Education systems",
          text: "Admissions, student communication, batch and fee management, and follow-up for education companies.",
        },
        {
          icon: "Globe",
          title: "Customer-facing apps",
          text: "Portals for orders, bookings, enquiries or applications, connected to the staff side from day one.",
        },
        {
          icon: "Smartphone",
          title: "Staff-facing apps",
          text: "Mobile-friendly screens for field staff, warehouse teams or counsellors, built around their daily tasks.",
        },
        {
          icon: "LayoutDashboard",
          title: "Reporting and dashboards",
          text: "Live views of what is waiting, what is late and what was done, designed in from the start.",
        },
      ],
    },
    tables: [
      {
        eyebrow: "Before and after",
        title: "What changes with one operations platform",
        columns: ["Today", "With one operations platform"],
        rows: [
          ["Orders tracked in shared spreadsheets", "One order record with a status, an owner and a history"],
          ["Approvals given in chat groups", "Approval requests with the decision and time recorded"],
          ["Follow-ups depend on memory", "Reminders and a task queue for each owner"],
          ["Monthly reports assembled by hand", "Reports ready whenever management needs them"],
          ["Customer requests retyped by staff", "A customer portal feeding the same system staff use"],
        ],
        highlightLast: true,
      },
      {
        eyebrow: "For education companies",
        title: "What an education system covers",
        intro: "For colleges, training institutes and study-abroad consultancies. Each area has an owner, from first enquiry to follow-up.",
        columns: ["Area", "What it covers"],
        rows: [
          ["Admissions", "Enquiries, applications, counselling and tracking each lead to enrolment"],
          ["Student communication", "Announcements, reminders and two-way messages by course or batch"],
          ["Batch management", "Batches, timetables, attendance and faculty allocation"],
          ["Fee management", "Fee plans, instalments, receipts and dues follow-up"],
          ["Follow-up", "Enquiry and student follow-up, with an owner for every lead"],
        ],
      },
    ],
    process: {
      title: "From spreadsheets to one system",
      intro: "We replace the spreadsheets and workarounds one stage at a time. The new system runs in parallel until your team trusts it, and each role is trained on the steps it owns.",
      steps: [
        { title: "Bottleneck review", text: "We map how orders, tasks and approvals really move today, and agree who owns each step." },
        { title: "Plan", text: "Modules, priorities, timeline and cost, agreed in writing. You approve the plan before build starts." },
        { title: "Build in short cycles", text: "Working software regularly, starting with the process that gets chased most." },
        { title: "Run in parallel", text: "The new system runs alongside the spreadsheets until the team trusts it." },
        { title: "Go live and train each role", text: "Each person learns the steps they own, not every screen in the system." },
        { title: "Support and improve", text: "We fix, adjust and add the next process, or automation, once the first one is settled." },
      ],
    },
    industries: {
      title: "Who we build operations platforms for",
      items: [
        { icon: "Building2", title: "Growing businesses", text: "Teams moving off spreadsheets and chat groups as staff numbers and order volumes grow." },
        { icon: "School", title: "Education companies", text: "Colleges, training institutes and study-abroad consultancies managing admissions and students." },
        { icon: "Truck", title: "Medical distributors", text: "Orders, stock, dispatch and collections across many products and locations." },
      ],
    },
    caseStudy: {
      id: "campus-cms-seo-platform",
      title: "A college platform in eight weeks",
      intro: "A web platform for a college, with a CMS its staff manage and AI teacher agents for students, built and launched in eight weeks.",
    },
    related: ["ai-development/workflow-automation", "product-engineering/full-stack-development", "product-engineering/cms-development"],
    faq: [
      {
        q: "Why not use off-the-shelf software?",
        a: "If it fits how you work, you should. We build when off-the-shelf tools force your team into workarounds that cost more than a system built around your process.",
      },
      {
        q: "Can you bring in our existing spreadsheets?",
        a: "Yes. We clean and import the data you need, and run the new system alongside the spreadsheets until the team trusts it.",
      },
      {
        q: "Will it work on phones?",
        a: "Yes. Staff and customer screens are responsive, and we test on the devices people actually use at work.",
      },
      {
        q: "Can it connect to our accounting software?",
        a: "Usually, yes. Where your accounting, messaging or other back-office tools offer an API or export, we connect to them from the first release.",
      },
      {
        q: "Do you build for education companies?",
        a: "Yes: admissions, student communication, batch and fee management, and follow-up. We built a college platform with a CMS and AI teacher agents in eight weeks.",
      },
      {
        q: "Can we start small?",
        a: "Yes. Most clients start with the process that gets chased most often, then add the next one in short cycles.",
      },
      {
        q: "Where is the system hosted, and who owns it?",
        a: "On cloud infrastructure in your accounts, such as AWS, GCP or Azure. Code, data and documentation are yours, per your contract terms.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  "frontend-development": {
    seo: {
      title: "Frontend Development for Interfaces Staff Use All Day",
      description:
        "Frontend development in React, Next.js and TypeScript for screens staff use all day: quick, clear, accessible and responsive, built on a design system you own.",
      keywords: [
        "frontend development services",
        "React frontend development",
        "Next.js development company",
        "UI development services",
        "front end developers India",
        "web accessibility development",
        "design system development",
        "responsive web app development",
      ],
    },
    hero: {
      title: "Screens built for *the people who use them all day*",
      subtitle:
        "Front desk staff, nurses and operations teams spend hours a day in the same few screens. We build frontends that are quick to read, quick to act on, and work on the devices they actually have.",
      chips: ["React", "Next.js", "TypeScript", "Design systems", "Accessibility", "Responsive", "Performance", "Tailwind"],
      formTitle: "Which screen slows your team down?",
      formMessageLabel: "Who uses it, and what do they do in it all day?",
    },
    definition: {
      eyebrow: "What it is",
      title: "What is frontend development?",
      paragraphs: [
        "Frontend development is building the part of software that people see and use: the screens, forms, tables and navigation that run in a browser or on a phone. It covers layout, interaction, accessibility and performance, and how the interface exchanges data with the backend.",
        "For software used all day, the frontend decides how much work gets done. A form with needless steps costs the front desk time on every patient; a slow page costs a nurse time on every round. We design around the most frequent tasks, test with the people who do them and measure speed on real devices.",
        "We build in React, Next.js and TypeScript, on a design system your team can extend, so new screens look and behave like the ones before them.",
      ],
      points: [
        { icon: "Timer", text: "How long does your most common task take, click by click?" },
        { icon: "MonitorSmartphone", text: "Which devices and screen sizes do staff really use?" },
        { icon: "Eye", text: "Can every user operate it, including by keyboard or screen reader?" },
      ],
    },
    problems: {
      title: "Why staff-facing screens frustrate",
      intro: "Staff rarely complain about the backend. They complain about the screen in front of them.",
      items: [
        {
          icon: "PanelsTopLeft",
          title: "Designed for the demo",
          text: "Screens look good in a sales meeting but bury the task staff repeat all day.",
        },
        {
          icon: "Timer",
          title: "Slow on real hardware",
          text: "Built and tested on fast laptops, then used on older desktops and shared tablets.",
        },
        {
          icon: "Smartphone",
          title: "Desktop only",
          text: "Nurses on rounds and staff in the field are stuck with screens that don't fit a phone.",
        },
        {
          icon: "Eye",
          title: "Accessibility ignored",
          text: "Low contrast, small targets and no keyboard support make the system harder for everyone.",
        },
        {
          icon: "Layers",
          title: "Every screen different",
          text: "Without a design system, each new feature invents its own buttons and patterns.",
        },
        {
          icon: "TriangleAlert",
          title: "Errors explained badly",
          text: "Messages that don't say what to fix send staff to the phone or to a colleague.",
        },
      ],
    },
    services: {
      title: "What we build",
      items: [
        {
          icon: "LayoutDashboard",
          title: "Staff workspaces",
          text: "Front desk, nursing and operations screens built around the most frequent tasks.",
        },
        {
          icon: "Layers",
          title: "Design systems",
          text: "Shared components, design tokens and patterns in code, documented so your team can extend them.",
        },
        {
          icon: "MonitorSmartphone",
          title: "Responsive and mobile",
          text: "Interfaces that work on desktops, tablets and phones, including for staff on the move.",
        },
        {
          icon: "Eye",
          title: "Accessibility",
          text: "Contrast, keyboard navigation, focus states and screen reader support, built in and guided by WCAG.",
        },
        {
          icon: "Zap",
          title: "Performance work",
          text: "Faster loading and interaction through rendering choices, caching and smaller bundles.",
        },
        {
          icon: "Code2",
          title: "Frontend rebuilds",
          text: "Older interfaces moved to React, Next.js and TypeScript, screen by screen, without touching a working backend.",
        },
      ],
    },
    tables: [
      {
        eyebrow: "What we check",
        title: "Checks on every staff-facing screen",
        intro: "Before release, each main screen is checked against how it will be used across a full shift.",
        columns: ["Check", "Why it matters in daily use"],
        rows: [
          ["Clicks to complete the most common tasks", "Repeated steps add up over a shift"],
          ["Speed on the slowest device in use", "Staff rarely get the newest hardware"],
          ["Keyboard-only operation", "Front desk staff work faster without reaching for the mouse"],
          ["Contrast and text size", "Screens are read under ward lighting and at the end of long shifts"],
          ["Error messages", "Each one should say what went wrong and how to fix it"],
          ["Behaviour on a phone", "Rounds, field visits and site work happen away from a desk"],
        ],
      },
    ],
    process: {
      title: "How we build a frontend",
      intro: "We design from how people actually use the product, then build reusable components, test them on real devices and measure what changes after release.",
      steps: [
        { title: "Watch the work", text: "We observe the people who use the screens and list their most frequent tasks." },
        { title: "Design the flows", text: "Wireframes and clickable prototypes, checked with the people who will use them." },
        { title: "Build the components", text: "The design system first, then screens assembled from it, so everything stays consistent." },
        { title: "Test on real devices", text: "Speed, accessibility and usability checked on the hardware your staff actually have." },
        { title: "Release and measure", text: "Screens released in stages, with feedback from users shaping the next round." },
      ],
    },
    stack: {
      title: "Frontend tools we use",
      groups: [
        { label: "Frameworks", items: ["React", "Next.js", "React Native", "Flutter"] },
        { label: "Language", items: ["TypeScript", "JavaScript"] },
        { label: "Styling", items: ["Tailwind", "Design tokens", "Component libraries"] },
        { label: "Testing", items: ["Playwright", "Accessibility audits"] },
        { label: "Delivery", items: ["Vercel", "Cloudflare", "GitHub Actions"] },
      ],
    },
    caseStudy: {
      id: "real-estate-lead-website",
      title: "A responsive website in one week",
      intro: "Designed and built in one week for phones and desktops alike. Site visits grew from 12 to 44 a month.",
    },
    related: ["product-engineering/react-js", "product-engineering/next-js", "product-engineering/typescript"],
    faq: [
      {
        q: "Do you only build in React?",
        a: "React and Next.js with TypeScript are our default for the web. For mobile apps we use React Native or Flutter.",
      },
      {
        q: "Can you work from our existing designs?",
        a: "Yes. We build from your designs, and flag where a design will be slow or hard to use before we code it.",
      },
      {
        q: "Can you improve the frontend without rebuilding the backend?",
        a: "Usually, yes. If the backend has a usable API, we can replace the interface screen by screen.",
      },
      {
        q: "How do you handle accessibility?",
        a: "We follow WCAG guidance on contrast, keyboard use, focus and screen readers, and test for it before release.",
      },
      {
        q: "Will it work on older computers and low-cost phones?",
        a: "We test on the devices your staff actually use, and tune performance for the slowest of them.",
      },
      {
        q: "Do we get the design system?",
        a: "Yes. Components and their documentation are part of the code you own, per your contract terms.",
      },
    ],
    cta: {
      title: "Is there a screen your team dreads?",
      text: "Tell us who uses it and what they do there. We will show you where the time goes.",
    },
  },

  // ───────────────────────────────────────────────────────────────────────────
  "full-stack-development": {
    seo: {
      title: "Full Stack Development: One Team, Screen to Server",
      description:
        "Full stack development with one team owning frontend, backend, data, integrations and deployment, in React, Next.js, Node.js, Python and PostgreSQL.",
      keywords: [
        "full stack development services",
        "full stack development company",
        "hire full stack developers",
        "React and Node.js development",
        "Python Django development",
        "end-to-end software development",
        "custom software development India",
      ],
    },
    hero: {
      title: "One team owning the system *from screen to server*",
      subtitle:
        "Frontend, backend, data, integrations and deployment, built and supported by the same team. When something breaks, there is one place to call and no argument about whose layer it is in.",
      chips: ["Frontend", "Backend", "Database", "APIs", "Integrations", "Deployment", "Monitoring", "Support"],
      formTitle: "What are you building?",
      formMessageLabel: "Describe the system and who will use it.",
    },
    stats: [
      { value: "50+", label: "Modules in one hospital system, built end to end" },
      { value: "3 months", label: "From start to delivery of that system" },
      { value: "48+", label: "Projects delivered since 2023" },
    ],
    definition: {
      eyebrow: "What it is",
      title: "What is full stack development?",
      paragraphs: [
        "Full stack development is building every layer of a software system: the user interface, the server-side logic, the database, the integrations with other systems and the infrastructure it runs on. A full stack team can take a feature from screen to database to deployment without handing it to another group.",
        "Splitting a build across separate frontend, backend and hosting vendors creates gaps where each blames the other. With one team owning every layer, design decisions are made with the whole system in view, and problems are traced to their cause instead of passed around.",
        "We choose the stack for the job and for whoever maintains it next, usually React or Next.js, Node.js or Python, and PostgreSQL, deployed with Docker to the cloud of your choice.",
      ],
      points: [
        { icon: "Network", text: "How many vendors touch your system today?" },
        { icon: "Wrench", text: "When it breaks, who finds out why?" },
        { icon: "Database", text: "Is the data model ready for the reports you will need?" },
      ],
    },
    problems: {
      title: "Why split builds struggle",
      items: [
        {
          icon: "Split",
          title: "Layers built apart",
          text: "Frontend and backend are built to different assumptions and meet for the first time at integration.",
        },
        {
          icon: "Headphones",
          title: "Blame between vendors",
          text: "A bug passes through three teams before anyone takes ownership of it.",
        },
        {
          icon: "Database",
          title: "Data designed last",
          text: "The database is shaped around screens, not around the reports and integrations the business needs.",
        },
        {
          icon: "Plug",
          title: "Integrations as an afterthought",
          text: "Connections to messaging, accounting or partner systems are added late and fail on edge cases.",
        },
        {
          icon: "Server",
          title: "Deployment by hand",
          text: "Releases depend on one person's laptop and memory.",
        },
        {
          icon: "Activity",
          title: "No monitoring",
          text: "Users report problems before the team sees them.",
        },
      ],
    },
    services: {
      title: "What one team covers",
      intro: "Each layer has a specialist, but they work on one plan with one lead.",
      items: [
        {
          icon: "PanelsTopLeft",
          title: "Frontend",
          text: "Web and mobile interfaces in React, Next.js, React Native or Flutter.",
        },
        {
          icon: "Terminal",
          title: "Backend and APIs",
          text: "Business logic and REST or GraphQL APIs in Node.js (Express, NestJS) or Python (FastAPI, Django).",
        },
        {
          icon: "Database",
          title: "Data",
          text: "PostgreSQL, MySQL or MongoDB, with Redis for caching and Prisma for data access, designed with reporting in mind.",
        },
        {
          icon: "Plug",
          title: "Integrations",
          text: "Accounting, messaging, hospital and partner systems, plus live updates over WebSockets.",
        },
        {
          icon: "Cloud",
          title: "Deployment",
          text: "Docker, Kubernetes where it is warranted, GitHub Actions pipelines, and hosting on AWS, GCP, Azure or Vercel.",
        },
        {
          icon: "Activity",
          title: "Monitoring and support",
          text: "Logs, alerts and a named support contact after go-live.",
        },
      ],
    },
    tables: [
      {
        eyebrow: "Choosing the stack",
        title: "What we usually use, and when we don't",
        intro: "Defaults keep builds predictable. Your existing systems and team come first.",
        columns: ["Layer", "What we usually use", "When we choose differently"],
        rows: [
          ["Web frontend", "React, Next.js, TypeScript and Tailwind", "Your team already maintains another framework"],
          ["Mobile", "React Native, to share code with a React web app", "Flutter, when the app is mobile-only or needs a highly custom interface"],
          ["Backend", "Node.js with Express or NestJS", "Python with FastAPI or Django for data-heavy or AI work"],
          ["Database", "PostgreSQL", "MySQL to match existing systems; MongoDB for document-shaped data"],
          ["APIs", "REST", "GraphQL when many clients need different shapes of data; WebSockets for live updates"],
          ["Infrastructure", "Docker and GitHub Actions on AWS, GCP or Azure", "Vercel or Cloudflare for frontend-heavy apps; Supabase or Firebase for a fast start"],
        ],
        note: "Where you have an existing stack or an in-house team, we usually build on what they already know.",
      },
      {
        eyebrow: "Who brings what",
        title: "You know the business. We bring every layer.",
        columns: ["You bring", "We bring"],
        rows: [
          ["Knowledge of your domain, customers and rules", "The technology, architecture and execution plan"],
          ["The people who do the work and know where it breaks", "A team that maps, builds, tests and supports the system"],
          ["Decisions on priorities and trade-offs", "Clear options, costs and risks for each decision"],
        ],
      },
    ],
    process: {
      title: "How a full stack build runs",
      intro: "We build in vertical slices, so every cycle delivers something that works end to end. Each slice is tested and run in parallel before it replaces the old way.",
      steps: [
        { title: "Map the work", text: "We map how the work happens today and who owns each step, before any screens are designed." },
        { title: "Design the system", text: "Architecture, data model and integrations, written down. You approve the plan before build starts." },
        { title: "Build in vertical slices", text: "Each cycle delivers a feature working from screen to database, not one layer at a time." },
        { title: "Test and run in parallel", text: "Automated tests on core logic and key journeys, then the system runs alongside the old way until staff trust it." },
        { title: "Deploy and train", text: "Automated deployment to your cloud accounts, and each role trained on the steps it owns." },
        { title: "Monitor and support", text: "Alerts, fixes and the next set of features, with a named support contact." },
      ],
    },
    caseStudy: {
      id: "hospital-os-ipd-pharmacy-lab",
      title: "Built end to end in three months",
      intro: "A 50+ module hospital management system, from interface to database to deployment, delivered by one ALGON team.",
    },
    related: ["product-engineering/node-js", "product-engineering/python", "product-engineering/web-application-development"],
    faq: [
      {
        q: "Why one full stack team instead of separate specialists?",
        a: "Our teams include specialists, but they work as one team on one plan. You get depth in each layer without managing hand-offs between vendors.",
      },
      {
        q: "Can you work with our existing backend or frontend?",
        a: "Yes. We can take over one layer and connect to the rest, then extend from there.",
      },
      {
        q: "Which stack should we use?",
        a: "The one that fits the job and whoever maintains it next. We recommend a stack after the mapping stage and explain the trade-offs before you decide.",
      },
      {
        q: "Do you write automated tests?",
        a: "Yes. Unit and integration tests for core logic, and end-to-end tests with Playwright for the most important user journeys.",
      },
      {
        q: "Where will the system be hosted?",
        a: "In your cloud accounts on AWS, GCP or Azure, or on Vercel or Cloudflare for frontend-heavy apps. Monitoring and backups are set up as part of the build.",
      },
      {
        q: "Who supports the system after launch?",
        a: "We do, with a named support contact. If you prefer to move it to your own team, we hand over with documentation.",
      },
      {
        q: "Who owns the code?",
        a: "You do, per your contract terms, including infrastructure configuration and documentation.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  "cms-development": {
    seo: {
      title: "CMS Development: Websites Your Team Can Edit",
      description:
        "CMS development for product catalogues, blogs, careers and multilingual content your team edits without developers, with SEO foundations in place from launch.",
      keywords: [
        "CMS development services",
        "custom CMS development",
        "headless CMS development",
        "product catalogue website",
        "website content management system",
        "multilingual website development",
        "CMS website development India",
        "Next.js headless CMS",
      ],
    },
    hero: {
      highlight: "CMS",
      title: "Content your team can update *without calling a developer*",
      subtitle:
        "Product catalogues, blogs, careers pages and multilingual content, managed by the people who own them. Set up with SEO foundations from launch, on a headless or traditional CMS.",
      chips: ["Product catalogues", "Blogs", "Careers", "Multilingual", "Headless CMS", "SEO foundations", "Analytics"],
      formTitle: "What does your team need to update?",
      formMessageLabel: "Which content changes most often, and who changes it today?",
    },
    stats: [
      { value: "50+", label: "Products in one client catalogue, editable by their own team" },
      { value: "4 weeks", label: "To deliver that catalogue site, with blogs and careers" },
      { value: "8 weeks", label: "For a college platform with a CMS and AI teacher agents" },
    ],
    definition: {
      eyebrow: "What it is",
      title: "What is CMS development?",
      paragraphs: [
        "CMS development is building a website or application on a content management system, so non-technical staff can create, edit and publish content such as products, articles and job openings without changing code. It covers the content structure, the editing screens, the publishing workflow and the site that displays the content.",
        "A CMS is only useful if its content model fits the business. A catalogue needs product fields, categories and specifications; a careers page needs roles, locations and applications. We design the content structure first, then the editing screens around who updates what.",
        "We build on a headless CMS with a Next.js frontend when speed and flexibility matter, or a traditional CMS when a simpler setup fits. Either way, your team is trained to run it.",
      ],
      points: [
        { icon: "Package", text: "How often does your product range change, and who updates it?" },
        { icon: "Languages", text: "Which languages do your customers read?" },
        { icon: "Search", text: "Can search engines and your analytics see what changed?" },
      ],
    },
    problems: {
      title: "Why website content goes stale",
      items: [
        {
          icon: "Wrench",
          title: "Every change needs a developer",
          text: "Small edits wait in a queue, so content drifts out of date.",
        },
        {
          icon: "Package",
          title: "Catalogue in a PDF",
          text: "Products live in brochures and spreadsheets, and the website shows last year's range.",
        },
        {
          icon: "Puzzle",
          title: "The content model doesn't fit",
          text: "Generic page builders force products, roles and articles into the same shape.",
        },
        {
          icon: "Languages",
          title: "Translations drift apart",
          text: "Each language is a separate copy, edited at different times, until they no longer match.",
        },
        {
          icon: "Search",
          title: "SEO added later",
          text: "Titles, page structure, analytics and tags are missing at launch and patched in afterwards.",
        },
        {
          icon: "Lock",
          title: "No editing rules",
          text: "Either anyone can publish anything, or only one person can. Both cause problems.",
        },
      ],
    },
    services: {
      title: "What we build",
      items: [
        {
          icon: "Package",
          title: "Product catalogues",
          text: "Categories, specifications, images and enquiry options, editable by your team.",
        },
        {
          icon: "FileText",
          title: "Blogs and news",
          text: "Articles with authors, categories and scheduling, structured for search from the day they are published.",
        },
        {
          icon: "UserPlus",
          title: "Careers pages",
          text: "Open roles, locations and application forms that your HR team manages directly.",
        },
        {
          icon: "Languages",
          title: "Multilingual content",
          text: "Content structured per language, with a clear status for what still needs translating.",
        },
        {
          icon: "Search",
          title: "SEO foundations",
          text: "On-page structure, metadata, sitemaps, analytics and tag manager, set up at launch.",
        },
        {
          icon: "KeyRound",
          title: "Roles and publishing workflow",
          text: "Who can draft, review and publish, so changes are controlled without creating a bottleneck.",
        },
      ],
    },
    tables: [
      {
        eyebrow: "Choosing a CMS",
        title: "Headless or traditional CMS",
        intro: "Neither is better in general. The right one depends on your content and who edits it.",
        columns: ["Factor", "Headless CMS", "Traditional CMS"],
        rows: [
          ["How it works", "Content is stored in the CMS and displayed by a separate frontend, such as Next.js", "The CMS manages both the content and the site's pages"],
          ["Speed and design control", "Fast pages and full control of the design", "Depends on the theme and plugins chosen"],
          ["Content reuse", "The same content can feed a website, an app or other channels", "Mainly serves one website"],
          ["Editing experience", "Structured forms; live previews need setting up", "Familiar page editing out of the box"],
          ["Best when", "Large catalogues, several languages or channels, and plans to grow", "A simpler site with mostly fixed pages"],
        ],
        note: "We recommend one after reviewing your content and the people who will edit it.",
      },
    ],
    process: {
      title: "From content audit to launch",
      intro: "A CMS is built around your content, not the other way round. We audit and model the content first, build the site and the editing experience, migrate everything and train your editors.",
      steps: [
        { title: "Content audit", text: "We list what content you have, what changes often and who is responsible for each part." },
        { title: "Content model", text: "Content types, fields and editing roles, agreed with you before any build." },
        { title: "Build the CMS and site", text: "Editing screens and the public site built together, with SEO foundations in place." },
        { title: "Migrate content", text: "Existing content cleaned up with your team and moved across." },
        { title: "Train editors and launch", text: "Each editor learns the content they own, then the site goes live." },
        { title: "Support", text: "A named contact for questions, fixes and new content types as you need them." },
      ],
    },
    caseStudy: {
      id: "product-catalogue-cms",
      title: "A catalogue website the team runs itself",
      intro: "A CMS website with a 50+ product catalogue, and editable products, blogs and careers, delivered in four weeks.",
    },
    related: ["product-engineering/next-js", "product-engineering/web-application-development", "product-engineering/frontend-development"],
    faq: [
      {
        q: "Which CMS do you use?",
        a: "It depends on your content and team. We use a headless CMS with Next.js for flexible, fast sites, and a traditional CMS for simpler ones. We recommend one after a content review.",
      },
      {
        q: "Can our team really edit without developers?",
        a: "Yes, for the content types we set up: products, articles, roles and pages. Structural changes, such as a new type of page, still need development.",
      },
      {
        q: "Can you move content from our current website?",
        a: "Yes. We migrate existing content, after clearing out what is out of date with your team.",
      },
      {
        q: "Do you handle SEO?",
        a: "We set up the foundations: on-page structure, metadata, sitemaps, analytics and tag manager. Ongoing marketing and content writing are not part of our service.",
      },
      {
        q: "Can the site support more than one language?",
        a: "Yes. Content is structured per language, and editors can see which pages still need translating.",
      },
      {
        q: "Can the CMS connect to our other systems?",
        a: "Yes. A catalogue can pull from your product or stock data, and enquiry and application forms can feed your CRM or operations system.",
      },
      {
        q: "How long does a CMS website take?",
        a: "It depends on content volume and features. As a reference, we delivered a CMS website with a 50+ product catalogue and editable products, blogs and careers in four weeks.",
      },
    ],
    cta: {
      title: "Tired of waiting for a developer to change a page?",
      text: "Tell us what your team needs to update. We will propose a content model and the right CMS for it.",
    },
  },
}

export default productEngineering
