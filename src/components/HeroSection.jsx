"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Rocket, Users, ShieldCheck, Clock, TrendingUp, Zap, Server, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

const ROTATING_WORDS = ["Empires", "Solutions", "Future", "Dreams"];

const TextRotator = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setIndex(i => (i + 1) % ROTATING_WORDS.length), 2500);
    return () => clearInterval(interval);
  }, []);
  return <span className="gradient-text transition-all duration-500 inline-block min-w-[200px]">{ROTATING_WORDS[index]}</span>;
};

const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    let startTime;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const animate = (time) => {
          if (!startTime) startTime = time;
          const progress = time - startTime;
          const percentage = Math.min(progress / duration, 1);
          setCount(Math.floor(end * percentage));
          if (progress < duration) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
        observer.disconnect();
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);
  return <span ref={ref}>{count}</span>;
};

export default function HeroSection() {
  const router = useRouter();

  return (
    <section className="relative w-full min-h-[85vh] flex items-center pt-32 pb-16 overflow-hidden bg-transparent">
      <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Column: Typography & CTAs */}
        <div className="space-y-8 sm:space-y-12">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full border border-blue-100 shadow-xs hover:shadow-sm transition-shadow cursor-default">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
            </span>
            <span className="text-xs font-bold tracking-wide text-slate-600 uppercase">Serving Enterprises Globally</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[5.5rem] font-black text-slate-900 leading-[1] tracking-tighter">
            SCALING <br />
            BUSINESS <br />
            <TextRotator />
          </h1>
          
          <p className="text-lg sm:text-2xl text-slate-600 max-w-xl leading-relaxed font-light border-l-4 border-blue-600 pl-4 sm:pl-8">
            <strong>Empowering India's MSME &amp; enterprise sector with next-gen SaaS products.</strong> We engineer scalable vertical ecosystems including Hexanx OS, Flasto, Roomyes, powered by our proprietary <strong>Ayra AI</strong> neural engine.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <button
              onClick={() => router.push('/booking')}
              className="px-8 sm:px-10 h-14 sm:h-16 rounded-full font-bold tracking-wide bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:to-pink-700 text-white shadow-xl hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-3 text-base sm:text-lg group"
            >
              <span>Start Journey</span>
              <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            <a
              href="#ecosystem"
              className="px-8 sm:px-10 h-14 sm:h-16 rounded-full font-bold tracking-wide bg-white/90 backdrop-blur-md text-slate-800 border border-slate-200 hover:bg-slate-50 hover:border-blue-400 hover:text-blue-600 transition-all shadow-md flex items-center justify-center text-base sm:text-lg"
            >
              Explore Products
            </a>
          </div>
          
          <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-12 pt-8 sm:pt-10 border-t border-slate-200/60">
            {[
              { num: 50, label: "Enterprises", icon: Users },
              { num: 99, label: "Success SLA", icon: ShieldCheck },
              { num: 24, label: "Support Desk", icon: Clock }
            ].map((stat, i) => (
              <div key={i}>
                <h4 className="text-2xl sm:text-4xl font-black text-slate-900 mb-1 flex items-baseline">
                  <CountUp end={stat.num} />
                  <span className="text-blue-600 text-xl sm:text-2xl ml-0.5 sm:ml-1">+</span>
                </h4>
                <p className="text-slate-500 text-xs sm:text-sm font-bold uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Live Enterprise Dashboard Preview */}
        <div className="hidden lg:block relative perspective-1000">
          <div className="relative z-10 p-3 bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-white/60">
            <div className="bg-slate-50 rounded-[2rem] overflow-hidden border border-slate-200 relative aspect-[4/3] flex flex-col shadow-inner">
              <div className="h-14 bg-white border-b border-slate-200 flex items-center px-8 gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="mx-auto bg-slate-100 px-6 py-1.5 rounded-full text-[10px] text-slate-500 font-mono flex items-center gap-2">
                  <ShieldCheck size={11} className="text-emerald-600" /> sovereign | api.hexanx.in
                </div>
              </div>
              <div className="p-8 grid grid-cols-2 gap-6 bg-slate-50/50 flex-1 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
                
                <div className="col-span-2 bg-white p-6 rounded-3xl shadow-xs border border-slate-100">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h5 className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Total Monitored ARR</h5>
                      <h3 className="text-3xl font-bold text-slate-900">₹2,450,900</h3>
                    </div>
                    <div className="p-4 bg-green-50 rounded-2xl"><TrendingUp className="text-green-600 w-6 h-6" /></div>
                  </div>
                  <div className="h-24 w-full bg-gradient-to-t from-blue-50 to-transparent rounded-xl border-b border-blue-100 relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-between px-2 pb-2">
                      {[40, 70, 50, 90, 60, 80, 50].map((h, idx) => (
                        <div key={idx} style={{ height: `${h}%` }} className="w-8 bg-blue-500/20 rounded-t-sm" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-3xl shadow-xs border border-slate-100 flex flex-col justify-between">
                  <div className="p-3 bg-purple-50 rounded-2xl w-fit mb-4"><Users size={20} className="text-purple-600" /></div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">+14.2%</h3>
                    <p className="text-xs text-green-500 font-bold uppercase tracking-wide">Enterprise Retention</p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-3xl shadow-xs border border-slate-100 flex flex-col justify-between">
                  <div className="p-3 bg-orange-50 rounded-2xl w-fit mb-4"><Zap size={20} className="text-orange-600" /></div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">&lt;24ms</h3>
                    <p className="text-xs text-green-500 font-bold uppercase tracking-wide">Query Latency</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute -left-10 top-1/4 bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-xl border border-white/80">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm shadow-md">H</div>
              <div>
                <p className="text-xs font-bold text-slate-900">Tenant Active</p>
                <p className="text-[10px] text-slate-500">Hexanx OS Cloud</p>
              </div>
            </div>
          </div>
          
          <div className="absolute -right-6 bottom-1/3 bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-xl border border-white/80">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600"><Server size={20} /></div>
              <div>
                <p className="text-xs font-bold text-slate-900">Ayra Engine</p>
                <p className="text-[10px] text-green-600 font-bold">99.99% Uptime</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
