import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChatbotWidget from '../components/ChatbotWidget';

export const metadata = {
  title: {
    default: 'Hexanx | Enterprise B2B SaaS Ecosystem & AI Platform',
    template: '%s | Hexanx',
  },
  description:
    'Hexanx is a unified B2B SaaS ecosystem offering Hexanx OS (HR & Finance), Flasto (Restaurant OS), and Roomyes (Hotel PMS) powered by the proprietary Ayra AI neural engine.',
  keywords: [
    'B2B SaaS', 'HRMS', 'Restaurant POS', 'Hotel PMS', 'Enterprise AI',
    'SaaS Ecosystem', 'Hexanx OS', 'Flasto', 'Roomyes', 'Ayra AI',
    'Enterprise Software India', 'HR Software', 'Payroll Automation',
    'Cloud POS', 'Property Management System',
  ],
  authors: [{ name: 'Hexanx Technologies' }],
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.hexanx.in/' },
  openGraph: {
    type: 'website',
    url: 'https://www.hexanx.in/',
    title: 'Hexanx | Enterprise B2B SaaS Ecosystem & AI Platform',
    description:
      'Hexanx is a unified B2B SaaS ecosystem offering Hexanx OS (HR & Finance), Flasto (Restaurant OS), and Roomyes (Hotel PMS) powered by Ayra AI.',
    images: [{ url: 'https://www.hexanx.in/android-chrome-512x512.png' }],
    siteName: 'Hexanx',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hexanx | Enterprise B2B SaaS Ecosystem & AI Platform',
    description: 'Unified B2B SaaS for Indian Enterprises — HR, Restaurant POS & Hotel PMS powered by Ayra AI.',
    images: ['https://www.hexanx.in/android-chrome-512x512.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "LocalBusiness", "SoftwareApplication"],
              "name": "Hexanx",
              "description":
                "Enterprise B2B SaaS, Restaurant POS (Flasto), and Hotel PMS (Roomyes). Top IT Company in Raipur.",
              "url": "https://hexanx.in",
              "logo": "https://hexanx.in/logos/hero.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Santoshi Nagar",
                "addressLocality": "Raipur",
                "addressRegion": "Chhattisgarh",
                "postalCode": "492001",
                "addressCountry": "IN"
              },
              "areaServed": "IN",
              "knowsAbout": [
                "Enterprise B2B SaaS",
                "HRMS & Payroll Automation",
                "Restaurant POS (Flasto)",
                "Hotel PMS (Roomyes)",
                "Ayra AI Neural Engine",
                "IT Company in Raipur"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Hexanx SaaS Products",
                "itemListElement": [
                  { "@type": "SoftwareApplication", "name": "Hexanx OS", "applicationCategory": "BusinessApplication" },
                  { "@type": "SoftwareApplication", "name": "Flasto", "applicationCategory": "BusinessApplication" },
                  { "@type": "SoftwareApplication", "name": "Roomyes", "applicationCategory": "BusinessApplication" },
                  { "@type": "SoftwareApplication", "name": "Ayra AI Engine", "applicationCategory": "BusinessApplication" }
                ],
              },
              "sameAs": [
                "https://www.linkedin.com/company/hexanex/",
                "https://www.youtube.com/@Hexanx1",
                "https://www.instagram.com/hexanx.in/"
              ]
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-white font-sans selection:bg-blue-500 selection:text-white overflow-x-hidden w-full relative">
        <Navbar />
        <main className="overflow-x-hidden w-full">
          {children}
        </main>
        <Footer />
        <ChatbotWidget />
      </body>
    </html>
  );
}
