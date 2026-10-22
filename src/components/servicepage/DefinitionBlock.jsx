import Section from "./Section"
import Icon from "./Icon"

// "What is X?" — written for search: a direct definition first, then context.
// Optional `points` render as an icon-led list beside the text.
export default function DefinitionBlock({ tone, eyebrow = "Overview", title, paragraphs = [], points = [] }) {
  return (
    <Section tone={tone}>
      <div className={`grid gap-12 ${points.length ? "lg:grid-cols-[1.1fr_1fr] lg:gap-20" : ""}`}>
        <div className="svp-reveal flex flex-col gap-6 max-w-[760px]">
          <span className="svp-eyebrow">{eyebrow}</span>
          <h2 className="svp-title">{title}</h2>
          {paragraphs.map((p, i) => (
            <p key={i} className={i === 0 ? "svp-lead" : "svp-body"}>{p}</p>
          ))}
        </div>

        {points.length > 0 && (
          <ul className="svp-reveal self-center">
            {points.map((pt) => (
              <li key={pt.text} className="svp-point">
                <span className="svp-icon shrink-0"><Icon name={pt.icon} /></span>
                <span className="svp-body pt-2.5">{pt.text}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Section>
  )
}
