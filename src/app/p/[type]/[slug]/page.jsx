import Link from "next/link"
import { notFound } from "next/navigation"
import Navbar from "../../../components/Navbar"
import Footer from "../../../components/Footer"
import { findPage, allPageParams } from "../../../data/navMenus"

// Only slugs that exist in navMenus.js are valid; anything else is a 404.
export const dynamicParams = false

export function generateStaticParams() {
  return allPageParams()
}

export async function generateMetadata({ params }) {
  const { type, slug } = await params
  const page = findPage(type, slug)
  return { title: page ? page.item.label : "Page not found" }
}

export default async function MenuPage({ params }) {
  const { type, slug } = await params
  const page = findPage(type, slug)
  if (!page) notFound()

  const { menu, group, item } = page

  return (
    <div className="min-h-screen bg-[#050508] text-white">
      <Navbar />
      <section data-navbar="light" className="min-h-[80vh] px-[8vw] pb-24 pt-[180px]">
        <p className="mb-4 text-[15px] tracking-wide text-white/50">
          {menu.label} / {group.title}
        </p>
        <h1 className="max-w-[900px] text-[clamp(38px,6vw,72px)] font-light leading-[1.05] tracking-wide">
          {item.label}
        </h1>
        <p className="mt-8 max-w-[520px] text-[18px] leading-loose text-white/70">
          This page is being written. Check back soon, or get in touch to talk about it now.
        </p>
        <Link
          href="/contact"
          className="mt-10 inline-flex rounded-full border border-white px-8 py-3 text-[15px] tracking-[0.15em] text-white transition hover:bg-white hover:text-black"
        >
          Contact us
        </Link>
      </section>
      <Footer />
    </div>
  )
}