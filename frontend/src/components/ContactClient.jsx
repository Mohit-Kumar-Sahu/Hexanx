"use client";

import React, { useState } from 'react';
import { CheckCircle2, Mail, Phone, MapPin } from 'lucide-react';
import PageHeader from './PageHeader';
import Button from './Button';

export default function ContactClient() {
  const [formData, setFormData] = useState({ name: '', email: '', service: 'Hexanx OS', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwJvNXy6EL1CKjQ6eoKGk13-LDQ8Fo2pHzwGgTYPOPKzOq1zFniQKSbPUki6hO4AN-EaA/exec";

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Email is invalid";
    if (!formData.message) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setStatus('submitting');

      const data = new FormData();
      data.append('formType', 'contact');
      data.append('Name', formData.name);
      data.append('Email', formData.email);
      data.append('Service', formData.service);
      data.append('Message', formData.message);

      fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: data,
        mode: "no-cors"
      })
        .then(() => {
          setStatus('success');
          setFormData({ name: '', email: '', service: 'Hexanx OS', message: '' });
          setTimeout(() => setStatus('idle'), 5000);
        })
        .catch((error) => {
          console.error('Error!', error.message);
          setStatus('success');
          setFormData({ name: '', email: '', service: 'Hexanx OS', message: '' });
        });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <PageHeader title="Get In Touch" subtitle="Contact Us" />

      <section className="pt-16 pb-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 rounded-[2rem] border border-white/60 shadow-2xl relative overflow-hidden bg-white/80">
            {status === 'success' && (
              <div className="absolute inset-0 bg-white/95 backdrop-blur z-20 flex flex-col items-center justify-center text-center p-8 animate-slide-in">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-500 mb-8">Thank you for contacting Hexanx. We will get back to you within 24 hours.</p>
                <Button onClick={() => setStatus('idle')}>Send Another</Button>
              </div>
            )}

            <div className="grid md:grid-cols-3 gap-8 mb-10 pb-10 border-b border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase">Email</p>
                  <p className="text-sm font-semibold text-slate-800">contact@hexanx.in</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase">Location</p>
                  <p className="text-sm font-semibold text-slate-800">Raipur, Chhattisgarh</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase">Response Time</p>
                  <p className="text-sm font-semibold text-slate-800">&lt; 24 Business Hours</p>
                </div>
              </div>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2 input-group">
                  <label className="text-slate-500 text-xs font-bold uppercase tracking-wider ml-1">Your Name</label>
                  <input
                    type="text"
                    name="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full bg-slate-50 border ${errors.name ? 'border-red-300' : 'border-slate-200'} rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:bg-white transition-all shadow-sm`}
                    placeholder="Your Name"
                  />
                  {errors.name && <p className="text-red-500 text-xs ml-1">{errors.name}</p>}
                </div>
                <div className="space-y-2 input-group">
                  <label className="text-slate-500 text-xs font-bold uppercase tracking-wider ml-1">Email Address</label>
                  <input
                    type="email"
                    name="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full bg-slate-50 border ${errors.email ? 'border-red-300' : 'border-slate-200'} rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:bg-white transition-all shadow-sm`}
                    placeholder="Your Email"
                  />
                  {errors.email && <p className="text-red-500 text-xs ml-1">{errors.email}</p>}
                </div>
              </div>

              <div className="space-y-2 input-group">
                <label className="text-slate-500 text-xs font-bold uppercase tracking-wider ml-1">Product Interested In</label>
                <select
                  name="Product"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:bg-white transition-all appearance-none cursor-pointer shadow-sm"
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
                <label className="text-slate-500 text-xs font-bold uppercase tracking-wider ml-1">Message</label>
                <textarea
                  rows="4"
                  name="Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full bg-slate-50 border ${errors.message ? 'border-red-300' : 'border-slate-200'} rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:bg-white transition-all resize-none shadow-sm`}
                  placeholder="Tell us about your project requirements..."
                />
                {errors.message && <p className="text-red-500 text-xs ml-1">{errors.message}</p>}
              </div>

              <Button primary type="submit" className="w-full" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
