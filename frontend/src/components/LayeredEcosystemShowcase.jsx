import React from 'react';
import { ArrowRight, Star, CheckCircle2, ArrowUpRight } from 'lucide-react';

const ECOSYSTEM_PRODUCTS = [
  {
    title: "Hexanx OS",
    category: "Enterprise ERP",
    client: "Enterprise Workspace",
    logo: "/logos/hexanxos.png",
    link: "https://os.hexanx.in",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Hexanx OS is a complete Enterprise Workspace ecosystem. It features smart attendance with facial recognition & geolocation tracking, one-click automated payroll compliance (PF, ESI, TDS), advanced leave & shift management modules, and a dedicated asset tracking system for the IT department.",
    tags: ["Attendance System", "Payroll Automation", "Asset Management", "Leave Tracking"]
  },
  {
    title: "Flasto",
    category: "Restaurant OS",
    client: "F&B Chains",
    logo: "/logos/flasto.png",
    link: "https://flasto.in",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Flasto is an Omnichannel Restaurant OS built for scale. Unifying your entire F&B operation, it provides a lightning-fast Cloud POS, contactless QR digital menus, a real-time Kitchen Display System (KDS), and predictive inventory management with recipe costing.",
    tags: ["Cloud POS", "QR Ordering", "Inventory Control", "KDS Sync"]
  },
  {
    title: "Roomyes",
    category: "Hospitality PMS",
    client: "Global Hospitality",
    logo: "/logos/roomyes.png",
    link: "https://roomyes.hexanx.in",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Room Yes is a next-gen Smart Hotel Concierge & Property Management System (PMS). Elevate guest experiences with seamless Web Check-In, QR-based in-room dining, and one-tap service requests. On the backend, hoteliers get dynamic pricing engines, automated housekeeping workflows, and channel management.",
    tags: ["Smart Concierge", "Dynamic Pricing", "Housekeeping Module", "Web Check-In"]
  }
];

export default function LayeredEcosystemShowcase() {
  return (
    <section className="py-24 sm:py-32 bg-slate-50 relative overflow-hidden w-full" id="ecosystem">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl">
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
            Live Cloud Platforms
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight">
            The Hexanx Product Ecosystem
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 mt-4">
            Autonomous, high-throughput SaaS engines built for Indian enterprises and global operations.
          </p>
        </div>

        <div className="space-y-16 sm:space-y-24">
          {ECOSYSTEM_PRODUCTS.map((product, idx) => (
            <div
              key={product.title}
              className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${
                idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Product Visual */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-white aspect-video relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-white text-xs font-mono font-semibold">
                    {product.category}
                  </div>
                </div>
              </div>

              {/* Product Copy & Direct CTA Button */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 rounded-full border border-blue-100">
                  <Star className="w-3.5 h-3.5 text-blue-600 fill-current" />
                  <span className="text-xs font-bold tracking-wider text-blue-700 uppercase">
                    USP: {product.client}
                  </span>
                </div>

                <div className="h-10 sm:h-12 flex items-center">
                  <img
                    src={product.logo}
                    alt={`${product.title} logo`}
                    className="h-9 sm:h-11 w-auto object-contain mix-blend-multiply"
                  />
                </div>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                  {product.description}
                </p>

                {/* Direct CTA Button (Apple-Grade) */}
                <div>
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-2.5 mt-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-medium transition-all shadow-md hover:shadow-lg gap-2 group text-sm"
                  >
                    Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Tags Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-200">
                  {product.tags.map((tag) => (
                    <div
                      key={tag}
                      className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-slate-100 text-sm font-medium text-slate-700 shadow-xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
