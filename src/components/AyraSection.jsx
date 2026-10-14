"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquareCode, TrendingDown, Users, CheckCircle2, Cpu } from 'lucide-react';

const AYRA_FEATURES = [
  {
    icon: MessageSquareCode,
    title: 'Conversational Data Queries',
    desc: 'Instant audited payroll, leave, and headcount answers in plain language.'
  },
  {
    icon: TrendingDown,
    title: 'Predictive Churn Analytics',
    desc: 'Real-time flight-risk signals with zero subjective bias.'
  },
  {
    icon: Users,
    title: 'Automated Resume Shortlisting',
    desc: 'Semantic vector scoring mapped directly to team role requirements.'
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
        {/* Left Column: Stripped-down brutal minimalism */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="space-y-6 sm:space-y-8 w-full"
        >
          {/* Header & 1. Premium Glowing Pill */}
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

              {/* 1. Glowing Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md shadow-[0_0_20px_rgba(168,85,247,0.25)]">
                <Cpu size={13} className="text-purple-400" />
                <span className="text-xs font-mono text-purple-200 tracking-wide font-medium">
                  Ayra Proprietary Neural Engine
                </span>
              </div>
            </div>

            {/* 2. Massive Headline */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08]">
              Meet Ayra. Your Intelligent{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
                HR Partner.
              </span>
            </h2>

            {/* 3. Concise One-liner Subheadline */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-light">
              Autonomous multi-step reasoning built directly into Hexanx OS.
            </p>
          </div>

          {/* 4. The 3 Compact Glassmorphic Feature Chips */}
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
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-xl shadow-purple-600/30 group"
            >
              <span>Deploy Ayra AI</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/products"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider transition-all border border-white/15 backdrop-blur-md text-center"
            >
              Explore Agentic Core
            </Link>
          </div>
        </motion.div>

        {/* Right Column: Visual Container with Integrated Mobile-Friendly Telemetry Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative flex items-center justify-center w-full"
        >
          {/* Main Visual Mask */}
          <div className="relative w-full aspect-[4/3] sm:aspect-square lg:aspect-[4/3.8] rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] overflow-hidden border border-white/15 shadow-2xl shadow-purple-950/40 group">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80"
              alt="Ayra AI Enterprise HR Intelligence"
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 select-none"
            />

            {/* Subtle Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/90 via-[#0a0a0f]/20 to-transparent pointer-events-none" />

            {/* Top Right Live Telemetry Badge */}
            <div className="absolute top-4 right-4 sm:top-5 sm:right-5 flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-xs font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Telemetry Active</span>
            </div>
          </div>

          {/* Glassmorphic Live Voice & Chat Interface Card */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-auto md:-bottom-6 md:left-4 lg:-bottom-6 lg:-left-6 max-w-sm backdrop-blur-2xl bg-slate-900/95 sm:bg-slate-900/90 border border-white/20 p-4 sm:p-5 rounded-2xl sm:rounded-3xl shadow-2xl shadow-purple-950/50 text-white z-20"
          >
            {/* Header: Official Ayra Logo, Name & Status Pill */}
            <div className="flex items-center justify-between gap-3 pb-3 border-b border-white/10 mb-3">
              <div className="flex items-center gap-2.5">
                <div className="relative shrink-0">
                  <img
                    src="/logos/ayra-ai.png"
                    alt="Ayra"
                    className="w-8 h-8 rounded-full border border-purple-500/30 object-cover shadow-sm"
                  />
                  <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 border border-slate-900" />
                  </span>
                </div>
                <div>
                  <span className="text-xs font-bold text-white block leading-tight">Ayra Intelligence</span>
                  <span className="text-[10px] text-slate-400 font-mono block">Autonomous Agent</span>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-[10px] font-mono font-bold shrink-0">
                96% Match
              </span>
            </div>

            {/* Live Voice Mode Waveform Indicator */}
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-purple-500/10 rounded-full border border-purple-500/20 w-fit">
                <div className="flex items-center gap-0.5 h-3">
                  {/* 4 Animated Bars to simulate voice frequency */}
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div
                      key={i}
                      className="w-0.5 bg-purple-400 rounded-full"
                      animate={{ height: ["40%", "100%", "40%"] }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }}
                    />
                  ))}
                </div>
                <span className="text-[10px] font-mono text-purple-300 uppercase tracking-wider font-semibold">
                  Voice Mode Active
                </span>
              </div>
              <span className="text-[9px] font-mono text-slate-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live Feed
              </span>
            </div>

            {/* Dynamic Chat & Speech Output */}
            <div className="p-3 bg-white/[0.04] border border-white/10 rounded-xl space-y-1.5 backdrop-blur-sm">
              <p className="text-sm font-medium text-white leading-snug">
                &ldquo;I&apos;ve screened the 14 candidates for the Senior Engineer role.&rdquo;
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                &ldquo;3 highly matched recommendations have been forwarded to your HR desk for review.&rdquo;
              </p>
            </div>

            {/* Sleek System Tag */}
            <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-purple-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={12} className="text-emerald-400 shrink-0" />
                <span>Zero statutory bias verification</span>
              </div>
              <span className="text-[9px] text-slate-400 font-mono">v2.4-neural</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
