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
    description: 'A complete Enterprise Workspace ecosystem featuring biometric attendance with geolocation verification, one-click automated payroll compliance (PF, ESI, TDS), dynamic shift scheduling, and IT asset lifecycles.',
    tags: ['Attendance Engine', 'Payroll Automation', 'Asset Tracking', 'Leave Workflow']
  },
  {
    id: 'flasto',
    label: 'Flasto',
    title: 'Flasto',
    subtitle: 'Omnichannel Restaurant Operating System',
    category: 'Restaurant OS',
    client: 'F&B Chains & QSRs',
    logo: '/logos/flasto.png',
    link: 'https://flasto.in',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=3840&q=100',
    statBadge: '<50ms POS Sync',
    secondaryBadge: 'Omnichannel KDS Engine',
    description: 'High-throughput F&B operational core integrating ultra-responsive cloud POS, contactless dynamic QR menus, kitchen display system (KDS) synchronization, and recipe-level inventory control.',
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
    description: 'Next-generation hospitality management unifying friction-free mobile web check-in, in-room digital concierge requests, dynamic rate management, automated housekeeping, and channel manager sync.',
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
    <section className="w-full bg-transparent relative overflow-hidden py-16 lg:py-24" id="ecosystem">
      <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12">
        {/* Header & Apple-Style Segmented Navigation */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/80 backdrop-blur-md border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-widest mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Live Cloud Ecosystem</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.08]">
              The Hexanx Product Ecosystem
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-light">
              Autonomous, high-throughput SaaS engines built for Indian enterprise scale and mission-critical reliability.
            </p>
          </div>

          {/* iOS Segmented Control Tab Switcher */}
          <div
            role="tablist"
            aria-label="Hexanx Product Switcher"
            className="relative inline-flex items-center p-1.5 rounded-full bg-slate-200/70 backdrop-blur-xl border border-slate-300/80 shadow-inner w-full sm:w-auto self-start lg:self-end overflow-hidden"
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
                  className={`relative px-5 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-300 cursor-pointer select-none flex-1 sm:flex-initial text-center ${
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

        {/* Main Display: Massive 4K Cinematic Showcase Container */}
        <div className="relative w-full h-[600px] lg:h-[700px] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-slate-200/70 bg-slate-950">
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
              {/* Background 4K Image via Next.js Image Component */}
              <Image
                src={currentProduct.image}
                alt={`${currentProduct.title} 4K Architecture Display`}
                fill
                priority
                sizes="(max-width: 1400px) 100vw, 1400px"
                className="object-cover object-center select-none"
              />

              {/* Cinematic Vignette & Ambient Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/20 pointer-events-none" />

              {/* Top Floating Status Badges */}
              <div className="absolute top-6 left-6 md:top-10 md:left-10 z-20 flex flex-wrap items-center gap-3">
                <div className="bg-black/50 backdrop-blur-xl px-4 py-2 rounded-full text-white text-xs font-mono font-semibold border border-white/20 shadow-xl flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                  <span>{currentProduct.category}</span>
                </div>

                <div className="hidden sm:flex items-center gap-2 bg-black/40 backdrop-blur-xl px-4 py-2 rounded-full text-slate-200 text-xs font-mono border border-white/15 shadow-xl">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                  <span>{currentProduct.secondaryBadge}</span>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-6 right-6 md:top-10 md:right-10 z-20 bg-white/95 backdrop-blur-xl px-4 sm:px-5 py-2 rounded-full text-slate-900 text-xs font-mono font-bold shadow-2xl border border-white/80 flex items-center gap-2.5"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>{currentProduct.statBadge}</span>
              </motion.div>

              {/* Silicon Valley Apple-Tier Glassmorphic Card Overlay */}
              <div className="absolute bottom-6 left-6 right-6 md:right-auto md:bottom-12 md:left-12 max-w-lg md:max-w-xl bg-black/40 backdrop-blur-xl border border-white/20 p-6 sm:p-8 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] z-20 text-white space-y-5">
                {/* Product Logo Capsule & Client Tag */}
                <div className="flex items-center justify-between gap-4">
                  <div className="bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-2xl shadow-lg border border-white/60 flex items-center justify-center">
                    <img
                      src={currentProduct.logo}
                      alt={`${currentProduct.title} Logo`}
                      className="h-8 sm:h-9 w-auto object-contain mix-blend-multiply select-none"
                    />
                  </div>

                  <span className="px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-blue-300 text-xs font-medium uppercase tracking-wider">
                    {currentProduct.client}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {currentProduct.title}
                  </h3>
                  <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-light line-clamp-3 sm:line-clamp-none">
                    {currentProduct.description}
                  </p>
                </div>

                {/* Feature Tags Grid */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  {currentProduct.tags.map((tag) => (
                    <div
                      key={tag}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-xs text-slate-100 font-medium"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span className="truncate">{tag}</span>
                    </div>
                  ))}
                </div>

                {/* Action CTAs */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    href="/booking"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:to-pink-500 text-white font-bold text-xs uppercase tracking-wider shadow-xl shadow-blue-500/30 hover:scale-105 transition-all gap-2 group"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <a
                    href={currentProduct.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs uppercase tracking-wider transition-all gap-2"
                  >
                    <span>Live Platform</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-80" />
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
