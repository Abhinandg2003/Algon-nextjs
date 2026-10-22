"use client"
import { useState } from "react"
import { Plus } from "lucide-react"

// Accordion FAQ. The matching FAQPage JSON-LD is emitted by ServicePage
// (server side), so answers are crawlable even while collapsed.
export default function ServiceFAQ({ items = [] }) {
  const [open, setOpen] = useState(0)

  return (
    <ul className="svp-reveal">
      {items.map((f, i) => {
        const isOpen = open === i
        return (
          <li key={f.q} className="svp-faq-item" data-open={isOpen}>
            <button
              type="button"
              className="svp-faq-q"
              aria-expanded={isOpen}
              aria-controls={`svp-faq-${i}`}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              {f.q}
              <Plus size={22} className="svp-faq-toggle" aria-hidden="true" />
            </button>
            <div id={`svp-faq-${i}`} className="svp-faq-a" role="region">
              <div>
                <p className="svp-lead pb-7 max-w-[80ch]">{f.a}</p>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
