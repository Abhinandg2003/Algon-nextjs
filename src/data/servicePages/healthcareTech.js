// Healthcare service pages, "Technology" group. Keys are navbar slugs (see navMenus.js).
// Schema: see ./index.js. Reference page: healthcare.js -> "hospital-management-system".

const healthcareTech = {
  // ───────────────────────────────────────────────────────────────────────────
  "healthcare-software-development-services": {
    seo: {
      title: "Healthcare Software Development Services",
      description:
        "Custom healthcare software for hospitals, clinics, diagnostic centres, health product companies and medical distributors, built around how your work really runs.",
      keywords: [
        "healthcare software development services",
        "custom healthcare software development",
        "healthcare software development company India",
        "hospital software development",
        "medical software development",
        "diagnostic centre software",
        "medical distributor order management software",
        "healthcare app development",
      ],
    },
    hero: {
      title: "Healthcare software built around *how your work really runs*",
      subtitle:
        "Custom software for hospitals, clinics, diagnostic centres, healthcare product companies and medical distributors. We map the work first, give every step an owner, then build the system that carries it.",
      chips: ["Hospitals", "Clinics", "Diagnostic centres", "Health products", "Medical distributors", "Web & mobile", "Integrations", "Reporting"],
      formTitle: "What should your software do that it doesn't today?",
      formMessageLabel: "Which part of your work still runs on calls or spreadsheets?",
    },
    stats: [
      { value: "48+", label: "Projects delivered since 2023" },
      { value: "3", label: "Countries with active clients: USA, India and the UAE" },
      { value: "50+", label: "Hospital modules delivered in a single build" },
    ],
    definition: {
      eyebrow: "What it is",
      title: "What are healthcare software development services?",
      paragraphs: [
        "Healthcare software development services are the design, build and support of software made for a specific healthcare organisation: a hospital, clinic, diagnostic centre, health product company or medical distributor. The software follows that organisation's patients, orders, records and rules, rather than asking staff to adapt to a generic product.",
        "Most healthcare teams already own software. The trouble sits between the screens: a lab result waiting on a phone call, an order confirmed on WhatsApp but never entered, a report rebuilt by hand every month. We start there. We map how the work happens, name the person who owns each step, and build the operational layer that moves information between departments, staff and customers without anyone chasing it.",
        "We are not a product vendor. Each build reuses proven building blocks from our hospital deployments, so you get software shaped to your organisation without paying to start from zero.",
      ],
      points: [
        { icon: "Route", text: "Where does work stop and wait for someone to remember it?" },
        { icon: "UserCheck", text: "Who owns each step, and can they see what is waiting for them?" },
        { icon: "BarChart3", text: "Can the owner see what is happening today without asking for a report?" },
      ],
    },
    problems: {
      title: "Why healthcare software projects stall",
      intro: "Projects rarely fail on code. They fail because the work was never understood before the screens were designed.",
      items: [
        {
          icon: "PanelsTopLeft",
          title: "Screens before process",
          text: "Designs are approved before anyone maps how a patient, sample or order actually moves. The gaps show up after go-live.",
        },
        {
          icon: "Store",
          title: "Generic products, forced to fit",
          text: "Off-the-shelf tools assume a standard workflow. Staff keep side registers to cover what the product can't do.",
        },
        {
          icon: "UserCheck",
          title: "No owner per step",
          text: "When a step belongs to everyone, it belongs to no one, and the delay is discovered by the patient or customer.",
        },
        {
          icon: "BarChart3",
          title: "Reporting as an afterthought",
          text: "Data is not captured at the point of work, so reports are built later from incomplete records.",
        },
        {
          icon: "Puzzle",
          title: "Disconnected from what exists",
          text: "New software ignores the lab machine, accounting package or portal already in use, so staff type the same data twice.",
        },
        {
          icon: "Headphones",
          title: "Handed over, then abandoned",
          text: "No documentation and no named support contact, so small problems become workarounds within months.",
        },
      ],
    },
    services: {
      title: "What we build for healthcare organisations",
      intro: "Every build follows the same order: map the work, assign owners, automate the repetitive part, then add AI where it earns its place.",
      items: [
        {
          icon: "Hospital",
          title: "Hospital systems",
          text: "Front desk to follow-up, with every department hand-off recorded and owned. Built as one system, not loose modules.",
        },
        {
          icon: "Stethoscope",
          title: "Clinic workflows",
          text: "Appointments, consultations, prescriptions, reminders and billing for single clinics and growing chains.",
        },
        {
          icon: "FlaskConical",
          title: "Diagnostic centre software",
          text: "Sample tracking from collection to report, result delivery to patients and referring doctors, and turnaround visibility.",
        },
        {
          icon: "Boxes",
          title: "Healthcare product engineering",
          text: "Products for health companies, shaped by what we have seen in real hospital deployments, not by assumptions about them.",
        },
        {
          icon: "Truck",
          title: "Distributor order management",
          text: "Orders, stock and dispatch in one place, with customers updated automatically instead of by phone.",
        },
        {
          icon: "LayoutDashboard",
          title: "Owner dashboards",
          text: "Reporting designed in from the start, so owners see delays, volumes and revenue from the records staff already keep.",
        },
      ],
    },
    tables: [
      {
        eyebrow: "By sector",
        title: "Where we work, and what we usually build",
        intro: "The problems differ by sector. The method does not: map the work, name the owner, then build.",
        columns: ["Sector", "Typical problems", "What we usually build"],
        rows: [
          [
            "Hospitals",
            "Patients wait between departments; discharge and billing drag; management sees month-old reports",
            "A connected hospital system with owned hand-offs and live owner dashboards",
          ],
          [
            "Clinics",
            "Appointments in a diary, missed follow-ups, billing kept apart from the consultation",
            "Booking, consultation, prescription and reminder workflows in one flow",
          ],
          [
            "Diagnostic centres",
            "Samples tracked on paper, reports sent by hand, no view of turnaround time",
            "Sample-to-report tracking with automatic result delivery",
          ],
          [
            "Healthcare product companies",
            "Products designed around an ideal hospital that doesn't exist, low adoption after rollout",
            "Product builds informed by real hospital workflows and staff habits",
          ],
          [
            "Medical distributors",
            "Orders, stock and dispatch tracked across calls and spreadsheets; customers chasing updates",
            "Order management, stock visibility and automatic customer updates",
          ],
        ],
        note: "These are common patterns, not fixed packages. Scope is agreed after the bottleneck review.",
      },
    ],
    process: {
      title: "How a healthcare build runs",
      intro: "The new system runs alongside the old way until staff trust it. Nothing is switched off on day one.",
      steps: [
        { title: "Bottleneck review", text: "We walk through the work with the people who do it and find where it waits, repeats or depends on memory." },
        { title: "Plan", text: "Scope, priorities, owners, timeline and cost, written down. You approve before any build starts." },
        { title: "Build in short cycles", text: "Working software at regular intervals, starting with the step that costs you most." },
        { title: "Run in parallel", text: "The new system runs beside registers and existing tools until each team relies on it." },
        { title: "Go live and train each role", text: "Staff are trained on the steps they own, not on every screen." },
        { title: "Support and improve", text: "Documentation, a named support contact, and the next layer of automation once the data is ready." },
      ],
    },
    differentiators: {
      title: "What makes a build last",
      items: [
        {
          icon: "Workflow",
          title: "Process mapped first",
          text: "The work is mapped and owned before screens are designed, so the software fits the organisation on day one.",
        },
        {
          icon: "LineChart",
          title: "Reporting from the start",
          text: "The data owners need is captured at the point of work, not reconstructed at month end.",
        },
        {
          icon: "FileText",
          title: "Documented hand-over",
          text: "Every system is handed over with documentation and a named support contact, so it doesn't depend on one developer.",
        },
        {
          icon: "Hospital",
          title: "Hospital experience behind it",
          text: "Our building blocks come from real hospital deployments, including a 50+ module HMS delivered in three months.",
        },
      ],
    },
    caseStudy: {
      id: "mindful-rejuvenation",
      title: "From an offline practice to a digital hospital system",
      intro: "A psychiatric and mental healthcare practice moved from manual records to a 50+ module system in three months.",
    },
    related: ["healthcare/hospital-management-system", "healthcare/healthcare-integration", "product-engineering/mvp-development"],
    faq: [
      {
        q: "Do you build custom software or sell a product?",
        a: "Custom software. We reuse proven building blocks from earlier healthcare builds, but every system is shaped around how your organisation already runs.",
      },
      {
        q: "Which healthcare organisations do you work with?",
        a: "Hospitals, clinics, diagnostic centres, healthcare product companies and medical distributors, with clients in the USA, India and the UAE.",
      },
      {
        q: "We are a medical distributor, not a hospital. Is this relevant to us?",
        a: "Yes. Distributors usually track orders, stock and dispatch across calls and spreadsheets. We build order management, stock visibility and automatic customer updates around that work.",
      },
      {
        q: "We build a healthcare product. How do you help?",
        a: "We bring what we have learned from hospital deployments: how staff really work, where they skip steps, and what makes a tool get used. That shapes the product before it reaches a hospital.",
      },
      {
        q: "Can the new software work with what we already use?",
        a: "Usually, yes. We map your current systems and connect to them where that is cheaper than replacing them. The integration list is confirmed per project.",
      },
      {
        q: "What technology do you use?",
        a: "Typically React or Next.js on the front end, Node.js or Python on the back end, PostgreSQL for records, and AWS, GCP, Azure or private hosting depending on where your data must stay.",
      },
      {
        q: "What happens after go-live?",
        a: "You get documentation and a named support contact. We monitor, fix issues and add the next layer, such as automation or AI, once the records are reliable.",
      },
    ],
    cta: {
      title: "Tell us where the work waits",
      text: "Start with a bottleneck review. We map one workflow with your team and show you what a build would involve before you commit.",
    },
  },

  // ───────────────────────────────────────────────────────────────────────────
  "healthcare-integration": {
    seo: {
      title: "Healthcare Integration: HL7, FHIR, ABDM, Lab & PACS",
      description:
        "Healthcare integration that connects lab machines, PACS, insurance portals, accounting, WhatsApp and HL7 / FHIR systems, so staff stop typing the same data twice.",
      keywords: [
        "healthcare integration",
        "healthcare integration services",
        "HL7 integration",
        "FHIR integration",
        "ABDM integration",
        "lab machine interfacing",
        "PACS integration",
        "hospital software integration",
      ],
    },
    hero: {
      title: "Connect what your hospital already uses, *instead of replacing it*",
      subtitle:
        "Lab machines, imaging, insurance portals, accounting and messaging, linked to your hospital system so results, claims and updates move on their own. We map what you use today and connect to it where that is cheaper than replacing it.",
      chips: ["Lab machines", "PACS", "Insurance / TPA", "Accounting", "WhatsApp & SMS", "HL7", "FHIR", "ABDM"],
      formTitle: "Which systems should talk to each other?",
      formMessageLabel: "Where does your team re-enter the same data today?",
    },
    definition: {
      eyebrow: "What it is",
      title: "What is healthcare integration?",
      paragraphs: [
        "Healthcare integration is the work of connecting the separate systems a hospital or clinic uses, such as lab analysers, imaging, billing, insurance portals and messaging, so that data entered in one place reaches the others without being retyped. It covers the data formats, the interfaces and the rules about what moves where and when.",
        "Most hospitals don't need to replace their software. They need it to stop depending on a person in the middle: the technician copying analyser results, the billing clerk rekeying a claim into a TPA portal, the front desk calling patients one by one. We find those hand-offs and connect them, using HL7 or FHIR where the systems support it and simpler interfaces where they don't.",
      ],
      points: [
        { icon: "Repeat", text: "Which data does your team type into more than one system?" },
        { icon: "FlaskConical", text: "How do lab results reach the doctor and the patient today?" },
        { icon: "Receipt", text: "How many steps does an insurance claim take before submission?" },
      ],
    },
    problems: {
      title: "Why hospital systems stay disconnected",
      intro: "The systems work on their own. The cost sits in the people carrying data between them.",
      items: [
        {
          icon: "Repeat",
          title: "Double entry",
          text: "Results, charges and patient details are typed again in each system, with errors at every copy.",
        },
        {
          icon: "Split",
          title: "Replace-everything thinking",
          text: "Integration is dismissed in favour of a full replacement that costs more, takes longer and disrupts every department.",
        },
        {
          icon: "FlaskConical",
          title: "Lab results on paper",
          text: "Analyser output is printed and re-entered, so reports wait and transcription mistakes reach the patient file.",
        },
        {
          icon: "Wallet",
          title: "Claims stuck between portals",
          text: "Insurance and TPA submissions are rebuilt by hand from the bill, and queries are tracked in email threads.",
        },
        {
          icon: "TriangleAlert",
          title: "Fragile one-off links",
          text: "Earlier integrations were scripts nobody documented. When one breaks silently, nobody notices until data is missing.",
        },
        {
          icon: "Lock",
          title: "Unclear data flow",
          text: "No one can say exactly which system sends patient data where, which is a problem for privacy and audit.",
        },
      ],
    },
    services: {
      title: "What we connect",
      intro: "Each connection has a defined owner, a log of what moved, and an alert when something fails.",
      items: [
        {
          icon: "FlaskConical",
          title: "Lab machine interfacing",
          text: "Analyser results flow into the patient record and the lab report, ready for review instead of retyping.",
        },
        {
          icon: "Microscope",
          title: "PACS and imaging",
          text: "Imaging orders, study status and reports linked to the patient record, so doctors and billing see the same thing.",
        },
        {
          icon: "Receipt",
          title: "Insurance and TPA portals",
          text: "Claim data prepared from the bill and records, with submission status and queries tracked in one place.",
        },
        {
          icon: "Wallet",
          title: "Accounting software",
          text: "Bills, receipts and payments posted to accounts so finance closes the month without rebuilding it.",
        },
        {
          icon: "MessageSquare",
          title: "WhatsApp and SMS",
          text: "Appointment reminders, report-ready notices and follow-ups sent from events in the system, not from a staff phone.",
        },
        {
          icon: "Network",
          title: "HL7, FHIR and ABDM",
          text: "Standard interfaces where the other system supports them, and ABDM-ready flows for health records in India.",
        },
      ],
    },
    tables: [
      {
        eyebrow: "Integration map",
        title: "What moves, and how",
        intro: "A typical starting map. The actual list depends on what you run today and what each vendor supports.",
        columns: ["System", "What moves", "Usual method"],
        rows: [
          ["Lab analysers", "Test orders out, results back", "HL7 or vendor interface, file-based where needed"],
          ["PACS / imaging", "Orders, study status, reports", "HL7 / DICOM-linked interfaces or vendor API"],
          ["Insurance / TPA portals", "Pre-authorisation and claim data, status", "Portal API where available, assisted submission otherwise"],
          ["Accounting", "Invoices, receipts, payments", "Accounting software API or scheduled export"],
          ["WhatsApp / SMS", "Reminders, report notices, follow-ups", "Messaging provider API"],
          ["National health records", "Health IDs and record sharing", "ABDM-ready interfaces (India)"],
          ["Other clinical systems", "Patient, encounter and result data", "FHIR resources or HL7 messages"],
        ],
        note: "We confirm the exact integration list and method per project, after checking what each existing system allows.",
      },
      {
        eyebrow: "Connect or replace",
        title: "When we connect, and when we suggest replacing",
        columns: ["Situation", "Our usual advice"],
        rows: [
          ["The system works and staff like it", "Connect to it"],
          ["The vendor offers an API or standard interface", "Connect to it"],
          ["No interface, but data can be exported reliably", "Connect with a scheduled, monitored export"],
          ["The system blocks the workflow and can't be reached", "Plan a replacement, in stages"],
        ],
        highlightLast: true,
      },
    ],
    process: {
      title: "How an integration project runs",
      steps: [
        { title: "Map current systems", text: "We list what you run, who uses it, what data it holds and where staff copy data between systems." },
        { title: "Choose what to connect", text: "We rank connections by staff time saved and risk, and recommend connect or replace for each. You approve the plan." },
        { title: "Build and test", text: "Each interface is built against test data first, with logging and failure alerts from the start." },
        { title: "Run in parallel", text: "Staff keep the manual step until the automatic one has proven itself on real data." },
        { title: "Hand over and support", text: "Documentation of every data flow, plus a named support contact for when a vendor changes something." },
      ],
    },
    compliance: {
      title: "Patient data in motion",
      intro: "Integration means patient data crosses systems. Each flow is designed so you can say what moved, where and why.",
      items: [
        "HL7 / FHIR interfaces",
        "ABDM-ready flows for India",
        "Encryption in transit and at rest",
        "Audit trail on every exchange",
        "Role-based access",
        "Only the fields each system needs",
        "HIPAA-aligned design for US clients",
        "Designed to support India's DPDP Act",
      ],
      note: "Which standards apply depends on where you operate and what each connected vendor supports. Exact scope is confirmed per project.",
    },
    stack: {
      title: "Tools we integrate with",
      groups: [
        { label: "Standards", items: ["HL7", "FHIR", "ABDM"] },
        { label: "Interfaces", items: ["REST", "GraphQL", "WebSockets", "Webhooks", "Scheduled file exchange"] },
        { label: "Integration layer", items: ["Node.js", "Python (FastAPI)", "n8n", "Redis", "PostgreSQL"] },
        { label: "Hosting", items: ["AWS", "GCP", "Azure", "Private / on-premise"] },
      ],
    },
    related: ["healthcare/hospital-management-system", "healthcare/devops-in-healthcare", "ai-development/workflow-automation"],
    faq: [
      {
        q: "Do we have to replace our current hospital software?",
        a: "Usually not. We map what you use today and connect to it where that is cheaper than replacing it. We only suggest replacement when a system blocks the workflow and can't be reached.",
      },
      {
        q: "Which systems can you integrate with?",
        a: "Commonly lab analysers, PACS, insurance and TPA portals, accounting software and WhatsApp or SMS. The exact list depends on what each vendor allows, so we confirm it per project.",
      },
      {
        q: "Do you support HL7 and FHIR?",
        a: "Yes. We build HL7 and FHIR interfaces where the other system supports them, and simpler monitored interfaces where it does not.",
      },
      {
        q: "Is the integration ABDM-ready?",
        a: "For hospitals and clinics in India, we design flows for health IDs and record sharing to be ABDM-ready. The scope is agreed during planning.",
      },
      {
        q: "What happens if a connection fails?",
        a: "Every interface logs what it sends and receives, and raises an alert to a named owner when something fails, so problems are caught before data goes missing.",
      },
      {
        q: "Our lab machine is old. Can it still be connected?",
        a: "Often, yes, through its own output format or a file export. We check the device and its documentation during the mapping step before committing.",
      },
      {
        q: "Who owns the integration code?",
        a: "You do. Every data flow is documented and handed over with a named support contact.",
      },
    ],
    cta: {
      title: "Stop typing the same data twice",
      text: "Send us the list of systems you run. We will show you which connections would save the most staff time.",
    },
  },

  // ───────────────────────────────────────────────────────────────────────────
  "health-data-analysis": {
    seo: {
      title: "Health Data Analysis & Hospital Dashboards",
      description:
        "Health data analysis for hospital owners: plain-language answers on occupancy, revenue, delays and bottlenecks, from clean records and dashboards built in from day one.",
      keywords: [
        "health data analysis",
        "healthcare data analytics",
        "hospital dashboard",
        "hospital analytics software",
        "hospital occupancy reporting",
        "healthcare business intelligence",
        "RAG for healthcare",
        "hospital revenue analysis",
      ],
    },
    hero: {
      title: "Ask your hospital a question and *get a straight answer*",
      subtitle:
        "Occupancy, revenue, delays and bottlenecks, answered in plain language from your own records. Clean data first, dashboards built in from the start, and AI that shows where every answer came from.",
      chips: ["Occupancy", "Revenue", "Discharge delays", "Department load", "Owner dashboards", "Data quality", "Ask in plain language"],
      formTitle: "What do you wish you could see every morning?",
      formMessageLabel: "Which question takes your team longest to answer today?",
    },
    definition: {
      eyebrow: "What it is",
      title: "What is health data analysis?",
      paragraphs: [
        "Health data analysis is the process of turning the records a hospital or clinic already keeps, such as admissions, bills, orders and discharges, into answers that management can act on. It covers collecting the data, cleaning it, measuring what matters, and presenting it so an owner can see what is happening without waiting for a report.",
        "The hard part is rarely the chart. It is the data underneath. When staff work around a system, keep side registers or enter details at the end of a shift, the records are incomplete and every dashboard built on them is wrong. We fix capture first, then build the views and the questions on top.",
        "Once the records are reliable, we can add an assistant that answers questions such as \"which department delayed discharges this week?\" from your own data, with the source records shown next to the answer.",
      ],
    },
    problems: {
      title: "Why hospital reports don't get used",
      items: [
        {
          icon: "Split",
          title: "Data captured late or not at all",
          text: "Staff working around the system leave gaps, so totals never match what managers see on the floor.",
        },
        {
          icon: "Clock",
          title: "Month-end, not today",
          text: "Reports are assembled by hand after the month closes, long after the delay could have been fixed.",
        },
        {
          icon: "LayoutDashboard",
          title: "Dashboards nobody asked for",
          text: "Dozens of charts, none answering the question the owner actually has.",
        },
        {
          icon: "Scale",
          title: "Numbers that disagree",
          text: "Billing, the ward and the pharmacy each report a different figure, so meetings argue about the data instead of the problem.",
        },
        {
          icon: "Search",
          title: "Answers locked in spreadsheets",
          text: "One person knows how to pull the figure. When they are away, the question waits.",
        },
        {
          icon: "Sparkles",
          title: "AI on unreliable records",
          text: "An assistant that answers from incomplete data gives confident wrong answers, which is worse than none.",
        },
      ],
    },
    services: {
      title: "What we build",
      intro: "Data quality first, then the views and questions management actually uses.",
      items: [
        {
          icon: "ClipboardCheck",
          title: "Data quality review",
          text: "We find where records go missing or arrive late, and fix capture at the point of work.",
        },
        {
          icon: "LayoutDashboard",
          title: "Owner dashboards",
          text: "A short set of views on occupancy, revenue, delays and department load, built into the system from the start.",
        },
        {
          icon: "Timer",
          title: "Delay and bottleneck tracking",
          text: "Time between key steps, such as discharge order to final bill, measured automatically and flagged when it slips.",
        },
        {
          icon: "TrendingUp",
          title: "Revenue and volume analysis",
          text: "Revenue by department, doctor, package and payer, compared week on week without a spreadsheet.",
        },
        {
          icon: "MessageSquare",
          title: "Plain-language questions",
          text: "A RAG assistant that answers from your hospital's own records, with the source records shown for every answer.",
        },
        {
          icon: "Bell",
          title: "Alerts to named owners",
          text: "When a measure crosses a limit you set, the person who owns that step is told, not just the dashboard.",
        },
      ],
    },
    tables: [
      {
        eyebrow: "Questions owners ask",
        title: "From question to answer",
        intro: "Examples of what management asks, and where the answer comes from once the data is captured properly.",
        columns: ["Question", "Where the answer comes from", "Who acts on it"],
        rows: [
          ["Which department delayed discharges this week?", "Discharge order and final bill timestamps", "Department head and billing lead"],
          ["What is our bed occupancy today, by ward?", "Admissions, transfers and discharges", "Admissions / ward in-charge"],
          ["Which payers take longest to settle?", "Claim submission and settlement dates", "Billing and finance"],
          ["Where do OPD patients wait longest?", "Registration, consultation and order timestamps", "Front office lead"],
          ["Which services are growing, and which are falling?", "Billing by department and service, week on week", "Management"],
        ],
        note: "The exact measures are agreed with your team. We only show figures the records can support.",
      },
    ],
    process: {
      title: "How we get from records to answers",
      steps: [
        { title: "Agree the questions", text: "We sit with owners and department heads and list the five to ten questions they need answered most often." },
        { title: "Check the data", text: "We trace where each answer would come from and find the gaps in how data is captured today." },
        { title: "Fix capture", text: "Small changes at the point of work, so the data is complete without adding effort for staff." },
        { title: "Build views and alerts", text: "Dashboards and alerts for the agreed questions, tested against figures your team already trusts." },
        { title: "Add the assistant", text: "Once the records are reliable, a plain-language assistant that answers with its sources shown." },
      ],
    },
    differentiators: {
      title: "How we keep AI answers accountable",
      intro: "An assistant is only useful if you can check it. Every answer is traceable.",
      items: [
        {
          icon: "FileSearch",
          title: "Sources shown",
          text: "Each answer lists the records it was drawn from, so anyone can check it.",
        },
        {
          icon: "Lock",
          title: "Only relevant records sent",
          text: "The model sees only the records needed for the question, not your whole database.",
        },
        {
          icon: "Server",
          title: "Data stays with you",
          text: "Records and the assistant run in infrastructure you control.",
        },
        {
          icon: "UserCheck",
          title: "A named person signs off",
          text: "Someone on your team owns the assistant's scope and approves what it is allowed to answer.",
        },
        {
          icon: "Scale",
          title: "AI only where it beats a rule",
          text: "If a fixed report or alert answers the question, we build that instead.",
        },
      ],
    },
    industries: {
      title: "Who uses it",
      items: [
        { icon: "Hospital", title: "Hospital owners and management", text: "Occupancy, revenue and delays without waiting for month-end." },
        { icon: "Building2", title: "Multi-site groups", text: "One view across branches, with the same measures defined the same way." },
        { icon: "FlaskConical", title: "Diagnostic centres", text: "Turnaround time, sample volumes and referral sources tracked daily." },
      ],
    },
    related: ["ai-development/rag-development-services", "healthcare/hospital-management-system", "healthcare/natural-language-processing"],
    faq: [
      {
        q: "We already have reports. Why would we need this?",
        a: "Most hospital reports are rebuilt by hand and arrive after the month closes. We give owners the same answers daily, from the records staff already keep.",
      },
      {
        q: "Our data is messy. Can you still help?",
        a: "Yes, and that is where we start. We find where records go missing or arrive late and fix capture before building any dashboard.",
      },
      {
        q: "Can I ask questions in plain language?",
        a: "Once the data is reliable, yes. A RAG assistant answers from your hospital's own records and shows the source records for every answer.",
      },
      {
        q: "Is our patient data sent to an outside AI service?",
        a: "Only the records relevant to a question are sent to the model, and the setup runs in infrastructure you control. Where data must not leave your environment, we host accordingly.",
      },
      {
        q: "Does this work with our existing hospital software?",
        a: "Usually, yes. We connect to your current systems where that is cheaper than replacing them. The exact sources are confirmed per project.",
      },
      {
        q: "Who decides what the dashboards show?",
        a: "Your management team. We agree the questions with you first and only build measures the records can support.",
      },
    ],
    cta: {
      title: "Start with one question",
      text: "Tell us the question you most want answered each morning. We will show you whether your data can answer it today, and what it would take.",
    },
  },

  // ───────────────────────────────────────────────────────────────────────────
  "devops-in-healthcare": {
    seo: {
      title: "DevOps in Healthcare: Uptime, Backups & Secure Hosting",
      description:
        "DevOps for healthcare systems in daily clinical use: staged releases, monitoring, backups, audit logging and access control, on cloud or private hosting.",
      keywords: [
        "devops in healthcare",
        "healthcare devops services",
        "hospital software hosting",
        "healthcare cloud infrastructure",
        "on-premise hospital server",
        "healthcare backup and disaster recovery",
        "CI/CD for healthcare software",
      ],
    },
    hero: {
      title: "Keep clinical systems running *while you keep improving them*",
      subtitle:
        "Environments, deployment pipelines, monitoring, backups and access control for software that doctors, nurses and front desk staff depend on every day. On cloud, or on private hosting where data must stay with you.",
      chips: ["Staged releases", "Monitoring", "Backups & recovery", "Audit logging", "Access control", "Cost control", "Cloud or on-premise"],
      formTitle: "What worries you most about your systems?",
      formMessageLabel: "When did a release or outage last disrupt your staff?",
    },
    definition: {
      eyebrow: "What it is",
      title: "What is DevOps in healthcare?",
      paragraphs: [
        "DevOps in healthcare is the practice of building, releasing and running healthcare software so that updates reach users safely and the system stays available, recoverable and secure. It covers environments, automated deployment pipelines, monitoring, backups, access control and audit logging for systems that clinical staff use every day.",
        "A hospital can't pause for a release. If billing goes down at discharge time or the ward can't see medication orders, patients wait. So changes are tested in a separate environment, released in stages, and can be rolled back quickly. Backups are tested, not assumed. And someone is told the moment something breaks.",
      ],
      points: [
        { icon: "Rocket", text: "Can you release an update without stopping the wards?" },
        { icon: "History", text: "When did you last restore a backup to prove it works?" },
        { icon: "KeyRound", text: "Can you say who accessed a patient record, and when?" },
      ],
    },
    problems: {
      title: "Where healthcare systems run into trouble",
      intro: "Most outages and data scares come from how software is run, not how it was written.",
      items: [
        {
          icon: "TriangleAlert",
          title: "Releases straight to live",
          text: "Changes go to the system staff are using with no test environment, so mistakes surface on the ward.",
        },
        {
          icon: "Database",
          title: "Backups never tested",
          text: "Backups run every night, but nobody has restored one. The first real test is the emergency.",
        },
        {
          icon: "Eye",
          title: "Outages found by staff",
          text: "Without monitoring, the first alert is a call from the front desk saying the system is down.",
        },
        {
          icon: "KeyRound",
          title: "Shared logins and open access",
          text: "Accounts are shared and access is never reviewed, so no one can say who changed a record.",
        },
        {
          icon: "Wallet",
          title: "Cloud bills that only grow",
          text: "Servers sized for a peak that never comes, and nobody responsible for the monthly cost.",
        },
        {
          icon: "Wrench",
          title: "Knowledge in one head",
          text: "Only one person knows how the server is set up. When they leave, so does the ability to recover.",
        },
      ],
    },
    services: {
      title: "What we set up and run",
      items: [
        {
          icon: "Layers",
          title: "Separate environments",
          text: "Development, testing and live environments, so changes are checked before staff ever see them.",
        },
        {
          icon: "GitBranch",
          title: "Deployment pipelines",
          text: "Automated build, test and release with GitHub Actions or GitLab CI, with quick rollback when needed.",
        },
        {
          icon: "Activity",
          title: "Monitoring and alerts",
          text: "Uptime, errors, slow pages and failed integrations watched continuously, with alerts to a named owner.",
        },
        {
          icon: "RefreshCw",
          title: "Backups and recovery",
          text: "Scheduled backups, kept separately, with restores rehearsed so recovery is a known procedure.",
        },
        {
          icon: "ShieldCheck",
          title: "Access control and audit logging",
          text: "Individual accounts, role-based access, and a log of who did what to which record.",
        },
        {
          icon: "Wallet",
          title: "Cost control",
          text: "Infrastructure sized to real use, reviewed regularly, with a clear owner for the monthly bill.",
        },
      ],
    },
    tables: [
      {
        eyebrow: "Where it runs",
        title: "Cloud or private hosting",
        intro: "We host where your data needs to be, not where it is easiest for us.",
        columns: ["Option", "Suits", "What we look after"],
        rows: [
          ["Public cloud (AWS, GCP, Azure)", "Multi-site groups, remote access, variable load", "Setup, scaling, monitoring, backups, cost reviews"],
          ["Private cloud / dedicated server", "Organisations with data residency requirements", "Server hardening, deployments, monitoring, backups"],
          ["On-premise", "Hospitals where data must stay on site", "Installation, update process, local backups with off-site copy"],
          ["Hybrid", "Clinical data on site, patient-facing services in the cloud", "Secure links between the two, plus everything above"],
        ],
        note: "The right option depends on your location, regulations and connectivity. We agree it with you during planning.",
      },
    ],
    process: {
      title: "How we take over or set up your infrastructure",
      steps: [
        { title: "Review what runs today", text: "Servers, access, backups, release habits and costs, written down in one place." },
        { title: "Fix the risks first", text: "Untested backups, shared logins and missing monitoring are addressed before anything else." },
        { title: "Build the pipeline", text: "Environments and automated deployments, so every change follows the same tested path." },
        { title: "Release in stages", text: "Updates reach a small group or quiet period first, then everyone, without stopping operations." },
        { title: "Run, report and review", text: "Ongoing monitoring, recovery drills and cost reviews, with a named support contact." },
      ],
    },
    compliance: {
      title: "Security for systems holding patient data",
      items: [
        "Role-based access",
        "Audit trail on every record",
        "Encryption in transit and at rest",
        "Data stays in infrastructure you control",
        "Tested backups and recovery plan",
        "HIPAA-aligned design for US clients",
        "Designed to support India's DPDP Act",
      ],
      note: "Which standards apply depends on where you operate. We confirm the exact scope with you during planning.",
    },
    stack: {
      title: "Tools we work with",
      groups: [
        { label: "Containers", items: ["Docker", "Kubernetes"] },
        { label: "Pipelines", items: ["GitHub Actions", "GitLab CI"] },
        { label: "Cloud", items: ["AWS", "GCP", "Azure", "Private cloud", "On-premise"] },
        { label: "Data", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"] },
      ],
      note: "On-premise and private hosting use the same pipeline and monitoring approach.",
    },
    differentiators: {
      title: "How we run it",
      items: [
        {
          icon: "UserCheck",
          title: "A named owner",
          text: "Every alert, backup and release has a person responsible for it, on your side and ours.",
        },
        {
          icon: "FileText",
          title: "Written runbooks",
          text: "Setup, release and recovery steps are documented, so the system never depends on one person.",
        },
        {
          icon: "Stethoscope",
          title: "Releases timed around the hospital",
          text: "We schedule changes around clinic hours, rounds and billing peaks, agreed with your team.",
        },
      ],
    },
    related: ["healthcare/healthcare-integration", "product-engineering/aws-and-cloud", "product-engineering/managed-engineering-services"],
    faq: [
      {
        q: "Can you update our system without downtime for staff?",
        a: "We release in stages, test changes in a separate environment first and schedule releases around your busy hours, so updates reach staff without stopping operations.",
      },
      {
        q: "Do you host in the cloud or on our own servers?",
        a: "Either. We use AWS, GCP or Azure where it suits, and private or on-premise hosting where your data must stay with you.",
      },
      {
        q: "How do we know our backups work?",
        a: "We rehearse restores on a schedule, so recovery is a tested procedure rather than an assumption.",
      },
      {
        q: "Can you take over a system someone else built?",
        a: "Yes. We start by reviewing what runs today, document it, and fix the biggest risks before changing anything else.",
      },
      {
        q: "Can you tell us who accessed a patient record?",
        a: "Yes. We set up individual accounts, role-based access and an audit trail that records who viewed or changed each record.",
      },
      {
        q: "Will this reduce our cloud bill?",
        a: "Often, because infrastructure is sized to real use and reviewed regularly. We can't promise a figure until we have seen your current setup.",
      },
      {
        q: "Who do we call when something breaks?",
        a: "A named support contact. Alerts also go to the owner of the affected system, often before staff notice anything.",
      },
    ],
    cta: {
      title: "Find out how exposed your systems are",
      text: "We review your hosting, backups, access and release process, and tell you which risks to fix first.",
    },
  },
}

export default healthcareTech
