import React from 'react';
import { Sparkles, CheckCircle2, ArrowRight, Cpu, Database, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AyraSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="ayra">
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 text-white p-8 md:p-14 shadow-2xl border border-slate-800 relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left: Avatar & Intro */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
              <div className="relative group">
                <img
                  src="/logos/ayra-ai.png"
                  alt="Ayra AI Autonomous Intelligence Engine"
                  className="w-28 h-28 sm:w-36 sm:h-36 rounded-full aspect-square object-cover shadow-lg border-2 border-slate-100 transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute -bottom-2 right-2 px-3 py-1 rounded-full bg-blue-600 text-[10px] font-mono font-bold uppercase tracking-wider text-white border-2 border-slate-900 shadow-md">
                  V2.4 Active
                </span>
              </div>

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-mono mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Agentic Intelligence Engine</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">Ayra AI</h3>
                <p className="text-sm text-slate-400 mt-2 font-light leading-relaxed">
                  DeepSeek LLM • pgvector similarity engine • Real-time SSE streaming • Dynamic tool loop registry
                </p>
              </div>

              <div className="flex gap-3">
                <Link
                  to="/booking"
                  className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-blue-600/30"
                >
                  Deploy Ayra AI <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/products"
                  className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all border border-white/10"
                >
                  Explore Core
                </Link>
              </div>
            </div>

            {/* Right: Capabilities Grid */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: Cpu,
                  title: 'DeepSeek LLM Core',
                  desc: 'State-of-the-art open reasoning models fine-tuned on Hexanx workflow taxonomies.'
                },
                {
                  icon: Database,
                  title: 'pgvector Search',
                  desc: 'Millisecond semantic retrieval over enterprise PDFs, ERP databases, and customer records.'
                },
                {
                  icon: Terminal,
                  title: 'Autonomous Tool Registry',
                  desc: 'Autonomous multi-step execution loop capable of querying databases, generating invoices, and triggering webhooks.'
                },
                {
                  icon: Sparkles,
                  title: 'Edge TTS Integration',
                  desc: 'Ultra-low latency speech synthesis with real-time SSE streaming for interactive voice agents.'
                }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-400/40 hover:bg-white/[0.08] transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-white text-base mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
