import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, MessageSquareCode, TrendingDown, Users, CheckCircle2, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AyraSection() {
  return (
    <section className="w-full bg-slate-950 text-white py-20 md:py-24 rounded-[3rem] overflow-hidden shadow-2xl relative border border-slate-800/80" id="ayra">
      {/* Ambient Lighting Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-8 md:px-16 relative z-10">
        
        {/* Left Column: Avatar, Typography & Dark Glassmorphism Pills */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-8"
        >
          {/* Avatar & Status Badge */}
          <div className="flex items-center gap-4">
            <div className="relative group">
              <img
                src="/logos/ayra-ai.png"
                alt="Ayra AI Intelligent HR Partner"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full aspect-square object-cover shadow-2xl border-2 border-purple-400/40 transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-slate-950" />
              </span>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-400/25 text-purple-300 text-xs font-mono font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>Agentic AI Workforce Layer</span>
              </div>
              <p className="text-xs text-slate-400 mt-1 font-mono">Ayra Proprietary Neural Engine • Enterprise-Grade Secure Memory • Zero-Latency Intelligence</p>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
            Meet Ayra. Your Intelligent <span className="text-purple-400">HR Partner.</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
            Ayra bridges the gap between raw workforce telemetry and executive decision-making. Autonomous multi-step reasoning, instant contract semantic queries, and proactive retention modeling built directly into Hexanx OS.
          </p>

          {/* 3 Dark Glassmorphism Feature Pills */}
          <div className="space-y-3.5 pt-2">
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
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-400/40 hover:bg-white/[0.08] transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm sm:text-base mb-0.5">{pill.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-light">{pill.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link
              to="/booking"
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-purple-600/30 group"
            >
              Deploy Ayra AI <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/products"
              className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all border border-white/10"
            >
              Explore Agentic Core
            </Link>
          </div>
        </motion.div>

        {/* Right Column: Professional Woman Visual Masked in Rounded-3xl Container with Floating Glass Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative flex items-center justify-center"
        >
          {/* Main Visual Mask */}
          <div className="w-full aspect-[4/3] sm:aspect-square rounded-3xl overflow-hidden border border-white/15 shadow-2xl relative group">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
              alt="Ayra AI Enterprise HR Intelligence"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 select-none"
            />
            {/* Subtle Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

            {/* Bottom In-Image Badge */}
            <div className="absolute bottom-6 left-6 right-6 hidden sm:flex items-center justify-between text-xs text-slate-300">
              <span className="font-mono bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                Tenant: Enterprise Workspace
              </span>
              <span className="font-mono text-emerald-400 font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Live Telemetry Sync
              </span>
            </div>
          </div>

          {/* Floating Glassmorphism Alert Card */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-8 z-20 backdrop-blur-xl bg-white/10 border border-white/20 p-5 rounded-2xl shadow-2xl max-w-xs sm:max-w-sm text-white"
          >
            <div className="flex items-center justify-between gap-3 pb-3 border-b border-white/10 mb-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-purple-500/30 flex items-center justify-center text-purple-300">
                  <Sparkles size={14} />
                </div>
                <span className="text-xs font-bold text-white tracking-wide">Ayra Intelligence</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-[10px] font-mono font-bold">
                96% Match
              </span>
            </div>

            <p className="text-xs font-semibold text-slate-200">
              Hiring Pipeline Alert: Senior Full-Stack Engineer
            </p>
            <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
              Autonomous Shortlist: 14 candidates screened. 3 top recommendations forwarded to HR desk.
            </p>

            <div className="mt-3 flex items-center gap-2 text-[10px] font-mono text-purple-300">
              <CheckCircle2 size={12} className="text-emerald-400" />
              <span>Zero statutory bias verification passed</span>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
