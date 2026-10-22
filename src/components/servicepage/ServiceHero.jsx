import Link from "next/link"
import LeadForm from "./LeadForm"

// Dark hero: breadcrumb, H1 (wrap a phrase in *asterisks* to highlight it),
// subtitle, two CTAs, a chip strip, and the enquiry form on the right.
function renderTitle(title) {
  return title.split(/(\*[^*]+\*)/g).map((part, i) =>
    part.startsWith("*") && part.endsWith("*") ? <em key={i}>{part.slice(1, -1)}</em> : part
  )
}

export default function ServiceHero({ crumbs = [], hero, serviceName }) {
  const { title, subtitle, chips = [], primaryCta = "Talk to us", secondaryCta = "See what we build", formTitle, formMessageLabel } = hero

  return (
    <section data-navbar="light" className="svp-section svp-dark svp-hero">
      <div className="svp-grain" aria-hidden="true" />
      <div className="svp-orb -top-[20%] -right-[10%]" aria-hidden="true" />

      <div className="svp-inner grid gap-14 lg:grid-cols-[1.25fr_1fr] lg:gap-20 lg:items-center">
        <div className="flex flex-col gap-8">
          {crumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="svp-crumb">
              {crumbs.map((c, i) => (
                <span key={c.label}>
                  {c.href ? <Link href={c.href}>{c.label}</Link> : <span className="text-white/80">{c.label}</span>}
                  {i < crumbs.length - 1 && <span className="mx-2">/</span>}
                </span>
              ))}
            </nav>
          )}

          <h1 className="svp-h1">{renderTitle(title)}</h1>
          <p className="svp-lead max-w-[60ch]">{subtitle}</p>

          <div className="flex flex-wrap gap-4">
            <a href="#svp-contact" className="svp-btn svp-btn--primary">{primaryCta}</a>
            <a href="#svp-services" className="svp-btn svp-btn--ghost">{secondaryCta}</a>
          </div>

          {chips.length > 0 && (
            <ul className="flex flex-wrap gap-2 pt-2" aria-label="Covers">
              {chips.map((c) => (
                <li key={c} className="svp-chip">{c}</li>
              ))}
            </ul>
          )}
        </div>

        <LeadForm
          service={serviceName}
          title={formTitle || "Tell us the bottleneck"}
          messageLabel={formMessageLabel || "What is getting stuck?"}
          compact
        />
      </div>
    </section>
  )
}
