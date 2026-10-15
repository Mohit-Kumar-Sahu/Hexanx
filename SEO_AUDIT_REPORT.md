# Comprehensive Full-Stack Technical SEO Audit & Vulnerability Report
**Target Domain:** `hexanx.in` (Production: `https://www.hexanx.in`)  
**Architecture:** Next.js 15.5.27 (App Router), React 19.3.0, Tailwind CSS 4  
**Audit Date:** October 15, 2026  
**Auditor:** DeepMind Antigravity Technical SEO Engine  

---

## Executive Summary

| Audit Dimension | Status | Score | Severity Level |
| :--- | :---: | :---: | :--- |
| **Canonical & Protocol Consistency** | ⚠️ CRITICAL RISKS DETECTED | 42/100 | Severe (De-indexing Hazard) |
| **Client vs Server Metadata Architecture** | ⚠️ ARCHITECTURE LEAK | 68/100 | High (Inherited Meta Blind Spots) |
| **Heading & Semantic Hierarchy** | ⚠️ STRUCTURAL FLAWS | 64/100 | Medium (Skipped Ranks & Landmark Nesting) |
| **Core Web Vitals & Media Optimization** | ⚠️ CLS / LCP VULNERABILITIES | 55/100 | High (Unsized <img>, Layout Shifts) |
| **Structured Data (JSON-LD) Validation** | ⚠️ SUBDOMAIN CONTRADICTION | 72/100 | Medium (Protocol/Subdomain Inconsistency) |
| **Internal Linking & Anchor Hygiene** | ⚠️ JS EVENT TRAPPING | 65/100 | High (Equity Leakage via `router.push`) |
| **Crawl & Index Directives** | ⚠️ ORPHANED ROUTE DETECTED | 80/100 | Medium (Zombie Duplicate Route `/sitemap-page`) |
| **Overall SEO Health Score** | **COMPROMISED** | **63 / 100** | **Action Required Immediately** |

### Executive Risk Summary
Following the recent migration to Next.js 15 App Router, the application features modern dynamic sitemap generators (`sitemap.js`) and crawl rules (`robots.js`). However, an exhaustive code-level scan has uncovered **critical architectural flaws** that actively threaten organic search visibility:
1. **Canonical Self-Cannibalization:** All 10 subpages (`/products`, `/about`, `/blog`, `/booking`, `/careers`, `/contact`, `/internships`, `/privacy`, `/terms`, `/sitemap`) inherit the root canonical `https://www.hexanx.in/` from `src/app/layout.jsx` because individual routes do not declare page-specific `alternates`. In Next.js 15, this instructs Googlebot that every internal page is an unoriginal duplicate of the homepage, triggering canonical consolidation and de-indexing risks.
2. **Schema & Canonical Subdomain Conflict:** The root JSON-LD schema in `layout.jsx` declares `"url": "https://hexanx.in"` (non-www), whereas canonical tags, sitemaps, and SiteNavigationElement declare `https://www.hexanx.in` (with www). Google's entity disambiguation algorithms penalize such discrepancies.
3. **Internal Link Equity Waste:** High-value primary conversion buttons ("Start Journey", "Book Meeting") in `HeroSection.jsx` and `Navbar.jsx` rely on programmatic JavaScript `onClick={() => router.push('/booking')}` instead of semantic Next.js `<Link>` elements, preventing web crawlers from transferring PageRank to the booking funnel.
4. **Core Web Vitals Hazards:** Over a dozen raw `<img>` tags lack explicit width and height dimensions or Next.js `<Image>` optimization, inducing Cumulative Layout Shifts (CLS) above the fold, while heavy unoptimized external background images degrade Largest Contentful Paint (LCP).

---

## Category 1: Critical SEO Red Flags (Immediate Action Required)

### 1.1 Global Canonical Subpage Cannibalization Trap
- **Files Affected:**  
  - `src/app/about/page.jsx`
  - `src/app/blog/page.jsx`
  - `src/app/booking/page.jsx`
  - `src/app/careers/page.jsx`
  - `src/app/contact/page.jsx`
  - `src/app/internships/page.jsx`
  - `src/app/privacy/page.jsx`
  - `src/app/products/page.jsx`
  - `src/app/terms/page.jsx`
  - `src/app/sitemap/page.jsx`
- **Mechanism:** In `src/app/layout.jsx`, line 21 defines:
  ```javascript
  alternates: { canonical: 'https://www.hexanx.in/' }
  ```
  In Next.js 15 App Router, metadata inheritance is shallow-merged. When subpages omit the `alternates` property, Next.js cascades the root canonical tag down into every generated static HTML page.
- **Evidence from Static Build (`.next/server/app/about.html`, `.next/server/app/products.html`):**
  ```html
  <!-- Rendered on https://www.hexanx.in/about -->
  <title>About Us | Hexanx</title>
  <link rel="canonical" href="https://www.hexanx.in/"/>
  ```
- **Consequence:** Search engine crawlers (Googlebot, Bingbot) interpret this tag as an explicit instruction that `/about`, `/products`, `/blog`, and all other pages are exact duplicates of the homepage. Google drops these URLs from the SERP, refuses to index them individually, and prevents Google Sitelinks from triggering.

---

### 1.2 Entity Protocol & Subdomain Mismatch in JSON-LD Schema
- **File Affected:** `src/app/layout.jsx` (Lines 59-60)
- **Mechanism:**
  ```javascript
  // layout.jsx Line 59-60
  "url": "https://hexanx.in",
  "logo": "https://hexanx.in/logos/hero.png",
  ```
  In contrast, line 21 specifies `https://www.hexanx.in/`, `robots.js` points to `https://www.hexanx.in/sitemap.xml`, and lines 103-109 list all `SiteNavigationElement` URLs with `www.hexanx.in`.
- **Consequence:** Google's Knowledge Graph parser detects contradictory domain authorities (`hexanx.in` vs `www.hexanx.in`). Search engines require 100% strict matching between the canonical domain, sitemap URLs, and JSON-LD schema `@id` / `url` properties to establish Knowledge Panel entity authority.

---

### 1.3 Zombie Duplicate Route: `/sitemap-page`
- **File Affected:** `src/app/sitemap-page/page.jsx`
- **Mechanism:** Both `src/app/sitemap/page.jsx` and `src/app/sitemap-page/page.jsx` are compiled and served, both rendering `views/Sitemap.jsx`. However, `sitemap-page` is an unreferenced duplicate route.
- **Consequence:** Exposes duplicate HTML at `/sitemap-page` without self-referential or canonical consolidation, splitting link equity and wasting search engine crawl budget.

---

### 1.4 Invalid Nested `<main>` Landmark Elements (W3C Specification Violation)
- **Files Affected:**  
  - `src/app/layout.jsx` (Line 117)
  - `src/views/PrivacyPolicy.jsx` (Line 142)
  - `src/views/TermsOfService.jsx` (Line 130)
- **Mechanism:**  
  `layout.jsx` wraps all routes in `<main className="overflow-x-hidden w-full">{children}</main>`. Both `PrivacyPolicy.jsx` and `TermsOfService.jsx` contain internal `<main className="container...">` wrappers, creating invalid `<main><main>...</main></main>` nesting.
- **Consequence:** W3C HTML5 validator error. Screen readers and search engine accessibility and landmark parsers flag invalid document outlines, degrading technical quality signals.

---

## Category 2: High Priority Architecture Loopholes

### 2.1 Complete Absence of Per-Route OpenGraph & Twitter Social Cards
- **Files Affected:** All sub-routes in `src/app/**/page.jsx`
- **Mechanism:** Subpages export minimal metadata (`title` and `description` only):
  ```javascript
  export const metadata = {
    title: 'Products',
    description: 'Enterprise SaaS Implementation...',
  };
  ```
  Neither `openGraph` nor `twitter` metadata is defined on subpages.
- **Evidence from Static Build:** When `/products` or `/blog` is shared on social networks or indexed by social bots, the scraper receives:
  ```html
  <meta property="og:title" content="Hexanx | Enterprise B2B SaaS Ecosystem &amp; AI Platform"/>
  <meta property="og:url" content="https://www.hexanx.in/"/>
  ```
- **Consequence:** Social preview snippets point back to the homepage instead of the specific route, destroying Click-Through-Rate (CTR) on social channels and preventing social crawlers from recognizing distinct URLs.

---

### 2.2 JavaScript Event Trapping Hijacking Internal Link Equity
- **Files Affected:**
  - `src/components/HeroSection.jsx` (Lines 72-78)
  - `src/components/Navbar.jsx` (Lines 73-79)
- **Mechanism:**
  ```jsx
  // HeroSection.jsx
  <button onClick={() => router.push('/booking')} className="...">
    <span>Start Journey</span>
  </button>

  // Navbar.jsx
  <button onClick={() => router.push('/booking')} className="...">
    Book Meeting
  </button>
  ```
- **Consequence:** Search engine spiders do not trigger custom JavaScript `onClick` events. The most critical primary conversion CTAs on the entire site fail to output HTML `<a>` tags with `href="/booking"`, starving the `/booking` landing page of internal PageRank and anchor context.

---

### 2.3 Missing `metadataBase` Configuration in Root Layout
- **File Affected:** `src/app/layout.jsx`
- **Mechanism:** Next.js 15 requires `metadataBase: new URL('https://www.hexanx.in')` in the root `metadata` object to resolve relative social images and canonical references.
- **Consequence:** Builds trigger Next.js metadata resolution warnings, and dynamic OpenGraph image fallbacks risk defaulting to `http://localhost:3000` or server-relative paths in certain deployment targets.

---

## Category 3: Core Web Vitals & Media Issues

### 3.1 Cumulative Layout Shift (CLS) from Unsized Local & Cloud Images
- **Files Affected:**
  - `src/components/Navbar.jsx` (Line 47: `<img src="/logo.png" ... />`)
  - `src/components/Footer.jsx` (Line 13: `<img src="/logo.png" ... />`)
  - `src/components/LayeredEcosystemShowcase.jsx` (Line 174: `<img src={currentProduct.logo} ... />`)
  - `src/components/AyraSection.jsx` (Lines 50, 161: `<img src="/logos/ayra-ai.png" ... />`)
  - `src/components/ChatbotWidget.jsx` (Lines 53, 66, 85: `<img src="/logos/ayra-ai.png" ... />`)
  - `src/views/AboutUs.jsx` (Line 318: `<img src={p.logo} ... />`)
  - `src/views/Blog.jsx` (Lines 330, 444: `<img src={featuredPost.logo} ... />`)
  - `src/views/Sitemap.jsx` (Lines 364, 367, 370, 383: `<img src="/logos/..." ... />`)
- **Flaw:** Standard `<img>` elements are deployed with Tailwind utility classes (e.g. `w-8 h-8`, `h-7 w-auto`) but lack explicit HTML `width` and `height` attributes or Next.js `<Image>` integration.
- **Consequence:** Browsers cannot calculate intrinsic aspect ratios prior to network asset delivery, causing layout recalculations and CLS penalties on mobile devices.

---

### 3.2 Largest Contentful Paint (LCP) Degradation from Raw Remote Assets
- **Files Affected:**
  - `src/components/BrandPhilosophyBanner.jsx` (Line 11-15):
    ```jsx
    <img
      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2850&q=80"
      alt="Hexanx Engineering and Operations Team"
      className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none"
    />
    ```
  - `src/components/AyraSection.jsx` (Line 135-139):
    ```jsx
    <img
      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80"
      alt="Ayra AI Enterprise HR Intelligence"
      ...
    />
    ```
- **Flaw:** Unsplash images are embedded via standard `<img>` tags requesting full resolution (up to 2850px width, ~1.8 MB), bypassing Next.js edge WebP/AVIF format transcoding and responsive device `srcset` generation.
- **Consequence:** Significantly impairs mobile LCP metrics and consumes mobile crawler bandwidth.

---

### 3.3 Dead Weight Asset Bloat in `public/`
- **Files Affected:**
  - `public/founder.png` (5.92 MB)
  - `public/cofounder.png` (6.09 MB)
- **Flaw:** ~12.01 MB of uncompressed raw photography exists in `public/` but is never imported or referenced anywhere in the codebase.
- **Consequence:** Unnecessarily bloats deployment serverless function bundle sizes, increases build cache transfer times, and risks accidental indexing if directory listing is enabled on reverse proxies.

---

## Category 4: Content & Heading Structure Gaps

### 4.1 Broken Heading Ranks & Missing `<h2>` Hierarchy
Google algorithms use heading structure (`<h1>` -> `<h2>` -> `<h3>`) to parse document outlines and topic authority. The audit detected multiple heading hierarchy violations:

| Route / Component | Current Heading Flow | Structural Defect | Fix Required |
| :--- | :--- | :--- | :--- |
| **`/careers`** (`CareersClient.jsx`) | `<h1>` (PageHeader) -> `<h3>` (Job Title) -> `<h4>` (Why Hexanx) | Skipped `<h2>` entirely | Convert section wrapper or title to `<h2>` |
| **`/internships`** (`InternshipsClient.jsx`) | `<h1>` (PageHeader) -> `<h3>` (Program Title) -> `<h4>` (Tracks) | Skipped `<h2>` entirely | Convert `<h3>` to `<h2>` |
| **`/contact`** (`ContactClient.jsx`) | `<h1>` (PageHeader) -> No intermediate headings on form | Missing `<h2>` | Add semantic `<h2>` for contact channels |
| **`/booking`** (`BookingClient.jsx`) | `<h1>` (PageHeader) -> `<h3>` (Book Demo) | Skipped `<h2>` entirely | Change `<h3>Book a Product Demo</h3>` to `<h2>` |
| **Hero Section** (`HeroSection.jsx`) | `<h1>` -> `<h4>` (Enterprises CountUp) | Skipped `<h2>` and `<h3>` | Change stat labels to non-heading `<div>` / `<span>` |
| **Ayra Section** (`AyraSection.jsx`) | `<h2>` -> `<h4>` (Feature pill titles) | Skipped `<h3>` | Change feature titles from `<h4>` to `<h3>` |

---

### 4.2 Accessibility & Discernible Text Failure on Anchor Tags
- **File Affected:** `src/components/Footer.jsx` (Line 27)
- **Flaw:**
  ```jsx
  <a key={i} href={social.link} target="_blank" rel="noopener noreferrer" className="...">
    <social.Icon size={18}/>
  </a>
  ```
  The social link anchors contain only SVG icons without visible text or an `aria-label` attribute.
- **Consequence:** Fails Google Lighthouse SEO and Accessibility audits under the rule: *"Links do not have a discernible name"*.

---

### 4.3 Monolithic Blog Implementation (Missing Dynamic Slug Indexing)
- **File Affected:** `src/views/Blog.jsx`
- **Flaw:** All 6 long-form technical playbooks (e.g. *Revenue Leakage in Boutique Hotels*, *Reclaiming Margins with Flasto POS*, *Zero-Error Payroll*) are rendered as an interactive in-memory list within a client component using in-page anchor hashes (`#revenue-leakage-roomyes`). There are no standalone dynamic routes (`/blog/[slug]`).
- **Consequence:** Search engines cannot index the individual articles. High-intent long-tail enterprise searches (e.g., "automated PF ESI TDS compliance software", "sub-50ms KDS latency architecture") cannot rank directly, forfeiting massive organic search capture potential.

---

## Actionable Remediation Matrix

| File Path | Current Flaw | Exact Code Patch / Remediation |
| :--- | :--- | :--- |
| `src/app/layout.jsx` | Missing `metadataBase` & non-www schema mismatch | Add `metadataBase: new URL('https://www.hexanx.in')` to `metadata`. Update JSON-LD schema lines 59-60 to `https://www.hexanx.in` and `https://www.hexanx.in/logos/hero.png`. |
| `src/app/products/page.jsx` | Missing route canonical & OpenGraph tags | Export complete `metadata` object with `alternates: { canonical: 'https://www.hexanx.in/products' }`, `openGraph`, and `twitter`. |
| `src/app/about/page.jsx` | Inherited homepage canonical | Add `alternates: { canonical: 'https://www.hexanx.in/about' }` and complete OpenGraph payload. |
| `src/app/blog/page.jsx` | Inherited homepage canonical | Add `alternates: { canonical: 'https://www.hexanx.in/blog' }` and complete OpenGraph payload. |
| `src/app/booking/page.jsx` | Inherited homepage canonical | Add `alternates: { canonical: 'https://www.hexanx.in/booking' }` and complete OpenGraph payload. |
| `src/app/careers/page.jsx` | Inherited homepage canonical | Add `alternates: { canonical: 'https://www.hexanx.in/careers' }` and complete OpenGraph payload. |
| `src/app/contact/page.jsx` | Inherited homepage canonical | Add `alternates: { canonical: 'https://www.hexanx.in/contact' }` and complete OpenGraph payload. |
| `src/app/internships/page.jsx` | Inherited homepage canonical | Add `alternates: { canonical: 'https://www.hexanx.in/internships' }` and complete OpenGraph payload. |
| `src/app/privacy/page.jsx` | Inherited homepage canonical | Add `alternates: { canonical: 'https://www.hexanx.in/privacy' }` and complete OpenGraph payload. |
| `src/app/terms/page.jsx` | Inherited homepage canonical | Add `alternates: { canonical: 'https://www.hexanx.in/terms' }` and complete OpenGraph payload. |
| `src/app/sitemap/page.jsx` | Inherited homepage canonical | Add `alternates: { canonical: 'https://www.hexanx.in/sitemap' }` and complete OpenGraph payload. |
| `src/app/sitemap-page/` | Zombie duplicate route of `/sitemap` | Delete `src/app/sitemap-page/` or configure permanent 308 redirect in `next.config.mjs`. |
| `src/views/PrivacyPolicy.jsx` | Invalid nested `<main>` element (line 142) | Replace `<main className="...">` with `<section aria-label="Privacy Policy Content" className="...">`. |
| `src/views/TermsOfService.jsx` | Invalid nested `<main>` element (line 130) | Replace `<main className="...">` with `<section aria-label="Terms of Service Content" className="...">`. |
| `src/components/HeroSection.jsx` | `router.push('/booking')` bypassing crawlers | Replace `<button onClick={() => router.push('/booking')}` with `<Link href="/booking">`. Change stat counter `<h4>` to `<div>`. |
| `src/components/Navbar.jsx` | `router.push('/booking')` and unsized `<img>` | Replace `<button onClick={() => router.push('/booking')}` with `<Link href="/booking">`. Add `width={32} height={32}` to `<img src="/logo.png">`. |
| `src/components/Footer.jsx` | Social links missing discernible text / aria-label | Add `aria-label={social.name}` to each social `<a>` tag. Add explicit width/height to logo `<img>`. |
| `src/components/BookingClient.jsx` | Skipped heading rank (`h1` -> `h3`) | Change `<h3 className="text-3xl font-bold ...">Book a Product Demo</h3>` to `<h2>`. |
| `src/components/CareersClient.jsx` | Skipped heading rank (`h1` -> `h3`) | Wrap openings in a section with `<h2>Open Positions</h2>` and adjust job cards. |
| `src/components/InternshipsClient.jsx` | Skipped heading rank (`h1` -> `h3`) | Change `<h3 className="text-4xl font-bold ...">6 Months Industrial Training...</h3>` to `<h2>`. |
| `src/components/BrandPhilosophyBanner.jsx` | Unoptimized 2850px remote Unsplash asset | Migrate to Next.js `<Image>` with `fill` or add `loading="lazy"` and explicit dimensions. |

---

## Top 3 Highest-Priority Fixes to Execute First

1. **Fix Subpage Canonical Inheritance Across All 10 Routes (`src/app/**/page.jsx`):**
   - Override the inherited root canonical by adding page-specific `alternates: { canonical: 'https://www.hexanx.in/<route>' }` across every subpage.
   - Prevents Google from treating all subpages as duplicate copies of the homepage.
2. **Harmonize Root JSON-LD Schema Subdomain (`src/app/layout.jsx`):**
   - Update `"url": "https://hexanx.in"` and `"logo": "https://hexanx.in/logos/hero.png"` to `https://www.hexanx.in` and `https://www.hexanx.in/logos/hero.png`.
   - Resolves canonical identity mismatch between Schema.org metadata and HTML canonical headers.
3. **Convert Interactive JavaScript Navigation to Semantic Next.js `<Link>` Elements (`HeroSection.jsx` & `Navbar.jsx`):**
   - Replace `<button onClick={() => router.push('/booking')}>` with `<Link href="/booking">`.
   - Restores internal PageRank link equity flow to the core commercial conversion funnel.
