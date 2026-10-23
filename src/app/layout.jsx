import "../index.css";
import AppShell from "@/components/AppShell";

const SITE_URL = "https://algonsolutions.com";
const TITLE = "Algon Solutions — Hospital Management Systems, AI Automation & Engineering Teams";
const DESCRIPTION =
  "Algon Solutions is a systems and engineering firm in Kochi, India, building hospital management systems, clinic automation, AI and workflow automation, managed engineering teams, and web and SaaS platforms for clients in the USA, India and the UAE.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s | Algon Solutions" },
  description: DESCRIPTION,
  keywords: [
    // Healthcare (priority sector)
    "Hospital Management System",
    "Hospital Operating System",
    "HMS Software",
    "Hospital Software India",
    "Clinic Management Software",
    "Clinic Automation",
    "OPD IPD Management Software",
    "Pharmacy and Billing Software",
    "Patient Appointment and Reminder System",
    "IVR Patient Triage",
    "Healthcare Software Development",
    // AI & automation
    "AI Automation",
    "Workflow Automation",
    "n8n Automation",
    "AI Agent Development",
    "RAG Development",
    "Clinical Documentation AI",
    "AI Discharge Summary",
    // Managed engineering
    "Managed Engineering Services",
    "Dedicated Development Team",
    "Offshore Engineering Team India",
    // Web & SaaS
    "Web Application Development",
    "SaaS Development",
    "MVP Development",
    "Dashboards and Internal Tools",
    // Supporting
    "Cybersecurity",
    "HIPAA Compliant Software",
    // Company / location
    "Algon Solutions",
    "Software Company Kochi",
    "IT Company Kerala",
  ],
  authors: [{ name: "Algon Solutions" }],
  applicationName: "Algon Solutions",
  robots: { index: true, follow: true },
  alternates: { canonical: "./" },
  verification: { google: "UhBrU_GnK7qTwhOCvQu_5kjtCKMSEeLejblWoyVRkm4" },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png?v=2", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  appleWebApp: { capable: true, statusBarStyle: "black" },
  openGraph: {
    title: "Algon Solutions — The Operational Layer of Your Business",
    description:
      "Hospital management systems, clinic automation, AI and workflow automation, managed engineering teams, and web and SaaS platforms, built around how your organisation actually runs.",
    type: "website",
    siteName: "Algon Solutions",
    images: [`${SITE_URL}/og-image.webp`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Algon Solutions — Hospital Systems, AI & Engineering Teams",
    description:
      "Hospital operating systems, clinic automation, AI and workflow automation, and dedicated engineering teams. Kochi, India, serving the USA, India and the UAE.",
    images: [`${SITE_URL}/og-image.webp`],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050508",
};

const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Algon Solutions",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/og-image.webp`,
  description: DESCRIPTION,
  email: "support@algonsolutions.com",
  telephone: "+91-7306060741",
  foundingDate: "2023",
  foundingLocation: { "@type": "Place", name: "Kochi, Kerala, India" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "BCG Tower, 11F1, opp. CSEZ, Kakkanad",
    addressLocality: "Kochi",
    addressRegion: "Kerala",
    postalCode: "682037",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.instagram.com/algonofficial",
    "https://www.linkedin.com/company/algonsolutions/",
  ],
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "United Arab Emirates" },
  ],
  knowsAbout: [
    "Hospital Management Systems",
    "Clinic Automation",
    "Healthcare Software",
    "AI Automation",
    "Workflow Automation",
    "Retrieval-Augmented Generation",
    "Managed Engineering Services",
    "Web Application Development",
    "SaaS Development",
    "Cybersecurity",
  ],
  makesOffer: [
    ["Hospital Management Systems", "Hospital operating systems covering front desk, OPD/IPD, nursing, pharmacy, OT, billing, discharge and follow-up, plus clinic automation for appointments, reminders, follow-ups and IVR patient triage."],
    ["AI & Automation", "Workflow automation, AI agents, clinical documentation, discharge summaries and retrieval-based (RAG) AI on the client's own records."],
    ["Managed Engineering Services", "A dedicated team of architects, developers, QA, cloud and DevOps engineers and a project lead for a defined project and period."],
    ["Web & SaaS Development", "Web applications, SaaS platforms, MVPs, dashboards and internal tools."],
  ].map(([name, description]) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name, description },
  })),
};

export default function RootLayout({ children }) {
  return (
    // suppressHydrationWarning: the home page adds a "splash-seen" class to
    // <html> before hydration (see app/page.jsx) — expected, not a mismatch.
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSON_LD) }}
        />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
