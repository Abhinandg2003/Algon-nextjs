import HeroForm from "./heroes/HeroForm"
import HeroImage from "./heroes/HeroImage"
import HeroLight from "./heroes/HeroLight"
import HeroCentered from "./heroes/HeroCentered"
import HeroBanner from "./heroes/HeroBanner"

// Picks one of the hero layouts. Which one a page gets is decided by
// lib/heroVariant.js (HERO_MODE there switches between the banner and the
// older mix of form / image / light / centered, which are kept for reuse).
//   banner   — 60vh full-width image with the heading inside (current)
//   form     — dark, text + enquiry form (default)
//   image    — dark, text + a chosen image
//   light    — light background, dark text + form
//   centered — dark, single centred column
export const HERO_VARIANTS = { banner: HeroBanner, form: HeroForm, image: HeroImage, light: HeroLight, centered: HeroCentered }

export default function ServiceHero({ variant = "form", image, heading, hero, serviceName }) {
  const Hero = (variant === "image" && !image ? null : HERO_VARIANTS[variant]) || HeroForm
  return <Hero heading={heading} hero={hero} serviceName={serviceName} image={image} />
}
