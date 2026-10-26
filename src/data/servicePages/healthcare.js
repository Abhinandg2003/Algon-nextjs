// Healthcare service pages. Keys are navbar slugs (see navMenus.js).
// Schema: see ./index.js. Reference page: "hospital-management-system".

const healthcare = {
  "hospital-management-system": {
    seo: {
      title: "Hospital Management System & Hospital Operating System",
      description:
        "Hospital management system covering front desk, OPD, IPD, nursing, pharmacy, OT, billing and discharge, with a named owner for every step.",
      keywords: [
        "hospital management system",
        "hospital operating system",
        "HMS software",
        "hospital software India",
        "OPD IPD management software",
        "hospital billing software",
        "pharmacy management system",
        "discharge management",
        "hospital ERP",
      ],
    },
    hero: {
      title: "A hospital operating system with *an owner for every step*",
      subtitle:
        "One connected system for general and specialty hospitals, in daily use by doctors, nurses, front desk staff and management. A patient moves from the front desk to follow-up without falling between departments.",
      chips: ["Front desk", "OPD", "IPD", "Nursing", "Pharmacy", "OT", "Billing", "Discharge", "Follow-up"],
      formTitle: "Where does your hospital lose time?",
      formMessageLabel: "Which hand-off is slowest today?",
    },
    stats: [
      { value: "50+", label: "Hospital management modules delivered in a single build" },
      { value: "9", label: "Patient stages covered, from front desk to follow-up" },
      { value: "1", label: "Named owner for every step, so nothing waits on memory" },
    ],
    definition: {
      eyebrow: "What it is",
      title: "What is a hospital operating system?",
      paragraphs: [
        "A hospital operating system is the software layer that carries a patient, their records and their bill through every department, from registration to the follow-up call after discharge. Unlike a set of separate modules, it treats the hand-offs between departments as part of the system.",
        "Most hospital management software is bought module by module. Registration works, pharmacy works, billing works, but the gaps between them still run on phone calls, paper slips and someone remembering. We build the system around those gaps: every stage has a named owner, every hand-off is recorded, and management can see where patients and bills are waiting.",
        "We do not sell a ready-made product. Each hospital operating system is shaped around how your hospital already runs, reusing proven building blocks from earlier deployments so you are not paying to start from zero.",
      ],
      points: [
        { icon: "Route", text: "Where does a patient wait longest between departments?" },
        { icon: "Clock", text: "How long between the discharge order and the final bill?" },
        { icon: "Eye", text: "Can management see today's admissions, delays and revenue without asking?" },
      ],
    },
    problems: {
      title: "Why hospital software often disappoints",
      intro:
        "The software usually works. The hospital still runs on calls and paper because the parts that matter most were never designed.",
      items: [
        {
          icon: "Puzzle",
          title: "Bought as modules",
          text: "Each department gets its own screen, so the hand-off between departments still runs on phone calls and paper.",
        },
        {
          icon: "UserCheck",
          title: "Nobody owns the gaps",
          text: "The time between a discharge order and the bill being ready belongs to no one, so it stretches.",
        },
        {
          icon: "Split",
          title: "Staff work around it",
          text: "When the system doesn't match the ward's reality, people keep side registers and the data management sees is incomplete.",
        },
        {
          icon: "Sparkles",
          title: "AI bolted on too early",
          text: "AI features added before the records are reliable only speed up the mess.",
        },
        {
          icon: "BarChart3",
          title: "No live view for owners",
          text: "Occupancy, delays and revenue arrive as end-of-month reports instead of something management can check today.",
        },
        {
          icon: "GraduationCap",
          title: "Training by department",
          text: "Staff learn screens, not the steps they own, so the process breaks at the first unusual case.",
        },
      ],
    },
    services: {
      title: "What the hospital operating system covers",
      intro:
        "Each stage is built as part of one patient journey, with an owner, a status and a hand-off to the next stage.",
      items: [
        {
          icon: "ClipboardList",
          title: "Front desk & OPD",
          text: "Registration, appointments, queues, consultations, orders, prescriptions and referrals in one flow.",
        },
        {
          icon: "BedDouble",
          title: "IPD & nursing",
          text: "Admissions, bed management, ward rounds, transfers, care tasks, vitals, medication rounds and shift hand-overs.",
        },
        {
          icon: "Pill",
          title: "Pharmacy",
          text: "Prescription to dispensing, with stock and expiry tracking tied to what was actually prescribed.",
        },
        {
          icon: "Syringe",
          title: "Operation theatre",
          text: "Theatre scheduling, pre-op checklists and theatre notes, visible to the ward and billing.",
        },
        {
          icon: "Receipt",
          title: "Billing & discharge",
          text: "Charges captured at source, packages, insurance and the final bill, with clearances closed before the patient waits.",
        },
        {
          icon: "LayoutDashboard",
          title: "Follow-up & owner dashboards",
          text: "Post-discharge calls, review visits and reminders, plus a live view of occupancy, delays and revenue for management.",
        },
      ],
    },
    tables: [
      {
        eyebrow: "Module by module",
        title: "Every stage, and what it covers",
        intro: "One connected system for general and specialty hospitals. Each stage has a named owner, so a patient never falls between departments.",
        columns: ["Stage", "What it covers", "Who owns it"],
        rows: [
          ["Front desk", "Registration, appointments, queues and patient records", "Front office lead"],
          ["OPD", "Consultations, orders, prescriptions and referrals", "Consulting doctor"],
          ["IPD", "Admissions, bed management, ward rounds and transfers", "Admissions / ward in-charge"],
          ["Nursing", "Care tasks, vitals, medication rounds and shift hand-overs", "Nursing supervisor"],
          ["Pharmacy", "Prescriptions to dispensing, stock and expiry tracking", "Pharmacist in charge"],
          ["Operation theatre", "Scheduling, pre-op checklists, theatre notes", "OT coordinator"],
          ["Billing", "Charges captured at source, packages, insurance and final bill", "Billing lead"],
          ["Discharge", "Clearances, summaries and billing closure", "Discharging doctor & billing"],
          ["Follow-up", "Post-discharge calls, review visits and reminders", "Patient care coordinator"],
        ],
        note: "Owners are agreed with your team during the bottleneck review. The roles above are typical, not fixed.",
      },
      {
        eyebrow: "Who brings what",
        title: "You know the hospital. We bring the system.",
        intro: "Projects fail when neither side understands how the system is supposed to run, so that is where we start, before any build is quoted.",
        columns: ["You bring", "We bring"],
        rows: [
          ["Knowledge of your departments, patients and rules", "The technology, architecture and execution plan"],
          ["The people who do the work and know where it breaks", "A team that maps, builds, tests and supports the system"],
          ["Decisions on priorities and trade-offs", "Clear options, costs and risks for each decision"],
        ],
      },
    ],
    process: {
      title: "From bottleneck review to go-live",
      intro: "The new system runs alongside the old way until your staff trust it. No big-bang switchover.",
      steps: [
        { title: "Bottleneck review", text: "We map the patient journey with your team and name the owner of each step. You decide whether to proceed and with which scope." },
        { title: "Plan", text: "We agree on modules, priorities, timeline and cost. You approve the plan before any build starts." },
        { title: "Build in short cycles", text: "You see working software regularly, starting with the stage that hurts most, and adjust priorities as you go." },
        { title: "Run in parallel", text: "The new system runs alongside registers and existing software until each department trusts it." },
        { title: "Go live and train", text: "Each role is trained on the steps it owns, not on every screen in the system." },
        { title: "Support and improve", text: "We monitor, fix and add the next layer, such as automation or AI, once the data is ready." },
      ],
    },
    compliance: {
      title: "Built for patient data",
      intro: "Hospital records need stricter handling than ordinary business data. Security is designed in from the first module.",
      items: [
        "Role-based access",
        "Audit trail on every record",
        "Encryption in transit and at rest",
        "Data stays in infrastructure you control",
        "Backups and recovery plan",
        "HIPAA-aligned design for US clients",
        "India DPDP Act",
        "ABDM-ready integrations",
        "HL7 / FHIR interfaces",
      ],
      note: "Which standards apply depends on where you operate. We confirm the exact compliance scope with you during planning.",
    },
    industries: {
      title: "Built for general and specialty hospitals",
      items: [
        { icon: "Hospital", title: "Multispecialty hospitals", text: "Many departments, many hand-offs. The system keeps every patient and bill moving between them." },
        { icon: "HeartPulse", title: "Specialty hospitals", text: "Psychiatric, cardiac, maternity, eye and other specialty workflows configured around how your clinicians work." },
        { icon: "Stethoscope", title: "Growing hospitals", text: "Moving off registers and spreadsheets without stopping daily operations." },
      ],
    },
    caseStudy: {
      id: "hospital-os-patient-records-opd",
      title: "A complete HMS, delivered in three months",
      intro: "A psychiatric and mental healthcare practice moved from a manual, offline system to a fully digitised workflow.",
    },
    related: ["healthcare/clinic-automation", "healthcare/clinical-documentation-ai", "healthcare/healthcare-integration"],
    faq: [
      {
        q: "Do you sell a ready-made hospital software product?",
        a: "No. We build the hospital operating system around how your hospital runs, reusing proven building blocks from earlier deployments so you are not paying to start from zero.",
      },
      {
        q: "Can we start with one department?",
        a: "Yes. Most hospitals start with the stage that hurts most, often front desk and OPD or billing and discharge, and add the rest in short cycles.",
      },
      {
        q: "Can it work with the systems we already have?",
        a: "Usually, yes. We map what you use today, such as lab machines, PACS or accounting software, and connect to it where that is cheaper than replacing it.",
      },
      {
        q: "Where does our data live, and who owns it?",
        a: "Your data stays in infrastructure you control, and you own the system we build for you.",
      },
      {
        q: "How do you handle the switch from our current system?",
        a: "The new system runs in parallel with the old way until each department trusts it. Staff are trained on the steps they own before go-live.",
      },
      {
        q: "Do you add AI to the hospital system?",
        a: "Once the records are reliable, yes: clinical documentation, discharge summaries and owner-level insights. A clinician always reviews AI output before it reaches a patient record.",
      },
      {
        q: "How long does a hospital system take to build?",
        a: "It depends on the scope agreed after the bottleneck review. As a reference, we delivered a 50+ module HMS for a specialty practice in three months.",
      },
    ],
  },

  "clinic-automation": {
    seo: {
      title: "Clinic Automation for Clinics and Diagnostic Centres",
      description:
        "Clinic automation for appointments, reminders, follow-ups, complaints, IVR triage and lab report delivery, so a small team handles a busy day without chasing.",
      keywords: [
        "clinic automation",
        "clinic management automation",
        "appointment reminder system",
        "patient no-show reduction",
        "IVR for clinics",
        "diagnostic centre software",
        "lab report delivery automation",
        "clinic workflow automation",
      ],
    },
    hero: {
      title: "Clinic automation that *takes the phone off the front desk*",
      subtitle:
        "For clinics and diagnostic centres where a few people handle a long queue of patients. Reminders, follow-ups, complaints, call routing and report delivery run on their own, and each one still has a named owner.",
      chips: ["Appointments", "Reminders", "Follow-ups", "Complaints", "IVR triage", "Sample tracking", "Report delivery"],
      formTitle: "What keeps your front desk on the phone?",
      formMessageLabel: "Which task takes the most calls each day?",
    },
    stats: [
      { value: "1", label: "Owner and deadline on every complaint" },
      { value: "3", label: "Countries we deliver in: USA, India and the UAE" },
      { value: "48+", label: "Projects delivered since 2023" },
    ],
    definition: {
      eyebrow: "What it is",
      title: "What is clinic automation?",
      paragraphs: [
        "Clinic automation is the use of software to run the repetitive work around a consultation: booking, reminders, follow-up scheduling, complaint tracking, call routing and, in diagnostic centres, sample and report status. The aim is that patients get answers without a staff member having to make or take a call.",
        "In a small clinic the same three people book appointments, answer the phone, chase reports and calm unhappy patients. Every one of those jobs gets done, but only when someone remembers. We map those jobs first, give each a named owner, and then automate the parts that repeat every day.",
      ],
      points: [
        { icon: "PhoneCall", text: "How many calls a day are patients asking where their report is?" },
        { icon: "CalendarCheck", text: "Is the review visit booked before the patient leaves the room?" },
        { icon: "TriangleAlert", text: "Who owns a complaint once it is logged, and by when?" },
      ],
    },
    problems: {
      title: "Why busy clinics stay stuck on the phone",
      intro: "Most clinics already have booking software. The calls continue because the work around the booking was never designed.",
      items: [
        { icon: "PhoneCall", title: "Status lives in someone's head", text: "Patients call to ask if their report is ready because nothing tells them. Staff call the lab to find out." },
        { icon: "CalendarCheck", title: "Follow-ups booked later, or never", text: "The doctor says 'come back in two weeks', but nobody books it at the desk, so the patient drifts." },
        { icon: "Bell", title: "Reminders sent by hand", text: "Someone works through a list of numbers each evening. On a busy day the list does not get finished." },
        { icon: "MessageSquare", title: "Complaints with no owner", text: "A complaint is noted in a register or a chat group. Nobody is assigned, so it resurfaces as a bad review." },
        { icon: "Headphones", title: "Every call reaches a person", text: "Callers wanting directions, timings or report status queue behind patients who need a real conversation." },
        { icon: "FlaskConical", title: "Samples tracked on paper", text: "Diagnostic centres lose time finding out which stage a sample is at, from collection to processing to sign-off." },
      ],
    },
    services: {
      title: "What we automate in a clinic",
      intro: "Each piece is small on its own. Together they take most routine calls off the front desk.",
      items: [
        { icon: "CalendarCheck", title: "Appointments and reminders", text: "Online and desk booking with automatic confirmations and reminders, so fewer slots are lost to patients who forgot." },
        { icon: "Repeat", title: "Follow-ups at the point of care", text: "The review visit is scheduled while the patient is still in the clinic, and the reminder is set without anyone typing it." },
        { icon: "ClipboardCheck", title: "Complaint tracking", text: "Every complaint gets an owner and a deadline. Overdue items escalate to the clinic manager on their own." },
        { icon: "PhoneCall", title: "IVR patient triage", text: "Callers are routed to booking, reports, billing or a nurse before a person picks up, and simple questions are answered on the call." },
        { icon: "Microscope", title: "Order-to-report tracking", text: "Diagnostic centres see each test from order to sample collection, processing, sign-off and delivery on one screen." },
        { icon: "FileText", title: "Automatic report delivery", text: "Signed reports go to the patient and referring doctor by WhatsApp, SMS or email, with a record of when they were sent." },
      ],
    },
    tables: [
      {
        eyebrow: "Before and after",
        title: "The same tasks, without the chasing",
        columns: ["Task", "Today", "After automation", "Owner"],
        rows: [
          ["Appointment reminder", "Staff call or message from a list", "Sent automatically, replies logged", "Front desk lead"],
          ["Review visit", "Patient told to call back", "Booked at the desk before the patient leaves", "Consulting doctor's assistant"],
          ["Report status", "Patient calls, staff call the lab", "Patient notified when the report is signed", "Lab in-charge"],
          ["Complaint", "Noted in a register or chat group", "Logged with an owner and a deadline", "Clinic manager"],
          ["Incoming call", "Every call answered by a person", "IVR routes the caller to the right desk", "Front desk lead"],
        ],
        note: "Owners are agreed with your team during the bottleneck review. The roles shown are typical, not fixed.",
      },
      {
        eyebrow: "Where to start",
        title: "Clinic or diagnostic centre: what to automate first",
        columns: ["If your biggest problem is", "Start with", "Why"],
        rows: [
          ["Empty slots from patients who forget", "Reminders and confirmations", "Cheap to run and visible within weeks"],
          ["Phones ringing all day", "IVR triage", "Separates routine questions from patients who need a person"],
          ["Patients asking where their report is", "Order-to-report tracking and delivery", "Removes the most repeated call in a diagnostic centre"],
          ["Patients not returning for review", "Follow-ups booked at the point of care", "The booking happens while the patient is still there"],
        ],
      },
    ],
    process: {
      title: "How a clinic automation project runs",
      steps: [
        { title: "Sit with the front desk", text: "We watch a real day, count the calls by reason and see which tasks repeat. You decide what is worth automating." },
        { title: "Name the owners", text: "Each task, from reminders to complaints, gets one person responsible for it, before anything is automated." },
        { title: "Automate the busiest task first", text: "We build the piece that removes the most calls, usually reminders, report status or call routing." },
        { title: "Run it alongside the old way", text: "Staff keep their lists until they trust the automated version, then switch over." },
        { title: "Add the next piece", text: "Once the first piece holds, we add the next, and connect it to your existing booking or lab software where possible." },
      ],
    },
    differentiators: {
      title: "Why clinics work with us",
      items: [
        { icon: "Target", title: "An honest first answer", text: "If the fix is a change to how the desk works, not software, we say so." },
        { icon: "Workflow", title: "Automation with owners", text: "Every automated step still has a person accountable when it fails or needs judgement." },
        { icon: "Plug", title: "Works with what you have", text: "We connect to your existing booking, billing or lab system where that is cheaper than replacing it." },
      ],
    },
    industries: {
      title: "Built for small teams with a high patient volume",
      items: [
        { icon: "Stethoscope", title: "Outpatient clinics", text: "General and specialty clinics where a few staff handle booking, billing and patient calls." },
        { icon: "FlaskConical", title: "Diagnostic centres and labs", text: "Collection centres, pathology labs and imaging centres where report status drives most calls." },
        { icon: "Building2", title: "Multi-branch practices", text: "Clinic groups that need the same reminders, complaint rules and reporting at every branch." },
      ],
    },
    related: ["healthcare/patient-engagement", "healthcare/patient-onboarding", "ai-development/workflow-automation"],
    faq: [
      { q: "Do we need to replace our clinic software?", a: "Usually not. We connect to your existing booking or lab system where we can, and only replace parts that cannot be connected or cost more to keep." },
      { q: "Which channels can reminders use?", a: "WhatsApp, SMS, email and automated voice calls. We pick based on what your patients actually respond to." },
      { q: "What does IVR triage do?", a: "It asks the caller a few short questions and sends them to the right desk, or answers simple questions such as timings or report status, before anyone picks up." },
      { q: "Will automation make the clinic feel impersonal?", a: "It removes routine calls so staff have time for patients who need a conversation. Any patient can still reach a person." },
      { q: "How are complaints handled?", a: "Each complaint is logged with an owner and a deadline. If it is not closed in time, it escalates to the clinic manager automatically." },
      { q: "Does this work for a diagnostic centre?", a: "Yes. We track each test from order to collection, processing, sign-off and delivery, and send the signed report to the patient and referring doctor." },
      { q: "Can we start small?", a: "Yes. Most clinics start with the single task that causes the most calls and add the rest once it is working." },
    ],
    cta: {
      title: "Count your calls before you buy anything",
      text: "Tell us what your front desk spends the day on. We will tell you which parts are worth automating and which are not.",
    },
  },

  "patient-engagement": {
    seo: {
      title: "Patient Engagement Software for Hospitals and Clinics",
      description:
        "Patient engagement built on events: reminders, post-discharge calls, review visits, WhatsApp and SMS updates, complaints and feedback, each with a named owner.",
      keywords: [
        "patient engagement software",
        "patient engagement platform",
        "WhatsApp for hospitals",
        "post-discharge follow-up",
        "patient feedback system",
        "patient communication software",
        "hospital SMS reminders",
        "patient complaint management",
      ],
    },
    hero: {
      title: "Patient engagement where *every message has a reason and an owner*",
      subtitle:
        "Messages to patients are triggered by something that happened in the hospital, sent on the channel the patient uses, and handed to a named person when the patient replies or does not.",
      chips: ["Reminders", "Discharge follow-up", "Review visits", "WhatsApp", "SMS", "IVR", "Complaints", "Feedback"],
      formTitle: "Where do patients go quiet?",
      formMessageLabel: "Which patients do you lose touch with most often?",
    },
    definition: {
      eyebrow: "What it is",
      title: "What is patient engagement software?",
      paragraphs: [
        "Patient engagement software manages the messages and calls between a hospital or clinic and its patients outside the consultation: reminders, updates, post-discharge follow-up, review visits, complaints and feedback. Good patient engagement is driven by events in the patient's care, not by a marketing calendar.",
        "We build it as part of the operational layer. A discharge triggers a follow-up call. A signed report triggers an update. A missed review visit triggers a call from a named coordinator. Each message is tied to the event that caused it and to the person who acts on the reply.",
        "This is not bulk messaging. Patients receive fewer messages, and each one is about their care.",
      ],
      points: [
        { icon: "Zap", text: "Triggered by an event in the patient's care" },
        { icon: "UserCheck", text: "Owned by a named person when the patient replies" },
        { icon: "History", text: "Recorded against the patient, so the next person sees it" },
      ],
    },
    problems: {
      title: "Why patient communication breaks down",
      items: [
        { icon: "Inbox", title: "Replies land nowhere", text: "A patient answers a reminder with a question. It sits in a shared phone or inbox that nobody is assigned to read." },
        { icon: "BedDouble", title: "Discharge ends the relationship", text: "The patient leaves, and the follow-up call depends on a nurse finding time on a busy ward." },
        { icon: "Split", title: "Channels kept apart", text: "WhatsApp, SMS and phone calls are handled by different people, so nobody sees the full conversation." },
        { icon: "Bell", title: "Too many messages", text: "Generic blasts teach patients to ignore the hospital's number, including the message that mattered." },
        { icon: "MessageSquare", title: "Feedback collected, not used", text: "Survey scores go into a report. The unhappy patient behind a low score never gets a call." },
        { icon: "Eye", title: "No view for management", text: "Nobody can say how many discharged patients were called, or how many complaints are still open." },
      ],
    },
    services: {
      title: "What we build",
      intro: "Each flow starts from an event in your hospital system and ends with a person or a closed record.",
      items: [
        { icon: "Bell", title: "Appointment and medication reminders", text: "Sent on the right channel at the right time, with replies routed to whoever can act on them." },
        { icon: "PhoneCall", title: "Post-discharge follow-up", text: "Scheduled calls or messages after discharge, with a short checklist for the caller and a flag if the patient reports a problem." },
        { icon: "CalendarCheck", title: "Review visit tracking", text: "Review visits booked at discharge and chased if missed, so patients who need to return do return." },
        { icon: "MessageSquare", title: "Patient updates on WhatsApp, SMS and IVR", text: "Report ready, bill ready, appointment moved: updates sent when the event happens, not when someone remembers." },
        { icon: "ClipboardCheck", title: "Complaint handling", text: "Complaints from any channel land in one queue with an owner, a deadline and an escalation path." },
        { icon: "Repeat", title: "Feedback loops", text: "Feedback is requested after the visit, and a poor response opens a task for a named person to call back." },
      ],
    },
    tables: [
      {
        eyebrow: "Event by event",
        title: "What triggers each message, and who owns the reply",
        columns: ["Event in the hospital", "Message to the patient", "Channel", "Owner if the patient replies or goes quiet"],
        rows: [
          ["Appointment booked", "Confirmation and reminder", "WhatsApp / SMS", "Front desk"],
          ["Patient discharged", "Follow-up call or check-in message", "Phone / WhatsApp", "Patient care coordinator"],
          ["Review visit missed", "Rebooking prompt", "SMS / phone", "Patient care coordinator"],
          ["Report signed", "Report ready notification", "WhatsApp / email", "Lab in-charge"],
          ["Low feedback score", "Call-back from the hospital", "Phone", "Patient relations lead"],
          ["Complaint received", "Acknowledgement with reference", "Same channel as the complaint", "Assigned complaint owner"],
        ],
        note: "The events, messages and owners are agreed with your team. This list is a typical starting point.",
      },
    ],
    process: {
      title: "How we set up patient engagement",
      steps: [
        { title: "List the moments that matter", text: "We map where patients drop away today: after booking, after discharge, after a report, after a complaint." },
        { title: "Assign owners", text: "Each moment gets a named owner for replies and exceptions before any message is sent." },
        { title: "Connect to the source events", text: "We link to your hospital or clinic system so messages fire on real events, not manual lists." },
        { title: "Pilot one flow", text: "We start with one flow, often post-discharge follow-up, and adjust timing and wording with your staff." },
        { title: "Extend and measure", text: "Further flows are added, and management gets a view of messages sent, replies and open complaints." },
      ],
    },
    compliance: {
      title: "Patient messages carry patient data",
      items: [
        "Patient consent recorded for each channel",
        "Role-based access to conversations",
        "Audit trail on messages and replies",
        "Data stays in infrastructure you control",
        "HIPAA-aligned design for US clients",
        "Designed to support India's DPDP Act",
      ],
      note: "Which rules apply depends on where you operate and which channels you use. We confirm the exact scope with you during planning.",
    },
    caseStudy: {
      id: "admissions-follow-up-automation",
      title: "Automated follow-ups that replaced hours of manual work",
      intro: "Not a hospital, but the same problem: an AI chatbot and automated follow-ups helped a study abroad firm enrol 3x as many students with a smaller team.",
    },
    related: ["healthcare/clinic-automation", "healthcare/hospital-management-system", "healthcare/ai-agents-in-healthcare"],
    faq: [
      { q: "Is this a bulk WhatsApp or SMS tool?", a: "No. Messages are triggered by events in the patient's care, and each reply goes to a named person. We deliberately send fewer messages." },
      { q: "Which channels do you support?", a: "WhatsApp, SMS, email, automated voice calls and IVR. The mix depends on your patients and the type of message." },
      { q: "What happens when a patient replies with a medical question?", a: "The reply is routed to the clinical owner for that flow, such as a nurse or coordinator. Automated answers are limited to routine questions you have approved." },
      { q: "Can it connect to our existing hospital software?", a: "Usually, yes. We read events such as appointments, discharges and signed reports from your system so messages fire automatically." },
      { q: "How do we know follow-up calls actually happen?", a: "Each call is a task with an owner and a due date. Management can see which were completed, missed or escalated." },
      { q: "Can patients opt out?", a: "Yes. Consent and opt-outs are recorded per channel and respected by every flow." },
      { q: "Where should we start?", a: "Usually with post-discharge follow-up or report notifications, because they are high value and easy to measure." },
    ],
  },

  "patient-onboarding": {
    seo: {
      title: "Patient Onboarding Software for Hospitals and Clinics",
      description:
        "Patient onboarding software for registration, pre-visit forms, ID and insurance capture, consent and first-visit routing, so patients spend less time in the queue.",
      keywords: [
        "patient onboarding",
        "patient registration software",
        "digital patient intake",
        "pre-visit forms",
        "hospital front desk software",
        "patient consent management",
        "insurance verification hospital",
      ],
    },
    hero: {
      title: "Patient onboarding that is *done before the patient reaches the desk*",
      subtitle:
        "Registration, forms, documents and consent captured once, before or at arrival, and passed straight to the people who need them. Less queueing, and no one typing the same details twice.",
      chips: ["Registration", "Pre-visit forms", "ID capture", "Insurance", "Consent", "Confirmation", "First-visit routing"],
      formTitle: "How long is your registration queue?",
      formMessageLabel: "What slows a new patient down at the front desk?",
    },
    definition: {
      eyebrow: "What it is",
      title: "What is patient onboarding?",
      paragraphs: [
        "Patient onboarding is the process of registering a new patient and collecting what the hospital or clinic needs before the first consultation: personal details, ID, insurance, medical history, consent and the appointment itself. Digital patient onboarding moves as much of that as possible to before the visit and captures it only once.",
        "At most front desks the same details are written on a form, typed into the system, photocopied for insurance and asked again by the nurse. We map that path, decide who owns each piece of information, and build an intake that fills the record once and routes the patient to the right place on arrival.",
      ],
    },
    problems: {
      title: "Why the first visit takes so long",
      items: [
        { icon: "Users", title: "Everyone arrives at once", text: "Morning OPD starts with a queue at registration, and doctors wait for patients who are still filling in forms." },
        { icon: "ClipboardList", title: "Paper first, system later", text: "Forms are filled by hand and typed in by staff, which is slow and introduces errors in names and numbers." },
        { icon: "Repeat", title: "Asked three times", text: "Allergies and history are asked at the desk, by the nurse and again by the doctor because nothing carries forward." },
        { icon: "Wallet", title: "Insurance found late", text: "Missing policy details or pre-authorisation surface at billing, after treatment has started." },
        { icon: "FileText", title: "Consent on loose paper", text: "Signed consent forms are filed separately and hard to find when needed." },
        { icon: "Route", title: "Patient sent to the wrong place", text: "New patients wander between counters because nobody told them where to go after registration." },
      ],
    },
    services: {
      title: "What we build",
      items: [
        { icon: "UserPlus", title: "Self-registration", text: "Patients register by link, QR code or kiosk before arrival, and staff confirm rather than type." },
        { icon: "ClipboardCheck", title: "Pre-visit forms", text: "History, symptoms and specialty questions collected in advance and attached to the record the doctor opens." },
        { icon: "ScanText", title: "ID and insurance capture", text: "Photos of ID and insurance cards read into the record, with missing details flagged before the visit." },
        { icon: "ShieldCheck", title: "Digital consent", text: "Consent forms signed on a phone or tablet, versioned and stored against the patient." },
        { icon: "CalendarCheck", title: "Appointment confirmation", text: "Confirmation with what to bring, where to go and when to arrive, sent once registration is complete." },
        { icon: "Route", title: "First-visit routing", text: "On arrival, the patient is checked in and directed to the right counter, room or queue without a second conversation." },
      ],
    },
    tables: [
      {
        eyebrow: "Stage by stage",
        title: "Who owns each part of onboarding",
        columns: ["Stage", "What is captured", "When", "Owner"],
        rows: [
          ["Registration", "Name, contact, demographics, ID", "Before the visit", "Front office lead"],
          ["Pre-visit form", "History, symptoms, current medicines", "Before the visit", "Nursing triage"],
          ["Insurance", "Policy details, eligibility, pre-authorisation need", "Before or at arrival", "Insurance desk"],
          ["Consent", "General and procedure-specific consent", "Before treatment", "Treating department"],
          ["Check-in and routing", "Arrival, queue and room assignment", "At arrival", "Front desk"],
        ],
        note: "Stages and owners are agreed with your team. Some hospitals combine roles; the point is that each stage has one.",
      },
      {
        eyebrow: "Before and after",
        title: "The same patient, onboarded once",
        columns: ["Before", "After"],
        rows: [
          ["Paper form filled in the queue", "Form completed on the patient's phone the day before"],
          ["Staff type details from the form", "Staff confirm details already in the record"],
          ["Insurance problem found at billing", "Missing insurance details flagged before the visit"],
          ["Consent sheets filed separately", "Signed consent stored on the patient record"],
          ["Patient asks where to go next", "Patient is told on check-in which room or queue to join"],
        ],
        highlightLast: true,
      },
    ],
    process: {
      title: "How we roll out digital onboarding",
      steps: [
        { title: "Walk the front desk", text: "We follow new patients from the gate to the consultation room and note every form, copy and repeated question." },
        { title: "Decide what moves before the visit", text: "Together we choose which details patients can give in advance and which must stay at the desk." },
        { title: "Build into your system", text: "Intake, documents and consent are written into your existing hospital or clinic records, not a separate app." },
        { title: "Keep a paper fallback", text: "Patients who cannot or will not use the digital route are still registered at the desk, into the same record." },
        { title: "Train by role", text: "Front desk, insurance and nursing staff are trained on the steps they own." },
      ],
    },
    compliance: {
      title: "Identity and consent handled carefully",
      items: [
        "Role-based access to ID and insurance documents",
        "Audit trail on every change to a patient record",
        "Versioned consent forms",
        "Encryption in transit and at rest",
        "ABDM-ready integrations for India",
        "Designed to support India's DPDP Act",
        "HIPAA-aligned design for US clients",
      ],
      note: "Which standards apply depends on where you operate. We confirm the exact scope with you during planning.",
    },
    related: ["healthcare/hospital-management-system", "healthcare/clinic-automation", "healthcare/healthcare-integration"],
    faq: [
      { q: "What if patients do not fill in forms before the visit?", a: "The desk registers them as before, into the same record. The digital route reduces the queue; it does not replace the desk." },
      { q: "Does it work with our hospital management system?", a: "Usually, yes. We write registration, documents and consent into your existing records so staff do not switch between systems." },
      { q: "Can it read ID and insurance cards?", a: "Yes. Details are read from photos into the record, and staff confirm them. Anything unclear is flagged for a person to check." },
      { q: "How is consent stored?", a: "Consent is signed digitally, stored against the patient with the form version and time, and visible to the treating team." },
      { q: "Will older patients cope with it?", a: "Many will, often with a family member's help. Those who prefer the desk keep that option, and staff use the same screens." },
      { q: "Can we use it for ABHA or national health IDs?", a: "We design onboarding to be ABDM-ready for Indian hospitals. The exact integration scope is confirmed during planning." },
    ],
  },

  "ai-agents-in-healthcare": {
    seo: {
      title: "AI Agents in Healthcare for Hospitals and Clinics",
      description:
        "AI agents in healthcare that answer patient queries, triage calls and messages, chase follow-ups and help staff search records, with a person signing off.",
      keywords: [
        "AI agents in healthcare",
        "healthcare AI agent",
        "AI for hospitals",
        "patient query chatbot",
        "AI call triage hospital",
        "RAG for hospital records",
        "healthcare AI assistant",
        "AI automation for clinics",
      ],
    },
    hero: {
      title: "AI agents that do *one job well, under a person's sign-off*",
      subtitle:
        "Agents that answer routine patient questions, route calls and messages, chase follow-ups and help staff find information in hospital records. Each has a bounded job, grounded answers and a named owner.",
      chips: ["Patient queries", "Call and message triage", "Follow-up chasing", "Record lookup", "Grounded answers", "Human sign-off"],
      formTitle: "Which job would you hand to an agent?",
      formMessageLabel: "What repetitive task takes your staff's time?",
    },
    definition: {
      eyebrow: "What it is",
      title: "What are AI agents in healthcare?",
      paragraphs: [
        "AI agents in healthcare are software assistants that use a language model to carry out a defined task for a hospital or clinic, such as answering patient questions from approved information, routing a call to the right desk, or finding a detail in a patient's record. Unlike a fixed rule, an agent can understand a free-text question; unlike a person, it should never decide anything clinical on its own.",
        "We add agents only after the underlying process is clean. If appointments, records and owners are not reliable, an agent will repeat the confusion faster. Once they are, an agent can take routine work off staff, with a named person reviewing anything that reaches a patient or a record.",
      ],
      points: [
        { icon: "Target", text: "A bounded job, not a general chatbot" },
        { icon: "FileSearch", text: "Answers drawn from your approved information, with sources" },
        { icon: "UserCheck", text: "A named person signs off on anything that matters" },
      ],
    },
    problems: {
      title: "Why healthcare AI projects stall",
      items: [
        { icon: "Bot", title: "A chatbot with no job", text: "A general assistant is put on the website. Patients ask things it cannot answer and stop using it." },
        { icon: "TriangleAlert", title: "Answers from nowhere", text: "A model answers from its general training instead of your hospital's information, and nobody can check where an answer came from." },
        { icon: "Workflow", title: "AI before process", text: "The agent is built on top of messy records and unclear owners, so it automates the confusion." },
        { icon: "UserCheck", title: "No one signs off", text: "Outputs reach patients without review, so the first mistake ends the project." },
        { icon: "Wallet", title: "Costs nobody watched", text: "Whole records are sent to the model for every question, and the monthly bill surprises everyone." },
        { icon: "Lock", title: "Data leaves the building", text: "Patient data is sent to tools outside the hospital's control without anyone deciding that it should be." },
      ],
    },
    services: {
      title: "Agents we build for hospitals and clinics",
      items: [
        { icon: "MessageSquare", title: "Patient query agent", text: "Answers timings, preparation instructions, costs and directions from information you have approved, and hands off to a person when unsure." },
        { icon: "Split", title: "Call and message triage", text: "Reads or listens to the request, works out which desk it belongs to, and routes it with a short summary." },
        { icon: "Repeat", title: "Follow-up agent", text: "Chases missed reviews, pending documents and unanswered messages, and escalates to the owner when the patient does not respond." },
        { icon: "FileSearch", title: "Staff record lookup (RAG)", text: "Staff ask a question in plain language and get an answer from the hospital's own records and policies, with the source shown." },
        { icon: "ClipboardList", title: "Admin assistant", text: "Prepares routine paperwork, such as insurance query responses or referral packs, for a person to check and send." },
        { icon: "LayoutDashboard", title: "Monitoring and cost control", text: "Every agent's conversations, hand-offs, errors and usage are visible, so you can see what it does and what it costs." },
      ],
    },
    tables: [
      {
        eyebrow: "Agent and person",
        title: "What the agent does, and what stays human",
        columns: ["Job", "What the agent does", "What stays with a person"],
        rows: [
          ["Patient questions", "Answers routine questions from approved content", "Anything clinical, or anything outside the approved content"],
          ["Call and message triage", "Identifies the request and routes it with a summary", "The conversation with the patient once routed"],
          ["Follow-ups", "Sends reminders and chases non-responders", "Deciding what to do when a patient reports a problem"],
          ["Record lookup", "Finds and summarises the relevant record, with sources", "Any clinical decision based on that information"],
          ["Paperwork", "Drafts the document from the record", "Checking, correcting and sending it"],
        ],
      },
      {
        eyebrow: "Our commitments",
        title: "How we keep AI accountable",
        columns: ["Commitment", "What it means in practice"],
        rows: [
          ["A person signs off", "A named member of staff reviews anything that reaches a patient, customer or record"],
          ["Answers are grounded", "Retrieval answers come from your data and show where they came from"],
          ["Costs are controlled", "Only the relevant records are sent to the model, and usage is monitored"],
          ["Data stays with you", "Systems run in infrastructure you control"],
          ["Fit for purpose", "We use AI only where it does better than a simpler rule or workflow"],
        ],
        highlightLast: true,
      },
    ],
    process: {
      title: "How we introduce an agent",
      steps: [
        { title: "Check the process first", text: "We confirm the records, rules and owners the agent depends on are reliable. If not, we fix that first." },
        { title: "Define one job", text: "We agree exactly what the agent does, what it must not do, and who it hands off to." },
        { title: "Build with your content", text: "The agent is connected only to the information it needs, and answers are tested against real questions from your staff." },
        { title: "Run under supervision", text: "Staff review the agent's outputs before they go out until accuracy is proven on your cases." },
        { title: "Monitor and extend", text: "We watch hand-offs, errors and costs, and give the agent more scope only when it has earned it." },
      ],
    },
    differentiators: {
      title: "Why our agents last beyond the demo",
      items: [
        { icon: "Workflow", title: "Process before AI", text: "We map the work and name owners first. AI comes last, where it earns its place." },
        { icon: "Target", title: "An honest first answer", text: "If a simple rule or form does the job better, we build that instead of an agent." },
        { icon: "Network", title: "Automation community roots", text: "Our founder is the n8n Community Ambassador for Kochi, and we build agents into real workflows, not standalone demos." },
      ],
    },
    caseStudy: {
      id: "admissions-ai-assistant",
      title: "An AI chatbot and follow-ups, live in four days",
      intro: "For a study abroad firm, an AI chatbot and automated follow-ups replaced hours of manual work. The same pattern applies to patient queries and follow-up chasing.",
    },
    related: ["healthcare/clinical-documentation-ai", "healthcare/natural-language-processing", "ai-development/rag-development-services"],
    faq: [
      { q: "Will an AI agent give medical advice to patients?", a: "No. Patient-facing agents answer only from information you have approved, such as timings, preparation and directions. Clinical questions go to a person." },
      { q: "How do you stop the agent making things up?", a: "Answers are drawn from your own content and records, and the agent shows its sources. If it cannot find an answer, it hands off rather than guessing." },
      { q: "Where does patient data go?", a: "Systems run in infrastructure you control, and only the records relevant to a question are sent to the model." },
      { q: "How do we control the cost of running agents?", a: "We limit what is sent to the model per request and monitor usage, so you can see what each agent costs to run." },
      { q: "Can an agent work on WhatsApp or phone calls?", a: "Yes. Agents can work on WhatsApp, web chat, SMS and voice, depending on where your patients contact you." },
      { q: "Do we need a clean hospital system first?", a: "You need reliable records and clear owners for the job the agent will do. If those are missing, we start there." },
      { q: "Who is responsible when an agent gets something wrong?", a: "Each agent has a named owner on your staff, and anything that reaches a patient or record is reviewed by a person." },
    ],
  },

  "clinical-documentation-ai": {
    seo: {
      title: "Clinical Documentation AI for Notes and Discharge Summaries",
      description:
        "Clinical documentation AI that drafts consultation notes, discharge summaries, letters and referrals for clinicians to review and sign, not type from scratch.",
      keywords: [
        "clinical documentation AI",
        "AI medical scribe",
        "AI discharge summary",
        "AI clinical notes",
        "medical documentation automation",
        "ambient clinical documentation",
        "AI referral letter",
      ],
    },
    hero: {
      title: "Clinicians *review the note* instead of typing it",
      subtitle:
        "AI drafts consultation notes, discharge summaries, letters and referrals from the consultation and the patient record. A clinician checks, corrects and signs every draft before it reaches the record.",
      chips: ["Consultation notes", "Discharge summaries", "Referral letters", "Patient letters", "Clinician sign-off"],
      formTitle: "Where does paperwork eat clinical time?",
      formMessageLabel: "Which document takes your doctors longest?",
    },
    stats: [
      { value: "1", label: "Clinician signs every draft before it reaches the record" },
      { value: "4", label: "Document types covered: notes, summaries, letters, referrals" },
      { value: "50+", label: "HMS modules delivered in one build, AI included" },
    ],
    definition: {
      eyebrow: "What it is",
      title: "What is clinical documentation AI?",
      paragraphs: [
        "Clinical documentation AI uses speech recognition and language models to draft clinical documents, such as consultation notes and discharge summaries, from the consultation and the patient's existing record. The clinician reviews and signs the draft instead of writing it from a blank page.",
        "Discharge summaries are a common bottleneck: the patient is ready to go, but the summary waits for a doctor to find time to write it. A draft assembled from the admission notes, investigations, procedures and medicines lets the doctor check and sign in minutes rather than compose from scratch.",
        "AI never writes directly into the record. Every draft is marked as a draft until a clinician has approved it.",
      ],
    },
    problems: {
      title: "Why documentation tools disappoint clinicians",
      items: [
        { icon: "Clock", title: "Notes written after hours", text: "Doctors finish the clinic, then spend the evening catching up on notes and letters." },
        { icon: "BedDouble", title: "Discharge waits on the summary", text: "Patients and beds are held because the summary has not been written yet." },
        { icon: "Mic", title: "Dictation is only half the job", text: "Transcribing speech word for word still leaves the doctor to structure and edit the note." },
        { icon: "FileText", title: "Templates nobody fits", text: "Rigid templates force every specialty into the same shape, so clinicians work around them." },
        { icon: "TriangleAlert", title: "Drafts that cannot be trusted", text: "If the draft contains details not in the record, doctors stop using it after the first error." },
        { icon: "Puzzle", title: "Separate from the record", text: "A standalone AI tool means copying and pasting between screens, which adds work and risk." },
      ],
    },
    services: {
      title: "What we build",
      intro: "Each document type is drafted from specific sources, and the clinician can see which source each part came from.",
      items: [
        { icon: "Mic", title: "Consultation note drafting", text: "The consultation is captured, with consent, and turned into a structured note in your specialty's format." },
        { icon: "FileText", title: "Discharge summary drafts", text: "Assembled from admission notes, investigations, procedures and medicines in the record, ready for the discharging doctor to check." },
        { icon: "Handshake", title: "Referral letters", text: "Referral letters drafted from the relevant history and findings, addressed to the receiving doctor." },
        { icon: "Users", title: "Patient-friendly letters", text: "Plain-language versions of instructions and summaries for patients, checked by the clinician." },
        { icon: "ClipboardCheck", title: "Review and sign-off screen", text: "Drafts are shown side by side with their sources, and nothing is filed until a clinician approves it." },
        { icon: "Plug", title: "Inside your hospital system", text: "Drafting runs within your HMS or EMR workflow, so there is no copying between tools." },
      ],
    },
    tables: [
      {
        eyebrow: "Document by document",
        title: "What AI drafts and who signs",
        columns: ["Document", "Drafted from", "Reviewed and signed by"],
        rows: [
          ["Consultation note", "The recorded consultation and prior history", "Consulting doctor"],
          ["Discharge summary", "Admission notes, investigations, procedures, medicines", "Discharging doctor"],
          ["Referral letter", "Relevant history, findings and the reason for referral", "Referring doctor"],
          ["Patient letter", "The signed clinical document", "Treating clinician"],
        ],
        note: "AI output is always held as a draft. It enters the patient record only after a clinician approves it.",
      },
      {
        eyebrow: "Which approach fits",
        title: "Templates, dictation or AI drafting",
        columns: ["Approach", "Works well when", "Limits"],
        rows: [
          ["Structured templates", "Documents are short and highly standard", "Slow for complex cases and varied specialties"],
          ["Dictation and transcription", "Doctors already dictate and have typing support", "Text still needs structuring and editing"],
          ["AI drafting from the record", "Records are digital and reliable, and documents draw on many sources", "Needs clean data and clinician review every time"],
        ],
      },
    ],
    process: {
      title: "How we introduce documentation AI",
      steps: [
        { title: "Pick one document", text: "We start with the document that holds up the most work, often the discharge summary." },
        { title: "Check the sources", text: "We confirm the record contains what the draft needs. If it does not, we fix data capture first." },
        { title: "Agree the format with clinicians", text: "Doctors from the specialty define the structure and wording of a good draft." },
        { title: "Run drafts in review mode", text: "Clinicians compare drafts against their own documents until they trust the output." },
        { title: "Go live and monitor", text: "Drafting goes live with sign-off built in, and we track edits to keep improving the drafts." },
      ],
    },
    compliance: {
      title: "Clinical records need clinical controls",
      items: [
        "Clinician approval before anything is filed",
        "Audit trail of drafts, edits and sign-off",
        "Patient consent for recorded consultations",
        "Only relevant records sent to the model",
        "Data stays in infrastructure you control",
        "HIPAA-aligned design for US clients",
        "Designed to support India's DPDP Act",
      ],
      note: "Which standards apply depends on where you operate. We confirm the exact scope with you during planning.",
    },
    caseStudy: {
      id: "hospital-os-patient-portal-ai",
      title: "An HMS with AI integration, in three months",
      intro: "A psychiatric and mental healthcare practice moved from manual records to a digitised workflow, with AI integrated into the system.",
    },
    related: ["healthcare/hospital-management-system", "healthcare/natural-language-processing", "ai-development/llm-development-services"],
    faq: [
      { q: "Does the AI write directly into the patient record?", a: "No. Every output is a draft until a clinician reviews, edits if needed, and signs it." },
      { q: "Is the consultation recorded?", a: "Only with the patient's consent and where you choose to use it. Discharge summaries and letters can be drafted from the record without any recording." },
      { q: "What if the draft includes something wrong?", a: "The clinician sees each section next to its source and corrects it before signing. We track edits to improve drafts over time." },
      { q: "Can it handle our specialty's format?", a: "Yes. The structure and wording are agreed with your clinicians for each specialty and document type." },
      { q: "Does it work with our existing EMR or HMS?", a: "We build drafting into your existing workflow where we can, so clinicians do not copy between systems." },
      { q: "Where does patient data go?", a: "Systems run in infrastructure you control, and only the records needed for a draft are sent to the model." },
    ],
  },

  "natural-language-processing": {
    seo: {
      title: "Natural Language Processing for Healthcare Text and Voice",
      description:
        "Natural language processing for healthcare: route complaints and messages, extract data from notes and referral letters, search records in plain language, read calls.",
      keywords: [
        "natural language processing healthcare",
        "healthcare NLP",
        "clinical NLP",
        "medical text extraction",
        "NLP for hospital records",
        "complaint classification NLP",
        "multilingual NLP India",
        "voice IVR NLP",
      ],
    },
    hero: {
      title: "Natural language processing that *turns free text into work someone can act on*",
      subtitle:
        "Hospitals run on free text: notes, reports, referral letters, messages and calls. We use NLP to classify it, route it, pull out the structured details and make it searchable, so staff stop reading everything by hand.",
      chips: ["Classification", "Routing", "Data extraction", "Plain-language search", "Voice and IVR", "Multilingual"],
      formTitle: "Which text does your team read by hand?",
      formMessageLabel: "What documents or messages pile up?",
    },
    definition: {
      eyebrow: "What it is",
      title: "What is natural language processing in healthcare?",
      paragraphs: [
        "Natural language processing (NLP) in healthcare is the use of software to read and understand clinical and operational text and speech, such as notes, reports, referral letters, patient messages and phone calls, and turn it into structured data, categories or answers. It lets a hospital act on information that would otherwise sit in free text.",
        "We use NLP for specific jobs with a clear owner downstream: a complaint classified and sent to the right department, a referral letter's details filled into the record, a question answered from the hospital's documents with the source shown. Where a simple rule does the job, we use the rule.",
      ],
      points: [
        { icon: "Split", text: "Sort and route incoming text to the right person" },
        { icon: "ScanText", text: "Pull structured fields out of documents" },
        { icon: "Search", text: "Search records by asking in plain language" },
      ],
    },
    problems: {
      title: "Why so much hospital information goes unused",
      items: [
        { icon: "Inbox", title: "Messages read one by one", text: "Patient messages, emails and complaints are read by a person just to decide who should handle them." },
        { icon: "FileText", title: "Referral letters retyped", text: "Details from incoming letters and outside reports are keyed into the system by hand, or not at all." },
        { icon: "Search", title: "Records found by memory", text: "Staff locate past notes by knowing where to look. Keyword search misses anything phrased differently." },
        { icon: "Languages", title: "More than one language", text: "Patients write and speak in their own language and mix languages, and English-only tools miss the meaning." },
        { icon: "BarChart3", title: "No numbers from text", text: "Management cannot see complaint themes or common referral reasons because they live in free text." },
        { icon: "TriangleAlert", title: "Accuracy never measured", text: "Text tools are switched on without being tested on the hospital's own documents, so errors go unnoticed." },
      ],
    },
    services: {
      title: "What we build with NLP",
      items: [
        { icon: "Split", title: "Message and complaint routing", text: "Incoming text is classified by topic and urgency and sent to the owning department with a short summary." },
        { icon: "ScanText", title: "Document data extraction", text: "Diagnoses, medicines, results and dates pulled from notes, reports and referral letters into structured fields for staff to confirm." },
        { icon: "Search", title: "Plain-language record search", text: "Staff ask a question and get the matching records or passages, with sources, instead of guessing keywords." },
        { icon: "Mic", title: "Voice and IVR understanding", text: "Callers say what they need in their own words, and the system routes the call or captures the request." },
        { icon: "Languages", title: "Multilingual text", text: "Built and tested for the languages your patients use, which in our markets can include English, Malayalam, Hindi and Arabic." },
        { icon: "LineChart", title: "Themes and trends", text: "Complaint, feedback and referral text turned into categories management can count and track over time." },
      ],
    },
    tables: [
      {
        eyebrow: "Source by source",
        title: "Where the text comes from and where it goes",
        columns: ["Text source", "What NLP does", "Where the result goes", "Who checks it"],
        rows: [
          ["Patient messages and emails", "Classifies by topic and urgency", "Queue of the owning department", "Department owner"],
          ["Complaints", "Tags theme and severity", "Complaint tracker with deadline", "Patient relations lead"],
          ["Referral letters", "Extracts reason, history and medicines", "Draft fields on the patient record", "Registering clinician"],
          ["Lab and imaging reports", "Extracts key findings and values", "Structured fields for review", "Reporting doctor"],
          ["Phone calls", "Understands the caller's request", "Routed call or logged request", "Front desk lead"],
        ],
        note: "Extracted data is held for confirmation before it changes a patient record.",
      },
    ],
    stack: {
      title: "How an NLP pipeline fits together",
      groups: [
        { label: "Inputs", items: ["Clinical notes", "Reports", "Referral letters", "WhatsApp and email", "Call audio"] },
        { label: "Processing", items: ["Speech to text", "Classification", "Entity extraction", "Retrieval and search", "Language detection"] },
        { label: "Outputs", items: ["Routed queues", "Structured record fields", "Search answers with sources", "Dashboards"] },
        { label: "Controls", items: ["Human confirmation", "Accuracy testing on your data", "Audit trail", "Usage monitoring"] },
      ],
      note: "Models and tools are chosen per project based on accuracy on your own documents, language needs and where data must stay.",
    },
    process: {
      title: "How we deliver an NLP project",
      steps: [
        { title: "Collect real samples", text: "We gather anonymised examples of the text or calls involved, in the languages patients actually use." },
        { title: "Define the output and owner", text: "We agree what the result should be, such as a category or a set of fields, and who acts on it." },
        { title: "Test against your data", text: "We measure accuracy on your own samples before anything goes live, and show you where it fails." },
        { title: "Run with confirmation", text: "Staff confirm results in the early weeks, and their corrections are used to improve the system." },
        { title: "Go live and watch", text: "Accuracy, volumes and costs are monitored, and the scope grows only where results hold." },
      ],
    },
    differentiators: {
      title: "How we approach NLP",
      items: [
        { icon: "Target", title: "Rules first where rules work", text: "If a keyword rule or a form solves it, we use that. NLP is for text that rules cannot handle." },
        { icon: "ListChecks", title: "Measured on your documents", text: "We report accuracy on your own text, not on a generic benchmark." },
        { icon: "Lock", title: "Data stays with you", text: "Processing runs in infrastructure you control, with only the necessary text sent to any model." },
        { icon: "UserCheck", title: "A person confirms", text: "Anything that would change a patient record is confirmed by staff before it is saved." },
      ],
    },
    related: ["healthcare/ai-agents-in-healthcare", "healthcare/clinical-documentation-ai", "healthcare/health-data-analysis"],
    faq: [
      { q: "What is the difference between NLP and a chatbot?", a: "A chatbot holds a conversation. NLP is the underlying ability to understand text and speech, which we also use for routing, extraction and search where no conversation is involved." },
      { q: "Which languages can you handle?", a: "We build for the languages your patients use and test accuracy on real samples in each. Support varies by language, so we confirm it per project before committing." },
      { q: "Can NLP read handwritten notes?", a: "Handwriting first needs to be converted to text, and accuracy depends heavily on legibility. We test on your samples and tell you honestly whether it is worth doing." },
      { q: "Will extracted data go straight into the record?", a: "No. Extracted fields are held for a member of staff to confirm before they change a patient record." },
      { q: "How accurate is it?", a: "It depends on the task and your documents. We measure accuracy on your own samples before go-live and share the results with you." },
      { q: "Where is the text processed?", a: "In infrastructure you control. Only the text needed for each task is sent to a model, and usage is monitored." },
      { q: "Can it help with complaint analysis?", a: "Yes. Complaints are tagged by theme and severity, routed to an owner, and counted so management can see recurring issues." },
    ],
    cta: {
      title: "Send us a sample, not a brief",
      text: "Share a handful of anonymised messages, letters or reports. We will tell you what NLP can reliably do with them, and what it cannot.",
    },
  },
}

export default healthcare
