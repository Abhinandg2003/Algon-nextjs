import I from "./_icons.js"

// See ../caseStudiesData.js for the entry shape.
const IMG = "/images/clients/gallery/desire"
const SERIES = { key: "admissions-platform", name: "Admissions Automation Platform", total: 2 }
const SCREENSHOT_CHECK = "Check screenshots for the client's name/logo — blur or replace before publishing"

const admissions = [
  /* ── Part 1: AI admissions assistant ─────────────────────────────────── */
  {
    id: "admissions-ai-assistant",
    series: { ...SERIES, part: 1 },
    title: "Admissions Platform — AI Admissions Assistant",
    tagline: "An LLM-powered assistant that answers student questions from approved content and turns conversations into qualified enquiries.",
    category: "AI & Automation · Conversational AI",
    client: "A study-abroad admissions consultancy, Kerala",
    year: "2024",
    duration: "Delivered alongside the 4-day website launch",
    services: [
      "Conversational AI",
      "LLM Integration",
      "Knowledge Base Design",
      "Intent Classification",
      "Lead Qualification",
      "Structured Data Capture",
      "Counsellor Hand-off",
    ],
    tags: ["EdTech", "Conversational AI", "LLM", "Lead Qualification"],
    accent: "#298dff",

    thumbnail: `${IMG}/thumbnail.webp`,
    heroImage: `${IMG}/hero.webp`,
    mockup: `${IMG}/mockup.webp`,
    commonImg: `${IMG}/common.webp`,
    gallery: [`${IMG}/1.webp`, `${IMG}/3.webp`, `${IMG}/5.webp`, `${IMG}/7.webp`],

    overview:
      "A study-abroad admissions consultancy was answering the same questions about courses, countries and eligibility by hand, one enquiry at a time. We built an LLM-powered admissions assistant into their new website that answers from an approved knowledge base, works out what each student is actually asking, and captures the details a counsellor needs. Conversations that show real intent are handed to a counsellor with the context already attached, so the first human reply starts where the chat left off.",
    challenge:
      "Prospective students arrive with open-ended questions — which country suits their budget, whether their grades meet entry requirements, when intakes open — and expect an answer immediately, often outside office hours. The consultancy had no way to respond instantly, and every enquiry reached a counsellor as an unstructured message that had to be re-asked from scratch. A generic chatbot was not an option: in admissions, a confidently wrong answer about eligibility or deadlines damages trust and wastes counsellor time.",
    solution:
      "We grounded the assistant in a curated knowledge base of the consultancy's own approved content, using retrieval so answers are drawn from vetted material rather than the model's general knowledge. An intent-classification layer separates browsing questions from enrolment intent, and the assistant gathers structured fields — destination, course level, intake, academic background — as part of a natural conversation, with consent captured before any contact details are stored. When an enquiry qualifies, or a question falls outside the approved content, it escalates to a counsellor with the full transcript and a structured summary.",

    statpoints: [
      "No instant response to student questions, especially out of hours",
      "Counsellors repeating the same course and country answers daily",
      "Enquiries arriving as free text with no structured details",
      "No way to tell serious applicants from casual browsers",
    ],

    pillars: [
      { num: "01", title: "Grounded Answers", text: "Retrieval over an approved knowledge base keeps answers on courses, countries and eligibility tied to content the consultancy has signed off." },
      { num: "02", title: "Intent Classification", text: "Each conversation is classified by what the student needs — general information, eligibility check or ready to apply — so the assistant responds at the right depth." },
      { num: "03", title: "Structured Capture", text: "Destination, course level, intake and academic background are collected conversationally and stored as clean, structured enquiry data with consent recorded." },
      { num: "04", title: "Counsellor Hand-off", text: "Qualified enquiries and out-of-scope questions escalate to a counsellor with the transcript and a summary, so no student has to repeat themselves." },
    ],

    stepsData: [
      { phase: "Phase 01", title: "Knowledge Mapping", desc: "Collected the consultancy's approved material on destinations, courses and entry requirements and structured it into a retrievable knowledge base.", icon: I.data },
      { phase: "Phase 02", title: "Conversation Design", desc: "Defined intents, qualification questions and guardrails — what the assistant answers, what it must escalate, and how it asks for consent.", icon: I.flow },
      { phase: "Phase 03", title: "Model Integration", desc: "Connected the LLM to retrieval and the enquiry schema, and tested answers against real student questions before anything went live.", icon: I.ai },
      { phase: "Phase 04", title: "Go-live & Hand-off", desc: "Embedded the assistant across the website and wired qualified conversations into the counsellor hand-off flow.", icon: I.launch },
    ],

    results: [
      { metric: "Student response time", before: "Next working day", after: "Instant, 24/7", delta: "Always-on first response" },
      { metric: "Enquiry data", before: "Free-text messages", after: "Structured fields", delta: "Ready for counselling" },
      { metric: "Repeat questions", before: "Answered manually", after: "Handled by the assistant", delta: "Counsellors focus on applicants" },
      { metric: "Enrolments", before: "Baseline", after: "3x, with a smaller team", delta: "3x" },
    ],

    stats: [
      { value: "24", suffix: "/7", label: "Assistant availability" },
      { value: "3", suffix: "x", label: "Enrolments with a smaller team" },
      { value: "1", suffix: "", label: "Approved knowledge base behind every answer" },
      { value: "4", suffix: "", label: "Qualification fields captured per enquiry" },
    ],

    testimonial: {
      text: "Algon built us a strong website with brand presence, AI chatbot support, contact flows, and everything we needed to connect better with students.",
      author: "Director",
      role: "Study-abroad admissions consultancy",
    },

    _verify: [
      "Confirm the consultancy is based in Kerala",
      "Confirm which LLM / chatbot platform powered the assistant",
      "Confirm answers used retrieval over an approved knowledge base",
      "Confirm intent classification and lead qualification were part of the build",
      "Confirm the four structured fields (destination, course level, intake, academic background)",
      "Confirm consent capture before storing contact details",
      "Confirm escalation to a counsellor with transcript and summary",
      "Confirm previous response time was 'next working day'",
      "Confirm the assistant was delivered within the 4-day launch window",
      SCREENSHOT_CHECK,
    ],
  },

  /* ── Part 2: Follow-up automation + 4-day website launch ─────────────── */
  {
    id: "admissions-follow-up-automation",
    series: { ...SERIES, part: 2 },
    title: "Admissions Platform — Follow-up Automation & Website Launch",
    tagline: "Event-driven follow-ups that replaced about four hours a day of manual chasing, on a website launched in four days.",
    category: "AI & Automation · Workflow Automation",
    client: "A study-abroad admissions consultancy, Kerala",
    year: "2024",
    duration: "4-day website launch",
    services: [
      "Workflow Automation",
      "Website Design & Development",
      "Lead Capture Forms",
      "Enquiry Routing",
      "CRM Integration",
      "On-page SEO",
      "Conversion Tracking",
    ],
    tags: ["EdTech", "Automation", "Web", "SEO"],
    accent: "#298dff",

    thumbnail: `${IMG}/mockup.webp`,
    heroImage: `${IMG}/hero.webp`,
    mockup: `${IMG}/common.webp`,
    commonImg: `${IMG}/thumbnail.webp`,
    gallery: [`${IMG}/2.webp`, `${IMG}/4.webp`, `${IMG}/6.webp`, `${IMG}/9.webp`],

    overview:
      "The consultancy's director was spending about four hours a day chasing enquiries by hand — reminding students about documents, checking who had replied, and deciding which counsellor should pick up which lead. We launched a new website in four days and built the enquiry-to-enrolment workflow behind it: every form submission and qualified chat triggers routing, status tracking and an automated follow-up sequence. The consultancy now enrols three times as many students with a smaller team.",
    challenge:
      "Follow-up depended entirely on one person's memory and inbox. Enquiries came in through several channels with no single record, duplicates were common, and there was no shared view of where each student sat between first contact and enrolment. Leads went cold not because students lost interest, but because the next message was sent late or not at all — and the consultancy also needed a fast, findable website to bring those enquiries in.",
    solution:
      "We designed and launched the website in four days, with lead capture forms, on-page SEO and conversion tracking built in from the first release. Behind it, webhook-triggered workflows deduplicate each enquiry, sync it to a central record, and route it to a counsellor by destination and workload. Status changes drive event-based follow-up sequences — document reminders, intake deadlines, re-engagement nudges — with SLA timers and escalation rules so no enquiry sits unanswered without someone being alerted.",

    statpoints: [
      "About four hours a day spent on manual follow-ups",
      "No single record of enquiries across channels",
      "No visibility of each student's stage from enquiry to enrolment",
      "Weak online presence and no search visibility",
    ],

    pillars: [
      { num: "01", title: "Event-driven Follow-ups", text: "Status changes trigger timed reminder sequences, so students hear back at each stage without anyone scheduling a message by hand." },
      { num: "02", title: "Routing & SLAs", text: "Enquiries are deduplicated and assigned to a counsellor automatically, with SLA timers and escalation rules when a lead goes unanswered." },
      { num: "03", title: "Status Tracking", text: "Every student has one record moving through defined stages from enquiry to enrolment, giving the team a shared, current view of the pipeline." },
      { num: "04", title: "Fast, Findable Website", text: "A website launched in four days with lead capture forms, on-page SEO, Core Web Vitals in mind and conversion tracking on every enquiry path." },
    ],

    stepsData: [
      { phase: "Phase 01", title: "Pipeline Mapping", desc: "Mapped every step from first enquiry to enrolment, the follow-ups done by hand at each stage, and where leads were being lost.", icon: I.plan },
      { phase: "Phase 02", title: "4-day Website Build", desc: "Designed and launched the website with lead capture forms, on-page SEO, structured metadata and conversion tracking.", icon: I.screen },
      { phase: "Phase 03", title: "Workflow Automation", desc: "Built webhook-triggered workflows for deduplication, CRM sync, counsellor routing and stage-based follow-up sequences.", icon: I.integrate },
      { phase: "Phase 04", title: "SLAs & Monitoring", desc: "Added SLA timers, escalation rules and pipeline reporting so the team can see what is overdue and where enrolments come from.", icon: I.chart },
    ],

    results: [
      { metric: "Manual follow-up", before: "~4 hours a day", after: "Automated", delta: "~4 h/day returned" },
      { metric: "Enrolments", before: "Baseline", after: "3x, with a smaller team", delta: "3x" },
      { metric: "Website launch", before: "No effective site", after: "Live in 4 days", delta: "4 days" },
      { metric: "Pipeline visibility", before: "Inbox and memory", after: "Tracked stages per student", delta: "One shared view" },
    ],

    stats: [
      { value: "4", suffix: "d", label: "Website design to launch" },
      { value: "4", suffix: "h", label: "Manual follow-up removed per day" },
      { value: "3", suffix: "x", label: "Enrolments with a smaller team" },
      { value: "20", suffix: "h", label: "Hours returned each working week" },
    ],

    testimonial: {
      text: "Before Algon, I was spending 4 hours a day just managing follow-ups. Now the system does it automatically. Our team is smaller but we're enrolling three times as many students.",
      author: "Director",
      role: "Study-abroad admissions consultancy",
    },

    _verify: [
      "Confirm the consultancy is based in Kerala",
      "Confirm which channels follow-ups used (WhatsApp, email, SMS)",
      "Confirm the workflow tool used (e.g. n8n or similar) and webhook triggers",
      "Confirm the CRM / central record the enquiries synced to",
      "Confirm deduplication and counsellor routing by destination and workload",
      "Confirm SLA timers and escalation rules were implemented",
      "Confirm conversion tracking and Core Web Vitals work were in scope",
      "Confirm the '20 h per working week' figure (assumes 4 h/day over a five-day week)",
      SCREENSHOT_CHECK,
    ],
  },
]

export default admissions
