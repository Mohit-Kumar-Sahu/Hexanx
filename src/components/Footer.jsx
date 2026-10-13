import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Linkedin, Youtube, Instagram, ChevronRight, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-24 sm:pt-32 pb-10 relative z-10 border-t border-slate-900 overflow-x-hidden w-full">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16 sm:mb-20">
        <div className="col-span-1 sm:col-span-2">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8 flex items-center">
            <img src="/logo.png" alt="Hexanx Logo" className="w-10 h-10 sm:w-12 sm:h-12 object-contain mr-4 bg-white rounded-xl p-1" />
            Hexanx
          </h2>
          <p className="max-w-md text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 text-slate-500 font-light">
            Transforming businesses through innovative IT solutions. Based in Raipur, serving the world. We build the digital infrastructure that powers the future economy.
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
        
        <div>
          <h3 className="text-white font-bold mb-6 sm:mb-8 text-lg sm:text-xl">Quick Links</h3>
          <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base">
            {[
               { name: "Products", path: "/products"}, 
               { name: "Book Call", path: "/booking"}, 
               { name: "Careers", path: "/careers"}, 
               { name: "About Us", path: "/about"},
               { name: "Sitemap", path: "/sitemap"}
            ].map(item => (
               <li key={item.name} className="hover:text-blue-400 cursor-pointer transition-colors flex items-center group">
                  <ChevronRight size={16} className="mr-2 text-slate-700 group-hover:text-blue-500 transition-colors shrink-0"/> 
                  <Link to={item.path}>{item.name}</Link>
               </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-6 sm:mb-8 text-lg sm:text-xl">Contact</h3>
          <ul className="space-y-4 sm:space-y-6 text-sm sm:text-base">
            <li className="flex items-start gap-3 sm:gap-4">
               <MapPin className="shrink-0 text-blue-500 mt-1" size={18}/>
               <span>Santoshi Nagar, Raipur,<br/>Chhattisgarh 492001</span>
            </li>
            <li className="flex items-center gap-3 sm:gap-4">
               <Mail className="shrink-0 text-blue-500" size={18}/>
               <a href="mailto:contact@hexanx.in" className="hover:text-white transition-colors break-all">contact@hexanx.in</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-slate-600 gap-4 md:gap-0 text-center md:text-left">
        <p>&copy; {new Date().getFullYear()} Hexanx IT Solutions. All rights reserved.</p>
        
        <div className="max-w-2xl text-[10px] text-slate-600 leading-relaxed my-2 md:my-0">
          <p>Software as a Service | Enterprise SaaS Provider | Hexanx OS | Flasto Restaurant OS | Ayra AI Engine | Cloud Software Products | Inventory SaaS Ecosystem | Hospital Management SaaS | Billing SaaS Platform | Accounting SaaS Product | Real Estate Management System SaaS | CRM & Workflow Automation SaaS | Enterprise Ecosystem Products | Raipur Chhattisgarh</p>
        </div>

        <div className="flex flex-wrap gap-4 sm:gap-8 mt-2 md:mt-0 justify-center md:justify-end">
           <Link to="/privacy" className="hover:text-white cursor-pointer transition-colors">Privacy Policy</Link>
           <Link to="/terms" className="hover:text-white cursor-pointer transition-colors">Terms of Service</Link>
           <Link to="/sitemap" className="hover:text-white cursor-pointer transition-colors">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}
