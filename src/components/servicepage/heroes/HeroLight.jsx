import LeadForm from "../LeadForm"
import { HeroCtas, HeroHeading, HeroTagline, HeroTags } from "./heroParts"

// Variant "light": paper background, dark text, light form card. Asks the
// navbar for its dark theme. Pairs naturally with a light section after it.
// Left-aligned at every size, like the other two-column heroes.
export default function HeroLight({ heading, hero, serviceName }) {
  const { title, highlight, highlightStyle, chips, primaryCta, secondaryCta, formTitle, formMessageLabel } = hero

  return (
    <section data-navbar="dark" className="svp-section svp-light svp-hero svp-hero--light">
      <div className="svp-inner grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-12 xl:gap-20 lg:items-center">
        <div className="flex flex-col gap-7">
          <HeroHeading heading={heading} highlight={highlight} highlightStyle={highlightStyle} />
          <HeroTagline text={title} className="max-w-[30ch]" />
          <HeroCtas primaryCta={primaryCta} secondaryCta={secondaryCta} onLight />
          <HeroTags chips={chips} />
        </div>

        <div className="w-full max-w-[560px] lg:max-w-none">
          <LeadForm
            service={serviceName}
            title={formTitle || "Tell us the bottleneck"}
            messageLabel={formMessageLabel || "What is getting stuck?"}
            compact
          />
        </div>
      </div>
    </section>
  )
}
