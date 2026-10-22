import Section from "./Section"

// Numbered delivery steps. Lays out in a row on wide screens, a column on mobile.
export default function ProcessSteps({ tone, eyebrow = "How it runs", title, intro, steps = [] }) {
  const cols = steps.length >= 6 ? "lg:grid-cols-3" : steps.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-5"

  return (
    <Section tone={tone} eyebrow={eyebrow} title={title} intro={intro}>
      <ol className={`grid gap-x-8 gap-y-12 sm:grid-cols-2 ${cols}`}>
        {steps.map((s, i) => (
          <li key={s.title} className="svp-step svp-reveal flex flex-col gap-3" style={{ transitionDelay: `${(i % 3) * 70}ms` }}>
            <div className="flex justify-between w-full ">
            <h3 className="svp-h3">{s.title}</h3>
            <span className="svp-num">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <p className="svp-body">{s.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
