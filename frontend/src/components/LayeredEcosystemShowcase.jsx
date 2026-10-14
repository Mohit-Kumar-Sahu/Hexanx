import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, CheckCircle2, ShieldCheck } from 'lucide-react';

const ECOSYSTEM_TABS = [
  {
    id: 'hexanx',
    label: 'Hexanx OS',
    title: 'Hexanx OS',
    category: 'Enterprise ERP',
    client: 'Enterprise Workspace',
    logo: '/logos/hexanxos.png',
    link: 'https://os.hexanx.in',
    bgImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80',
    statBadge: 'AES-256 Encryption',
    secondaryBadge: 'Facial & Geo Attendance',
    description: 'Hexanx OS is a complete Enterprise Workspace ecosystem. It features smart attendance with facial recognition & geolocation tracking, one-click automated payroll compliance (PF, ESI, TDS), advanced leave & shift management modules, and a dedicated asset tracking system for the IT department.',
    tags: ['Attendance System', 'Payroll Automation', 'Asset Management', 'Leave Tracking']
  },
  {
    id: 'flasto',
    label: 'Flasto',
    title: 'Flasto',
    category: 'Restaurant OS',
    client: 'F&B Chains',
    logo: '/logos/flasto.png',
    link: 'https://flasto.in',
    bgImage: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1400&q=80',
    statBadge: '<50ms POS Sync',
    secondaryBadge: 'Omnichannel KDS Engine',
    description: 'Flasto is an Omnichannel Restaurant OS built for scale. Unifying your entire F&B operation, it provides a lightning-fast Cloud POS, contactless QR digital menus, a real-time Kitchen Display System (KDS), and predictive inventory management with recipe costing.',
    tags: ['Cloud POS', 'QR Ordering', 'Inventory Control', 'KDS Sync']
  },
  {
    id: 'roomyes',
    label: 'Roomyes',
    title: 'Roomyes',
    category: 'Hospitality PMS',
    client: 'Global Hospitality',
    logo: '/logos/roomyes.png',
    link: 'https://roomyes.hexanx.in',
    bgImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80',
    statBadge: '99.99% Cloud Uptime',
    secondaryBadge: 'Contactless Concierge',
    description: 'Room Yes is a next-gen Smart Hotel Concierge & Property Management System (PMS). Elevate guest experiences with seamless Web Check-In, QR-based in-room dining, and one-tap service requests. On the backend, hoteliers get dynamic pricing engines, automated housekeeping workflows, and channel management.',
    tags: ['Smart Concierge', 'Dynamic Pricing', 'Housekeeping Module', 'Web Check-In']
  }
];

export default function LayeredEcosystemShowcase() {
  const [activeTab, setActiveTab] = useState('hexanx');

  const currentProduct = ECOSYSTEM_TABS.find((tab) => tab.id === activeTab) || ECOSYSTEM_TABS[0];

  return (
    <section className="w-full bg-transparent relative overflow-hidden py-12" id="ecosystem">
      <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12">
        {/* Header & Pill-Bar Navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
              Live Cloud Platforms
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              The Hexanx Product Ecosystem
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              Autonomous, high-throughput SaaS engines built for Indian enterprises and global operations.
            </p>
          </div>

          {/* Sleek Navigation Pill-Bar */}
          <div className="inline-flex items-center p-1.5 rounded-full bg-slate-200/80 backdrop-blur-md border border-slate-300/70 w-fit shrink-0 shadow-inner">
            {ECOSYSTEM_TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 sm:px-7 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Display: Massive 600px Container */}
        <div className="relative w-full min-h-[620px] lg:h-[600px] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden bg-slate-100 border border-slate-200/90 shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full h-full flex flex-col lg:grid lg:grid-cols-12 overflow-hidden"
            >
              {/* Product Visual Area - High-Res Unsplash Image, Dark Overlay & Floating Badges */}
              <div className="w-full lg:col-span-6 relative h-[320px] sm:h-[380px] lg:h-full overflow-hidden group bg-slate-950 order-1 lg:order-2">
                <img
                  src={currentProduct.bgImage}
                  alt={`${currentProduct.title} Environment`}
                  className="absolute inset-0 w-full h-full object-cover select-none group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/40 to-slate-950/20 backdrop-blur-[1px]" />

                {/* Centered Logo Capsule */}
                <div className="relative z-20 flex items-center justify-center h-full p-6">
                  <div className="bg-white/95 backdrop-blur-md px-8 py-5 rounded-2xl shadow-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 border border-white/60">
                    <img
                      src={currentProduct.logo}
                      className="h-12 sm:h-14 w-auto mix-blend-multiply"
                      alt={currentProduct.title}
                    />
                  </div>
                </div>

                {/* Top-Left Category Pill */}
                <div className="absolute top-5 left-5 z-30 bg-slate-900/85 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-xs font-mono font-semibold border border-white/15 shadow-lg flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                  {currentProduct.category}
                </div>

                {/* Bottom-Right Levitating Stat Badge */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-5 right-5 z-30 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-slate-800 text-xs font-mono font-bold shadow-2xl border border-white/80 flex items-center gap-2"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{currentProduct.statBadge}</span>
                </motion.div>

                {/* Bottom-Left Feature Signal Badge */}
                <div className="absolute bottom-5 left-5 z-30 hidden sm:flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-slate-200 text-xs font-mono border border-white/10 shadow-lg">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                  <span>{currentProduct.secondaryBadge}</span>
                </div>
              </div>

              {/* Product Details & Feature Text Area */}
              <div className="w-full lg:col-span-6 p-8 sm:p-10 lg:p-12 flex flex-col justify-between h-full bg-white/95 lg:bg-white/90 backdrop-blur-xl border-t lg:border-t-0 lg:border-r border-slate-200/80 order-2 lg:order-1">
                <div className="space-y-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 rounded-full border border-blue-100">
                      <Star className="w-3.5 h-3.5 text-blue-600 fill-current" />
                      <span className="text-xs font-bold tracking-wider text-blue-700 uppercase">
                        USP: {currentProduct.client}
                      </span>
                    </div>

                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-medium border border-slate-200">
                      {currentProduct.category}
                    </span>
                  </div>

                  <div className="h-10 sm:h-12 flex items-center">
                    <img
                      src={currentProduct.logo}
                      alt={`${currentProduct.title} logo`}
                      className="h-10 sm:h-12 md:h-14 w-auto object-contain mix-blend-multiply"
                    />
                  </div>

                  <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                    {currentProduct.description}
                  </p>
                </div>

                {/* Bottom Section: Feature Tags & Direct CTA Link */}
                <div className="pt-6 border-t border-slate-200/80 mt-6 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentProduct.tags.map((tag) => (
                      <div
                        key={tag}
                        className="flex items-center gap-2.5 bg-slate-50 p-2.5 sm:p-3 rounded-xl border border-slate-200/70 text-xs sm:text-sm font-medium text-slate-700 shadow-xs"
                      >
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                        <span className="truncate">{tag}</span>
                      </div>
                    ))}
                  </div>

                  <div>
                    <a
                      href={currentProduct.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm transition-all shadow-md hover:shadow-xl gap-2.5 group cursor-pointer"
                    >
                      <span>Launch {currentProduct.title}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
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
