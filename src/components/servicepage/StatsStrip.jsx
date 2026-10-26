import Section from "./Section"

// Stats card under the hero. Its tone follows the hero:
//   dark  (default) — dark card on the dark page background
//   light — white card on a paper band, for pages with the light hero, so the
//           page doesn't go light hero → dark strip → light section.
export default function StatsStrip({ items, tone = "dark" }) {
  const grid = `grid gap-10 sm:grid-cols-2 ${items.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`

  if (tone === "light") {
    return (
      // The paper band fills the space around the card (otherwise the dark
      // page background would show above and below it). Navbar: dark text.
      <div data-navbar="dark" className="svp-stats-band--light pt-10 pb-20">
        <Section tone="light" className="!py-16 md:!py-20 !bg-white border border-black/15 !rounded-none mx-auto max-w-[min(95vw,1600px)] md:max-w-[min(90vw,1600px)]">
          <dl className={grid}>
            {items.map((s) => (
              <div key={s.label} className="svp-stat svp-reveal flex flex-col gap-3">
                <dt className="sr-only">{s.label}</dt>
                <dd className="svp-stat-value">{s.value}</dd>
                <dd className="svp-body !text-[var(--svp-strong)]">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Section>
      </div>
    )
  }

  return (
    // Dark card: it must also tell the navbar to use its light (white) theme.
    <Section tone="dark" className="!py-16 md:!py-20 my-10 mb-20 !bg-[#07070A] border border-white/30 !rounded-none mx-auto rounded-3xl max-w-[min(95vw,1600px)] md:max-w-[min(90vw,1600px)]">
      <dl className={grid}>
        {items.map((s) => (
          <div key={s.label} className="svp-stat svp-reveal flex flex-col gap-3">
            <dt className="sr-only !text-white">{s.label}</dt>
            <dd className="svp-stat-value !text-white">{s.value}</dd>
            <dd className="svp-body !text-white">{s.label}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
