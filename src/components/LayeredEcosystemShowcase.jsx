"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const ECOSYSTEM_TABS = [
  {
    id: 'hexanx',
    name: 'Hexanx OS',
    label: 'Hexanx OS',
    title: 'Hexanx OS',
    slug: 'os',
    tagline: 'Enterprise Workspace & ERP',
    subtitle: 'Enterprise Workspace & ERP',
    category: 'Enterprise ERP',
    client: 'Enterprise Workspace',
    logo: '/logos/hexanxos.png',
    link: 'https://os.hexanx.in',
    url: 'https://os.hexanx.in',
    image: '/hexanxosR.png',
    statBadge: 'AES-256 Encryption',
    secondaryBadge: 'Facial & Geo Attendance',
    description: 'Enterprise workspace ecosystem with biometric geo-attendance, automated payroll compliance (PF, ESI, TDS), and IT asset tracking.',
    features: ['Attendance Engine', 'Payroll Automation', 'Asset Tracking', 'Leave Workflow'],
    tags: ['Attendance Engine', 'Payroll Automation', 'Asset Tracking', 'Leave Workflow']
  },
  {
    id: 'flasto',
    name: 'Flasto',
    label: 'Flasto',
    title: 'Flasto',
    slug: 'flasto',
    tagline: 'Omnichannel Restaurant OS',
    subtitle: 'Omnichannel Restaurant OS',
    category: 'Restaurant OS',
    client: 'F&B Chains & QSRs',
    logo: '/logos/flasto.png',
    link: 'https://flasto.in',
    url: 'https://flasto.in',
    image: '/flastoR.png',
    statBadge: '<50ms POS Sync',
    secondaryBadge: 'Omnichannel KDS Engine',
    description: 'High-throughput restaurant OS unifying cloud POS, contactless QR dining, real-time KDS coordination, and live recipe costing.',
    features: ['Cloud POS', 'QR Ordering', 'Inventory Costing', 'Realtime KDS'],
    tags: ['Cloud POS', 'QR Ordering', 'Inventory Costing', 'Realtime KDS']
  },
  {
    id: 'roomyes',
    name: 'Roomyes',
    label: 'Roomyes',
    title: 'Roomyes',
    slug: 'roomyes',
    tagline: 'Smart Hotel Concierge & PMS',
    subtitle: 'Smart Hotel Concierge & PMS',
    category: 'Hospitality PMS',
    client: 'Boutique & Luxury Hospitality',
    logo: '/logos/roomyes.png',
    link: 'https://roomyes.hexanx.in',
    url: 'https://roomyes.hexanx.in',
    image: '/roomyesR.png',
    statBadge: '99.99% Cloud Uptime',
    secondaryBadge: 'Contactless Concierge',
    description: 'Next-generation hotel management with mobile web check-in, in-room digital concierge, dynamic rate pricing, and automated housekeeping.',
    features: ['Smart Concierge', 'Dynamic Pricing', 'Housekeeping Suite', 'Web Check-In'],
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
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={cinematicVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* MAIN PRODUCT CARD */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12 items-center bg-white dark:bg-slate-900/50 rounded-[2.5rem] p-6 sm:p-10 lg:p-12 border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden">
              
              {/* LEFT COLUMN: TIGHTLY GROUPED TEXT (Col Span 5) */}
              <div className="xl:col-span-5 flex flex-col space-y-6 lg:space-y-8 relative z-10">
                {/* Badges - Flex Wrap */}
                <div className="flex flex-wrap gap-2 items-center">
                  <div className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 border border-slate-200 dark:border-slate-700">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    {currentProduct.name}
                  </div>
                  <div className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 rounded-full text-xs font-semibold text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800/30">
                    {currentProduct.category || "Enterprise ERP"}
                  </div>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
                    {currentProduct.name}
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-4">
                    {currentProduct.tagline}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[15px]">
                    {currentProduct.description}
                  </p>
                </div>

                {/* Feature Pills - Tight Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {(currentProduct.features || currentProduct.tags || []).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 px-3 py-2 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-700/50">
                      <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                      <span className="text-xs font-medium text-slate-700 dark:text-slate-300 truncate">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link href="/booking" className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-full text-sm hover:scale-105 transition-transform flex items-center gap-2">
                    Get Started <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </Link>
                  <a href={currentProduct.url} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium rounded-full text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-2">
                    Live Platform <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                  </a>
                </div>
              </div>

              {/* RIGHT COLUMN: MACBOOK FRAME WITH HOVER REDIRECT (Col Span 7) */}
              <div className="xl:col-span-7 relative group/screen w-full">
                {/* MacBook Frame */}
                <div className="relative rounded-2xl md:rounded-t-[1.5rem] bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden">
                  
                  {/* Safari Header */}
                  <div className="flex items-center px-4 py-3 bg-slate-50/90 dark:bg-slate-900/90 border-b border-slate-200/80 dark:border-slate-800 backdrop-blur-md">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 px-6 py-1 bg-white dark:bg-slate-950 rounded-md shadow-sm border border-slate-200 dark:border-slate-800 text-[11px] font-mono text-slate-500 flex items-center gap-2">
                      <svg className="w-3 h-3 text-slate-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path></svg>
                      {currentProduct.slug || 'app'}.hexanx.in
                    </div>
                  </div>

                  {/* Actual Product Image */}
                  <div className="relative w-full bg-slate-100 dark:bg-slate-900">
                    <Image
                      src={currentProduct.image}
                      alt={currentProduct.name}
                      width={2880}
                      height={1620}
                      priority
                      className="w-full h-auto object-contain transition-transform duration-700 ease-out group-hover/screen:scale-[1.03] origin-top"
                    />
                  </div>

                  {/* HOVER OVERLAY: Visit Website */}
                  <a href={currentProduct.url} target="_blank" rel="noopener noreferrer" className="absolute inset-0 bg-slate-900/60 dark:bg-slate-950/80 opacity-0 group-hover/screen:opacity-100 backdrop-blur-[2px] transition-all duration-300 flex items-center justify-center z-20">
                    <div className="transform translate-y-4 group-hover/screen:translate-y-0 transition-all duration-300 flex items-center gap-3 px-8 py-3.5 bg-white/10 border border-white/20 text-white rounded-full font-bold hover:bg-white/20 shadow-2xl backdrop-blur-md text-sm">
                      Visit {currentProduct.name} 
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
