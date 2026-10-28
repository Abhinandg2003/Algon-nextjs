"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Icon from "./Icon"

gsap.registerPlugin(ScrollTrigger)

// "How" section: title + intro on the left, step cards on the right.
//
// Desktop (lg+, motion allowed): the section pins with everything vertically
// centred. The left text stays put while the cards scroll up one after
// another; each card stops STACK_OFFSET px below the top of the one before
// it, covering it, until all are stacked. Then the section scrolls away.
// Everywhere else: a plain list of cards.

const STACK_OFFSET = 15 // px each stacked card sits below the previous one's top
const CARD_GAP = 24 // px between cards while they're still queued below

// Icon per step, picked from the step title when the data doesn't name one.
// First match wins, so the more specific words come first.
const STEP_ICONS = [
  [/audit|walk the|sit with|watch the work/i, "Search"],
  [/parallel|alongside|supervision|review mode|confirmation|paper fallback/i, "Split"],
  [/retire/i, "Layers"],
  [/migrat|move one stage|switch/i, "Truck"],
  [/go live|launch|release|deploy|put it to work|first customers/i, "Rocket"],
  [/\btrain|onboard/i, "GraduationCap"],
  [/hand ?over|close or extend|your review/i, "Handshake"],
  [/support|monitor|watch|run, report|improve/i, "Activity"],
  [/automat/i, "Zap"],
  [/assistant|agent/i, "Bot"],
  [/answers/i, "MessageSquare"],
  [/measure|report|outcome|extend|adjust|next piece|next version/i, "LineChart"],
  [/owner|team|staff/i, "Users"],
  [/connect|integrat|source events/i, "Plug"],
  [/test|evaluat|baseline/i, "ClipboardCheck"],
  [/guardrail|limits|risks/i, "ShieldCheck"],
  [/fix/i, "Wrench"],
  [/logging/i, "ListChecks"],
  [/process/i, "Workflow"],
  [/design|model|format/i, "PanelsTopLeft"],
  [/define|decide|choose|pick|frame|name|moments|job|task|share/i, "Target"],
  [/data|content|samples|examples|questions|sources|document/i, "Database"],
  [/build|component|slice|pipeline|pilot/i, "Code2"],
  [/plan|scope|roadmap|stages|proposal/i, "ClipboardList"],
  [/review|check|map|collect|list/i, "Search"],
]
const stepIcon = (step) => step.icon || STEP_ICONS.find(([re]) => re.test(step.title))?.[1] || "CircleCheck"

export default function StackedProcess({ tone = "light", title, intro, steps = [] }) {
  const pinRef = useRef(null)
  const stageRef = useRef(null)
  const cardRefs = useRef([])

  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      const stage = stageRef.current
      const cards = cardRefs.current.filter(Boolean)
      if (!stage || cards.length < 2) return

      // Stack mode: cards absolutely positioned in a one-card-tall stage
      // (see .is-stacked in servicepage.css). Undone when the query stops matching.
      stage.classList.add("is-stacked")

      const cardH = () => cards[0]?.offsetHeight || 0
      // Scroll needed for one card to travel from its queued spot to its stop
      const step = () => cardH() + CARD_GAP - STACK_OFFSET

      // Each card moves exactly with the scroll (linear, same speed for all
      // still-queued cards) until it reaches its stop, which is what makes
      // them read as one column scrolling up and sticking one by one.
      // Timeline units: 1 = one `step()` of scroll, so card i (which travels
      // i steps) gets duration i.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinRef.current,
          start: "top top",
          end: () => `+=${step() * (cards.length - 1)}`,
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })
      cards.forEach((card, i) => {
        if (i === 0) return
        tl.fromTo(
          card,
          { y: () => i * (cardH() + CARD_GAP) },
          { y: () => i * STACK_OFFSET, duration: i, ease: "none", immediateRender: true },
          0,
        )
      })

      return () => stage.classList.remove("is-stacked")
    })
    return () => mm.revert()
  }, [steps.length])

  if (!steps.length) return null

  return (
    // Outer wrapper is owned by React; GSAP puts its pin-spacer inside it.
    <div>
      <section
        ref={pinRef}
        data-navbar={tone === "dark" ? "light" : "dark"}
        className={`svp-section svp-${tone} svp-stack-section`}
      >
        {tone === "dark" && <div className="svp-grain" aria-hidden="true" />}
        <div className="svp-inner grid w-full gap-12 lg:grid-cols-[1fr_minmax(0,560px)] lg:items-center lg:gap-20">
          <div className="svp-reveal flex flex-col gap-6">
            <h2 className="svp-title">{title}</h2>
            {intro && <p className="svp-lead max-w-[52ch]">{intro}</p>}
          </div>

          <ol ref={stageRef} className="svp-stack-stage flex flex-col gap-6">
            {steps.map((s, i) => (
              <li
                key={s.title}
                ref={(el) => (cardRefs.current[i] = el)}
                className="svp-stack-card"
                style={{ zIndex: i + 1 }}
              >
                <span className="svp-stack-icon"><Icon name={stepIcon(s)} size={30} /></span>
                <h3 className="svp-h3">{i + 1}. {s.title}</h3>
                <p className="svp-lead">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  )
}
