"use client";

import React from 'react';
import Link from 'next/link';
import {
  FileText, ShieldCheck, Scale, CheckCircle2, AlertTriangle, ArrowRight,
  ChevronRight, Building2, CreditCard, Lock, Sparkles, Ban, RefreshCw,
  Clock, Mail, Layers, Check, HelpCircle, HardDrive, DollarSign, Award
} from 'lucide-react';

/* ────────────────────────────────────────────────
   Inline Page Styles (Law 1 & Law 5 compliant)
──────────────────────────────────────────────── */
const pageStyles = `
  @keyframes legalFadeIn {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0);    }
  }
  .legal-page-transition {
    animation: legalFadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  .legal-card {
    background: #ffffff;
    border-radius: 1.5rem;
    border: 1px solid #f1f5f9;
    box-shadow: 0 4px 20px -4px rgba(15, 23, 42, 0.05);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }
  .legal-card:hover {
    box-shadow: 0 12px 32px -8px rgba(37, 99, 235, 0.09);
  }
`;

export default function TermsOfService() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <style>{pageStyles}</style>

      <div className="min-h-screen bg-slate-50 text-slate-700 overflow-x-hidden legal-page-transition">
        {/* ── HERO SECTION (Law 1: Mesh Gradient) ── */}
        <section className="relative pt-36 pb-20 mesh-gradient border-b border-slate-200/80 overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
          <div className="absolute top-12 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-[110px] pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-purple-400/20 rounded-full blur-[110px] pointer-events-none" />

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6 uppercase tracking-wider">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <ChevronRight size={14} />
              <span className="text-blue-600">Legal &amp; Compliance</span>
            </div>

            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-200/80 bg-white/90 backdrop-blur text-blue-700 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
              <Scale size={14} className="mr-2 text-blue-600" />
              Master Subscription Agreement (MSA)
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight mb-6">
              Master Subscription Agreement &amp;{' '}
              <span className="gradient-text">Terms of Service</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed font-light mb-10">
              The deterministic legal and commercial framework governing access, enterprise SaaS licensing, billing mechanics, intellectual property rights, and platform integrity across Hexanx OS, Flasto, Roomyes, and Ayra AI.
            </p>

            {/* Quick Metadata Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-slate-200/70">
              <div className="bg-white/80 backdrop-blur rounded-2xl p-4 border border-slate-200/60 shadow-xs">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Last Updated</span>
                <span className="text-sm font-extrabold text-slate-900">September 2026</span>
              </div>
              <div className="bg-white/80 backdrop-blur rounded-2xl p-4 border border-slate-200/60 shadow-xs">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Agreement Type</span>
                <span className="text-sm font-extrabold text-slate-900">Enterprise MSA</span>
              </div>
              <div className="bg-white/80 backdrop-blur rounded-2xl p-4 border border-slate-200/60 shadow-xs">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Governing Body</span>
                <span className="text-sm font-extrabold text-slate-900">Hexanx Pvt Ltd</span>
              </div>
              <div className="bg-white/80 backdrop-blur rounded-2xl p-4 border border-slate-200/60 shadow-xs">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Legal Support</span>
                <a href="mailto:compliances@hexanx.in" className="text-sm font-extrabold text-blue-600 hover:underline">
                  compliances@hexanx.in
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── TABLE OF CONTENTS JUMP BAR ── */}
        <div className="sticky top-20 z-30 bg-white/90 backdrop-blur border-b border-slate-200/80 shadow-xs py-3">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-2 text-xs font-semibold whitespace-nowrap">
              <span className="text-slate-400 uppercase tracking-wider mr-2 hidden sm:inline">Jump to:</span>
              {[
                { id: 'sec-acceptance', label: '1. Acceptance' },
                { id: 'sec-licensing', label: '2. SaaS Licensing' },
                { id: 'sec-billing', label: '3. Billing & Refunds' },
                { id: 'sec-pricing', label: '4. Pricing Schedule' },
                { id: 'sec-ipr', label: '5. IPR & DMCA' },
                { id: 'sec-trademarks', label: '6. Trademarks' },
                { id: 'sec-abuse', label: '7. Abuse Policy' },
                { id: 'sec-sla', label: '8. SLA & Uptime' },
                { id: 'sec-termination', label: '9. Exit & Purge' },
                { id: 'sec-jurisdiction', label: '10. Jurisdiction' },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="px-3 py-1.5 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-blue-600 transition-colors text-slate-700 cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── MAIN CONTENT CONTAINER ── */}
        <section aria-label="Policy Content" className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-12">

          {/* SECTION 1: Acceptance of Terms */}
          <div id="sec-acceptance" className="legal-card p-6 sm:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                <FileText size={20} />
              </div>
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Clause 1</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Acceptance of Terms &amp; Enterprise Authority
                </h2>
              </div>
            </div>

            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                By accessing, subscribing to, or integrating with the <strong className="text-slate-900">Hexanx Human Resources Management System (Hexanx OS)</strong>, <strong className="text-slate-900">Flasto Restaurant OS</strong>, or <strong className="text-slate-900">Roomyes Hotel PMS</strong> (collectively referred to as &quot;the Service&quot; or &quot;Platform&quot;), your organization mathematically bounds itself to this Master Subscription Agreement.
              </p>
              <p>
                If you are accepting on behalf of an enterprise or corporate entity, you represent and warrant that you possess the requisite legal authority to bind that corporate entity to these provisions.
              </p>
              <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-5 text-sm text-amber-900 flex items-start gap-3">
                <AlertTriangle size={18} className="text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold mb-1">Binding Agreement Notice</h4>
                  <p>
                    Continued use of the platform following any updates to these terms constitutes irreversible acceptance of the modified conditions. If you do not agree with any provision of this agreement, you must immediately terminate access to all workspaces and APIs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 2: Enterprise SaaS Licensing */}
          <div id="sec-licensing" className="legal-card p-6 sm:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                <ShieldCheck size={20} />
              </div>
              <div>
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Clause 2</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Enterprise SaaS Licensing &amp; Permitted Access
                </h2>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed mb-6">
              Hexanx operates under a strict <strong className="text-slate-900">Software-as-a-Service (SaaS) architecture</strong>. Hexanx grants you a revocable, non-exclusive, non-transferable, limited right to access and utilize the cloud infrastructure solely for your internal business operations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5">
                <div className="flex items-center gap-2 text-slate-900 font-bold mb-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  Seat Restrictions
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Workspace access is strictly restricted to the exact quantity of employee licenses procured during the active billing cycle. Shared or pooled credentials are prohibited.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5">
                <div className="flex items-center gap-2 text-slate-900 font-bold mb-2">
                  <span className="w-2 h-2 rounded-full bg-purple-600" />
                  Prohibited Extraction
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  You may not reverse-engineer, decompile, or attempt to extract source code, neural weights, or algorithmic logic of Hexanx OS or the Ayra AI engine.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5">
                <div className="flex items-center gap-2 text-slate-900 font-bold mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  Reselling &amp; White-labeling
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Reselling, sub-licensing, or white-labeling the Service is prohibited unless explicitly authorized under a dedicated Enterprise Customization contract.
                </p>
              </div>
            </div>
          </div>

          {/* SECTION 3: Subscription Billing & Strict No-Refund Policy */}
          <div id="sec-billing" className="legal-card p-6 sm:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                <CreditCard size={20} />
              </div>
              <div>
                <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">Clause 3</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Subscription Billing, Proration &amp; Strict No-Refund Policy
                </h2>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed mb-6">
              The Service operates on a deterministic, automated recurring ledger powered by our integrated payment infrastructure:
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center shrink-0 text-sm">
                  A
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-1">Billing Cadence</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Subscriptions are billed in advance on a deterministic monthly or annual cadence. Charges occur automatically on the anniversary date of plan activation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center shrink-0 text-sm">
                  B
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-1">Seat Adjustments &amp; Proration</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Adding employee seats mid-cycle will generate a prorated invoice for the remainder of the billing period. Removing seats will generate a platform credit automatically applied to subsequent billing cycles.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-rose-50/70 border border-rose-200/80">
                <div className="w-8 h-8 rounded-full bg-rose-600 text-white font-bold flex items-center justify-center shrink-0 text-sm">
                  !
                </div>
                <div>
                  <h4 className="font-bold text-rose-950 text-base mb-1">Strict No-Refund Policy</h4>
                  <p className="text-sm text-rose-900 leading-relaxed">
                    Hexanx operates a <strong className="font-bold">strict no-refund policy</strong> for partial months of service, unused seat allocations, or mid-term cancellations. Cancellations prevent subsequent renewal charges; your workspace remains fully active until the paid term expires.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 4: Commercial Pricing Schedule */}
          <div id="sec-pricing" className="legal-card p-6 sm:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <DollarSign size={20} />
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Clause 4</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Commercial Pricing Schedule &amp; Tiers
                </h2>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed mb-6">
              Current subscription tiers established across the Hexanx production ledger:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">Tier 1</span>
                  <h3 className="text-xl font-black text-slate-900 mb-1">Free Starter</h3>
                  <div className="text-3xl font-extrabold text-slate-900 mb-4">
                    ₹0 <span className="text-sm font-normal text-slate-500">/ month</span>
                  </div>
                  <ul className="space-y-2.5 text-xs text-slate-600 mb-6">
                    <li className="flex items-center gap-2"><Check size={14} className="text-emerald-600" /> Up to 5 Active Employees</li>
                    <li className="flex items-center gap-2"><Check size={14} className="text-emerald-600" /> 1 Administrator Account</li>
                    <li className="flex items-center gap-2"><Check size={14} className="text-emerald-600" /> Core HRMS &amp; Leave Tracking</li>
                    <li className="flex items-center gap-2"><Check size={14} className="text-emerald-600" /> Community &amp; Help Center Support</li>
                  </ul>
                </div>
                <div className="text-xs text-slate-400 font-medium">No credit card required.</div>
              </div>

              <div className="p-6 rounded-2xl border-2 border-blue-500 bg-blue-50/20 shadow-md flex flex-col justify-between relative">
                <span className="absolute -top-3 right-6 bg-blue-600 text-white text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
                  Most Popular
                </span>
                <div>
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-2">Tier 2</span>
                  <h3 className="text-xl font-black text-slate-900 mb-1">Pro Business</h3>
                  <div className="text-3xl font-extrabold text-slate-900 mb-1">
                    ₹100 <span className="text-sm font-normal text-slate-500">/ emp / mo</span>
                  </div>
                  <div className="text-xs text-blue-700 font-semibold mb-4">+ ₹5,000 One-time Setup</div>
                  <ul className="space-y-2.5 text-xs text-slate-600 mb-6">
                    <li className="flex items-center gap-2"><Check size={14} className="text-blue-600" /> Unlimited Employees</li>
                    <li className="flex items-center gap-2"><Check size={14} className="text-blue-600" /> Automated Payroll Engine (PF/ESI/TDS)</li>
                    <li className="flex items-center gap-2"><Check size={14} className="text-blue-600" /> Geo-fenced Attendance &amp; Facial Recog</li>
                    <li className="flex items-center gap-2"><Check size={14} className="text-blue-600" /> Advanced Custom Reports</li>
                    <li className="flex items-center gap-2"><Check size={14} className="text-blue-600" /> Priority Email &amp; Ticket Support</li>
                  </ul>
                </div>
                <div className="text-xs text-slate-500 font-medium">Billed monthly or annually.</div>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-purple-600 uppercase tracking-wider block mb-2">Tier 3</span>
                  <h3 className="text-xl font-black text-slate-900 mb-1">Enterprise</h3>
                  <div className="text-3xl font-extrabold text-slate-900 mb-4">
                    Custom <span className="text-sm font-normal text-slate-500">pricing</span>
                  </div>
                  <ul className="space-y-2.5 text-xs text-slate-600 mb-6">
                    <li className="flex items-center gap-2"><Check size={14} className="text-purple-600" /> Unlimited Admins &amp; Custom Roles</li>
                    <li className="flex items-center gap-2"><Check size={14} className="text-purple-600" /> Dedicated Technical Account Manager</li>
                    <li className="flex items-center gap-2"><Check size={14} className="text-purple-600" /> Custom API Access &amp; Webhook Mesh</li>
                    <li className="flex items-center gap-2"><Check size={14} className="text-purple-600" /> White-labeling Options &amp; Custom SSO</li>
                    <li className="flex items-center gap-2"><Check size={14} className="text-purple-600" /> 24/7 Phone Support with 99.9% SLA</li>
                  </ul>
                </div>
                <a href="mailto:compliances@hexanx.in" className="text-xs text-blue-600 font-bold hover:underline">
                  Inquire for Custom Quote &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* SECTION 5: Intellectual Property Rights & DMCA */}
          <div id="sec-ipr" className="legal-card p-6 sm:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                <Lock size={20} />
              </div>
              <div>
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Clause 5</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Intellectual Property Rights (IPR) &amp; DMCA Takedown
                </h2>
              </div>
            </div>

            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Hexanx and its licensors retain all right, title, and interest in and to the Service, including all related intellectual property rights, database schemas, user interfaces, neural workflows, and documentation. No rights are granted to you hereunder other than as expressly set forth herein.
              </p>
              <h4 className="font-bold text-slate-900 text-base pt-2">Formal DMCA Takedown Notices</h4>
              <p className="text-sm">
                If you believe copyrighted material is hosted on our platform without authorization, submit a formal DMCA notice to our designated legal desk at <a href="mailto:compliances@hexanx.in" className="text-blue-600 font-semibold hover:underline">compliances@hexanx.in</a> containing:
              </p>
              <ul className="text-xs sm:text-sm space-y-2 list-disc list-inside bg-slate-50 p-5 rounded-2xl border border-slate-200">
                <li>Exact cryptographic hashes, URLs, or repository references of the infringing content.</li>
                <li>Sufficient information to identify the copyrighted work claimed to have been infringed.</li>
                <li>A statement of good faith belief that the disputed use is not authorized by the copyright owner.</li>
                <li>A sworn declaration of penalty of perjury confirming authorization to act on behalf of the owner.</li>
              </ul>
              <p className="text-xs text-slate-500">
                Hexanx reserves the sovereign right to suspend or terminate accounts of repeat infringers.
              </p>
            </div>
          </div>

          {/* SECTION 6: Trademark Policy */}
          <div id="sec-trademarks" className="legal-card p-6 sm:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                <Award size={20} />
              </div>
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Clause 6</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Trademark Policy &amp; Media Kit Guidelines
                </h2>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed mb-4">
              The Hexanx brand name, logomark, distinct wavy topographic design patterns, product names (<strong className="text-slate-900">Hexanx OS</strong>, <strong className="text-slate-900">Flasto</strong>, <strong className="text-slate-900">Roomyes</strong>), and the <strong className="text-slate-900">Ayra AI</strong> identity are registered trademarks of Hexanx Pvt Ltd.
            </p>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-sm space-y-2 text-slate-600">
              <p>
                <strong>Authorized Usage:</strong> Enterprise tenants in good standing are authorized to display the unmodified <em>&quot;Powered by Hexanx&quot;</em> badge provided in the official media kit on internal customer portals to denote infrastructure origin.
              </p>
              <p>
                <strong>Prohibited Usage:</strong> You may not modify, recolor, alter the aspect ratio, or integrate Hexanx marks into your own brand marks, domain names, or marketing materials without prior written consent.
              </p>
            </div>
          </div>

          {/* SECTION 7: Abuse Policy */}
          <div id="sec-abuse" className="legal-card p-6 sm:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                <Ban size={20} />
              </div>
              <div>
                <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">Clause 7</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Platform Integrity &amp; Abuse Policy
                </h2>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed mb-6">
              The operational security of our multi-tenant cloud relies on responsible tenant behavior. You explicitly agree that your organization and users will not engage in the following prohibited behaviors:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <strong className="text-slate-900 block mb-1">Automated Scraping &amp; Spiders</strong>
                Deploying unauthorized bots, scrapers, or automated harvesters against Hexanx API endpoints.
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <strong className="text-slate-900 block mb-1">Rate Limiting Evasion</strong>
                Attempting to bypass API rate ceilings (1,000 req/15 min) or authentication limits (50 req/15 min).
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <strong className="text-slate-900 block mb-1">Malicious Payloads &amp; Exploits</strong>
                Injecting SQL, XSS, or malware payloads through file upload endpoints or form inputs.
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <strong className="text-slate-900 block mb-1">DDoS &amp; Volumetric Attacks</strong>
                Triggering distributed denial-of-service vectors or intentional computational stress against cluster nodes.
              </div>
            </div>

            <p className="text-xs text-rose-700 font-semibold mt-4">
              Violations result in immediate, irrevocable workspace termination and legal referral to cybersecurity authorities.
            </p>
          </div>

          {/* SECTION 8: SLA & Uptime */}
          <div id="sec-sla" className="legal-card p-6 sm:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center font-bold">
                <Clock size={20} />
              </div>
              <div>
                <span className="text-xs font-bold text-cyan-600 uppercase tracking-wider">Clause 8</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Service Level Agreement (SLA) &amp; Maintenance
                </h2>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed mb-4">
              Hexanx commits to delivering <strong className="text-slate-900">99.9% operational uptime</strong> across core services for Pro Business and Enterprise customers, excluding scheduled maintenance windows announced at least 48 hours in advance.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              In the event of an unscheduled degradation exceeding SLA thresholds, Enterprise customers may qualify for proportional service credits as defined in their custom enterprise addendum.
            </p>
          </div>

          {/* SECTION 9: Termination & Data Exit */}
          <div id="sec-termination" className="legal-card p-6 sm:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <RefreshCw size={20} />
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Clause 9</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Termination, Data Portability &amp; Exit Assistance
                </h2>
              </div>
            </div>

            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Either party may terminate the workspace subscription upon written notice prior to the end of the billing period. Upon termination:
              </p>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-sm">
                <p>
                  <strong>30-Day Export Window:</strong> Tenants retain 30 calendar days of read-only access to download complete organizational archives in standardized, machine-readable formats (JSON, CSV).
                </p>
                <p>
                  <strong>Permanent Scrub:</strong> After the 30-day window, our Verified Purge Workflow executes, permanently scrubbing all tenant PII and operational tables from live databases and backup rotation cycles.
                </p>
              </div>
            </div>
          </div>

          {/* SECTION 10: Governing Law & Jurisdiction */}
          <div id="sec-jurisdiction" className="legal-card p-6 sm:p-10 mb-8 bg-gradient-to-br from-white to-blue-50/40">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                <Building2 size={20} />
              </div>
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Clause 10</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Governing Law &amp; Dispute Resolution
                </h2>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed mb-6">
              This Master Subscription Agreement and any dispute or claim arising out of or in connection with it shall be governed by and construed in accordance with the laws of the <strong className="text-slate-900">Republic of India</strong>. Both parties submit to the exclusive jurisdiction of the competent courts located in <strong className="text-slate-900">Raipur, Chhattisgarh, India</strong>.
            </p>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-slate-900 text-base mb-1">Corporate Legal &amp; Contracts Desk</h4>
                <p className="text-sm text-slate-500">
                  Hexanx Pvt Ltd • Santoshi Nagar, Raipur, Chhattisgarh 492001
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  For customized enterprise MSAs, BAAs, or SLA negotiations
                </p>
              </div>
              <a
                href="mailto:compliances@hexanx.in"
                className="px-6 py-3 rounded-full font-bold bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm shrink-0"
              >
                <Mail size={16} /> compliances@hexanx.in
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
              <p>Contract Revision: MSA-2026.09-v2 • Registered with the Hexanx Corporate Legal Registry.</p>
              <Link href="/privacy" className="text-blue-600 font-bold hover:underline flex items-center gap-1">
                View Privacy Policy &amp; DPA <ArrowRight size={14} />
              </Link>
            </div>
          </div>

        </section>
      </div>
    </>
  );
}
