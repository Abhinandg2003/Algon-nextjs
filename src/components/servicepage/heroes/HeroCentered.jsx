import { HeroCtas, HeroHeading, HeroTagline, HeroTags } from "./heroParts"

// Variant "centered": dark statement hero — everything centred in one column,
// larger heading, no second column. "Talk to us" scrolls to the bottom form.
export default function HeroCentered({ heading, hero }) {
  const { title, highlight, highlightStyle, chips, primaryCta, secondaryCta } = hero

  return (
    <section data-navbar="light" className="svp-section svp-dark svp-hero svp-hero--centered">
      <div className="svp-grain" aria-hidden="true" />

      <div className="svp-inner flex flex-col items-center gap-8 text-center">
        <HeroHeading heading={heading} highlight={highlight} highlightStyle={highlightStyle} className="svp-h1--xl max-w-[16ch]" />
        <HeroTagline text={title} className="max-w-[36ch]" />
        <HeroCtas primaryCta={primaryCta} secondaryCta={secondaryCta} className="justify-center" />
        <HeroTags chips={chips} className="justify-center max-w-[70ch]" />
      </div>
    </section>
  )
}
