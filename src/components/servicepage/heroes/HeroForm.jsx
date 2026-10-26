import LeadForm from "../LeadForm"
import { HeroCtas, HeroHeading, HeroTagline, HeroTags } from "./heroParts"

// Variant "form" (the original): dark, text on the left, enquiry form on the right.
export default function HeroForm({ heading, hero, serviceName }) {
  const { title, highlight, highlightStyle, chips, primaryCta, secondaryCta, formTitle, formMessageLabel } = hero

  return (
    <section data-navbar="light" className="svp-section svp-dark svp-hero">
      <div className="svp-grain" aria-hidden="true" />
      {/* <div className="svp-orb -top-[20%] -right-[10%]" aria-hidden="true" /> */}

      <div className="svp-inner grid gap-14 lg:grid-cols-[1.25fr_1fr] lg:gap-20 lg:items-center">
        <div className="flex flex-col gap-7">
          <HeroHeading heading={heading} highlight={highlight} highlightStyle={highlightStyle} className="text-center lg:text-start" />
          <HeroTagline text={title} className="text-center lg:text-start max-w-[30ch] mx-auto lg:mx-0" />
          <HeroCtas primaryCta={primaryCta} secondaryCta={secondaryCta} className="justify-center lg:justify-start" />
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
