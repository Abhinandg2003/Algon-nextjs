import Section from "./Section"

// Generic comparison / module / stage table. `highlightLast` emphasises the
// last column (useful for "typical vendor vs Algon" comparisons).
export default function DataTable({ tone, eyebrow, title, intro, columns = [], rows = [], highlightLast = false, note }) {
  return (
    <Section tone={tone} eyebrow={eyebrow} title={title} intro={intro}>
      <div className="svp-reveal svp-table-wrap">
        <table className={`svp-table ${highlightLast ? "svp-table--highlight-last" : ""}`}>
          <thead>
            <tr>
              {columns.map((c) => (
                <th key={c} scope="col">{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, r) => (
              <tr key={r}>
                {row.map((cell, c) =>
                  c === 0 ? (
                    <th key={c} scope="row">{cell}</th>
                  ) : (
                    <td key={c}>{cell}</td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && <p className="svp-body !mt-5 max-w-[80ch]">{note}</p>}
    </Section>
  )
}
