"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import animationData from "@/assets/Bulb.json";
import Lottie from "@/components/LottieClient";

gsap.registerPlugin(ScrollTrigger);

const CATEGORIES = ["All", "Design", "Development", "Marketing", "AI & Automation", "Startup"];

import { POSTS } from "@/data/blogPosts";
export { POSTS };

function BlogHero() {
  const heroRef = useRef();
  const line1Ref = useRef();
  const line2Ref = useRef();
  const marqRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      let x = 0;
      let raf;
      const track = marqRef.current;
      const run = () => {
        x -= 0.55;
        if (track && Math.abs(x) >= track.scrollWidth / 2) x = 0;
        if (track) track.style.transform = `translateX(${x}px)`;
        raf = requestAnimationFrame(run);
      };
      raf = requestAnimationFrame(run);

      gsap.set([line1Ref.current, line2Ref.current], { autoAlpha: 0, y: 60 });
      const tl = gsap.timeline({ delay: 0.1 });
      tl
        .to(line1Ref.current, { autoAlpha: 1, y: 0, duration: 0.9, ease: "power4.out" }, 0.1)
        .to(line2Ref.current, { autoAlpha: 1, y: 0, duration: 0.9, ease: "power4.out" }, 0.22);

      return () => cancelAnimationFrame(raf);
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="bl-hero flex-col justify-center">
      {/* <div className="ab-grid-neon" /> */}
      <div className="ab-grain" />
      
      <div className="bl-hero-ghost" aria-hidden="true">BLOG</div>

      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="pt-[10px] md:pt-[60px] mt-10 pl-[0vw] md:pl-[8vw] max-w-[900px] h-[40vh] md:h-[80vh]">
          <h1 ref={line1Ref} className="bl-hero-h1 text-[#265eed]  text-center md:text-start">Insights,<br /> <span className="text-white">ideas &</span></h1>
          <h1 ref={line2Ref} className="bl-hero-h11 text-center md:text-start">stories.</h1>
        </div>
        <div className="flex relative w-[100vw] md:w-[550px] h-[40vh] md:h-[550px] justify-center">
          <Lottie className="flex justify-center" animationData={animationData} />
        </div>
      </div>

      {/* <div className="ab-marq-wrap">
        <div ref={marqRef} className="ab-marq-track">
          {[...Array(4)].map((_, g) =>
            ["Design", "Development", "AI & Automation", "Marketing", "Startups", "Kerala", "Real Work", "No Fluff"].map((s, i) => (
              <span key={`${g}-${i}`} className="ab-marq-item">
                {s}<span className="ab-marq-dot">◆</span>
              </span>
            ))
          )}
        </div>
      </div> */}
    </section>
  );
}

function FeaturedPost({ post, onRead }) {
  const ref = useRef();
  useEffect(() => {
    gsap.set(ref.current, { autoAlpha: 0, y: 40 });
    gsap.to(ref.current, {
      autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out",
      scrollTrigger: { trigger: ref.current, start: "top 85%" },
    });
  }, []);

  return (
    <div ref={ref} className="bl-featured" onClick={() => onRead(post)}>
      <div className="bl-featured-img-wrap">
        <img src={post.image} alt={post.title} className="bl-featured-img" />
        <div className="bl-featured-img-overlay" />
      </div>
      <div className="bl-featured-content">
        <div className="bl-featured-top">
          <span className="bl-cat-pill" >{post.category}</span>
          <span className="bl-featured-badge">Featured</span>
        </div>
        <h2 className="bl-featured-title">{post.title}</h2>
        <p className="bl-featured-excerpt">{post.excerpt}</p>
        <div className="bl-featured-meta">
          <div className="bl-author-row">
            
            <div>
              <p className="bl-author-name">{post.author.name}</p>
              <p className="bl-author-role">{post.author.role}</p>
            </div>
          </div>
          <div className="bl-meta-right">
            <span className="bl-date">{post.date}</span>
            <span className="bl-sep">·</span>
            <span className="bl-read-time">{post.readTime}</span>
          </div>
        </div>
        <button className="bl-read-btn">
          Read article
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none" style={{ marginLeft: 10 }}>
            <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function BlogCard({ post, index, onRead }) {
  const ref = useRef();
  useEffect(() => {
    gsap.set(ref.current, { autoAlpha: 0, y: 36 });
    gsap.to(ref.current, {
      autoAlpha: 1, y: 0, duration: 0.7, ease: "power3.out",
      delay: (index % 3) * 0.1,
      scrollTrigger: { trigger: ref.current, start: "top 90%" },
    });
  }, [index]);

  return (
    <div ref={ref} className="bl-card" onClick={() => onRead(post)}>
      <div className="bl-card-img-wrap">
        <img src={post.image} alt={post.title} className="bl-card-img" />
        <div className="bl-card-img-overlay" />
        <span className="bl-cat-pill bl-cat-pill--card" style={{ "--cat": post.accent }}>{post.category}</span>
      </div>
      <div className="bl-card-body">
        <h3 className="bl-card-title">{post.title}</h3>
        <p className="bl-card-excerpt">{post.excerpt}</p>
        <div className="bl-card-footer">
          <div className="bl-author-row bl-author-row--sm">
            
            <div>
              <p className="bl-author-name bl-author-name--sm">{post.author.name}</p>
              <p className="bl-author-role">{post.author.role}</p>
            </div>
          </div>
          <div className="bl-card-meta">
            <span className="bl-date">{post.date}</span>
            <span className="bl-sep">·</span>
            <span className="bl-read-time">{post.readTime}</span>
          </div>
        </div>
      </div>
      <div className="bl-card-bar" />
    </div>
  );
}

function BlogGrid({ onRead }) {
  const [active, setActive] = useState("All");
  const sectionRef = useRef();
  const headRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(headRef.current, { autoAlpha: 0, y: 28 });
      gsap.to(headRef.current, {
        autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: headRef.current, start: "top 82%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const featured = POSTS.find((p) => p.featured);
  const filtered = POSTS.filter((p) => !p.featured && (active === "All" || p.category === active));

  return (
    <section ref={sectionRef} className="bl-section">
      {/* <div className="ab-grid-bg" /> */}
      <div className="ab-grain" />
      {/* <div className="ab-orb bl-orb--grid" /> */}

      <div className="bl-section-inner">
        <div ref={headRef} className="bl-section-head">
          {/* <p className="ab-eyebrow">All posts</p> */}
          <h2 className="ab-section-title">From the studio.</h2>
        </div>

        {featured && <FeaturedPost post={featured} onRead={onRead} />}

        <div className="bl-filter-row">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`bl-filter-pill ${active === cat ? "bl-filter-pill--on" : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="bl-grid">
          {filtered.map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} onRead={onRead} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function BlogsPage() {
  const router = useRouter();

  const handleRead = (post) => {
    router.push(`/blogs/${post.id}`);
  };

  return (
    <>
      <style>{`
        .ab-grid-bg {
          position:absolute; inset:0; pointer-events:none; z-index:0;
          background-image:
            linear-gradient(rgba(41,141,255,0.018) 1px, transparent 1px),
            linear-gradient(90deg,rgba(41,141,255,0.018) 1px, transparent 1px);
          background-size:64px 64px;
        }
        .ab-grid-neon {
          position:absolute; inset:0; pointer-events:none; z-index:0;
          background-image:
            linear-gradient(rgba(41,141,255,0.055) 1px, transparent 1px),
            linear-gradient(90deg,rgba(41,141,255,0.055) 1px, transparent 1px);
          background-size:64px 64px;
        }
        .ab-grain {
          position:absolute; inset:0; pointer-events:none; z-index:0; opacity:0.025;
          background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size:200px 200px;
        }
        .ab-orb { position:absolute; border-radius:50%; pointer-events:none; z-index:0; }
        .ab-orb--hero-r {
          top:-10%; right:-5%; width:60vw; height:60vw; max-width:720px; max-height:720px;
          background:radial-gradient(ellipse,rgba(41,141,255,0.11) 0%,transparent 65%);
          filter:blur(2px);
        }
        .ab-orb--hero-l {
          bottom:-5%; left:-8%; width:38vw; height:38vw; max-width:440px; max-height:440px;
          background:radial-gradient(ellipse,rgba(41,141,255,0.07) 0%,transparent 65%);
        }
        .ab-eyebrow {
          font-family:'DM Sans',sans-serif; font-size:10px; letter-spacing:0.3em;
          text-transform:uppercase; color:rgba(255,255,255,0); margin:0 0 16px; display:block;
        }
        .ab-section-title {
           font-size: clamp(32px, 4.5vw, 66px);
          font-weight: 500; line-height: 1.05;
           color: #fff; margin: 0; letter-spacing:2.05;
        }
        .ab-marq-wrap {
          position:relative; z-index:1;
          border-top:1px solid rgba(255,255,255,0.2);
          border-bottom:1px solid rgba(255,255,255,0.2);
          padding:18px 0; overflow:hidden;
        }
        .ab-marq-track { display:flex; white-space:nowrap; will-change:transform; }
        .ab-marq-item {
          font-family:'DM Sans',sans-serif; font-size:11px; letter-spacing:0.2em;
          text-transform:uppercase; color:rgba(255,255,255,0.4);
          padding:0 28px; display:inline-flex; align-items:center; gap:10px;
        }
        .ab-marq-dot { font-size:7px; color:rgba(255,255,255,0.4); }
        .bl-hero {
          position:relative; background:#050508;
          min-height:100vh; display:flex; flex-direction:column;
          justify-content:center; overflow:hidden; padding-top:68px;
        }
        .bl-hero-ghost {
          position:absolute; bottom:-2%; right:2vw;
          font-family:'Syne',sans-serif; font-weight:800;
          font-size:clamp(140px,25vw,360px); line-height:0.88;
          color:transparent; -webkit-text-stroke:1px rgba(255,255,255,0.03);
          pointer-events:none; z-index:0; user-select:none; letter-spacing:-0.05em;
        }
        .bl-hero-h1 {
          font-size:clamp(65px,7.5vw,105px); font-weight:400; line-height:0.94;
          letter-spacing:0.01em;  margin:0; display:block;
        }

        .bl-hero-h11 {
          font-size:clamp(100px,9.5vw,140px); font-weight:500; line-height:0.94;
          letter-spacing:0.01em;  margin:0; display:block;
        }
        .bl-section {
          position:relative; background:#050508;
          padding:90px 7vw 120px;
          overflow:hidden;
        }
        .bl-orb--grid {
          top:8%; right:-10%; width:55vw; height:55vw; max-width:640px; max-height:640px;
          background:radial-gradient(ellipse,rgba(41,141,255,0.06) 0%,transparent 65%);
        }
        .bl-section-inner { position:relative; z-index:1; }
        .bl-section-head { margin-bottom:56px; }
        .bl-featured {
          display:grid; grid-template-columns:1.1fr 1fr; gap:1px;
          background:rgba(255,255,255,0.0);
          margin-bottom:72px; cursor:pointer; overflow:hidden; transition:background 0.3s;
        }
        .bl-featured:hover { background:rgba(255,255,255,0.0); }
        .bl-featured-img-wrap { position:relative; overflow:hidden; min-height:460px; border-radius:20px; }
        .bl-featured-img { width:100%; height:100%; object-fit:cover; transition:transform 0.7s ease; }
        .bl-featured:hover .bl-featured-img { transform:scale(1.04); }
        .bl-featured-img-overlay {
          position:absolute; inset:0;
          background:linear-gradient(135deg, rgba(5,5,8,0.35) 0%, transparent 60%);
        }
        .bl-featured-content {
           padding:48px 44px;
          display:flex; flex-direction:column; justify-content:center;
        }
        .bl-featured-top { display:flex; align-items:center; gap:14px; margin-bottom:24px; }
        .bl-featured-badge {
          font-size:12px; letter-spacing:0.1em;
           color:rgba(255,255,255,1); border-radius:999px;
          border:1px solid rgba(255,255,255,0.6); padding:4px 10px;
        }
        .bl-featured-title {
          font-size:clamp(20px,2.4vw,40px); font-weight:500; line-height:1.18;
          letter-spacing:-0.015em; color:#fff; margin:0 0 18px;
        }
        .bl-featured-excerpt {
          font-size:16px; line-height:1.78; font-weight:300;
          color:rgba(255,255,255,0.8); margin:0 0 32px; max-width:46ch;
        }
        .bl-featured-meta {
          display:flex; justify-content:space-between; align-items:center;
          flex-wrap:wrap; gap:16px; margin-bottom:32px;
          padding-top:24px; border-top:1px solid rgba(255,255,255,0.07);
        }
        .bl-read-btn {
          display:inline-flex; align-items:center;
          padding:10px 20px;  color:#fff; cursor:pointer;
          font-size:16px; letter-spacing:0.18em;
          font-weight:500; align-self:flex-start;
          transition:background 0.25s, transform 0.2s;border: solid 1px rgba(256,256,256,1);border-radius:999px;
        }
        .bl-read-btn:hover { background:#fff; color:#000; }
        .bl-filter-row { display:flex; gap:8px; flex-wrap:wrap; margin-bottom:48px; }
        .bl-filter-pill {
          padding:8px 18px; border:1px solid rgba(255,255,255,0.6); border-radius:999px;
          background:transparent; color:rgba(255,255,255,0.8);
           font-size:13px; letter-spacing:0.08em; font-weight:600;
           cursor:pointer; transition:all 0.3s;
        }
        .bl-filter-pill:hover { border-color:rgba(255,255,255,0.8); color:rgba(255,255,255,1); }
        .bl-filter-pill--on { background:#fff; border-color:#fff; color:#000; }
        .bl-cat-pill {
           font-size:12px; letter-spacing:0.05em; background:rgba(256,256,256,1);
           color:rgba(0,0,0,1); border-radius:999px; font-weight:500;
          border:1px solid rgba(255,255,255,0.6); padding:4px 10px;
        }
        .bl-cat-pill--card { position:absolute; top:16px; left:16px; z-index:2; }
        .bl-grid {
          display:grid; grid-template-columns:repeat(3,1fr);
          gap:10px; background:rgba(255,255,255,0.01); padding:10px; border-radius:20px;
        }
        .bl-card {
          position:relative; background:#050508; overflow:hidden; border-radius:10px;
          cursor:pointer; display:flex; flex-direction:column; transition:background 0.3s;
        }
        .bl-card:hover { background:rgba(0,0,0,1); }
        .bl-card-img-wrap { position:relative; overflow:hidden; height:220px; flex-shrink:0; }
        .bl-card-img { width:100%; height:100%; object-fit:cover; transition:transform 0.7s ease; }
        
        .bl-card-img-overlay {
          position:absolute; inset:0;
          background:linear-gradient(to bottom, transparent 40%, rgba(5,5,8,0.5) 100%);
        }
        .bl-card-body { padding:28px 24px 24px; display:flex; flex-direction:column; flex:1; }
        .bl-card-title {
          font-size:clamp(15px,1.4vw,22px); font-weight:400; line-height:1.3;
          letter-spacing:0.005em; color:#fff; margin:0 0 12px;
        }
        .bl-card-excerpt {
          font-size:14px; line-height:1.72; font-weight:300;
          color:rgba(255,255,255,0.8); margin:0 0 auto; flex:1;
          display:-webkit-box; -webkit-line-clamp:3; -webkit-box-orient:vertical; overflow:hidden;
        }
        .bl-card-footer {
          display:flex; justify-content:space-between; align-items:center;
          flex-wrap:wrap; gap:12px; margin-top:24px;
          padding-top:20px; border-top:1px solid rgba(255,255,255,0.06);
        }
        .bl-card-meta { display:flex; align-items:center; gap:6px; }
        .bl-card-bar {
          position:absolute; bottom:0; left:0; width:0; height:2px;
          background:#fff; transition:width 0.45s ease;
        }
        .bl-card:hover .bl-card-bar { width:100%; }
        .bl-author-row { display:flex; align-items:center; gap:12px; }
        .bl-author-row--sm { gap:8px; }
        .bl-author-avatar {
          width:36px; height:36px; border-radius:50%; flex-shrink:0;
          background:rgba(41,141,255,0.15); border:1px solid rgba(41,141,255,0.3);
          display:flex; align-items:center; justify-content:center;
          font-family:'Syne',sans-serif; font-size:14px; font-weight:600; color:#298dff;
        }
        .bl-author-avatar--sm { width:35px; height:35px; font-size:15px; }
        .bl-author-name { font-size:15px; font-weight:400; color:rgba(255,255,255,0.8); margin:0 0 2px; }
        .bl-author-name--sm { font-size:14px; }
        .bl-author-role {
          font-size:13px; color:rgba(255,255,255,0.6); margin:0;
          font-family:'DM Sans',sans-serif; letter-spacing:0.05em;
        }
        .bl-date, .bl-read-time { font-size:13px;  color:rgba(255,255,255,0.6); }
        .bl-sep { color:rgba(255,255,255,0.2); font-size:10px; }
        .bl-meta-right { display:flex; align-items:center; gap:6px; }
        @media (max-width:1100px) {
          .bl-grid { grid-template-columns:repeat(2,1fr); }
          .bl-featured { grid-template-columns:1fr; }
          .bl-featured-img-wrap { min-height:300px; }
        }
        @media (max-width:768px) {
          .bl-grid { grid-template-columns:1fr; }
          .bl-featured-content { padding:32px 28px; }
          .bl-featured-meta { flex-direction:column; align-items:flex-start; }
        }
        @media (max-width:480px) {
          .bl-filter-row { gap:6px; }
          .bl-filter-pill { font-size:10px; padding:7px 14px; }
        }
      `}</style>

      <div style={{ background: "#050508", color: "#fff", minHeight: "100vh" }}>
        <Navbar />
        <BlogHero />
        <BlogGrid onRead={handleRead} />
        <Footer />
      </div>
    </>
  );
}
