import React, { useState, useEffect, useRef } from 'react';
import { 
  Code, BarChart3, Smartphone, LayoutDashboard, Database, Server, 
  Stethoscope, Globe, Menu, X, ArrowRight, Mail, MapPin, Phone, 
  CheckCircle2, Zap, Rocket, Layers, ChevronRight, Cpu, 
  Briefcase, Users, MessageSquare, Star, ChevronLeft, ChevronDown,
  ExternalLink, Calendar, Clock, Award, ShieldCheck, Search, Send, 
  MessageCircle, Linkedin, Facebook, Instagram, Terminal,
  TrendingUp, Target, Lightbulb, Map, Youtube, Bell, Lock, DollarSign,
  HeartHandshake
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

  .glass-card-hover::before {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0; height: 4px;
    background: linear-gradient(90deg, #2563eb, #ec4899);
    opacity: 0;
    transition: opacity 0.3s;
  }

  .glass-card-hover:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px -12px rgba(37, 99, 235, 0.15);
    border-color: rgba(37, 99, 235, 0.3);
  }

  .glass-card-hover:hover::before {
    opacity: 1;
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

// UPDATED PROJECT LIST
const MOCK_PROJECTS = [
  {
    id: 1, title: "MedCare Pro System", category: "app",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    client: "Apollo Pharmacy", tags: ["Flutter", "Node.js"], description: "Complete inventory and billing mobile application.", stats: { users: "10k+", uptime: "99.9%" }
  },
  {
    id: 2, title: "Global News Portal", category: "web",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800",
    client: "Daily Times", tags: ["WordPress", "PHP", "AMP"], description: "High-traffic news website with ad integration and CMS.", stats: { views: "1M/mo", speed: "0.8s" }
  },
  {
    id: 3, title: "Steel Plant ERP", category: "erp",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    client: "Tata Steel Sub", tags: ["Angular", ".NET", "SQL"], description: "End-to-end ERP solution managing supply chain and shifts.", stats: { efficiency: "+45%" }
  },
  {
    id: 4, title: "AutoBot AI Customer Support", category: "ai",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    client: "TechSolutions", tags: ["Python", "OpenAI API", "React"], description: "Automated customer service bot handling 80% of queries.", stats: { savings: "60%" }
  },
  {
    id: 5, title: "E-Kart Multi-Vendor", category: "web",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800",
    client: "RetailHub", tags: ["MERN Stack", "Stripe"], description: "Scalable e-commerce platform with admin dashboard.", stats: { sales: "$50k/mo" }
  },
  {
    id: 6, title: "CRM Automation Suite", category: "erp",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    client: "SalesForce Team", tags: ["Vue.js", "Firebase"], description: "Lead tracking and automated follow-up system.", stats: { leads: "+200%" }
  },
  {
    id: 7, title: "Smart Home Hub (Coming Soon)", category: "iot",
    image: "https://images.unsplash.com/photo-1558002038-10917738179d?auto=format&fit=crop&q=80&w=800",
    client: "Future Homes", tags: ["IoT", "Embedded C"], description: "Next-gen smart device controller.", stats: { status: "In Dev" }
  }
];

const TESTIMONIALS = [
  { id: 1, name: "Amit Verma", role: "Owner, Verma Textiles", content: "We needed a custom inventory system. Hexanx delivered a solution that perfectly fits our workflow.", avatar: "AV" },
  { id: 2, name: "Sneha Gupta", role: "Founder, GreenLeaf", content: "Their team built our e-commerce store from scratch. The design is beautiful and sales have increased.", avatar: "SG" },
  { id: 3, name: "Rohan Mehta", role: "Director, Mehta Transport", content: "Managing our fleet was a headache until Hexanx built our logistics dashboard. Excellent service.", avatar: "RM" }
];

const FAQS = [
  { q: "Do you provide post-launch support?", a: "Yes, we offer 6 months of free critical support with every enterprise project." },
  { q: "What technologies do you specialize in?", a: "MERN Stack, Flutter, Python, .NET, WordPress, and AI Integration." },
  { q: "Can you take over an existing project?", a: "Absolutely. We specialize in legacy modernization and code optimization." }
];

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

const SectionTitle = ({ title, subtitle, center = true }) => (
  <RevealOnScroll className={`mb-20 ${center ? 'text-center' : 'text-left'}`}>
    <div className={`inline-flex items-center px-4 py-2 rounded-full bg-white border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6 shadow-md ${center ? 'mx-auto' : ''}`}>
      <span className="w-2 h-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
      {subtitle}
    </div>
    <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight">
      {title.split(" ").map((word, i) => (
        <span key={i} className={i === 1 ? "gradient-text" : ""}>
          {word} 
        </span>
      ))}
    </h2>
    <div className={`h-2 w-24 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mt-8 ${center ? 'mx-auto' : ''}`}></div>
  </RevealOnScroll>
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

const ApplicationModal = ({ isOpen, onClose, role, type = "Job" }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', resume: '' });
  const [status, setStatus] = useState('idle');
  // ⚠️⚠️⚠️ THIS IS YOUR GOOGLE SCRIPT URL ⚠️⚠️⚠️
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwJvNXy6EL1CKjQ6eoKGk13-LDQ8Fo2pHzwGgTYPOPKzOq1zFniQKSbPUki6hO4AN-EaA/exec";

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    const data = new FormData();
    data.append('formType', 'application'); 
    data.append('Name', form.name);
    data.append('Email', form.email);
    data.append('Phone', form.phone);
    data.append('Role', role);
    data.append('Resume', form.resume);

    fetch(GOOGLE_SCRIPT_URL, { method: "POST", body: data, mode: "no-cors" })
    .then(() => {
        setStatus('success');
        setTimeout(() => { setStatus('idle'); onClose(); setForm({ name: '', email: '', phone: '', resume: '' }) }, 3000);
    })
    .catch(() => setStatus('error'));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Apply for ${role}`}>
       {status === 'success' ? (
          <div className="text-center py-10">
             <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"><CheckCircle2 className="text-green-600 w-10 h-10"/></div>
             <h3 className="text-2xl font-bold text-slate-900">Application Sent!</h3>
             <p className="text-slate-500 mt-2">Our HR team will review your resume.</p>
          </div>
       ) : (
         <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
               <div className="input-group"><label className="text-xs font-bold text-slate-500">Full Name</label><input required className="w-full border border-slate-200 rounded-xl px-4 py-3 bg-slate-50 focus:outline-none" value={form.name} onChange={e=>setForm({...form, name: e.target.value})} placeholder="John Doe"/></div>
               <div className="input-group"><label className="text-xs font-bold text-slate-500">Phone</label><input required className="w-full border border-slate-200 rounded-xl px-4 py-3 bg-slate-50 focus:outline-none" value={form.phone} onChange={e=>setForm({...form, phone: e.target.value})} placeholder="+91 98765 43210"/></div>
            </div>
            <div className="input-group"><label className="text-xs font-bold text-slate-500">Email</label><input required type="email" className="w-full border border-slate-200 rounded-xl px-4 py-3 bg-slate-50 focus:outline-none" value={form.email} onChange={e=>setForm({...form, email: e.target.value})} placeholder="john@example.com"/></div>
            <div className="input-group">
               <label className="text-xs font-bold text-slate-500">Resume Link (GDrive/LinkedIn)</label>
               <div className="flex items-center bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus-within:ring-2 ring-blue-100">
                  <ExternalLink size={18} className="text-slate-400 mr-2"/>
                  <input required type="url" className="bg-transparent w-full focus:outline-none" value={form.resume} onChange={e=>setForm({...form, resume: e.target.value})} placeholder="https://docs.google.com/..."/>
               </div>
            </div>
            <Button primary type="submit" className="w-full mt-4" disabled={status === 'submitting'}>{status === 'submitting' ? 'Sending...' : 'Submit Application'}</Button>
         </form>
       )}
    </Modal>
  );
};

// --- Helper for scroll animations ---
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

// --- Helper for Number Counting ---
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

// --- Helper for Text Rotating ---
const TextRotator = () => {
  const words = ["Empires", "Solutions", "Future", "Dreams"];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setIndex(i => (i + 1) % words.length), 2500);
    return () => clearInterval(interval);
  }, []);
  return <span className="gradient-text transition-all duration-500 inline-block min-w-[200px]">{words[index]}</span>;
}

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
        botResponse = "Our pricing depends on the project scope. Would you like to schedule a free consultation?";
      } else if (lowerInput.includes("service") || lowerInput.includes("web") || lowerInput.includes("app")) {
        botResponse = "We specialize in high-end Web & App development. Check out our Services section for more details!";
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
  const [formData, setFormData] = useState({ name: '', email: '', service: 'Web Development', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  // YOUR SPECIFIC GOOGLE SCRIPT URL
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
      data.append('formType', 'contact'); // Tell script this is a contact form
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
        setFormData({ name: '', email: '', service: 'Web Development', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      })
      .catch((error) => {
        console.error('Error!', error.message);
        setStatus('success'); 
        setFormData({ name: '', email: '', service: 'Web Development', message: '' });
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
          <label className="text-slate-500 text-xs font-bold uppercase tracking-wider ml-1">Service Interested In</label>
          <select 
            name="Service"
            value={formData.service}
            onChange={(e) => setFormData({...formData, service: e.target.value})}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:bg-white transition-all appearance-none cursor-pointer shadow-sm"
          >
            <option>Web Development</option>
            <option>App Development</option>
            <option>Power BI Dashboard</option>
            <option>ERP / HRMS Software</option>
            <option>Legacy Modernization</option>
            <option>DevOps & Cloud</option>
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
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Innovating from Raipur for the World</h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                Founded in the heart of Chhattisgarh, Hexanx has grown from a small team of passionate coders to a premier IT consultancy serving enterprise clients across India and beyond.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg">
                We believe in the power of technology to transform businesses. Whether it's a complex ERP system or a high-performance mobile app, we bring the same level of dedication and engineering excellence to every project.
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
          { title: "Local Presence, Global Quality", desc: "Based in Raipur, we deliver world-class software standards with local accessibility and trust.", icon: MapPin, color: "blue" },
          { title: "Agile Methodology", desc: "We use iterative development to ensure you see progress every week, not just at the deadline.", icon: Zap, color: "purple" },
          { title: "Enterprise Security", desc: "Security isn't an afterthought. We build with OWASP top 10 standards from day one.", icon: ShieldCheck, color: "green" }
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

const PortfolioSection = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = filter === 'all' 
    ? MOCK_PROJECTS 
    : MOCK_PROJECTS.filter(p => p.category === filter || p.category === 'iot'); // Include IoT in all

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'app', label: 'Mobile Apps' },
    { id: 'erp', label: 'ERP/CRM' },
    { id: 'ai', label: 'AI & Automation' },
  ];

  return (
    <section className="py-32 bg-white relative" id="portfolio">
      <div className="container mx-auto px-6">
        <SectionTitle title="Our Recent Work" subtitle="Case Studies" />
        
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                filter === cat.id 
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30 scale-105" 
                  : "bg-slate-50 text-slate-600 border border-slate-200 hover:bg-white hover:shadow-md"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              onClick={() => project.category !== 'iot' && setSelectedProject(project)}
              className={`group bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 ${project.category === 'iot' ? 'opacity-90 cursor-default' : 'cursor-pointer hover:-translate-y-2'}`}
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={`w-full h-full object-cover transition-transform duration-700 ${project.category !== 'iot' ? 'group-hover:scale-110' : ''}`}
                />
                
                {project.category === 'iot' ? (
                   <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm flex flex-col items-center justify-center">
                      <Lock className="text-white w-12 h-12 mb-2"/>
                      <span className="text-white font-bold text-xl uppercase tracking-widest border-2 border-white px-6 py-2 rounded-full">Coming Soon</span>
                   </div>
                ) : (
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                     <span className="text-white font-bold flex items-center gap-2 text-lg">View Case Study <ArrowRight size={20}/></span>
                   </div>
                )}

                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-blue-600 shadow-lg">
                  {project.category}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                <p className="text-slate-500 text-sm line-clamp-2 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-xs text-slate-500 font-bold">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} title={selectedProject?.title}>
        {selectedProject && (
          <div className="space-y-8">
            <div className="rounded-2xl overflow-hidden h-64 md:h-96 w-full relative shadow-lg">
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
            </div>
            <div className="grid md:grid-cols-3 gap-10">
              <div className="md:col-span-2 space-y-8">
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Project Overview</h4>
                  <p className="text-slate-600 leading-relaxed text-lg">{selectedProject.description}</p>
                </div>
                <div>
                   <h4 className="text-xl font-bold text-slate-900 mb-3">Tech Stack</h4>
                   <div className="flex flex-wrap gap-3">
                      {selectedProject.tags.map(t => <Badge key={t} text={t} color="blue" />)}
                   </div>
                </div>
              </div>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 h-fit shadow-sm">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6">Key Performance Metrics</h4>
                <div className="space-y-6">
                  {Object.entries(selectedProject.stats).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center border-b border-slate-200 pb-4 last:border-0">
                      <span className="text-slate-600 capitalize font-medium">{key}</span>
                      <span className="font-bold text-slate-900 text-lg">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-4 pt-6 border-t border-slate-100">
               <Button onClick={() => setSelectedProject(null)}>Close</Button>
               <Button primary>Start Similar Project</Button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

// --- UPDATED CTA BANNER (FIXED LINKS) ---
const CTABanner = () => {
  const navigate = useNavigate();
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      
      {/* Floating Shapes */}
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

// --- LEGAL PAGES ---
const PrivacyPolicy = () => (
  <div className="pt-32 pb-20 min-h-screen bg-white">
     <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-lg text-slate-600">
           <p className="mb-4">Last updated: December 2025</p>
           <p className="mb-4">At Hexanx, we value your privacy. This policy explains how we handle your data.</p>
           <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Information We Collect</h3>
           <p className="mb-4">We collect information you provide directly to us via contact forms, job applications, or meeting bookings. This includes Name, Email, Phone Number, and Project Details.</p>
           <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. How We Use Information</h3>
           <p className="mb-4">To respond to inquiries, schedule meetings, and evaluate job applications. We do not sell your data to third parties.</p>
        </div>
     </div>
  </div>
);

const TermsOfService = () => (
  <div className="pt-32 pb-20 min-h-screen bg-white">
     <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-lg text-slate-600">
           <p className="mb-4">By accessing the Hexanx website, you agree to these terms.</p>
           <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Services</h3>
           <p className="mb-4">Hexanx provides software development services. Project terms are defined in separate contracts per client.</p>
           <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Intellectual Property</h3>
           <p className="mb-4">All content on this website is the property of Hexanx unless otherwise stated.</p>
        </div>
     </div>
  </div>
);

// --- UPDATED FOOTER (FIXED LINKS & EMAIL) ---
const Footer = () => (
  <footer className="bg-slate-950 text-slate-400 pt-32 pb-10 relative z-10 border-t border-slate-900">
    <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 mb-20">
      <div className="col-span-1 md:col-span-2">
        <h2 className="text-4xl font-bold text-white mb-8 flex items-center">
          <img src="/logo.png" alt="Hexanx Logo" className="w-12 h-12 object-contain mr-4 bg-white rounded-xl p-1" />
          Hexanx
        </h2>
        <p className="max-w-md text-lg leading-relaxed mb-10 text-slate-500 font-light">
          Transforming businesses through innovative IT solutions. Based in Raipur, serving the world.
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
            { label: "Services", path: "/services" },
            { label: "Portfolio", path: "/work" },
            { label: "Book Call", path: "/booking" },
            { label: "Careers", path: "/careers" },
            { label: "About Us", path: "/about" }
          ].map((item, i) => (
             <li key={i}>
                <Link to={item.path} className="hover:text-blue-400 cursor-pointer transition-colors flex items-center group">
                   <ChevronRight size={16} className="mr-2 text-slate-700 group-hover:text-blue-500 transition-colors"/> {item.label}
                </Link>
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
             <span>contact@hexanx.in</span>
          </li>
        </ul>
      </div>
    </div>
    
    <div className="container mx-auto px-6 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600">
      <p>&copy; {new Date().getFullYear()} Hexanx IT Solutions. All rights reserved.</p>
      <div className="flex gap-8 mt-4 md:mt-0">
         <Link to="/privacy" className="hover:text-white cursor-pointer transition-colors">Privacy Policy</Link>
         <Link to="/terms" className="hover:text-white cursor-pointer transition-colors">Terms of Service</Link>
         <span className="hover:text-white cursor-pointer transition-colors">Sitemap</span>
      </div>
    </div>
  </footer>
);

// --- 6. NEW PAGE COMPONENTS ---

// INTERNSHIP PAGE
const InternshipPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');

  const handleApply = (role) => {
    setSelectedRole(role);
    setModalOpen(true);
  };

  const tracks = [
    { title: "MERN Stack", icon: Code, desc: "Master MongoDB, Express, React, Node.js.", projects: "E-commerce, Social Media App" },
    { title: "App Development", icon: Smartphone, desc: "Build cross-platform apps using Flutter/React Native.", projects: "Delivery App, Chat App" },
    { title: "UI/UX Design", icon: LayoutDashboard, desc: "Learn Figma, prototyping, and user research.", projects: "Website Redesign, Mobile UI" },
    { title: "Data Analytics", icon: BarChart3, desc: "Python, SQL, and Power BI visualization.", projects: "Sales Dashboard, Stock Predictor" }
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50">
      <div className="container mx-auto px-6">
        <SectionTitle title="Student Internship Program" subtitle="Launch Your Career" />
        
        {/* Hero Section of Internship */}
        <div className="glass-card p-12 rounded-[3rem] mb-20 text-center relative overflow-hidden border border-white/50 animate-slide-in">
           <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
           <h3 className="text-4xl font-bold text-slate-900 mb-6">6 Months Industrial Training + Internship</h3>
           <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
             Work on live projects, get mentorship from senior engineers, and earn a 
             <span className="font-bold text-blue-600"> Professional Experience Certificate</span>.
             Top performers get PPO (Pre-Placement Offers).
           </p>
           <Button primary onClick={() => handleApply("Industrial Training Batch")}>Apply for Batch 2025</Button>
        </div>

        {/* Tracks */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {tracks.map((t, i) => (
            <RevealOnScroll key={i} className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-2 group cursor-pointer" onClick={() => handleApply(t.title + " Internship")}>
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

        {/* Why Join */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
           {[
             { title: "100% Practical", desc: "No boring theory. You code from Day 1." },
             { title: "Code Reviews", desc: "Get your code reviewed by industry experts." },
             { title: "Job Assistance", desc: "We help refine your resume and portfolio." }
           ].map((item, i) => (
             <div key={i} className="p-6">
                <div className="text-4xl mb-4">🚀</div>
                <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                <p className="text-slate-500">{item.desc}</p>
             </div>
           ))}
        </div>
      </div>
      <ApplicationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} role={selectedRole} type="Internship" />
    </div>
  );
};

// CAREERS PAGE
const CareersPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');

  const handleApply = (role) => {
    setSelectedRole(role);
    setModalOpen(true);
  };

  const jobs = [
    { id: 1, title: "Senior React Developer", type: "Full Time", loc: "Remote", exp: "4+ Years", salary: "₹12L - ₹18L PA", skills: ["React", "Redux", "TypeScript"] },
    { id: 2, title: "Backend Engineer (Node/Go)", type: "Full Time", loc: "Raipur", exp: "2+ Years", salary: "₹6L - ₹10L PA", skills: ["Node.js", "MongoDB", "AWS"] },
    { id: 3, title: "UI/UX Designer", type: "Contract", loc: "Remote", exp: "2+ Years", salary: "Project Basis", skills: ["Figma", "Adobe XD"] },
    { id: 4, title: "Business Development Manager", type: "Full Time", loc: "Raipur", exp: "1+ Years", salary: "₹4L - ₹8L PA", skills: ["Sales", "CRM", "English"] },
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50">
       <div className="container mx-auto px-6">
          <SectionTitle title="Join Our Team" subtitle="Current Openings" />
          
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Job List */}
            <div className="lg:col-span-2 space-y-6">
              {jobs.map((job) => (
                <div key={job.id} className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all group cursor-pointer">
                   <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{job.title}</h3>
                        <div className="flex gap-4 text-sm text-slate-500 mt-2">
                           <span className="flex items-center gap-1"><Briefcase size={14}/> {job.type}</span>
                           <span className="flex items-center gap-1"><MapPin size={14}/> {job.loc}</span>
                           <span className="flex items-center gap-1"><Clock size={14}/> {job.exp}</span>
                        </div>
                      </div>
                      <span className="px-4 py-1 bg-green-50 text-green-700 rounded-full text-xs font-bold border border-green-100">{job.salary}</span>
                   </div>
                   <div className="flex flex-wrap gap-2 mb-6">
                      {job.skills.map(s => <span key={s} className="px-2 py-1 bg-slate-50 rounded text-xs font-bold text-slate-500">{s}</span>)}
                   </div>
                   <Button className="w-full md:w-auto h-10 text-sm" onClick={() => handleApply(job.title)}>Apply Now</Button>
                </div>
              ))}
            </div>

            {/* Culture Sidebar */}
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
               <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-3xl text-center">
                  <h4 className="text-xl font-bold mb-2">Can't find a role?</h4>
                  <p className="text-blue-100 mb-6 text-sm">Send your resume, we are always looking for talent.</p>
                  <Button className="bg-white text-blue-600 w-full border-none hover:bg-blue-50" onClick={() => handleApply("General Application")}>Email HR</Button>
               </div>
            </div>
          </div>
       </div>
       <ApplicationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} role={selectedRole} type="Job" />
    </div>
  );
};

// DEMO PAGE (Interactive Dashboard Showcase & Roadmap)
const DemoPage = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-900 text-white overflow-hidden">
       <div className="container mx-auto px-6">
          <SectionTitle title="Live Product Demo" subtitle="Hexanx Dashboard Engine" />
          <p className="text-center text-slate-400 mb-12 -mt-10 max-w-2xl mx-auto">
            This is a fully interactive React component demonstrating our capability to build complex, data-driven dashboards.
          </p>

          <div className="max-w-6xl mx-auto bg-slate-800 rounded-[2rem] border border-slate-700 shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px] mb-32">
             {/* Fake Sidebar */}
             <div className="w-full md:w-64 bg-slate-900/50 border-r border-slate-700 p-6 flex flex-col gap-2">
                <div className="flex items-center gap-3 mb-8 px-2">
                   <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
                   <span className="font-bold">Admin Panel</span>
                </div>
                {['Overview', 'Analytics', 'Customers', 'Settings'].map((item, i) => (
                   <div key={i} className={`p-3 rounded-xl cursor-pointer flex items-center gap-3 ${i === 0 ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-800'}`}>
                      <LayoutDashboard size={18} /> {item}
                   </div>
                ))}
             </div>

             {/* Main Content */}
             <div className="flex-1 p-8 bg-slate-800">
                <div className="flex justify-between items-center mb-8">
                   <h3 className="text-2xl font-bold">Dashboard Overview</h3>
                   <div className="flex gap-3">
                      <button className="p-2 bg-slate-700 rounded-lg hover:bg-slate-600"><Search size={18} /></button>
                      <button className="p-2 bg-slate-700 rounded-lg hover:bg-slate-600"><Bell size={18} /></button>
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500"></div>
                   </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                   {[
                     { label: "Total Revenue", val: "$45,231.89", change: "+20.1%", color: "text-green-400" },
                     { label: "Active Users", val: "+2350", change: "+180.1%", color: "text-green-400" },
                     { label: "Server Load", val: "34%", change: "-5%", color: "text-blue-400" },
                   ].map((stat, i) => (
                      <div key={i} className="bg-slate-700/50 p-6 rounded-2xl border border-slate-600 hover:bg-slate-700 transition-colors">
                         <p className="text-slate-400 text-sm font-medium mb-1">{stat.label}</p>
                         <h4 className="text-3xl font-bold mb-1">{stat.val}</h4>
                         <span className={`text-xs ${stat.color}`}>{stat.change} from last month</span>
                      </div>
                   ))}
                </div>

                {/* Chart Area */}
                <div className="grid md:grid-cols-3 gap-6 h-64">
                   <div className="md:col-span-2 bg-slate-700/50 rounded-2xl border border-slate-600 p-6 flex items-end justify-between gap-2">
                      {[30, 50, 45, 80, 60, 90, 70, 40, 60, 80, 50, 70].map((h, i) => (
                         <div key={i} style={{height: `${h}%`}} className="w-full bg-blue-600/50 rounded-t hover:bg-blue-500 transition-colors cursor-pointer relative group">
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">{h}%</div>
                         </div>
                      ))}
                   </div>
                   <div className="bg-slate-700/50 rounded-2xl border border-slate-600 p-6">
                      <h5 className="font-bold mb-4">Recent Activity</h5>
                      <div className="space-y-4">
                         {[1,2,3].map(i => (
                            <div key={i} className="flex gap-3 items-center">
                               <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                               <div className="text-sm">
                                  <p className="text-slate-200">New user registered</p>
                                  <p className="text-xs text-slate-500">2 mins ago</p>
                               </div>
                            </div>
                         ))}
                      </div>
                   </div>
                </div>
             </div>
          </div>
          
          {/* UPDATED: Development Roadmap Section */}
          <div className="max-w-5xl mx-auto">
             <div className="text-center mb-16">
               <h3 className="text-3xl md:text-5xl font-bold mb-4">Development Lifecycle</h3>
               <p className="text-slate-400 text-lg">How we bring your idea to life</p>
             </div>
             
             <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-500 before:to-transparent">
                {[
                  { 
                    step: "01", title: "Architecture & RBAC", 
                    desc: "We start by setting up a secure Project Structure. We implement Role-Based Access Control (RBAC) to ensure Admins, Users, and Managers have strictly separated permissions.",
                    icon: Lock 
                  },
                  { 
                    step: "02", title: "Embedded Development", 
                    desc: "Core feature development using high-performance component architecture. We ensure all external APIs and microservices are deeply embedded for speed.",
                    icon: Cpu 
                  },
                  { 
                    step: "03", title: "SEO & Monetization", 
                    desc: "Post-development, we handle the technical SEO Setup (Meta tags, Sitemap, SSR) and integrate AdSense Management for revenue generation immediately after launch.",
                    icon: DollarSign 
                  },
                  { 
                    step: "04", title: "Launch & Support", 
                    desc: "After deployment, we provide 1 Month of Free Maintenance for all new customers to ensure a bug-free experience and smooth handover.",
                    icon: HeartHandshake 
                  }
                ].map((phase, i) => (
                  <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-900 group-[.is-active]:bg-blue-600 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                         <phase.icon size={18}/>
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-800 p-6 rounded-3xl border border-slate-700 shadow-xl">
                         <div className="flex items-center justify-between space-x-2 mb-2">
                           <div className="font-bold text-slate-200">{phase.title}</div>
                           <div className="font-mono text-xs text-slate-500">{phase.step}</div>
                         </div>
                         <div className="text-slate-400 text-sm leading-relaxed">{phase.desc}</div>
                      </div>
                  </div>
                ))}
             </div>
          </div>

       </div>
    </div>
  );
};

// SEO WRAPPER COMPONENT
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

  // Helper to scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/work', label: 'Work' },
    { path: '/internships', label: 'Internships' },
    { path: '/careers', label: 'Careers' },
    { path: '/demo', label: 'Live Demo' },
    { path: '/booking', label: 'Book Call' }, // RENAMED FROM PRICING
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-500 selection:text-white">
      <TopTicker />

      {/* --- NAVIGATION WITH REAL LINKS --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'nav-scrolled py-3' : 'bg-transparent py-5'} top-[33px]`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold flex items-center group">
            <div className="w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center mr-3 group-hover:scale-105 transition-transform">
              <img src="/logo.png" alt="Hexanx" className="w-8 h-8 object-contain" />
            </div>
            <span className="tracking-tight text-slate-900 font-extrabold text-xl">Hexanx</span>
          </Link>

          {/* Desktop Menu */}
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

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-slate-900 p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
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

      {/* --- ROUTES --- */}
      <main>
        <Routes>
          <Route path="/" element={
            <PageSEO title="Home" description="Hexanx is Raipur's premier IT consultancy for Enterprise Software and Web Development.">
              <Hero navigateTo={(path) => navigate('/' + path)} />
              <TechStack />
              <About />
              <WhyChooseUs />
              <Services />
              <PortfolioSection />
              <BookingSection /> {/* Replaced Pricing with Booking here too */}
              <Testimonials />
              <CTABanner />
              <FAQ />
            </PageSEO>
          } />

          <Route path="/about" element={
            <PageSEO title="About Us" description="Learn about Hexanx's mission to transform businesses in Chhattisgarh and beyond.">
              <About />
              <WhyChooseUs />
            </PageSEO>
          } />

          <Route path="/services" element={
            <PageSEO title="Services" description="Web Development, App Development, and ERP Solutions in Raipur.">
              <Services />
              <CTABanner />
            </PageSEO>
          } />

          <Route path="/work" element={
            <PageSEO title="Portfolio" description="Check out our recent projects and case studies.">
              <PortfolioSection />
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

          <Route path="/demo" element={
            <PageSEO title="Live Demo" description="Experience our interactive dashboard technology live.">
              <DemoPage />
            </PageSEO>
          } />
          
          <Route path="/booking" element={ // NEW ROUTE
            <PageSEO title="Book a Meeting" description="Schedule a consultation with our technical team.">
              <BookingSection />
            </PageSEO>
          } />

          <Route path="/contact" element={
            <PageSEO title="Contact Us" description="Get a quote for your project. Visit us at Santoshi Nagar, Raipur.">
               <section className="pt-40 pb-20 bg-slate-50">
                  <div className="container mx-auto px-6">
                     <SectionTitle title="Start Your Project" subtitle="Get In Touch" />
                     <div className="max-w-4xl mx-auto"><ContactForm /></div>
                  </div>
               </section>
            </PageSEO>
          } />

          <Route path="/privacy" element={
            <PageSEO title="Privacy Policy" description="Hexanx Privacy Policy">
               <PrivacyPolicy />
            </PageSEO>
          } />

          <Route path="/terms" element={
            <PageSEO title="Terms of Service" description="Hexanx Terms of Service">
               <TermsOfService />
            </PageSEO>
          } />
        </Routes>
      </main>

      <Footer />
      <ChatBot />
    </div>
  );
}
