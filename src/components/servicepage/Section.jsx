// Shared shell for every service-page section: tone (dark/light), the
// navbar colour hint, grain, and an optional eyebrow/title/intro header.
export default function Section({
  tone = "light",
  id,
  eyebrow,
  title,
  intro,
  headerLayout = "split", // "split" = title left, intro right; "stack" = intro under title
  className = "",
  children,
}) {
  const hasHeader = eyebrow || title || intro

  return (
    <section
      id={id}
      // data-navbar names the NAVBAR colour, so a dark section asks for a light navbar
      data-navbar={tone === "dark" ? "light" : "dark"}
      className={`svp-section svp-${tone} ${className}`}
    >
      {tone === "dark" && <div className="svp-grain" aria-hidden="true" />}
      <div className="svp-inner">
        {hasHeader && (
          <header
            className={`svp-reveal mb-12 md:mb-16 grid gap-6 ${
              headerLayout === "split" && intro ? "lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:items-end" : "max-w-[900px]"
            }`}
          >
            <div className="flex flex-col gap-5">
              {/* {eyebrow && <span className="svp-eyebrow">{eyebrow}</span>} */}
              {title && <h2 className="svp-title">{title}</h2>}
            </div>
            {intro && <p className="svp-lead">{intro}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  )
}
