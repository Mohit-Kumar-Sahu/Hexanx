import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Linkedin, Youtube, Instagram, ChevronRight, MapPin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-24 sm:pt-32 pb-10 relative z-10 border-t border-slate-900 overflow-x-hidden w-full">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-10 lg:gap-12 mb-16 sm:mb-20">
        
        {/* Brand & Ecosystem Overview */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8 flex items-center">
            <img src="/logo.png" alt="Hexanx Logo" className="w-10 h-10 sm:w-12 sm:h-12 object-contain mr-4 bg-white rounded-xl p-1" />
            Hexanx
          </h2>
          <p className="max-w-md text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 text-slate-500 font-light">
            A unified B2B SaaS ecosystem powering Indian enterprises — Hexanx OS for HR &amp; Finance, Flasto for Restaurants, and Roomyes for Hotels. All connected by Ayra AI.
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4">
             {[
               { Icon: Globe, link: "https://www.hexanx.in/" }, 
               { Icon: Mail, link: "mailto:contact@hexanx.in" }, 
               { Icon: Linkedin, link: "https://www.linkedin.com/company/hexanex/" }, 
               { Icon: Youtube, link: "https://www.youtube.com/@Hexanx1" },
               { Icon: Instagram, link: "https://www.instagram.com/hexanx.in/" }
              ].map((social, i) => (
               <a key={i} href={social.link} target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all cursor-pointer border border-slate-800 hover:border-blue-500">
                 <social.Icon size={18}/>
               </a>
             ))}
          </div>
        </div>

        {/* Ecosystem Products */}
        <div>
          <h3 className="text-white font-bold mb-6 sm:mb-8 text-lg sm:text-xl tracking-tight">Ecosystem</h3>
          <ul className="flex flex-col gap-y-2.5 sm:gap-y-3 text-sm sm:text-base">
            {[
              { name: "Hexanx OS", path: "https://os.hexanx.in", isExternal: true },
              { name: "Flasto POS", path: "https://flasto.in", isExternal: true },
              { name: "Roomyes PMS", path: "https://roomyes.hexanx.in", isExternal: true },
              { name: "Ayra AI Engine", path: "/#ayra", isExternal: false },
            ].map(item => (
              <li key={item.name} className="flex items-center group">
                <ChevronRight size={16} className="mr-2 text-slate-700 group-hover:text-blue-500 transition-colors shrink-0"/> 
                {item.isExternal ? (
                  <a href={item.path} target="_blank" rel="noopener noreferrer" className="whitespace-nowrap text-slate-400 group-hover:text-blue-400 transition-colors flex items-center gap-1">
                    {item.name} <ArrowUpRight size={12} className="opacity-60" />
                  </a>
                ) : (
                  <Link to={item.path} className="whitespace-nowrap text-slate-400 group-hover:text-blue-400 transition-colors">
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold mb-6 sm:mb-8 text-lg sm:text-xl tracking-tight">Quick Links</h3>
          <ul className="flex flex-col gap-y-2.5 sm:gap-y-3 text-sm sm:text-base">
            {[
               { name: "Products", path: "/products"}, 
               { name: "Blog", path: "/blog"},
               { name: "Book Call", path: "/booking"}, 
               { name: "Careers", path: "/careers"}, 
               { name: "About Us", path: "/about"},
               { name: "Sitemap", path: "/sitemap"}
            ].map(item => (
               <li key={item.name} className="flex items-center group">
                  <ChevronRight size={16} className="mr-2 text-slate-700 group-hover:text-blue-500 transition-colors shrink-0"/> 
                  <Link to={item.path} className="whitespace-nowrap text-slate-400 group-hover:text-blue-400 transition-colors">
                    {item.name}
                  </Link>
               </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-white font-bold mb-6 sm:mb-8 text-lg sm:text-xl tracking-tight">Contact</h3>
          <ul className="flex flex-col gap-y-4 sm:gap-y-5 text-sm sm:text-base">
            <li className="flex items-start gap-3 sm:gap-4">
               <MapPin className="shrink-0 text-blue-500 mt-1" size={18}/>
               <span className="leading-relaxed">Santoshi Nagar, Raipur,<br/>Chhattisgarh 492001</span>
            </li>
            <li className="flex items-center gap-3 sm:gap-4">
               <Mail className="shrink-0 text-blue-500" size={18}/>
               <a href="mailto:contact@hexanx.in" className="hover:text-white transition-colors break-all">contact@hexanx.in</a>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Bottom Sub-Footer Bar */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 pt-8 border-t border-slate-900 flex flex-col lg:flex-row justify-between items-center text-xs sm:text-sm text-slate-600 gap-4 lg:gap-6 text-center lg:text-left">
        <p className="whitespace-nowrap">&copy; {new Date().getFullYear()} Hexanx Pvt Ltd. All rights reserved.</p>
        
        <div className="max-w-xl text-[10px] text-slate-600 leading-relaxed my-2 lg:my-0 text-center lg:text-left">
          <p>Software as a Service | Enterprise SaaS Provider | Hexanx OS | Flasto Restaurant OS | Roomyes Hotel PMS | Ayra AI Engine | Cloud Software Products | Raipur Chhattisgarh</p>
        </div>

        <div className="flex items-center gap-4 sm:gap-6 justify-center lg:justify-end shrink-0 whitespace-nowrap">
           <Link to="/privacy" className="hover:text-white cursor-pointer transition-colors whitespace-nowrap">Privacy Policy</Link>
           <Link to="/terms" className="hover:text-white cursor-pointer transition-colors whitespace-nowrap">Terms of Service</Link>
           <Link to="/sitemap" className="hover:text-white cursor-pointer transition-colors whitespace-nowrap">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}
