import "./servicepage.css"
import Navbar from "../Navbar"
import Footer from "../Footer"
import Reveal from "./Reveal"
import ServiceHero from "./ServiceHero"
import StatsStrip from "./StatsStrip"
import DefinitionBlock from "./DefinitionBlock"
import CardGrid from "./CardGrid"
import DataTable from "./DataTable"
import ProcessSteps from "./ProcessSteps"
import ChipGroups from "./ChipGroups"
import CaseStudyProof from "./CaseStudyProof"
import RelatedServices from "./RelatedServices"
import ServiceFAQ from "./ServiceFAQ"
import ServiceCTA from "./ServiceCTA"
import Section from "./Section"
import MediaBand from "./MediaBand"
import StickyShowcase from "./StickyShowcase"
import { getServicePage } from "@/data/servicePages"
import { bannerImage, showcaseImages } from "@/lib/serviceImages"
import { pickHeroVariant } from "@/lib/heroVariant"

const SITE_URL = "https://algonsolutions.com"
const RELATED_ICON = { healthcare: "Stethoscope", "ai-development": "Sparkles", "product-engineering": "Layers" }

// Resolve "type/slug" references into link cards.
function resolveRelated(refs = []) {
  return refs
    .map((ref) => {
      const [type, slug] = ref.split("/")
      const target = getServicePage(type, slug)
      if (!target) return null
      return {
        title: target.item.label,
        text: target.page.seo.description,
        href: target.item.href,
        icon: RELATED_ICON[type],
      }
    })
    .filter(Boolean)
    .slice(0, 3)
}

function jsonLd({ page, item, menu }) {
  const url = `${SITE_URL}${item.href}`
  const graph = [
    {
      "@type": "Service",
      name: item.label,
      description: page.seo.description,
      url,
      serviceType: item.label,
      category: menu.label,
      provider: { "@type": "Organization", name: "Algon Solutions", url: SITE_URL },
      areaServed: ["United States", "India", "United Arab Emirates"],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: menu.label, item: `${SITE_URL}/${menu.type}` },
        { "@type": "ListItem", position: 3, name: item.label, item: url },
      ],
    },
  ]
  if (page.faq?.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: page.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    })
  }
  return { "@context": "https://schema.org", "@graph": graph }
}

export default function ServicePage({ type, slug }) {
  const data = getServicePage(type, slug)
  if (!data) return null
  const { page, item } = data
  const name = item.label

  // Build the body sections in order, then alternate light/dark tones so
  // every page has the same rhythm whatever sections it uses.
  // Blocks marked `untoned` (the stats band, full-bleed image bands) sit
  // outside that rhythm.
  const blocks = []
  const banner = bannerImage(type, slug)
  if (page.definition) blocks.push((tone) => <DefinitionBlock key="def" tone={tone} {...page.definition} />)
  // Stats sit right under the definition, as their own light band
  if (page.stats?.length)
    blocks.push(Object.assign(() => <StatsStrip key="stats" items={page.stats} tone="light" />, { untoned: true }))
  if (banner)
    blocks.push(
      Object.assign(() => <MediaBand key="band" image={banner} alt={`${name} — Algon Solutions`} caption={page.media?.caption} />, {
        untoned: true,
      })
    )
  if (page.problems)
    blocks.push((tone) => <CardGrid key="problems" tone={tone} eyebrow="Why it stalls" numbered {...page.problems} />)
  if (page.services) {
    const images = showcaseImages(type, slug, page.services.items.length)
    blocks.push((tone) => (
      <StickyShowcase key="services" id="svp-services" tone={tone} eyebrow="What we build" images={images} {...page.services} />
    ))
  }
  ;(page.tables || []).forEach((t, i) =>
    blocks.push((tone) => <DataTable key={`table-${i}`} tone={tone} eyebrow={t.eyebrow || "In detail"} {...t} />)
  )
  if (page.process) blocks.push((tone) => <ProcessSteps key="process" tone={tone} {...page.process} />)
  if (page.stack) blocks.push((tone) => <ChipGroups key="stack" tone={tone} eyebrow="Technology" {...page.stack} />)
  if (page.industries)
    blocks.push((tone) => <CardGrid key="industries" tone={tone} eyebrow="Who it is for" {...page.industries} />)
  if (page.compliance)
    blocks.push((tone) => <ChipGroups key="compliance" tone={tone} eyebrow="Security & standards" {...page.compliance} />)
  if (page.differentiators)
    blocks.push((tone) => <CardGrid key="diff" tone={tone} eyebrow="Why Algon" {...page.differentiators} />)
  if (page.caseStudy) blocks.push((tone) => <CaseStudyProof key="proof" tone={tone} {...page.caseStudy} />)
  const related = resolveRelated(page.related)
  if (related.length) blocks.push((tone) => <RelatedServices key="related" tone={tone} items={related} />)
  if (page.faq?.length)
    blocks.push((tone) => (
      <Section key="faq" tone={tone} eyebrow="FAQ" title="Frequently asked questions" headerLayout="stack">
        <ServiceFAQ items={page.faq} />
      </Section>
    ))

  const rootId = `svp-${type}-${slug}`
  const heroPick = pickHeroVariant(type, slug, page.hero)

  return (
    // key: /healthcare/a → /healthcare/b reuses this route's components, so
    // GSAP effects wouldn't re-run and pins would keep the old page's
    // measurements. A new key per page remounts everything from scratch.
    <div key={rootId} id={rootId} className="svp">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(data)) }} />
      <Reveal rootId={rootId} />
      <Navbar />
      <ServiceHero
        variant={heroPick.variant}
        image={heroPick.image}
        serviceName={name}
        heading={page.hero.heading || name}
        hero={page.hero}
      />
      {(() => {
        let n = 0
        return blocks.map((render) => (render.untoned ? render() : render(n++ % 2 === 0 ? "light" : "dark")))
      })()}
      <ServiceCTA serviceName={name} {...page.cta} />
      <Footer />
    </div>
  )
}
