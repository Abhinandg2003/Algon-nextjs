import "../index.css";
import AppShell from "@/components/AppShell";

const SITE_URL = "https://algonsolutions.com";
const TITLE = "Algon Solutions — SaaS, AI, Web Development, Cybersecurity & Digital Growth";
const DESCRIPTION =
  "Algon Solutions is a modern technology company delivering SaaS platforms, AI solutions, web development, cybersecurity, Shopify ecommerce, blockchain, HMS systems, MVP development, branding, and digital growth solutions.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s | Algon Solutions" },
  description: DESCRIPTION,
  keywords:
    "Algon Solutions, SaaS Development, Web Development, Web Design, Shopify Development, AI Solutions, Cybersecurity, Blockchain Development, Web3, Hospital Management System, HMS, MVP Development, Branding Agency, Digital Marketing, Startup Development, Kerala IT Company",
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
    title: "Algon Solutions — Building Modern Digital Ecosystems",
    description:
      "SaaS platforms, AI systems, modern web experiences, cybersecurity, Shopify ecommerce, branding, Web3, and scalable digital products.",
    type: "website",
    siteName: "Algon Solutions",
    images: [`${SITE_URL}/og-image.webp`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Algon Solutions — SaaS, AI & Digital Innovation",
    description:
      "Transforming businesses through scalable SaaS platforms, AI, cybersecurity, branding, and modern digital solutions.",
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
  description:
    "Algon Solutions is a technology company delivering SaaS platforms, AI systems, web development, cybersecurity, Shopify ecommerce, Web3, blockchain, MVP development, and digital growth solutions.",
  email: "support@algonsolutions.com",
  telephone: "+91XXXXXXXXXX",
  foundingLocation: { "@type": "Place", name: "Kochi, Kerala, India" },
  sameAs: [
    "https://www.instagram.com/algonofficial",
    "https://www.linkedin.com/company/algonsolutions/",
  ],
  areaServed: "Worldwide",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="video" href="/algon intro black.mp4" />
        <link rel="preload" as="video" href="/algon intro black mb.mp4" />
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
