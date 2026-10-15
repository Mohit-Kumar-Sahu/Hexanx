"use client";

import React from 'react';
import { Code, Smartphone, LayoutDashboard, BarChart3 } from 'lucide-react';
import PageHeader from './PageHeader';
import ResumeApplicationForm from './ResumeApplicationForm';

export default function InternshipsClient() {
  const tracks = [
    { title: "Full-Stack SaaS", icon: Code, desc: "Master MongoDB, Express, React, Node.js.", projects: "Multi-tenant Dashboard, API Gateway" },
    { title: "Mobile SaaS Engineering", icon: Smartphone, desc: "Build cross-platform apps using Flutter/React Native.", projects: "POS App, Delivery Tracker" },
    { title: "UI/UX Design", icon: LayoutDashboard, desc: "Learn Figma, prototyping, and user research.", projects: "Website Redesign, Mobile UI" },
    { title: "Data Analytics", icon: BarChart3, desc: "Python, SQL, and Power BI visualization.", projects: "Sales Dashboard, Stock Predictor" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <PageHeader title="Student Internship Program" subtitle="Launch Your Career" />

      <div className="container mx-auto px-6 -mt-16 relative z-10">
        <div className="glass-card p-12 rounded-[3rem] mb-20 text-center relative overflow-hidden border border-white/50 bg-white/90 shadow-xl">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
          <h2 className="text-4xl font-bold text-slate-900 mb-6">6 Months Industrial Training + Internship</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Work on live projects, get mentorship from senior engineers, and earn a{' '}
            <span className="font-bold text-blue-600">Professional Experience Certificate</span>.
            Top performers get PPO (Pre-Placement Offers).
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {tracks.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-2 group">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <t.icon className="w-7 h-7 text-blue-600 group-hover:text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">{t.title}</h4>
              <p className="text-slate-500 text-sm mb-4">{t.desc}</p>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Live Projects:</div>
              <p className="text-sm font-medium text-slate-700">{t.projects}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <h3 className="text-center text-3xl font-bold mb-8 text-slate-900">Apply for Internship</h3>
          <ResumeApplicationForm defaultPosition="Internship Applicant" />
        </div>
      </div>
    </div>
  );
}
