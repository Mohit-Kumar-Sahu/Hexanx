"use client";

import React, { useState } from 'react';
import { CheckCircle2, FileText } from 'lucide-react';
import Button from './Button';

export default function ResumeApplicationForm({ defaultPosition = "General Application" }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    resumeUrl: '',
    position: defaultPosition,
  });
  const [status, setStatus] = useState('idle');

  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/library/d/12pJoepZnTD7l5aNriy8aprQC4t3QGyy5zVMcD-EOnnhiCldmtuS8zzYT/5";

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');

    const data = new FormData();
    data.append('formType', 'resume');
    data.append('Name', formData.name);
    data.append('Email', formData.email);
    data.append('Contact', formData.contact);
    data.append('ResumeUrl', formData.resumeUrl);
    data.append('Position', formData.position);

    fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: data,
      mode: "no-cors",
    })
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', contact: '', resumeUrl: '', position: defaultPosition });
        setTimeout(() => setStatus('idle'), 5000);
      })
      .catch((error) => {
        console.error('Error!', error.message);
        setStatus('error');
      });
  };

  return (
    <div className="glass-card p-6 md:p-10 rounded-3xl border border-slate-200 bg-white relative overflow-hidden">
      {status === 'success' && (
        <div className="absolute inset-0 bg-white/95 z-20 flex flex-col items-center justify-center text-center p-8 animate-slide-in">
          <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
          <h3 className="text-2xl font-bold text-slate-900">Application Submitted!</h3>
          <p className="text-slate-500 mb-6">Our HR team will review your resume and contact you shortly.</p>
          <Button onClick={() => setStatus('idle')}>Submit Another</Button>
        </div>
      )}

      <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        <FileText className="text-blue-600" /> Submit Your Application
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-1 input-group">
            <label className="text-xs font-bold text-slate-500 uppercase">Full Name</label>
            <input
              required
              type="text"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your Name"
            />
          </div>
          <div className="space-y-1 input-group">
            <label className="text-xs font-bold text-slate-500 uppercase">Contact Number</label>
            <input
              required
              type="tel"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none"
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              placeholder="Your Phone Number"
            />
          </div>
        </div>

        <div className="space-y-1 input-group">
          <label className="text-xs font-bold text-slate-500 uppercase">Email Address</label>
          <input
            required
            type="email"
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="Your Email"
          />
        </div>

        <div className="space-y-1 input-group">
          <label className="text-xs font-bold text-slate-500 uppercase">Resume Link (Google Drive / LinkedIn)</label>
          <input
            required
            type="url"
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none"
            value={formData.resumeUrl}
            onChange={(e) => setFormData({ ...formData, resumeUrl: e.target.value })}
            placeholder="https://..."
          />
          <p className="text-[10px] text-slate-400">Please ensure the link is publicly accessible.</p>
        </div>

        <input type="hidden" value={formData.position} />

        <Button primary type="submit" className="w-full" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Submitting...' : 'Apply Now'}
        </Button>
      </form>
    </div>
  );
}
