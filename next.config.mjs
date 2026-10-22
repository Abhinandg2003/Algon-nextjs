/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Menu pages used to live under /p/<type>/<slug> as placeholders.
      { source: "/p/:type/:slug", destination: "/:type/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
