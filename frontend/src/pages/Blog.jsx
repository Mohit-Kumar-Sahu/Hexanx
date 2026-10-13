import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight, Clock, Tag, TrendingUp, BarChart3, Cpu, Star,
  ChevronRight, BookOpen, Rss, Search
} from 'lucide-react';

/* ────────────────────────────────────────────────
   Inline styles
──────────────────────────────────────────────── */
const pageStyles = `
  @keyframes blogFadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0);    }
  }
  .blog-fade-up { animation: blogFadeUp 0.65s cubic-bezier(0.4,0,0.2,1) both; }

  .blog-card {
    background: #ffffff;
    border-radius: 1.5rem;
    overflow: hidden;
    border: 1px solid #f1f5f9;
    box-shadow: 0 4px 20px -4px rgba(15,23,42,0.06);
    transition: transform 0.35s cubic-bezier(0.4,0,0.2,1),
                box-shadow  0.35s cubic-bezier(0.4,0,0.2,1);
  }
  .blog-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 24px 48px -12px rgba(37,99,235,0.15);
  }

  .blog-featured-card {
    background: #ffffff;
    border-radius: 2rem;
    overflow: hidden;
    border: 1px solid #e2e8f0;
    box-shadow: 0 8px 40px -8px rgba(15,23,42,0.10);
    transition: box-shadow 0.35s ease;
  }
  .blog-featured-card:hover {
    box-shadow: 0 24px 64px -12px rgba(37,99,235,0.18);
  }

  .blog-tag {
    display: inline-flex;
    align-items: center;
    padding: 0.25rem 0.85rem;
    border-radius: 9999px;
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.07em;
    text-transform: uppercase;
  }

  .blog-read-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.875rem;
    font-weight: 700;
    color: #2563eb;
    transition: gap 0.2s, color 0.2s;
  }
  .blog-read-btn:hover { color: #1d4ed8; gap: 0.75rem; }

  .blog-search-bar {
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 9999px;
    box-shadow: 0 4px 16px -4px rgba(15,23,42,0.08);
    transition: box-shadow 0.2s, border-color 0.2s;
  }
  .blog-search-bar:focus-within {
    border-color: #3b82f6;
    box-shadow: 0 0 0 4px rgba(59,130,246,0.1), 0 4px 16px -4px rgba(15,23,42,0.08);
  }
`;

/* ────────────────────────────────────────────────
   Article Data
──────────────────────────────────────────────── */
const FEATURED = {
  id: 'revenue-leakage-roomyes',
  title: 'How Roomyes Prevents 15% Revenue Leakage in Boutique Hotels',
  excerpt:
    `Most boutique hotels lose 12–18% of potential revenue to ghost rooms, manual billing errors, and OTA rate discrepancies. We break down how Roomyes's dynamic pricing engine and automated channel management closes the gap — with real-world data from 100+ properties.`,
  category: 'Hotel PMS',
  categoryColor: 'bg-emerald-100 text-emerald-700',
  author: 'Hexanx Product Team',
  date: 'October 10, 2026',
  readTime: '8 min read',
  icon: Star,
  iconColor: 'text-emerald-600',
  iconBg: 'bg-emerald-50',
  accentGradient: 'from-emerald-50 via-white to-blue-50',
  tags: ['Hotel PMS', 'Revenue Management', 'SaaS'],
};

const ARTICLES = [
  {
    id: 'flasto-omnichannel-pos',
    title: 'Reclaiming Margins: Why Flasto Is the Future of Omnichannel Restaurant POS',
    excerpt:
      `Aggregator commissions are eating F&B margins alive. Flasto's unified POS aggregates Swiggy, Zomato, and direct orders into a single dashboard — cutting commission dependency by up to 30% through QR-first direct ordering.`,
    category: 'Restaurant POS',
    categoryColor: 'bg-amber-100 text-amber-700',
    author: 'Rohan Das',
    date: 'October 5, 2026',
    readTime: '6 min read',
    icon: TrendingUp,
    iconColor: 'text-amber-600',
    iconBg: 'bg-amber-50',
    tags: ['Restaurant Tech', 'POS', 'F&B Margins'],
  },
  {
    id: 'agentic-ai-enterprise-hr',
    title: 'The Power of Agentic AI in Enterprise HR',
    excerpt:
      `Static chatbots are dead. Ayra AI's 10-step agentic loop autonomously drafts offer letters, reconciles payroll anomalies, and answers policy queries with RAG-backed accuracy — reducing HR ops overhead by 40%.`,
    category: 'Enterprise AI',
    categoryColor: 'bg-purple-100 text-purple-700',
    author: 'Priya Nair',
    date: 'September 28, 2026',
    readTime: '7 min read',
    icon: Cpu,
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-50',
    tags: ['Agentic AI', 'HRMS', 'LLM'],
  },
  {
    id: 'saas-vs-custom-software',
    title: 'Why Indian Enterprises Should Switch from Custom Software to Vertical SaaS',
    excerpt:
      'Custom software feels powerful until the developer leaves. We analyzed 50+ SME migrations to Hexanx OS and found a consistent pattern: 60% lower TCO, 3× faster onboarding, and zero vendor lock-in nightmares.',
    category: 'B2B SaaS',
    categoryColor: 'bg-blue-100 text-blue-700',
    author: 'Mohit Sahu',
    date: 'September 18, 2026',
    readTime: '9 min read',
    icon: BarChart3,
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50',
    tags: ['B2B SaaS', 'Enterprise Tech', 'HRMS'],
  },
];

const CATEGORIES = [
  { name: 'All Topics', active: true },
  { name: 'Hotel PMS', active: false },
  { name: 'Restaurant POS', active: false },
  { name: 'Enterprise AI', active: false },
  { name: 'B2B SaaS', active: false },
  { name: 'HRMS', active: false },
];

/* ────────────────────────────────────────────────
   Scroll reveal
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
export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All Topics');

  const filteredArticles = activeCategory === 'All Topics'
    ? ARTICLES
    : ARTICLES.filter(a => a.category === activeCategory || a.tags.includes(activeCategory));

  return (
    <>
      <Helmet>
        <title>Blog | Hexanx — B2B SaaS Insights, HRMS & POS Strategy</title>
        <meta name="description" content="Actionable insights on B2B SaaS, Hotel PMS, Restaurant POS, HRMS, and Agentic AI for Indian enterprise leaders. Powered by Hexanx." />
        <meta name="keywords" content="B2B SaaS Blog, HRMS Blog, Restaurant POS India, Hotel PMS India, Enterprise AI Blog, Hexanx Blog, Flasto, Roomyes, Agentic AI" />
      </Helmet>

      <style>{pageStyles}</style>

      <div className="min-h-screen bg-slate-50 overflow-x-hidden">

        {/* ── HERO ─────────────────────────────────── */}
        <section className="relative pt-40 pb-24 mesh-gradient overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-50" />
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-400/15 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-16 w-80 h-80 bg-purple-400/15 rounded-full blur-[100px]" />

          <div className="relative z-10 container mx-auto px-6 text-center">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-100 bg-white/80 backdrop-blur text-blue-700 text-xs font-bold uppercase tracking-widest mb-8 shadow-md blog-fade-up" style={{ animationDelay: '0.05s' }}>
              <Rss size={10} className="mr-2" />
              Hexanx Insights
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-slate-900 tracking-tight leading-tight mb-6 blog-fade-up" style={{ animationDelay: '0.15s' }}>
              The B2B SaaS <span className="gradient-text">Playbook</span><br className="hidden sm:block" />
              for Indian Enterprises.
            </h1>

            <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-12 blog-fade-up" style={{ animationDelay: '0.25s' }}>
              Strategy, product deep-dives, and real-world data from the teams building Hexanx OS, Flasto, and Roomyes.
            </p>

            {/* Search Bar */}
            <div className="max-w-lg mx-auto blog-fade-up" style={{ animationDelay: '0.35s' }}>
              <div className="blog-search-bar flex items-center px-5 py-3.5">
                <Search size={18} className="text-slate-400 mr-3 shrink-0" />
                <input
                  type="text"
                  placeholder="Search articles on HRMS, POS, Hotel PMS…"
                  className="flex-1 text-slate-700 placeholder-slate-400 text-sm bg-transparent outline-none"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── CATEGORY FILTER ──────────────────────── */}
        <section className="sticky top-16 z-30 bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-sm">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
              <BookOpen size={16} className="text-slate-400 shrink-0 mr-1" />
              {CATEGORIES.map(cat => (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wide whitespace-nowrap transition-all duration-200 ${activeCategory === cat.name
                      ? 'bg-slate-900 text-white shadow-md scale-105'
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURED ARTICLE ─────────────────────── */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <RevealBlock className="mb-12">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Featured Article</span>
              </div>
            </RevealBlock>

            <RevealBlock>
              <div className={`blog-featured-card bg-gradient-to-br ${FEATURED.accentGradient}`}>
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Content */}
                  <div className="p-10 md:p-14 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-6">
                      <span className={`blog-tag ${FEATURED.categoryColor}`}>{FEATURED.category}</span>
                      <span className="text-slate-400 text-xs flex items-center gap-1"><Clock size={10} />{FEATURED.readTime}</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight mb-5">
                      {FEATURED.title}
                    </h2>
                    <p className="text-slate-500 leading-relaxed mb-8 text-base">
                      {FEATURED.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                          {FEATURED.author.split(' ').map(w => w[0]).join('').slice(0, 2)}
                        </div>
                        <div>
                          <p className="text-slate-900 text-sm font-bold">{FEATURED.author}</p>
                          <p className="text-slate-400 text-xs">{FEATURED.date}</p>
                        </div>
                      </div>
                      <button className="blog-read-btn">
                        Read Article <ArrowRight size={15} />
                      </button>
                    </div>
                  </div>

                  {/* Visual Panel */}
                  <div className="hidden md:flex items-center justify-center p-14 relative">
                    <div className="absolute inset-0 opacity-20"
                      style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #6ee7b7 0%, transparent 65%)' }}
                    />
                    <div className="relative z-10 text-center">
                      <div className={`w-28 h-28 rounded-3xl ${FEATURED.iconBg} flex items-center justify-center mx-auto mb-6 shadow-xl`}>
                        <FEATURED.icon size={56} className={FEATURED.iconColor} />
                      </div>
                      <div className="space-y-3">
                        {['15% Revenue Recovered', 'Dynamic Pricing Engine', 'OTA Channel Sync', '99.99% Uptime'].map((s, i) => (
                          <div key={i} className="glass-card px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 text-left flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                            {s}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </RevealBlock>
          </div>
        </section>

        {/* ── ARTICLE GRID ─────────────────────────── */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-6 max-w-7xl">
            <RevealBlock className="mb-12">
              <h2 className="text-2xl font-extrabold text-slate-900">
                Latest Articles
                <span className="ml-3 text-sm font-normal text-slate-400">
                  ({filteredArticles.length} {activeCategory !== 'All Topics' ? `in ${activeCategory}` : ''})
                </span>
              </h2>
            </RevealBlock>

            {filteredArticles.length === 0 ? (
              <RevealBlock className="text-center py-24">
                <BookOpen size={48} className="text-slate-300 mx-auto mb-4" />
                <p className="text-slate-400 text-lg">No articles found in this category yet.</p>
                <button onClick={() => setActiveCategory('All Topics')} className="mt-4 text-blue-600 font-bold text-sm hover:underline">
                  View All Articles
                </button>
              </RevealBlock>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {filteredArticles.map((article, i) => (
                  <RevealBlock key={article.id} delay={`${i * 80}ms`}>
                    <article className="blog-card group h-full flex flex-col cursor-pointer">
                      {/* Card Header */}
                      <div className="p-7 pb-0">
                        <div className="flex items-center justify-between mb-5">
                          <div className={`w-12 h-12 rounded-xl ${article.iconBg} flex items-center justify-center`}>
                            <article.icon size={22} className={article.iconColor} />
                          </div>
                          <span className={`blog-tag ${article.categoryColor}`}>{article.category}</span>
                        </div>

                        <h3 className="font-extrabold text-slate-900 text-xl leading-tight mb-3 group-hover:text-blue-700 transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed">
                          {article.excerpt}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="px-7 py-4 flex flex-wrap gap-2">
                        {article.tags.map(t => (
                          <span key={t} className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 rounded-full px-2.5 py-1">
                            <Tag size={8} />{t}
                          </span>
                        ))}
                      </div>

                      {/* Footer */}
                      <div className="mt-auto px-7 pb-7 pt-3 border-t border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-[10px] font-bold shrink-0">
                            {article.author.split(' ').map(w => w[0]).join('').slice(0, 2)}
                          </div>
                          <div>
                            <p className="text-slate-900 text-xs font-bold">{article.author}</p>
                            <p className="text-slate-400 text-[10px] flex items-center gap-1">
                              <Clock size={9} />{article.readTime}
                            </p>
                          </div>
                        </div>
                        <button className="blog-read-btn">
                          Read <ChevronRight size={14} />
                        </button>
                      </div>
                    </article>
                  </RevealBlock>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ── NEWSLETTER CTA ───────────────────────── */}
        <section className="py-28 bg-slate-950 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #3b82f6 0%, transparent 55%), radial-gradient(circle at 70% 30%, #a855f7 0%, transparent 55%)' }}
          />
          <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
            <RevealBlock>
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-slate-700 bg-slate-900 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
                <Rss size={12} className="mr-2" /> Weekly Digest
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-5">
                Stay ahead of the <span className="gradient-text">SaaS curve.</span>
              </h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                One email per week. Product updates, industry insights, and strategy from the Hexanx team.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your work email"
                  className="flex-1 w-full px-6 py-4 rounded-full bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
                <button className="px-7 py-4 rounded-full font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all text-sm whitespace-nowrap flex items-center gap-2">
                  Subscribe <ArrowRight size={15} />
                </button>
              </div>
              <p className="text-slate-600 text-xs mt-4">No spam. Unsubscribe anytime.</p>
            </RevealBlock>
          </div>
        </section>

      </div>
    </>
  );
}
