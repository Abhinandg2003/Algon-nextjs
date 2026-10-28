// AI development service pages. Keys are navbar slugs (see navMenus.js).
// Schema: see ./index.js. Reference page: healthcare.js -> "hospital-management-system".

const aiDevelopment = {
  // ───────────────────────────────────────────────────────────────────────────
  "ai-development-services": {
    seo: {
      title: "AI Development Services for Real Operations",
      description:
        "AI development services added once the process is clean: document drafting, assistants on your data, owner insights, routing and voice triage, with human sign-off.",
      keywords: [
        "AI development services",
        "AI development company India",
        "AI development company Kochi",
        "custom AI solutions for business",
        "AI integration services",
        "AI for healthcare operations",
        "AI document drafting",
        "AI consulting for small business",
      ],
    },
    hero: {
      highlight: "AI Development",
      title: "AI that earns its place, *added after the process works*",
      subtitle:
        "We add AI to a business once the workflow is mapped and the data is reliable. Applied first, it automates confusion. Applied last, it takes real work off your team, with a person signing off on what matters.",
      chips: ["Document drafting", "Assistants on your data", "Owner insights", "Message routing", "Voice & IVR triage", "Human sign-off"],
      formTitle: "Where could AI save your team time?",
      formMessageLabel: "Which task takes the most manual effort today?",
    },
    stats: [
      { value: "48+", label: "Projects delivered for clients since 2023" },
      { value: "3", label: "Countries served: USA, India and the UAE" },
      { value: "1", label: "Named person who signs off before AI output reaches anyone" },
    ],
    definition: {
      eyebrow: "What it is",
      title: "What are AI development services?",
      paragraphs: [
        "AI development services are the design, build and integration of AI features into the software and workflows a business already runs, such as drafting documents, answering questions from company records, routing incoming messages or summarising live data for owners. The goal is less manual work on a specific task, not an AI product for its own sake.",
        "We build the operational layer of a business: the workflows, software and automation that carry information between departments, staff and customers without anyone having to chase it. AI is the last layer we add. We map how the work really happens, give every step a named owner, automate the repetitive part, and only then add AI where it beats a simpler rule.",
        "Why last? AI is only as good as the process and data under it. Before that, it speeds up the mess. Some problems need automation, some need software, some need a team and some need nothing at all. We tell you which before anything is built.",
      ],
      points: [
        { icon: "FileText", text: "Which documents does your team write from scratch every day?" },
        { icon: "Inbox", text: "How many incoming messages are read only to be passed to someone else?" },
        { icon: "Database", text: "Is the data AI would rely on complete and up to date today?" },
      ],
    },
    problems: {
      title: "Why AI projects stall in ordinary businesses",
      intro: "The model is rarely the problem. What sits around it usually is.",
      items: [
        { icon: "Split", title: "Added to a broken process", text: "AI on top of an unclear workflow produces faster, more confident versions of the same mistakes." },
        { icon: "Database", title: "Data nobody trusts", text: "Records live in spreadsheets, inboxes and side registers, so the AI answers from half the picture." },
        { icon: "Target", title: "A demo, not a job", text: "The pilot impresses in a meeting but was never tied to a task someone does every day." },
        { icon: "UserCheck", title: "No one checks the output", text: "Drafts and answers go straight to customers or records with no named reviewer." },
        { icon: "Wallet", title: "Costs drift upwards", text: "Whole documents are sent to the model on every call and nobody is watching usage." },
        { icon: "Lock", title: "Data leaves the building", text: "Sensitive records are pasted into public tools because no approved route exists." },
      ],
    },
    services: {
      title: "Where we apply AI",
      intro: "Each use is tied to a task your team already does, with a person reviewing the result where it matters.",
      items: [
        { icon: "FileText", title: "Document drafting", text: "Notes, summaries, reports and letters drafted from your records, ready for a person to review and sign." },
        { icon: "Search", title: "Assistants on your own data", text: "Staff or customers ask questions and get answers drawn from your documents, with the sources shown." },
        { icon: "LineChart", title: "Owner-level insights", text: "Live operational data turned into plain-language answers: what changed this week, where work is waiting." },
        { icon: "Route", title: "Classification & routing", text: "Messages, complaints and requests sorted by type and urgency and sent to the right owner." },
        { icon: "PhoneCall", title: "Voice & IVR triage", text: "Incoming calls understood, sorted and passed to the right desk, with a summary waiting for the person who picks up." },
        { icon: "Workflow", title: "AI inside your workflows", text: "AI steps placed inside existing automations, so a draft or a decision appears where the work already happens." },
      ],
    },
    tables: [
      {
        eyebrow: "Guardrails",
        title: "How we keep AI accountable",
        intro: "These commitments apply to every AI feature we build, whatever the sector.",
        columns: ["Commitment", "What it means in practice"],
        rows: [
          ["A person signs off", "A named person reviews AI output before it reaches a patient, customer or record."],
          ["Answers are grounded", "Answers come from your own data and show the sources they were drawn from."],
          ["Costs are controlled", "Only the relevant records are sent to the model, and usage is monitored."],
          ["Data stays with you", "Your data stays in infrastructure you control."],
          ["Fit for purpose", "AI is used only where it beats a simpler rule or workflow."],
        ],
      },
      {
        eyebrow: "AI by stage",
        title: "What AI does, and what stays human",
        columns: ["Stage", "What AI does", "What stays human"],
        rows: [
          ["Intake", "Reads incoming messages and calls, sorts them by type and urgency", "Deciding on unclear or sensitive cases"],
          ["Preparation", "Pulls the relevant records together and drafts the document", "Checking facts and tone, then signing off"],
          ["Answering", "Responds to routine questions from approved information", "Anything outside approved information or involving judgement"],
          ["Reporting", "Summarises live data into plain-language updates for owners", "Deciding what to do about it"],
        ],
        highlightLast: true,
      },
    ],
    process: {
      title: "How an AI project runs",
      intro: "The same delivery steps as any system we build. AI goes live only after the team has seen it work on real cases.",
      steps: [
        { title: "Bottleneck review", text: "We find the task that costs the most time and check whether the process and data are ready for AI." },
        { title: "Plan", text: "We agree the use case, the reviewer, the data involved and the cost. You approve before any build starts." },
        { title: "Build in short cycles", text: "You see AI output on your own examples early and tell us where it falls short." },
        { title: "Run in parallel", text: "AI drafts and suggestions run alongside the manual way until your team trusts them." },
        { title: "Go live and train", text: "Reviewers learn what to check and how to correct the output, not just which button to press." },
        { title: "Support and improve", text: "We monitor quality and usage, and widen the scope once the first use is earning its keep." },
      ],
    },
    industries: {
      title: "Where we start",
      items: [
        { icon: "Stethoscope", title: "Healthcare first", text: "Clinical notes, discharge summaries, patient questions and call triage, always with a clinician reviewing." },
        { icon: "GraduationCap", title: "Education", text: "Student and parent questions, enquiry follow-ups and teaching assistants built on course material." },
        { icon: "Building2", title: "Growing businesses", text: "Teams that have outgrown spreadsheets and follow-up calls, and need AI on top of a process that now works." },
      ],
    },
    caseStudy: {
      id: "admissions-ai-assistant",
      title: "An AI chatbot and automated follow-ups, live in four days",
      intro: "A study abroad consultancy replaced hours of daily manual follow-up and enrolled three times as many students with a smaller team.",
    },
    related: ["ai-development/rag-development-services", "ai-development/workflow-automation", "healthcare/clinical-documentation-ai"],
    faq: [
      {
        q: "Why do you add AI last?",
        a: "AI is only as good as the process and data under it. If the workflow is unclear or the records are incomplete, AI speeds up the mess. We fix the process first, automate the repetitive part, then add AI where it clearly helps.",
      },
      {
        q: "Will AI replace our staff?",
        a: "That is not how we build it. AI takes over drafting, sorting and looking things up, and a named person still reviews and decides. Your team spends less time on routine work and more on the cases that need them.",
      },
      {
        q: "Do we need a lot of data to use AI?",
        a: "Not usually. Drafting, routing and assistants on your documents work with the records you already have, as long as they are reliable. We check data readiness during the bottleneck review.",
      },
      {
        q: "Where does our data go?",
        a: "Your data stays in infrastructure you control. Only the records relevant to a request are sent to the model, and we confirm the hosting set-up with you during planning.",
      },
      {
        q: "How do you keep AI costs predictable?",
        a: "We send only the relevant context with each request, choose the smallest model that does the job well and monitor usage so you can see what each feature costs.",
      },
      {
        q: "What if you think AI is the wrong answer?",
        a: "We will say so. Some problems need a workflow, some need software, some need a team and some need nothing. An honest first answer is part of the bottleneck review.",
      },
      {
        q: "Can you add AI to software we already use?",
        a: "Often, yes. We connect to your existing systems where that is cheaper than replacing them, and place the AI step where your team already works.",
      },
    ],
    cta: {
      title: "Start with one task, not an AI strategy",
      text: "Tell us which job takes the most manual effort. We will tell you whether AI, automation or neither is the right fix.",
    },
  },

  // ───────────────────────────────────────────────────────────────────────────
  "ai-agent-development": {
    seo: {
      title: "AI Agent Development for Bounded, Checkable Work",
      description:
        "AI agent development for clear, checkable jobs: answering from approved information, triage, follow-ups, drafts and record look-ups, with hand-off to a named person.",
      keywords: [
        "AI agent development",
        "AI agent development company",
        "custom AI agents for business",
        "AI agents for customer support",
        "AI triage agent",
        "AI agent with human hand-off",
        "AI agents India",
      ],
    },
    hero: {
      highlight: "AI Agent",
      title: "AI agents with *a clear job and a named person behind them*",
      subtitle:
        "We build agents for work that has edges: answering from approved information, triaging requests, chasing follow-ups and preparing drafts. Every run is logged, and when the agent is unsure it hands over to a person.",
      chips: ["Approved answers", "Triage & routing", "Follow-ups", "Drafts", "Record look-ups", "Human hand-off", "Run logs"],
      formTitle: "Which job would you hand to an agent?",
      formMessageLabel: "Describe the task and who does it today",
    },
    definition: {
      eyebrow: "What it is",
      title: "What is AI agent development?",
      paragraphs: [
        "AI agent development is building software that uses a language model to carry out a task in steps: reading a request, looking up records, using tools such as a calendar or CRM, and producing an answer or action. Unlike a simple chatbot, an agent can act inside your systems, which is why its job needs clear limits.",
        "We build agents for bounded, checkable jobs. The agent knows what it is allowed to do, which information it may use, and who to hand over to when a case falls outside that. A person can always see what it did and why.",
        "Agents work best on top of a process that already runs well. If the steps are unclear today, we fix that first, because an agent on a vague process just makes vague decisions faster.",
      ],
      points: [
        { icon: "Target", text: "Can you describe the job in a few sentences, with a clear finish?" },
        { icon: "ClipboardCheck", text: "Could a person check the agent's work in under a minute?" },
        { icon: "Users", text: "Who should take over when the agent is not sure?" },
      ],
    },
    problems: {
      title: "Why AI agents go wrong",
      intro: "Most agent failures come from giving the agent too much freedom and too little structure.",
      items: [
        { icon: "Sparkles", title: "No defined job", text: "An agent asked to 'help customers' has no finish line, so nobody can tell whether it worked." },
        { icon: "FileSearch", title: "Answers from anywhere", text: "Without approved sources, the agent fills gaps with plausible guesses." },
        { icon: "Users", title: "No hand-off path", text: "When the agent is stuck, the customer is stuck too, because no person is waiting on the other side." },
        { icon: "History", title: "No record of what it did", text: "When a complaint arrives, nobody can trace which step the agent took or why." },
        { icon: "KeyRound", title: "Too many permissions", text: "Agents given wide access to systems can change records they were never meant to touch." },
        { icon: "TriangleAlert", title: "Confident when unsure", text: "The agent answers every question instead of escalating the ones it should not handle." },
      ],
    },
    services: {
      title: "Agents we build",
      intro: "Each agent has one job, a set of approved tools and a named person to hand over to.",
      items: [
        { icon: "MessageSquare", title: "Question-answering agents", text: "Answer customer, patient or student questions from approved information, and say when they cannot." },
        { icon: "Route", title: "Triage & routing agents", text: "Read incoming requests, decide type and urgency, and pass them to the right owner with a short summary." },
        { icon: "Bell", title: "Follow-up agents", text: "Chase missing documents, unconfirmed appointments and unanswered enquiries on a schedule." },
        { icon: "FileText", title: "Drafting agents", text: "Prepare replies, letters and summaries from the relevant records for a person to approve." },
        { icon: "Search", title: "Record look-up agents", text: "Find a booking, an invoice or a case history and return what staff need, without them switching systems." },
        { icon: "Handshake", title: "Hand-off & escalation", text: "Pass the conversation to a named person with full context, so nobody has to ask the customer twice." },
      ],
    },
    tables: [
      {
        eyebrow: "Agent by job",
        title: "What the agent does, and where a person takes over",
        columns: ["Job", "What the agent does", "When it hands over"],
        rows: [
          ["Answering questions", "Replies from approved information and shows where the answer came from", "The question is outside approved information or needs judgement"],
          ["Triage", "Sorts requests by type and urgency and routes them", "A request looks urgent, sensitive or does not fit a category"],
          ["Follow-ups", "Sends reminders and chases missing items on a schedule", "The person has not responded after the agreed number of attempts"],
          ["Drafting", "Prepares a reply or document from the relevant records", "Always: a person approves before it is sent"],
          ["Record look-ups", "Finds and summarises records staff ask for", "The record is missing, conflicting or access is restricted"],
        ],
        highlightLast: true,
        note: "Hand-off rules are agreed with your team during planning and can be tightened or relaxed as trust builds.",
      },
    ],
    process: {
      title: "From one job to a working agent",
      intro: "An agent starts with one job and clear limits on what it may do. It is tested on real cases and runs alongside your staff, with every action logged, before it works on its own.",
      steps: [
        { title: "Pick the job", text: "We choose one bounded task, agree what done looks like and who reviews the agent's work." },
        { title: "Set the limits", text: "We list the information the agent may use, the tools it may call and the cases it must hand over." },
        { title: "Build and test on real cases", text: "The agent is tested against examples from your own history, including the awkward ones." },
        { title: "Run alongside staff", text: "The agent works in parallel with your team, and its decisions are compared before it acts on its own." },
        { title: "Go live with logging", text: "Every run is logged, so any answer or action can be traced back and corrected." },
      ],
    },
    differentiators: {
      title: "How our agents behave",
      items: [
        { icon: "Lock", title: "Least access", text: "Each agent gets only the permissions its job needs, and nothing more." },
        { icon: "History", title: "Every run logged", text: "Inputs, steps, tools used and outputs are recorded for review." },
        { icon: "TriangleAlert", title: "Escalates when unsure", text: "Uncertain cases go to a named person instead of being guessed at." },
        { icon: "FileSearch", title: "Grounded answers", text: "Replies come from approved information, with sources shown where it helps." },
      ],
    },
    caseStudy: {
      id: "campus-ai-teacher-agents",
      title: "AI teacher agents for every department",
      intro: "A college platform with custom AI teacher agents built for each department, delivered in eight weeks.",
    },
    related: ["healthcare/ai-agents-in-healthcare", "ai-development/rag-development-services", "ai-development/workflow-automation"],
    faq: [
      {
        q: "What is the difference between an AI agent and a chatbot?",
        a: "A chatbot replies to messages. An agent can also take steps: look up a record, check a calendar, update a status or hand the case to a person. That extra reach is why we give agents narrow jobs and clear limits.",
      },
      {
        q: "What kinds of jobs suit an agent?",
        a: "Jobs with clear edges that a person could check quickly: answering from approved information, sorting requests, chasing follow-ups, preparing drafts and looking up records.",
      },
      {
        q: "What happens when the agent does not know the answer?",
        a: "It says so and hands over to a named person with the full conversation and any records it found, so the customer does not have to repeat themselves.",
      },
      {
        q: "Can an agent act in our systems on its own?",
        a: "Only where you agree it should, and only with the permissions that job needs. Many agents start by suggesting actions for a person to approve, and act alone once trust is built.",
      },
      {
        q: "How do we check what the agent has been doing?",
        a: "Every run is logged with its inputs, steps and outputs. Your team can review individual cases and we use the logs to improve the agent.",
      },
      {
        q: "Can agents work on WhatsApp, the web and phone?",
        a: "Yes. We connect agents to the channels your customers already use. The exact channels are confirmed for each project.",
      },
      {
        q: "Do you build agents for healthcare?",
        a: "Yes, for tasks like patient questions, appointment follow-ups and triage, with a clinician or care coordinator always reviewing anything clinical.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  "workflow-automation": {
    seo: {
      title: "Workflow Automation Services with n8n & APIs",
      description:
        "Workflow automation for follow-ups, hand-offs, approvals, data movement and reports. Every run is logged and a named owner is alerted when something fails.",
      keywords: [
        "workflow automation services",
        "business process automation",
        "n8n automation services",
        "n8n developer India",
        "WhatsApp automation for business",
        "automated follow-ups",
        "workflow automation company Kochi",
        "Zoho automation",
      ],
    },
    hero: {
      title: "Replace the follow-up *one person has to remember*",
      subtitle:
        "If a process only works because one person remembers to follow up, it is a candidate for automation. We replace that memory with a workflow that runs on its own and tells someone when it needs a decision.",
      chips: ["Follow-ups", "Reminders", "Hand-offs", "Approvals", "Data sync", "Daily reports", "n8n"],
      formTitle: "What do you still chase by hand?",
      formMessageLabel: "Which follow-up or hand-off slips most often?",
    },
    stats: [
      { value: "4 days", label: "To launch a website, AI chatbot and automated follow-ups for one client" },
      { value: "3x", label: "Students enrolled by that client, with a smaller team" },
      { value: "48+", label: "Projects delivered since 2023" },
    ],
    definition: {
      eyebrow: "What it is",
      title: "What is workflow automation?",
      paragraphs: [
        "Workflow automation is software that carries out the repeatable steps of a business process on its own: sending a reminder when a form arrives, moving data from one system to another, asking for an approval or sending a daily summary. People step in only where a decision is needed.",
        "Most of the work we automate is not complicated. It is the follow-up nobody owns, the spreadsheet copied into the billing system every evening, the approval that waits in someone's inbox. Each is small. Together they cost hours every day and decide whether a customer hears back.",
        "We use the simplest tool that holds up: a workflow platform such as n8n, a small custom service, or a setting in software you already own. Our founder is the n8n Community Ambassador for Kochi, so we know where the platform fits and where it does not.",
      ],
    },
    problems: {
      title: "Why manual processes keep slipping",
      intro: "The process is usually fine on paper. It breaks in the gaps between people and systems.",
      items: [
        { icon: "Users", title: "One person holds it together", text: "When they are on leave or busy, follow-ups stop and nobody notices until a customer complains." },
        { icon: "Repeat", title: "Copy-paste between systems", text: "The same details are typed into forms, CRMs, spreadsheets and billing, with errors at every step." },
        { icon: "Clock", title: "Approvals wait in inboxes", text: "A request sits unread for days because nothing reminds the approver or escalates it." },
        { icon: "Split", title: "Hand-offs without a trigger", text: "One department finishes but the next one is never told, so work waits in between." },
        { icon: "BarChart3", title: "Reports built by hand", text: "Someone spends hours each week pulling numbers together that are out of date by the time they are read." },
        { icon: "TriangleAlert", title: "Automations that fail silently", text: "Earlier scripts stopped working months ago and nobody was told." },
      ],
    },
    services: {
      title: "What we automate",
      items: [
        { icon: "Bell", title: "Follow-ups & reminders", text: "Messages and tasks triggered by events: a new enquiry, a missed appointment, an unpaid invoice." },
        { icon: "Route", title: "Hand-offs between departments", text: "When one team finishes, the next is told automatically, with the details it needs." },
        { icon: "RefreshCw", title: "Data movement", text: "Forms, CRMs, spreadsheets, billing and messaging kept in step without copy-paste." },
        { icon: "ClipboardCheck", title: "Approvals & escalations", text: "Requests go to the right approver, with reminders and escalation when they wait too long." },
        { icon: "LayoutDashboard", title: "Reporting", text: "Daily and weekly summaries sent to owners, built from live data rather than by hand." },
        { icon: "Sparkles", title: "AI steps where they help", text: "Drafting a reply or sorting a message inside the workflow, once the basic automation runs reliably." },
      ],
    },
    tables: [
      {
        eyebrow: "Trigger to outcome",
        title: "What a typical automation looks like",
        intro: "Each automation starts with an event, does the repeatable part and tells a person when a decision is needed.",
        columns: ["When this happens", "The workflow does", "A person is told when"],
        rows: [
          ["A new enquiry arrives", "Logs it, replies with next steps and schedules follow-ups", "The enquiry has not been answered after the agreed time"],
          ["A form is submitted", "Copies the details into the CRM, spreadsheet or billing system", "Required details are missing or do not match"],
          ["A request needs approval", "Sends it to the approver with a reminder schedule", "It is still waiting past the deadline"],
          ["An invoice is unpaid", "Sends payment reminders on a fixed schedule", "Reminders are exhausted and a call is needed"],
          ["The day ends", "Sends owners a summary of activity and open items", "A number is outside the expected range"],
        ],
        highlightLast: true,
      },
    ],
    process: {
      title: "How an automation project runs",
      intro: "Automation starts with the bottleneck, not the tool. We map the steps and their owners, build with logging so failures are visible, and run it alongside the manual process before handing it over.",
      steps: [
        { title: "Name the bottleneck", text: "We find the process that slips most often and the person currently holding it together." },
        { title: "Map the steps", text: "We write down every step, every system it touches and every exception, with your team." },
        { title: "Build with logging", text: "The workflow is built so every run can be traced: what triggered it, what it did, what it sent." },
        { title: "Run alongside", text: "The automation runs next to the manual process until the team trusts it." },
        { title: "Hand over", text: "You get a working automation with a named owner who is alerted when a run fails." },
      ],
    },
    stack: {
      title: "Tools we commonly connect",
      intro: "We pick the simplest tool that holds up for your volume and team.",
      groups: [
        { label: "Workflow platforms", items: ["n8n", "Custom services", "Webhooks"] },
        { label: "Messaging", items: ["WhatsApp Business API", "Email", "SMS"] },
        { label: "Business systems", items: ["Google Workspace", "Zoho", "CRMs", "Spreadsheets"] },
        { label: "Payments & data", items: ["Payment gateways", "REST APIs", "Databases"] },
      ],
      note: "The exact list is confirmed for each project, based on what you already use.",
    },
    caseStudy: {
      id: "admissions-follow-up-automation",
      title: "Hours of manual follow-up, automated",
      intro: "Automated follow-ups replaced hours of daily manual work for a study abroad consultancy, helping it enrol three times as many students with a smaller team.",
    },
    related: ["ai-development/ai-agent-development", "healthcare/clinic-automation", "healthcare/patient-engagement"],
    faq: [
      {
        q: "Which processes are worth automating first?",
        a: "The ones that slip when one person is busy: follow-ups, hand-offs between teams, approvals and data copied between systems. We start with the one that costs the most time or customers.",
      },
      {
        q: "Do you always use n8n?",
        a: "No. We use n8n where a workflow platform fits, a small custom service where it does not, and sometimes just a setting in software you already own. The simplest option that holds up wins.",
      },
      {
        q: "Can you automate WhatsApp messages?",
        a: "Yes, through the WhatsApp Business API, for reminders, confirmations and follow-ups, within the platform's messaging rules.",
      },
      {
        q: "What happens when an automation fails?",
        a: "Every run is logged, and a named owner is alerted when a run fails, so problems are seen the same day rather than months later.",
      },
      {
        q: "Will automation work with our existing software?",
        a: "Usually, yes. Most business tools offer APIs or webhooks. Where they do not, we look for the next most reliable route and tell you the trade-offs.",
      },
      {
        q: "Who owns and maintains the automations?",
        a: "You do. We hand over with documentation and a named owner on your side, and we can stay on to support and extend them.",
      },
      {
        q: "Is automation the same as adding AI?",
        a: "No. Most automation is plain rules: when this happens, do that. We add AI steps only where they clearly beat a rule, such as drafting replies or sorting free-text messages.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  "machine-learning": {
    seo: {
      title: "Machine Learning Development for Operations",
      description:
        "Practical machine learning development: classification, demand and occupancy forecasting, anomaly detection and document reading, used only where ML beats a rule.",
      keywords: [
        "machine learning development services",
        "machine learning company India",
        "demand forecasting machine learning",
        "anomaly detection billing",
        "document understanding AI",
        "text classification model",
        "machine learning consulting",
      ],
    },
    hero: {
      title: "Machine learning *for everyday operational decisions*",
      subtitle:
        "Practical models, not research projects. We use machine learning to sort, forecast and flag, and only where it beats a simpler rule. If your data is not ready yet, we will say so and help you get there.",
      chips: ["Classification", "Forecasting", "Anomaly detection", "Document understanding", "Evaluation", "Monitoring"],
      formTitle: "What would you like to predict or flag?",
      formMessageLabel: "Describe the decision and the data you have",
    },
    definition: {
      eyebrow: "What it is",
      title: "What is machine learning development?",
      paragraphs: [
        "Machine learning development is building models that learn patterns from your historical data to make a prediction or decision, such as which category a request belongs to, how many beds will be occupied next week or which bill looks unusual. The model is then built into a workflow so the prediction is used, not just reported.",
        "We use machine learning when a pattern is too varied for hand-written rules but consistent enough to learn. When a few clear rules do the job, we write the rules instead. They are cheaper to run and easier to explain.",
        "Data comes first. A model trained on incomplete or inconsistent records will repeat their gaps with confidence, so we check data readiness before any model is built.",
      ],
      points: [
        { icon: "Database", text: "Do you have a year or more of consistent records for the decision?" },
        { icon: "Scale", text: "Would a few clear rules already get most cases right?" },
        { icon: "UserCheck", text: "Who acts on the prediction, and how will they use it?" },
      ],
    },
    problems: {
      title: "Why machine learning projects underdeliver",
      items: [
        { icon: "Database", title: "Data not ready", text: "Records are spread across systems, inconsistently labelled or missing the outcome the model needs to learn." },
        { icon: "Scale", title: "A rule would have done", text: "Months are spent on a model that performs no better than a simple threshold." },
        { icon: "Target", title: "No decision attached", text: "The model produces a score but nobody's work changes because of it." },
        { icon: "FlaskConical", title: "Tested once, never again", text: "Accuracy is checked at launch, then the model quietly drifts as the business changes." },
        { icon: "Eye", title: "Nobody can explain it", text: "Staff ignore predictions they cannot understand or question." },
        { icon: "Server", title: "Stuck in a notebook", text: "The model works on a data scientist's laptop but never reaches the systems staff use." },
      ],
    },
    services: {
      title: "What we build",
      intro: "Each model is tied to a decision someone makes today, and placed where they make it.",
      items: [
        { icon: "Route", title: "Classification & routing", text: "Sort requests, tickets, complaints and documents into categories so they reach the right person." },
        { icon: "TrendingUp", title: "Forecasting", text: "Demand, occupancy and stock forecasts so staffing and ordering are planned, not guessed." },
        { icon: "TriangleAlert", title: "Anomaly detection", text: "Flag unusual entries in billing or operations for a person to check." },
        { icon: "ScanText", title: "Document understanding", text: "Read forms, invoices and reports, pull out the fields that matter and hand them to your systems." },
        { icon: "Database", title: "Data readiness work", text: "Clean, join and label the records a model needs, which often improves reporting on its own." },
        { icon: "Activity", title: "Evaluation & monitoring", text: "Test models on held-back data, track performance after launch and retrain when it slips." },
      ],
    },
    tables: [
      {
        eyebrow: "Rule or model?",
        title: "When machine learning earns its place",
        intro: "We ask this question for every use case. Often the honest answer is a rule.",
        columns: ["Problem", "A simple rule works when", "Machine learning fits when"],
        rows: [
          ["Routing requests", "Requests arrive through fixed forms with clear categories", "Requests are free text and the wording varies widely"],
          ["Forecasting demand", "Demand is steady and a moving average is close enough", "Demand depends on season, day, events and several other factors"],
          ["Flagging billing errors", "Errors break a known limit, such as a duplicate charge", "Errors are unusual combinations no single limit catches"],
          ["Reading documents", "Documents follow one fixed layout", "Layouts vary by sender and change over time"],
        ],
        highlightLast: true,
      },
    ],
    process: {
      title: "How a machine learning project runs",
      intro: "A model is only worth building if it improves a real decision. We frame that decision, check the data, beat a simple baseline first, and keep monitoring the model once it is in use.",
      steps: [
        { title: "Frame the decision", text: "We agree the decision the model supports, who acts on it and what a useful result looks like." },
        { title: "Check the data", text: "We review what records exist, how complete they are and what needs cleaning before any model is trained." },
        { title: "Baseline first", text: "We measure how well a simple rule performs, so the model has something honest to beat." },
        { title: "Build and evaluate", text: "We train candidate models and test them on data they have not seen." },
        { title: "Put it to work", text: "The model is built into the workflow where the decision is made, with a person able to override it." },
        { title: "Monitor and retrain", text: "Performance is tracked after launch and the model is retrained when the data changes." },
      ],
    },
    stack: {
      title: "Our machine learning stack",
      groups: [
        { label: "Language & data", items: ["Python", "pandas", "NumPy", "SQL"] },
        { label: "Modelling", items: ["scikit-learn", "TensorFlow", "PyTorch"] },
        { label: "Serving", items: ["REST APIs", "Scheduled jobs", "Cloud or on-premise hosting"] },
      ],
      note: "Tooling is chosen per project to fit your data volume and where the model needs to run.",
    },
    industries: {
      title: "Where it fits",
      items: [
        { icon: "Hospital", title: "Hospitals & clinics", text: "Occupancy and footfall forecasts, billing anomaly checks and routing of patient messages." },
        { icon: "School", title: "Education", text: "Sorting enquiries and applications, and spotting students who may need follow-up." },
        { icon: "Package", title: "Growing businesses", text: "Stock forecasting, document reading and flagging unusual transactions." },
      ],
    },
    related: ["healthcare/health-data-analysis", "ai-development/llm-development-services", "product-engineering/python"],
    faq: [
      {
        q: "How do we know if we need machine learning?",
        a: "If a few clear rules would get most cases right, you probably do not. Machine learning fits when the pattern is real but too varied to write down. We test a simple rule first and only build a model if it clearly does better.",
      },
      {
        q: "How much data do we need?",
        a: "It depends on the problem. Forecasting usually needs at least a full cycle of history, such as a year. Classification needs enough labelled examples of each category. We check this before quoting a build.",
      },
      {
        q: "What if our data is messy?",
        a: "Most data is. We clean and join it as part of the project. Sometimes that work alone improves reporting enough that a model is no longer needed.",
      },
      {
        q: "How do you measure whether a model works?",
        a: "We test it on records it has not seen and compare it with the simple-rule baseline, using measures agreed with you upfront. We report the results plainly, including where it falls short.",
      },
      {
        q: "What happens after the model goes live?",
        a: "We monitor its performance, alert you if it drifts and retrain it when the data changes, for example after a new service line or a change in pricing.",
      },
      {
        q: "Is machine learning the same as using ChatGPT or other LLMs?",
        a: "No. Machine learning models are trained on your own structured data for a narrow prediction. Large language models work with text and language. Some projects use both.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  "llm-development-services": {
    seo: {
      title: "LLM Development Services & LLM Integration",
      description:
        "LLM development and integration for drafting, summarising, extraction and assistants, with model choice, evaluation, guardrails, cost control and private hosting.",
      keywords: [
        "LLM development services",
        "LLM integration services",
        "large language model development",
        "custom LLM applications",
        "private LLM deployment",
        "LLM evaluation and guardrails",
        "OpenAI and Claude integration",
        "LLM development company India",
      ],
    },
    hero: {
      highlight: "LLM",
      title: "Large language models *inside the work your team already does*",
      subtitle:
        "We integrate LLMs into real workflows for drafting, summarising, extraction, classification and assistants. The right model for the job, tested on your own examples, with guardrails and costs you can see.",
      chips: ["Drafting", "Summarising", "Extraction", "Classification", "Assistants", "Evaluation", "Guardrails", "Private hosting"],
      formTitle: "Where would an LLM help your team?",
      formMessageLabel: "Which text-heavy task takes the most time?",
    },
    definition: {
      eyebrow: "What it is",
      title: "What are LLM development services?",
      paragraphs: [
        "LLM development services are the work of integrating large language models into a business's software and workflows, so they draft, summarise, extract information, classify text or hold a conversation as part of a real process. It covers choosing a model, designing prompts and tests, adding guardrails and running it at a controlled cost.",
        "The model itself is a small part of the work. What makes an LLM feature useful is what surrounds it: the right records sent in, a clear instruction, checks on what comes out, and a person reviewing the output where it matters.",
        "We work with models from OpenAI, Anthropic (Claude) and Google (Gemini), as well as open models that can run on infrastructure you control. We choose by task, cost and where your data needs to stay, not by brand.",
      ],
    },
    problems: {
      title: "Why LLM features disappoint after launch",
      intro: "A good demo is easy. A feature your team relies on every day takes more care.",
      items: [
        { icon: "FlaskConical", title: "Tested on a few examples", text: "The prompt worked on five cases in a meeting and fails on the sixth in production." },
        { icon: "Wallet", title: "Costs nobody predicted", text: "Every request sends far more text than needed, and the monthly bill surprises everyone." },
        { icon: "ShieldCheck", title: "No guardrails", text: "The model answers questions it should refuse and invents details when information is missing." },
        { icon: "Lock", title: "Data sent where it should not go", text: "Sensitive records go to an external service without anyone deciding that was acceptable." },
        { icon: "RefreshCw", title: "Model changes break it", text: "A provider updates a model and output quality shifts with no tests to catch it." },
        { icon: "Puzzle", title: "Separate from the workflow", text: "Staff copy text into a chat window and back again instead of seeing the output where they work." },
      ],
    },
    services: {
      title: "What we build with LLMs",
      items: [
        { icon: "FileText", title: "Drafting", text: "Letters, replies, notes and reports drafted from your records for a person to review." },
        { icon: "ClipboardList", title: "Summarising", text: "Long case histories, call transcripts and threads reduced to what the reader needs." },
        { icon: "ScanText", title: "Extraction", text: "Names, dates, amounts and other fields pulled from free text and documents into structured records." },
        { icon: "Route", title: "Classification", text: "Free-text messages sorted by topic, urgency or sentiment and routed to the right team." },
        { icon: "MessageSquare", title: "Conversational assistants", text: "Assistants for staff or customers, connected to your systems and limited to approved topics." },
        { icon: "Activity", title: "Evaluation & monitoring", text: "Test sets built from your own examples, run on every change, with usage and quality tracked after launch." },
      ],
    },
    tables: [
      {
        eyebrow: "AI by stage",
        title: "Where the LLM works, and where a person decides",
        columns: ["Stage", "What the LLM does", "What stays human"],
        rows: [
          ["Input", "Reads the message, document or transcript", "Deciding which records it is allowed to see"],
          ["Processing", "Drafts, summarises, extracts or classifies", "Setting the instructions and the rules it must follow"],
          ["Checking", "Runs automated checks on format and content", "Reviewing anything that reaches a patient, customer or record"],
          ["Improving", "Logs output and flags low-confidence cases", "Deciding what changes when quality slips"],
        ],
        highlightLast: true,
      },
      {
        eyebrow: "Model choice",
        title: "Choosing the right kind of model",
        columns: ["Option", "Fits when", "Trade-off"],
        rows: [
          ["Hosted frontier models (e.g. OpenAI, Claude, Gemini)", "Tasks need strong reasoning or writing quality", "Data goes to the provider under their terms"],
          ["Smaller hosted models", "Tasks are simple and run at high volume", "Lower cost, but less capable on hard cases"],
          ["Open models on your infrastructure", "Data must stay within systems you control", "More set-up and hosting work on your side"],
        ],
        note: "We list these as models we work with, not partnerships. Hosting options are confirmed for each project.",
      },
    ],
    process: {
      title: "How an LLM feature is built",
      intro: "An LLM feature is defined by its task and judged on your own examples. We evaluate it before release and ship it with guardrails, so its behaviour is predictable and reviewable.",
      steps: [
        { title: "Define the task", text: "We agree the input, the expected output, who reviews it and what good looks like." },
        { title: "Collect examples", text: "We gather real cases from your work, including the difficult ones, to build a test set." },
        { title: "Choose and design", text: "We pick a model, write the prompts and decide what context is sent with each request." },
        { title: "Evaluate", text: "Each version is run against the test set, so changes are judged on results, not impressions." },
        { title: "Release with guardrails", text: "The feature goes live inside your workflow, with checks, reviewer sign-off and usage monitoring." },
      ],
    },
    compliance: {
      title: "Guardrails and data handling",
      intro: "Decided during planning, not after the first incident.",
      items: [
        "Named reviewer before output reaches a record",
        "Only relevant context sent to the model",
        "Usage and cost monitoring",
        "Refusal rules for out-of-scope requests",
        "Logging of inputs and outputs",
        "Role-based access to AI features",
        "Private deployment where data must stay with you",
      ],
      note: "Hosting set-up and the exact data rules are confirmed for each project, based on where you operate and the data involved.",
    },
    caseStudy: {
      id: "hospital-os-patient-portal-ai",
      title: "AI integrated into a hospital management system",
      intro: "A 50+ module HMS for a psychiatric and mental healthcare practice, delivered in three months with AI integration.",
    },
    related: ["ai-development/rag-development-services", "healthcare/natural-language-processing", "healthcare/clinical-documentation-ai"],
    faq: [
      {
        q: "Which LLM do you use?",
        a: "It depends on the task. We work with models from OpenAI, Anthropic (Claude), Google (Gemini) and open models, and choose based on quality on your examples, cost and where your data must stay.",
      },
      {
        q: "Can the model run without our data leaving our systems?",
        a: "Yes. Open models can be hosted on infrastructure you control. It costs more to set up and run, so we discuss whether your data requires it. Hosting options are confirmed for each project.",
      },
      {
        q: "How do you stop the model making things up?",
        a: "We give it only the relevant records, instruct it to say when information is missing, check its output automatically and have a person review anything that matters. For question answering we usually use retrieval so answers show their sources.",
      },
      {
        q: "How do you control costs?",
        a: "We send only the context each request needs, use smaller models where they are good enough and monitor usage so costs are visible per feature.",
      },
      {
        q: "Do you fine-tune models?",
        a: "Rarely as a first step. Most business tasks are handled well by a good prompt and the right context. We consider fine-tuning only when testing shows it is needed.",
      },
      {
        q: "What happens when the provider updates its model?",
        a: "We run the test set built from your examples against the new version before switching, so quality changes are caught before your team sees them.",
      },
      {
        q: "Can you add LLM features to our existing software?",
        a: "Usually, yes. We connect through your system's APIs and place the output where your team already works.",
      },
    ],
    cta: {
      title: "Bring us one text-heavy task",
      text: "Share a few real examples. We will show you what an LLM can do with them and what it should not be trusted with.",
    },
  },

  // ───────────────────────────────────────────────────────────────────────────
  "rag-development-services": {
    seo: {
      title: "RAG Development Services: AI on Your Own Data",
      description:
        "RAG development services that let AI answer from your records, policies and manuals, citing sources, with controlled costs and data kept in systems you control.",
      keywords: [
        "RAG development services",
        "retrieval augmented generation",
        "RAG chatbot development",
        "AI on company documents",
        "enterprise knowledge assistant",
        "RAG implementation company",
        "private RAG system",
      ],
    },
    hero: {
      highlight: "RAG",
      title: "AI that answers from *your own records, with sources*",
      subtitle:
        "Retrieval-augmented generation lets an assistant look up the relevant parts of your records, policies and manuals before it answers. Every answer shows where it came from, so your team can check it.",
      chips: ["Policies & manuals", "Case records", "Cited answers", "Access control", "Controlled costs", "Data stays with you"],
      formTitle: "What should your team be able to ask?",
      formMessageLabel: "Which documents do people search through most?",
    },
    definition: {
      eyebrow: "What it is",
      title: "What is RAG (retrieval-augmented generation)?",
      paragraphs: [
        "Retrieval-augmented generation (RAG) is a way of building AI assistants that first look up the most relevant passages in your own documents and records, then answer using only those passages and cite them. The model does not need to have been trained on your data. It reads what was retrieved, at the moment of the question.",
        "This matters because a general model knows nothing about your policies, prices or patients. Asked anyway, it guesses. With RAG the answer is grounded in your content, and when nothing relevant is found, the assistant can say so instead of inventing something.",
        "RAG also keeps costs and exposure down. Only the passages needed for a question are sent to the model, and the documents themselves stay in storage you control.",
      ],
      points: [
        { icon: "FileSearch", text: "Grounded answers that cite the source document" },
        { icon: "Wallet", text: "Only relevant passages sent, so costs stay controlled" },
        { icon: "Lock", text: "Documents stay in infrastructure you control" },
      ],
    },
    problems: {
      title: "Why document assistants give poor answers",
      intro: "When a RAG assistant gets things wrong, the cause is usually in retrieval, not the model.",
      items: [
        { icon: "Layers", title: "Out-of-date documents", text: "Old and new versions of a policy sit side by side, and the assistant quotes the wrong one." },
        { icon: "Search", title: "The wrong passage is found", text: "Documents are split carelessly, so the passage retrieved lacks the detail that answers the question." },
        { icon: "FileText", title: "No sources shown", text: "Staff cannot tell where an answer came from, so they either trust it blindly or ignore it." },
        { icon: "KeyRound", title: "Access ignored", text: "Everyone can retrieve everything, including records they should not see." },
        { icon: "TriangleAlert", title: "Answers when it should not", text: "When nothing relevant is found, the assistant fills the gap instead of saying so." },
        { icon: "Activity", title: "Never measured", text: "Nobody tracks which questions fail, so the same gaps stay open for months." },
      ],
    },
    services: {
      title: "What we build",
      items: [
        { icon: "Users", title: "Staff knowledge assistants", text: "Policies, procedures and manuals made searchable in plain language, with the source passage shown." },
        { icon: "MessageSquare", title: "Customer-facing assistants", text: "Answers for customers, patients or students from approved content only, with hand-off to a person." },
        { icon: "ClipboardList", title: "Assistants on case records", text: "Look up and summarise a customer's or patient's history across records, respecting who may see what." },
        { icon: "RefreshCw", title: "Document ingestion pipelines", text: "New and updated documents picked up automatically, with old versions retired." },
        { icon: "Lock", title: "Access-aware retrieval", text: "Retrieval filtered by role, so each user only gets answers from content they are allowed to see." },
        { icon: "BarChart3", title: "Answer quality tracking", text: "Unanswered and low-rated questions logged, so missing content and weak retrieval get fixed." },
      ],
    },
    tables: [
      {
        eyebrow: "Which approach fits",
        title: "RAG, or something simpler?",
        intro: "RAG is not always the answer. We match the approach to your question and your content.",
        columns: ["Approach", "Fits when", "Watch out for"],
        rows: [
          ["Rules or plain search", "Questions are predictable and the answers are short and fixed", "Breaks down when people phrase things differently"],
          ["RAG", "Answers live in your documents and records and change over time", "Needs well-kept documents and careful retrieval design"],
          ["Fine-tuning", "You need a consistent style or format across many outputs", "Does not keep facts current and costs more to update"],
          ["Plain LLM", "The task needs general knowledge, not your company's information", "Will guess about anything specific to your business"],
        ],
      },
      {
        eyebrow: "How it works",
        title: "Every stage of a RAG system",
        columns: ["Stage", "What happens", "What we check"],
        rows: [
          ["Ingest", "Documents and records are collected from where they live", "Only current, approved versions are included"],
          ["Chunk & index", "Content is split into passages and indexed for search", "Passages keep enough context to stand on their own"],
          ["Retrieve", "The most relevant passages are found for each question", "The right passages come back, filtered by user access"],
          ["Answer", "The model answers using only those passages and cites them", "The answer matches the sources, or says nothing was found"],
          ["Review", "A person checks answers where the stakes are high", "Reviewers can see sources and correct quickly"],
          ["Monitor", "Questions, answers and ratings are tracked", "Failed questions lead to content or retrieval fixes"],
        ],
      },
    ],
    process: {
      title: "From scattered documents to a working assistant",
      intro: "A useful assistant starts with the questions people really ask and the documents that should answer them. We get retrieval right first, then add answers with sources and human review.",
      steps: [
        { title: "Collect the questions", text: "We gather the questions people actually ask, from staff, inboxes and call logs." },
        { title: "Audit the content", text: "We check which documents answer them, which are out of date and what is missing." },
        { title: "Build retrieval first", text: "We tune how content is split and searched until the right passages come back for your questions." },
        { title: "Add answers and review", text: "The model answers from retrieved passages with sources, and a person reviews where it matters." },
        { title: "Launch and monitor", text: "We track failed and low-rated questions and fix the content or retrieval behind them." },
      ],
    },
    differentiators: {
      title: "What you can expect",
      items: [
        { icon: "FileSearch", title: "Sources on every answer", text: "Staff can open the passage an answer came from and check it in seconds." },
        { icon: "Search", title: "Retrieval tested first", text: "We measure whether the right passages are found before we judge the answers." },
        { icon: "ShieldCheck", title: "Says when it does not know", text: "If nothing relevant is found, the assistant says so or hands over to a person." },
        { icon: "Server", title: "Your data, your infrastructure", text: "Documents and indexes stay in systems you control. Hosting is confirmed per project." },
      ],
    },
    related: ["ai-development/llm-development-services", "ai-development/ai-agent-development", "healthcare/ai-agents-in-healthcare"],
    faq: [
      {
        q: "What kinds of documents can a RAG assistant use?",
        a: "Policies, manuals, procedures, FAQs, contracts, case notes and records from your systems. Text-based files work best. Scanned documents need text extraction first.",
      },
      {
        q: "Do we have to train a model on our data?",
        a: "No. RAG looks up the relevant passages at the moment of the question and gives them to the model. Your documents are not used to train it.",
      },
      {
        q: "How do we keep answers up to date?",
        a: "We set up ingestion so new and changed documents are picked up automatically and old versions retired. The answer changes as soon as the document does.",
      },
      {
        q: "Can different staff see different information?",
        a: "Yes. Retrieval is filtered by role, so a user only gets answers drawn from content they are already allowed to see.",
      },
      {
        q: "What happens when the answer is not in our documents?",
        a: "The assistant says it could not find it, and can hand the question to a named person. Those gaps are logged so you can add the missing content.",
      },
      {
        q: "Is RAG expensive to run?",
        a: "Running costs depend on usage and the model chosen. RAG helps keep them controlled, because only the few passages relevant to a question are sent to the model, and we monitor usage from day one.",
      },
      {
        q: "Can RAG be used with patient records?",
        a: "Yes, with access control, audit logging and data kept in infrastructure you control. A clinician reviews anything that reaches a patient or their record.",
      },
    ],
    cta: {
      title: "Send us the questions your team keeps asking",
      text: "We will check whether your documents can answer them, and whether RAG or something simpler is the right fit.",
    },
  },
}

export default aiDevelopment
