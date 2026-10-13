import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight, Rocket, Users, Globe, ShieldCheck, Cpu, Star, TrendingUp,
  BarChart3, HeartHandshake, Award, ChevronRight, Building2, Zap
} from 'lucide-react';

/* ────────────────────────────────────────────────
   Inline styles (mirrors App.jsx pattern — no dep)
──────────────────────────────────────────────── */
const pageStyles = `
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(32px); }
    to   { opacity: 1; transform: translateY(0);    }
  }
  .au-fade-up { animation: fadeUp 0.7s cubic-bezier(0.4,0,0.2,1) both; }

  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.94); }
    to   { opacity: 1; transform: scale(1);    }
  }
  .au-scale-in { animation: scaleIn 0.6s cubic-bezier(0.4,0,0.2,1) both; }

  .au-card {
    background: #ffffff;
    border-radius: 1.5rem;
    border: 1px solid #f1f5f9;
    box-shadow: 0 4px 24px -4px rgba(15,23,42,0.07);
    transition: transform 0.35s cubic-bezier(0.4,0,0.2,1),
                box-shadow  0.35s cubic-bezier(0.4,0,0.2,1);
    overflow: hidden;
  }
  .au-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px -12px rgba(37,99,235,0.14);
  }

  .au-stat-pill {
    background: linear-gradient(135deg, #eff6ff 0%, #f5f3ff 100%);
    border: 1px solid #e0e7ff;
    border-radius: 9999px;
    padding: 0.35rem 1rem;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #4f46e5;
  }

  .au-timeline-line {
    position: absolute;
    left: 1.25rem;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, #3b82f6, #a855f7, #ec4899);
    border-radius: 9999px;
  }

  .au-product-accent-os      { background: linear-gradient(135deg,#dbeafe,#ede9fe); border-color: #bfdbfe; }
  .au-product-accent-flasto  { background: linear-gradient(135deg,#fef3c7,#fce7f3); border-color: #fde68a; }
  .au-product-accent-roomyes { background: linear-gradient(135deg,#d1fae5,#dbeafe); border-color: #6ee7b7; }
  .au-product-accent-ayra    { background: linear-gradient(135deg,#f3e8ff,#e0e7ff); border-color: #d8b4fe; }
`;

/* ────────────────────────────────────────────────
   Data
──────────────────────────────────────────────── */
const TIMELINE = [
  {
    year: '2021',
    title: 'Founded as a Services Studio',
    desc: 'Hexanx began as a custom software shop solving operational pain-points for SMEs across Central India — payroll, billing, and inventory workflows.'
  },
  {
    year: '2022',
    title: 'Pattern Recognition → Product Thesis',
    desc: 'After 50+ client engagements, we spotted a gap: Indian enterprises deserved opinionated, verticalized SaaS — not generic ERP behemoths or cobbled spreadsheets.'
  },
  {
    year: '2023',
    title: 'Pivot to Product-Led SaaS',
    desc: 'We made the decisive shift: freeze bespoke services, double-down on building Hexanx OS, Flasto, and Roomyes as standalone, enterprise-grade SaaS products.'
  },
  {
    year: '2024',
    title: 'Ayra AI — Agentic Intelligence Layer',
    desc: 'Launched Ayra AI as the unified intelligence backbone powering autonomous workflows, LLM-driven copilots, and RAG-based knowledge engines across all products.'
  },
  {
    year: '2025 →',
    title: 'The Unified Ecosystem Vision',
    desc: 'Today Hexanx is architecting the definitive Operating System for Indian Enterprises — one login, one data layer, three vertical SaaS apps, one AI brain.'
  }
];

const PRODUCTS = [
  {
    name: 'Hexanx OS',
    tagline: 'Enterprise HR & Finance',
    description: 'Complete workforce management — attendance via facial recognition, one-click payroll compliance (PF, ESI, TDS), leave & shift management, and asset tracking.',
    icon: Building2,
    accent: 'au-product-accent-os',
    iconColor: 'text-blue-600',
    bgIcon: 'bg-blue-50',
    link: 'https://os.hexanx.in',
    stats: ['50k+ Employees Managed', 'AES-256 Encrypted', '12+ Modules'],
    badge: 'HR & Finance',
    badgeColor: 'bg-blue-100 text-blue-700',
  },
  {
    name: 'Flasto',
    tagline: 'Omnichannel Restaurant OS',
    description: 'Lightning-fast Cloud POS, contactless QR menus, real-time KDS sync, predictive inventory, and a unified Swiggy / Zomato aggregator dashboard.',
    icon: Zap,
    accent: 'au-product-accent-flasto',
    iconColor: 'text-amber-600',
    bgIcon: 'bg-amber-50',
    link: 'https://flasto.in',
    stats: ['1M+ Orders Processed', '<50ms Latency', '500+ Outlets'],
    badge: 'Restaurant POS',
    badgeColor: 'bg-amber-100 text-amber-700',
  },
  {
    name: 'Roomyes',
    tagline: 'Smart Hotel PMS',
    description: 'Next-gen Property Management with web check-in, dynamic pricing engines, automated housekeeping workflows, and multi-OTA channel management.',
    icon: Star,
    accent: 'au-product-accent-roomyes',
    iconColor: 'text-emerald-600',
    bgIcon: 'bg-emerald-50',
    link: 'https://roomyes.hexanx.in',
    stats: ['99.99% Uptime', '+25% RevPAR Lift', '10k+ Users'],
    badge: 'Hotel PMS',
    badgeColor: 'bg-emerald-100 text-emerald-700',
  },
  {
    name: 'Ayra AI',
    tagline: 'Agentic Intelligence Engine',
    description: 'A full agentic-loop AI system with DeepSeek LLM, pgvector RAG search, real-time SSE streaming, Edge TTS, and a dynamic tool registry.',
    icon: Cpu,
    accent: 'au-product-accent-ayra',
    iconColor: 'text-purple-600',
    bgIcon: 'bg-purple-50',
    link: '#',
    stats: ['10-Step Agentic Loop', 'Dynamic Tool Registry', 'Real-time Streaming'],
    badge: 'AI Engine',
    badgeColor: 'bg-purple-100 text-purple-700',
  },
];

const VALUES = [
  { icon: ShieldCheck, title: 'Enterprise-Grade Trust', desc: 'SOC-2 aligned, AES-256 encrypted, with enterprise SLAs and dedicated support.', color: 'text-blue-600', bg: 'bg-blue-50' },
  { icon: Rocket, title: 'Product-First Mindset', desc: 'We build opinionated, verticalized SaaS — not generic software that fits no one perfectly.', color: 'text-purple-600', bg: 'bg-purple-50' },
  { icon: HeartHandshake, title: 'Partner, Not Vendor', desc: 'Dedicated success managers, onboarding support, and quarterly business reviews included.', color: 'text-pink-600', bg: 'bg-pink-50' },
  { icon: TrendingUp, title: 'ROI-Obsessed', desc: 'Every feature shipped is tied to a business outcome: revenue lift, cost reduction, or time saved.', color: 'text-emerald-600', bg: 'bg-emerald-50' },
];

/* ────────────────────────────────────────────────
   Reveal on scroll (mirrors App.jsx pattern)
──────────────────────────────────────────────── */
const RevealBlock = ({ children, className = '', delay = '0ms' }) => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('active'); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: delay }}>
      {children}
    </div>
  );
};

/* ────────────────────────────────────────────────
   Main Component
──────────────────────────────────────────────── */
export default function AboutUs() {
  return (
    <>
      <Helmet>
        <title>About Us | Hexanx — Building the OS for Indian Enterprises</title>
        <meta name="description" content="From a services studio to a full-stack B2B SaaS ecosystem. Learn how Hexanx is building Hexanx OS, Flasto, Roomyes & Ayra AI to power Indian enterprises." />
        <meta name="keywords" content="Hexanx About, B2B SaaS India, Enterprise Software Company, Hexanx OS, Flasto, Roomyes, Ayra AI, Raipur SaaS Startup" />
      </Helmet>

      <style>{pageStyles}</style>

      <div className="min-h-screen bg-slate-50 overflow-x-hidden">

        {/* ── HERO ─────────────────────────────────── */}
        <section className="relative pt-40 pb-28 mesh-gradient overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-50" />
          <div className="absolute top-16 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-purple-400/20 rounded-full blur-[100px]" />

          <div className="relative z-10 container mx-auto px-6 text-center">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-100 bg-white/80 backdrop-blur text-blue-700 text-xs font-bold uppercase tracking-widest mb-8 shadow-md au-fade-up" style={{ animationDelay: '0.05s' }}>
              <span className="w-2 h-2 rounded-full bg-blue-600 mr-2 animate-pulse" />
              About Hexanx
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-tight tracking-tight mb-8 au-fade-up" style={{ animationDelay: '0.15s' }}>
              Building the{' '}
              <span className="gradient-text">Operating System</span>
              <br />for Indian Enterprises.
            </h1>

            <p className="text-xl sm:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light au-fade-up" style={{ animationDelay: '0.25s' }}>
              We're not building software. We're re-architecting how India's businesses run — one vertical SaaS product at a time.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-12 au-fade-up" style={{ animationDelay: '0.35s' }}>
              <Link to="/products" className="px-8 py-4 rounded-full font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-xl hover:shadow-blue-500/40 hover:-translate-y-1 transition-all flex items-center gap-2">
                Explore Products <ArrowRight size={18} />
              </Link>
              <Link to="/booking" className="px-8 py-4 rounded-full font-bold bg-white border border-slate-200 text-slate-800 hover:border-blue-400 hover:text-blue-600 hover:-translate-y-1 transition-all shadow-md flex items-center gap-2">
                Book a Demo <ChevronRight size={18} />
              </Link>
            </div>
          </div>

          {/* Floating stat pills */}
          <div className="relative z-10 container mx-auto px-6 mt-20 flex flex-wrap justify-center gap-4 au-fade-up" style={{ animationDelay: '0.45s' }}>
            {[
              { label: '50k+ Employees', desc: 'on Hexanx OS' },
              { label: '1M+ Orders', desc: 'via Flasto POS' },
              { label: '99.99% Uptime', desc: 'across products' },
              { label: 'Raipur → Pan-India', desc: 'market coverage' },
            ].map(s => (
              <div key={s.label} className="glass-card px-6 py-3 rounded-2xl text-center shadow-sm">
                <p className="font-extrabold text-slate-900 text-lg">{s.label}</p>
                <p className="text-slate-400 text-xs mt-0.5">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── THE TRANSITION ───────────────────────── */}
        <section className="py-28 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <RevealBlock className="text-center mb-20">
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-slate-200 bg-slate-50 text-slate-600 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-purple-500 mr-2" />
                Our Journey
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
                From Services <span className="gradient-text">to Products.</span>
              </h2>
              <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                We built enough bespoke software to know that Indian enterprises deserve better.
                So we stopped building for one client at a time, and started building for thousands.
              </p>
            </RevealBlock>

            {/* Timeline */}
            <div className="relative pl-12 space-y-10 max-w-3xl mx-auto">
              <div className="au-timeline-line" />
              {TIMELINE.map((item, i) => (
                <RevealBlock key={i} delay={`${i * 80}ms`}>
                  <div className="relative">
                    <div className="absolute -left-12 top-1 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 border-4 border-white shadow-md flex items-center justify-center" />
                    <div className="au-card p-6 md:p-8">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="au-stat-pill">{item.year}</span>
                        <h3 className="font-bold text-slate-900 text-lg">{item.title}</h3>
                      </div>
                      <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </RevealBlock>
              ))}
            </div>
          </div>
        </section>

        {/* ── THE ECOSYSTEM ────────────────────────── */}
        <section className="py-28 bg-slate-50">
          <div className="container mx-auto px-6 max-w-7xl">
            <RevealBlock className="text-center mb-20">
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-600 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-blue-600 mr-2 animate-pulse" />
                The Ecosystem
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
                One Ecosystem. <span className="gradient-text">Every Enterprise.</span>
              </h2>
              <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                Four interconnected products sharing a single AI brain, a unified data layer, and one enterprise identity.
              </p>
            </RevealBlock>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {PRODUCTS.map((p, i) => (
                <RevealBlock key={p.name} delay={`${i * 80}ms`}>
                  <div className="au-card group h-full flex flex-col">
                    {/* Accent header strip */}
                    <div className={`p-6 pb-5 ${p.accent} border-b`}>
                      <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 rounded-2xl ${p.bgIcon} flex items-center justify-center shadow-sm`}>
                          <p.icon size={26} className={p.iconColor} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-extrabold text-slate-900 text-xl">{p.name}</h3>
                            <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${p.badgeColor}`}>{p.badge}</span>
                          </div>
                          <p className="text-slate-500 text-sm font-medium">{p.tagline}</p>
                        </div>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-6 flex flex-col flex-1">
                      <p className="text-slate-600 leading-relaxed mb-6 flex-1">{p.description}</p>

                      {/* Stats */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {p.stats.map(s => (
                          <span key={s} className="au-stat-pill">{s}</span>
                        ))}
                      </div>

                      {p.link !== '#' && (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 group-hover:gap-3 transition-all"
                        >
                          Visit Platform <ArrowRight size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </RevealBlock>
              ))}
            </div>
          </div>
        </section>

        {/* ── VALUES ───────────────────────────────── */}
        <section className="py-28 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <RevealBlock className="text-center mb-20">
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-slate-200 bg-slate-50 text-slate-600 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-pink-500 mr-2" />
                Our Values
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                What Drives <span className="gradient-text">Every Decision.</span>
              </h2>
            </RevealBlock>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {VALUES.map((v, i) => (
                <RevealBlock key={v.title} delay={`${i * 80}ms`}>
                  <div className="au-card p-8 text-center h-full">
                    <div className={`w-14 h-14 rounded-2xl ${v.bg} flex items-center justify-center mx-auto mb-5`}>
                      <v.icon size={26} className={v.color} />
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg mb-3">{v.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </RevealBlock>
              ))}
            </div>
          </div>
        </section>

        {/* ── TEAM CTA ─────────────────────────────── */}
        <section className="py-28 bg-slate-950 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 80% 20%, #a855f7 0%, transparent 50%)' }}
          />
          <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
            <RevealBlock>
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-slate-700 bg-slate-900 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
                <Users size={12} className="mr-2" /> Join the Team
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
                We're building something big.<br />
                <span className="gradient-text">Come build with us.</span>
              </h2>
              <p className="text-slate-400 text-xl leading-relaxed mb-12">
                We're a small team with an outsized ambition. If you love building products that actually change how businesses operate, you'll fit right in.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link to="/careers" className="px-8 py-4 rounded-full font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-xl hover:-translate-y-1 hover:shadow-blue-500/40 transition-all flex items-center gap-2">
                  View Open Roles <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="px-8 py-4 rounded-full font-bold bg-slate-800 border border-slate-700 text-white hover:bg-slate-700 hover:-translate-y-1 transition-all flex items-center gap-2">
                  Get In Touch <ChevronRight size={18} />
                </Link>
              </div>
            </RevealBlock>
          </div>
        </section>

      </div>
    </>
  );
}
