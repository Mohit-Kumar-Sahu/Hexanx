"use client";

import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2, Lock, IndianRupee, Code, Calendar, Clock } from 'lucide-react';
import PageHeader from './PageHeader';
import Button from './Button';

export default function BookingClient({ showHeader = true }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: 'Hexanx OS',
    date: '',
    time: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const validate = () => {
    let tempErrors = {};
    if (!form.name.trim()) tempErrors.name = "Full name is required";
    if (!form.email.trim()) {
      tempErrors.email = "Work email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email.trim())) {
      tempErrors.email = "Please enter a valid work email";
    }
    if (!form.date) tempErrors.date = "Please select a preferred date";
    if (!form.time) tempErrors.time = "Please select a preferred time";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success) {
        setStatus({
          type: 'success',
          message: 'We have received your strategy call request. A confirmation email with session details has been sent to your inbox, and our specialist will confirm the Google Meet slot shortly.',
          referenceId: data.referenceId,
        });
        setForm({ name: '', email: '', service: 'Hexanx OS', date: '', time: '' });
        setErrors({});
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Failed to request consultation slot. Please try again or reach out to contact@hexanx.in.',
        });
      }
    } catch (error) {
      console.error('Booking Submission Error:', error);
      setStatus({
        type: 'error',
        message: 'Network error encountered. Please check your internet connection or email contact@hexanx.in.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {showHeader && <PageHeader title="Schedule Consultation" subtitle="Book Now" />}

      <section className="py-16 md:py-24 bg-white" id="booking">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 rounded-[2rem] border border-slate-100 shadow-2xl relative overflow-hidden bg-white">
            
            {/* Success Overlay Screen */}
            {status?.type === 'success' && (
              <div className="absolute inset-0 bg-white/95 backdrop-blur z-20 flex flex-col items-center justify-center text-center p-8 animate-slide-in">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 shadow-inner">
                  <CheckCircle2 className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">Meeting Requested!</h3>
                {status.referenceId && (
                  <p className="text-xs font-mono font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4 border border-blue-100">
                    Ref: {status.referenceId}
                  </p>
                )}
                <p className="text-slate-600 max-w-lg mb-8 leading-relaxed">
                  {status.message}
                </p>
                <Button primary onClick={() => setStatus(null)}>
                  Book Another Session
                </Button>
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
                    <span className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                      <Lock size={16} />
                    </span>
                    Secure Data Migration Plan
                  </li>
                  <li className="flex items-center gap-3 text-slate-700 font-medium">
                    <span className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
                      <IndianRupee size={16} />
                    </span>
                    Transparent SaaS Pricing
                  </li>
                  <li className="flex items-center gap-3 text-slate-700 font-medium">
                    <span className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                      <Code size={16} />
                    </span>
                    Seamless API Integrations
                  </li>
                </ul>
              </div>

              <div>
                {/* Error Banner */}
                {status?.type === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3 text-red-800 animate-slide-in">
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <div className="flex-1 text-sm font-medium">
                      {status.message}
                    </div>
                    <button
                      type="button"
                      onClick={() => setStatus(null)}
                      className="text-red-500 hover:text-red-700 text-xs font-bold uppercase tracking-wider ml-2"
                    >
                      Dismiss
                    </button>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2 input-group">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className={`w-full bg-slate-50 border ${
                        errors.name ? 'border-red-300 focus:border-red-500' : 'border-slate-200 focus:border-blue-500'
                      } rounded-xl px-4 py-3 focus:outline-none focus:bg-white text-slate-900 transition-all shadow-sm`}
                      placeholder="e.g. Priyanshu Verma"
                      value={form.name}
                      onChange={(e) => {
                        setForm({ ...form, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: null });
                      }}
                      disabled={isSubmitting}
                    />
                    {errors.name && <p className="text-red-500 text-xs ml-1">{errors.name}</p>}
                  </div>

                  <div className="space-y-2 input-group">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      className={`w-full bg-slate-50 border ${
                        errors.email ? 'border-red-300 focus:border-red-500' : 'border-slate-200 focus:border-blue-500'
                      } rounded-xl px-4 py-3 focus:outline-none focus:bg-white text-slate-900 transition-all shadow-sm`}
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={(e) => {
                        setForm({ ...form, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: null });
                      }}
                      disabled={isSubmitting}
                    />
                    {errors.email && <p className="text-red-500 text-xs ml-1">{errors.email}</p>}
                  </div>

                  <div className="space-y-2 input-group">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                      Product Demo
                    </label>
                    <select
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:bg-white text-slate-900 transition-all shadow-sm cursor-pointer"
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      disabled={isSubmitting}
                    >
                      <option>Hexanx OS</option>
                      <option>Flasto Restaurant OS</option>
                      <option>Roomyes Hotel PMS</option>
                      <option>Ayra AI Implementation</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2 input-group">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1 flex items-center gap-1">
                        <Calendar size={13} className="text-slate-400" />
                        Preferred Date <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        className={`w-full bg-slate-50 border ${
                          errors.date ? 'border-red-300 focus:border-red-500' : 'border-slate-200 focus:border-blue-500'
                        } rounded-xl px-4 py-3 focus:outline-none focus:bg-white text-slate-900 transition-all shadow-sm`}
                        value={form.date}
                        onChange={(e) => {
                          setForm({ ...form, date: e.target.value });
                          if (errors.date) setErrors({ ...errors, date: null });
                        }}
                        disabled={isSubmitting}
                      />
                      {errors.date && <p className="text-red-500 text-xs ml-1">{errors.date}</p>}
                    </div>

                    <div className="space-y-2 input-group">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1 flex items-center gap-1">
                        <Clock size={13} className="text-slate-400" />
                        Time <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="time"
                        className={`w-full bg-slate-50 border ${
                          errors.time ? 'border-red-300 focus:border-red-500' : 'border-slate-200 focus:border-blue-500'
                        } rounded-xl px-4 py-3 focus:outline-none focus:bg-white text-slate-900 transition-all shadow-sm`}
                        value={form.time}
                        onChange={(e) => {
                          setForm({ ...form, time: e.target.value });
                          if (errors.time) setErrors({ ...errors, time: null });
                        }}
                        disabled={isSubmitting}
                      />
                      {errors.time && <p className="text-red-500 text-xs ml-1">{errors.time}</p>}
                    </div>
                  </div>

                  <Button
                    primary
                    type="submit"
                    className="w-full mt-4 shadow-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Scheduling Call...
                      </span>
                    ) : (
                      'Confirm Booking'
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
