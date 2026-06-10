import { createFileRoute } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  Briefcase,
  Building2,
  Calculator,
  CheckCircle2,
  FileText,
  Mail,
  MapPin,
  Phone,
  Quote,
  ScrollText,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import { Navbar } from "@/components/site/Navbar";
import { Reveal, SectionEyebrow } from "@/components/site/Reveal";
import { ScrollProgress, Spotlight, ParallaxTilt, HeroParallaxBg } from "@/components/site/Effects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arjun Mehta, FCA — Chartered Accountant & Business Advisor" },
      {
        name: "description",
        content:
          "Trusted Chartered Accountant for tax advisory, GST, audit, compliance and corporate strategy. Author and advisor to founders, enterprises, and high-net-worth individuals.",
      },
      { property: "og:title", content: "Arjun Mehta, FCA — Chartered Accountant & Business Advisor" },
      {
        property: "og:description",
        content:
          "Premium advisory across tax, GST, audit, compliance and corporate strategy.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Expertise />
        <Books />
        <Experience />
        <Insights />
        <Testimonials />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 md:pt-40 pb-20 md:pb-28">
      <HeroParallaxBg />

      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-1.5 text-xs font-medium text-ink animate-pulse-ring"
          >
            <Sparkles size={14} className="text-gold" />
            Now accepting Q3 advisory engagements
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold text-ink text-balance leading-[1.02]"
          >
            Clarity in numbers.{" "}
            <span className="italic font-light aurora-text">Conviction</span>{" "}
            in counsel.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg text-foreground/80 leading-relaxed"
          >
            I'm <span className="text-ink font-medium">Arjun Mehta, FCA</span> — a
            Chartered Accountant, author, and business advisor partnering with
            founders, enterprises, and private wealth families across India.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-ink text-white px-7 py-3.5 text-sm font-medium hover:bg-primary transition-colors"
            >
              Book a consultation
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#expertise"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-7 py-3.5 text-sm font-medium text-ink hover:bg-ink/5 transition-colors"
            >
              Explore practice areas
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-foreground/70"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-primary" /> ICAI Member since 2008
            </div>
            <div className="flex items-center gap-2">
              <Award size={16} className="text-gold" /> 3x Best Advisor — Finworld
            </div>
            <div className="flex items-center gap-2">
              <BookOpen size={16} className="text-primary" /> Author of 2 bestsellers
            </div>
          </motion.div>
        </div>

        {/* Portrait */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto max-w-md"
          >
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary/30 via-transparent to-gold/40 blur-2xl opacity-70 animate-float" />
            <ParallaxTilt className="relative rounded-[2rem] overflow-hidden border border-ink/10 shadow-2xl">
              <img
                src={portrait}
                width={1024}
                height={1024}
                alt="Arjun Mehta, Chartered Accountant"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-x-4 bottom-4 glass-card rounded-2xl p-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gold/20 grid place-items-center">
                  <Star size={16} className="text-gold" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-primary font-medium">
                    Rated 4.9 / 5
                  </div>
                  <div className="text-sm text-ink">240+ engagements delivered</div>
                </div>
              </div>
            </ParallaxTilt>
            {/* floating stat card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="hidden sm:flex absolute -left-10 top-12 glass-card rounded-2xl px-5 py-4 items-center gap-3 shadow-xl animate-float"
              style={{ animationDelay: "1.2s" }}
            >
              <Briefcase size={18} className="text-primary" />
              <div>
                <div className="text-xl font-display font-bold text-ink">17+</div>
                <div className="text-[11px] uppercase tracking-widest text-foreground/60">
                  Years practice
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- MARQUEE ---------------- */
function Marquee() {
  const items = [
    "Featured in Economic Times",
    "Speaker — ICAI Annual Summit",
    "Bloomberg Quint Contributor",
    "Mint • Op-Ed Columnist",
    "Forbes India 30 Advisors",
    "CNBC TV18 Panelist",
  ];
  return (
    <section className="border-y border-ink/10 bg-secondary/40 overflow-hidden">
      <div className="py-6 flex gap-12 whitespace-nowrap animate-[scroll_30s_linear_infinite]">
        {[...items, ...items].map((t, i) => (
          <div
            key={i}
            className="flex items-center gap-12 text-sm uppercase tracking-[0.2em] text-foreground/55"
          >
            {t}
            <span className="h-1 w-1 rounded-full bg-gold" />
          </div>
        ))}
      </div>
      <style>{`@keyframes scroll { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  const stats = [
    { k: "17+", v: "Years in practice" },
    { k: "240+", v: "Clients advised" },
    { k: "₹1,200 Cr", v: "Tax optimised" },
    { k: "2", v: "Books authored" },
  ];
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionEyebrow>About</SectionEyebrow>
            <h2 className="mt-5 text-4xl md:text-5xl font-bold text-ink text-balance leading-[1.05]">
              A practitioner's perspective, an advisor's discipline.
            </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-7 space-y-6 text-lg leading-relaxed text-foreground/85">
          <Reveal>
            <p>
              For nearly two decades I have helped enterprises, founders and
              private wealth families translate complex regulation into calm,
              decisive action. My work sits at the intersection of taxation,
              audit, governance and long-horizon strategy.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              Trained at <span className="text-ink font-medium">PwC</span> and
              later partner at a boutique Mumbai practice, I now lead an
              independent advisory serving clients across 9 Indian states and 4
              international jurisdictions.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
              {stats.map((s) => (
                <div key={s.v} className="border-l-2 border-gold pl-4">
                  <div className="text-3xl font-display font-bold text-ink">
                    {s.k}
                  </div>
                  <div className="text-xs uppercase tracking-widest text-foreground/60 mt-1">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- EXPERTISE ---------------- */
function Expertise() {
  const areas = [
    {
      icon: Calculator,
      title: "Tax Advisory",
      desc: "Direct & international tax structuring, transfer pricing and high-stakes representation before authorities.",
    },
    {
      icon: FileText,
      title: "GST",
      desc: "Implementation, refunds, departmental audits and litigation across pan-India operations.",
    },
    {
      icon: ShieldCheck,
      title: "Audit",
      desc: "Statutory, internal and concurrent audits engineered for both assurance and operational insight.",
    },
    {
      icon: ScrollText,
      title: "Compliance",
      desc: "End-to-end ROC, FEMA, RBI and SEBI compliance for growing and listed enterprises.",
    },
    {
      icon: Building2,
      title: "Corporate Advisory",
      desc: "M&A diligence, fundraising readiness, ESOPs and board-level financial governance.",
    },
    {
      icon: Briefcase,
      title: "Family Office",
      desc: "Succession planning, trust structures and consolidated reporting for HNI families.",
    },
  ];
  return (
    <section id="expertise" className="py-24 md:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <Reveal>
            <SectionEyebrow>Practice areas</SectionEyebrow>
            <h2 className="mt-5 text-4xl md:text-5xl font-bold text-ink leading-[1.05]">
              Six disciplines. One unified financial partner.
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 rounded-3xl overflow-hidden border border-ink/10">
          {areas.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.05}>
              <Spotlight className="group bg-background p-8 h-full hover:bg-ink hover:text-white transition-all duration-500 cursor-default block">
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 group-hover:bg-gold/20 grid place-items-center transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <a.icon size={20} className="text-primary group-hover:text-gold transition-colors" />
                  </div>
                  <span className="text-xs font-mono text-foreground/40 group-hover:text-white/40">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-8 text-2xl font-display font-semibold text-ink group-hover:text-white transition-colors">
                  {a.title}
                </h3>
                <p className="mt-3 text-foreground/75 group-hover:text-white/75 leading-relaxed">
                  {a.desc}
                </p>
                <div className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:text-gold transition-all group-hover:gap-3">
                  Learn more <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- BOOKS ---------------- */
function Books() {
  const books = [
    {
      title: "The Quiet Ledger",
      sub: "Principles for a calmer financial life",
      year: "2024",
      tag: "Bestseller",
      gradient: "from-primary to-ink",
    },
    {
      title: "Tax, Simply",
      sub: "A founder's guide to Indian taxation",
      year: "2021",
      tag: "Editor's Pick",
      gradient: "from-ink to-primary",
    },
    {
      title: "Governance by Design",
      sub: "Boardroom playbooks for new economy firms",
      year: "2026",
      tag: "Upcoming",
      gradient: "from-gold to-primary",
    },
  ];
  return (
    <section id="books" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <Reveal>
              <SectionEyebrow>Books & publications</SectionEyebrow>
              <h2 className="mt-5 text-4xl md:text-5xl font-bold text-ink leading-[1.05]">
                Words that travel beyond the boardroom.
              </h2>
            </Reveal>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-ink">
            View full bibliography <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {books.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.1}>
              <article className="group h-full rounded-3xl border border-ink/10 p-6 hover:-translate-y-1 hover:shadow-2xl transition-all duration-500 bg-background">
                <div className={`shine-on-hover aspect-[3/4] rounded-2xl bg-gradient-to-br ${b.gradient} relative overflow-hidden p-7 flex flex-col justify-between`}>
                  <div className="flex items-center justify-between text-white/80 text-xs uppercase tracking-widest">
                    <span>{b.tag}</span>
                    <span>{b.year}</span>
                  </div>
                  <div className="text-white">
                    <div className="h-px w-10 bg-gold mb-4" />
                    <h3 className="font-display text-2xl font-semibold leading-tight">
                      {b.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/75">{b.sub}</p>
                  </div>
                  <div className="absolute -right-6 -bottom-6 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-sm text-foreground/70">By Arjun Mehta</span>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                    Read <ArrowRight size={14} />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- EXPERIENCE ---------------- */
function Experience() {
  const items = [
    { year: "2022 — Present", role: "Founder & Principal Advisor", org: "Mehta & Associates", desc: "Independent advisory practice serving 80+ enterprise and HNI clients." },
    { year: "2017 — 2022", role: "Partner, Tax & Advisory", org: "Krishnan Mehta LLP", desc: "Led the direct tax and corporate advisory verticals across western India." },
    { year: "2013 — 2017", role: "Senior Manager", org: "PwC India", desc: "International tax structuring for inbound FDI and cross-border M&A." },
    { year: "2008 — 2013", role: "Articled & Audit Associate", org: "Deloitte Haskins & Sells", desc: "Statutory and concurrent audits for listed financial institutions." },
  ];
  return (
    <section id="experience" className="py-24 md:py-32 bg-ink text-white relative overflow-hidden">
      <div className="absolute inset-0 -z-0 opacity-30 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.08)_1px,_transparent_0)] [background-size:32px_32px]" />
      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="max-w-2xl">
          <Reveal>
            <div className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-gold">
              <span className="h-px w-8 bg-gold" /> Experience
            </div>
            <h2 className="mt-5 text-4xl md:text-5xl font-bold leading-[1.05] text-white">
              A career built one client at a time.
            </h2>
          </Reveal>
        </div>

        <div className="mt-20 relative max-w-4xl mx-auto">
          <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-white/15" />
          <div className="space-y-12">
            {items.map((it, i) => (
              <Reveal key={it.year} delay={i * 0.08}>
                <div className={`relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}>
                  <div className="absolute left-3 md:left-1/2 -translate-x-1/2 top-2 h-3 w-3 rounded-full bg-gold ring-4 ring-ink" />
                  <div className={`pl-10 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                    <div className="text-xs uppercase tracking-widest text-gold">{it.year}</div>
                    <h3 className="mt-2 text-2xl font-display font-semibold text-white">{it.role}</h3>
                    <div className="text-white/70">{it.org}</div>
                  </div>
                  <div className={`pl-10 md:pl-0 mt-3 md:mt-0 ${i % 2 === 0 ? "md:pl-12" : "md:text-right md:pr-12"}`}>
                    <p className="text-white/75 leading-relaxed">{it.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- INSIGHTS ---------------- */
function Insights() {
  const articles = [
    {
      cat: "Tax",
      date: "May 2026",
      title: "Section 43B(h): What founders still get wrong",
      read: "8 min read",
    },
    {
      cat: "GST",
      date: "Apr 2026",
      title: "Refunds in inverted duty: a 2026 playbook",
      read: "11 min read",
    },
    {
      cat: "Governance",
      date: "Mar 2026",
      title: "Why your audit committee should meet weekly",
      read: "6 min read",
    },
  ];
  return (
    <section id="insights" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <Reveal>
              <SectionEyebrow>Insights & articles</SectionEyebrow>
              <h2 className="mt-5 text-4xl md:text-5xl font-bold text-ink leading-[1.05]">
                Thought leadership, written for practitioners.
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {articles.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.08}>
              <article className="group h-full rounded-3xl border border-ink/10 p-8 hover:bg-secondary/60 transition-colors flex flex-col">
                <div className="flex items-center justify-between text-xs uppercase tracking-widest text-foreground/55">
                  <span className="text-primary font-medium">{a.cat}</span>
                  <span>{a.date}</span>
                </div>
                <h3 className="mt-8 text-2xl font-display font-semibold text-ink leading-snug flex-1">
                  {a.title}
                </h3>
                <div className="mt-10 flex items-center justify-between">
                  <span className="text-sm text-foreground/60">{a.read}</span>
                  <span className="h-10 w-10 rounded-full border border-ink/15 grid place-items-center group-hover:bg-ink group-hover:text-white group-hover:border-ink transition-all">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  const quotes = [
    {
      q: "Arjun restructured our group within a quarter — saved us 14% in effective tax and a year of internal debate.",
      name: "Priya Raghavan",
      role: "Founder, Lumen Health",
    },
    {
      q: "There are CAs, and then there are advisors. Arjun is firmly the latter — clear, calm, and always commercial.",
      name: "Vikram Shetty",
      role: "CFO, Aravali Industries",
    },
    {
      q: "He treats our family office like his own. Discretion, rigour and a perspective we genuinely trust.",
      name: "Anjali Khanna",
      role: "Principal, Khanna Family Office",
    },
  ];
  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-16">
          <Reveal>
            <SectionEyebrow>Client testimonials</SectionEyebrow>
            <h2 className="mt-5 text-4xl md:text-5xl font-bold text-ink leading-[1.05]">
              Trusted by founders, families and finance leaders.
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="h-full rounded-3xl bg-background border border-ink/10 p-8 flex flex-col">
                <Quote size={28} className="text-gold" />
                <blockquote className="mt-6 text-lg leading-relaxed text-ink flex-1">
                  "{t.q}"
                </blockquote>
                <figcaption className="mt-8 pt-6 border-t border-ink/10">
                  <div className="font-display font-semibold text-ink">{t.name}</div>
                  <div className="text-sm text-foreground/65">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- ACHIEVEMENTS ---------------- */
function CountUp({ to, suffix = "", duration = 1800 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);
  return <span ref={ref}>{n.toLocaleString()}{suffix}</span>;
}

function Achievements() {
  const stats = [
    { n: 240, suffix: "+", label: "Engagements delivered" },
    { n: 17, suffix: " yrs", label: "Of professional practice" },
    { n: 1200, suffix: " Cr", label: "Tax optimised (INR)" },
    { n: 38, suffix: "", label: "Speaking engagements" },
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-16">
          <Reveal>
            <SectionEyebrow>Achievements</SectionEyebrow>
            <h2 className="mt-5 text-4xl md:text-5xl font-bold text-ink leading-[1.05]">
              Numbers, for once, that speak for themselves.
            </h2>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 rounded-3xl overflow-hidden border border-ink/10">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.07}>
              <div className="bg-background p-10">
                <div className="text-5xl md:text-6xl font-display font-bold text-ink tabular-nums">
                  <CountUp to={s.n} suffix={s.suffix} />
                </div>
                <div className="mt-4 h-px w-10 bg-gold" />
                <div className="mt-4 text-sm uppercase tracking-widest text-foreground/65">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionEyebrow>Let's talk</SectionEyebrow>
            <h2 className="mt-5 text-4xl md:text-5xl font-bold text-ink leading-[1.05]">
              Book a confidential consultation.
            </h2>
            <p className="mt-6 text-lg text-foreground/80 leading-relaxed">
              Discovery calls are complimentary and run 30 minutes. Share a brief
              and I'll personally respond within one business day.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-xl bg-primary/10 grid place-items-center text-primary">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-foreground/55">Email</div>
                  <div className="text-ink font-medium">arjun@mehta-advisory.in</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-xl bg-primary/10 grid place-items-center text-primary">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-foreground/55">Phone</div>
                  <div className="text-ink font-medium">+91 98200 12345</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-xl bg-primary/10 grid place-items-center text-primary">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-foreground/55">Office</div>
                  <div className="text-ink font-medium">Nariman Point, Mumbai 400021</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="rounded-3xl bg-background border border-ink/10 p-8 md:p-10 shadow-sm"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full name" name="name" placeholder="Your name" />
                <Field label="Email" name="email" type="email" placeholder="you@company.com" />
                <Field label="Company" name="company" placeholder="Organisation" />
                <Field label="Phone" name="phone" placeholder="+91…" />
              </div>
              <div className="mt-5">
                <label className="text-xs uppercase tracking-widest text-foreground/60">Service of interest</label>
                <select className="mt-2 w-full rounded-xl border border-ink/15 bg-background px-4 py-3 text-ink focus:outline-none focus:ring-2 focus:ring-primary/30">
                  <option>Tax Advisory</option>
                  <option>GST</option>
                  <option>Audit</option>
                  <option>Compliance</option>
                  <option>Corporate Advisory</option>
                  <option>Family Office</option>
                </select>
              </div>
              <div className="mt-5">
                <label className="text-xs uppercase tracking-widest text-foreground/60">Briefly, how can I help?</label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your business and what you're solving for…"
                  className="mt-2 w-full rounded-xl border border-ink/15 bg-background px-4 py-3 text-ink focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                />
              </div>

              <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-sm text-foreground/65">
                  <CheckCircle2 size={16} className="text-primary" />
                  100% confidential. Replies within 1 business day.
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-ink text-white px-7 py-3.5 text-sm font-medium hover:bg-primary transition-colors"
                >
                  {sent ? "Thank you — I'll be in touch" : "Request consultation"}
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-widest text-foreground/60">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-ink/15 bg-background px-4 py-3 text-ink placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/30"
      />
    </div>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="bg-ink text-white/70 py-14">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-8 items-start">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-9 w-9 rounded-xl bg-gold text-ink grid place-items-center font-display font-bold">A</span>
            <span className="font-display font-semibold text-white">Arjun Mehta<span className="text-gold">.</span></span>
          </div>
          <p className="mt-4 text-sm max-w-xs">
            Chartered Accountant, author and business advisor based in Mumbai.
          </p>
        </div>
        <div className="text-sm">
          <div className="uppercase tracking-widest text-white text-xs mb-3">Navigate</div>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:text-gold">About</a></li>
            <li><a href="#expertise" className="hover:text-gold">Expertise</a></li>
            <li><a href="#books" className="hover:text-gold">Books</a></li>
            <li><a href="#insights" className="hover:text-gold">Insights</a></li>
          </ul>
        </div>
        <div className="text-sm md:text-right">
          <div className="uppercase tracking-widest text-white text-xs mb-3">Contact</div>
          <div>arjun@mehta-advisory.in</div>
          <div>+91 98200 12345</div>
          <div className="mt-6 text-xs text-white/45">
            © {new Date().getFullYear()} Arjun Mehta & Associates. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
