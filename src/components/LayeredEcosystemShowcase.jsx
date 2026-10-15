"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

const ECOSYSTEM_TABS = [
  {
    id: 'hexanx',
    name: 'Hexanx OS',
    label: 'Hexanx OS',
    title: 'Hexanx OS',
    slug: 'os',
    subtitle: 'Enterprise Workspace & ERP',
    category: 'Enterprise ERP',
    client: 'Enterprise Workspace',
    logo: '/logos/hexanxos.png',
    link: 'https://os.hexanx.in',
    image: '/hexanxosR.png',
    statBadge: 'AES-256 Encryption',
    secondaryBadge: 'Facial & Geo Attendance',
    description: 'Enterprise workspace ecosystem with biometric geo-attendance, automated payroll compliance (PF, ESI, TDS), and IT asset tracking.',
    tags: ['Attendance Engine', 'Payroll Automation', 'Asset Tracking', 'Leave Workflow']
  },
  {
    id: 'flasto',
    name: 'Flasto',
    label: 'Flasto',
    title: 'Flasto',
    slug: 'flasto',
    subtitle: 'Omnichannel Restaurant OS',
    category: 'Restaurant OS',
    client: 'F&B Chains & QSRs',
    logo: '/logos/flasto.png',
    link: 'https://flasto.in',
    image: '/flastoR.png',
    statBadge: '<50ms POS Sync',
    secondaryBadge: 'Omnichannel KDS Engine',
    description: 'High-throughput restaurant OS unifying cloud POS, contactless QR dining, real-time KDS coordination, and live recipe costing.',
    tags: ['Cloud POS', 'QR Ordering', 'Inventory Costing', 'Realtime KDS']
  },
  {
    id: 'roomyes',
    name: 'Roomyes',
    label: 'Roomyes',
    title: 'Roomyes',
    slug: 'roomyes',
    subtitle: 'Smart Hotel Concierge & PMS',
    category: 'Hospitality PMS',
    client: 'Boutique & Luxury Hospitality',
    logo: '/logos/roomyes.png',
    link: 'https://roomyes.hexanx.in',
    image: '/roomyesR.png',
    statBadge: '99.99% Cloud Uptime',
    secondaryBadge: 'Contactless Concierge',
    description: 'Next-generation hotel management with mobile web check-in, in-room digital concierge, dynamic rate pricing, and automated housekeeping.',
    tags: ['Smart Concierge', 'Dynamic Pricing', 'Housekeeping Suite', 'Web Check-In']
  }
];

const cinematicVariants = {
  enter: { opacity: 0, x: 20, scale: 0.99, filter: "blur(8px)" },
  center: { opacity: 1, x: 0, scale: 1, filter: "blur(0px)" },
  exit: { opacity: 0, x: -20, scale: 0.99, filter: "blur(8px)" }
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

        {/* Enterprise Showcase Card Container */}
        <div className="relative w-full rounded-[2rem] md:rounded-[2.5rem] bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.08)] p-6 sm:p-8 lg:p-12 transition-all">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={cinematicVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Product Information Column (Left) */}
              <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
                {/* Logo Capsule & Category Badges */}
                <div className="flex flex-wrap items-center gap-3">
                  <div className="bg-white px-3.5 py-1.5 rounded-xl shadow-xs border border-slate-200/80 flex items-center justify-center">
                    <img
                      src={currentProduct.logo}
                      alt={`${currentProduct.name} Logo`}
                      className="h-7 w-auto object-contain mix-blend-multiply select-none"
                    />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold uppercase tracking-wider">
                    {currentProduct.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 text-slate-600 text-xs font-medium">
                    {currentProduct.client}
                  </span>
                </div>

                {/* Title, Subtitle & Stat Badges */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-mono font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/80">
                      {currentProduct.statBadge}
                    </span>
                    <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200/70">
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
                      <span>{currentProduct.secondaryBadge}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                    {currentProduct.name}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-blue-600">
                    {currentProduct.subtitle}
                  </p>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {currentProduct.description}
                  </p>
                </div>

                {/* Feature Tags */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  {currentProduct.tags.map((tag) => (
                    <div
                      key={tag}
                      className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50/80 border border-slate-200/70 text-xs sm:text-sm text-slate-700 font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span className="truncate">{tag}</span>
                    </div>
                  ))}
                </div>

                {/* Action CTAs */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    href="/booking"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-slate-900/15 hover:scale-[1.02] transition-all gap-2 group"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <a
                    href={currentProduct.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-slate-100 hover:bg-slate-200/80 border border-slate-200 text-slate-800 font-semibold text-xs uppercase tracking-wider transition-all gap-2"
                  >
                    <span>Live Platform</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                  </a>
                </div>
              </div>

              {/* Apple-Grade Mockup Frame Container (Right) */}
              <div className="lg:col-span-7 w-full">
                <div className="relative w-full aspect-[16/10] rounded-2xl md:rounded-3xl bg-slate-900/5 dark:bg-slate-950/40 p-2 sm:p-3 border border-slate-200/80 dark:border-white/10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] overflow-hidden">
                  {/* Window Header Bar */}
                  <div className="flex items-center gap-1.5 px-3 py-2 bg-slate-100/80 dark:bg-slate-900/80 rounded-t-xl border-b border-slate-200/60 dark:border-white/5 mb-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                    <span className="ml-2 text-[11px] font-mono text-slate-400 truncate">
                      {currentProduct.slug || 'app'}.hexanx.in
                    </span>
                  </div>

                  {/* Image Viewport Container */}
                  <div className="relative w-full h-[calc(100%-2rem)] rounded-b-xl overflow-hidden bg-slate-950">
                    <Image
                      src={currentProduct.image}
                      alt={`${currentProduct.name} Production Interface`}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 55vw"
                      className="object-cover object-top hover:scale-[1.02] transition-transform duration-500 ease-out"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
