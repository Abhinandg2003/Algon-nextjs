/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Menu pages used to live under /p/<type>/<slug> as placeholders.
      { source: "/p/:type/:slug", destination: "/:type/:slug", permanent: true },
      // Case studies were anonymised and split into parts; old client-named
      // URLs go to Part 1 of each build. Keep in sync with LEGACY_IDS in
      // src/data/caseStudiesData.js.
      ...Object.entries({
        "mindful-rejuvenation": "hospital-os-patient-records-opd",
        visat: "campus-ai-teacher-agents",
        "desire-study-abroad": "admissions-ai-assistant",
        "drisya-marble": "product-catalogue-cms",
        "unity-heights": "real-estate-lead-website",
        thesneek: "fashion-commerce-storefront",
        corewood: "furniture-mobile-first-website",
        "qot-interiors": "interiors-conversion-tracking",
      }).map(([from, to]) => ({ source: `/work/${from}`, destination: `/work/${to}`, permanent: true })),
    ];
  },
};

export default nextConfig;
