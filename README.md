# Algon Solutions — Next.js

Converted from the Vite + React Router project to **Next.js 16 (App Router)**.

## Setup

1. **Copy your `public/` folder** into this project (it was excluded from the zip). Every
   `/images/...`, `/svg/...`, `/icons/...`, video and `.glb` path in the code points into it.
2. Create `.env.local` (see `.env.example`):
   ```
   GEMINI_API_KEY=your-key
   ```
   Note the rename: it was `VITE_GEMINI_API_KEY`. It is now **server-only** (no `NEXT_PUBLIC_`
   prefix) and used by `src/app/api/chat/route.js`, so it is no longer exposed in the browser.
3. `npm install` then `npm run dev` (http://localhost:3000) or `npm run build && npm start`.

## Route map

| Old (React Router)  | New (App Router)                    | Renders                          |
| ------------------- | ----------------------------------- | -------------------------------- |
| `/`                 | `src/app/page.jsx`                  | `components/MainWebsite`         |
| `/services`         | `src/app/services/page.jsx`         | `views/ServicesPage`             |
| `/portfolio`        | `src/app/portfolio/page.jsx`        | `views/WorksPage`                |
| `/about-us`         | `src/app/about-us/page.jsx`         | `views/AboutPage`                |
| `/solutions`        | `src/app/solutions/page.jsx`        | `views/SolutionsPage`            |
| `/work`, `/work/:id`| `src/app/work/...`                  | `views/CaseStudiesPage` / detail |
| `/blogs`, `/blogs/:id` | `src/app/blogs/...`              | `views/BlogsPage` / detail       |
| `/careers` `/contact` `/privacy` `/terms` | `src/app/<name>/page.jsx` | matching view      |
| `*`                 | `src/app/not-found.jsx`             | `views/NotFound`                 |

`src/pages` was renamed to `src/views` (Next treats a `pages/` folder as the legacy Pages Router).
Detail pages are statically generated from `CASE_STUDIES` and `src/data/blogPosts.js`.

## What replaced what

- `index.html` head → `metadata` / `viewport` / JSON-LD in `src/app/layout.jsx`
- `App.jsx` (Lenis, GSAP, splash timer, ScrollToTop, AI widget) → `src/components/AppShell.jsx`
- `react-router-dom` → `next/link`, `usePathname`, `useRouter`, `useParams`
- `lottie-react` → `src/components/LottieClient.jsx` (client-only; lottie-web breaks SSR)
- Gemini call → `/api/chat` route (streams Gemini's SSE response straight through)
- Tailwind v3 + PostCSS kept as-is; `vite.config`, `firebase.json`, empty `set.js`/`App.css` removed

## Deploying

The old `firebase.json` served a static `dist/` folder, which no longer applies. Options:
Vercel (zero config), Firebase **App Hosting** (same Firebase project, `.firebaserc` kept), or any
Node host via `npm start`. A pure static export (`output: "export"`) would work only if you drop
`/api/chat`.
