"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  ExternalLink, 
  Lock
} from 'lucide-react';

const ECOSYSTEM_TABS = [
  {
    id: 'hexanx',
    name: 'Hexanx OS',
    label: 'Hexanx OS',
    title: 'Hexanx OS',
    slug: 'os',
    displayUrl: 'os.hexanx.in',
    subtitle: 'Enterprise Workspace & ERP',
    tagline: 'Enterprise Workspace & ERP',
    category: 'Enterprise ERP',
    client: 'Global Workforce & Ops',
    logo: '/logos/hexanxos.png',
    link: 'https://os.hexanx.in',
    url: 'https://os.hexanx.in',
    image: '/hexanxosR.png',
    statBadge: 'AES-256 Military Grade',
    secondaryBadge: 'Facial & Geo Tracking',
    badgeText: 'Live Enterprise ERP',
    description: 'Enterprise workspace ecosystem engineered for autonomous multi-entity management with biometric geo-attendance, automated payroll compliance (PF, ESI, TDS), and IT asset lifecycle tracking.',
    features: ['Biometric Geo-Attendance', 'Automated Payroll & TDS', 'IT Asset Tracking Hub', 'Leave & Shift Engine'],
    tags: ['Biometric Geo-Attendance', 'Automated Payroll & TDS', 'IT Asset Tracking Hub', 'Leave & Shift Engine'],
    theme: {
      accentColor: 'text-blue-600',
      accentBg: 'bg-blue-500/10',
      accentBorder: 'border-blue-500/20',
      gradientText: 'from-blue-600 via-indigo-600 to-cyan-500',
      pillBg: 'bg-blue-600',
      dotColor: 'bg-blue-500',
      glow: 'from-blue-600/25 via-indigo-500/15 to-cyan-400/20',
      iconColor: 'text-blue-600',
      buttonBg: 'bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 hover:from-blue-900 hover:to-indigo-900',
      browserGlow: 'from-blue-500/25 via-indigo-500/20 to-cyan-400/25'
    }
  },
  {
    id: 'flasto',
    name: 'Flasto',
    label: 'Flasto',
    title: 'Flasto',
    slug: 'flasto',
    displayUrl: 'flasto.in',
    subtitle: 'Omnichannel Restaurant OS',
    tagline: 'Omnichannel Restaurant OS',
    category: 'Restaurant OS',
    client: 'F&B Chains & QSR Networks',
    logo: '/logos/flasto.png',
    link: 'https://flasto.in',
    url: 'https://flasto.in',
    image: '/flastoR.png',
    statBadge: '<50ms POS Sync Latency',
    secondaryBadge: 'Omnichannel KDS Engine',
    badgeText: 'Hyper-Speed F&B Engine',
    description: 'High-throughput restaurant operating system unifying ultra-low latency cloud POS, contactless QR table dining, real-time Kitchen Display System (KDS) routing, and automated recipe costing.',
    features: ['Ultra-Low Latency POS', 'QR Contactless Dining', 'Automated Recipe Costing', 'Kitchen Display System'],
    tags: ['Ultra-Low Latency POS', 'QR Contactless Dining', 'Automated Recipe Costing', 'Kitchen Display System'],
    theme: {
      accentColor: 'text-orange-600',
      accentBg: 'bg-orange-500/10',
      accentBorder: 'border-orange-500/20',
      gradientText: 'from-orange-600 via-amber-600 to-red-500',
      pillBg: 'bg-orange-600',
      dotColor: 'bg-orange-500',
      glow: 'from-orange-600/25 via-amber-500/15 to-red-400/20',
      iconColor: 'text-orange-600',
      buttonBg: 'bg-gradient-to-r from-slate-900 via-orange-950 to-slate-900 hover:from-orange-900 hover:to-amber-900',
      browserGlow: 'from-orange-500/25 via-amber-500/20 to-red-400/25'
    }
  },
  {
    id: 'roomyes',
    name: 'Roomyes',
    label: 'Roomyes',
    title: 'Roomyes',
    slug: 'roomyes',
    displayUrl: 'roomyes.hexanx.in',
    subtitle: 'Smart Hotel Concierge & PMS',
    tagline: 'Smart Hotel Concierge & PMS',
    category: 'Hospitality PMS',
    client: 'Boutique & Luxury Hospitality',
    logo: '/logos/roomyes.png',
    link: 'https://roomyes.hexanx.in',
    url: 'https://roomyes.hexanx.in',
    image: '/roomyesR.png',
    statBadge: '99.99% Cloud Uptime SLA',
    secondaryBadge: 'Contactless Concierge',
    badgeText: 'Luxury Hospitality Tech',
    description: 'Next-generation hotel management suite with frictionless mobile web check-in, in-room conversational concierge, AI-driven dynamic rate optimization, and automated housekeeping dispatch.',
    features: ['Mobile Web Check-In', 'AI In-Room Concierge', 'Dynamic Yield Pricing', 'Housekeeping Suite'],
    tags: ['Mobile Web Check-In', 'AI In-Room Concierge', 'Dynamic Yield Pricing', 'Housekeeping Suite'],
    theme: {
      accentColor: 'text-rose-600',
      accentBg: 'bg-rose-500/10',
      accentBorder: 'border-rose-500/20',
      gradientText: 'from-rose-600 via-pink-600 to-purple-500',
      pillBg: 'bg-rose-600',
      dotColor: 'bg-rose-500',
      glow: 'from-rose-600/25 via-pink-500/15 to-purple-400/20',
      iconColor: 'text-rose-600',
      buttonBg: 'bg-gradient-to-r from-slate-900 via-purple-950 to-slate-900 hover:from-rose-900 hover:to-purple-900',
      browserGlow: 'from-rose-500/25 via-pink-500/20 to-purple-400/25'
    }
  }
];

const cinematicVariants = {
  enter: { opacity: 0, x: 16, scale: 0.99, filter: "blur(6px)" },
  center: { opacity: 1, x: 0, scale: 1, filter: "blur(0px)" },
  exit: { opacity: 0, x: -16, scale: 0.99, filter: "blur(6px)" }
};

export default function LayeredEcosystemShowcase() {
  const [activeTab, setActiveTab] = useState('hexanx');

  const currentProduct = ECOSYSTEM_TABS.find((tab) => tab.id === activeTab) || ECOSYSTEM_TABS[0];

  return (
    <section className="w-full bg-transparent relative overflow-hidden py-10 sm:py-14 lg:py-18" id="ecosystem">
      <div className="max-w-[1240px] mx-auto w-full px-4 sm:px-6 md:px-8">
        {/* Header & Apple-Style Segmented Navigation */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 backdrop-blur-md border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-widest mb-3 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Live Cloud Ecosystem</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.08]">
              The Hexanx Product Ecosystem
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2.5 leading-relaxed font-light">
              Autonomous, high-throughput SaaS engines engineered for enterprise scale and zero downtime.
            </p>
          </div>

          {/* iOS Segmented Control Tab Switcher */}
          <div
            role="tablist"
            aria-label="Hexanx Product Switcher"
            className="relative inline-flex items-center p-1 sm:p-1.5 rounded-full bg-slate-200/70 backdrop-blur-2xl border border-slate-300/80 shadow-inner w-full sm:w-auto self-start lg:self-end overflow-hidden"
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
                  className={`relative px-5 sm:px-7 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-colors duration-300 cursor-pointer select-none flex-1 sm:flex-initial text-center ${
                    isActive ? 'text-white' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 bg-slate-900 rounded-full shadow-lg"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-emerald-400 animate-pulse' : 'bg-slate-400'}`} />
                    <span>{tab.label}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tailored Enterprise Showcase Card Container */}
        <div className="relative w-full rounded-[2rem] md:rounded-[2.5rem] bg-white/90 backdrop-blur-2xl border border-white/90 shadow-[0_24px_70px_-15px_rgba(15,23,42,0.1)] p-6 sm:p-8 lg:p-10 xl:p-12 transition-all overflow-hidden">
          
          {/* Dynamic background ambient aura */}
          <div className={`absolute -top-36 -left-36 w-[450px] h-[450px] bg-gradient-to-br ${currentProduct.theme.glow} rounded-full blur-[100px] opacity-60 pointer-events-none transition-all duration-700`} />
          <div className={`absolute -bottom-36 -right-36 w-[450px] h-[450px] bg-gradient-to-tl ${currentProduct.theme.glow} rounded-full blur-[100px] opacity-40 pointer-events-none transition-all duration-700`} />

          {/* Micro-dot grid texture */}
          <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

          {/* Top highlight luster edge */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300/80 to-transparent pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={cinematicVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center relative z-10"
            >
              {/* Product Information Column (Left) */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                
                {/* Brand Header: Transparent, Large Logo & Category Metadata */}
                <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-4 sm:mb-5">
                  <img
                    src={currentProduct.logo}
                    alt={`${currentProduct.name} Logo`}
                    className="h-10 sm:h-11 md:h-12 w-auto object-contain select-none"
                  />
                  <span className="hidden sm:inline-block text-slate-300">/</span>
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-medium">
                    <span className={`font-bold uppercase tracking-wider ${currentProduct.theme.accentColor}`}>
                      {currentProduct.category}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-500 font-medium">
                      {currentProduct.client}
                    </span>
                  </div>
                </div>

                {/* Futuristic Live Telemetry Capsule */}
                <div className="inline-flex flex-wrap items-center gap-3 sm:gap-3.5 px-3.5 py-1.5 rounded-xl bg-slate-100/70 backdrop-blur-md border border-slate-200/70 shadow-xs mb-5 sm:mb-6 self-start">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-mono font-semibold text-slate-800">
                    <span className="relative flex h-2 w-2">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${currentProduct.theme.dotColor} opacity-75`} />
                      <span className={`relative inline-flex rounded-full h-2 w-2 ${currentProduct.theme.dotColor}`} />
                    </span>
                    <span>{currentProduct.statBadge}</span>
                  </div>
                  <span className="text-slate-300">•</span>
                  <div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-600 font-medium">
                    <ShieldCheck className={`w-3.5 h-3.5 ${currentProduct.theme.iconColor} shrink-0`} />
                    <span>{currentProduct.secondaryBadge}</span>
                  </div>
                </div>

                {/* Title, Subtitle & Description */}
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-slate-900 tracking-tight leading-[1.08] mb-2">
                    {currentProduct.name}
                  </h3>
                  <p className={`text-base sm:text-lg lg:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${currentProduct.theme.gradientText} mb-3`}>
                    {currentProduct.subtitle || currentProduct.tagline}
                  </p>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light max-w-lg">
                    {currentProduct.description}
                  </p>
                </div>

                {/* Feature Tiles */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-6 sm:mb-8">
                  {currentProduct.features.map((feature, idx) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.06, duration: 0.3 }}
                      whileHover={{ y: -2, scale: 1.01 }}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-white/80 hover:bg-white border border-slate-200/80 hover:border-slate-300 shadow-xs hover:shadow-sm transition-all duration-300 group cursor-default"
                    >
                      <div className={`w-5 h-5 rounded-md ${currentProduct.theme.accentBg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                        <CheckCircle2 className={`w-3.5 h-3.5 ${currentProduct.theme.iconColor}`} />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 truncate">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Action CTAs */}
                <div className="flex flex-wrap items-center gap-3.5">
                  <Link
                    href="/booking"
                    className={`relative inline-flex items-center justify-center px-6 sm:px-7 py-3 rounded-full ${currentProduct.theme.buttonBg} text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-slate-900/15 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 gap-2 group overflow-hidden`}
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
                    <span className="relative z-10">Schedule Enterprise Demo</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform relative z-10" />
                  </Link>

                  <a
                    href={currentProduct.url || currentProduct.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 sm:px-6 py-3 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 hover:text-slate-900 font-bold text-xs uppercase tracking-wider shadow-xs hover:shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 gap-2 group"
                  >
                    <span>Live Platform</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                </div>
              </div>

              {/* Apple-Grade Mockup Frame Container (Right) */}
              <div className="lg:col-span-6 w-full">
                <motion.div
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  className="relative group w-full mx-auto"
                >
                  {/* Product-Colored Ambient Glow */}
                  <div className={`absolute -inset-2 bg-gradient-to-r ${currentProduct.theme.browserGlow} rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-700 pointer-events-none`} />

                  {/* Main Window Body - Fully Rounded on all 4 corners */}
                  <div 
                    style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
                    className="relative rounded-2xl md:rounded-[1.75rem] bg-white border border-slate-200/80 shadow-[0_24px_60px_-15px_rgba(15,23,42,0.18)] overflow-hidden flex flex-col transform transition-transform duration-500 hover:-translate-y-1"
                  >
                    {/* Authentic macOS Window Header */}
                    <div className="flex items-center justify-between px-4 py-2.5 bg-slate-50/95 border-b border-slate-200/70 backdrop-blur-md rounded-t-2xl md:rounded-t-[1.75rem]">
                      {/* Traffic Lights */}
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-inner border border-black/10"></div>
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-inner border border-black/10"></div>
                        <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-inner border border-black/10"></div>
                      </div>
                      
                      {/* URL Bar */}
                      <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
                        <div className="px-4 py-1 bg-white rounded-md shadow-xs border border-slate-200 text-[11px] sm:text-xs font-medium font-mono text-slate-500 tracking-wide flex items-center gap-1.5">
                          <Lock className="w-3 h-3 text-emerald-500" />
                          <span>{currentProduct.displayUrl}</span>
                        </div>
                      </div>
                      
                      {/* Empty div for flex balance */}
                      <div className="w-10"></div>
                    </div>

                    {/* FULL, CRISP IMAGE RENDER - Curvy bottom corners */}
                    <div className="relative w-full bg-slate-100 flex justify-center group/screen overflow-hidden rounded-b-2xl md:rounded-b-[1.75rem]">
                      <Image
                        src={currentProduct.image}
                        alt={`${currentProduct.name} Interface`}
                        width={2880}
                        height={1620}
                        quality={100}
                        priority
                        className="w-full h-auto object-contain rounded-b-2xl md:rounded-b-[1.75rem] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      />

                      {/* HOVER REDIRECTION OVERLAY */}
                      <a 
                        href={currentProduct.url || currentProduct.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover/screen:opacity-100 backdrop-blur-[2px] transition-all duration-300 flex items-center justify-center z-20 rounded-b-2xl md:rounded-b-[1.75rem]"
                      >
                        <div className="transform translate-y-4 group-hover/screen:translate-y-0 transition-transform duration-300 flex items-center gap-2 px-5 py-2.5 bg-white/25 border border-white/30 text-white rounded-full font-bold text-xs sm:text-sm hover:bg-white/35 shadow-2xl backdrop-blur-md">
                          <span>Visit {currentProduct.displayUrl}</span>
                          <ExternalLink className="w-4 h-4" />
                        </div>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
