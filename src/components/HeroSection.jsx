"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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

  return (
    <section className="relative w-full min-h-[85vh] flex items-center pt-28 sm:pt-32 pb-16 overflow-x-hidden bg-transparent">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[80vh] relative z-10">
        
        {/* Left Column: Typography & CTAs */}
        <div className="space-y-8 sm:space-y-12 w-full">
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
            <Link
              href="/booking"
              className="px-8 sm:px-10 h-14 sm:h-16 rounded-full font-bold tracking-wide bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:to-pink-700 text-white shadow-xl hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-3 text-base sm:text-lg group cursor-pointer"
            >
              <span>Start Journey</span>
              <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
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
                <div className="text-2xl sm:text-4xl font-black text-slate-900 mb-1 flex items-baseline">
                  <CountUp end={stat.num} />
                  <span className="text-blue-600 text-xl sm:text-2xl ml-0.5 sm:ml-1">+</span>
                </div>
                <p className="text-slate-500 text-xs sm:text-sm font-bold uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Apple-Grade Curvy Glass Card (Strictly Centered & Seamlessly Framed) */}
        <div className="w-full flex items-center justify-center">
          <motion.div
            animate={{ y: [-12, 12, -12] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-[800px] mx-auto p-4 sm:p-6 lg:p-8 bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.12)] rounded-[2.5rem] lg:rounded-[3.5rem] z-10"
          >
            {/* Ambient Glow behind card */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-500/20 via-purple-500/10 to-transparent blur-3xl rounded-[4rem] scale-105 pointer-events-none" />

            {/* Inner Image Container clipping edges gracefully */}
            <div className="relative w-full overflow-hidden rounded-[1.5rem] lg:rounded-[2.5rem] shadow-inner bg-slate-900/5">
              <Image
                src="/logos/hero.png"
                alt="Hexanx Ecosystem"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
