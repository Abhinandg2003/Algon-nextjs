import { HeroCtas, HeroHeading, HeroTagline, HeroTags } from "./heroParts"

// Variant "image": dark, text on the left, a chosen image on the right.
// No form here — "Talk to us" scrolls to the enquiry form at the bottom.
// The image is the page's main visual, so it loads eagerly with high priority.
// Left-aligned at every size; below lg the image stacks under the text.
export default function HeroImage({ heading, hero, image }) {
  const { title, highlight, highlightStyle, chips, primaryCta, secondaryCta, imageAlt } = hero

  return (
    <section data-navbar="light" className="svp-section svp-dark svp-hero">
      <div className="svp-grain" aria-hidden="true" />

      <div className="svp-inner grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-12 xl:gap-16 lg:items-center">
        <div className="flex flex-col gap-7">
          <HeroHeading heading={heading} highlight={highlight} highlightStyle={highlightStyle} />
          <HeroTagline text={title} className="max-w-[30ch]" />
          <HeroCtas primaryCta={primaryCta} secondaryCta={secondaryCta} />
          <HeroTags chips={chips} />
        </div>

        <div className="svp-hero-media relative w-full max-w-[720px] lg:max-w-none aspect-[4/3] max-h-[60vh] lg:aspect-[4/5] lg:max-h-[72vh]">
          <img
            src={image}
            alt={imageAlt || `${heading} — Algon Solutions`}
            className="absolute inset-0 h-full w-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
          <div className="svp-hero-media-shade" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
