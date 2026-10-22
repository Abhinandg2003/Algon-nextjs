import Section from "./Section"

export default function StatsStrip({ tone, items }) {
  return (
    <Section tone={tone} className="!py-16 md:!py-20">
      <dl className={`grid gap-10 sm:grid-cols-2 ${items.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
        {items.map((s) => (
          <div key={s.label} className="svp-stat svp-reveal flex flex-col gap-3">
            <dt className="sr-only">{s.label}</dt>
            <dd className="svp-stat-value">{s.value}</dd>
            <dd className="svp-body">{s.label}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
