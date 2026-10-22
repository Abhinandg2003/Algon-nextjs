import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import Section from "./Section"
import Icon from "./Icon"

// One grid for every card list on a service page: failure patterns,
// what-we-build, industries, differentiators. `numbered` shows 01, 02…
// instead of (or as well as) the icon; items with `href` become links.
export default function CardGrid({ tone, id, eyebrow, title, intro, items = [], numbered = false, columns = 3 }) {
  const cols = columns === 2 ? "md:grid-cols-2" : columns === 4 ? "md:grid-cols-2 xl:grid-cols-4" : "md:grid-cols-2 lg:grid-cols-3"

  return (
    <Section tone={tone} id={id} eyebrow={eyebrow} title={title} intro={intro}>
      <ul className={`grid gap-5 ${cols}`}>
        {items.map((item, i) => {
          const body = (
            <>
              <div className="flex items-center justify-between gap-4">
                {item.icon ? <span className="svp-icon"><Icon name={item.icon} /></span> : <span />}
                {/* {numbered && <span className="svp-num">{String(i + 1).padStart(2, "0")}</span>} */}
              </div>
              <h3 className="svp-h3 pt-2">{item.title}</h3>
              <p className="svp-body">{item.text}</p>
              {item.href && (
                <span className="svp-arrow">
                  Learn more <ArrowUpRight size={15} />
                </span>
              )}
            </>
          )
          return (
            <li key={item.title} className="svp-reveal" style={{ transitionDelay: `${(i % 3) * 70}ms` }}>
              {item.href ? (
                <Link href={item.href} className="svp-card">{body}</Link>
              ) : (
                <div className="svp-card">{body}</div>
              )}
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
