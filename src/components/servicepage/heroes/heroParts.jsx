// Shared building blocks for every hero variant, so heading/tagline/CTA/tag
// behaviour stays identical whichever layout a page gets.

// H1: the service name, all in one colour (white on the dark heroes).
// Pages may still carry `highlight` / `highlightStyle` from the old
// brand-colour mark; they're ignored now.
export function HeroHeading({ heading, className = "" }) {
  return <h1 className={`svp-h1 ${className}`}>{heading}</h1>
}

// Tagline: hero.title; wrap a phrase in *asterisks* to colour it.
export function HeroTagline({ text, className = "" }) {
  if (!text) return null
  return (
    <p className={`svp-tagline ${className}`}>
      {text.split(/(\*[^*]+\*)/g).map((part, i) =>
        part.startsWith("*") && part.endsWith("*") ? <em key={i}>{part.slice(1, -1)}</em> : part
      )}
    </p>
  )
}

// Primary + secondary CTAs. `onLight` swaps the outline button to its dark
// version for the light hero.
export function HeroCtas({ primaryCta = "Talk to us", secondaryCta = "See what we build", onLight = false, className = "" }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <a href="#svp-contact" className="svp-btn svp-btn--primary">{primaryCta}</a>
      <a href="#svp-services" className={`svp-btn ${onLight ? "svp-btn--outline-dark" : "svp-btn--outline"}`}>{secondaryCta}</a>
    </div>
  )
}

// Plain text tags separated by "·" (the separator is decorative, so screen
// readers just hear the list items).
export function HeroTags({ chips = [], className = "" }) {
  if (!chips.length) return null
  return (
    <ul className={`svp-hero-tags flex flex-wrap gap-x-1 gap-y-1 pt-1 ${className}`} aria-label="Covers">
      {chips.map((c, i) => (
        <li key={c} className="flex items-center gap-1">
          {i > 0 && <span aria-hidden="true" className="svp-hero-tags-sep">·</span>}
          {c}
        </li>
      ))}
    </ul>
  )
}
