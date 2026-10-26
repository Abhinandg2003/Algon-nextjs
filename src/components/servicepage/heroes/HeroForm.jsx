import LeadForm from "../LeadForm"
import { HeroCtas, HeroHeading, HeroTagline, HeroTags } from "./heroParts"

// Variant "form" (the original): dark, text on the left, enquiry form on the right.
// Two-column heroes are left-aligned at every size; below lg the form stacks
// under the text at a readable width.
export default function HeroForm({ heading, hero, serviceName }) {
  const { title, highlight, highlightStyle, chips, primaryCta, secondaryCta, formTitle, formMessageLabel } = hero

  return (
    <section data-navbar="light" className="svp-section svp-dark svp-hero">
      <div className="svp-grain" aria-hidden="true" />
      {/* <div className="svp-orb -top-[20%] -right-[10%]" aria-hidden="true" /> */}

      <div className="svp-inner grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-12 xl:gap-20 lg:items-center">
        <div className="flex flex-col gap-7">
          <HeroHeading heading={heading} highlight={highlight} highlightStyle={highlightStyle} />
          <HeroTagline text={title} className="max-w-[30ch]" />
          <HeroCtas primaryCta={primaryCta} secondaryCta={secondaryCta} />
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
