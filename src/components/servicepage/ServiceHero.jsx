import HeroForm from "./heroes/HeroForm"
import HeroImage from "./heroes/HeroImage"
import HeroLight from "./heroes/HeroLight"
import HeroCentered from "./heroes/HeroCentered"

// Picks one of the hero layouts. Which one a page gets is decided by
// lib/heroVariant.js (stable per page, not random per visit).
//   form     — dark, text + enquiry form (default)
//   image    — dark, text + a chosen image
//   light    — light background, dark text + form
//   centered — dark, single centred column
export const HERO_VARIANTS = { form: HeroForm, image: HeroImage, light: HeroLight, centered: HeroCentered }

export default function ServiceHero({ variant = "form", image, heading, hero, serviceName }) {
  const Hero = (variant === "image" && !image ? null : HERO_VARIANTS[variant]) || HeroForm
  return <Hero heading={heading} hero={hero} serviceName={serviceName} image={image} />
}
