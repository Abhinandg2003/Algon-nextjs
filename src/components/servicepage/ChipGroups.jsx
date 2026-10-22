import Section from "./Section"

// Tech stack, standards, integrations: labelled groups of chips.
// Pass `groups` ([{ label, items }]) or a flat `items` list.
export default function ChipGroups({ tone, eyebrow, title, intro, groups, items, note }) {
  const list = groups || [{ label: null, items: items || [] }]

  return (
    <Section tone={tone} eyebrow={eyebrow} title={title} intro={intro}>
      <div className={`grid gap-10 ${list.length > 1 ? "md:grid-cols-2 xl:grid-cols-3" : ""}`}>
        {list.map((g, i) => (
          <div key={g.label || i} className="svp-reveal flex flex-col gap-5">
            {g.label && <h3 className="svp-h3">{g.label}</h3>}
            <ul className="flex flex-wrap gap-2">
              {g.items.map((it) => (
                <li key={it} className="svp-chip">{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {note && <p className="svp-body mt-10 max-w-[80ch]">{note}</p>}
    </Section>
  )
}
