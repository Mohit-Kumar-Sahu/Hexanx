"use client";

import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2, Mail, Phone, MapPin } from 'lucide-react';
import PageHeader from './PageHeader';
import Button from './Button';

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Hexanx OS',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Work email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      tempErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) tempErrors.message = "Please enter your message or project requirements";
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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success) {
        setStatus({
          type: 'success',
          message: 'Thank you for contacting Hexanx. A personalized confirmation has been dispatched to your email, and our team will get back to you within 24 business hours.',
          referenceId: data.referenceId,
        });
        setFormData({ name: '', email: '', service: 'Hexanx OS', message: '' });
        setErrors({});
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Failed to dispatch inquiry. Please check your details or email contact@hexanx.in directly.',
        });
      }
    } catch (error) {
      console.error('Contact Submission Error:', error);
      setStatus({
        type: 'error',
        message: 'Network error encountered. Please check your internet connection or email us at contact@hexanx.in.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <PageHeader title="Get In Touch" subtitle="Contact Us" />

      <section className="pt-16 pb-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 rounded-[2rem] border border-white/60 shadow-2xl relative overflow-hidden bg-white/80">
            
            {/* Success Overlay Screen */}
            {status?.type === 'success' && (
              <div className="absolute inset-0 bg-white/95 backdrop-blur z-20 flex flex-col items-center justify-center text-center p-8 animate-slide-in">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 shadow-inner">
                  <CheckCircle2 className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                {status.referenceId && (
                  <p className="text-xs font-mono font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4 border border-blue-100">
                    Ref: {status.referenceId}
                  </p>
                )}
                <p className="text-slate-600 max-w-lg mb-8 leading-relaxed">
                  {status.message}
                </p>
                <Button primary onClick={() => setStatus(null)}>
                  Send Another Inquiry
                </Button>
              </div>
            )}

            {/* Top Contact Badges */}
            <div className="grid md:grid-cols-3 gap-8 mb-10 pb-10 border-b border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Email</p>
                  <p className="text-sm font-semibold text-slate-800">contact@hexanx.in</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 shrink-0 shadow-sm">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Location</p>
                  <p className="text-sm font-semibold text-slate-800">Raipur, Chhattisgarh</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 shrink-0 shadow-sm">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Response Time</p>
                  <p className="text-sm font-semibold text-slate-800">&lt; 24 Business Hours</p>
                </div>
              </div>
            </div>

            {/* Error Banner */}
            {status?.type === 'error' && (
              <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3 text-red-800 animate-slide-in">
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

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2 input-group">
                  <label className="text-slate-500 text-xs font-bold uppercase tracking-wider ml-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="Name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: null });
                    }}
                    className={`w-full bg-slate-50 border ${
                      errors.name ? 'border-red-300 focus:border-red-500' : 'border-slate-200 focus:border-blue-500'
                    } rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:bg-white transition-all shadow-sm`}
                    placeholder="e.g. Rahul Sharma"
                    disabled={isSubmitting}
                  />
                  {errors.name && <p className="text-red-500 text-xs ml-1">{errors.name}</p>}
                </div>

                <div className="space-y-2 input-group">
                  <label className="text-slate-500 text-xs font-bold uppercase tracking-wider ml-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="Email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: null });
                    }}
                    className={`w-full bg-slate-50 border ${
                      errors.email ? 'border-red-300 focus:border-red-500' : 'border-slate-200 focus:border-blue-500'
                    } rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:bg-white transition-all shadow-sm`}
                    placeholder="e.g. rahul@company.com"
                    disabled={isSubmitting}
                  />
                  {errors.email && <p className="text-red-500 text-xs ml-1">{errors.email}</p>}
                </div>
              </div>

              <div className="space-y-2 input-group">
                <label className="text-slate-500 text-xs font-bold uppercase tracking-wider ml-1">
                  Product / Service Interested In
                </label>
                <select
                  name="Product"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  disabled={isSubmitting}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all appearance-none cursor-pointer shadow-sm"
                >
                  <option>Hexanx OS</option>
                  <option>Flasto Restaurant OS</option>
                  <option>Roomyes Hotel PMS</option>
                  <option>Ayra AI Implementation</option>
                  <option>Enterprise Customization</option>
                  <option>Other SaaS Product</option>
                </select>
              </div>

              <div className="space-y-2 input-group">
                <label className="text-slate-500 text-xs font-bold uppercase tracking-wider ml-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows="4"
                  name="Message"
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: null });
                  }}
                  disabled={isSubmitting}
                  className={`w-full bg-slate-50 border ${
                    errors.message ? 'border-red-300 focus:border-red-500' : 'border-slate-200 focus:border-blue-500'
                  } rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:bg-white transition-all resize-none shadow-sm`}
                  placeholder="Tell us about your team size, workflow requirements, or questions..."
                />
                {errors.message && <p className="text-red-500 text-xs ml-1">{errors.message}</p>}
              </div>

              <Button
                primary
                type="submit"
                className="w-full shadow-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending Inquiry...
                  </span>
                ) : (
                  'Send Message'
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
