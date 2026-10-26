import I from "./_icons.js"

// See ../caseStudiesData.js for the entry shape.
// One Hospital Management System build, split into four linked case studies.

const IMG = "/images/clients/gallery/hms"
const SERIES = { key: "hospital-os", name: "Hospital Operating System", total: 4 }
const CLIENT = "A specialty mental-health hospital, Kerala"
const CATEGORY = "Healthcare · Hospital Operating System"

const TESTIMONIAL = {
  text: "The system transformed the way we manage appointments and patient workflows while giving us a professional digital presence.",
  author: "Management team",
  role: "Specialty mental-health hospital",
}

const COMMON_VERIFY = [
  "Confirm the hospital is in Kerala before publishing the location",
  "Check screenshots for the client's name/logo — blur or replace before publishing",
  "Confirm the client is happy for the anonymised testimonial to be reused across the series",
]

const shared = {
  client: CLIENT,
  category: CATEGORY,
  year: "2026",
  duration: "3 months (full build)",
  thumbnail: `${IMG}/thumbnail.webp`,
  heroImage: `${IMG}/hero.webp`,
  mockup: `${IMG}/mockup.webp`,
  commonImg: `${IMG}/common.webp`,
}

const hospitalOs = [
  /* ── Part 1 ─────────────────────────────────────────────────────────── */
  {
    id: "hospital-os-patient-records-opd",
    series: { ...SERIES, part: 1 },
    ...shared,
    title: "Hospital OS — Patient Records & OPD",
    tagline: "One patient identity, one record and one outpatient flow, from the front desk to the consultation room.",
    services: [
      "Unified Patient Registry",
      "Registration & UHID Generation",
      "Appointment & Queue Management",
      "OPD Consultation Workflow",
      "Prescriptions & Clinical Orders",
      "Referral Management",
    ],
    tags: ["Healthcare", "HMS", "OPD", "Patient Records", "PostgreSQL"],
    accent: "#298dff",
    gallery: [`${IMG}/1.webp`, `${IMG}/2.webp`, `${IMG}/3.webp`],
    overview:
      "Part 1 of a 50+ module Hospital Operating System built for a psychiatric and mental-healthcare hospital. This part is the foundation every other module depends on: a single patient registry keyed on a unique hospital identifier (UHID), and the outpatient department (OPD) workflow that moves a patient from registration to booked slot, queue token, consultation and prescription. Everything downstream — admissions, pharmacy, laboratory and billing — reads from and writes to this one record.",
    challenge:
      "Appointments, patient files and consultation notes were kept manually and offline. The same patient could exist as several paper files with slightly different details, front-desk staff had no live view of which doctor was running late, and a psychiatrist's notes, prescriptions and referrals sat in folders that could not follow the patient to the next visit. For long-term mental-health care, where continuity across months of follow-ups matters, a fragmented history was a clinical risk as well as an operational one.",
    solution:
      "We designed a normalised PostgreSQL schema around a single patient entity with a system-generated UHID, server-side duplicate checks on name, date of birth and phone, and a merge path for records that do collide. On top of it sits a React OPD workspace: doctor-wise slot calendars, walk-in and booked appointments in one queue, token numbers that update in real time as consultations start and close, and a consultation screen where the clinician records history, diagnosis, prescriptions and investigation orders against the same visit. Orders and referrals are written as structured records, not free text, so the pharmacy, laboratory and billing modules pick them up without re-entry.",
    statpoints: [
      "Patient records kept on paper, with duplicate files for the same person",
      "Appointments booked manually, with no shared view of doctor schedules",
      "No queue visibility for front-desk staff or waiting patients",
      "Prescriptions and referrals written by hand and not linked to the patient's history",
    ],
    pillars: [
      { num: "01", title: "One Patient, One Record", text: "Every patient gets a UHID at registration. Visits, notes, orders and documents attach to it, so the full history follows the patient across departments and years of follow-up." },
      { num: "02", title: "Predictable Front Desk", text: "Doctor-wise slot calendars, walk-ins and booked appointments share one queue with token numbers, so staff can see who is waiting, who is in consultation and who is next." },
      { num: "03", title: "Structured Consultations", text: "Clinicians record history, diagnosis, prescriptions and investigation orders in structured fields designed for psychiatric follow-ups, not loose paper notes." },
      { num: "04", title: "Built to Connect", text: "Prescriptions, lab orders and referrals are stored as typed records exposed through REST APIs, ready for pharmacy, laboratory and billing to consume — and for HL7/FHIR-ready exchange later." },
    ],
    stepsData: [
      { phase: "Phase 01", title: "Registry & Data Model", desc: "Mapped every way a patient enters the hospital and designed the normalised patient, visit and encounter tables around a single UHID, with duplicate detection and controlled record merging.", icon: I.data },
      { phase: "Phase 02", title: "Appointments & Queue Engine", desc: "Built doctor-wise slot templates, walk-in handling and a token queue whose status changes are pushed to front-desk and doctor screens as consultations start and close.", icon: I.flow },
      { phase: "Phase 03", title: "OPD Consultation Workspace", desc: "Delivered the React consultation screen — visit history, notes, diagnosis, prescriptions and investigation orders — with server-side validation on every clinical field.", icon: I.screen },
      { phase: "Phase 04", title: "Orders, Referrals & Handover", desc: "Exposed prescriptions, orders and referrals as structured records over REST APIs so the pharmacy, lab and billing modules receive them without re-typing.", icon: I.integrate },
    ],
    results: [
      { metric: "Patient records", before: "Paper files, duplicates", after: "One UHID-based record", delta: "Unified" },
      { metric: "Appointments", before: "Manual, offline", after: "Slot calendars & live queue", delta: "Digitised" },
      { metric: "Consultation notes", before: "Handwritten", after: "Structured, searchable history", delta: "Continuous" },
      { metric: "Orders & referrals", before: "Re-written per department", after: "Entered once at source", delta: "No re-entry" },
    ],
    stats: [
      { value: "1", suffix: "", label: "Shared patient record across departments" },
      { value: "50", suffix: "+", label: "Modules in the full system" },
      { value: "100", suffix: "%", label: "Workflow digitised" },
      { value: "3", suffix: " months", label: "Full build delivered" },
    ],
    testimonial: TESTIMONIAL,
    _verify: [
      ...COMMON_VERIFY,
      "Confirm patients are identified by a UHID/MRN generated by the system",
      "Confirm duplicate-patient detection and record merging were built",
      "Confirm the OPD queue uses token numbers with real-time status updates",
      "Confirm prescriptions, investigation orders and referrals are captured as structured records",
      "Confirm the backend exposes REST APIs between modules",
      "Confirm we can describe the system as HL7/FHIR-ready",
    ],
  },

  /* ── Part 2 ─────────────────────────────────────────────────────────── */
  {
    id: "hospital-os-ipd-pharmacy-lab",
    series: { ...SERIES, part: 2 },
    ...shared,
    title: "Hospital OS — Inpatient, Pharmacy & Laboratory",
    tagline: "Admissions, beds, ward rounds, dispensing and lab results, all moving on the same patient record.",
    services: [
      "IPD Admission & Discharge",
      "Bed & Ward Management",
      "Nursing Tasks & Medication Rounds",
      "Pharmacy & Dispensing",
      "Inventory, Batch & Expiry Tracking",
      "Laboratory Orders & Results",
    ],
    tags: ["Healthcare", "HMS", "IPD", "Pharmacy", "Laboratory"],
    accent: "#2f7bf5",
    gallery: [`${IMG}/4.webp`, `${IMG}/5.webp`, `${IMG}/6.webp`],
    overview:
      "Part 2 of the Hospital Operating System covers the clinical operations behind the consultation room: inpatient admissions, bed and ward management, nursing work, the pharmacy and the laboratory. For a mental-health hospital with residential patients, these modules carry the highest day-to-day volume and the least tolerance for error — a missed dose, a wrong batch or a lost result has a direct effect on care.",
    challenge:
      "Bed availability lived in a register and in people's heads. Medication charts, nursing handovers and pharmacy stock were tracked on paper, so the pharmacy could not see what had been prescribed until a slip arrived, near-expiry stock was found by chance, and lab results came back on paper to be filed by hand. Nobody had a single, current picture of who was admitted, where, and on what medication.",
    solution:
      "We extended the patient record into an inpatient episode: admission against a UHID, bed allocation on a live ward map, transfers and discharge, each a state change logged with who made it and when. Doctors' prescriptions flow from the consultation screen straight into a pharmacy dispensing queue, and nursing staff work from a task list of scheduled medication rounds and observations. The pharmacy runs on batch-level inventory with expiry dates, first-expiry-first-out (FEFO) picking and reorder thresholds, and the laboratory receives orders electronically, records results against the sample and releases them back to the requesting doctor's view.",
    statpoints: [
      "Bed occupancy tracked in a paper register",
      "Medication charts and nursing handovers kept on paper",
      "Pharmacy stock, batches and expiry dates tracked manually",
      "Lab orders and results passed between departments as paper slips",
    ],
    pillars: [
      { num: "01", title: "Live Ward Picture", text: "Admissions, bed allocation, transfers and discharges update one ward map, so staff can see occupancy and availability at a glance." },
      { num: "02", title: "Safer Medication Rounds", text: "Prescriptions become scheduled medication tasks for nursing staff, with each administration recorded against the patient and the staff member." },
      { num: "03", title: "Pharmacy That Knows Its Stock", text: "Batch-level inventory with expiry dates, FEFO dispensing and reorder thresholds replaces manual stock books and surprise shortages." },
      { num: "04", title: "Closed-Loop Laboratory", text: "Lab orders arrive electronically from the consultation or ward, results are recorded against the sample, and they return to the requesting clinician's view." },
    ],
    stepsData: [
      { phase: "Phase 01", title: "Inpatient Episode Model", desc: "Modelled admission, bed, transfer and discharge as explicit states on top of the shared patient record, each transition validated server-side and logged.", icon: I.plan },
      { phase: "Phase 02", title: "Ward & Nursing Workflows", desc: "Built the bed and ward map plus nursing task lists for medication rounds and observations, designed for quick use on shared ward terminals.", icon: I.build },
      { phase: "Phase 03", title: "Pharmacy & Inventory", desc: "Connected prescriptions to a dispensing queue and built batch and expiry tracking, FEFO picking, stock movements and reorder alerts on PostgreSQL.", icon: I.data },
      { phase: "Phase 04", title: "Laboratory Integration", desc: "Wired electronic lab orders, sample tracking and result entry into the patient record, with results surfaced back to the ordering doctor.", icon: I.integrate },
    ],
    results: [
      { metric: "Bed management", before: "Paper register", after: "Live ward map", delta: "Real-time" },
      { metric: "Prescription to dispense", before: "Paper slips carried by hand", after: "Electronic dispensing queue", delta: "Digitised" },
      { metric: "Pharmacy stock", before: "Manual stock books", after: "Batch & expiry tracking", delta: "Controlled" },
      { metric: "Lab results", before: "Filed on paper", after: "Attached to the patient record", delta: "Closed loop" },
    ],
    stats: [
      { value: "1", suffix: "", label: "Record from admission to discharge" },
      { value: "50", suffix: "+", label: "Modules in the full system" },
      { value: "100", suffix: "%", label: "Workflow digitised" },
      { value: "3", suffix: " months", label: "Full build delivered" },
    ],
    _verify: [
      ...COMMON_VERIFY,
      "Confirm the IPD module covers admission, bed allocation, transfers and discharge",
      "Confirm there is a visual bed/ward map",
      "Confirm nursing task lists and medication-round recording were built",
      "Confirm pharmacy uses FEFO batch/expiry logic and reorder thresholds",
      "Confirm prescriptions flow electronically into a pharmacy dispensing queue",
      "Confirm the lab module includes sample tracking and electronic result entry",
    ],
  },

  /* ── Part 3 ─────────────────────────────────────────────────────────── */
  {
    id: "hospital-os-billing-admin-analytics",
    series: { ...SERIES, part: 3 },
    ...shared,
    title: "Hospital OS — Billing, Admin & Analytics",
    tagline: "Charges captured where care happens, access controlled by role, and the whole hospital on one dashboard.",
    services: [
      "Charge Capture at Source",
      "Billing & Invoicing",
      "Treatment Packages",
      "Admin Console",
      "Role-Based Access Control",
      "Audit Trails",
      "Management Dashboards",
    ],
    tags: ["Healthcare", "HMS", "Billing", "RBAC", "Dashboards"],
    accent: "#1f6fe0",
    gallery: [`${IMG}/7.webp`, `${IMG}/8.webp`, `${IMG}/9.webp`],
    overview:
      "Part 3 of the Hospital Operating System is the layer that lets management run the hospital rather than chase it: billing driven by the clinical modules, an admin console that controls who can see and do what, immutable audit trails, and dashboards that show occupancy, revenue and delays as they happen.",
    challenge:
      "Bills were assembled at the end of a visit or stay from paper slips, so consultations, medicines and tests could be missed or double-counted. There was no structured way to limit who could see sensitive psychiatric records, no record of who changed what, and owners had to ask around — or wait for month-end — to know how full the wards were or how the hospital was performing.",
    solution:
      "Every billable event — a consultation, a dispensed medicine, a lab test, a bed-day — raises a charge line at the moment it happens, so the invoice is built continuously instead of reconstructed at discharge. Billing endpoints are idempotent, so a retried request cannot create a duplicate charge, and treatment packages can be applied across an episode. Access runs on role-based access control (RBAC) with JWT-authenticated sessions, sensitive clinical data is restricted to the roles that need it, and every create, update and cancellation is written to an append-only audit log. Management dashboards query the same PostgreSQL data to show occupancy, revenue, pending bills and waiting-time delays without a separate reporting process.",
    statpoints: [
      "Bills compiled by hand from paper slips at discharge",
      "Missed or duplicated charges with no way to trace them",
      "No role-based control over who could view sensitive records",
      "No central dashboard for occupancy, revenue or delays",
    ],
    pillars: [
      { num: "01", title: "Charges at Source", text: "Consultations, medicines, tests and bed-days raise charge lines as they happen, so the bill is always current and nothing depends on paper slips reaching the counter." },
      { num: "02", title: "Billing You Can Trust", text: "Idempotent billing operations, packages, discounts and cancellations with reasons — every figure traceable back to the clinical event that created it." },
      { num: "03", title: "Access by Role, Logged by Default", text: "RBAC limits each role to what it needs, and an append-only audit trail records who viewed or changed what, following a HIPAA-aligned design built to support DPDP obligations." },
      { num: "04", title: "Management at a Glance", text: "Real-time dashboards for occupancy, revenue, pending bills and OPD delays, built on the same data the departments work from." },
    ],
    stepsData: [
      { phase: "Phase 01", title: "Charge Model & Tariffs", desc: "Defined service tariffs, packages and the charge-line model so every clinical module can raise billable events against an OPD visit or IPD episode.", icon: I.plan },
      { phase: "Phase 02", title: "Billing & Invoicing Engine", desc: "Built invoicing, receipts, packages, discounts and cancellations on idempotent endpoints with server-side validation and transactional writes.", icon: I.build },
      { phase: "Phase 03", title: "Access Control & Audit", desc: "Implemented RBAC with JWT session auth, encryption in transit, and an append-only audit log across clinical and financial actions.", icon: I.secure },
      { phase: "Phase 04", title: "Dashboards & Reporting", desc: "Delivered management dashboards for occupancy, revenue, collections and delays, with filters by department, doctor and date range.", icon: I.chart },
    ],
    results: [
      { metric: "Billing", before: "Compiled by hand at discharge", after: "Built continuously from charges at source", delta: "Automated" },
      { metric: "Data access", before: "Open paper files", after: "Role-based permissions", delta: "Controlled" },
      { metric: "Change history", before: "None", after: "Append-only audit trail", delta: "Traceable" },
      { metric: "Management view", before: "Ask around / month-end", after: "Real-time dashboards", delta: "Live" },
    ],
    stats: [
      { value: "1", suffix: "", label: "Dashboard for the whole hospital" },
      { value: "50", suffix: "+", label: "Modules in the full system" },
      { value: "100", suffix: "%", label: "Workflow digitised" },
      { value: "3", suffix: " months", label: "Full build delivered" },
    ],
    testimonial: TESTIMONIAL,
    _verify: [
      ...COMMON_VERIFY,
      "Confirm charges are raised automatically by clinical modules (charge capture at source)",
      "Confirm billing endpoints are idempotent and support packages, discounts and cancellations",
      "Confirm RBAC and JWT-based session auth are used",
      "Confirm an append-only/immutable audit log exists and whether it records record views as well as changes",
      "Confirm encryption in transit (and at rest, if we mention it elsewhere)",
      "Confirm dashboards show occupancy, revenue, pending bills and delays in real time",
      "Confirm we are comfortable with 'HIPAA-aligned' and 'designed to support DPDP' wording",
    ],
  },

  /* ── Part 4 ─────────────────────────────────────────────────────────── */
  {
    id: "hospital-os-patient-portal-ai",
    series: { ...SERIES, part: 4 },
    ...shared,
    title: "Hospital OS — Patient Portal & AI",
    tagline: "A calm public front door with 24/7 booking, wired straight into the hospital's own system, plus AI where it saves clinicians time.",
    services: [
      "Patient-Facing Website",
      "24/7 Online Appointment Booking",
      "Appointment Reminders",
      "AI Integration",
      "Responsive Web Development",
      "Booking API Integration",
    ],
    tags: ["Healthcare", "HMS", "Patient Portal", "Online Booking", "AI"],
    accent: "#3a9bff",
    gallery: [`${IMG}/10.webp`, `${IMG}/11.webp`, `${IMG}/common.webp`],
    overview:
      "Part 4 of the Hospital Operating System is what patients and families see: a calm, accessible website with online appointment booking available 24/7, connected directly to the hospital's scheduling engine, together with AI features built into the staff-facing system. For a mental-health practice, the first contact has to feel quiet and trustworthy, and booking has to be possible at whatever hour someone decides to ask for help.",
    challenge:
      "Booking an appointment meant phoning during working hours, and the hospital had little online presence a family could rely on when researching care. Any requests that did arrive had to be copied into the paper diary by hand. Inside the hospital, clinicians spent time writing up and re-reading long histories that the new system now held in structured form.",
    solution:
      "We built a responsive patient-facing website with a deliberately calm visual language and clear paths to services, doctors and booking. The booking flow reads live slot availability from the OPD scheduling engine through the same REST APIs the front desk uses, so an online booking appears in the doctor's calendar and queue immediately — no copying, no double-booking. Confirmations and reminders go out automatically. Inside the HMS, AI integration supports staff with tasks such as summarising patient history before a consultation, with clinicians always reviewing the output and the final record remaining theirs.",
    statpoints: [
      "Appointments only possible by phone during working hours",
      "Little trustworthy online presence for patients and families",
      "Booking requests copied by hand into a paper diary",
      "Clinicians re-reading long histories before each follow-up",
    ],
    pillars: [
      { num: "01", title: "A Calm First Contact", text: "A quiet, accessible website designed for people seeking mental-health care, with clear information and few steps to a booking." },
      { num: "02", title: "Booking at Any Hour", text: "24/7 online booking against live doctor availability, written straight into the same schedule and queue the front desk works from." },
      { num: "03", title: "Fewer Missed Visits", text: "Automatic confirmations and reminders keep patients informed and help reduce no-shows on follow-up appointments." },
      { num: "04", title: "AI With a Clinician in the Loop", text: "AI support inside the HMS helps staff work through patient information faster, with every output reviewed by a clinician before it counts." },
    ],
    stepsData: [
      { phase: "Phase 01", title: "Patient Journey Design", desc: "Mapped how patients and families find, evaluate and book care, and designed a calm, mobile-first interface around those journeys.", icon: I.plan },
      { phase: "Phase 02", title: "Website & Booking Flow", desc: "Built the responsive React website and a booking flow that reads live slots from the OPD scheduling engine and writes confirmed bookings back in real time.", icon: I.screen },
      { phase: "Phase 03", title: "Reminders & Notifications", desc: "Added automatic booking confirmations and appointment reminders triggered by schedule events in the HMS.", icon: I.flow },
      { phase: "Phase 04", title: "AI Integration", desc: "Integrated AI-assisted features into the staff system, scoped to support documentation and review, with access governed by the same role-based permissions as the rest of the HMS.", icon: I.ai },
    ],
    results: [
      { metric: "Appointment access", before: "Phone, working hours only", after: "Online booking, 24/7", delta: "Always open" },
      { metric: "Online bookings", before: "Copied into a paper diary", after: "Written straight into the schedule", delta: "No re-entry" },
      { metric: "Digital presence", before: "Minimal", after: "Calm, professional website", delta: "Established" },
    ],
    stats: [
      { value: "24", suffix: "/7", label: "Appointment accessibility" },
      { value: "1", suffix: "", label: "Schedule shared by website and front desk" },
      { value: "50", suffix: "+", label: "Modules in the full system" },
      { value: "3", suffix: " months", label: "Full build delivered" },
    ],
    testimonial: TESTIMONIAL,
    _verify: [
      ...COMMON_VERIFY,
      "Confirm the exact AI scope (e.g. patient-history summaries, assisted documentation or smart triage) and update the copy to match",
      "Confirm AI outputs are always reviewed by a clinician",
      "Confirm online bookings write directly into the HMS schedule and queue in real time",
      "Confirm automatic booking confirmations and reminders exist, and by which channel (SMS, email, WhatsApp)",
      "Confirm the website was built in React and is mobile-first",
      "Confirm reminders are expected to reduce no-shows (no figure claimed)",
      "Check the website screenshots for the client's name, logo or domain",
    ],
  },
]

export default hospitalOs
