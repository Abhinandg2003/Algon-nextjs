"use client";
import { memo, useEffect, useRef, useState } from "react";
import "../footer.css";
import { Instagram, InstagramIcon, Phone } from "lucide-react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { GoMail } from "react-icons/go";
import Link from "next/link";
import { NAV_MENUS } from "../data/navMenus";

/* ────────────────────────────────────────────────────────────────────
   WHY THE FOOTER WAS LAGGING
   ──────────────────────────────────────────────────────────────────
   1. The marquee was driven by a `requestAnimationFrame` loop that
      starts on mount and NEVER stops — it keeps executing JS every
      single frame for as long as the page is open, even while the
      footer is scrolled out of view. That's continuous main-thread
      work competing with everything else on the page (hero crossfade,
      GSAP ScrollTriggers, input handling). Replaced with a pure CSS
      `@keyframes` transform animation — the compositor handles it,
      zero JS, and it automatically respects `prefers-reduced-motion`.
      An IntersectionObserver now also pauses it outright while the
      footer isn't visible.

   2. `email` / `sent` state lived at the top of `Footer`, so every
      keystroke in the newsletter input re-rendered the ENTIRE footer
      — all ~150 marquee spans and every link column — and every one
      of those elements was using a freshly-allocated inline `style`
      object (no CSS classes to bail out on). Moved that state into
      its own small `Newsletter` component so typing only re-renders
      those few nodes.

   3. Link hover states were done with `onMouseEnter` / `onMouseLeave`
      handlers mutating `style.color` directly — a new function
      allocated per link on every render, doing in JS what a `:hover`
      CSS rule does for free. Replaced with a `.footer-link` class.

   4. The marquee duplicated its 6-service list 6 times (36 repeats)
      just to make sure it never ran out of content for the old JS
      reset logic. A CSS animation that translates exactly -50% only
      ever needs the content duplicated twice — cut the marquee DOM
      from ~216 nodes down to 72.

   5. Bonus fix: the email link was missing `mailto:` (`href="support@..."`
      instead of `href="mailto:support@..."`) — same effect either way,
      it just wasn't activating the user's mail client. Fixed inline.
   ──────────────────────────────────────────────────────────────────── */

// Footer "Services": each category's hub, two of its services (by slug), then
// "All services". Labels and links come from the navbar data, so they stay in sync.
const FOOTER_SERVICE_PICKS = {
  healthcare: ["hospital-management-system", "clinic-automation"],
  "ai-development": ["ai-agent-development", "workflow-automation"],
  "product-engineering": ["managed-engineering-services", "web-application-development"],
};

const FOOTER_SERVICE_GROUPS = NAV_MENUS.filter((m) => FOOTER_SERVICE_PICKS[m.type]).map((m) => {
  const items = m.groups.flatMap((g) => g.items);
  return {
    label: m.label,
    hub: m.hub,
    items: FOOTER_SERVICE_PICKS[m.type].map((slug) => items.find((i) => i.slug === slug)).filter(Boolean),
  };
});

const COMPANY = [
  { label: "About Us", to: "/about-us" },
  { label: "Our Work", to: "/portfolio" },
  { label: "Careers", to: "/careers" },
  { label: "Insights", to: "/blogs" },
  { label: "Contact", to: "/contact" },
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms of Service", to: "/terms" },
];

const SOCIALS = [
  { label: "Twitter / X", href: "https://x.com/algonsolutions?s=20" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/algonsolutions/",
  },
  { label: "Instagram", href: "https://www.instagram.com/algonofficial/" },
];

const MARQUEE_ITEMS = [
  "Hospital Management Systems",
  "AI & Automation",
  "Managed Engineering",
  "Web & SaaS Development",
  "Workflow Automation",
  "Cybersecurity",
];

/* ───────────────────────── Marquee ───────────────────────── */
// Fully static — no props, no state. Renders once, then the CSS
// animation does all the work on the compositor thread.
const Marquee = memo(function Marquee() {
  const wrapRef = useRef(null);
  const [paused, setPaused] = useState(false);

  // Pause the animation entirely while off-screen — nothing to see,
  // nothing to composite.
  useEffect(() => {
    const el = wrapRef.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const obs = new IntersectionObserver(
      ([entry]) => setPaused(!entry.isIntersecting),
      { threshold: 0 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Two copies only — a -50% translate loop only needs the content
  // duplicated once, not six times.
  const renderGroup = (key) => (
    <span key={key} className="flex items-center">
      {MARQUEE_ITEMS.map((s, i) => (
        <span key={i} className="flex items-center">
          <span className="px-8 text-[11px] uppercase tracking-[0.25em] text-white/50">
            {s}
          </span>
          <span className="text-[8px] text-white/50">◆</span>
        </span>
      ))}
    </span>
  );

  return (
    <div
      ref={wrapRef}
      className="relative z-[1] overflow-hidden border-b border-white/10 py-[22px]"
    >
      <div className={`footer-marquee-track${paused ? " is-paused" : ""}`}>
        {renderGroup("a")}
        {renderGroup("b")}
      </div>
    </div>
  );
});

/* ───────────────────────── Newsletter ───────────────────────── */
// Owns its own state so typing never touches the rest of the footer.
function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setEmail("");
    window.setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="min-w-[280px] max-w-[380px]">
      <p className="mb-6 text-base font-light leading-[1.7] text-white/55">
        Notes on hospital systems, automation, and engineering. No spam, ever.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="flex border-b border-white/25 pb-[10px]">
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-transparent text-[14px] tracking-[0.04em] text-white outline-none placeholder:text-white/35"
          />
          <button
            type="submit"
            className="footer-subscribe-btn"
            data-sent={sent}
          >
            {sent ? "Sent ✓" : "Subscribe →"}
          </button>
        </div>
      </form>
    </div>
  );
}

/* ───────────────────────── Link column ───────────────────────── */
const LinkColumn = memo(function LinkColumn({ title, items }) {
  return (
    <div className="hidden md:block">
      <p className="mb-5 text-base tracking-[0.2em] text-white">{title}</p>
      <ul className="flex flex-col gap-[13px] list-none m-0 p-0">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="footer-link text-[15px] tracking-[0.02em]"
            >
              {item.label}
              {item.external && (
                <span className="ml-1.5 text-[10px] opacity-45">↗</span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
});

const LinkColumn2 = memo(function LinkColumn({ title, items }) {
  return (
    <div className="">
      <p className="mb-5 text-base font-semibold tracking-[0.1em] text-white">
        {title}
      </p>
      <ul className="flex flex-col gap-[13px] list-none m-0 p-0">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="footer-link text-[15px] tracking-[0.02em]"
            >
              {item.label}
              {item.external && (
                <span className="ml-1.5 text-[10px] opacity-45">↗</span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
});

const ServicesColumn = memo(function ServicesColumn() {
  return (
    <div>
      <p className="mb-5 text-base font-semibold tracking-[0.1em] text-white">
        Services
      </p>
      <div className="flex flex-col gap-7">
        {FOOTER_SERVICE_GROUPS.map((g) => (
          <ul key={g.hub} className="flex flex-col gap-[13px] list-none m-0 p-0">
            <li>
              <Link href={g.hub} className="footer-link text-[15px] tracking-[0.02em] font-medium">
                {g.label}
              </Link>
            </li>
            {g.items.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="footer-link text-[15px] tracking-[0.02em]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        ))}
        <Link href="/services" className="footer-link text-[15px] tracking-[0.02em] font-medium">
          All services →
        </Link>
      </div>
    </div>
  );
});
const companyItems = COMPANY.map((c) => ({ label: c.label, href: c.to }));
const socialItems = SOCIALS.map((s) => ({
  label: s.label,
  href: s.href,
  external: true,
}));

/* ───────────────────────── Footer ───────────────────────── */
export default function Footer() {
  return (
    <footer
      data-navbar="light"
      className="relative overflow-hidden  bg-[#050508] text-white"
    >
      {/* Grain overlay — one static layer, painted once */}
      {/* <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.025] bg-[length:200px_200px]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      /> */}

      {/* <Marquee /> */}

      <div className="relative z-[1] px-[7vw] pt-20 pb-[60px]">
        {/* Top row — brand + newsletter */}
        <div className="mb-[72px] flex flex-wrap items-start justify-between gap-12 border-b border-white/[0.07] pb-3">
          <div className="max-w-[480px]">
            <Link href="/">
              <img
                src="/images/logo-white.webp"
                alt="Algon Solutions logo"
                className="block h-25 max-w-full"
                loading="lazy"
                decoding="async"
              />
            </Link>
          </div>

          <p className="mb-6 font-Displayfont hidden md:block text-[clamp(28px,3.5vw,68px)] text-right font-normal leading-[1.1] tracking-[-0.02em] text-[#fcfcf7]">
            We design
            <br />
            <span className="mb-6 font-Displayfont text-[clamp(28px,3.5vw,48px)] text-right font-normal leading-[1.1] tracking-[-0.02em] text-[#fcfcf7]">
              beyond screens.
            </span>
          </p>
        </div>

        {/* Link columns */}
        <div className="mb-[22px] grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-x-8 gap-y-12">
          <ServicesColumn />
          <LinkColumn2 title="Company" items={companyItems} />
          <div className="flex flex-col ">
            <p className="mb-5 text-base font-semibold tracking-[0.1em] hidden md:block text-white">
              Follow
            </p>

            <div className="w-full h-auto  hidden  md:flex justify-start">
              <a href="https://www.instagram.com/algonofficial/">
                <FaInstagram className="footer-social-icon h-7 w-10 text-white/90" />
              </a>

              <a href="https://x.com/algonsolutions?s=20">
                <FaTwitter className="footer-social-icon h-7 w-10 text-white/90" />
              </a>

              <a href="https://www.linkedin.com/company/algonsolutions/">
                <FaLinkedin className="footer-social-icon h-7 w-10 text-white/90" />
              </a>
            </div>

            {/* <div className=" gap-5 mt-5 hidden md:flex">
              <img className="h-20 w-auto" src="/images/hippa.webp" alt="HIPAA compliant" loading="lazy" decoding="async" />
              <img className="h-20 w-auto" src="/images/gdpr.webp" alt="GDPR compliant" loading="lazy" decoding="async" />
              <img className="h-20 w-auto" src="/images/aicpa.svg" alt="AICPA SOC certified" loading="lazy" decoding="async" />

            </div> */}

            <div className="hidden md:block">
              <p className="mb-5 text-base font-semibold tracking-[0.1em] mt-[28px] text-white">
                Get in touch
              </p>
              <a
                href="mailto:support@algonsolutions.com"
                className="footer-link mb-2 block text-base"
              >
                support@algonsolutions.com
              </a>
              <a href="tel:+917306060741" className="footer-link text-base">
                +91 730 606 0741
              </a>
            </div>
          </div>
        </div>

        <div className="w-full h-auto flex   md:hidden justify-between mb-5">
          <a href="https://www.instagram.com/algonofficial/">
            <FaInstagram className="h-7 w-10 text-white/80" />
          </a>

          <a href="https://x.com/algonsolutions?s=20">
            <FaTwitter className="h-7 w-10 text-white/80" />
          </a>

          <a href="https://www.linkedin.com/company/algonsolutions/">
            <FaLinkedin className="h-7 w-10 text-white/80" />
          </a>

          <a href="mailto:support@algonsolutions.com">
            <GoMail className="h-7 w-10 text-white/80" />
          </a>

          <a href="tel:+917306060741">
            <Phone className="h-7 w-10 text-white/80" />
          </a>
        </div>

        {/* <div className=" gap-5 mt-0 flex md:hidden justify-center mb-10">
          <img
            className="h-20 w-auto"
            src="/images/hippa.webp"
            alt="HIPAA compliant"
            loading="lazy"
            decoding="async"
          />
          <img
            className="h-20 w-auto"
            src="/images/gdpr.webp"
            alt="GDPR compliant"
            loading="lazy"
            decoding="async"
          />
        </div> */}

        {/* Bottom bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 border-t border-white/20 pt-6 text-center md:justify-between">
          <p className="text-sm tracking-[0.12em] text-white/60">
            Copyright © {new Date().getFullYear()} Algon Solutions.
          </p>
          <div className="flex items-center ">
            <p className="text-sm tracking-[0.12em] text-white/60">
              All Rights Reserved |
            </p>
            <div>
              <Link
                className="text-sm tracking-[0.12em] ml-2 text-white/60 underline hover:text-white/80"
                href="/privacy"
              >
                {" "}
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
