import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight, Clock, Tag, TrendingUp, BarChart3, Cpu, Star,
  ChevronRight, BookOpen, Search, Eye, Sparkles, Building2,
  Zap, ShieldCheck, Layers, FileText, CheckCircle2, User
} from 'lucide-react';

/* ────────────────────────────────────────────────
   Inline Page Styles (Law 1 & Law 5 compliant)
──────────────────────────────────────────────── */
const pageStyles = `
  @keyframes blogFadeIn {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0);    }
  }
  .blog-transition {
    animation: blogFadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  .enterprise-card {
    background: #ffffff;
    border-radius: 1.5rem;
    border: 1px solid #f1f5f9;
    box-shadow: 0 4px 20px -4px rgba(15, 23, 42, 0.05);
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
                box-shadow  0.3s cubic-bezier(0.16, 1, 0.3, 1),
                border-color 0.3s ease;
  }
  .enterprise-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px -12px rgba(37, 99, 235, 0.12);
    border-color: #dbeafe;
  }
`;

/* ────────────────────────────────────────────────
   Structured Enterprise Blog Posts Data
──────────────────────────────────────────────── */
const BLOG_POSTS = [
  {
    id: 'revenue-leakage-roomyes',
    title: 'How Roomyes Prevents 15% Revenue Leakage in Boutique Hotels',
    excerpt:
      'Most boutique hotels lose 12–18% of potential revenue to ghost rooms, manual billing errors, and OTA rate discrepancies. We break down how Roomyes’s dynamic pricing engine and automated channel management closes the gap with real-world data from 100+ properties.',
    category: 'Hotel PMS',
    categoryColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    product: 'Roomyes',
    logo: '/logos/roomyes.png',
    author: 'Hexanx Hospitality Labs',
    role: 'Revenue Management Division',
    date: 'October 10, 2026',
    readingTime: '8 min read',
    views: '4.2k reads',
    featured: true,
    accentGradient: 'from-emerald-50/70 via-white to-blue-50/40',
    tags: ['Hotel PMS', 'Revenue Management', 'Dynamic Pricing'],
    keyMetrics: [
      '15% Revenue Leakage Recovered',
      'Zero Double-Bookings Across OTAs',
      'Automated Housekeeping Sync'
    ]
  },
  {
    id: 'reclaiming-margins-flasto',
    title: 'Reclaiming Margins: Why Flasto Is the Future of Omnichannel Restaurant POS',
    excerpt:
      'Aggregator commissions are eating F&B margins alive. Flasto’s unified POS aggregates Swiggy, Zomato, and direct orders into a single dashboard — cutting commission dependency by up to 30% through QR-first direct ordering.',
    category: 'Restaurant POS',
    categoryColor: 'bg-amber-100 text-amber-800 border-amber-200',
    product: 'Flasto',
    logo: '/logos/flasto.png',
    author: 'Rohan Das',
    role: 'Lead F&B Systems Architect',
    date: 'October 5, 2026',
    readingTime: '6 min read',
    views: '3.8k reads',
    featured: false,
    tags: ['Restaurant Tech', 'Cloud POS', 'KDS Sync'],
    keyMetrics: [
      '30% Lower Commission Spend',
      '<50ms KDS Dispatch Latency',
      'Real-time Recipe Costing'
    ]
  },
  {
    id: 'autonomous-payroll-compliance',
    title: 'Zero-Error Payroll: Automating PF, ESI & TDS Compliance in Indian Enterprises',
    excerpt:
      'Manual payroll processing takes Indian mid-market enterprises an average of 4 business days every month with severe statutory penalties for late filings. See how Hexanx OS automated attendance reconciliation with one-click EPFO/ESIC bulk disbursements.',
    category: 'HR & Finance',
    categoryColor: 'bg-blue-100 text-blue-800 border-blue-200',
    product: 'Hexanx OS',
    logo: '/logos/hexanxos.png',
    author: 'Mohit Sahu',
    role: 'VP of Product Engineering',
    date: 'September 28, 2026',
    readingTime: '7 min read',
    views: '5.1k reads',
    featured: false,
    tags: ['HRMS', 'Payroll Automation', 'Statutory Compliance'],
    keyMetrics: [
      '4 Days Saved Monthly',
      'Zero Late Filing Penalties',
      'Facial Clock-in Verification'
    ]
  },
  {
    id: 'power-of-agentic-ai-hr',
    title: 'The Power of Agentic AI in Enterprise HR: Beyond Static Chatbots',
    excerpt:
      'Static chatbots fail at real enterprise work. Ayra AI’s 10-step agentic loop autonomously parses employment contracts, runs vector similarity queries across internal knowledge bases, and executes payroll recalculations with full RBAC isolation.',
    category: 'Enterprise AI',
    categoryColor: 'bg-purple-100 text-purple-800 border-purple-200',
    product: 'Ayra AI',
    logo: '/logos/ayra-ai.png',
    author: 'Priya Nair',
    role: 'Chief AI Research Scientist',
    date: 'September 20, 2026',
    readingTime: '9 min read',
    views: '6.4k reads',
    featured: false,
    tags: ['Agentic AI', 'DeepSeek LLM', 'Vector RAG'],
    keyMetrics: [
      '10-Step Autonomous Loop',
      'Zero Privilege Escalation',
      'Real-time SSE Streaming'
    ]
  },
  {
    id: 'kitchen-display-system-latency',
    title: 'Real-Time KDS Architecture: Scaling High-Volume QSR Orders Under 50ms',
    excerpt:
      'During peak dining rushes, WebSocket lag can cripple kitchen workflows. A deep engineering look at how Flasto built an event-driven pub/sub architecture ensuring kitchen ticket printers and kitchen screens remain synchronised with sub-50ms latency.',
    category: 'Restaurant POS',
    categoryColor: 'bg-amber-100 text-amber-800 border-amber-200',
    product: 'Flasto',
    logo: '/logos/flasto.png',
    author: 'Aditya Rao',
    role: 'Principal Infrastructure Engineer',
    date: 'September 12, 2026',
    readingTime: '8 min read',
    views: '2.9k reads',
    featured: false,
    tags: ['KDS Sync', 'Event Driven', 'High Throughput'],
    keyMetrics: [
      '<50ms Queue Latency',
      'Offline Fallback Sync',
      'Multi-Station Routing'
    ]
  },
  {
    id: 'saas-vs-custom-software',
    title: 'Why Indian Enterprises Should Switch from Bespoke Custom Software to Vertical SaaS',
    excerpt:
      'Custom software feels attractive until the original developer leaves or libraries rot. We analyzed 50+ enterprise migrations to Hexanx OS: 60% lower total cost of ownership, automated statutory updates, and uninterrupted product roadmap velocity.',
    category: 'B2B SaaS',
    categoryColor: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    product: 'Hexanx OS',
    logo: '/logos/hexanxos.png',
    author: 'Hexanx Strategy Desk',
    role: 'Market Intelligence Unit',
    date: 'September 5, 2026',
    readingTime: '5 min read',
    views: '3.5k reads',
    featured: false,
    tags: ['B2B SaaS', 'TCO Analysis', 'Enterprise Strategy'],
    keyMetrics: [
      '60% Lower TCO',
      'Zero Maintenance Debt',
      'Continuous Bi-weekly Releases'
    ]
  }
];

const CATEGORIES = [
  'All Topics',
  'Hotel PMS',
  'Restaurant POS',
  'HR & Finance',
  'Enterprise AI',
  'B2B SaaS'
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All Topics');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter posts dynamically
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        activeCategory === 'All Topics' || post.category === activeCategory;
      const matchesSearch =
        searchQuery === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Featured post
  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];

  return (
    <>
      <Helmet>
        <title>Enterprise Resource Center &amp; Engineering Blog | Hexanx</title>
        <meta
          name="description"
          content="Authoritative engineering deep dives, B2B SaaS architecture, revenue management, and AI agent benchmarks from the teams building Hexanx OS, Flasto, Roomyes, and Ayra AI."
        />
        <meta
          name="keywords"
          content="Hexanx Blog, B2B SaaS Resource Center, Hotel PMS Whitepapers, Restaurant POS Architecture, HRMS Automation, Ayra AI Benchmarks, Flasto, Roomyes"
        />
        <link rel="canonical" href="https://www.hexanx.in/blog" />
      </Helmet>

      <style>{pageStyles}</style>

      <div className="min-h-screen bg-slate-50 text-slate-700 overflow-x-hidden blog-transition">
        {/* ── HERO SECTION: Authoritative Enterprise Resource Center ── */}
        <section className="relative pt-36 pb-20 mesh-gradient border-b border-slate-200/80 overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
          <div className="absolute top-10 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-[110px] pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-purple-400/20 rounded-full blur-[110px] pointer-events-none" />

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-500 mb-6 uppercase tracking-wider">
              <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <ChevronRight size={14} />
              <span className="text-blue-600">Resource Center</span>
            </div>

            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-200/80 bg-white/90 backdrop-blur text-blue-700 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
              <Sparkles size={14} className="mr-2 text-blue-600" />
              Hexanx Engineering &amp; Strategic Intelligence
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight mb-6">
              Enterprise Resource Center &amp;{' '}
              <span className="gradient-text">Engineering Insights</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light mb-10">
              Peer-reviewed architecture deep dives, operational benchmark data, and strategic playbooks for Indian enterprises scaling on Hexanx OS, Flasto, Roomyes, and Ayra AI.
            </p>

            {/* Authority Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-6 border-t border-slate-200/70 mb-10">
              <div className="bg-white/80 backdrop-blur rounded-2xl p-4 border border-slate-200/60 shadow-xs">
                <span className="text-2xl font-black text-slate-900">6+</span>
                <span className="text-xs text-slate-500 font-medium block mt-0.5">Technical Playbooks</span>
              </div>
              <div className="bg-white/80 backdrop-blur rounded-2xl p-4 border border-slate-200/60 shadow-xs">
                <span className="text-2xl font-black text-blue-600">100+</span>
                <span className="text-xs text-slate-500 font-medium block mt-0.5">Enterprise Deployments</span>
              </div>
              <div className="bg-white/80 backdrop-blur rounded-2xl p-4 border border-slate-200/60 shadow-xs">
                <span className="text-2xl font-black text-emerald-600">&lt;50ms</span>
                <span className="text-xs text-slate-500 font-medium block mt-0.5">Production Latency</span>
              </div>
              <div className="bg-white/80 backdrop-blur rounded-2xl p-4 border border-slate-200/60 shadow-xs">
                <span className="text-2xl font-black text-purple-600">99.99%</span>
                <span className="text-xs text-slate-500 font-medium block mt-0.5">Platform SLA Uptime</span>
              </div>
            </div>

            {/* Live Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search playbooks, architecture, PMS, POS, or AI..."
                className="w-full pl-12 pr-6 py-4 bg-white rounded-full border border-slate-200 shadow-sm text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
            </div>
          </div>
        </section>

        {/* ── STICKY TOPIC FILTER BAR ── */}
        <div className="sticky top-20 z-30 bg-white/90 backdrop-blur border-b border-slate-200/80 shadow-xs py-3">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-2 text-xs font-semibold whitespace-nowrap">
              <BookOpen size={16} className="text-slate-400 mr-2 shrink-0 hidden sm:inline" />
              {CATEGORIES.map((cat) => {
                const count =
                  cat === 'All Topics'
                    ? BLOG_POSTS.length
                    : BLOG_POSTS.filter((p) => p.category === cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                      activeCategory === cat
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                        activeCategory === cat
                          ? 'bg-slate-700 text-white'
                          : 'bg-slate-200 text-slate-600'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── FEATURED WHITE PAPER BANNER ── */}
        {activeCategory === 'All Topics' && searchQuery === '' && (
          <section className="py-12 bg-white border-b border-slate-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  Featured Executive Playbook
                </span>
              </div>

              <div className={`enterprise-card overflow-hidden bg-gradient-to-br ${featuredPost.accentGradient}`}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 sm:p-12 items-center">
                  
                  {/* Left Column: Post Details */}
                  <div className="lg:col-span-7 space-y-5">
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="h-9 px-3.5 py-1.5 bg-white rounded-xl border border-slate-200/80 shadow-xs flex items-center gap-2">
                        <img
                          src={featuredPost.logo}
                          alt={featuredPost.product}
                          className="h-6 w-auto object-contain mix-blend-multiply"
                        />
                        <span className="text-xs font-bold text-slate-800">{featuredPost.product}</span>
                      </div>
                      <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${featuredPost.categoryColor}`}>
                        {featuredPost.category}
                      </span>
                      <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                        <Clock size={12} /> {featuredPost.readingTime}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
                      {featuredPost.title}
                    </h2>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      {featuredPost.excerpt}
                    </p>

                    {/* Author & Read Button */}
                    <div className="pt-4 border-t border-slate-200/60 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 text-white font-bold text-xs flex items-center justify-center shadow-xs">
                          {featuredPost.author.split(' ').map(w => w[0]).join('').slice(0, 2)}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900 leading-none">{featuredPost.author}</p>
                          <p className="text-xs text-slate-400 mt-1">{featuredPost.role} • {featuredPost.date}</p>
                        </div>
                      </div>

                      <a
                        href={`#${featuredPost.id}`}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-all group"
                      >
                        Read Full Playbook <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Visual Metrics Badge Container */}
                  <div className="lg:col-span-5 bg-white/90 backdrop-blur rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Validated Impact</span>
                      <span className="text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Case Study</span>
                    </div>
                    {featuredPost.keyMetrics.map((metric, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs font-bold text-slate-700">
                        <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                        <span>{metric}</span>
                      </div>
                    ))}
                    <div className="pt-2 text-[11px] text-slate-400 text-center italic">
                      Source: Hexanx Hospitality Telemetry Engine (Q3 2026 Audit)
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── RESOURCE GRID SECTION ── */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {activeCategory === 'All Topics' ? 'All Engineering Articles & Playbooks' : `${activeCategory} Resources`}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Showing {filteredPosts.length} peer-reviewed resource{filteredPosts.length === 1 ? '' : 's'}
                </p>
              </div>

              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-xs font-bold text-blue-600 hover:underline self-start sm:self-auto"
                >
                  Clear Search Filter &times;
                </button>
              )}
            </div>

            {filteredPosts.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-200">
                <FileText size={40} className="text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-slate-800 mb-1">No articles match your criteria</h3>
                <p className="text-sm text-slate-500 mb-6">Try searching for other keywords or reset your topic filter.</p>
                <button
                  onClick={() => { setActiveCategory('All Topics'); setSearchQuery(''); }}
                  className="px-6 py-2.5 rounded-full bg-slate-900 text-white font-bold text-xs"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    id={post.id}
                    className="enterprise-card group h-full flex flex-col p-6 sm:p-7 justify-between cursor-pointer group-hover:-translate-y-1 group-hover:shadow-xl hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                  >
                    <div>
                      {/* Top Bar: Official Product Logo + Category Badge */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="h-8 px-2.5 py-1 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center gap-1.5 shadow-2xs">
                          <img
                            src={post.logo}
                            alt={post.product}
                            className={
                              post.product === 'Ayra AI'
                                ? 'h-5 w-5 rounded-full object-cover'
                                : 'h-5 w-auto object-contain mix-blend-multiply'
                            }
                          />
                          <span className="text-[11px] font-bold text-slate-700">{post.product}</span>
                        </div>

                        <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${post.categoryColor}`}>
                          {post.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl leading-snug mb-3 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Key Metrics Pill */}
                      {post.keyMetrics && post.keyMetrics[0] && (
                        <div className="mb-5 p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2 text-[11px] font-bold text-slate-700">
                          <CheckCircle2 size={13} className="text-blue-600 shrink-0" />
                          <span className="truncate">{post.keyMetrics[0]}</span>
                        </div>
                      )}

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md flex items-center gap-1"
                          >
                            <Tag size={9} /> {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Card Footer: Author & Read Time */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-700 font-bold text-[10px] flex items-center justify-center border border-slate-200">
                          {post.author.split(' ').map(w => w[0]).join('').slice(0, 2)}
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-900 leading-none">{post.author}</p>
                          <p className="text-[10px] text-slate-400 mt-1 flex items-center gap-1">
                            <Clock size={10} /> {post.readingTime} • {post.date}
                          </p>
                        </div>
                      </div>

                      <span className="text-xs font-bold text-blue-600 group-hover:text-blue-700 flex items-center gap-1 group-hover:translate-x-1 transition-all">
                        Read <ChevronRight size={14} />
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ── ENTERPRISE BRIEFING NEWSLETTER CTA ── */}
        <section className="py-20 bg-white border-t border-slate-200/80">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              <ShieldCheck size={14} className="mr-2" />
              Direct Executive Briefings
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 tracking-tight">
              Get Monthly Strategic &amp; Architectural Briefings
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base leading-relaxed mb-8">
              Zero spam. High-signal engineering benchmarks, regulatory updates, and vertical SaaS playbooks delivered once a month to your inbox.
            </p>
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="corporate.email@enterprise.com"
                className="flex-1 px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-full text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all shadow-xs"
              />
              <button
                type="button"
                className="px-6 py-3.5 rounded-full font-bold bg-slate-900 hover:bg-slate-800 text-white text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
              >
                Subscribe
              </button>
            </div>
            <p className="text-[11px] text-slate-400 mt-3">
              Protected by Hexanx Enterprise Data Sovereignty. Unsubscribe at any time.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
