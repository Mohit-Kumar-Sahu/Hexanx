import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Linkedin, Youtube, Instagram, ChevronRight, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-32 pb-10 relative z-10 border-t border-slate-900">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-4xl font-bold text-white mb-8 flex items-center">
            <img src="/logo.png" alt="Hexanx Logo" className="w-12 h-12 object-contain mr-4 bg-white rounded-xl p-1" />
            Hexanx
          </h2>
          <p className="max-w-md text-lg leading-relaxed mb-10 text-slate-500 font-light">
            Transforming businesses through innovative IT solutions. Based in Raipur, serving the world. We build the digital infrastructure that powers the future economy.
          </p>
          <div className="flex gap-4">
             {[
               { Icon: Globe, link: "https://www.hexanx.in/" }, 
               { Icon: Mail, link: "mailto:contact@hexanx.in" }, 
               { Icon: Linkedin, link: "https://www.linkedin.com/company/hexanex/" }, 
               { Icon: Youtube, link: "https://www.youtube.com/@Hexanx1" },
               { Icon: Instagram, link: "https://www.instagram.com/hexanx.in/" }
              ].map((social, i) => (
               <a key={i} href={social.link} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all cursor-pointer border border-slate-800 hover:border-blue-500">
                 <social.Icon size={20}/>
               </a>
             ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-white font-bold mb-8 text-xl">Quick Links</h3>
          <ul className="space-y-4 text-base">
            {[
               { name: "Products", path: "/products"}, 
               { name: "Book Call", path: "/booking"}, 
               { name: "Careers", path: "/careers"}, 
               { name: "About Us", path: "/about"},
               { name: "Sitemap", path: "/sitemap"}
            ].map(item => (
               <li key={item.name} className="hover:text-blue-400 cursor-pointer transition-colors flex items-center group">
                  <ChevronRight size={16} className="mr-2 text-slate-700 group-hover:text-blue-500 transition-colors"/> 
                  <Link to={item.path}>{item.name}</Link>
               </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-8 text-xl">Contact</h3>
          <ul className="space-y-6 text-base">
            <li className="flex items-start gap-4">
               <MapPin className="shrink-0 text-blue-500 mt-1" size={20}/>
               <span>Santoshi Nagar, Raipur,<br/>Chhattisgarh 492001</span>
            </li>
            <li className="flex items-center gap-4">
               <Mail className="shrink-0 text-blue-500" size={20}/>
               <a href="mailto:contact@hexanx.in" className="hover:text-white transition-colors">contact@hexanx.in</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-6 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600">
        <p>&copy; {new Date().getFullYear()} Hexanx IT Solutions. All rights reserved.</p>
        
        <div className="max-w-2xl text-[10px] text-slate-600 leading-relaxed my-4 md:my-0">
          <p>Software as a Service | Enterprise SaaS Provider | Hexanx OS | Flasto Restaurant OS | Ayra AI Engine | Cloud Software Products | Inventory SaaS Ecosystem | Hospital Management SaaS | Billing SaaS Platform | Accounting SaaS Product | Real Estate Management System SaaS | CRM & Workflow Automation SaaS | Enterprise Ecosystem Products | Raipur Chhattisgarh</p>
        </div>

        <div className="flex gap-8 mt-4 md:mt-0">
           <Link to="/privacy" className="hover:text-white cursor-pointer transition-colors">Privacy Policy</Link>
           <Link to="/terms" className="hover:text-white cursor-pointer transition-colors">Terms of Service</Link>
           <Link to="/sitemap" className="hover:text-white cursor-pointer transition-colors">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}
