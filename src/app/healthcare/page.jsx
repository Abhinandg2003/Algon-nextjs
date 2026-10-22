import ServiceHub from "@/components/servicepage/ServiceHub"
import { hubMetadata } from "@/components/servicepage/routes"

export const metadata = hubMetadata("healthcare")

export default function Page() {
  return <ServiceHub type="healthcare" />
}