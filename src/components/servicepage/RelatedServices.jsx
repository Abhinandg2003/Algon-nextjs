import CardGrid from "./CardGrid"

// "Where to go next": cross-links to sibling service pages, which helps both
// visitors and search engines move through the service cluster.
// `items` is already resolved to [{ title, text, href, icon }] by ServicePage.
export default function RelatedServices({ tone, items = [] }) {
  if (!items.length) return null
  return (
    <CardGrid
      tone={tone}
      eyebrow="Related services"
      title="Where to go next"
      items={items}
      columns={3}
    />
  )
}
