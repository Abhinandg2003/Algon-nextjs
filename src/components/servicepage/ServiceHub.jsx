import "./servicepage.css"
import Navbar from "../Navbar"
import Footer from "../Footer"
import Reveal from "./Reveal"
import ServiceHero from "./ServiceHero"
import CardGrid from "./CardGrid"
import ServiceCTA from "./ServiceCTA"
import MediaBand from "./MediaBand"
import { NAV_MENUS } from "@/data/navMenus"
import { SERVICE_PAGES } from "@/data/servicePages"
import { bannerImage } from "@/lib/serviceImages"

// Category landing page (/healthcare, /ai-development, /product-engineering):
// every service in the menu, grouped as in the navbar, each linking to its page.
export const HUB_COPY = {
  healthcare: {
    title: "Systems that carry a patient from *front desk to follow-up*",
    subtitle:
      "Healthcare is our priority sector. We build systems that get a patient from the front desk to follow-up with every step owned, recorded and visible to management.",
    chips: ["Hospitals", "Clinics", "Diagnostic centres", "Healthcare product companies", "Medical distributors"],
  },
  "ai-development": {
    title: "AI and automation, *in that order*",
    subtitle:
      "We automate the repetitive work first, then add AI to specific, checkable jobs once the process is clean and the data is reliable.",
    chips: ["Workflow automation", "AI agents", "RAG on your data", "LLM integration"],
  },
  "product-engineering": {
    title: "Software built around *how you operate*",
    subtitle:
      "Web and SaaS builds, MVPs for founders, modernisation of systems that no longer fit, and dedicated engineering teams for a defined project and period.",
    chips: ["MVPs", "Web & SaaS", "Modernisation", "Dedicated teams"],
  },
}

export default function ServiceHub({ type }) {
  const menu = NAV_MENUS.find((m) => m.type === type)
  const copy = HUB_COPY[type]
  const pages = SERVICE_PAGES[type] || {}
  const rootId = `svp-hub-${type}`
  const banner = bannerImage(type)

  return (
    <div id={rootId} className="svp">
      <Reveal rootId={rootId} />
      <Navbar />
      <ServiceHero
        serviceName={menu.label}
        heading={`${menu.label} services`}
        hero={{ ...copy, secondaryCta: "See all services" }}
        crumbs={[{ label: "Home", href: "/" }, { label: menu.label }]}
      />
      {banner && <MediaBand image={banner} alt={`${menu.label} services — Algon Solutions`} />}
      {menu.groups.map((g, i) => (
        <CardGrid
          key={g.title}
          id={i === 0 ? "svp-services" : undefined}
          tone={i % 2 === 0 ? "light" : "dark"}
          eyebrow={menu.label}
          title={g.title}
          items={g.items.map((it) => ({
            title: it.label,
            text: pages[it.slug]?.seo.description || "",
            href: it.href,
          }))}
        />
      ))}
      <ServiceCTA serviceName={menu.label} />
      <Footer />
    </div>
  )
}
