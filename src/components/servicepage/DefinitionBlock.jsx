import Section from "./Section"
import Icon from "./Icon"

// "What is X?" — written for search: a direct definition first, then context.
// Top row: heading and the abstract (first paragraph), spaced apart.
// Below: the remaining paragraphs, with the optional `points` list beside them.
export default function DefinitionBlock({ tone, eyebrow = "Overview", title, paragraphs = [], points = [] }) {
  const [abstract, ...rest] = paragraphs
  const hasBody = rest.length > 0 || points.length > 0

  return (
    <Section tone={tone}>
      <div className="svp-reveal flex flex-col gap-6 lg:flex-row lg:justify-between  lg:items-end lg:gap-20">
        {/* <span className="svp-eyebrow">{eyebrow}</span> */}
        <h2 className="svp-title lg:max-w-[16ch]">{title}</h2>
        {abstract && <p className="svp-lead lg:max-w-[58ch]">{abstract}</p>}
      </div>

      {hasBody && (
        <div className={`mt-12 md:mt-16 grid gap-12 ${rest.length && points.length ? "lg:grid-cols-2 lg:gap-20" : ""}`}>
          {rest.length > 0 && (
            <div className="svp-reveal flex flex-col gap-6">
              {rest.map((p, i) => (
                <p key={i} className="svp-lead">{p}</p>
              ))}
            </div>
          )}

          {points.length > 0 && (
            <ul className="svp-reveal flex flex-col">
              {points.map((pt) => (
                <li key={pt.text} className="svp-point">
                  <span className="svp-icon shrink-0"><Icon name={pt.icon} /></span>
                  <span className="svp-lead pt-2.5">{pt.text}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </Section>
  )
}
