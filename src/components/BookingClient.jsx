"use client";

import React, { useState } from 'react';
import { CheckCircle2, Lock, IndianRupee, Code } from 'lucide-react';
import PageHeader from './PageHeader';
import Button from './Button';

export default function BookingClient({ showHeader = true }) {
  const [form, setForm] = useState({ name: '', email: '', service: 'Hexanx OS', date: '', time: '' });
  const [submitted, setSubmitted] = useState(false);

  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwJvNXy6EL1CKjQ6eoKGk13-LDQ8Fo2pHzwGgTYPOPKzOq1zFniQKSbPUki6hO4AN-EaA/exec";

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('formType', 'booking');
    data.append('Name', form.name);
    data.append('Email', form.email);
    data.append('Service', form.service);
    data.append('MeetingDate', form.date);
    data.append('MeetingTime', form.time);

    fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: data,
      mode: "no-cors"
    })
      .then(() => {
        setSubmitted(true);
        setForm({ name: '', email: '', service: 'Hexanx OS', date: '', time: '' });
        setTimeout(() => setSubmitted(false), 5000);
      })
      .catch((error) => console.error('Error!', error.message));
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {showHeader && <PageHeader title="Schedule Consultation" subtitle="Book Now" />}

      <section className="py-16 md:py-24 bg-white" id="booking">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 rounded-[2rem] border border-slate-100 shadow-2xl relative overflow-hidden bg-white">
            {submitted && (
              <div className="absolute inset-0 bg-white/95 backdrop-blur z-20 flex flex-col items-center justify-center text-center p-8 animate-slide-in">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">Meeting Requested!</h3>
                <p className="text-slate-500 mb-8">We have received your details. Our team will confirm the slot shortly.</p>
                <Button onClick={() => setSubmitted(false)}>Book Another</Button>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Book a Product Demo</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Schedule a personalized product demonstration with our SaaS implementation experts. We will show you how Hexanx OS, Flasto, or Roomyes can transform your business operations.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-slate-700 font-medium">
                    <span className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600"><Lock size={16} /></span>
                    Secure Data Migration Plan
                  </li>
                  <li className="flex items-center gap-3 text-slate-700 font-medium">
                    <span className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-600"><IndianRupee size={16} /></span>
                    Transparent SaaS Pricing
                  </li>
                  <li className="flex items-center gap-3 text-slate-700 font-medium">
                    <span className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600"><Code size={16} /></span>
                    Seamless API Integrations
                  </li>
                </ul>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2 input-group">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Your Name</label>
                  <input
                    required
                    type="text"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2 input-group">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Work Email</label>
                  <input
                    required
                    type="email"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div className="space-y-2 input-group">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Product Demo</label>
                  <select
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none"
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                  >
                    <option>Hexanx OS</option>
                    <option>Flasto Restaurant OS</option>
                    <option>Roomyes Hotel PMS</option>
                    <option>Ayra AI Implementation</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2 input-group">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Preferred Date</label>
                    <input
                      required
                      type="date"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none"
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2 input-group">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Time</label>
                    <input
                      required
                      type="time"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none"
                      value={form.time}
                      onChange={(e) => setForm({ ...form, time: e.target.value })}
                    />
                  </div>
                </div>

                <Button primary type="submit" className="w-full mt-4">Confirm Booking</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
