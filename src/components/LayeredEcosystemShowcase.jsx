"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

const ECOSYSTEM_TABS = [
  {
    id: 'hexanx',
    label: 'Hexanx OS',
    title: 'Hexanx OS',
    subtitle: 'Enterprise Workspace & ERP',
    category: 'Enterprise ERP',
    client: 'Enterprise Workspace',
    logo: '/logos/hexanxos.png',
    link: 'https://os.hexanx.in',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=3840&q=100',
    statBadge: 'AES-256 Encryption',
    secondaryBadge: 'Facial & Geo Attendance',
    description: 'Enterprise workspace ecosystem with biometric geo-attendance, automated payroll compliance (PF, ESI, TDS), and IT asset tracking.',
    tags: ['Attendance Engine', 'Payroll Automation', 'Asset Tracking', 'Leave Workflow']
  },
  {
    id: 'flasto',
    label: 'Flasto',
    title: 'Flasto',
    subtitle: 'Omnichannel Restaurant OS',
    category: 'Restaurant OS',
    client: 'F&B Chains & QSRs',
    logo: '/logos/flasto.png',
    link: 'https://flasto.in',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=3840&q=100',
    statBadge: '<50ms POS Sync',
    secondaryBadge: 'Omnichannel KDS Engine',
    description: 'High-throughput restaurant OS unifying cloud POS, contactless QR dining, real-time KDS coordination, and live recipe costing.',
    tags: ['Cloud POS', 'QR Ordering', 'Inventory Costing', 'Realtime KDS']
  },
  {
    id: 'roomyes',
    label: 'Roomyes',
    title: 'Roomyes',
    subtitle: 'Smart Hotel Concierge & PMS',
    category: 'Hospitality PMS',
    client: 'Boutique & Luxury Hospitality',
    logo: '/logos/roomyes.png',
    link: 'https://roomyes.hexanx.in',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=3840&q=100',
    statBadge: '99.99% Cloud Uptime',
    secondaryBadge: 'Contactless Concierge',
    description: 'Next-generation hotel management with mobile web check-in, in-room digital concierge, dynamic rate pricing, and automated housekeeping.',
    tags: ['Smart Concierge', 'Dynamic Pricing', 'Housekeeping Suite', 'Web Check-In']
  }
];

const cinematicVariants = {
  enter: { opacity: 0, x: 30, scale: 0.98, filter: "blur(12px)" },
  center: { opacity: 1, x: 0, scale: 1, filter: "blur(0px)" },
  exit: { opacity: 0, x: -30, scale: 0.98, filter: "blur(12px)" }
};

export default function LayeredEcosystemShowcase() {
  const [activeTab, setActiveTab] = useState('hexanx');

  const currentProduct = ECOSYSTEM_TABS.find((tab) => tab.id === activeTab) || ECOSYSTEM_TABS[0];

  return (
    <section className="w-full bg-transparent relative overflow-hidden py-12 sm:py-16 lg:py-24" id="ecosystem">
      <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-6 md:px-12">
        {/* Header & Apple-Style Segmented Navigation */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-8 sm:mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/80 backdrop-blur-md border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Live Cloud Ecosystem</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.08]">
              The Hexanx Product Ecosystem
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 mt-3 sm:mt-4 leading-relaxed font-light">
              Autonomous, high-throughput SaaS engines engineered for enterprise scale and zero downtime.
            </p>
          </div>

          {/* iOS Segmented Control Tab Switcher */}
          <div
            role="tablist"
            aria-label="Hexanx Product Switcher"
            className="relative inline-flex items-center p-1 sm:p-1.5 rounded-full bg-slate-200/70 backdrop-blur-xl border border-slate-300/80 shadow-inner w-full sm:w-auto self-start lg:self-end overflow-hidden"
          >
            {ECOSYSTEM_TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-4 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-300 cursor-pointer select-none flex-1 sm:flex-initial text-center ${
                    isActive ? 'text-white' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 bg-slate-900 rounded-full shadow-lg"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Display: Fluid Mobile Heights */}
        <div className="relative w-full h-[550px] md:h-[650px] lg:h-[750px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-slate-200/70 bg-slate-950">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={cinematicVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-full overflow-hidden"
            >
              {/* Background 4K Image: object-cover object-center to prevent warping */}
              <Image
                src={currentProduct.image}
                alt={`${currentProduct.title} 4K Architecture Display`}
                fill
                priority
                sizes="(max-width: 1400px) 100vw, 1400px"
                className="object-cover object-center select-none"
              />

              {/* Cinematic Vignette & Ambient Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/30 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/20 pointer-events-none" />

              {/* Top Floating Status Badges: Positioned safely at top */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 z-20 flex flex-wrap items-center gap-2.5">
                <div className="bg-black/60 backdrop-blur-xl px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-white text-[11px] sm:text-xs font-mono font-semibold border border-white/20 shadow-xl flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                  <span>{currentProduct.category}</span>
                </div>

                <div className="hidden sm:flex items-center gap-2 bg-black/40 backdrop-blur-xl px-3.5 py-1.5 rounded-full text-slate-200 text-xs font-mono border border-white/15 shadow-xl">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                  <span>{currentProduct.secondaryBadge}</span>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 z-20 bg-white/95 backdrop-blur-xl px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-slate-900 text-[11px] sm:text-xs font-mono font-bold shadow-2xl border border-white/80 flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{currentProduct.statBadge}</span>
              </motion.div>

              {/* The "Docked" Glass Card (Mobile-First): Full-width bottom dock on mobile, floating on desktop */}
              <div className="absolute bottom-0 left-0 w-full md:w-auto md:bottom-8 md:left-8 md:max-w-md bg-black/50 backdrop-blur-2xl border-t border-white/20 md:border md:rounded-3xl p-6 sm:p-8 md:shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-col justify-end z-20 text-white space-y-4">
                {/* Product Logo Capsule & Client Tag */}
                <div className="flex items-center justify-between gap-3">
                  <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-white/60 flex items-center justify-center">
                    <img
                      src={currentProduct.logo}
                      alt={`${currentProduct.title} Logo`}
                      className="h-7 sm:h-8 w-auto object-contain mix-blend-multiply select-none"
                    />
                  </div>

                  <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-blue-300 text-[11px] sm:text-xs font-medium uppercase tracking-wider">
                    {currentProduct.client}
                  </span>
                </div>

                {/* Title & Description: Minimal & Punchy */}
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    {currentProduct.title}
                  </h3>
                  <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-light line-clamp-2 sm:line-clamp-3">
                    {currentProduct.description}
                  </p>
                </div>

                {/* Feature Tags: Compact 2-column on mobile */}
                <div className="grid grid-cols-2 gap-1.5 pt-1">
                  {currentProduct.tags.map((tag) => (
                    <div
                      key={tag}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 text-[11px] sm:text-xs text-slate-100 font-medium"
                    >
                      <CheckCircle2 className="w-3 h-3 text-blue-400 shrink-0" />
                      <span className="truncate">{tag}</span>
                    </div>
                  ))}
                </div>

                {/* Action CTAs: Full-width on mobile, side-by-side on sm+ */}
                <div className="pt-1 flex items-center gap-2.5">
                  <Link
                    href="/booking"
                    className="flex-1 inline-flex items-center justify-center px-5 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:to-pink-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-500/25 hover:scale-[1.02] transition-all gap-2 group text-center"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <a
                    href={currentProduct.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2.5 sm:py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs uppercase tracking-wider transition-all gap-1.5 text-center"
                  >
                    <span>Live Platform</span>
                    <ExternalLink className="w-3 h-3 opacity-80" />
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
