import ServicePage from "@/components/servicepage/ServicePage"
import { serviceStaticParams, serviceMetadata, resolveServiceSlug } from "@/components/servicepage/routes"

const TYPE = "healthcare"

export const dynamicParams = false
export const generateStaticParams = serviceStaticParams(TYPE)
export const generateMetadata = serviceMetadata(TYPE)

export default async function Page({ params }) {
  const slug = await resolveServiceSlug(TYPE, params)
  return <ServicePage type={TYPE} slug={slug} />
}