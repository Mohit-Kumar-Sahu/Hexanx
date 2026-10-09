import React, { useState, useEffect, useRef } from 'react';
import { 
  Code, BarChart3, Smartphone, LayoutDashboard, Database, Server, 
  Globe, Menu, X, ArrowRight, Mail, MapPin, 
  CheckCircle2, Zap, Rocket, ChevronRight, Cpu, 
  Briefcase, Users, MessageSquare, Star, ChevronLeft, ChevronDown,
  Clock, Award, ShieldCheck, Search, Send, 
  MessageCircle, Linkedin, Instagram,
  TrendingUp, Target, Youtube, Bell, Lock, IndianRupee,
  HeartHandshake, FileText, Wifi
} from 'lucide-react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// --- 1. GLOBAL STYLES & ANIMATIONS ---
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

  :root {
    --primary: #2563eb;
    --primary-dark: #1d4ed8;
    --secondary: #7c3aed;
    --accent: #ec4899;
    --bg-light: #ffffff;
    --text-main: #0f172a;
    --text-muted: #64748b;
  }

  body {
    font-family: 'Plus Jakarta Sans', sans-serif;
    background-color: var(--bg-light);
    color: var(--text-main);
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Outfit', sans-serif;
  }

  /* --- Navbar Fix --- */
  .nav-scrolled {
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
  }

  /* --- Luxury Glassmorphism --- */
  .glass-card {
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.6);
    box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.05);
  }

  .glass-card-hover {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }

  .glass-card-hover:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px -12px rgba(37, 99, 235, 0.15);
    border-color: rgba(37, 99, 235, 0.3);
  }

  /* --- Advanced Backgrounds --- */
  .bg-grid {
    background-size: 50px 50px;
    background-image: 
      linear-gradient(to right, rgba(37, 99, 235, 0.03) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(37, 99, 235, 0.03) 1px, transparent 1px);
    mask-image: radial-gradient(circle at center, black 50%, transparent 100%);
  }

  .mesh-gradient {
    background-color: #ffffff;
    background-image: 
        radial-gradient(at 40% 20%, hsla(250,100%,94%,1) 0px, transparent 50%),
        radial-gradient(at 80% 0%, hsla(189,100%,96%,1) 0px, transparent 50%),
        radial-gradient(at 0% 50%, hsla(341,100%,96%,1) 0px, transparent 50%),
        radial-gradient(at 80% 50%, hsla(356,100%,96%,1) 0px, transparent 50%),
        radial-gradient(at 0% 100%, hsla(22,100%,96%,1) 0px, transparent 50%),
        radial-gradient(at 80% 100%, hsla(242,100%,96%,1) 0px, transparent 50%),
        radial-gradient(at 0% 0%, hsla(343,100%,96%,1) 0px, transparent 50%);
  }

  /* --- Typography Effects --- */
  .gradient-text {
    background: linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #ec4899 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    background-size: 200% 200%;
    animation: gradient-move 5s ease infinite;
  }

  @keyframes gradient-move {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  /* --- Animations --- */
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0px); }
  }
  .animate-float { animation: float 6s ease-in-out infinite; }

  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-scroll { animation: scroll 40s linear infinite; }

  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 0 rgba(37, 99, 235, 0); }
    50% { box-shadow: 0 0 20px rgba(37, 99, 235, 0.3); }
  }
  .animate-pulse-glow { animation: pulse-glow 2s infinite; }

  @keyframes slideIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-slide-in { animation: slideIn 0.6s ease-out forwards; }
  
  .reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.5, 0, 0, 1);
  }
  .reveal.active {
    opacity: 1;
    transform: translateY(0);
  }

  /* Custom Input Focus */
  .input-group:focus-within label { color: var(--primary); }
  .input-group:focus-within input, 
  .input-group:focus-within textarea,
  .input-group:focus-within select {
    border-color: var(--primary);
    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
  }
`;

// --- 2. DATA CONSTANTS ---

const MOCK_PROJECTS = [
  {
    id: 1,
    title: "Hexanx OS",
    category: "enterprise",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    logo: "/logos/hexanx-os.webm",
    client: "Enterprise Workspace",
    tags: ["Attendance System", "Payroll Automation", "Asset Management", "Leave Tracking"],
    description: "Hexanx OS is a complete Enterprise Workspace ecosystem. It features smart attendance with facial recognition & geolocation tracking, one-click automated payroll compliance (PF, ESI, TDS), advanced leave & shift management modules, and a dedicated asset tracking system for the IT department. Empower your workforce with our self-service mobile app and real-time analytics.",
    stats: { employees: "50k+", security: "AES-256", modules: "12+" }
  },
  {
    id: 2,
    title: "Flasto",
    category: "restaurant",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    logo: "/logos/flasto.webm",
    client: "F&B Chains",
    tags: ["Cloud POS", "QR Ordering", "Inventory Control", "KDS Sync"],
    description: "Flasto is an Omnichannel Restaurant OS built for scale. Unifying your entire F&B operation, it provides a lightning-fast Cloud POS, contactless QR digital menus, a real-time Kitchen Display System (KDS), and predictive inventory management with recipe costing. Seamlessly aggregates Swiggy, Zomato, and direct delivery orders into a single dashboard.",
    stats: { orders: "1M+", latency: "<50ms", outlets: "500+" }
  },
  {
    id: 3,
    title: "Room Yes",
    category: "hospitality",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    logo: "/logos/room-yes.webm",
    client: "Global Hospitality",
    tags: ["Smart Concierge", "Dynamic Pricing", "Housekeeping Module", "Web Check-In"],
    description: "Room Yes is a next-gen Smart Hotel Concierge & Property Management System (PMS). Elevate guest experiences with seamless Web Check-In, QR-based in-room dining, and one-tap service requests. On the backend, hoteliers get dynamic pricing engines, automated housekeeping workflows, and channel management to maximize RevPAR across OTAs.",
    stats: { uptime: "99.99%", revenueLift: "+25%", users: "10k+" }
  },
  {
    id: 4,
    title: "Ayra AI",
    category: "artificial intelligence",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    logo: "/logos/ayra-ai.webm",
    client: "Agentic Intelligence Engine",
    tags: ["LLM", "RAG", "Text-to-Speech", "Dynamic Registry"],
    description: "Ayra AI is a full agentic loop system embedded within the Hexanx ecosystem. Powered by DeepSeek LLM, it features real-time SSE streaming, pgvector similarity search, and a dynamic tool registry. Ingest complex PDF documents and interact via Microsoft Edge TTS integration for next-gen automation.",
    stats: { loop: "10-step", registry: "Dynamic", latency: "Real-time" }
  }
];

const TESTIMONIALS = [
  { id: 1, name: "Amit Verma", role: "Owner, Verma Textiles, Surat", content: "We needed a custom inventory system for our textile business. Hexanx delivered a solution that perfectly fits our workflow. Highly recommended for SMEs!", avatar: "AV" },
  { id: 2, name: "Sneha Gupta", role: "Founder, GreenLeaf Organics, Pune", content: "Their team built our e-commerce store from scratch. The design is beautiful and sales have increased by 40% since launch. Great support too.", avatar: "SG" },
  { id: 3, name: "Rohan Mehta", role: "Director, Mehta Transport, Indore", content: "Managing our fleet was a headache until Hexanx built our logistics dashboard. Now we track everything in real-time. Excellent service.", avatar: "RM" }
];

// FAQs have been removed

// --- 3. REUSABLE UI COMPONENTS ---

const Button = ({ children, primary = false, onClick, className = "", type = "button", disabled = false }) => (
  <button 
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`
      px-8 py-4 rounded-full font-bold tracking-wide transition-all duration-300 relative overflow-hidden group shadow-xl flex items-center justify-center gap-2
      ${primary 
        ? "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:shadow-blue-500/40" 
        : "bg-white text-slate-800 border border-slate-200 hover:bg-slate-50 hover:border-blue-400 hover:text-blue-600"}
      ${disabled ? "opacity-70 cursor-not-allowed" : ""}
      ${className}
    `}
  >
    <span className="relative z-10 flex items-center gap-2">{children}</span>
    {primary && <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>}
  </button>
);

const SectionTitle = ({ title, subtitle, center = true, dark = false }) => (
  <RevealOnScroll className={`mb-20 ${center ? 'text-center' : 'text-left'}`}>
    <div className={`inline-flex items-center px-4 py-2 rounded-full ${dark ? 'bg-slate-800 border-slate-700 text-blue-400' : 'bg-white border-blue-100 text-blue-600'} border text-xs font-bold uppercase tracking-widest mb-6 shadow-md ${center ? 'mx-auto' : ''}`}>
      <span className={`w-2 h-2 rounded-full ${dark ? 'bg-blue-400' : 'bg-blue-600'} mr-2 animate-pulse`}></span>
      {subtitle}
    </div>
    <h2 className={`text-5xl md:text-7xl font-extrabold tracking-tight leading-tight ${dark ? 'text-white' : 'text-slate-900'}`}>
      {title.split(" ").map((word, i) => (
        <span key={i} className={i === 1 ? "gradient-text" : ""}>
          {word} 
        </span>
      ))}
    </h2>
    <div className={`h-2 w-24 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mt-8 ${center ? 'mx-auto' : ''}`}></div>
  </RevealOnScroll>
);

const PageHeader = ({ title, subtitle }) => (
  <div className="relative pt-48 pb-24 overflow-hidden mesh-gradient">
    <div className="absolute inset-0 bg-grid opacity-60"></div>
    <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400/20 rounded-full blur-[80px] animate-float"></div>
    <div className="absolute bottom-10 left-20 w-64 h-64 bg-purple-400/20 rounded-full blur-[80px] animate-float" style={{animationDelay: "2s"}}></div>
    
    <div className="container mx-auto px-6 relative z-10 text-center animate-slide-in">
      <div className="inline-block px-4 py-1.5 rounded-full border border-slate-200 bg-white/50 backdrop-blur mb-6 shadow-sm">
        <span className="text-xs font-bold uppercase tracking-widest text-slate-600">{subtitle}</span>
      </div>
      <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">{title}</h1>
      <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
    </div>
  </div>
);

const Badge = ({ text, color = "blue" }) => {
  const colors = {
    blue: "bg-blue-50 text-blue-700 border-blue-100",
    purple: "bg-purple-50 text-purple-700 border-purple-100",
    green: "bg-green-50 text-green-700 border-green-100",
    orange: "bg-orange-50 text-orange-700 border-orange-100",
  };
  return (
    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${colors[color] || colors.blue}`}>
      {text}
    </span>
  );
};

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity" onClick={onClose}></div>
      <div className="relative bg-white rounded-[2rem] w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl animate-slide-in border border-white/40">
        <div className="sticky top-0 bg-white/80 backdrop-blur-xl border-b border-slate-100 p-6 flex items-center justify-between z-10">
          <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
          <button onClick={onClose} className="p-2 rounded-full bg-slate-100 hover:bg-red-50 hover:text-red-500 transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6 md:p-10">
          {children}
        </div>
      </div>
    </div>
  );
};

const RevealOnScroll = ({ children, className = "" }) => {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) ref.current.classList.add('active'); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
};

const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    let startTime;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const animate = (time) => {
          if (!startTime) startTime = time;
          const progress = time - startTime;
          const percentage = Math.min(progress / duration, 1);
          setCount(Math.floor(end * percentage));
          if (progress < duration) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
        observer.disconnect();
      }
    });
    if (ref.current) observer.observe(ref.current);
  }, [end, duration]);
  return <span ref={ref}>{count}</span>;
};

const TextRotator = () => {
  const words = ["Empires", "Solutions", "Future", "Dreams"];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setIndex(i => (i + 1) % words.length), 2500);
    return () => clearInterval(interval);
  }, []);
  return <span className="gradient-text transition-all duration-500 inline-block min-w-[200px]">{words[index]}</span>;
}

const ResumeApplicationForm = ({ defaultPosition = "General Application" }) => {
  const [formData, setFormData] = useState({ name: '', email: '', contact: '', resumeUrl: '', position: defaultPosition });
  const [status, setStatus] = useState('idle');

  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/library/d/12pJoepZnTD7l5aNriy8aprQC4t3QGyy5zVMcD-EOnnhiCldmtuS8zzYT/5";

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    const data = new FormData();
    data.append('formType', 'resume');
    data.append('Name', formData.name);
    data.append('Email', formData.email);
    data.append('Contact', formData.contact);
    data.append('ResumeUrl', formData.resumeUrl);
    data.append('Position', formData.position);

    fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: data,
        mode: "no-cors"
    })
    .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', contact: '', resumeUrl: '', position: defaultPosition });
        setTimeout(() => setStatus('idle'), 5000);
    })
    .catch((error) => {
        console.error('Error!', error.message);
        setStatus('error');
    });
  };

  return (
    <div className="glass-card p-6 md:p-10 rounded-3xl border border-slate-200 bg-white relative overflow-hidden">
       {status === 'success' && (
         <div className="absolute inset-0 bg-white/95 z-20 flex flex-col items-center justify-center text-center p-8 animate-slide-in">
            <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
            <h3 className="text-2xl font-bold text-slate-900">Application Submitted!</h3>
            <p className="text-slate-500 mb-6">Our HR team will review your resume and contact you shortly.</p>
            <Button onClick={() => setStatus('idle')}>Submit Another</Button>
         </div>
       )}

       <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
         <FileText className="text-blue-600"/> Submit Your Application
       </h3>
       
       <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-1 input-group">
                <label className="text-xs font-bold text-slate-500 uppercase">Full Name</label>
                <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none" value={formData.name} onChange={e=>setFormData({...formData, name: e.target.value})} placeholder="Your Name" />
            </div>
            <div className="space-y-1 input-group">
                <label className="text-xs font-bold text-slate-500 uppercase">Contact Number</label>
                <input required type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none" value={formData.contact} onChange={e=>setFormData({...formData, contact: e.target.value})} placeholder="Your Phone Number" />
            </div>
          </div>

          <div className="space-y-1 input-group">
              <label className="text-xs font-bold text-slate-500 uppercase">Email Address</label>
              <input required type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none" value={formData.email} onChange={e=>setFormData({...formData, email: e.target.value})} placeholder="Your Email" />
          </div>

          <div className="space-y-1 input-group">
              <label className="text-xs font-bold text-slate-500 uppercase">Resume Link (Google Drive / LinkedIn)</label>
              <input required type="url" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none" value={formData.resumeUrl} onChange={e=>setFormData({...formData, resumeUrl: e.target.value})} placeholder="https://..." />
              <p className="text-[10px] text-slate-400">Please ensure the link is publicly accessible.</p>
          </div>
          
          <input type="hidden" value={formData.position} />

          <Button primary type="submit" className="w-full" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Submitting...' : 'Apply Now'}
          </Button>
       </form>
    </div>
  );
};

// --- 4. FEATURE COMPONENTS ---

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! Welcome to Hexanx. How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { id: Date.now(), text: input, isBot: false };
    setMessages(prev => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      let botResponse = "Thanks for reaching out! A Hexanx specialist will review your query and reply shortly.";
      const lowerInput = input.toLowerCase();
      
      if (lowerInput.includes("pricing") || lowerInput.includes("cost")) {
        botResponse = "Our SaaS pricing depends on the subscription plan. Would you like to schedule a free demo?";
      } else if (lowerInput.includes("service") || lowerInput.includes("product") || lowerInput.includes("app")) {
        botResponse = "We specialize in enterprise SaaS products like Hexanx OS, Flasto, and Room ERP. Check out our Products section!";
      } else if (lowerInput.includes("location") || lowerInput.includes("raipur")) {
        botResponse = "We are located at Santoshi Nagar, Raipur, Chhattisgarh 492001.";
      }

      setMessages(prev => [...prev, { id: Date.now() + 1, text: botResponse, isBot: true }]);
    }, 1000);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl hover:scale-110 active:scale-95 animate-pulse-glow transition-all duration-300"
      >
        {isOpen ? <X /> : <MessageCircle />}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[500px] animate-slide-in">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center gap-3 text-white">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
              <MessageSquare size={20} />
            </div>
            <div>
              <h4 className="font-bold text-base">Hexanx Support</h4>
              <p className="text-[10px] text-blue-100 flex items-center gap-1">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span> Online
              </p>
            </div>
          </div>
          <div className="flex-1 p-4 overflow-y-auto bg-slate-50 space-y-3">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm shadow-sm ${msg.isBot ? 'bg-white border border-slate-200 text-slate-700 rounded-tl-none' : 'bg-blue-600 text-white rounded-tr-none'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-100 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-blue-500"
            />
            <button type="submit" className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

const ContactForm = () => {
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
    <div className="glass-card p-8 md:p-12 rounded-[2rem] border border-white/60 shadow-2xl relative overflow-hidden bg-white/80">
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

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2 input-group">
            <label className="text-slate-500 text-xs font-bold uppercase tracking-wider ml-1">Your Name</label>
            <input 
              type="text" 
              name="Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
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
              onChange={(e) => setFormData({...formData, email: e.target.value})}
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
            onChange={(e) => setFormData({...formData, service: e.target.value})}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:bg-white transition-all appearance-none cursor-pointer shadow-sm"
          >
            <option>Hexanx OS</option>
            <option>Flasto Restaurant OS</option>
            <option>Room ERP Ecosystem</option>
            <option>Hexanx OS</option>
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
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            className={`w-full bg-slate-50 border ${errors.message ? 'border-red-300' : 'border-slate-200'} rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:bg-white transition-all resize-none shadow-sm`} 
            placeholder="Tell us about your project requirements..."
          ></textarea>
           {errors.message && <p className="text-red-500 text-xs ml-1">{errors.message}</p>}
        </div>

        <Button primary className="w-full h-14 text-lg" type="submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </div>
  );
};

// --- 5. PAGE SECTIONS ---

const TopTicker = () => (
  <div className="bg-slate-900 text-white text-[10px] md:text-xs font-bold py-2 overflow-hidden border-b border-slate-800 z-[60] relative">
    <div className="flex animate-scroll whitespace-nowrap gap-12 w-max items-center">
        {[1,2,3,4].map(i => (
            <React.Fragment key={i}>
                <span className="flex items-center gap-2"><span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> ACCEPTING PROJECTS IN INDIA & WORLDWIDE</span>
                <span className="text-slate-600">|</span>
                <span className="flex items-center gap-2">🇮🇳 PROUDLY MADE IN RAIPUR</span>
                <span className="text-slate-600">|</span>
                <span className="flex items-center gap-2">🚀 ENTERPRISE GRADE SOLUTIONS</span>
                <span className="text-slate-600">|</span>
            </React.Fragment>
        ))}
    </div>
  </div>
);

const TechStack = () => {
  const techs = ["React", "Angular", "Vue.js", "Node.js", "Python", "Flutter", "AWS", "Docker", "Kubernetes", "Firebase", "MongoDB", "PostgreSQL", "Power BI", "Azure", "Terraform"];
  return (
    <div className="py-12 bg-white overflow-hidden relative border-y border-slate-100">
      <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
      <div className="flex animate-scroll whitespace-nowrap gap-16 w-max">
        {[...techs, ...techs].map((tech, i) => (
          <div key={i} className="text-slate-400 font-bold text-2xl uppercase tracking-wider hover:text-blue-600 transition-colors cursor-default flex items-center">
            <span className="w-2 h-2 rounded-full bg-slate-200 mr-4"></span>{tech}
          </div>
        ))}
      </div>
    </div>
  );
};

const About = () => (
  <section className="py-32 bg-slate-50 relative overflow-hidden" id="about">
    <div className="container mx-auto px-6">
      <SectionTitle title="Who We Are" subtitle="About Hexanx" />
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
           <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[2rem] blur-2xl opacity-20"></div>
           <div className="relative glass-card p-10 rounded-[2rem] border border-white/50">
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Pioneering SaaS from Raipur for the World</h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                Founded in the heart of Chhattisgarh, Hexanx is a leading Software-as-a-Service (SaaS) provider. We build and operate powerful, scalable enterprise ecosystems for businesses globally.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg">
                Our suite of products, including Hexanx OS, Flasto, and Room ERP ecosystem, are designed to seamlessly integrate into your business, offering subscription-based models that scale as you grow.
              </p>
           </div>
        </div>
        <div className="space-y-8">
           {[
             { title: "Our Mission", desc: "To empower businesses with scalable, secure, and future-proof digital solutions.", icon: Target, color: "blue" },
             { title: "Our Vision", desc: "To be the most trusted technology partner for enterprises worldwide.", icon: Globe, color: "purple" },
             { title: "Our Values", desc: "Integrity in our code, transparency in our dealings, and excellence in our delivery.", icon: Award, color: "green" }
           ].map((item, i) => (
              <RevealOnScroll key={i} className="flex gap-6 p-6 rounded-2xl bg-white border border-slate-100 hover:shadow-lg transition-all">
                 <div className={`w-14 h-14 bg-${item.color}-50 rounded-xl flex items-center justify-center shrink-0`}>
                    <item.icon className={`w-7 h-7 text-${item.color}-600`} />
                 </div>
                 <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-slate-600">{item.desc}</p>
                 </div>
              </RevealOnScroll>
           ))}
        </div>
      </div>
    </div>
  </section>
);

const WhyChooseUs = () => (
  <section className="py-32 bg-slate-50 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[150px] -z-10 opacity-60"></div>
    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-100 rounded-full blur-[150px] -z-10 opacity-60"></div>
    
    <div className="container mx-auto px-6">
      <SectionTitle title="Why Choose Hexanx" subtitle="Our Advantage" />
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: "Scalable Ecosystems", desc: "Our SaaS products are built to seamlessly integrate with your existing infrastructure and scale globally.", icon: MapPin, color: "blue" },
          { title: "Continuous Innovation", desc: "Through automatic cloud updates, your products become smarter and faster without any manual intervention.", icon: Zap, color: "purple" },
          { title: "Enterprise Security", desc: "Security isn't an afterthought. We employ bank-level encryption and strictly follow zero-trust architecture.", icon: ShieldCheck, color: "green" }
        ].map((item, i) => (
          <RevealOnScroll key={i} className="group p-10 rounded-[2rem] bg-white border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className={`w-16 h-16 bg-${item.color}-50 rounded-2xl flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform duration-300`}>
              <item.icon className={`w-8 h-8 text-${item.color}-600`} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
            <p className="text-slate-600 leading-relaxed text-lg">{item.desc}</p>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  </section>
);

const ProductsShowcase = ({ showTitle = true }) => {
  const navigate = useNavigate();
  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden" id="products">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100 rounded-full blur-[150px] -z-10 opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-purple-100 rounded-full blur-[150px] -z-10 opacity-60"></div>
      <div className="container mx-auto px-6">
        {showTitle && <SectionTitle title="Our Products" subtitle="Enterprise USPs" />}
        
        <div className="space-y-32 mt-16">
          {MOCK_PROJECTS.map((product, i) => (
            <div key={product.id} className={`flex flex-col lg:flex-row gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
               {/* Image Side */}
               <div className="w-full lg:w-1/2 relative group perspective-1000">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
                  <div className="relative bg-white p-4 rounded-[3rem] border border-white shadow-2xl rotate-y-2 hover:rotate-y-0 transition-transform duration-700">
                      <div className="rounded-[2.5rem] overflow-hidden relative aspect-video">
                          <img src={product.image} alt={product.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
                          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                              <div className="flex items-center gap-4">
                                  <span className="px-5 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-bold uppercase tracking-widest">{product.category}</span>
                              </div>
                          </div>
                      </div>
                      
                      {/* Floating Stats */}
                      <div className="absolute -bottom-8 -right-8 glass-card p-6 rounded-3xl shadow-xl border border-white/80 animate-float" style={{animationDelay: `${i}s`}}>
                         <div className="flex flex-col gap-1 text-center">
                            <span className="text-3xl font-black text-slate-900">{Object.values(product.stats)[0]}</span>
                            <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">{Object.keys(product.stats)[0]}</span>
                         </div>
                      </div>
                      <div className="absolute -top-8 -left-8 glass-card p-6 rounded-3xl shadow-xl border border-white/80 animate-float" style={{animationDelay: `${i + 1}s`}}>
                         <div className="flex flex-col gap-1 text-center">
                            <span className="text-2xl font-black text-blue-600">{Object.values(product.stats)[1]}</span>
                            <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">{Object.keys(product.stats)[1]}</span>
                         </div>
                      </div>
                  </div>
               </div>
               
               {/* Content Side */}
               <div className="w-full lg:w-1/2 space-y-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
                      <Star className="w-4 h-4 text-blue-600 fill-current" />
                      <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Featured USP: {product.client}</span>
                  </div>
                  {product.logo ? (
                      <div className="h-16 md:h-24 flex justify-start items-center">
                          <video src={product.logo} autoPlay loop muted playsInline className="h-full w-auto object-contain" />
                      </div>
                  ) : (
                      <h3 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">{product.title}</h3>
                  )}
                  <p className="text-xl text-slate-600 leading-relaxed">{product.description}</p>
                  
                  <div className="grid grid-cols-2 gap-6 pt-6">
                     {product.tags.map(tag => (
                        <div key={tag} className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                           <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                              <CheckCircle2 className="w-5 h-5 text-blue-600" />
                           </div>
                           <span className="font-bold text-slate-700">{tag}</span>
                        </div>
                     ))}
                  </div>
                  
                  <div className="pt-10 flex gap-4">
                     <Button primary onClick={() => navigate('/booking')} className="px-10 py-5 text-sm">
                        Request Demo <ArrowRight className="ml-2 w-5 h-5" />
                     </Button>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const timeoutRef = useRef(null);
  const next = () => setActive((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setActive((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  useEffect(() => {
    timeoutRef.current = setTimeout(next, 6000);
    return () => clearTimeout(timeoutRef.current);
  }, [active]);

  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionTitle title="Client Success Stories" subtitle="Testimonials" />
        <div className="max-w-6xl mx-auto relative">
          <div className="absolute top-1/2 -left-4 md:-left-16 -translate-y-1/2 z-10">
            <button onClick={prev} className="p-4 rounded-full bg-white border border-slate-200 shadow-xl hover:bg-slate-50 transition-colors"><ChevronLeft className="w-6 h-6 text-slate-600" /></button>
          </div>
          <div className="absolute top-1/2 -right-4 md:-right-16 -translate-y-1/2 z-10">
            <button onClick={next} className="p-4 rounded-full bg-white border border-slate-200 shadow-xl hover:bg-slate-50 transition-colors"><ChevronRight className="w-6 h-6 text-slate-600" /></button>
          </div>
          <div className="relative overflow-hidden min-h-[400px]">
            {TESTIMONIALS.map((t, i) => {
              let position = 'translate-x-full opacity-0 scale-95';
              if (i === active) position = 'translate-x-0 opacity-100 scale-100';
              if (i === (active - 1 + TESTIMONIALS.length) % TESTIMONIALS.length) position = '-translate-x-full opacity-0 scale-95';
              return (
                <div key={t.id} className={`absolute top-0 left-0 w-full transition-all duration-700 ease-in-out ${position} px-4`}>
                   <div className="bg-white rounded-[3rem] p-10 md:p-20 border border-slate-100 relative shadow-xl mx-auto max-w-4xl">
                      <div className="absolute top-10 left-10 text-9xl text-blue-100 font-serif leading-none opacity-50 font-black">"</div>
                      <div className="relative z-10 text-center">
                        <div className="flex justify-center gap-1 mb-8">{[1,2,3,4,5].map(s => <Star key={s} className="w-6 h-6 text-yellow-400 fill-current" />)}</div>
                        <p className="text-2xl md:text-4xl font-medium text-slate-800 leading-relaxed mb-10 tracking-tight">
                          {t.content}
                        </p>
                        <div className="flex items-center justify-center gap-6">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">{t.avatar}</div>
                          <div className="text-left">
                            <h5 className="font-bold text-slate-900 text-lg">{t.name}</h5>
                            <p className="text-slate-500">{t.role}</p>
                          </div>
                        </div>
                      </div>
                   </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const BookingSection = ({ showTitle = true }) => {
  const [form, setForm] = useState({ name: '', email: '', service: 'Hexanx OS', date: '', time: '' });
  const [submitted, setSubmitted] = useState(false);

  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwJvNXy6EL1CKjQ6eoKGk13-LDQ8Fo2pHzwGgTYPOPKzOq1zFniQKSbPUki6hO4AN-EaA/exec";

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const data = new FormData();
    data.append('formType', 'booking'); 
    data.append('Name', form.name);
    data.append('Email', form.email);
    data.append('Service', form.service);
    data.append('MeetingDate', form.date);
    data.append('MeetingTime', form.time);

    fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: data,
        mode: "no-cors"
    })
    .then(() => {
        setSubmitted(true);
        setForm({ name: '', email: '', service: 'Hexanx OS', date: '', time: '' });
        setTimeout(() => setSubmitted(false), 5000);
    })
    .catch((error) => console.error('Error!', error.message));
  };

  return (
    <section className="py-32 bg-white" id="booking">
      <div className="container mx-auto px-6">
        {showTitle && <SectionTitle title="Book Your Consultation" subtitle="Schedule A Call" />}
        <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 rounded-[2rem] border border-slate-100 shadow-2xl relative overflow-hidden">
          
           {submitted && (
             <div className="absolute inset-0 bg-white/95 backdrop-blur z-20 flex flex-col items-center justify-center text-center p-8 animate-slide-in">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">Meeting Requested!</h3>
                <p className="text-slate-500 mb-8">We have received your details. Our team will confirm the slot shortly.</p>
                <Button onClick={() => setSubmitted(false)}>Book Another</Button>
             </div>
           )}

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Book a Product Demo</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Schedule a personalized product demonstration with our SaaS implementation experts. We'll show you how Hexanx OS, Flasto, or Room ERP can transform your business operations.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <span className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600"><Lock size={16}/></span>
                  Secure Data Migration Plan
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <span className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-600"><IndianRupee size={16}/></span>
                  Transparent SaaS Pricing
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <span className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600"><Code size={16}/></span>
                  Seamless API Integrations
                </li>
              </ul>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2 input-group">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Your Name</label>
                <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none" placeholder="Your Name" value={form.name} onChange={e=>setForm({...form, name: e.target.value})} />
              </div>
              <div className="space-y-2 input-group">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Product Demo</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none" value={form.service} onChange={e=>setForm({...form, service: e.target.value})}>
                   <option>Hexanx OS</option>
                   <option>Flasto Restaurant OS</option>
                   <option>Room ERP Ecosystem</option>
                   <option>Hexanx OS</option>
                </select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2 input-group">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Preferred Date</label>
                  <input required type="date" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none" value={form.date} onChange={e=>setForm({...form, date: e.target.value})} />
                </div>
                <div className="space-y-2 input-group">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Time</label>
                  <input required type="time" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none" value={form.time} onChange={e=>setForm({...form, time: e.target.value})} />
                </div>
              </div>
              
              <Button primary type="submit" className="w-full mt-4">Confirm Booking</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};


const CTABanner = () => {
    const navigate = useNavigate();
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
            <div className="absolute inset-0 bg-grid opacity-20"></div>
            
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>

            <div className="container mx-auto px-6 relative z-10 text-center text-white">
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">Ready to Scale?</h2>
            <p className="text-2xl text-blue-100 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                Join 50+ enterprise clients who trust <span className="font-bold text-white">Hexanx</span> for their digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button onClick={() => navigate('/contact')} className="px-12 py-5 bg-white text-blue-600 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all shadow-blue-900/20">Get Started Now</button>
                <button onClick={() => navigate('/booking')} className="px-12 py-5 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all">Schedule Call</button>
            </div>
            </div>
        </section>
    );
};

// --- 6. PAGE COMPONENTS ---

const InternshipPage = () => {
  const tracks = [
    { title: "Full-Stack SaaS", icon: Code, desc: "Master MongoDB, Express, React, Node.js.", projects: "Multi-tenant Dashboard, API Gateway" },
    { title: "Mobile SaaS Engineering", icon: Smartphone, desc: "Build cross-platform apps using Flutter/React Native.", projects: "POS App, Delivery Tracker" },
    { title: "UI/UX Design", icon: LayoutDashboard, desc: "Learn Figma, prototyping, and user research.", projects: "Website Redesign, Mobile UI" },
    { title: "Data Analytics", icon: BarChart3, desc: "Python, SQL, and Power BI visualization.", projects: "Sales Dashboard, Stock Predictor" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <PageHeader title="Student Internship Program" subtitle="Launch Your Career" />
      
      <div className="container mx-auto px-6 -mt-16 relative z-10">
        <div className="glass-card p-12 rounded-[3rem] mb-20 text-center relative overflow-hidden border border-white/50">
           <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
           <h3 className="text-4xl font-bold text-slate-900 mb-6">6 Months Industrial Training + Internship</h3>
           <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
             Work on live projects, get mentorship from senior engineers, and earn a 
             <span className="font-bold text-blue-600"> Professional Experience Certificate</span>.
             Top performers get PPO (Pre-Placement Offers).
           </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {tracks.map((t, i) => (
            <RevealOnScroll key={i} className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-2 group">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <t.icon className="w-7 h-7 text-blue-600 group-hover:text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">{t.title}</h4>
              <p className="text-slate-500 text-sm mb-4">{t.desc}</p>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Live Projects:</div>
              <p className="text-sm font-medium text-slate-700">{t.projects}</p>
            </RevealOnScroll>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
            <h3 className="text-center text-3xl font-bold mb-8">Apply for Internship</h3>
            <ResumeApplicationForm defaultPosition="Internship Applicant" />
        </div>
      </div>
    </div>
  );
};

const CareersPage = () => {
  const jobs = [
    { id: 1, title: "Senior React Developer", type: "Full Time", loc: "Remote", exp: "4+ Years", salary: "₹12L - ₹18L PA", skills: ["React", "Redux", "TypeScript"] },
    { id: 2, title: "Backend Engineer (Node/Go)", type: "Full Time", loc: "Raipur", exp: "2+ Years", salary: "₹6L - ₹10L PA", skills: ["Node.js", "MongoDB", "AWS"] },
    { id: 3, title: "UI/UX Designer", type: "Contract", loc: "Remote", exp: "2+ Years", salary: "Project Basis", skills: ["Figma", "Adobe XD"] },
    { id: 4, title: "Business Development Manager", type: "Full Time", loc: "Raipur", exp: "1+ Years", salary: "₹4L - ₹8L PA", skills: ["Sales", "CRM", "English"] },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
       <PageHeader title="Join Our Team" subtitle="Current Openings" />
       
       <div className="container mx-auto px-4 md:px-6 mt-10 lg:-mt-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-6">
              {jobs.map((job) => (
                <div key={job.id} className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all group cursor-pointer">
                   <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                     <div>
                       <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{job.title}</h3>
                       <div className="flex flex-wrap gap-4 text-sm text-slate-500 mt-2">
                          <span className="flex items-center gap-1"><Briefcase size={14}/> {job.type}</span>
                          <span className="flex items-center gap-1"><MapPin size={14}/> {job.loc}</span>
                          <span className="flex items-center gap-1"><Clock size={14}/> {job.exp}</span>
                       </div>
                     </div>
                     <span className="mt-4 md:mt-0 px-4 py-1 bg-green-50 text-green-700 rounded-full text-xs font-bold border border-green-100">{job.salary}</span>
                   </div>
                   <div className="flex flex-wrap gap-2 mb-6">
                      {job.skills.map(s => <span key={s} className="px-2 py-1 bg-slate-50 rounded text-xs font-bold text-slate-500">{s}</span>)}
                   </div>
                   <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-sm text-slate-500 mb-4">
                       Clicking Apply will submit your general profile to our database. Please specify this role in the form below.
                   </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
               <div className="bg-slate-900 text-white p-8 rounded-3xl">
                  <h4 className="text-xl font-bold mb-4">Why Hexanx?</h4>
                  <ul className="space-y-4 text-slate-300">
                    <li className="flex gap-3"><CheckCircle2 className="text-blue-400 shrink-0"/> 5 Days Working</li>
                    <li className="flex gap-3"><CheckCircle2 className="text-blue-400 shrink-0"/> Health Insurance</li>
                    <li className="flex gap-3"><CheckCircle2 className="text-blue-400 shrink-0"/> Performance Bonus</li>
                    <li className="flex gap-3"><CheckCircle2 className="text-blue-400 shrink-0"/> Yearly Trip</li>
                  </ul>
               </div>
               
               <div>
                  <h4 className="font-bold text-slate-900 mb-4">Quick Application</h4>
                  <ResumeApplicationForm defaultPosition="General Career Application" />
               </div>
            </div>
          </div>
       </div>
    </div>
  );
};

const TermsPage = () => (
    <div className="min-h-screen bg-slate-50 pb-20">
        <PageHeader title="Terms of Service" subtitle="Legal" />
        <div className="container mx-auto px-6 max-w-4xl bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm -mt-16 relative z-10 text-slate-600 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">1. Introduction</h3>
            <p>Welcome to Hexanx. By accessing our website and using our services, you agree to comply with these terms.</p>
            <h3 className="text-2xl font-bold text-slate-900">2. SaaS Products</h3>
            <p>We provide software-as-a-service products and subscriptions. All product usage and SLA deliverables are defined in your specific subscription plan.</p>
            <h3 className="text-2xl font-bold text-slate-900">3. Intellectual Property</h3>
            <p>Unless otherwise stated, Hexanx owns the intellectual property rights for all material on Hexanx. All intellectual property rights are reserved.</p>
            <p className="text-sm text-slate-400 italic">Last updated: December 2025</p>
        </div>
    </div>
);

const PrivacyPage = () => (
    <div className="min-h-screen bg-slate-50 pb-20">
        <PageHeader title="Privacy Policy" subtitle="Data Protection" />
        <div className="container mx-auto px-6 max-w-4xl bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm -mt-16 relative z-10 text-slate-600 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">1. Data Collection</h3>
            <p>We collect information you provide directly to us, such as when you fill out a form, request a demo, or apply for a job. This includes Name, Email, and Phone Number.</p>
            <h3 className="text-2xl font-bold text-slate-900">2. Use of Data</h3>
            <p>We use your data to provide, maintain, and improve our services, and to communicate with you about projects and offers.</p>
            <h3 className="text-2xl font-bold text-slate-900">3. Security</h3>
            <p>We implement appropriate technical measures to protect your personal data against unauthorized access.</p>
            <p className="text-sm text-slate-400 italic">Last updated: December 2025</p>
        </div>
    </div>
);





const Footer = () => (
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
           {[{ Icon: Globe, link: "https://www.hexanx.in/" }, 
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
             { name: "About Us", path: "/about"}
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
         <span className="hover:text-white cursor-pointer transition-colors">Sitemap</span>
      </div>
    </div>
  </footer>
);

const Hero = ({ navigateTo }) => (
  <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-white mesh-gradient">
    <style>{styles}</style>
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-grid opacity-60"></div>
    </div>

    <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-20 items-center">
      <div className="space-y-12 animate-slide-in">
        <div className="inline-flex items-center gap-3 px-4 py-2 bg-white rounded-full border border-blue-100 shadow-sm hover:shadow-md transition-shadow cursor-default">
           <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-xs font-bold tracking-wide text-slate-600 uppercase">Serving Enterprises Globally</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-[5.5rem] font-black text-slate-900 leading-[0.95] tracking-tighter">
          SCALING <br/>
          BUSINESS <br/>
          <TextRotator />
        </h1>
        
        <p className="text-2xl text-slate-600 max-w-xl leading-relaxed font-light border-l-4 border-blue-600 pl-8">
          <strong>Empowering India's MSME sector with the next-gen SaaS products.</strong> We build scalable enterprise ecosystems like Hexanx OS, Flasto, Room Yes, and our advanced AI engine, <strong>Ayra AI</strong>.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6">
          <Button primary onClick={() => navigateTo('contact')} className="h-16 px-10 text-lg">
            Start Journey <Rocket className="ml-3 w-5 h-5" />
          </Button>
          <Button onClick={() => navigateTo('work')} className="h-16 px-10 text-lg">
              View Case Studies
          </Button>
        </div>
        
        <div className="grid grid-cols-3 gap-12 pt-10 border-t border-slate-200/60">
          {[
             { num: 50, label: "Clients", icon: Users },
             { num: 99, label: "Success", icon: ShieldCheck },
             { num: 24, label: "Support", icon: Clock }
          ].map((stat, i) => (
             <div key={i}>
                <h4 className="text-4xl font-black text-slate-900 mb-1 flex items-baseline">
                   <CountUp end={stat.num} />
                   <span className="text-blue-600 text-2xl ml-1">+</span>
                </h4>
                <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">{stat.label}</p>
             </div>
          ))}
        </div>
      </div>

      <div className="hidden lg:block relative animate-float perspective-1000">
         <div className="relative z-10 glass-card p-3 rounded-[2.5rem] shadow-2xl rotate-y-12 hover:rotate-y-0 transition-transform duration-700">
            <div className="bg-slate-50 rounded-[2rem] overflow-hidden border border-slate-200 relative aspect-[4/3] flex flex-col shadow-inner">
               <div className="h-14 bg-white border-b border-slate-200 flex items-center px-8 gap-3">
                  <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-red-400"></div><div className="w-3 h-3 rounded-full bg-yellow-400"></div><div className="w-3 h-3 rounded-full bg-green-400"></div></div>
                  <div className="mx-auto bg-slate-100 px-6 py-1.5 rounded-full text-[10px] text-slate-400 font-mono flex items-center gap-2"><ShieldCheck size={10}/> secure | api.hexanx.com</div>
               </div>
               <div className="p-8 grid grid-cols-2 gap-6 bg-slate-50/50 flex-1 relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
                   
                   <div className="col-span-2 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                      <div className="flex justify-between items-center mb-6">
                         <div><h5 className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Total Revenue</h5><h3 className="text-3xl font-bold text-slate-900">₹2,450,900</h3></div>
                         <div className="p-4 bg-green-50 rounded-2xl"><TrendingUp className="text-green-600 w-6 h-6"/></div>
                      </div>
                      <div className="h-24 w-full bg-gradient-to-t from-blue-50 to-transparent rounded-xl border-b border-blue-100 relative overflow-hidden">
                          <div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-between px-2 pb-2">
                              {[40, 70, 50, 90, 60, 80, 50].map((h, i) => (
                                  <div key={i} style={{height: `${h}%`}} className="w-8 bg-blue-500/20 rounded-t-sm"></div>
                              ))}
                          </div>
                      </div>
                   </div>
                   
                   <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between">
                      <div className="p-3 bg-purple-50 rounded-2xl w-fit mb-4"><Users size={20} className="text-purple-600"/></div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-1">+14.2%</h3>
                        <p className="text-xs text-green-500 font-bold uppercase tracking-wide">User Growth</p>
                      </div>
                   </div>
                   
                   <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between">
                      <div className="p-3 bg-orange-50 rounded-2xl w-fit mb-4"><Zap size={20} className="text-orange-600"/></div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-1">24ms</h3>
                        <p className="text-xs text-green-500 font-bold uppercase tracking-wide">Latency</p>
                      </div>
                   </div>
               </div>
            </div>
         </div>
         
         <div className="absolute -left-12 top-1/4 glass-card p-5 rounded-2xl animate-float shadow-xl backdrop-blur-xl border border-white/80" style={{animationDelay: '1s'}}>
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">R</div>
               <div>
                  <p className="text-sm font-bold text-slate-900">New Project</p>
                  <p className="text-xs text-slate-500">2 min ago</p>
               </div>
            </div>
         </div>
         
         <div className="absolute -right-8 bottom-1/3 glass-card p-5 rounded-2xl animate-float shadow-xl backdrop-blur-xl border border-white/80" style={{animationDelay: '2.5s'}}>
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600"><Server size={24}/></div>
                <div>
                   <p className="text-sm font-bold text-slate-900">System Stable</p>
                   <p className="text-xs text-green-600 font-bold">99.99% Uptime</p>
                </div>
             </div>
         </div>
      </div>
    </div>
  </section>
);

const PageSEO = ({ title, description, children }) => (
  <>
    <Helmet>
      <title>{title} | Hexanx IT Solutions</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={window.location.href} />
    </Helmet>
    {children}
  </>
);

// --- 7. MAIN APP COMPONENT ---

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/internships', label: 'Internships' },
    { path: '/careers', label: 'Careers' },
    { path: '/booking', label: 'Book Call' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-500 selection:text-white">
      

      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'nav-scrolled py-3' : 'bg-transparent py-5'} top-0`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          
          <Link to="/" className="text-2xl font-bold flex items-center group">
            <div className="w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center mr-3 group-hover:scale-105 transition-transform">
              <img src="/logo.png" alt="Hexanx" className="w-8 h-8 object-contain" />
            </div>
            <span className="tracking-tight text-slate-900 font-extrabold text-xl">Hexanx</span>
          </Link>

          <div className="hidden lg:flex items-center space-x-2">
            <div className={`rounded-full px-2 py-1.5 mr-6 flex transition-all ${scrolled ? 'bg-slate-100/80' : 'bg-white/90 backdrop-blur-xl border border-white/50 shadow-lg'}`}>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-all duration-300 ${location.pathname === link.path ? 'bg-slate-900 text-white shadow-md transform scale-105' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200/50'}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Button className="py-3 px-6 text-sm font-bold !rounded-full shadow-xl hover:shadow-2xl" primary onClick={() => navigate('/booking')}>Book Meeting</Button>
          </div>

          <button className="lg:hidden text-slate-900 p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-100 p-6 flex flex-col space-y-4 shadow-2xl lg:hidden animate-slide-in">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className="text-left py-4 px-6 rounded-2xl font-bold text-lg bg-slate-50 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <style>{styles}</style>

      <main>
        <Routes>
          <Route path="/" element={
            <PageSEO title="Home" description="Hexanx is an enterprise SaaS company providing scalable ecosystems like Hexanx OS and Flasto.">
              <Hero navigateTo={(path) => navigate('/' + path)} />
              
              <About />
              <WhyChooseUs />
              <ProductsShowcase />
              <BookingSection />
              <Testimonials />
              <CTABanner />
            </PageSEO>
          } />

          <Route path="/about" element={
            <PageSEO title="About Us" description="Learn about Hexanx's mission to transform businesses in Chhattisgarh and beyond.">
              <PageHeader title="Who We Are" subtitle="About Us" />
              <About />
              <WhyChooseUs />
            </PageSEO>
          } />

          <Route path="/products" element={
            <PageSEO title="Products" description="Enterprise SaaS Implementation, Automation, and Ecosystem Products.">
              <PageHeader title="Our Products" subtitle="SaaS Solutions" />
              <ProductsShowcase showTitle={false} />
            </PageSEO>
          } />

          <Route path="/careers" element={
            <PageSEO title="Careers" description="Join the Hexanx team. View open positions for Developers and Designers.">
              <CareersPage />
            </PageSEO>
          } />

          <Route path="/internships" element={
            <PageSEO title="Internship Program" description="Apply for 6 Month Industrial Training and Internship at Hexanx.">
              <InternshipPage />
            </PageSEO>
          } />


          
          <Route path="/booking" element={ 
            <PageSEO title="Book a Meeting" description="Schedule a consultation with our technical team.">
              <PageHeader title="Schedule Consultation" subtitle="Book Now" />
              <BookingSection showTitle={false} />
            </PageSEO>
          } />

          <Route path="/contact" element={
            <PageSEO title="Contact Us" description="Book a product demo or consultation for our SaaS solutions.">
              <PageHeader title="Get In Touch" subtitle="Contact Us" />
               <section className="pt-20 pb-20 bg-slate-50">
                  <div className="container mx-auto px-6">
                     <div className="max-w-4xl mx-auto"><ContactForm /></div>
                  </div>
               </section>
            </PageSEO>
          } />

          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />

        </Routes>
      </main>

      <Footer />
      <ChatBot />
    </div>
  );
}
