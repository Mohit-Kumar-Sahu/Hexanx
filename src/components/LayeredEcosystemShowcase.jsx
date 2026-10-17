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
    subtitle: 'Enterprise Workspace & ERP',
    tagline: 'Enterprise Workspace & ERP',
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
    subtitle: 'Omnichannel Restaurant OS',
    tagline: 'Omnichannel Restaurant OS',
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
    subtitle: 'Smart Hotel Concierge & PMS',
    tagline: 'Smart Hotel Concierge & PMS',
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
              {/* LEFT COLUMN: RESTORED ORIGINAL DESIGN */}
              <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center space-y-6 relative z-10">

                {/* 1. TITLE & LOGO AT THE TOP (User Requested Tweak) */}
                <div className="flex flex-col gap-4">
                  {/* Huge Title */}
                  <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {currentProduct.name}
                  </h2>
                  
                  {/* Badges Row (Logo + Categories) */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    {/* Logo Pill */}
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-white dark:bg-slate-800 rounded-full shadow-sm border border-slate-200 dark:border-slate-700">
                      <div className="w-4 h-4 text-slate-900 dark:text-white flex items-center justify-center">
                        {currentProduct.logo ? (
                          <img src={currentProduct.logo} alt="" className="w-4 h-4 object-contain" />
                        ) : (
                          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                        )}
                      </div>
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{currentProduct.name}</span>
                    </div>
                    
                    {/* Category Pill */}
                    <div className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wide rounded-full border border-blue-100 dark:border-blue-800/30">
                      {currentProduct.category || "ENTERPRISE ERP"}
                    </div>

                    {/* Sub-category Pill */}
                    <div className="px-3 py-1 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium rounded-full border border-slate-200 dark:border-slate-700">
                      {currentProduct.client || "Enterprise Workspace"}
                    </div>
                  </div>
                </div>

                {/* 2. SECURITY PILLS */}
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 text-[11px] font-bold rounded-full border border-emerald-200 dark:border-emerald-800/30">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                    {currentProduct.statBadge || "AES-256 Encryption"}
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[11px] font-semibold rounded-full border border-slate-200 dark:border-slate-700">
                    <svg className="w-3.5 h-3.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                    {currentProduct.secondaryBadge || "Facial & Geo Attendance"}
                  </div>
                </div>

                {/* 3. TAGLINE & DESCRIPTION */}
                <div className="space-y-3">
                  <h3 className="text-lg sm:text-xl text-blue-600 dark:text-blue-400 font-semibold">
                    {currentProduct.tagline || currentProduct.subtitle}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[15px]">
                    {currentProduct.description}
                  </p>
                </div>

                {/* 4. FEATURE GRID (Original Outlined Pills) */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {(currentProduct.features || currentProduct.tags || []).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full shadow-sm">
                      <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <span className="text-[13px] font-medium text-slate-700 dark:text-slate-300 truncate">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* 5. ACTION BUTTONS */}
                <div className="flex flex-wrap items-center gap-3 pt-4">
                  <Link
                    href="/booking"
                    className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-full text-sm hover:scale-105 transition-transform flex items-center gap-2"
                  >
                    <span>GET STARTED</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </Link>
                  <a
                    href={currentProduct.url || currentProduct.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold rounded-full text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-2 border border-slate-200 dark:border-slate-700 shadow-sm"
                  >
                    <span>LIVE PLATFORM</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                  </a>
                </div>

              </div>

              {/* Apple-Grade Mockup Frame Container (Right) */}
              <div className="lg:col-span-7 w-full">
                {/* ULTRA-PREMIUM MACBOOK BROWSER FRAME */}
                <div className="relative group w-full mx-auto mt-8 md:mt-12 lg:mt-0">
                  
                  {/* Subtle Ambient Glow Effect (Behind the card) */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-emerald-500/20 rounded-[2rem] blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-700"></div>

                  {/* Main Card Body */}
                  <div className="relative rounded-2xl md:rounded-[1.5rem] bg-white dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800/60 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col transform transition-transform duration-500 hover:-translate-y-1">
                    
                    {/* Authentic macOS Window Header */}
                    <div className="flex items-center justify-between px-4 py-3 bg-slate-50/90 dark:bg-slate-900/90 border-b border-slate-200/60 dark:border-slate-800/60 backdrop-blur-md">
                      {/* Traffic Lights */}
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-inner border border-black/10"></div>
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-inner border border-black/10"></div>
                        <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-inner border border-black/10"></div>
                      </div>
                      
                      {/* URL Bar (Glassmorphic) */}
                      <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
                        <div className="px-6 py-1.5 bg-white dark:bg-slate-950 rounded-md shadow-sm border border-slate-200 dark:border-slate-800 text-[11px] sm:text-xs font-medium font-mono text-slate-500 dark:text-slate-400 tracking-wide flex items-center gap-2">
                          <svg className="w-3 h-3 text-slate-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path></svg>
                          {currentProduct.slug || 'app'}.hexanx.in
                        </div>
                      </div>
                      
                      {/* Empty div for flex-between balance */}
                      <div className="w-10"></div>
                    </div>

                    {/* FULL, UNSHRUNKEN IMAGE RENDER */}
                    <div className="relative w-full bg-slate-100 dark:bg-slate-900 flex justify-center group/screen overflow-hidden">
                      <Image
                        src={currentProduct.image}
                        alt={`${currentProduct.name} Interface`}
                        width={2880}
                        height={1620}
                        quality={100}
                        priority
                        className="w-full h-auto object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      />

                      {/* HOVER REDIRECTION OVERLAY */}
                      <a 
                        href={currentProduct.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="absolute inset-0 bg-slate-900/40 dark:bg-slate-950/70 opacity-0 group-hover/screen:opacity-100 backdrop-blur-[2px] transition-all duration-300 flex items-center justify-center z-20"
                      >
                        <div className="transform translate-y-4 group-hover/screen:translate-y-0 transition-transform duration-300 flex items-center gap-2 px-6 py-3 bg-white/20 dark:bg-black/40 border border-white/30 text-white rounded-full font-medium hover:bg-white/30 dark:hover:bg-black/60 shadow-2xl backdrop-blur-md">
                          <span>Visit Website</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </div>
                      </a>
                    </div>
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
