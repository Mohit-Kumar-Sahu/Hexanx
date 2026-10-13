import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react';

export default function BrandPhilosophyBanner() {
  return (
    <section className="w-full relative overflow-hidden">
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-20 relative overflow-hidden">
        {/* Background Team Image */}
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2850&q=80"
          alt="Hexanx Engineering and Operations Team"
          className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none"
        />

        {/* Dark High-Contrast Overlay */}
        <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[1px]" />

        {/* Ambient Gradient Highlights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />

        {/* Content Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10 max-w-5xl mx-auto flex flex-col items-center"
        >
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-300 text-xs font-mono font-bold uppercase tracking-widest mb-6 shadow-lg">
            <HeartHandshake className="w-4 h-4 text-blue-400" />
            <span>The Hexanx Mission &amp; Philosophy</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight">
            We don't sell. <span className="text-blue-400">We serve.</span>
          </h2>

          {/* Subheading */}
          <p className="text-xl text-slate-200 max-w-3xl mx-auto mt-4 font-light leading-relaxed">
            Building the digital infrastructure that powers the future economy with uncompromising dedication and enterprise-grade reliability.
          </p>

          {/* Core Values Strip */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-semibold text-slate-300">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 backdrop-blur-md border border-white/10">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Sovereign Data Security</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 backdrop-blur-md border border-white/10">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>Zero-Debt Product Velocity</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 backdrop-blur-md border border-white/10">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span>24/7 Dedicated Partner Support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
