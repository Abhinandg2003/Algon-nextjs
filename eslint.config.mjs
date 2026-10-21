import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
  ...nextVitals,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
  {
    rules: {
      // The site uses plain <img>/<video> everywhere; migrate to next/image incrementally.
      "@next/next/no-img-element": "off",
      // Copy contains lots of straight apostrophes; harmless in JSX.
      "react/no-unescaped-entities": "off",
      // Carried over from the Vite project — shown as warnings so existing animation
      // code doesn't block `npm run lint`. Worth cleaning up over time.
      "react-hooks/exhaustive-deps": "warn",
      "react-hooks/set-state-in-effect": "warn",
      "react-hooks/immutability": "warn",
      "react-hooks/refs": "warn",
      "react/jsx-no-undef": "warn", // PhoneMockup/TabletMockup in CaseStudyDetailPage (dead branch)
      "react/display-name": "warn",
      "jsx-a11y/alt-text": "warn",
    },
  },
]);
