"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, ShieldCheck, Users, Cpu } from 'lucide-react';

const AYRA_FEATURES = [
  {
    icon: Zap,
    title: 'Automated Payroll & Attendance',
    desc: 'Instant biometric sync, auto-calculated deductions, and zero-touch compliance.'
  },
  {
    icon: ShieldCheck,
    title: 'Zero-Maintenance Intelligence',
    desc: 'Deep autonomous workflows across your apps with zero manual configuration.'
  },
  {
    icon: Users,
    title: 'Delightful Employee Experience',
    desc: 'Conversational self-service answers in seconds, eliminating HR bottlenecks.'
  }
];

export default function AyraSection() {
  return (
    <section
      className="w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] max-w-[1400px] mx-auto bg-[#0a0a0f] rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[4rem] p-6 sm:p-10 md:p-16 lg:p-24 relative overflow-hidden border border-white/10 shadow-2xl"
      id="ayra"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-0 w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] bg-purple-600/20 rounded-full blur-[100px] sm:blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-indigo-600/15 rounded-full blur-[100px] sm:blur-[140px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 md:gap-16 items-center relative z-10">
        {/* Left Column: Punchy, High-Conversion Copy */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="space-y-6 sm:space-y-8 w-full"
        >
          {/* Header & Glowing Pill */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative group shrink-0">
                <img
                  src="/logos/ayra-ai.png"
                  alt="Ayra AI"
                  className="w-11 h-11 sm:w-14 sm:h-14 rounded-full aspect-square object-cover shadow-2xl border-2 border-purple-400/40"
                />
                <span className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-[#0a0a0f]" />
                </span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md shadow-[0_0_20px_rgba(168,85,247,0.25)]">
                <Cpu size={13} className="text-purple-400" />
                <span className="text-xs font-mono text-purple-200 tracking-wide font-medium">
                  Zero-Maintenance Intelligence
                </span>
              </div>
            </div>

            {/* Massive Headline */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08]">
              Meet Ayra.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
                Intelligent HR &amp; Ops.
              </span>
            </h2>

            {/* Single-Sentence Punchy Hook */}
            <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed font-light">
              Empower your workforce with Ayra AI. Automate tedious HR, payroll, and operational tasks so your team can focus on what truly matters—growth.
            </p>
          </div>

          {/* Compact Benefit Chips */}
          <div className="space-y-2.5 sm:space-y-3 pt-1">
            {AYRA_FEATURES.map((pill, idx) => {
              const Icon = pill.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-400/30 hover:bg-white/[0.08] transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-white text-sm sm:text-base leading-snug">{pill.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-normal font-light truncate sm:whitespace-normal">
                      {pill.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Link
              href="/booking"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-xl shadow-purple-600/30 group"
            >
              <span>Deploy Ayra AI</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/products"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider transition-all border border-white/15 backdrop-blur-md text-center"
            >
              Explore Products
            </Link>
          </div>
        </motion.div>

        {/* Right Column: 4K Corporate Team Hook */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative flex items-center justify-center w-full"
        >
          {/* Subtle Ambient Glow behind Image */}
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 via-indigo-600/15 to-blue-600/20 rounded-[2.5rem] blur-2xl opacity-60 pointer-events-none" />

          {/* 4K CORPORATE TEAM HOOK */}
          <div className="relative w-full aspect-[4/3] lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl group border border-white/10">
            {/* Next.js Optimized Image for LCP safety */}
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2000&q=80"
              alt="Happy Corporate Team powered by Hexanx"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />

            {/* AYRA PLATFORM HOVER REDIRECT OVERLAY */}
            <a 
              href="https://ayra.hexanx.in" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="absolute inset-0 bg-slate-900/50 dark:bg-slate-950/70 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all duration-300 flex items-center justify-center z-30"
            >
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 px-8 py-3.5 bg-white/20 dark:bg-black/40 border border-white/30 text-white rounded-full font-bold hover:bg-white/30 dark:hover:bg-black/60 shadow-2xl backdrop-blur-md">
                <span>Visit Ayra Platform</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </div>
            </a>
            
            {/* Subtle Gradient Overlay for Text Readability or Premium Vibe */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none z-10" />
            
            {/* Floating Success Badge */}
            <div className="absolute bottom-6 left-6 right-6 lg:left-8 lg:right-8 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-white/20 z-20 pointer-events-none">
              <div className="w-12 h-12 flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">Zero-Maintenance AI</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Adopted by 500+ happy teams.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
