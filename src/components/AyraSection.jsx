"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, MessageSquareCode, TrendingDown, Users, CheckCircle2, Cpu } from 'lucide-react';
import Link from 'next/link';

export default function AyraSection() {
  return (
    <section
      className="w-[calc(100%-2rem)] max-w-[1400px] mx-auto bg-[#0a0a0f] rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-16 lg:p-24 relative overflow-hidden border border-white/10 shadow-2xl"
      id="ayra"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[140px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        {/* Left Column: Avatar, Typography, Specs & Dark Glassmorphism Feature Pills */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-8"
        >
          {/* Avatar & Premium Pill Header */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-4">
              <div className="relative group shrink-0">
                <img
                  src="/logos/ayra-ai.png"
                  alt="Ayra AI Intelligent Partner"
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full aspect-square object-cover shadow-2xl border-2 border-purple-400/40 transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-[#0a0a0f]" />
                </span>
              </div>

              {/* Premium Pill Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                <Sparkles size={14} className="text-purple-400" />
                <span className="text-xs font-mono text-slate-300">Agentic AI Workforce Layer</span>
              </div>
            </div>

            {/* Neural Engine Specification Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-md">
              <Cpu size={12} className="text-purple-400" />
              <span className="text-[11px] font-mono text-slate-400 tracking-wide">
                Ayra Proprietary Neural Engine • Enterprise-Grade Memory • Zero-Latency Intelligence
              </span>
            </div>
          </div>

          {/* Heading with tight line height */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
            Meet Ayra. Your Intelligent{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
              HR Partner.
            </span>
          </h2>

          <p className="text-slate-400 leading-relaxed text-lg font-light">
            Ayra bridges the gap between raw workforce telemetry and executive decision-making. Autonomous multi-step
            reasoning, instant contract semantic queries, and proactive retention modeling built directly into Hexanx
            OS.
          </p>

          {/* 3 Dark Glassmorphism Feature Pills */}
          <div className="space-y-4 pt-2">
            {[
              {
                icon: MessageSquareCode,
                title: 'Conversational Data Queries',
                desc: 'Ask complex payroll, leave liability, or headcount queries in natural language and receive audited, verifiable calculations in seconds.'
              },
              {
                icon: TrendingDown,
                title: 'Predictive Churn Analytics',
                desc: 'Identifies flight risks across departments using engagement, tenure, and compensation variance signals with zero subjective bias.'
              },
              {
                icon: Users,
                title: 'Automated Resume Shortlisting',
                desc: 'Vector semantic scoring across hundreds of incoming applicant resumes, mapping role taxonomies directly to team requirements.'
              }
            ].map((pill, idx) => {
              const Icon = pill.icon;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-400/40 hover:bg-white/[0.08] transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base mb-1">{pill.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed font-light">{pill.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link
              href="/booking"
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-xl shadow-purple-600/30 group"
            >
              Deploy Ayra AI <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/products"
              className="px-7 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider transition-all border border-white/15 backdrop-blur-md"
            >
              Explore Agentic Core
            </Link>
          </div>
        </motion.div>

        {/* Right Column: Professional Woman Visual Masked in Rounded Container with Overlapping 3D Floating Glass Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative flex items-center justify-center w-full pb-10 sm:pb-12 lg:pb-0"
        >
          {/* Main Visual Mask with subtle inner shadow */}
          <div className="relative w-full aspect-[4/3] sm:aspect-square lg:aspect-[4/3.8] rounded-3xl md:rounded-[2.5rem] overflow-hidden border border-white/15 shadow-2xl shadow-purple-950/40 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] group">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80"
              alt="Ayra AI Enterprise HR Intelligence"
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 select-none"
            />

            {/* Subtle Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/90 via-[#0a0a0f]/20 to-transparent pointer-events-none" />

            {/* In-Image Top Pill */}
            <div className="absolute top-5 right-5 hidden sm:flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-xs font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Live Telemetry Active</span>
            </div>

            {/* Bottom In-Image Telemetry Badges */}
            <div className="absolute bottom-6 left-6 right-6 hidden sm:flex items-center justify-between text-xs text-slate-300 pointer-events-none">
              <span className="font-mono bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
                Tenant: Enterprise Workspace
              </span>
              <span className="font-mono text-emerald-400 font-bold flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Live Telemetry Sync
              </span>
            </div>
          </div>

          {/* Floating Glassmorphism Alert Card - Overlapping bottom-left edge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-6 left-2 sm:-bottom-8 sm:left-4 lg:-bottom-8 lg:-left-8 xl:-left-12 z-20 backdrop-blur-2xl bg-slate-900/90 border border-white/20 p-5 sm:p-6 rounded-2xl sm:rounded-3xl shadow-2xl shadow-purple-950/60 max-w-[calc(100%-1rem)] sm:max-w-sm text-white"
          >
            <div className="flex items-center justify-between gap-3 pb-3 border-b border-white/10 mb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-purple-500/25 flex items-center justify-center text-purple-300 shadow-inner">
                  <Sparkles size={16} />
                </div>
                <div>
                  <span className="text-xs font-bold text-white tracking-wide block">Ayra Intelligence</span>
                  <span className="text-[10px] text-slate-400 font-mono block">Real-time Autonomous Agent</span>
                </div>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-[10px] font-mono font-bold shrink-0">
                96% Match
              </span>
            </div>

            <p className="text-xs sm:text-sm font-semibold text-slate-100">
              Hiring Pipeline Alert: Senior Full-Stack Engineer
            </p>
            <p className="text-[11px] sm:text-xs text-slate-400 mt-1 leading-relaxed">
              Autonomous Shortlist: 14 candidates screened. 3 top recommendations forwarded to HR desk.
            </p>

            <div className="mt-3.5 pt-3 border-t border-white/10 flex items-center gap-2 text-[10px] sm:text-[11px] font-mono text-purple-300">
              <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
              <span>Zero statutory bias verification passed</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
