"use client";

import React from 'react';
import { Briefcase, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import PageHeader from './PageHeader';
import ResumeApplicationForm from './ResumeApplicationForm';

export default function CareersClient() {
  const jobs = [
    { id: 1, title: "Senior React Developer", type: "Full Time", loc: "Remote", exp: "4+ Years", salary: "₹12L - ₹18L PA", skills: ["React", "Redux", "TypeScript"] },
    { id: 2, title: "Backend Engineer (Node/Go)", type: "Full Time", loc: "Raipur", exp: "2+ Years", salary: "₹6L - ₹10L PA", skills: ["Node.js", "MongoDB", "AWS"] },
    { id: 3, title: "UI/UX Designer", type: "Contract", loc: "Remote", exp: "2+ Years", salary: "Project Basis", skills: ["Figma", "Adobe XD"] },
    { id: 4, title: "Business Development Manager", type: "Full Time", loc: "Raipur", exp: "1+ Years", salary: "₹4L - ₹8L PA", skills: ["Sales", "CRM", "English"] },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <PageHeader title="Join Our Team" subtitle="Current Openings" />

      <div className="container mx-auto px-4 md:px-6 mt-10 lg:-mt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            {jobs.map((job) => (
              <div key={job.id} className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all group cursor-pointer">
                <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-500 mt-2">
                      <span className="flex items-center gap-1"><Briefcase size={14} /> {job.type}</span>
                      <span className="flex items-center gap-1"><MapPin size={14} /> {job.loc}</span>
                      <span className="flex items-center gap-1"><Clock size={14} /> {job.exp}</span>
                    </div>
                  </div>
                  <span className="mt-4 md:mt-0 px-4 py-1 bg-green-50 text-green-700 rounded-full text-xs font-bold border border-green-100">{job.salary}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {job.skills.map(s => <span key={s} className="px-2 py-1 bg-slate-50 rounded text-xs font-bold text-slate-500">{s}</span>)}
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-sm text-slate-500 mb-4">
                  Clicking Apply will submit your general profile to our database. Please specify this role in the form below.
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="bg-slate-900 text-white p-8 rounded-3xl">
              <h4 className="text-xl font-bold mb-4">Why Hexanx?</h4>
              <ul className="space-y-4 text-slate-300">
                <li className="flex gap-3"><CheckCircle2 className="text-blue-400 shrink-0" /> 5 Days Working</li>
                <li className="flex gap-3"><CheckCircle2 className="text-blue-400 shrink-0" /> Health Insurance</li>
                <li className="flex gap-3"><CheckCircle2 className="text-blue-400 shrink-0" /> Performance Bonus</li>
                <li className="flex gap-3"><CheckCircle2 className="text-blue-400 shrink-0" /> Yearly Trip</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-4">Quick Application</h4>
              <ResumeApplicationForm defaultPosition="General Career Application" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
