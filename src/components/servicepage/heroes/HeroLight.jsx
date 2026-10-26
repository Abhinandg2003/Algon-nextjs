import LeadForm from "../LeadForm"
import { HeroCtas, HeroHeading, HeroTagline, HeroTags } from "./heroParts"

// Variant "light": paper background, dark text, light form card. Asks the
// navbar for its dark theme. Pairs naturally with a light section after it.
export default function HeroLight({ heading, hero, serviceName }) {
  const { title, highlight, highlightStyle, chips, primaryCta, secondaryCta, formTitle, formMessageLabel } = hero

  return (
    <section data-navbar="dark" className="svp-section svp-light svp-hero svp-hero--light">
      <div className="svp-inner grid gap-14 lg:grid-cols-[1.25fr_1fr] lg:gap-20 lg:items-center">
        <div className="flex flex-col gap-7">
          <HeroHeading heading={heading} highlight={highlight} highlightStyle={highlightStyle} className="text-center lg:text-start" />
          <HeroTagline text={title} className="text-center lg:text-start max-w-[30ch] mx-auto lg:mx-0" />
          <HeroCtas primaryCta={primaryCta} secondaryCta={secondaryCta} onLight className="justify-center lg:justify-start" />
          <HeroTags chips={chips} className="justify-center lg:justify-start" />
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
