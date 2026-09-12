export const profile = {
  name: "Nikhilesh Ramoliya",
  firstName: "Nikhilesh",
  lastName: "Ramoliya",
  monogram: "NR",
  title: "Senior Software Engineer",
  company: "Lanatus Systems",
  location: "Ahmedabad, Gujarat",
  email: "nikhileshramoliya@gmail.com",
  phone: "+91 84691 75299",
  phoneHref: "tel:+918469175299",
  linkedin: "https://www.linkedin.com/in/nikhileshramoliya",
  instagram: "https://www.instagram.com/niks.patel25/",
  resume: "/Nikhilesh-Ramoliya-Resume.pdf",
  availability: "Open to conversations",
};

export const impact = [
  { value: 66, suffix: "%", label: "AWS cost cut", detail: "$12k → $4k / month" },
  { value: 90, suffix: "%", label: "Faster apps", detail: "Queries, indexes, render" },
  { value: 40, suffix: "%", label: "Less deploy toil", detail: "AWS CodePipeline" },
  { value: 50, suffix: "", label: "HD live feeds", detail: "Concurrent streams" },
];

export const featured = [
  {
    id: "raspberry",
    index: "01",
    name: "Figment",
    kind: "AI design assistant",
    year: "2024 — now",
    href: null,
    art: "nodes",
    summary:
      "An agentic co-creator on an infinite canvas. People talk to it in plain language; it generates, connects, and arranges image nodes on its own.",
    points: [
      "Reasoning engine in Python, LangChain, and LangGraph that chooses which canvas tools to run from the prompt.",
      "FastAPI streams live agent activity to the board so the work feels present, not hidden in a spinner.",
      "Backend asset pipeline plus production Sentry triage to keep the board shipping.",
    ],
    stack: ["React", "Supabase", "Python", "FastAPI", "LangChain", "LangGraph", "LangSmith"],
  },
  {
    id: "retainly",
    index: "02",
    name: "Pact",
    kind: "Contracts & invoicing",
    year: "SaaS platform",
    href: null,
    art: "ledger",
    summary:
      "Enterprise contract and payment platform — users, projects, templates, invoices, and collection in one place, with a real editor instead of a PDF graveyard.",
    points: [
      "RBAC across the whole object graph: people, projects, contracts, templates, invoices.",
      "Custom Tiptap contract editor with one-time, installment, and recurring Stripe collection.",
      "Shopify, Redis, and BullMQ in the background so billing jobs stay reliable under load.",
    ],
    stack: ["Next.js", "NestJS", "PostgreSQL", "Stripe", "Shopify", "Redis", "BullMQ", "Docker"],
  },
  {
    id: "apyhub",
    index: "03",
    name: "Apyhub",
    kind: "API studio",
    year: "2 releases / 2 months",
    href: null,
    art: "grid",
    summary:
      "A Notion-style API testing studio with live hooks into the tools teams already live in — plus a CLI for the same checks in CI.",
    points: [
      "Integrations with Jira, Confluence, GitHub Issues, and Postman.",
      "Lightweight CLI for cloud and automated pipeline testing.",
      "Fifteen screens and two major releases shipped in two months.",
    ],
    stack: ["React", "Node.js", "PostgreSQL", "Docker", "CLI", "Yarn Workspaces"],
  },
  {
    id: "mansion",
    index: "04",
    name: "Mansion Voyeur",
    kind: "Live video platform",
    year: "Scale",
    href: "https://mansionvoyeur.com/",
    image: "mansion",
    summary:
      "Live ingestion, streaming, and automated VoD on AWS — built to hold fifty simultaneous HD feeds without lighting money on fire.",
    points: [
      "S3, EC2, and RDS architecture for live video and recording.",
      "Stripe and PayPal checkout for subscribers and minute buyers.",
      "Cloud tuning that dropped monthly infra from $12,000 to $4,000.",
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "AWS", "Stripe", "PayPal"],
  },
];

export const archive = [
  {
    name: "Butterneck",
    kind: "Project management",
    href: "https://app.butterneck.com/",
    blurb: "Time tracker, role system, and a socket-synced task board. Dual environments on EC2 via CodePipeline.",
    stack: ["React", "NestJS", "PostgreSQL", "AWS", "Razorpay"],
  },
  {
    name: "DragonArmy.ai",
    kind: "Satellite alerts",
    href: "https://dragonarmy.ai/",
    blurb: "Alert management with precise admin RBAC and a caching layer for the hot path.",
    stack: ["React", "NestJS", "GraphQL", "PostgreSQL", "AWS"],
  },
  {
    name: "HandsOn Booking",
    kind: "Clinic booking",
    href: "https://handsonbooking.dk/",
    blurb: "Doctor booking with a Dinero bridge for import and export of accounting data.",
    stack: ["React", "Node.js", "PostgreSQL"],
  },
  {
    name: "BigBeyond",
    kind: "Luxury marketplace",
    href: "https://bigbeyond.com/",
    blurb: "Limited-edition physical and digital goods, 3D viewing, Stripe, and an AWS-deployed admin.",
    stack: ["React", "Node.js", "Stripe", "AWS", "PostgreSQL"],
  },
  {
    name: "FreighTrack",
    kind: "Logistics quoting",
    href: null,
    blurb: "Inquiry and quotation tool built from scratch, with import-export calculators and URL-preserved state.",
    stack: ["React", "NestJS", "PostgreSQL"],
  },
  {
    name: "Beyond",
    kind: "Wallet app",
    href: null,
    blurb: "Luxury wallet for physical and digital goods on a Kafka microservice backbone.",
    stack: ["React Native", "NestJS", "Kafka", "Stripe", "PostgreSQL"],
  },
];

export const experience = {
  role: "Senior Software Engineer",
  company: "Lanatus Systems",
  location: "Ahmedabad, Gujarat, India",
  dates: "October 2022 — Present",
  intro:
    "I lead backend and microservice architecture for SaaS and live-streaming products that have to stay up for thousands of people — and stay cheap enough to keep running.",
  points: [
    "Cut AWS spend 66% ($12,000 → $4,000 / month) by reshaping architecture and right-sizing resources.",
    "Made the product 90% faster through PostgreSQL query work, indexes, and calmer frontend rendering.",
    "Built CodePipeline CI/CD that took 40% of the toil out of releases.",
    "Shipped Stripe subscription engines for one-time and recurring billing, on the calendar we promised.",
    "Designed Kafka-backed services, RBAC, REST, WebSockets, and the glue between them.",
  ],
};

export const education = [
  {
    name: "Bachelor of Engineering",
    place: "Government Engineering College, Rajkot",
    dates: "2018 — 2022",
  },
  {
    name: "High School Diploma",
    place: "Purohit Science School, Jamnagar",
    dates: "2016 — 2018",
  },
];

export const skillGroups = [
  { label: "Languages", items: ["JavaScript", "TypeScript", "Python"] },
  { label: "AI & agents", items: ["LangChain", "LangGraph", "LangSmith", "LLMs", "Agentic workflows"] },
  { label: "Frontend", items: ["React", "Next.js", "Redux", "React Query", "Material UI"] },
  { label: "Backend", items: ["Node.js", "NestJS", "Express", "FastAPI", "Supabase"] },
  { label: "Data", items: ["PostgreSQL", "MongoDB", "MySQL"] },
  { label: "Cloud", items: ["AWS", "Docker", "NGINX", "CI/CD", "NX monorepo"] },
  { label: "Payments", items: ["Stripe", "PayPal", "Cashfree"] },
  { label: "Systems", items: ["Kafka", "RBAC", "REST", "WebSockets", "Micro-frontends"] },
];
