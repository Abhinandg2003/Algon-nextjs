import Section from "./Section"

// Always dark: it's styled as a dark card, so it must also tell the navbar
// to use its light (white) theme.
export default function StatsStrip({ items }) {
  return (
    <Section tone="dark" className="!py-16 md:!py-20 my-10 mb-20 !bg-[#07070A] border border-white/30 !rounded-none mx-auto rounded-3xl md:max-w-[90vw]">
      <dl className={`grid gap-10 sm:grid-cols-2 ${items.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
        {items.map((s) => (
          <div key={s.label} className="svp-stat svp-reveal flex flex-col gap-3">
            <dt className="sr-only !text-white">{s.label}</dt>
            <dd className="svp-stat-value !text-white">{s.value}</dd>
            <dd className="svp-body !text-white">{s.label}</dd>
          </div> 
        ))}
      </dl>
    </Section>
  )
}
