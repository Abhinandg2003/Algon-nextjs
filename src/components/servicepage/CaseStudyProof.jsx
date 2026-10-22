import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import Section from "./Section"
import { CASE_STUDIES } from "@/data/caseStudiesData"

// Matched proof: one real case study chosen per page (by id), with its own
// headline numbers. Renders nothing if the id doesn't exist.
export default function CaseStudyProof({ tone, id, eyebrow = "Proof", title = "Where we have done this", intro }) {
  const study = CASE_STUDIES.find((s) => s.id === id)
  if (!study) return null
  const stats = (study.stats || []).slice(0, 3)

  return (
    <Section tone={tone} eyebrow={eyebrow} title={title} intro={intro}>
      <Link href={`/work/${study.id}`} className="svp-proof svp-reveal grid overflow-hidden rounded-[18px] border border-[var(--svp-line)] bg-[var(--svp-card)] lg:grid-cols-[1.1fr_1fr]">
        <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[420px]">
          <img
            src={study.thumbnail || study.heroImage}
            alt={`${study.title} — ${study.category}`}
            className="svp-proof-img absolute inset-0"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="flex  flex-col gap-6 p-8 md:p-12">
          {/* <span className="svp-eyebrow">{study.category}</span> */}
          <h3 className="svp-title !text-[clamp(28px,3vw,44px)]">{study.title}</h3>
          <p className="svp-lead">{study.tagline}</p>
          {stats.length > 0 && (
            <dl className="grid grid-cols-3 gap-6  pt-6">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <dd className="svp-stat-value !text-[clamp(28px,2.6vw,40px)]">{s.value}{s.suffix}</dd>
                  <dt className="text-[13px] text-[var(--svp-faint)]">{s.label}</dt>
                </div>
              ))}
            </dl>
          )}
          <span className="svp-arrow !rounded-full !px-5 !py-3 !border hover:!text-white !transition-all !duration-300 !border-black !w-fit !bg-black/0 hover:!bg-black">Read the case study <ArrowUpRight size={15} /></span>
        </div>
      </Link>
    </Section>
  )
}
