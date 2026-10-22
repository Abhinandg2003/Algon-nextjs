import { notFound } from "next/navigation"
import { NAV_MENUS } from "@/data/navMenus"
import { getServicePage, serviceParams } from "@/data/servicePages"
import { HUB_COPY } from "./ServiceHub"

// Shared route logic for app/<type>/[slug]/page.jsx and app/<type>/page.jsx,
// so each route file is a few lines.

export const serviceStaticParams = (type) => () => serviceParams(type)

export const serviceMetadata = (type) => async ({ params }) => {
  const { slug } = await params
  const data = getServicePage(type, slug)
  if (!data) return { title: "Page not found" }
  const { seo } = data.page
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical: data.item.href },
    openGraph: { title: `${seo.title} | Algon Solutions`, description: seo.description, url: data.item.href },
  }
}

export async function resolveServiceSlug(type, params) {
  const { slug } = await params
  if (!getServicePage(type, slug)) notFound()
  return slug
}

export const hubMetadata = (type) => {
  const menu = NAV_MENUS.find((m) => m.type === type)
  const copy = HUB_COPY[type]
  return {
    title: `${menu.label} Services`,
    description: copy.subtitle,
    alternates: { canonical: `/${type}` },
  }
}
