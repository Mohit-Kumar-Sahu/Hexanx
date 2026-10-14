"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Rocket, Users, ShieldCheck, Clock } from 'lucide-react';

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
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight">
            SCALING <br />
            BUSINESS <br />
            <TextRotator />
          </h1>
          
          <p className="text-lg sm:text-2xl text-slate-600 max-w-xl leading-relaxed font-light border-l-4 border-blue-600 pl-4 sm:pl-8">
            <strong>Empowering India&apos;s MSME &amp; enterprise sector with next-gen SaaS products.</strong> We engineer scalable vertical ecosystems including Hexanx OS, Flasto, Roomyes, powered by our proprietary <strong>Ayra AI</strong> neural engine.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <button
              onClick={() => router.push('/booking')}
              className="px-8 sm:px-10 h-14 sm:h-16 rounded-full font-bold tracking-wide bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:to-pink-700 text-white shadow-xl hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-3 text-base sm:text-lg group cursor-pointer"
            >
              <span>Start Journey</span>
              <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            <a
              href="#ecosystem"
              className="px-8 sm:px-10 h-14 sm:h-16 rounded-full font-bold tracking-wide bg-white/90 backdrop-blur-md text-slate-800 border border-slate-200 hover:bg-slate-50 hover:border-blue-400 hover:text-blue-600 transition-all shadow-md flex items-center justify-center text-base sm:text-lg cursor-pointer"
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

        {/* Right Column: Master 3D Ecosystem Artwork Centerpiece */}
        <div className="w-full flex items-center justify-center my-auto">
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-[640px] xl:max-w-[760px] aspect-[16/9] lg:aspect-[4/3] flex items-center justify-center p-2 sm:p-4 my-auto select-none mx-auto"
          >
            {/* Backlight Ambient Physics Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-orange-500/10 blur-[100px] rounded-full scale-90 -z-10 pointer-events-none opacity-80" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-indigo-500/10 rounded-full blur-[80px] -z-10 pointer-events-none" />

            {/* Official Perspective-Rich Hero Asset */}
            <motion.div 
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="relative w-full h-full drop-shadow-[0_20px_50px_rgba(8,112,184,0.12)] hover:drop-shadow-[0_25px_60px_rgba(147,51,234,0.18)] transition-all duration-500 ease-out"
            >
              <Image 
                src="/logos/hero.png"
                alt="Hexanx Enterprise Ecosystem" 
                fill 
                priority 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                className="object-contain object-center scale-100 transform" 
              />
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
