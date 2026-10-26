import Link from "next/link"
import LeadForm from "./LeadForm"

// Dark hero, styled like the site's other page heroes:
//   H1      — the service name, with one part marked in the brand colour
//             (`highlight`, default: the last word; `highlightStyle` "bg" | "text")
//   tagline — hero.title; wrap a phrase in *asterisks* to colour it
//   subtitle, two CTAs, a chip strip, and the enquiry form on the right.

function renderHeading(heading, highlight, style) {
  const mark = highlight && heading.includes(highlight) ? highlight : heading.split(" ").pop()
  const at = heading.lastIndexOf(mark)
  const before = heading.slice(0, at).trimEnd()
  const after = heading.slice(at + mark.length)
  return (
    <>
      {before && `${before} `}
      <span className={style === "text" ? "svp-h1-mark--text" : "svp-h1-mark"}>{mark}</span>
      {after}
    </>
  )
}

function renderTagline(text) {
  return text.split(/(\*[^*]+\*)/g).map((part, i) =>
    part.startsWith("*") && part.endsWith("*") ? <em key={i}>{part.slice(1, -1)}</em> : part
  )
}

export default function ServiceHero({ crumbs = [], heading, hero, serviceName }) {
  const {
    title,
    subtitle,
    highlight,
    highlightStyle = "bg",
    chips = [],
    primaryCta = "Talk to us",
    secondaryCta = "See what we build",
    formTitle,
    formMessageLabel,
  } = hero

  return (
    <section data-navbar="light" className="svp-section svp-dark svp-hero">
      <div className="svp-grain" aria-hidden="true" />
      {/* <div className="svp-orb -top-[20%] -right-[10%]" aria-hidden="true" /> */}

      <div className="svp-inner grid gap-14 lg:grid-cols-[1.25fr_1fr] lg:gap-20 lg:items-center">
        <div className="flex flex-col gap-7">
          {/* {crumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="svp-crumb">
              {crumbs.map((c, i) => (
                <span key={c.label}>
                  {c.href ? <Link href={c.href}>{c.label}</Link> : <span className="text-white/80">{c.label}</span>}
                  {i < crumbs.length - 1 && <span className="mx-2">/</span>}
                </span>
              ))}
            </nav>
          )} */}

          <h1 className="svp-h1 text-center lg:text-start">{renderHeading(heading, highlight, highlightStyle)}</h1>
          {title && <p className="svp-tagline text-center lg:text-start max-w-[30ch] mx-auto lg:mx-0">{renderTagline(title)}</p>}
          {/* <p className="svp-hero-sub text-center lg:text-start max-w-[58ch] mx-auto lg:mx-0">{subtitle}</p> */}

          <div className="flex flex-wrap justify-center lg:justify-start gap-3">
            <a href="#svp-contact" className="svp-btn svp-btn--primary">{primaryCta}</a>
            <a href="#svp-services" className="svp-btn svp-btn--outline">{secondaryCta}</a>
          </div>

          {chips.length > 0 && (
            // Plain text tags separated by "•" (the separator is decorative,
            // so screen readers just hear the list items)
            <ul className="svp-hero-tags flex flex-wrap justify-center lg:justify-start gap-x-1 gap-y-1 pt-1" aria-label="Covers">
              {chips.map((c, i) => (
                <li key={c} className="flex items-center gap-1">
                  {i > 0 && <span aria-hidden="true" className="svp-hero-tags-sep">·</span>}
                  {c}
                </li>
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
