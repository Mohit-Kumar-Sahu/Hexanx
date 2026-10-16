"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Zap, ShieldCheck, Cpu } from 'lucide-react';

const AYRA_FEATURES = [
  {
    icon: Terminal,
    title: 'Zero-Maintenance God-Mode',
    desc: 'Self-discovering endpoint catalog that explores database schemas and mutates state dynamically without bespoke glue code.'
  },
  {
    icon: Zap,
    title: 'Universal API Orchestration',
    desc: 'Autonomous multi-step execution across payroll, biometric attendance, restaurant POS, and hotel PMS microservices.'
  },
  {
    icon: ShieldCheck,
    title: 'Loopback Authentication',
    desc: 'Intercepts and verifies user bearer tokens with cryptographic tenant boundary isolation and immutable audit trails.'
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
                  Universal API Orchestration
                </span>
              </div>
            </div>

            {/* 2. Massive Headline */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08]">
              Meet Ayra.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
                Zero-Maintenance God-Mode.
              </span>
            </h2>

            {/* 3. Concise One-liner Subheadline */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-light">
              Universal API Orchestration with autonomous multi-step reasoning and Loopback Authentication built directly into Hexanx OS.
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

        {/* Right Column: Visual Container with Neural Terminal Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative flex items-center justify-center w-full"
        >
          {/* Subtle Ambient Glow behind Terminal */}
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 via-indigo-600/15 to-blue-600/20 rounded-3xl blur-2xl opacity-60 pointer-events-none" />

          {/* AYRA NEURAL TERMINAL MOCKUP */}
          <div className="relative w-full rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden font-mono text-sm">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
              </div>
              <div className="text-xs text-slate-500">ayra-orchestrator.ts</div>
              <div className="w-10" />
            </div>

            {/* Terminal Body */}
            <div className="p-5 space-y-4 text-slate-300">
              <div className="flex gap-3">
                <span className="text-emerald-400 font-bold opacity-80">User:</span>
                <span className="text-slate-100">Approve John&apos;s pending leave.</span>
              </div>

              <div className="flex gap-3 opacity-70">
                <span className="text-blue-400 font-bold">Ayra:</span>
                <div className="space-y-1">
                  <p className="text-slate-400">► Exploring DB Schema: <span className="text-amber-300">leave_requests</span></p>
                  <p className="text-slate-400">► Intercepting Bearer Token: <span className="text-purple-400">[Loopback Auth Verified]</span></p>
                  <p className="text-slate-400">► Executing: <span className="text-rose-400">PATCH /api/leaves/42/status</span></p>
                </div>
              </div>

              <div className="flex gap-3 pt-2 border-t border-slate-800/50">
                <span className="text-blue-400 font-bold opacity-80">Ayra:</span>
                <span className="text-emerald-300 font-medium">John&apos;s leave request (#42) has been successfully approved.</span>
              </div>
            </div>

            {/* Subtle Glow */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
