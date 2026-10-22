"use client";
import { useState, useEffect, useRef } from "react"
import Link from "next/link";
import { ChevronDown } from "lucide-react"
import { CASE_STUDIES } from "../data/caseStudiesData"
import { NAV_MENUS, MOBILE_LINKS } from "../data/navMenus"

const BLOG_PREVIEWS = [
    {
        id: 1,
        title: "Why your SaaS landing page is losing conversions",
        category: "Design",
        date: "Apr 28, 2025",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    },
    {
        id: 2,
        title: "Building a design system from scratch",
        category: "Design",
        date: "Apr 14, 2025",
        readTime: "8 min read",
    },
    {
        id: 3,
        title: "The real cost of a slow website in 2025",
        category: "Development",
        date: "Mar 30, 2025",
        readTime: "5 min read",
    },
    {
        id: 4,
        title: "How we use AI to cut design iteration time by 60%",
        category: "AI & Automation",
        date: "Mar 12, 2025",
        readTime: "7 min read",
    },
]

// Burger (full-screen) menu on desktop — unchanged
const DESKTOP_MENU = [
    {
        id: "impact",
        title: "Impact",
        heading: "Our Impact",
        desc:
            "Every innovation that happens here is out of a quest to get better at what we are already doing. We deliver ideas that make a difference, create experiences that transform lives and build ecosystems that foster progress.",
        stats: [
            ["48+", "Projects launched successfully across 3 countries"],
            ["1000+", "Leads generated for our clients"],
            ["100%", "On-time delivery across every project"],
        ],
        button: "Explore Impact",
        url:"",
    },
    {
        id: "Case Studies",
        title: "Case Studies",
        heading: "Case Studies",
        desc:
            "From blueprint to production: Explore how we architect, automate, and scale intelligent software solutions that drive real business growth.",

            logos:[
                "/images/clients/logos/Drisya.webp",
                "/images/clients/logos/Visat algon.webp",
                "/images/clients/logos/Corewood algon.webp",

            ],
            button: "Explore Impact",
            href:"/work"
            
    },
    {
        id: "clients",
        title: "Clients",
        heading: "Our Clients",
        desc:
            "Trusted by visionary founders and enterprise leaders alike: Meet the global companies, startups, and institutions that rely on us to power their digital infrastructure.",
        logos: [
            { src: "/images/clients/logos/Corewood algon.webp", name: "Corewood" },
            { src: "/images/clients/logos/desire.webp", name: "Desire Study Abroad" },
            { src: "/images/clients/logos/Drisya.webp", name: "Drisya Marble" },
            { src: "/images/clients/logos/pass algon.webp", name: "MakeMyPass" },
            { src: "/images/clients/logos/qot algon.webp", name: "QOT Interiors" },
            { src: "/images/clients/logos/Visat algon.webp", name: "Visat" },
        ],
    },

    {
        id: "Careers",
        href: "/careers",
        title: "Careers",
        heading: "Join our team",
        desc:
            "Shape the future of automation and software engineering: Join a remote-first team of builders pushing the boundaries of AI, SaaS, and modern technology. ",
    
    },

    {
        id: "insights",
        title: "Insights",
        href: "/blogs",
        heading: "Insights & Thinking",
        
    },
    {
        id: "contact",
        title: "Contact",
        href: "/contact",
        heading: "Start a conversation",
        desc:
            "Tell us what you are building, where it needs to go, and what is getting in the way. We will help you shape the next move.",
        button: "Contact Us",
    },
]

export default function Navbar({ phase }) {
    const [menuOpen, setMenuOpen] = useState(false)
    const [active, setActive] = useState("impact")
    const [scrolled, setScrolled] = useState(false)

    // Top-bar mega menu (desktop) + accordions (mobile)
    const [openMenu, setOpenMenu] = useState(null)
    const [mobileOpen, setMobileOpen] = useState(null)
    const lastMenuRef = useRef(NAV_MENUS[0].id) // keeps content mounted while the panel fades out
    if (openMenu) lastMenuRef.current = openMenu
    const panelOpen = openMenu !== null && !menuOpen
    const panelData = NAV_MENUS.find((m) => m.id === lastMenuRef.current)

    const [navTheme, setNavTheme] = useState("light")

    const effectiveTheme = menuOpen || panelOpen ? "light" : navTheme

useEffect(() => {
  const sections = document.querySelectorAll("[data-navbar]")

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

      if (visible.length > 0) {
        setNavTheme(visible[0].target.dataset.navbar)
      }
    },
    {
      rootMargin: "-10% 0px -90% 0px",
      threshold: [0, 0.25, 0.5, 0.75, 1],
    }
  )

  sections.forEach((sec) => observer.observe(sec))

  const updateThemeImmediately = () => {
    let bestSection = null
    let maxVisible = 0

    sections.forEach((sec) => {
      const rect = sec.getBoundingClientRect()

      const visibleHeight =
        Math.min(rect.bottom, window.innerHeight) -
        Math.max(rect.top, 0)

      const ratio = visibleHeight / rect.height

      if (ratio > maxVisible) {
        maxVisible = ratio
        bestSection = sec
      }
    })

    if (bestSection) {
      setNavTheme(bestSection.dataset.navbar)
    }
  }

  // ✅ CASE 1: Splash flow
  const handleReady = () => {
    setTimeout(updateThemeImmediately, 150)
  }

  window.addEventListener("site-ready", handleReady)

  // ✅ CASE 2: Direct load (sessionStorage skip)
  setTimeout(updateThemeImmediately, 300)

  return () => {
    observer.disconnect()
    window.removeEventListener("site-ready", handleReady)
  }
}, [])



    // ── Store scroll Y before locking body ───────────────────────────────────
    const scrollYRef = useRef(0)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30)
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    useEffect(() => {
        if (menuOpen) {
            // 1. Capture current scroll position
            scrollYRef.current = window.scrollY

            // 2. Lock body: use top offset instead of position:fixed
            //    This keeps the page visually in place while preventing scroll
            document.body.style.overflow = "hidden"
            document.body.style.position = "fixed"
            document.body.style.top = `-${scrollYRef.current}px`
            document.body.style.width = "100%"
        } else {
            // 3. Unlock: remove fixed positioning
            document.body.style.overflow = ""
            document.body.style.position = ""
            document.body.style.top = ""
            document.body.style.width = ""

            // 4. Restore scroll position synchronously before next paint
            window.scrollTo({ top: scrollYRef.current, behavior: "instant" })
        }
    }, [menuOpen])

    const current = DESKTOP_MENU.find((i) => i.id === active)
    const featuredStudies = CASE_STUDIES.slice(0, 4)
    const latestBlog = BLOG_PREVIEWS[0]
    const secondaryBlogs = BLOG_PREVIEWS.slice(1, 4)

    const renderDesktopMenuContent = () => {
        if (current.id === "Case Studies") {
            return (
                <>
                    <h2 className="text-[54px] font-medium tracking-[0.04em] mb-6">
                        {current.heading}
                    </h2>
                    <p className="text-white max-w-[720px] text-[18px] leading-loose mb-10">
                        {current.desc}
                    </p>

                    <div className="grid grid-cols-2 gap-5 max-w-[780px]">
                        {featuredStudies.map((study) => (
                            <Link
                                key={study.id}
                                href={`/work/${study.id}`}
                                className="group block overflow-hidden border border-white/10 bg-white/[0.03] transition hover:border-white/30"
                            >
                                <div className="h-[135px] overflow-hidden bg-white/5">
                                    <img
                                        src={study.thumbnail || study.heroImage || study.commonImg}
                                        alt={`${study.title} case study`}
                                        loading="lazy"
                                        decoding="async"
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-4">
                                    <p className="mb-2 text-[11px] uppercase tracking-[0.1em] text-white/50">
                                        {study.category}
                                    </p>
                                    <h3 className="text-[20px] leading-tight tracking-wide font-medium text-white">
                                        {study.client || study.title}
                                    </h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </>
            )
        }

        if (current.id === "Careers") {
            return (
                <>
                    <h2 className="text-[54px] font-medium tracking-[0.04em] mb-6">
                        {current.heading}
                    </h2>
                    <p className="text-white max-w-[720px] text-[18px] leading-loose mb-8">
                        {current.desc}
                    </p>
                    <div className="mb-10 grid max-w-[720px] grid-cols-2 gap-x-10 gap-y-4">
                        {[
                            "React, Three.js, GSAP, Node, and modern cloud tools",
                            "Remote-friendly workflows with ownership and clear communication",
                            "Web, SaaS, ecommerce, AI automation, and immersive interfaces",
                            "Small team culture with space to learn, ship, and lead",
                        ].map((point) => (
                            <div key={point} className="flex gap-3 text-[15px] leading-relaxed text-white">
                                <span className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                                <span>{point}</span>
                            </div>
                        ))}
                    </div>
                    <Link
                        href="/careers"
                        className="inline-flex w-fit rounded-full border border-white px-8 py-3 text-[15px] tracking-[0.08em] text-white transition hover:bg-white hover:text-black"
                    >
                        View open roles
                    </Link>
                </>
            )
        }

        if (current.id === "insights") {
            return (
                <>
                    <h2 className="text-[54px] font-medium tracking-[0.04em] mb-6">
                        {current.heading}
                    </h2>
                    <p className="text-white max-w-[720px] text-[18px] leading-loose mb-10">
                        {current.desc}
                    </p>

                    <div className="grid max-w-[820px] grid-cols-[1.15fr_0.85fr] gap-6">
                        <Link href={`/blogs/${latestBlog.id}`} className="group block">
                            <div className="mb-5 h-[255px] overflow-hidden bg-white/5">
                                <img
                                    src={latestBlog.image}
                                    alt={latestBlog.title}
                                    loading="lazy"
                                    decoding="async"
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                />
                            </div>
                            <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-white/75">
                                {latestBlog.category} / {latestBlog.readTime}
                            </p>
                            <h3 className="text-[28px] leading-tight tracking-wide text-white">
                                {latestBlog.title}
                            </h3>
                        </Link>

                        <div className="flex flex-col border-t border-white/15">
                            {secondaryBlogs.map((post) => (
                                <Link
                                    key={post.id}
                                    href={`/blogs/${post.id}`}
                                    className="group border-b border-white/15 py-5 transition-colors duration-300"
                                >
                                    <div className="transition-transform duration-300 ease-out will-change-transform group-hover:translate-x-2">
                                        <p className="mb-1 text-[10px] uppercase tracking-[0.22em] text-white/70">
                                            {post.category} / {post.date}
                                        </p>
                                        <h3 className="text-[20px] leading-snug text-white/85 transition-colors duration-300 tracking-wide group-hover:text-white">
                                            {post.title}
                                        </h3>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </>
            )
        }

        if (current.id === "contact") {
            return (
                <>
                    <h2 className="text-[54px] font-medium tracking-[0.04em] mb-6">
                        {current.heading}
                    </h2>

                    <p className="text-white max-w-[720px] text-[18px] leading-loose mb-10">
                        {current.desc}
                    </p>

                    <div className="mb-10 grid max-w-[760px] grid-cols-[0.95fr_1.05fr] gap-8">
                        <div>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    "• Web & SaaS",
                                    "• AI Automation",
                                    "• Ecommerce",
                                    "• Brand Systems",
                                    "• 3D / Motion",
                                    "• Cybersecurity",
                                ].map((service) => (
                                    <span
                                        key={service}
                                        className="rounded-full px-4 py-2 text-[15px] text-white"
                                    >
                                        {service}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="border-l border-white/15 pl-8">
                            <div className="flex flex-col gap-4 text-[16px] text-white/80">
                                <a href="mailto:support@algonsolutions.com" className="transition hover:text-white">
                                    support@algonsolutions.com
                                </a>
                                <a href="tel:+917306060741" className="transition hover:text-white">
                                    +91 73060 60741
                                </a>
                                <p className="text-white/55">
                                    Kerala, India / Remote-first delivery
                                </p>
                            </div>
                        </div>
                    </div>

                    <Link
                        href={current.href || "#"}
                        className="mt-2 inline-flex w-fit rounded-full border border-white px-8 py-3 text-[15px] tracking-[0.15em] text-white transition hover:bg-white hover:text-black"
                    >
                        {current.button}
                    </Link>
                </>
            )
        }

        return (
            <>
                <h2 className="text-[54px] font-medium tracking-[0.04em] mb-6">
                    {current.heading}
                </h2>

                <p className="text-white max-w-[720px] text-[18px] leading-loose mb-10">
                    {current.desc}
                </p>

                {current.stats && (
                    <div className="grid grid-cols-3 gap-10 mb-12">
                        {current.stats.map(([num, label]) => (
                            <div key={label}>
                                <div className="text-[50px] font-semibold">{num}</div>
                                <div className="text-[16px] text-white ">
                                    {label}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {current.logos && (
                    <div className="-ml-[3vw]">
                        <div className="grid grid-cols-3 gap-10">
                            {current.logos.map((logo) => (
                                <div key={logo.src} className="flex items-center justify-center">
                                    <img src={logo.src} alt={`${logo.name} logo`} className="w-20" loading="lazy" decoding="async" />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {current.button && current.href && (
                    <Link
                        href={current.href || "#"}
                        className="mt-2 inline-flex w-fit rounded-full border border-white px-8 py-3 text-[15px] tracking-[0.15em] text-white transition hover:bg-white hover:text-black"
                    >
                        {current.button}
                    </Link>
                )}
            </>
        )
    }

    const toggleBurger = () => {
        setOpenMenu(null)
        setMenuOpen(!menuOpen)
    }

    return (
        <>
            {/* NAVBAR */}
            <nav
                onMouseLeave={() => setOpenMenu(null)}
                onKeyDown={(e) => { if (e.key === "Escape") setOpenMenu(null) }}
                className="fixed top-0 left-0 right-0 z-[997] flex items-center justify-between px-[5vw] h-[72px] transition-all duration-500 ease-out "
                style={{
                    background: menuOpen || panelOpen
                        ? "#050508"
                        : scrolled
                            ? effectiveTheme === "dark"
                                ? "rgba(252,252,247,1)"
                                : "rgba(5,5,8,1)"
                            : "transparent",
                    backdropFilter: menuOpen || panelOpen ? "none" : scrolled ? "blur(14px)" : "none",
                    boxShadow: scrolled
      ? "0 3px 7px rgba(0,0,0,0.03)"   // change 0.15 → your opacity
      : "none",
                }}
            >
                <Link href="/" onClick={() => setOpenMenu(null)}>
                
                    <img src={
    effectiveTheme === "dark"
      ? "/images/logo black.webp"
      : "/images/logo white.webp"
  } alt="Algon Solutions" className="h-6" fetchPriority="high" />
                </Link>

                {/* Desktop nav — dropdown triggers */}
                <div className="hidden lg:flex gap-9 text-[15px] tracking-[0.14em]">
                    {NAV_MENUS.map((menu) => {
                        const isOpen = openMenu === menu.id
                        return (
                            <button
                                key={menu.id}
                                type="button"
                                aria-haspopup="true"
                                aria-expanded={isOpen}
                                aria-controls="nav-mega-panel"
                                onMouseEnter={() => setOpenMenu(menu.id)}
                                onFocus={() => setOpenMenu(menu.id)}
                                onClick={() => setOpenMenu(isOpen ? null : menu.id)}
                                className={`flex items-center gap-1.5 bg-transparent font-light transition-colors ${effectiveTheme === "dark" ? "text-black  " : isOpen ? "text-white" : "text-white"}`}
                            >
                                {menu.label}
                                <ChevronDown
                                    size={14}
                                    className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                                />
                            </button>
                        )
                    })}
                </div>

                <div className="flex items-center gap-6">
                    <Link href="/contact" className={`${effectiveTheme === "dark" ? " text-[#fcfcf7] border border-[#050508] bg-[#050508] hidden lg:flex px-6 rounded-full  py-2 tracking-[0.15em]  hover:bg-[#fcfcf7] hover:text-[#050508] transition" :"hidden lg:flex px-6 py-2 tracking-[0.15em] rounded-full bg-[#fcfcf7] border border-[#fcfcf7] text-[#050508] hover:bg-[#050508] hover:text-[#fcfcf7] transition"}`}>
                        Contact Us
                    </Link>

                    {/* UNIVERSAL BURGER */}
                    <button
                        onClick={toggleBurger}
                        className="flex flex-col justify-center gap-[5px] p-1 bg-transparent border-none cursor-pointer w-8 h-8"
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`${effectiveTheme === "dark" ? "block w-8 h-[1.5px] bg-black rounded-sm origin-center" : "block w-8 h-[1.5px] bg-white rounded-sm origin-center"} ${menuOpen
                                    ? "animate-[burger-open-top_0.6s_ease-in-out_forwards]"
                                    : "animate-[burger-close-top_0.6s_ease-in-out_forwards]"
                                }`}
                        />
                        <span
                            className={`${effectiveTheme === "dark" ? "block w-8 h-[1.5px] bg-black rounded-sm origin-center" : "block w-8 h-[1.5px] bg-white rounded-sm origin-center"} ${menuOpen
                                    ? "animate-[burger-open-bottom_0.6s_ease-in-out_forwards]"
                                    : "animate-[burger-close-bottom_0.6s_ease-in-out_forwards]"
                                }`}
                        />
                    </button>
                </div>

                {/* ======================= */}
                {/* TOP-BAR MEGA PANEL      */}
                {/* Child of <nav> so hovering the panel keeps it open */}
                {/* ======================= */}
                <div
                    id="nav-mega-panel"
                    aria-hidden={!panelOpen}
                    className={`absolute left-0 right-0 top-full hidden max-h-[calc(100vh-72px)] overflow-y-auto border-t border-white/10 bg-[#050508] transition-all duration-300 ease-out lg:block ${
                        panelOpen
                            ? "translate-y-0 opacity-100 pointer-events-auto"
                            : "-translate-y-2 opacity-0 pointer-events-none"
                    }`}
                >
{panelData && (() => {
    const hasTitles = panelData.groups.some((g) => g.title)
    return (
        <div
            className={`grid gap-x-14 gap-y-10 px-[5vw] ${hasTitles ? "py-12" : "py-10"}`}
            style={{
                gridTemplateColumns: `minmax(200px,0.8fr) repeat(${panelData.groups.length}, minmax(0,1fr))`,
            }}
        >
            {panelData.groups.map((group, gi) => (
                <div key={group.title || gi}>
                    {group.title && (
                        <p className="mb-6 text-[16px] tracking-[0.08em] text-white font-medium">
                            {group.title}
                        </p>
                    )}
                    <ul className={group.chips ? "flex flex-wrap gap-2" : "flex flex-col gap-6"}>
                                        {group.items.map((item) => (
                                            <li key={item.href}>
                                                <Link
                                                    href={item.href}
                                                    tabIndex={panelOpen ? 0 : -1}
                                                    onClick={() => setOpenMenu(null)}
                                                    className={
                                                        group.chips
                                                            ? "inline-flex rounded-full border border-white/25 px-4 py-1.5 text-[16px] text-white/85 transition hover:border-white hover:bg-white hover:text-black"
                                                            : "inline-block text-[16px] font-light leading-snug text-white/80 transition duration-300 hover:translate-x-1 hover:text-white"
                                                    }
                                                >
                                                    {item.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                </div>
            ))}
        </div>
    )
})()}
                </div>
            </nav>

            {/* ======================= */}
            {/* DESKTOP BURGER MENU     */}
            {/* ======================= */}
            <div
                className={`fixed inset-0 z-[995] hidden lg:block transition-all duration-500 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    } bg-[#050508]`}
            >
                <div className="h-full flex">

                    {/* LEFT PANEL */}
                    <div
                        data-lenis-prevent={active === "Case Studies" ? "" : undefined}
                        className={`flex-1 min-h-0 px-[7vw] ${
                            active === "Case Studies"
                                ? "h-full overflow-y-auto overscroll-contain py-[120px] hide-scrollbar"
                                : "flex flex-col justify-center"
                        }`}
                    >
                        {renderDesktopMenuContent()}
                    </div>

                    {/* RIGHT PANEL */}
                    <div className="w-[32%] flex flex-col justify-center items-end pr-[7vw] gap-10">
                        {DESKTOP_MENU.map((item) => (
                            <Link
                            href={item.href || "#"}

                            key={item.id}
                                onMouseEnter={() => setActive(item.id)}
                                className={`text-[36px] tracking-[0.05em] transition ${active === item.id ? "text-white" : "text-white/35"
                                    } hover:text-white`}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>

                </div>
            </div>


            

            {/* ======================= */}
            {/* MOBILE MENU             */}
            {/* ======================= */}
            <div
                className="fixed inset-0 z-[995] flex flex-col transition-all duration-500 lg:hidden"
                style={{
                    background: "rgba(5,5,8,1)",
                    opacity: menuOpen ? 1 : 0,
                    pointerEvents: menuOpen ? "all" : "none",
                    transform: menuOpen ? "translateY(0)" : "translateY(-16px)",
                }}
            >
                {/* SCROLLABLE MENU */}
                <div className="flex-1 overflow-y-auto pt-[12vh] pb-[15vh] hide-scrollbar">

<div className="flex flex-col gap-6">
  {/* DROPDOWN MENUS (accordions) */}
  {NAV_MENUS.map((menu, i) => {
    const open = mobileOpen === menu.id

    return (
      <div key={menu.id} className="flex flex-col">
        <button
          type="button"
          aria-expanded={open}
          onClick={() => setMobileOpen(open ? null : menu.id)}
          className="font-primary flex w-full items-center justify-between px-[8vw] text-left text-[20px] tracking-[0.07em] transition-all duration-300"
          style={{
            transitionDelay: menuOpen ? `${i * 60}ms` : "0ms",
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateY(0)" : "translateY(10px)",
          }}
        >
          {menu.label}
          <ChevronDown
            size={18}
            className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </button>

        <div
          className={`grid transition-[grid-template-rows] duration-300 ease-out ${
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col gap-7 px-[8vw] pt-6">
              {menu.groups.map((group, gi) => (
                <div key={group.title || gi}>
                  {/* <p className="mb-3 text-[13px] tracking-[0.08em] text-white/45">
                    {group.title}
                  </p> */}
                  <div className={group.chips ? "flex flex-wrap gap-2" : "flex flex-col gap-3.5"}>
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        tabIndex={open ? 0 : -1}
                        onClick={() => { setMenuOpen(false); setMobileOpen(null) }}
                        className={
                          group.chips
                            ? "rounded-full border border-white/25 px-4 py-1.5 text-[14px] text-white/85"
                            : "text-[17px] leading-snug font-light text-white/80 transition hover:text-white"
                        }
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 h-[1px] w-full bg-white/10" />
      </div>
    )
  })}

  {/* OTHER LINKS */}
  {MOBILE_LINKS.map((item, i) => {
    const index = NAV_MENUS.length + i

    return (
      <div key={item.label} className="flex flex-col gap-6">
        <Link
          href={item.href}
          onClick={() => setMenuOpen(false)}
          className="font-primary px-[8vw] font-light text-[20px] tracking-[0.07em] transition-all duration-300 hover:text-white/60"
          style={{
            transitionDelay: menuOpen ? `${index * 60}ms` : "0ms",
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateY(0)" : "translateY(10px)",
          }}
        >
          {item.label}
        </Link>

        <div className="w-full h-[1px] bg-white/10" />
      </div>
    );
  })}
</div>
                </div>

                {/* FLOATING CTA */}
<div
    className="absolute bg-black inset-x-0 bottom-0 z-[999] px-8 pb-10 pt-5"
    style={{ pointerEvents: menuOpen ? "auto" : "none" }}
>
    <div style={{ pointerEvents: menuOpen ? "auto" : "none" }}>
        <Link href="/contact" onClick={() => setMenuOpen(false)} className="font-primary w-full rounded-full text-[20px] px-8 py-4 tracking-[0.07em] bg-white text-black transition hover:bg-white/90">
            Contact Us
        </Link>
    </div>
</div>
            </div>
        </>
    )
}