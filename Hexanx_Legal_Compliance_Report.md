# Hexanx OS Ecosystem — Legal & Compliance Consolidated Master Report

> **Document Type:** Legal, Regulatory & Compliance Consolidation Master Report  
> **Target Audience:** Public B2B SaaS Website, Enterprise Tenants, Legal & Security Audits  
> **Jurisdiction:** Republic of India (Primary), European Union (GDPR), State of California (CCPA)  
> **Governing Entity:** Hexanx Pvt Ltd  
> **Extraction Source:** Frontend Route Components (`PrivacyPolicy.jsx`, `TermsOfService.jsx`), Backend Database Seeders (`PRIVACY_POLICY.md`, `migrate_compliance.js`, `seed_policy.js`), Production SQL Schema Dumps (`live_backup_before_audit.sql`, `live_schema.sql`), and Enterprise Audit Artifacts.

---

## Ecosystem Product Mapping & Grouping

| Product Persona | Scope & Description | Target Market | Legal & Compliance Posture |
| :--- | :--- | :--- | :--- |
| **Hexanx OS / Hexanx HRMS** *(Project Omniscience)* | Flagship Enterprise HRMS, Payroll Automation, Biometric Attendance, and Dual-Mode RBAC Platform. | Mid-to-Large Enterprises, Tech Startups, Global Workforces | Governed by Master Subscription Agreement, Enterprise DPA, DPDP Act 2023, GDPR, CCPA. |
| **Flasto** *(Restaurant OS)* | Omnichannel Restaurant Management System, POS, Kitchen Display System (KDS), and Multi-Outlet Inventory. | Hospitality & Food Service Enterprises | Inherits Hexanx Zero-Trust Architecture, Payment Gateway Standards, and Ayra AI Guest Persona. |
| **Roomyes** *(Hotel PMS)* | Automated Hotel Property Management System, Room Booking, Guest Identity, and Operations Engine. | Hotels, Resorts, Hospitality Chains | Inherits Hexanx Data Sovereignty, Biometric/ID Compliance Standards, and Ayra AI Guest Persona. |
| **Ayra AI Engine** *(Enterprise Intelligence)* | Cross-product autonomous AI Action Agent and embeddable widget (`https://os.hexanx.in/ayra-widget.js`). | Embedded across Hexanx, Flasto, and Roomyes | Loopback Authorization, Zero Privilege Escalation, Strict Knowledge-Base Boundaries. |

---

# 1. Privacy Policy (Extracted)

## 1.1 Enterprise Privacy Policy & Data Processing Agreement (DPA)
*Extracted from Root Legal Policy Repository (`PRIVACY_POLICY.md`) and Production Database Policy Engine (`policies` Table — Seed ID: 2)*

- **Effective Date:** August 14, 2026
- **Company Name:** Hexanx Pvt Ltd
- **Registered Address:** Santoshi Nagar, Raipur, Chhattisgarh, PIN - 492001, India.
- **Contact Email:** `compliances@hexanx.in`
- **Official Portal:** `https://os.hexanx.in`

### 1. Introduction and Scope
Welcome to the Hexanx HRMS platform ("Service", "Platform"), operated by Hexanx Pvt Ltd ("we", "us", "our"). We are committed to protecting your personal data and respecting your privacy rights. This document outlines our data collection, processing, and retention practices in strict accordance with global standards including the General Data Protection Regulation (GDPR) and the Digital Personal Data Protection (DPDP) Act, 2023.

### 2. Data Collection
We collect the following categories of data:
- **Identity & Contact Data:** First name, last name, corporate and personal email addresses, and phone numbers.
- **Sensitive HR Data:** Bank account details for automated payroll disbursement, Government-issued Tax & Identity IDs (Aadhar, PAN) for regulatory compliance, job titles, and employee designations.
- **Technical & Usage Data:** IP addresses, browser types (User-Agent), timestamps of legal consent, and platform usage analytics.

### 3. Purpose of Processing
Your data is exclusively processed to:
- Provide HR, Payroll, Leave Management, and Organizational management services.
- Ensure legal, statutory, tax, and regulatory compliance.
- Safeguard the platform through auditing, rate-limiting, and security logs.

### 4. Third-Party Data Processors (Sub-processors)
To operate our enterprise infrastructure, we utilize the following authorized and compliant third-party vendors. By using the platform, you consent to data processing by:
- **Render:** Cloud infrastructure and application hosting.
- **PostgreSQL / Neon / Supabase:** Secured database management, relational storage, and automated snapshot backups.
- **Resend:** Transactional email delivery, OTP authentication generation, and system dispatch alerts.
- **Razorpay:** Secure financial transactions, subscription processing, and automated payment gateway.

### 5. Data Retention, Archiving, and Deletion Workflow
We practice strict data minimization:
- **Active Accounts:** Data is retained as long as the organization's account is active.
- **Account Deletion (DSAR - Data Subject Access Request):** Upon receiving a deletion request at `compliances@hexanx.in`, we initiate our **"Verified Purge Workflow"**:
  1. We send an initial confirmation email acknowledging the deletion request and starting the mandatory 30-day grace period.
  2. After 30 days, all associated Personally Identifiable Information (PII) is permanently and cryptographically scrubbed from our active databases and backup logs.
  3. A final confirmation email of successful data destruction is dispatched to the user.

### 6. Security Architecture
Hexanx Pvt Ltd employs bank-grade security protocols, including AES-256 encryption at rest, TLS 1.3 for data in transit, and stringent Role-Based Access Control (RBAC) to prevent unauthorized access.

### 7. Your Legal Rights
Under the GDPR and DPDP Act, you possess the right to:
- Access your data (Right to Access).
- Request correction of inaccurate data (Right to Rectification).
- Request erasure (Right to be Forgotten).
- Withdraw consent at any time.

### 8. Governing Law and Jurisdiction
This Privacy Policy shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with this policy shall be subject to the exclusive jurisdiction of the competent courts located in Raipur, Chhattisgarh, India.

---

## 1.2 Platform & Web Privacy Architecture
*Extracted from Public Application Frontend (`frontend/src/pages/PrivacyPolicy.jsx` & `RegisterCompany.jsx`)*

### Overview & Data Sovereignty
Hexanx operates on a foundation of absolute transparency and unyielding security. We recognize that human resources management systems govern the most critical and sensitive data vectors within your enterprise. Our commitment to **Data Sovereignty** guarantees that you always remain the master of your records. Hexanx functions strictly as a computational engine and structural repository.

### Privacy Methodology & Data Vectors
At Hexanx, we employ a minimal data collection methodology while ensuring absolute operational efficiency. We process Personally Identifiable Information (PII) strictly necessary for identity verification, access management, and immutable audit logging.

#### Account & Identity Data
- **Primary Identifiers:** Full legal name, corporate email address, and encrypted biometric signatures (where biometric hardware/clock-in integrations are deployed).
- **Authentication Tokens:** Multi-factor authentication (MFA) challenges, SSO assertions (SAML 2.0 / OIDC), and hardware key attestations.
- **Organizational Context:** Role definitions, departmental assignments, reporting hierarchies, and compensation tiers.

#### Telemetry & Environmental Data
For security auditing, brute-force mitigation, and verified attendance:
- Origin IP addresses, routing Autonomous System Numbers (ASNs), and browser fingerprint footprints.
- High-precision GPS coordinates captured strictly during biometric clock-in verification to validate geo-fenced workplace boundaries.

### Physical Security & Infrastructure
Hexanx operates under a strict **Zero-Trust architecture**:
- **At Workplace:** Corporate facilities mandate strict ingress/egress logging. Employees, contractors, and approved vendors must present cryptographic smart cards alongside biometric verification to clear the vestibule. Complete facility telemetry and anomaly logs are audited nightly. Security personnel monitor operations 24/7/365.
- **At Data Centers:** Deployed across elite Tier-IV equivalent co-location providers (e.g., AWS). Our data center footprint incorporates military-grade perimeter defense, redundant N+1 cooling paradigms, and distinct A/B power delivery circuits with isolated diesel generator backups. Storage drives that reach End-of-Life are physically shredded on-site prior to disposal.

### Encryption Paradigms
- **At Rest:** All PostgreSQL storage volumes, block-level storage, and automated snapshot backups are encrypted using AES-256. Key management rotates on a bi-weekly cycle.
- **In Transit:** Inter-node cluster communication and external API interactions strictly enforce TLS 1.3 cryptographic protocols with perfect forward secrecy.

### Cookie Policy
Hexanx utilizes strictly necessary cryptographic session cookies to maintain your authenticated state across the application dashboard. We do not employ third-party advertising trackers or invasive cross-site telemetry pixels. By authenticating into the Hexanx platform, you consent to the storage of essential JSON Web Tokens (JWT) and encrypted session identifiers in your browser's local storage context.

### Anti-Spam Policy
Our automated dispatch infrastructure (utilized for OTPs, payroll alerts, and interview invites) is governed by a strict zero-tolerance anti-spam mandate. Any tenant discovered utilizing our notification API for unsolicited marketing or phishing campaigns will face immediate, irrevocable account termination.

---

# 2. Terms of Service (Extracted)

*Extracted from Public Master Subscription Agreement (`frontend/src/pages/TermsOfService.jsx`) and Public Knowledge Engine (`backend/src/config/hexanxPublicBrain.md`)*

- **Agreement Classification:** Master Subscription Agreement (MSA) / SaaS Terms of Service
- **Last Updated:** September 2026
- **Governing Body:** Hexanx Pvt Ltd

### 2.1 Acceptance of Terms
By accessing, subscribing to, or integrating with the Hexanx Human Resources Management System, Flasto Restaurant OS, or Roomyes PMS ("the Service"), your organization mathematically bounds itself to this Master Subscription Agreement. If you are accepting on behalf of an enterprise, you warrant that you possess the legal authority to bind that corporate entity to these provisions.

Continued use of the platform following any cryptographic updates to these terms constitutes irreversible acceptance of the modified conditions.

### 2.2 Enterprise SaaS Licensing
Hexanx operates under a strict Software-as-a-Service (SaaS) architecture. We grant you a revocable, non-exclusive, non-transferable, limited right to access the infrastructure solely for your internal business operations.
- **Seat Restrictions:** Access is strictly restricted to the exact quantity of employee licenses procured during the billing cycle.
- **Prohibited Actions:** You may not reverse-engineer, decompile, or attempt to extract the source code or underlying neural weights of the Hexanx platform or Ayra AI engine.
- **White-labeling:** Unless explicitly covered under a dedicated Enterprise Customization contract, reselling, sub-licensing, or white-labeling the Service is prohibited.

### 2.3 Subscription Billing & Refund Policy
The Service operates on a deterministic, automated billing cycle powered by our integrated ledger.
- **Cadence:** Subscriptions are billed in advance on a monthly or annual cadence.
- **Seat Additions:** Adding employee seats mid-cycle will generate a prorated invoice for the remainder of the billing period.
- **Seat Deductions:** Removing seats will generate a platform credit applied to the subsequent invoice.
- **Strict No-Refund Policy:** We operate a strict **no-refund policy** for partial months of service or unused licenses. Cancellations will simply prevent the next billing cycle from charging, leaving the workspace active until the paid term expires.

### 2.4 Subscription Tiers & Commercial Pricing Schedule
- **Free Starter (₹0 / month):** Up to 5 Employees, 1 Admin Account, Core HRMS Features, Community Support.
- **Pro Business (₹100 / employee / month + ₹5,000 One-time Setup):** Unlimited Employees, Automated Payroll Engine, Geo-fenced Attendance, Advanced Custom Reports, Priority Email Support.
- **Enterprise (Custom Pricing):** Unlimited Admins & Roles, Dedicated Account Manager, Custom API Access, White-labeling Options, 24/7 Phone Support, Custom SLA.

### 2.5 Intellectual Property Rights (IPR) Complaints
Hexanx respects the Intellectual Property Rights (IPR) of others and expects our tenants to do the same. If you believe your copyrighted material has been hosted on our platform without authorization by a third-party tenant, you must submit a formal DMCA takedown notice to our designated legal representative (`compliances@hexanx.in`).

Notices must include exact cryptographic hashes or URLs of the infringing material, alongside a sworn declaration of unauthorized use. Hexanx reserves the sovereign right to suspend any tenant found to be repeatedly infringing on IPR.

### 2.6 Trademark Policy
The Hexanx name, logo, distinct wavy topographic textures, iconography, and Ayra AI identity are registered trademarks of Hexanx Pvt Ltd. You are granted no right or license to use these marks for external promotional purposes without explicit written consent.

Tenants may use the *"Powered by Hexanx"* badge provided in the media kit strictly in unmodified form to indicate infrastructure origin.

### 2.7 Abuse Policy & Platform Integrity
The integrity of our global infrastructure relies on responsible tenant behavior. You explicitly agree that your organization and its personnel will not deploy automated scripts, scrapers, or malicious payloads against our API endpoints.

Furthermore, intentionally triggering distributed denial-of-service (DDoS) vectors or attempting to bypass rate-limiting algorithms constitutes severe abuse. Hexanx reserves the sovereign right to permanently suspend and cryptographically purge the accounts of any tenant violating this Abuse Policy.

---

# 3. Compliance & Security Standards (Extracted)

*Synthesized from Technical Architecture Plans (`strike4_compliance_plan.md`), Security Threat Models (`Hexanx_Enterprise_Security_Report.md`), Security Audits (`Hexanx_Security_Audit_Report.md`, `ENTERPRISE_AUDIT_REPORT.md`), and Database Schemas (`live_schema.sql`)*

## 3.1 Global Regulatory Compliance Frameworks

### 1. General Data Protection Regulation (GDPR - EU 2016/679) & CCPA
- **Right to Erasure (Right to be Forgotten):** Implemented via a dual-phase deletion model:
  1. *Immediate Soft Delete:* Employees marked with `deleted_at = CURRENT_TIMESTAMP`, instantly hiding all records from operational queries (`WHERE deleted_at IS NULL`) while preserving historical ledger and accounting integrity.
  2. *Cryptographic Purge:* Execution of the 30-day "Verified Purge Workflow" for full PII scrubbing upon verified DSAR receipt.
- **Right to Portability:** Automated extraction and export of employee profiles, payslips, and compliance history into standardized, machine-readable formats (`JSON` / `CSV`).
- **Right to Restriction of Processing:** Immediate suspension of employee tracking and automated payroll triggers upon administrative flag or dispute.

### 2. Digital Personal Data Protection Act, 2023 (DPDP Act - India)
- Statutory alignment for lawful processing of personal and sensitive employee data in India.
- Explicit purpose limitation: Data gathered strictly for human resource administration, biometric verification, and statutory payroll (Provident Fund / ESI / TDS).
- Consent governance: Clear tracking of notice, purpose, and consent withdrawal mechanisms.

---

## 3.2 Policy-as-Code & Consent Audit Trail
Hexanx integrates an immutable consent tracking engine directly into the relational core:

```sql
-- Schema Definition: policies
CREATE TABLE public.policies (
    id SERIAL PRIMARY KEY,
    policy_type VARCHAR(255),          -- e.g., 'PRIVACY', 'TERMS', 'DPA'
    version VARCHAR(50),              -- e.g., 'v1.0'
    content TEXT,                     -- Full markdown/legal contract text
    is_active BOOLEAN DEFAULT TRUE,
    company_id INT,                   -- Tenant scoping
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Schema Definition: user_consents
CREATE TABLE public.user_consents (
    id SERIAL PRIMARY KEY,
    employee_id VARCHAR(255),         -- Associated user or employee ID
    policy_id INT REFERENCES policies(id),
    ip_address VARCHAR(255),          -- Captured client IP at consent time
    user_agent TEXT,                  -- Captured browser and OS telemetry
    accepted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

- **Consent Enforcement Gate (`complianceController.js`):** Onboarded users and registering companies cannot bypass the application entry points without active verification against `user_consents`.
- **IP & User-Agent Fingerprinting:** Every registration and policy acceptance records the client's public IP address (`x-forwarded-for`) and browser fingerprint for non-repudiation in legal audits.

---

## 3.3 Zero-Trust Security Architecture & Tenant Isolation

### 1. Identity & Access Management (IAM)
- **Cryptographic Hashing:** Passwords hashed with `bcrypt` using 10 cryptographic salt rounds.
- **Token Lifecycle:** JSON Web Tokens (JWT) signed with company scope and role boundaries; strictly capped at 24 hours (`1d`).
- **Dual-Mode RBAC:** Strict segregation between self-service employee permissions and tenant-wide administrative data.
- **Admin Ghosting:** Top-level super administrative records are systematically isolated from standard operational queries, mitigating social engineering and credential harvest vectors.

### 2. Multi-Tenant Data Isolation
- **Application-Level Siloing:** Every database transaction enforces `company_id` dynamically derived from the cryptographically verified JWT token payload—never from untrusted request bodies.
- **Candidate Sandboxing:** External job applicants operate in an isolated sandbox (`/api/candidates`) and are restricted from organizational data traversal.
- **AI Loopback Security:** When the Ayra AI engine executes internal APIs (`execute_internal_api`), it forwards the authenticated user's exact authorization token. The AI cannot view, extract, or mutate data beyond the user's specific RBAC boundaries.

### 3. Perimeter & Network Hardening
- **Global Volumetric Protection:** Global rate limiter capped at 1,000 requests per 15-minute window per IP.
- **Authentication Hardening:** Brute-force protection on `/api/auth` endpoints capped at 50 requests per 15-minute window.
- **SQL Injection Immunity:** 100% enforcement of PostgreSQL parameterized queries (`$1, $2, ...`) across all controllers and microservices.
- **Upload Firewall:** Rigorous MIME-type whitelisting and buffer-level byte caps via `uploadMiddleware.js`:
  - KYC & Government IDs: 5MB (PDF/Images)
  - Avatars & Logos: 2MB (Strict JPEG/PNG)
  - Candidate Resumes: 5MB (PDF/DOC/DOCX)
  - Bulk Import Sheets: 10MB (CSV/XLSX)

---

## 3.4 Forensic Audit Logging Ecosystem
The Hexanx ecosystem enforces multi-tiered forensic audit logging across mutations:
- **`system_audit_logs` & `global_audit_logs`:** Capture administrative actions, target database tables, target IDs, mutation payloads, IP addresses, and user-agent strings.
- **Audit Logging Utility:** Structured logging helpers (`logEnterpriseAction`, `logActivity`) record high-value financial, RBAC, and employee mutations for SOC 2 and ISO 27001 regulatory compliance.

---

## 4. Cross-Product Ayra AI Integration Architecture

Ayra AI serves as the intelligent conversational and action layer across all Hexanx products:
- **Hexanx HRMS:** Internal action agent (leave approval, payslip generation, directory query) + public sales/support agent.
- **Flasto (Restaurant OS):** Public landing page agent for restaurant menu engineering, omnichannel POS, kitchen display system demonstrations, and commercial sales.
- **Roomyes (Hotel PMS):** Public landing page agent for hotel reservation flow, room inventory automation, property management features, and guest onboarding.
- **Embeddable Script Deployment:**
  ```html
  <!-- Ayra AI Universal Widget -->
  <script 
      src="https://os.hexanx.in/ayra-widget.js" 
      data-product="hexanx" 
      defer>
  </script>
  ```
  *(Set `data-product="hexanx"`, `"flasto"`, or `"roomyes"` for instantaneous contextual persona adaptation).*

---

### Verification & Document Attestation
This document represents an exhaustive, uncompromised extraction of all legal declarations, compliance workflows, data processing agreements, terms of service, and security architectures currently established across the Hexanx codebase and database records.

**Ready for immediate deployment to the public B2B SaaS website.**
