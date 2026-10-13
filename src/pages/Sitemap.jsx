import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Home,
  Layers,
  DollarSign,
  Users,
  Calendar,
  LogIn,
  ArrowUpRight,
  ShieldCheck,
  FileText,
  Briefcase,
  GraduationCap,
  Sparkles,
  Search,
  ChevronRight,
  ExternalLink,
  Server,
  Globe,
  Database,
  Code,
  Building2,
  Mail,
  Compass,
  ArrowRight
} from 'lucide-react';

export default function Sitemap() {
  const [searchTerm, setSearchTerm] = useState('');

  const sections = [
    {
      title: 'Main Navigation & Core HQ',
      description: 'Primary public entry points and enterprise client engagement channels.',
      badge: 'Core Pages',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      links: [
        {
          name: 'Home',
          path: '/',
          url: 'https://www.hexanx.in/',
          isExternal: false,
          icon: Home,
          description: 'Parent HQ portal highlighting Hexanx mission, client results, and SaaS ecosystem.',
          tag: 'Landing'
        },
        {
          name: 'Products & Platforms',
          path: '/products',
          url: 'https://www.hexanx.in/products',
          isExternal: false,
          icon: Layers,
          description: 'Comprehensive overview of Hexanx OS, Flasto, Roomyes, and Ayra AI systems.',
          tag: 'Ecosystem'
        },
        {
          name: 'SaaS Pricing & Estimator',
          path: '/booking',
          url: 'https://www.hexanx.in/booking',
          isExternal: false,
          icon: DollarSign,
          description: 'Transparent tier schedules, enterprise licensing, and ROI calculator consultations.',
          tag: 'Commercial'
        },
        {
          name: 'About Hexanx',
          path: '/about',
          url: 'https://www.hexanx.in/about',
          isExternal: false,
          icon: Users,
          description: 'Our engineering heritage, leadership team, and deep-tech mission across India.',
          tag: 'Company'
        },
        {
          name: 'Book Executive Consultation',
          path: '/booking',
          url: 'https://www.hexanx.in/booking',
          isExternal: false,
          icon: Calendar,
          description: 'Direct 1-on-1 architecture call with our technical architects and product engineers.',
          tag: 'Strategy'
        },
        {
          name: 'Client Sign In (OS Console)',
          path: 'https://os.hexanx.in/',
          url: 'https://os.hexanx.in/',
          isExternal: true,
          icon: LogIn,
          description: 'Secure cloud tenant authentication and admin control plane for Hexanx OS subscribers.',
          tag: 'SSO Auth'
        },
        {
          name: 'Contact & Inquiries',
          path: '/contact',
          url: 'https://www.hexanx.in/contact',
          isExternal: false,
          icon: Mail,
          description: 'Direct technical support, sales inquiries, and Chhattisgarh headquarters address.',
          tag: 'Support'
        }
      ]
    },
    {
      title: 'Product Ecosystem (Live SaaS Platforms)',
      description: 'Distributed cloud applications hosted on dedicated subdomains & flagship domains.',
      badge: 'Live SaaS Engines',
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      links: [
        {
          name: 'Hexanx OS',
          path: 'https://os.hexanx.in/',
          url: 'https://os.hexanx.in/',
          isExternal: true,
          logo: '/logos/hexanxos.png',
          isProductBrand: true,
          description: 'Unified enterprise ERP: Smart attendance, biometric tracking, PF/ESI payroll, and IT asset registry.',
          tag: 'os.hexanx.in'
        },
        {
          name: 'Flasto',
          path: 'https://flasto.in/',
          url: 'https://flasto.in/',
          isExternal: true,
          logo: '/logos/flasto.png',
          isProductBrand: true,
          description: 'Next-gen F&B operating system: Cloud POS, QR contactless dining, KDS sync, and delivery aggregator.',
          tag: 'flasto.in'
        },
        {
          name: 'Roomyes',
          path: 'https://roomyes.hexanx.in/',
          url: 'https://roomyes.hexanx.in/',
          isExternal: true,
          logo: '/logos/roomyes.png',
          isProductBrand: true,
          description: 'Hospitality intelligence: Web check-in, dynamic RevPAR pricing, housekeeping dispatcher & guest CRM.',
          tag: 'roomyes.hexanx.in'
        },
        {
          name: 'Ayra AI — Autonomous Intelligence Engine',
          path: '/products',
          url: 'https://www.hexanx.in/products',
          isExternal: false,
          icon: Sparkles,
          logo: '/logos/ayra-ai.png',
          isAvatar: true,
          description: 'Embedded agentic loop powered by Ayra Proprietary Neural Engine, Enterprise-Grade Secure Memory, and Zero-Latency Intelligence.',
          tag: 'Agent Core'
        }
      ]
    },
    {
      title: 'Careers & Talent Development',
      description: 'Opportunities to build world-class enterprise software from Raipur to the world.',
      badge: 'People & Culture',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      links: [
        {
          name: 'Careers at Hexanx',
          path: '/careers',
          url: 'https://www.hexanx.in/careers',
          isExternal: false,
          icon: Briefcase,
          description: 'Open engineering, product design, and sales roles with competitive equity & growth benefits.',
          tag: 'Hiring'
        },
        {
          name: '6-Month Industrial Internship',
          path: '/internships',
          url: 'https://www.hexanx.in/internships',
          isExternal: false,
          icon: GraduationCap,
          description: 'Immersive training for engineering students: Live SaaS codebases, mentorship, and PPO conversions.',
          tag: 'Training'
        }
      ]
    },
    {
      title: 'Legal, Governance & SEO Feeds',
      description: 'Regulatory compliance disclosures, terms of service, and search engine indexes.',
      badge: 'Compliance & Index',
      badgeColor: 'bg-slate-100 text-slate-700 border-slate-200',
      links: [
        {
          name: 'Privacy Policy',
          path: '/privacy',
          url: 'https://www.hexanx.in/privacy',
          isExternal: false,
          icon: ShieldCheck,
          description: 'Our uncompromising commitment to user data privacy, security safeguards, and encryption.',
          tag: 'Policy'
        },
        {
          name: 'Terms of Service',
          path: '/terms',
          url: 'https://www.hexanx.in/terms',
          isExternal: false,
          icon: FileText,
          description: 'Commercial SaaS terms of use, service level agreements (SLAs), and intellectual property.',
          tag: 'Legal'
        },
        {
          name: 'Raw XML Sitemap (For Crawlers)',
          path: '/sitemap.xml',
          url: 'https://www.hexanx.in/sitemap.xml',
          isExternal: true,
          icon: Code,
          description: 'Machine-readable XML protocol feed indexed directly by Googlebot and Bingbot.',
          tag: 'XML Feed'
        }
      ]
    }
  ];

  // Filter links across sections based on search query
  const filteredSections = sections.map((sec) => {
    const matchingLinks = sec.links.filter(
      (link) =>
        link.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        link.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        link.tag.toLowerCase().includes(searchTerm.toLowerCase()) ||
        link.url.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return { ...sec, links: matchingLinks };
  }).filter((sec) => sec.links.length > 0);

  const totalLinksCount = sections.reduce((acc, curr) => acc + curr.links.length, 0);

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-x-hidden w-full font-sans selection:bg-blue-500 selection:text-white">
      <Helmet>
        <title>Sitemap | Hexanx Architecture & Directory</title>
        <meta
          name="description"
          content="Explore the complete human-readable directory of Hexanx pages, enterprise SaaS products (Hexanx OS, Flasto, Roomyes), and legal resources."
        />
        <link rel="canonical" href="https://www.hexanx.in/sitemap" />
      </Helmet>

      {/* --- Topographic / Mesh SVG Background Overlay --- */}
      <div className="absolute inset-0 pointer-events-none opacity-40 overflow-hidden">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
        >
          <defs>
            <pattern id="sitemap-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(37, 99, 235, 0.05)" strokeWidth="1" />
            </pattern>
            <radialGradient id="mesh-glow" cx="50%" cy="20%" r="60%">
              <stop offset="0%" stopColor="rgba(147, 51, 234, 0.08)" />
              <stop offset="50%" stopColor="rgba(37, 99, 235, 0.04)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#sitemap-grid)" />
          <rect width="100%" height="100%" fill="url(#mesh-glow)" />
        </svg>
      </div>

      {/* Ambient Lighting Orbs */}
      <div className="absolute top-10 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-blue-400/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-64 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-purple-400/10 rounded-full blur-[140px] pointer-events-none" />

      {/* --- Page Header Banner --- */}
      <section className="relative pt-36 sm:pt-40 pb-12 sm:pb-16 z-10">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-slate-200/80 shadow-xs mb-6 backdrop-blur-md">
            <Compass className="w-4 h-4 text-blue-600 animate-spin" style={{ animationDuration: '12s' }} />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">Hexanx Site Architecture</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span className="text-[11px] font-mono text-emerald-700 font-semibold">hexanx.in</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-4 sm:mb-6">
            Human-Readable <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Sitemap</span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-normal mb-8 sm:mb-10 px-2">
            A structured directory of our parent company headquarters, live enterprise SaaS applications, 
            career opportunities, and legal documentation.
          </p>

          {/* Quick Metrics & Search Bar */}
          <div className="max-w-2xl mx-auto bg-white/90 backdrop-blur-xl p-2 rounded-2xl shadow-lg border border-slate-200/80 flex items-center gap-3">
            <div className="pl-3 sm:pl-4 text-slate-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Filter by keyword or product (e.g. hotel, pos, careers)..."
              className="w-full bg-transparent py-2 text-sm sm:text-base text-slate-800 placeholder-slate-400 focus:outline-none"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="px-3 py-1 text-xs font-bold text-slate-500 hover:text-slate-800 bg-slate-100 rounded-lg mr-1 shrink-0"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-6 text-xs text-slate-500 font-mono">
            <span>Indexed Destinations: <strong className="text-slate-800 font-bold">{totalLinksCount}</strong></span>
            <span>•</span>
            <span>Canonical: <strong className="text-blue-600 font-bold">hexanx.in</strong></span>
            <span>•</span>
            <span>Frequency: <strong className="text-slate-800 font-bold">Daily</strong></span>
          </div>
        </div>
      </section>

      {/* --- Central Content Container with Apple-Grade Aesthetics --- */}
      <section className="relative z-10 pb-28 sm:pb-32">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl">
          <div className="rounded-2xl sm:rounded-3xl bg-white shadow-xl p-5 sm:p-8 md:p-12 border border-slate-100 space-y-12 sm:space-y-16">
            
            {filteredSections.length === 0 ? (
              <div className="text-center py-16 sm:py-20 space-y-4">
                <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800">No destinations match "{searchTerm}"</h3>
                <p className="text-sm text-slate-500">Try searching for keywords like "OS", "Restaurant", "Demo", "Privacy", or "Careers".</p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="px-6 py-2.5 rounded-full bg-blue-600 text-white font-bold text-sm shadow hover:bg-blue-700 transition-colors"
                >
                  Reset Filter
                </button>
              </div>
            ) : (
              filteredSections.map((section, sIdx) => (
                <div key={section.title} className={sIdx > 0 ? "pt-10 sm:pt-12 border-t border-slate-100" : ""}>
                  {/* Category Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 mb-6 sm:mb-8">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        <span className={`text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border ${section.badgeColor}`}>
                          {section.badge}
                        </span>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                          {section.title}
                        </h2>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">{section.description}</p>
                    </div>
                    <span className="text-xs text-slate-400 font-mono">
                      {section.links.length} destination{section.links.length !== 1 ? 's' : ''}
                    </span>
                  </div>

                  {/* Grid of Link Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                    {section.links.map((link) => {
                      const IconComponent = link.icon;
                      const CardContent = (
                        <div className="h-full p-5 sm:p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-blue-200 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
                          <div>
                            {link.isProductBrand ? (
                              /* Ecosystem Product Header with Exact Standalone Logos */
                              <div className="flex items-center justify-between gap-4 mb-4">
                                <div className="h-9 sm:h-10 flex items-center">
                                  {link.name === 'Hexanx OS' && (
                                    <img src="/logos/hexanxos.png" className="h-8 sm:h-10 w-auto object-contain mix-blend-multiply" alt="Hexanx OS" />
                                  )}
                                  {link.name === 'Flasto' && (
                                    <img src="/logos/flasto.png" className="h-8 sm:h-10 w-auto object-contain mix-blend-multiply" alt="Flasto" />
                                  )}
                                  {link.name === 'Roomyes' && (
                                    <img src="/logos/roomyes.png" className="h-8 sm:h-10 w-auto object-contain mix-blend-multiply" alt="Roomyes" />
                                  )}
                                </div>
                                <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors shrink-0">
                                  <ArrowUpRight className="w-4 h-4" />
                                </span>
                              </div>
                            ) : (
                              /* Standard Link Header */
                              <div className="flex items-start justify-between gap-4 mb-4">
                                <div className="flex items-center gap-3">
                                  {link.logo ? (
                                    <div className="h-10 w-auto flex items-center justify-center">
                                      <img
                                        src={link.logo}
                                        alt={link.name}
                                        className={
                                          link.isAvatar
                                            ? "w-10 h-10 rounded-full aspect-square object-cover shadow-sm border border-slate-200"
                                            : "h-7 w-auto object-contain mix-blend-multiply"
                                        }
                                      />
                                    </div>
                                  ) : (
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                                      <IconComponent className="w-5 h-5" />
                                    </div>
                                  )}
                                  <div>
                                    <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors text-base sm:text-lg flex items-center gap-1.5">
                                      {link.name}
                                    </h3>
                                    <span className="text-[11px] font-mono text-slate-400">{link.url.replace('https://', '')}</span>
                                  </div>
                                </div>

                                <div className="shrink-0">
                                  {link.isExternal ? (
                                    <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                      <ArrowUpRight className="w-4 h-4" />
                                    </span>
                                  ) : (
                                    <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                      <ArrowRight className="w-4 h-4" />
                                    </span>
                                  )}
                                </div>
                              </div>
                            )}

                            <p className="text-sm text-slate-600 leading-relaxed font-normal mb-5">
                              {link.description}
                            </p>
                          </div>

                          <div className="flex items-center justify-between pt-3 border-t border-slate-200/50 text-xs">
                            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-slate-500 bg-white px-2.5 py-1 rounded-md border border-slate-200/60">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                              {link.tag}
                            </span>
                            <span className="text-slate-900 group-hover:text-blue-600 font-semibold flex items-center gap-1 transition-colors">
                              {link.isProductBrand ? 'Get Started ➔' : link.isExternal ? 'Open Platform' : 'Visit Route'}
                            </span>
                          </div>
                        </div>
                      );

                      if (link.isExternal) {
                        return (
                          <a
                            key={link.name}
                            href={link.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block h-full"
                          >
                            {CardContent}
                          </a>
                        );
                      }

                      return (
                        <Link key={link.name} to={link.path} className="block h-full">
                          {CardContent}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))
            )}

            {/* Bottom Callout / Crawler Notice */}
            <div className="rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <div className="inline-flex items-center gap-2 text-blue-400 font-mono text-xs uppercase tracking-wider font-bold">
                  <Code className="w-4 h-4" /> Machine-Readable Index Available
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white">Need the raw XML schema for automated indexing?</h4>
                <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
                  Our automated crawler index complies strictly with sitemaps.org standards and is regularly harvested by global web search engines.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/25 text-center"
                >
                  View sitemap.xml <ArrowUpRight className="w-4 h-4" />
                </a>
                <Link
                  to="/"
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm transition-all border border-slate-700 text-center"
                >
                  Back to Home
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
