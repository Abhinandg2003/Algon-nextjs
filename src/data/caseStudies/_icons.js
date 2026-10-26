// Line icons for case-study process steps (stepsData[].icon). Each takes the
// study's accent colour, matching how CaseStudyDetailPage calls them.
// Plain createElement (no JSX) so the data files can also be checked by a
// plain Node script.
import { createElement as h } from "react"

const svg = (...children) => h("svg", { width: 48, height: 48, viewBox: "0 0 48 48", fill: "none" }, ...children)
const line = { strokeWidth: 0.8 }

const I = {
  plan: (a) => svg(
    h("circle", { cx: 24, cy: 24, r: 16, stroke: a, ...line }),
    h("path", { d: "M24 16V32M16 24H32", stroke: a, strokeWidth: 1, strokeLinecap: "round" })
  ),
  build: (a) => svg(
    h("rect", { x: 10, y: 10, width: 28, height: 28, rx: 3, stroke: a, ...line }),
    h("path", { d: "M16 20H32M16 26H28", stroke: a, ...line, strokeLinecap: "round" })
  ),
  integrate: (a) => svg(
    h("rect", { x: 8, y: 12, width: 32, height: 24, rx: 4, stroke: a, ...line }),
    h("circle", { cx: 18, cy: 20, r: 2, fill: a, opacity: 0.7 }),
    h("path", { d: "M22 20H32M16 28H32", stroke: a, ...line, strokeLinecap: "round" })
  ),
  secure: (a) => svg(
    h("path", { d: "M24 8L12 13v10c0 8 5.5 13 12 17 6.5-4 12-9 12-17V13L24 8z", stroke: a, ...line }),
    h("path", { d: "M19 24l4 4 7-8", stroke: a, strokeWidth: 1, strokeLinecap: "round", strokeLinejoin: "round" })
  ),
  data: (a) => svg(
    h("ellipse", { cx: 24, cy: 14, rx: 12, ry: 4, stroke: a, ...line }),
    h("path", { d: "M12 14v20c0 2.2 5.4 4 12 4s12-1.8 12-4V14M12 24c0 2.2 5.4 4 12 4s12-1.8 12-4", stroke: a, ...line })
  ),
  ai: (a) => svg(
    h("rect", { x: 14, y: 14, width: 20, height: 20, rx: 4, stroke: a, ...line }),
    h("path", { d: "M20 8v6M28 8v6M20 34v6M28 34v6M8 20h6M8 28h6M34 20h6M34 28h6", stroke: a, ...line, strokeLinecap: "round" }),
    h("circle", { cx: 24, cy: 24, r: 3, fill: a, opacity: 0.7 })
  ),
  flow: (a) => svg(
    h("circle", { cx: 12, cy: 24, r: 4, stroke: a, ...line }),
    h("circle", { cx: 36, cy: 14, r: 4, stroke: a, ...line }),
    h("circle", { cx: 36, cy: 34, r: 4, stroke: a, ...line }),
    h("path", { d: "M16 23l16-8M16 25l16 8", stroke: a, ...line })
  ),
  launch: (a) => svg(
    h("circle", { cx: 24, cy: 24, r: 18, stroke: a, ...line }),
    h("path", { d: "M24 12L28 24L24 28L20 24Z", fill: a, opacity: 0.7 })
  ),
  screen: (a) => svg(
    h("rect", { x: 8, y: 10, width: 32, height: 22, rx: 2, stroke: a, ...line }),
    h("path", { d: "M18 38h12M24 32v6", stroke: a, ...line, strokeLinecap: "round" })
  ),
  chart: (a) => svg(
    h("path", { d: "M10 38V10M10 38h28", stroke: a, ...line, strokeLinecap: "round" }),
    h("path", { d: "M16 30l7-8 6 5 9-11", stroke: a, strokeWidth: 1, strokeLinecap: "round", strokeLinejoin: "round" })
  ),
}

export default I
