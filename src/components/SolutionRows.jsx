"use client"
import Link from "next/link"

// ─────────────────────────────────────────────────────────────────────────────
// Solution rows: a simple (non-sticky) list of the four solution tracks —
// short heading on the left, short description on the right. Based on the
// sticky wave-video section (DeepDive) on /solutions.
//
// Hover a row:
//   1. a brighter background wipes down from the top of the row
//   2. a brand-blue CTA box unclips (top → bottom) in the bottom-right corner
//   3. the description goes from dim to full white
//   4. the row's dotted top and bottom borders fade out
//   5. after a short delay, the blue bar on the left widens and nudges the
//      heading to the right
// Every row is a link, so phones (no hover) can still tap through.
// ─────────────────────────────────────────────────────────────────────────────

const ROWS = [
  {
    title: "Custom software, built to last.",
    desc: "Systems shaped around how your business already works, from internal tools to customer platforms.",
    href: "/product-engineering/product-development",
  },
  {
    title: "Web and mobile, designed to perform.",
    desc: "Fast websites and apps, from a first MVP to an enterprise platform, built to engage and convert.",
    href: "/product-engineering/web-application-development",
  },
  {
    title: "Your dedicated engineering team.",
    desc: "Developers, QA and DevOps who work inside your business and ship alongside you.",
    href: "/product-engineering/managed-engineering-services",
  },
  {
    title: "AI that makes products smarter.",
    desc: "Agents, LLMs and automation that take the repetitive work off your team.",
    href: "/ai-development/ai-development-services",
  },
]

const CTA_LABEL = "Explore"

export default function SolutionRows({ rows = ROWS }) {
  return (
    <section data-navbar="light" className="sr-section">
      <style>{`
        .sr-section { background: #050508; color: #fff; padding: 120px 7vw; }
        .sr-list { list-style: none; margin: 0; padding: 0; }

        /* Dotted dividers, drawn as 2px dots repeating every --sr-dot-step
           (CSS "dotted" borders can't space their dots out). Every row has a
           top line (::before), the last one a bottom line too (::after), so
           the lines between rows are shared. */
        .sr-row {
          --sr-dot: 2px;
          --sr-dot-step: 12px; /* dot + gap — raise for more space between dots */
          --sr-dot-color: rgba(255, 255, 255, 0.22);
          --sr-ease: cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
        }
        .sr-row::before,
        .sr-row:last-child::after {
          content: ""; position: absolute; left: 0; right: 0; height: var(--sr-dot);
          background-image: linear-gradient(to right, var(--sr-dot-color) var(--sr-dot), transparent var(--sr-dot));
          background-size: var(--sr-dot-step) var(--sr-dot);
          background-repeat: repeat-x;
          pointer-events: none; z-index: 1;
          transition: opacity 0.5s var(--sr-ease);
        }
        .sr-row::before { top: 0; }
        .sr-row:last-child::after { bottom: 0; }
        /* Hover: hide this row's top and bottom lines (its bottom line is the
           next row's top, or its own on the last row) */
        .sr-row:hover::before,
        .sr-row:hover + .sr-row::before,
        .sr-row:last-child:hover::after { opacity: 0; }

        .sr-link {
          position: relative; display: grid; grid-template-columns: 1fr 1fr;
          gap: 5vw; align-items: center;
          padding: 56px 0; color: inherit; text-decoration: none; overflow: hidden;
        }

        /* Brighter background wiping down from the top */
        .sr-link::before {
          content: ""; position: absolute; inset: 0;
          background: rgba(255, 255, 255, 0.05);
          transform: scaleY(0); transform-origin: top;
          transition: transform 0.7s var(--sr-ease);
        }
        .sr-row:hover .sr-link::before { transform: scaleY(1); }

        /* Slim blue bar on the left: widens after a delay on hover (and
           shrinks straight back when the cursor leaves) */
        .sr-bar {
          position: absolute; left: 0; top: 0; bottom: 0; width: 3px;
          background: #265eed;
          transition: width 0.6s var(--sr-ease);
        }
        .sr-row:hover .sr-bar { width: 32px; transition-delay: 0.25s; }

        .sr-title {
          position: relative; margin: 0; padding-left: 32px;
          font-size: clamp(24px, 2.4vw, 38px); font-weight: 300;
          line-height: 1.1; letter-spacing: -0.02em;
          transition: transform 0.6s var(--sr-ease);
        }
        .sr-row:hover .sr-title { transform: translateX(30px); transition-delay: 0.25s; }

        .sr-desc {
          position: relative; margin: 0; max-width: 46ch;
          font-size: clamp(17px, 1.35vw, 21px); font-weight: 300; line-height: 1.6;
          color: rgba(255, 255, 255, 0.5);
          transition: color 0.5s var(--sr-ease);
        }
        .sr-row:hover .sr-desc { color: #fff; }

        /* CTA box in the bottom-right corner, unclipping top → bottom */
        .sr-cta {
          position: absolute; right: 0; bottom: 0;
          display: flex; align-items: center; gap: 10px;
          padding: 14px 24px; background: #265eed; color: #fff;
          font-size: 15px; font-weight: 500;
          clip-path: inset(0 0 100% 0);
          transition: clip-path 0.6s var(--sr-ease);
        }
        .sr-cta-text { opacity: 0; transform: translateY(-6px); transition: opacity 0.4s ease-out, transform 0.5s var(--sr-ease); }
        .sr-row:hover .sr-cta { clip-path: inset(0 0 0 0); }
        .sr-row:hover .sr-cta-text { opacity: 1; transform: none; transition-delay: 0.15s; }

        .sr-link:focus-visible { outline: 2px solid #265eed; outline-offset: -2px; }

        @media (max-width: 767px) {
          .sr-section { padding: 80px 5vw; }
          .sr-link { grid-template-columns: 1fr; gap: 14px; padding: 36px 0; }
          .sr-title { padding-left: 22px; }
          .sr-desc { padding-left: 22px; }
          .sr-cta { display: none; } /* no hover on phones; the whole row is the link */
        }
        @media (prefers-reduced-motion: reduce) {
          .sr-row *, .sr-row *::before, .sr-row::before, .sr-row::after { transition: none !important; }
        }
      `}</style>

      <ul className="sr-list">
        {rows.map((r) => (
          <li key={r.title} className="sr-row">
            <Link href={r.href} className="sr-link">
              <span className="sr-bar" aria-hidden="true" />
              <h3 className="sr-title">{r.title}</h3>
              <p className="sr-desc">{r.desc}</p>
              <span className="sr-cta" aria-hidden="true">
                <span className="sr-cta-text">{CTA_LABEL} →</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
