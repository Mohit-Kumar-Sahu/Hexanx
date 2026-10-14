"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck, Lock, Eye, FileText, Database, Server, Cpu, CheckCircle2,
  AlertTriangle, ArrowRight, ChevronRight, UserCheck, Key, RefreshCw,
  Trash2, Mail, ExternalLink, Globe, Layers, HardDrive, Bell, Scale,
  Building2, Zap, Star, Clock, Shield
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

  .code-container {
    background: #090d16;
    border: 1px solid #1e293b;
    border-radius: 1rem;
    color: #e2e8f0;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    font-size: 0.8rem;
    line-height: 1.5;
  }
`;

export default function PrivacyPolicy() {
  const [activeTab, setActiveTab] = useState('all');

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
        {/* ── HERO SECTION (Law 1: Mesh Gradient & Topographic feel) ── */}
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
              <ShieldCheck size={14} className="mr-2 text-blue-600" />
              Enterprise Data Sovereignty &amp; Statutory Compliance
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight mb-6">
              Privacy Policy &amp;{' '}
              <span className="gradient-text">Data Sovereignty</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed font-light mb-10">
              This document represents our consolidated legal master report, governing data processing, statutory rights under the DPDP Act 2023 &amp; GDPR, and our Zero-Trust security architecture across the Hexanx B2B SaaS ecosystem.
            </p>

            {/* Quick Metadata Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-slate-200/70">
              <div className="bg-white/80 backdrop-blur rounded-2xl p-4 border border-slate-200/60 shadow-xs">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Effective Date</span>
                <span className="text-sm font-extrabold text-slate-900">August 14, 2026</span>
              </div>
              <div className="bg-white/80 backdrop-blur rounded-2xl p-4 border border-slate-200/60 shadow-xs">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Governing Entity</span>
                <span className="text-sm font-extrabold text-slate-900">Hexanx Pvt Ltd</span>
              </div>
              <div className="bg-white/80 backdrop-blur rounded-2xl p-4 border border-slate-200/60 shadow-xs">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Jurisdiction</span>
                <span className="text-sm font-extrabold text-slate-900">India, EU, US</span>
              </div>
              <div className="bg-white/80 backdrop-blur rounded-2xl p-4 border border-slate-200/60 shadow-xs">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">DPO Contact</span>
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
                { id: 'sec-ecosystem', label: 'Ecosystem Scope' },
                { id: 'sec-dpa', label: '1. DPA & Scope' },
                { id: 'sec-collection', label: '2. Data Collection' },
                { id: 'sec-subprocessors', label: '3. Sub-processors' },
                { id: 'sec-purge', label: '4. Purge Workflow' },
                { id: 'sec-regulatory', label: '5. GDPR & DPDP' },
                { id: 'sec-zerotrust', label: '6. Zero-Trust & IAM' },
                { id: 'sec-policy-code', label: '7. Policy-as-Code' },
                { id: 'sec-jurisdiction', label: '8. Legal Venue' },
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
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-12">
          
          {/* SECTION: Ecosystem Scope */}
          <div id="sec-ecosystem" className="legal-card p-6 sm:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                <Layers size={20} />
              </div>
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Preamble &amp; Scope</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Ecosystem Product Mapping</h2>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed mb-6">
              Hexanx operates on a foundation of absolute transparency and unyielding security. We recognize that human resources management systems, hospitality platforms, and transactional engines govern the most critical data vectors within your enterprise. Our commitment to <strong className="text-slate-900">Data Sovereignty</strong> guarantees that you always remain the master of your records. Hexanx functions strictly as a computational engine and structural repository.
            </p>

            <div className="overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100/75 border-b border-slate-200 text-slate-700 font-bold">
                    <th className="p-4">Product Persona</th>
                    <th className="p-4">Operational Scope</th>
                    <th className="p-4">Target Market</th>
                    <th className="p-4">Legal &amp; Compliance Posture</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-4 font-bold text-slate-900">
                      Hexanx OS / HRMS
                      <span className="block text-xs font-normal text-slate-400">Project Omniscience</span>
                    </td>
                    <td className="p-4">Flagship Enterprise HRMS, Payroll Automation, Biometric Attendance &amp; Dual-Mode RBAC.</td>
                    <td className="p-4">Mid-to-Large Enterprises, Tech Startups, Global Workforces</td>
                    <td className="p-4">Master Subscription Agreement, Enterprise DPA, DPDP Act 2023, GDPR, CCPA.</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-4 font-bold text-slate-900">
                      Flasto
                      <span className="block text-xs font-normal text-slate-400">Restaurant OS</span>
                    </td>
                    <td className="p-4">Omnichannel Restaurant POS, Kitchen Display System (KDS) &amp; Multi-Outlet Inventory.</td>
                    <td className="p-4">Hospitality &amp; F&amp;B Outlets</td>
                    <td className="p-4">Inherits Hexanx Zero-Trust, Payment Standards &amp; Ayra AI Guest Persona.</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-4 font-bold text-slate-900">
                      Roomyes
                      <span className="block text-xs font-normal text-slate-400">Hotel PMS</span>
                    </td>
                    <td className="p-4">Automated Hotel Property Management, Room Booking, Guest Identity &amp; Operations.</td>
                    <td className="p-4">Hotels, Resorts, Hospitality Chains</td>
                    <td className="p-4">Inherits Data Sovereignty, Biometric/ID Compliance &amp; Dynamic OTA Sync.</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-4 font-bold text-slate-900">
                      Ayra AI Engine
                      <span className="block text-xs font-normal text-slate-400">Enterprise Intelligence</span>
                    </td>
                    <td className="p-4">Autonomous AI Action Agent &amp; Universal embeddable widget (<code className="text-xs bg-slate-100 px-1 py-0.5 rounded">ayra-widget.js</code>).</td>
                    <td className="p-4">Embedded across Hexanx, Flasto, Roomyes</td>
                    <td className="p-4">Loopback Authorization, Zero Privilege Escalation, Strict Knowledge Boundaries.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* SECTION 1: Introduction & DPA */}
          <div id="sec-dpa" className="legal-card p-6 sm:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                <FileText size={20} />
              </div>
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Section 1</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Enterprise Privacy Policy &amp; DPA</h2>
              </div>
            </div>

            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Welcome to the Hexanx HRMS platform (&quot;Service&quot;, &quot;Platform&quot;), operated by Hexanx Pvt Ltd (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;), with registered offices at Santoshi Nagar, Raipur, Chhattisgarh, PIN - 492001, India.
              </p>
              <p>
                We are committed to protecting your personal data and respecting your privacy rights. This document outlines our data collection, processing, and retention practices in strict accordance with global standards including the <strong className="text-slate-900">General Data Protection Regulation (GDPR - EU 2016/679)</strong> and the <strong className="text-slate-900">Digital Personal Data Protection (DPDP) Act, 2023 (India)</strong>.
              </p>
              <div className="bg-blue-50/70 border border-blue-200/80 rounded-2xl p-5 text-sm text-blue-900">
                <h4 className="font-bold mb-1 flex items-center gap-2">
                  <ShieldCheck size={16} className="text-blue-600" />
                  Role Classification under Global Law
                </h4>
                <p>
                  In the context of the Hexanx platform, our enterprise customers (&quot;Tenants&quot;) act as the <strong className="font-semibold">Data Fiduciary / Data Controller</strong>, while Hexanx functions as the <strong className="font-semibold">Data Processor</strong> processing employee records exclusively according to tenant instruction and contract parameters.
                </p>
              </div>
            </div>
          </div>

          {/* SECTION 2: Data Collection Categories */}
          <div id="sec-collection" className="legal-card p-6 sm:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                <Database size={20} />
              </div>
              <div>
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Section 2</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Data Collection Methodology &amp; Vectors</h2>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed mb-6">
              At Hexanx, we employ a minimal data collection methodology while ensuring absolute operational efficiency. We process Personally Identifiable Information (PII) strictly necessary for identity verification, statutory compliance, access management, and immutable audit logging.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-50 border border-slate-200/70 rounded-2xl p-6">
                <div className="flex items-center gap-2 text-slate-900 font-bold mb-3">
                  <UserCheck size={18} className="text-blue-600" />
                  <span>1. Identity &amp; Contact Vectors</span>
                </div>
                <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
                  <li>Full legal name, corporate and personal email addresses.</li>
                  <li>Primary contact telephone numbers.</li>
                  <li>Job titles, departmental assignments, and reporting hierarchies.</li>
                  <li>Compensation tiers, grade levels, and organizational context.</li>
                </ul>
              </div>

              <div className="bg-slate-50 border border-slate-200/70 rounded-2xl p-6">
                <div className="flex items-center gap-2 text-slate-900 font-bold mb-3">
                  <Shield size={18} className="text-purple-600" />
                  <span>2. Sensitive HR &amp; Financial Vectors</span>
                </div>
                <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
                  <li>Bank account numbers &amp; IFSC codes for automated payroll disbursement.</li>
                  <li>Government-issued Tax &amp; Identity IDs (Aadhaar, PAN, EPFO, ESIC) for regulatory compliance.</li>
                  <li>Encrypted biometric signatures (where clock-in hardware is deployed).</li>
                  <li>Payslip history, tax deductions, and statutory reimbursement logs.</li>
                </ul>
              </div>

              <div className="bg-slate-50 border border-slate-200/70 rounded-2xl p-6">
                <div className="flex items-center gap-2 text-slate-900 font-bold mb-3">
                  <HardDrive size={18} className="text-emerald-600" />
                  <span>3. Telemetry &amp; Environmental Vectors</span>
                </div>
                <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
                  <li>Origin IP addresses, routing Autonomous System Numbers (ASNs).</li>
                  <li>Browser fingerprint footprints and User-Agent strings.</li>
                  <li>Timestamps of legal consent and policy acceptance.</li>
                  <li>High-precision GPS coordinates captured <em>strictly</em> during biometric clock-in verification to validate geo-fenced workplace boundaries.</li>
                </ul>
              </div>

              <div className="bg-slate-50 border border-slate-200/70 rounded-2xl p-6">
                <div className="flex items-center gap-2 text-slate-900 font-bold mb-3">
                  <Key size={18} className="text-amber-600" />
                  <span>4. Authentication &amp; Security Vectors</span>
                </div>
                <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
                  <li>Multi-factor authentication (MFA) challenges and session claims.</li>
                  <li>SSO assertions via SAML 2.0 / OIDC integrations.</li>
                  <li>Cryptographic hardware key attestations.</li>
                  <li>Session nonces and immutable audit trace identifiers.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* SECTION 3: Purpose & Sub-processors */}
          <div id="sec-subprocessors" className="legal-card p-6 sm:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                <Server size={20} />
              </div>
              <div>
                <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">Section 3</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Purpose of Processing &amp; Sub-processors</h2>
              </div>
            </div>

            <div className="mb-6 space-y-3 text-slate-600 leading-relaxed">
              <p>Your enterprise data is processed exclusively for the following lawful purposes:</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block mb-1">Operational HR Services</strong>
                  Attendance, leaves, shifts, payroll automation, and workforce governance.
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block mb-1">Statutory Compliance</strong>
                  PF, ESI, TDS, income tax filings, and regulatory audit mandates in India.
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block mb-1">Perimeter Safeguards</strong>
                  Rate limiting, brute-force mitigation, forensic audit logs, and fraud defense.
                </div>
              </div>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-4">Authorized Third-Party Data Sub-processors</h3>
            <p className="text-sm text-slate-500 mb-4">
              To operate high-availability cloud infrastructure, Hexanx engages the following compliant sub-processors:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-extrabold text-slate-900 text-base">Render</span>
                  <span className="text-xs font-bold bg-blue-100 text-blue-700 px-2.5 py-0.5 rounded-full">Cloud Infrastructure</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Application runtime hosting, auto-scaling microservices, and regional container execution across ISO 27001 certified data center facilities.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-extrabold text-slate-900 text-base">PostgreSQL / Neon / Supabase</span>
                  <span className="text-xs font-bold bg-emerald-100 text-emerald-700 px-2.5 py-0.5 rounded-full">Database &amp; Storage</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Secured relational database management, AES-256 storage volumes, automated point-in-time recovery, and cryptographic snapshot backups.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-extrabold text-slate-900 text-base">Resend</span>
                  <span className="text-xs font-bold bg-amber-100 text-amber-700 px-2.5 py-0.5 rounded-full">Transactional Email</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Encrypted transactional email delivery, OTP authentication generation, and time-critical system dispatch alerts over TLS.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-extrabold text-slate-900 text-base">Razorpay</span>
                  <span className="text-xs font-bold bg-purple-100 text-purple-700 px-2.5 py-0.5 rounded-full">Payments Gateway</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  PCI-DSS Level 1 compliant financial processing, automated recurring billing, UPI/Card tokenization, and tax invoice generation.
                </p>
              </div>
            </div>
          </div>

          {/* SECTION 4: Data Retention & Purge Workflow */}
          <div id="sec-purge" className="legal-card p-6 sm:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                <Trash2 size={20} />
              </div>
              <div>
                <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">Section 4</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Data Retention &amp; The 30-Day Verified Purge Workflow
                </h2>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed mb-6">
              We practice strict data minimization. Active organization data is preserved as long as the tenant workspace remains subscribed. Upon receiving a formal Data Subject Access Request (DSAR) or Account Deletion request at <a href="mailto:compliances@hexanx.in" className="text-blue-600 font-semibold hover:underline">compliances@hexanx.in</a>, we trigger our immutable <strong className="text-slate-900">&quot;Verified Purge Workflow&quot;</strong>:
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-sm">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-1">Receipt &amp; 30-Day Grace Notice</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We issue an initial confirmation email acknowledging the deletion request and commence the mandatory 30-day grace period. Records are immediately soft-deleted (`deleted_at = CURRENT_TIMESTAMP`) and quarantined from active operational views.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center shrink-0 text-sm">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-1">Cryptographic Purge</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Following expiry of the 30-day window, all associated Personally Identifiable Information (PII), uploaded KYC documents, payroll files, and biometric hashes are permanently and cryptographically scrubbed from active production databases and backup snapshot rotation logs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center shrink-0 text-sm">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-1">Attestation Dispatch</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    A final digital certificate / confirmation email of verified data destruction is dispatched to the tenant&#39;s designated compliance contact for audit records.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 5: Global Regulatory Frameworks */}
          <div id="sec-regulatory" className="legal-card p-6 sm:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <Scale size={20} />
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Section 5</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Global Regulatory Frameworks (GDPR &amp; DPDP Act 2023)
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <h3 className="font-bold text-slate-900 text-lg mb-3 flex items-center gap-2">
                  <Globe size={18} className="text-blue-600" />
                  GDPR (EU 2016/679) &amp; CCPA Rights
                </h3>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900">Right to Erasure (Right to be Forgotten):</strong> Dual-phase soft deletion + 30-day cryptographic purge.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900">Right to Portability:</strong> Automated extraction and export of employee profiles, payslips, and compliance histories in standardized JSON/CSV formats.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900">Right to Restriction of Processing:</strong> Immediate suspension of automated triggers upon dispute or flag.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900">Right to Rectification &amp; Access:</strong> Self-service employee portals for instantaneous record accuracy updates.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <h3 className="font-bold text-slate-900 text-lg mb-3 flex items-center gap-2">
                  <ShieldCheck size={18} className="text-purple-600" />
                  DPDP Act, 2023 (Republic of India)
                </h3>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-purple-600 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900">Lawful Grounds of Processing:</strong> Complete statutory alignment for lawful processing of personal and sensitive employee data in India.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-purple-600 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900">Purpose Limitation:</strong> Information captured strictly for payroll, tax withholding (TDS), PF/ESI filings, and work attendance.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-purple-600 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900">Consent Governance:</strong> Transparent consent capture with version tracking and non-rejection audit logs.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-purple-600 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900">Grievance Redressal:</strong> Dedicated officer assigned with statutory response timeframe.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* SECTION 6: Zero-Trust Security Architecture */}
          <div id="sec-zerotrust" className="legal-card p-6 sm:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold">
                <Lock size={20} />
              </div>
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Section 6</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Zero-Trust Security Architecture &amp; Tenant Isolation
                </h2>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed mb-6">
              Hexanx operates under a strict <strong className="text-slate-900">Zero-Trust architecture</strong> across both virtual computational clusters and physical facilities:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                  <Key size={16} className="text-blue-600" />
                  Identity &amp; Access (IAM)
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Passwords hashed with <code className="bg-white px-1 py-0.5 rounded border border-slate-200 text-slate-800">bcrypt</code> (10 salt rounds). JSON Web Tokens (JWT) scoped to tenant ID and role, strictly capped at 24 hours. Dual-Mode RBAC prevents privilege escalation. Admin Ghosting isolates super-admin accounts from standard operational queries.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                  <Cpu size={16} className="text-purple-600" />
                  Multi-Tenant Isolation
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every query enforces <code className="bg-white px-1 py-0.5 rounded border border-slate-200 text-slate-800">company_id</code> dynamically derived from verified JWT payloads—never from untrusted bodies. External candidates operate in a sandbox (<code className="bg-white px-1 py-0.5 rounded border border-slate-200 text-slate-800">/api/candidates</code>). Ayra AI uses loopback security forwarding user authorization claims.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                  <ShieldCheck size={16} className="text-emerald-600" />
                  Perimeter &amp; Encryption
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Storage volumes encrypted using <strong>AES-256</strong> with bi-weekly key rotations. In-transit traffic strictly enforces <strong>TLS 1.3</strong> with perfect forward secrecy. Global rate limiter (1,000 req/15 min) and auth brute-force cap (50 req/15 min) block volumetric attacks.
                </p>
              </div>
            </div>

            {/* Upload Firewall & SQL Parameterization */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
              <h4 className="font-bold text-slate-900 text-sm mb-2">Upload Firewall &amp; SQL Injection Immunity</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                100% of SQL transactions execute through PostgreSQL parameterized queries (<code className="bg-white px-1 rounded border">$1, $2, ...</code>) with zero string concatenation. Upload buffers are strictly vetted by MIME-type filters and hard byte ceilings:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                <div className="bg-white p-2.5 rounded-xl border border-slate-200">
                  <span className="text-slate-400 block text-[10px]">KYC &amp; Govt IDs</span>
                  <strong className="text-slate-900">5 MB Max (PDF/Img)</strong>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-slate-200">
                  <span className="text-slate-400 block text-[10px]">Avatars &amp; Logos</span>
                  <strong className="text-slate-900">2 MB Max (JPEG/PNG)</strong>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-slate-200">
                  <span className="text-slate-400 block text-[10px]">Candidate Resumes</span>
                  <strong className="text-slate-900">5 MB Max (PDF/Doc)</strong>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-slate-200">
                  <span className="text-slate-400 block text-[10px]">Bulk Import Sheets</span>
                  <strong className="text-slate-900">10 MB Max (CSV/XLSX)</strong>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 7: Policy-as-Code & Audit Trail */}
          <div id="sec-policy-code" className="legal-card p-6 sm:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center font-bold">
                <FileText size={20} />
              </div>
              <div>
                <span className="text-xs font-bold text-cyan-600 uppercase tracking-wider">Section 7</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Policy-as-Code &amp; Forensic Consent Audit Trail
                </h2>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed mb-4">
              Hexanx integrates an immutable consent tracking engine directly into its relational core. Onboarded users and registering companies cannot bypass application entry points without active verification against <code className="bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded text-xs">user_consents</code> via our enforcement gate (<code className="bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded text-xs">complianceController.js</code>).
            </p>

            {/* Code Block for Schema */}
            <div className="code-container p-4 sm:p-6 mb-6 overflow-x-auto">
              <div className="text-slate-400 text-xs mb-2">// Immutable Policy-as-Code Schema (Live Production Core)</div>
              <pre className="text-emerald-400 font-mono text-xs">
{`-- Relational Core: policies & user_consents
CREATE TABLE public.policies (
    id SERIAL PRIMARY KEY,
    policy_type VARCHAR(255),          -- 'PRIVACY', 'TERMS', 'DPA'
    version VARCHAR(50),              -- e.g., 'v1.0'
    content TEXT,                     -- Full contractual legal text
    is_active BOOLEAN DEFAULT TRUE,
    company_id INT,                   -- Tenant scoping
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE public.user_consents (
    id SERIAL PRIMARY KEY,
    employee_id VARCHAR(255),         -- Associated user or employee ID
    policy_id INT REFERENCES policies(id),
    ip_address VARCHAR(255),          -- Captured client IP at consent time
    user_agent TEXT,                  -- Captured browser and OS telemetry
    accepted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`}
              </pre>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              Every acceptance records the client&#39;s public IP address (<code className="bg-slate-100 px-1 rounded text-xs">x-forwarded-for</code>) and browser fingerprint for absolute non-repudiation in legal audits. High-value mutations are tracked in <code className="bg-slate-100 px-1 rounded text-xs">system_audit_logs</code> and <code className="bg-slate-100 px-1 rounded text-xs">global_audit_logs</code> to satisfy SOC 2 and ISO 27001 audit standards.
            </p>
          </div>

          {/* SECTION 8: Cookies & Anti-Spam */}
          <div className="legal-card p-6 sm:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                <Bell size={20} />
              </div>
              <div>
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Section 8</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Cookies &amp; Anti-Spam Policy</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">Zero-Tracker Cookie Policy</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Hexanx utilizes <strong>strictly necessary cryptographic session cookies</strong> and JSON Web Tokens (JWT) stored in your browser&#39;s local storage context solely to preserve your authenticated state. We do <strong>not</strong> deploy third-party advertising trackers, social telemetry pixels, or cross-site data aggregators.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">Zero-Tolerance Anti-Spam Mandate</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Our automated notification dispatch infrastructure (utilized for OTPs, payroll alerts, and interview invites) is strictly bounded. Any tenant discovered utilizing our notification API for unsolicited marketing or phishing campaigns faces immediate, irrevocable account termination.
                </p>
              </div>
            </div>
          </div>

          {/* SECTION 9: Legal Jurisdiction & Contact */}
          <div id="sec-jurisdiction" className="legal-card p-6 sm:p-10 mb-8 bg-gradient-to-br from-white to-blue-50/40">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                <Building2 size={20} />
              </div>
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Section 9</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Governing Law, Jurisdiction &amp; Legal Inquiries
                </h2>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed mb-6">
              This Privacy Policy shall be governed by and construed in accordance with the laws of the Republic of India. Any disputes arising out of or in connection with this policy shall be subject to the exclusive jurisdiction of the competent courts located in <strong className="text-slate-900">Raipur, Chhattisgarh, India</strong>.
            </p>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-slate-900 text-base mb-1">Corporate &amp; Grievance Redressal Desk</h4>
                <p className="text-sm text-slate-500">
                  Hexanx Pvt Ltd • Santoshi Nagar, Raipur, Chhattisgarh 492001
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Designated Grievance &amp; Data Protection Officer Contact
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
              <p>Attestation Hash: 0x98AF...C701 • Verified against active production database policies.</p>
              <Link href="/terms" className="text-blue-600 font-bold hover:underline flex items-center gap-1">
                View Master Subscription Agreement <ArrowRight size={14} />
              </Link>
            </div>
          </div>

        </main>
      </div>
    </>
  );
}
