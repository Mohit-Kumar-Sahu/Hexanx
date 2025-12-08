import React, { useState, useEffect, useRef } from 'react';
import { 
  Code, BarChart3, Smartphone, LayoutDashboard, Database, Server, 
  Stethoscope, Globe, Menu, X, ArrowRight, Mail, MapPin, Phone, 
  CheckCircle2, Zap, Rocket, Layers, ChevronRight, Cpu, 
  Briefcase, Users, MessageSquare, Star, ChevronLeft, ChevronDown,
  ExternalLink, Calendar, Clock, Award, ShieldCheck, Search, Send, 
  MessageCircle, Linkedin, Facebook, Instagram, Terminal,
  TrendingUp, Target, Lightbulb, Map, Youtube
} from 'lucide-react';

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

const MOCK_PROJECTS = [
  {
    id: 1,
    title: "MedCare Pro System",
    category: "app",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    client: "Apollo Pharmacy Chain",
    tags: ["Flutter", "Node.js", "MongoDB"],
    description: "A complete inventory and billing mobile application for a chain of 500+ pharmacies. Features include real-time stock tracking, QR billing, and automated purchase orders.",
    stats: { users: "10k+", transactions: "1M/day", uptime: "99.9%" }
  },
  {
    id: 2,
    title: "FinTech Dashboard",
    category: "web",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    client: "Global Finance Corp",
    tags: ["React", "D3.js", "AWS"],
    description: "High-performance analytics dashboard for stock market visualization. Processes millions of data points per second with WebSocket connections.",
    stats: { users: "5k+", speed: "20ms", uptime: "99.99%" }
  },
  {
    id: 3,
    title: "Manufacture ERP",
    category: "erp",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    client: "Tata Steel Subsidiary",
    tags: ["Angular", ".NET Core", "SQL Server"],
    description: "End-to-end ERP solution managing supply chain, employee shifts, machine maintenance, and output logistics for a major steel plant.",
    stats: { users: "2k+", efficiency: "+45%", uptime: "99.9%" }
  },
  {
    id: 4,
    title: "EduTech Learning App",
    category: "app",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800",
    client: "LearnX Academy",
    tags: ["React Native", "Firebase", "WebRTC"],
    description: "Live classroom application with whiteboard sharing, quiz modules, and AI-driven student progress tracking.",
    stats: { users: "50k+", classes: "500/day", uptime: "99.9%" }
  },
  {
    id: 5,
    title: "Retail Analytics BI",
    category: "bi",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    client: "SuperMart Retail",
    tags: ["Power BI", "Azure", "Python"],
    description: "Custom Power BI connectors to visualize sales data across 200 stores, predicting trends and optimizing inventory levels.",
    stats: { users: "100+", insights: "Real-time", uptime: "100%" }
  },
  {
    id: 6,
    title: "Logistics Fleet Manager",
    category: "web",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    client: "FastMove Logistics",
    tags: ["Vue.js", "Go", "PostGIS"],
    description: "Real-time fleet tracking system using GPS telemetry. route optimization algorithms reduced fuel costs by 30%.",
    stats: { users: "1k+", vehicles: "500+", uptime: "99.9%" }
  }
];

const TESTIMONIALS = [
  { id: 1, name: "Amit Verma", role: "Owner, Verma Textiles, Surat", content: "We needed a custom inventory system for our textile business. Hexanx delivered a solution that perfectly fits our workflow. Highly recommended for SMEs!", avatar: "AV" },
  { id: 2, name: "Sneha Gupta", role: "Founder, GreenLeaf Organics, Pune", content: "Their team built our e-commerce store from scratch. The design is beautiful and sales have increased by 40% since launch. Great support too.", avatar: "SG" },
  { id: 3, name: "Rohan Mehta", role: "Director, Mehta Transport, Indore", content: "Managing our fleet was a headache until Hexanx built our logistics dashboard. Now we track everything in real-time. Excellent service.", avatar: "RM" }
];

const FAQS = [
  { q: "Do you provide post-launch support?", a: "Yes, we offer 6 months of free critical support with every enterprise project. We also have dedicated AMC packages." },
  { q: "What technologies do you specialize in?", a: "We are full-stack experts. Frontend: React, Angular, Vue, Flutter. Backend: Node.js, Python, .NET, Go. Database: MongoDB, PostgreSQL." },
  { q: "How long does it take to build a custom ERP?", a: "A basic module takes 2-3 months, while a full-scale enterprise ERP can take 6-12 months." },
  { q: "Can you take over an existing project?", a: "Absolutely. We specialize in legacy modernization. We will audit your current code and optimize it." }
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

  // PASTE YOUR GOOGLE APPS SCRIPT URL HERE
  // REPACE THIS URL WITH THE ONE YOU GENERATE FROM YOUR SPREADSHEET
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw1f7hAwx3ehPmZmZX3M2hyxL7bmzxTI8V85awfnYOrczaitQFkIQjvXD-G1hOnVKF3dA/exec"; 

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
      // UPDATED: Keys match Google Sheet headers EXACTLY (Date handled by script)
      data.append('YOUR NAME', formData.name);
      data.append('EMAIL ADDRESS', formData.email);
      data.append('SERVICE INTERESTED IN', formData.service);
      data.append('MESSAGE', formData.message);

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
        setStatus('success'); // Fallback for UI if script URL isn't set yet
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
    : MOCK_PROJECTS.filter(p => p.category === filter);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'app', label: 'Mobile Apps' },
    { id: 'erp', label: 'ERP Systems' },
    { id: 'bi', label: 'Analytics' },
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
              onClick={() => setSelectedProject(project)}
              className="group bg-white rounded-[2rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100"
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <span className="text-white font-bold flex items-center gap-2 text-lg">View Case Study <ArrowRight size={20}/></span>
                </div>
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

const Pricing = () => (
  <section className="py-32 bg-white" id="pricing">
    <div className="container mx-auto px-6">
      <SectionTitle title="Flexible Pricing" subtitle="Choose Your Plan" />
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          { name: "Starter", price: "₹25k", desc: "Perfect for small businesses", features: ["5 Page Website", "Basic SEO", "Contact Form", "1 Month Support"] },
          { name: "Business", price: "₹60k", desc: "For growing companies", features: ["10+ Pages", "CMS Integration", "Advanced SEO", "Analytics Dashboard", "3 Months Support"], pop: true },
          { name: "Enterprise", price: "Custom", desc: "Large scale solutions", features: ["Custom ERP/CRM", "Mobile App Included", "Cloud Hosting", "Dedicated Manager", "1 Year Support"] }
        ].map((plan, i) => (
          <RevealOnScroll key={i}>
            <div className={`p-10 rounded-[2rem] border transition-all duration-500 relative flex flex-col h-full ${plan.pop ? 'bg-slate-900 text-white shadow-2xl scale-105 z-10 border-slate-800' : 'bg-white border-slate-100 hover:shadow-2xl hover:border-blue-100'}`}>
              {plan.pop && <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-bl-2xl rounded-tr-2xl shadow-lg">MOST POPULAR</div>}
              <h3 className={`text-2xl font-bold mb-2 ${plan.pop ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h3>
              <div className={`text-5xl font-extrabold mb-2 ${plan.pop ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400' : 'text-blue-600'}`}>{plan.price}<span className={`text-base font-normal ${plan.pop ? 'text-slate-400' : 'text-slate-500'}`}>/project</span></div>
              <p className={`text-sm mb-8 ${plan.pop ? 'text-slate-400' : 'text-slate-500'}`}>{plan.desc}</p>
              
              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className={`flex items-center text-sm ${plan.pop ? 'text-slate-300' : 'text-slate-600'}`}>
                    <CheckCircle2 size={18} className={`mr-3 ${plan.pop ? 'text-green-400' : 'text-green-500'}`} /> {f}
                  </li>
                ))}
              </ul>
              
              <Button primary={!plan.pop} className={`w-full ${plan.pop ? 'bg-white text-slate-900 hover:bg-slate-100 border-none' : ''}`}>Choose Plan</Button>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  </section>
);

const Careers = () => {
  const jobs = [
    { title: "Senior React Developer", type: "Full Time", loc: "Remote", exp: "4+ Years" },
    { title: "Backend Engineer (Go/Node)", type: "Full Time", loc: "Raipur", exp: "3+ Years" },
    { title: "UI/UX Designer", type: "Contract", loc: "Remote", exp: "2+ Years" },
  ];
  return (
    <section className="py-32 bg-slate-900 text-white relative overflow-hidden" id="careers">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
               We Are Hiring
            </div>
            <h2 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">Join The <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Elite Team</span></h2>
            <p className="text-slate-400 text-xl mb-10 leading-relaxed max-w-lg">
              Work on challenging enterprise projects, cutting-edge tech stacks, and enjoy a culture of learning and growth.
            </p>
            <div className="flex gap-8 mb-12">
               <div>
                  <h4 className="text-4xl font-bold text-white mb-1">4.8</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">Glassdoor</p>
               </div>
               <div className="w-px bg-white/10"></div>
               <div>
                  <h4 className="text-4xl font-bold text-white mb-1">96%</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">Retention</p>
               </div>
            </div>
            <Button primary className="border-none">View All Openings</Button>
          </div>
          
          <div className="space-y-4">
             {jobs.map((job, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all cursor-pointer group hover:-translate-x-2">
                   <div className="flex justify-between items-start mb-3">
                      <h4 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{job.title}</h4>
                      <ArrowRight className="text-slate-500 group-hover:text-white transition-colors"/>
                   </div>
                   <div className="flex gap-6 text-sm text-slate-400 mt-4">
                      <span className="flex items-center gap-2"><Briefcase size={16}/> {job.type}</span>
                      <span className="flex items-center gap-2"><MapPin size={16}/> {job.loc}</span>
                      <span className="flex items-center gap-2"><Clock size={16}/> {job.exp}</span>
                   </div>
                </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionTitle title="Common Questions" subtitle="FAQ" />
        <div className="space-y-4">
          {FAQS.map((item, i) => (
            <div key={i} className="bg-slate-50 rounded-3xl border border-slate-100 overflow-hidden transition-all duration-300 hover:shadow-lg">
              <button onClick={() => setOpenIndex(openIndex === i ? -1 : i)} className="w-full flex items-center justify-between p-8 text-left hover:bg-slate-100 transition-colors">
                <span className="font-bold text-xl text-slate-900">{item.q}</span>
                <ChevronDown className={`text-slate-400 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-8 pt-0 text-slate-600 leading-relaxed text-lg">{item.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTABanner = () => (
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
        <button className="px-12 py-5 bg-white text-blue-600 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all shadow-blue-900/20">Get Started Now</button>
        <button className="px-12 py-5 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all">Schedule Call</button>
      </div>
    </div>
  </section>
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
            <span className="text-xs font-bold tracking-wide text-slate-600 uppercase">Accepting Projects in India</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-[5.5rem] font-black text-slate-900 leading-[0.95] tracking-tighter">
          BUILDING <br/>
          DIGITAL <br/>
          <TextRotator />
        </h1>
        
        <p className="text-2xl text-slate-600 max-w-xl leading-relaxed font-light border-l-4 border-blue-600 pl-8">
          We are <strong>Hexanx</strong>. Raipur's premier IT consultancy. We architect enterprise software & scalable digital ecosystems.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6">
          <Button primary onClick={() => navigateTo('contact')} className="h-16 px-10 text-lg">
            Start Journey <Rocket className="ml-3 w-5 h-5" />
          </Button>
          <Button onClick={() => navigateTo('portfolio')} className="h-16 px-10 text-lg">
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
         {/* Main Dashboard Card */}
         <div className="relative z-10 glass-card p-3 rounded-[2.5rem] shadow-2xl rotate-y-12 hover:rotate-y-0 transition-transform duration-700">
            <div className="bg-slate-50 rounded-[2rem] overflow-hidden border border-slate-200 relative aspect-[4/3] flex flex-col shadow-inner">
               {/* Browser Header */}
               <div className="h-14 bg-white border-b border-slate-200 flex items-center px-8 gap-3">
                  <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-red-400"></div><div className="w-3 h-3 rounded-full bg-yellow-400"></div><div className="w-3 h-3 rounded-full bg-green-400"></div></div>
                  <div className="mx-auto bg-slate-100 px-6 py-1.5 rounded-full text-[10px] text-slate-400 font-mono flex items-center gap-2"><ShieldCheck size={10}/> secure | api.hexanx.com</div>
               </div>
               {/* Dashboard Content */}
               <div className="p-8 grid grid-cols-2 gap-6 bg-slate-50/50 flex-1 relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
                   
                   <div className="col-span-2 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                      <div className="flex justify-between items-center mb-6">
                         <div><h5 className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Total Revenue</h5><h3 className="text-3xl font-bold text-slate-900">$2,450,900</h3></div>
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
         
         {/* Floating Notification Cards */}
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

const Services = () => {
  const servicesList = [
    { icon: Code, title: "Web Development", description: "Custom scalable websites with React/Next.js.", tags: ["React", "Enterprise"] },
    { icon: BarChart3, title: "BI & Analytics", description: "Data visualization dashboards with Power BI.", tags: ["Data", "Insights"] },
    { icon: Smartphone, title: "App Development", description: "Native iOS/Android apps with Flutter.", tags: ["Mobile", "Cross-Platform"] },
    { icon: Server, title: "HRMS Systems", description: "Employee management and payroll automation.", tags: ["SaaS", "Automation"] },
    { icon: Database, title: "ERP Solutions", description: "End-to-end business resource planning.", tags: ["Operations", "Scale"] },
    { icon: ShieldCheck, title: "Cyber Security", description: "Enterprise grade security auditing.", tags: ["Audit", "Protection"] },
  ];

  return (
    <section className="py-32 bg-slate-50 relative" id="services">
      <div className="container mx-auto px-6">
        <SectionTitle title="Our Core Services" subtitle="What We Deliver" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div key={index} className="glass-card glass-card-hover p-10 rounded-[2rem] group bg-white border border-white/50">
               <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors duration-300 shadow-sm group-hover:shadow-blue-500/30">
                  <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
               </div>
               <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{service.title}</h3>
               <p className="text-slate-600 text-base mb-8 leading-relaxed">{service.description}</p>
               <div className="flex flex-wrap gap-2">
                  {service.tags.map(t => <span key={t} className="text-[10px] font-bold uppercase px-3 py-1 bg-slate-100 rounded-full text-slate-500 border border-slate-200">{t}</span>)}
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

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
             { Icon: Mail, link: "mailto:contact@hexanx.com" }, 
             { Icon: Linkedin, link: "https://www.linkedin.com/company/hexanex/" }, 
             { Icon: Youtube, link: "https://www.youtube.com/@Hexanx1" }
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
          {["Services", "Portfolio", "Pricing", "Careers", "About Us"].map(item => (
             <li key={item} className="hover:text-blue-400 cursor-pointer transition-colors flex items-center group">
                <ChevronRight size={16} className="mr-2 text-slate-700 group-hover:text-blue-500 transition-colors"/> {item}
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
             <span>contact@hexanx.com</span>
          </li>
        </ul>
      </div>
    </div>
    
    <div className="container mx-auto px-6 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600">
      <p>&copy; {new Date().getFullYear()} Hexanx IT Solutions. All rights reserved.</p>
      
      <div className="max-w-2xl text-[10px] text-slate-600 leading-relaxed my-4 md:my-0">
        <p>Customised Software Development | Enterprise Software Development | Custom Software Development | Cloud Software Development | Desktop Software Development | Inventory Software Development | Hospital Management Software Development | Billing Software Development | Accounting Software Development | Gym Software | Gym Management Software | Transport Management Software | Truck Management Software | Restaurant Management Software | Real Estate Software Development | Lead Software Development | HRM Development | School Management Software | Raipur Chhattisgarh</p>
        <p className="mt-2">Customised Website Development | Enterprise Website Development | Custom Website Development | Corporate Website Development | CryptoCurrency Website Development | Dental Website Development | Hospital Website Development | Magento E-commmerce Website Development | Shopify Website Development | Ecommerce Website Development | Custom Ecommerce Website Development | Real Estate Website Development | Raipur Website Development | Restaurant Website Development | School Website Development | Steel Website Development | Responsive Website Development | Affordable Website Development | AWS Development | CakePHP | CodeIgniter Development | WordPress Development | WooCommerce Development | WooCommerce Developers | OpenCart Developers | Python Development | Raipur Chhattisgarh</p>
      </div>

      <div className="flex gap-8 mt-4 md:mt-0">
         <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
         <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
         <span className="hover:text-white cursor-pointer transition-colors">Sitemap</span>
      </div>
    </div>
  </footer>
);

// --- 6. MAIN APP COMPONENT ---

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (tab) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-500 selection:text-white">
      {/* Top Ticker */}
      <TopTicker />

      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'nav-scrolled py-3' : 'bg-transparent py-5'} top-[33px]`}> {/* Added top offset for ticker */}
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="text-2xl font-bold flex items-center cursor-pointer group" onClick={() => navigateTo('home')}>
            <div className="w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center mr-3 group-hover:scale-105 transition-transform">
                <img src="/logo.png" alt="Hexanx" className="w-8 h-8 object-contain" />
            </div>
            <span className="tracking-tight text-slate-900 font-extrabold text-xl">Hexanx</span>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            <div className={`rounded-full px-2 py-1.5 mr-6 flex transition-all ${scrolled ? 'bg-slate-100/80' : 'bg-white/90 backdrop-blur-xl border border-white/50 shadow-lg'}`}>
                {navLinks.map((link) => (
                <button
                    key={link.id}
                    onClick={() => navigateTo(link.id)}
                    className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === link.id ? 'bg-slate-900 text-white shadow-md transform scale-105' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200/50'}`}
                >
                    {link.label}
                </button>
                ))}
            </div>
            <Button className="py-3 px-8 text-sm font-bold !rounded-full shadow-xl hover:shadow-2xl" primary onClick={() => navigateTo('contact')}>Get Quote</Button>
          </div>

          <button className="md:hidden text-slate-900 p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-100 p-6 flex flex-col space-y-4 shadow-2xl md:hidden animate-slide-in">
            {navLinks.map((link) => (
              <button key={link.id} onClick={() => navigateTo(link.id)} className="text-left py-4 px-6 rounded-2xl font-bold text-lg bg-slate-50 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                {link.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      <style>{styles}</style>

      {/* Main Content Area */}
      <main>
        {activeTab === 'home' && (
          <>
            <Hero navigateTo={navigateTo} />
            <TechStack />
            <About />
            <WhyChooseUs />
            <Services />
            <PortfolioSection />
            <Pricing />
            <Testimonials />
            <CTABanner />
            <Careers />
            <FAQ />
            <section className="py-32 bg-slate-50 relative">
              <div className="container mx-auto px-6">
                 <SectionTitle title="Start Your Project" subtitle="Get In Touch" />
                 <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
                    <div className="lg:col-span-1 space-y-6">
                       <div className="glass-card p-10 rounded-[2rem] h-full border-t-4 border-t-blue-600 flex flex-col justify-between bg-white">
                          <div>
                            <h3 className="text-3xl font-bold text-slate-900 mb-10">Contact Info</h3>
                            <div className="space-y-10">
                               {[
                                 { icon: Mail, label: "Email Us", val: "contact@hexanx.com", sub: "support@hexanx.com", bg: "blue" },
                                 { icon: MapPin, label: "Visit Us", val: "Santoshi Nagar, Raipur", sub: "Chhattisgarh 492001", bg: "green" }
                               ].map((c, i) => (
                                 <div key={i} className="flex items-start group">
                                    <div className={`w-14 h-14 bg-${c.bg}-50 rounded-2xl flex items-center justify-center mr-6 shrink-0 transition-transform group-hover:scale-110 duration-300`}>
                                       <c.icon className={`w-7 h-7 text-${c.bg}-600`} />
                                    </div>
                                    <div>
                                       <h4 className="text-slate-900 font-bold mb-1 text-lg">{c.label}</h4>
                                       <p className="text-slate-600 font-medium">{c.val}</p>
                                       <p className="text-slate-400 text-sm">{c.sub}</p>
                                    </div>
                                 </div>
                               ))}
                            </div>
                          </div>
                          <div className="mt-12 pt-8 border-t border-slate-100">
                             <p className="text-xs text-slate-400 text-center font-medium uppercase tracking-wider">We respect your privacy. No spam.</p>
                          </div>
                       </div>
                    </div>
                    <div className="lg:col-span-2">
                       <ContactForm />
                    </div>
                 </div>
              </div>
            </section>
          </>
        )}
        {activeTab === 'about' && <About />}
        {activeTab === 'services' && <Services />}
        {activeTab === 'portfolio' && <PortfolioSection />}
        {activeTab === 'pricing' && <Pricing />}
        {activeTab === 'careers' && <Careers />}
        {activeTab === 'contact' && (
           <section className="pt-40 pb-20 bg-slate-50">
              <div className="container mx-auto px-6">
                 <SectionTitle title="Start Your Project" subtitle="Get In Touch" />
                 <div className="max-w-4xl mx-auto"><ContactForm /></div>
              </div>
           </section>
        )}
      </main>

      <Footer />
      <ChatBot />
    </div>
  );
}
