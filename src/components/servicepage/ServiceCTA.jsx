import LeadForm from "./LeadForm"

// Closing section: "Bring us your bottleneck" + the full enquiry form.
export default function ServiceCTA({
  serviceName,
  title = "Bring us your bottleneck.",
  text = "If a process in your organisation depends on one person remembering to follow up, describe it to us. You will get a straight answer on whether it needs automation, software, a team, or none of these.",
}) {
  return (
    <section id="svp-contact" data-navbar="light" className="svp-section svp-dark">
      <div className="svp-grain" aria-hidden="true" />
      <div className="svp-orb -bottom-[25%] -left-[10%]" aria-hidden="true" />
      <div className="svp-inner grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:items-center">
        <div className="svp-reveal flex flex-col gap-6">
          {/* <span className="svp-eyebrow">Start here</span> */}
          <h2 className="svp-h1 !text-[clamp(40px,5vw,80px)]">{title}</h2>
          <p className="svp-lead max-w-[52ch]">{text}</p>
          <p className="svp-body">
            Or write directly to{" "}
            <a href="mailto:support@algonsolutions.com" className="text-white underline underline-offset-4 break-all">
              support@algonsolutions.com
            </a>
          </p>
        </div>
        <div className="svp-reveal">
          <LeadForm service={serviceName} title="Describe the bottleneck" submitLabel="Get a straight answer" />
        </div>
      </div>
    </section>
  )
}
