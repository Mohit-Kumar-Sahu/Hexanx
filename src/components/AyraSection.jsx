"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AyraSection() {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-24 px-4 sm:px-6 md:px-8 bg-transparent" id="ayra">
      <div className="w-full max-w-5xl mx-auto">
        <div className="relative w-full aspect-[16/9] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl group border border-white/10">
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2000&q=80"
            alt="Corporate team empowered by Hexanx AI"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 80vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent pointer-events-none"></div>
          
          <div className="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 md:right-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 z-10">
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-2">
                Ayra <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Intelligence</span>
              </h3>
              <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-xl font-medium leading-relaxed">
                Zero-maintenance automation. Empower your team to focus on growth while Ayra handles the operations.
              </p>
            </div>
            <Link
              href="/booking"
              className="px-6 sm:px-8 py-3 sm:py-3.5 bg-white text-slate-900 rounded-full font-bold shadow-xl hover:scale-105 transition-transform shrink-0 text-sm sm:text-base inline-flex items-center justify-center cursor-pointer"
            >
              Meet Ayra
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
