import React, { useState, useEffect, useRef } from 'react';
import { 
  Code, BarChart3, Smartphone, LayoutDashboard, Database, Server, 
  Stethoscope, Globe, Menu, X, ArrowRight, Mail, MapPin, Phone, 
  CheckCircle2, Zap, Rocket, Layers, ChevronRight, Cpu, 
  Briefcase, Users, MessageSquare, Star, ChevronLeft, ChevronDown,
  ExternalLink, Calendar, Clock, Award, ShieldCheck, Search, Send, MessageCircle
} from 'lucide-react';

// --- ADVANCED CSS & ANIMATIONS ---
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

  :root {
    --primary: #2563eb;
    --primary-dark: #1d4ed8;
    --secondary: #7c3aed;
    --accent: #ec4899;
    --bg-light: #ffffff;
    --bg-off: #f8fafc;
    --text-main: #0f172a;
    --text-muted: #64748b;
    --success: #10b981;
    --error: #ef4444;
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

  /* --- Luxury Glassmorphism & Cards --- */
  .glass-card {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(226, 232, 240, 0.8);
    box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.05);
  }

  .glass-card-hover {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .glass-card-hover:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px -12px rgba(37, 99, 235, 0.15);
    border-color: rgba(37, 99, 235, 0.3);
  }

  .glass-nav {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(226, 232, 240, 0.8);
  }

  /* --- Advanced Backgrounds --- */
  .bg-grid {
    background-size: 60px 60px;
    background-image: 
      linear-gradient(to right, rgba(15, 23, 42, 0.03) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(15, 23, 42, 0.03) 1px, transparent 1px);
    mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
  }
  
  .bg-mesh {
    background-color: #ffffff;
    background-image: radial-gradient(at 0% 0%, hsla(253,16%,7%,0) 0, transparent 50%), 
                      radial-gradient(at 50% 0%, hsla(225,39%,30%,0) 0, transparent 50%), 
                      radial-gradient(at 100% 0%, hsla(339,49%,30%,0) 0, transparent 50%);
  }

  /* --- Typography Effects --- */
  .gradient-text {
    background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 50%, var(--accent) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* --- Utility Animations --- */
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }

  .scrollbar-hide::-webkit-scrollbar {
      display: none;
  }
  .scrollbar-hide {
      -ms-overflow-style: none;
      scrollbar-width: none;
  }

  /* Custom Form Styles */
  .input-group:focus-within label {
    color: var(--primary);
  }
  .input-group:focus-within input, 
  .input-group:focus-within textarea,
  .input-group:focus-within select {
    border-color: var(--primary);
    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
  }

  /* Chatbot Animations */
  @keyframes slideIn {
    from { opacity: 0; transform: translateY(20px) scale(0.95); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }
  .animate-slide-in {
    animation: slideIn 0.3s ease-out forwards;
  }
`;

// --- MOCK DATA (Simulating Database) ---

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
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "CTO, Apollo Pharmacy",
    content: "Hexanx transformed our legacy systems into a modern digital powerhouse. Their team is technically brilliant and reliable.",
    avatar: "RK"
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Director, LearnX",
    content: "The mobile app they built for us helped us scale from 100 students to 50,000 in just one year. Incredible scalability.",
    avatar: "SW"
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "Ops Manager, Tata Steel Sub",
    content: "Their ERP solution is the backbone of our factory now. Downtime has reduced significantly. Highly recommended.",
    avatar: "VS"
  }
];

const FAQS = [
  {
    q: "Do you provide post-launch support?",
    a: "Yes, we offer 6 months of free critical support with every enterprise project. We also have dedicated AMC (Annual Maintenance Contract) packages for 24/7 monitoring and updates."
  },
  {
    q: "What technologies do you specialize in?",
    a: "We are full-stack experts. Frontend: React, Angular, Vue, Flutter. Backend: Node.js, Python, .NET, Go. Database: MongoDB, PostgreSQL, SQL Server. Cloud: AWS, Azure, GCP."
  },
  {
    q: "How long does it take to build a custom ERP?",
    a: "It depends on complexity. A basic module takes 2-3 months, while a full-scale enterprise ERP can take 6-12 months. We follow Agile methodology to deliver modules incrementally."
  },
  {
    q: "Can you take over an existing project?",
    a: "Absolutely. We specialize in legacy modernization. We will audit your current code, optimize it, and transition it to modern tech stacks without business disruption."
  }
];

// --- REUSABLE COMPONENTS ---

const Button = ({ children, primary = false, onClick, className = "", type = "button", disabled = false }) => (
  <button 
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`
      px-8 py-4 rounded-full font-bold tracking-wide transition-all duration-300 relative overflow-hidden group shadow-lg flex items-center justify-center gap-2
      ${primary 
        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-blue-500/30" 
        : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:border-blue-300 hover:text-blue-600"}
      ${disabled ? "opacity-70 cursor-not-allowed" : ""}
      ${className}
    `}
  >
    <span className="relative z-10 flex items-center gap-2">{children}</span>
  </button>
);

const SectionTitle = ({ title, subtitle, center = true }) => (
  <div className={`mb-16 ${center ? 'text-center' : 'text-left'}`}>
    <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
      {subtitle}
    </div>
    <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
      {title.split(" ").map((word, i) => (
        <span key={i} className={i === 1 ? "gradient-text" : ""}>
          {word} 
        </span>
      ))}
    </h2>
    <div className={`h-1.5 w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-6 ${center ? 'mx-auto' : ''}`}></div>
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
    <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border ${colors[color] || colors.blue}`}>
      {text}
    </span>
  );
};

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      <div className="relative bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in-up">
        <div className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-slate-100 p-6 flex items-center justify-between z-10">
          <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-slate-100 transition-colors">
            <X className="w-6 h-6 text-slate-500" />
          </button>
        </div>
        <div className="p-6 md:p-8">
          {children}
        </div>
      </div>
    </div>
  );
};

// --- CHATBOT COMPONENT ---

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! Welcome to Hexanx. How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { id: Date.now(), text: input, isBot: false };
    setMessages(prev => [...prev, userMsg]);
    setInput("");

    // Simple Auto-reply logic
    setTimeout(() => {
      let botResponse = "Thanks for reaching out! A Hexanx specialist will review your query and reply shortly.";
      const lowerInput = input.toLowerCase();
      
      if (lowerInput.includes("pricing") || lowerInput.includes("cost")) {
        botResponse = "Our pricing depends on the project scope. Would you like to schedule a free consultation?";
      } else if (lowerInput.includes("service") || lowerInput.includes("web") || lowerInput.includes("app")) {
        botResponse = "We specialize in high-end Web & App development. Check out our Services section for more details!";
      } else if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
        botResponse = "Hi there! I'm the Hexanx Support Bot. Ask me anything about our services.";
      }

      setMessages(prev => [...prev, { id: Date.now() + 1, text: botResponse, isBot: true }]);
    }, 1000);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-blue-600 text-white shadow-2xl hover:bg-blue-700 transition-all hover:scale-110 active:scale-95"
      >
        {isOpen ? <X /> : <MessageCircle />}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[500px] animate-slide-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center gap-3 text-white">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <MessageSquare size={16} />
            </div>
            <div>
              <h4 className="font-bold text-sm">Hexanx Support</h4>
              <p className="text-[10px] text-blue-100 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span> Online
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-slate-50 space-y-3">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.isBot ? 'bg-white border border-slate-200 text-slate-700 rounded-tl-none' : 'bg-blue-600 text-white rounded-tr-none'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
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

// --- COMPLEX SECTIONS ---

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
    <section className="py-32 bg-slate-50 relative" id="portfolio">
      <div className="container mx-auto px-6">
        <SectionTitle title="Our Recent Work" subtitle="Case Studies" />
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === cat.id 
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-105" 
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-white rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-bold flex items-center gap-2">View Details <ArrowRight size={16}/></span>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-blue-600 shadow-sm">
                  {project.category}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-500 text-sm line-clamp-2 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-slate-50 border border-slate-100 rounded text-xs text-slate-500 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <Modal 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
        title={selectedProject?.title}
      >
        {selectedProject && (
          <div className="space-y-8">
            <div className="rounded-2xl overflow-hidden h-64 md:h-96 w-full relative">
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Project Overview</h4>
                  <p className="text-slate-600 leading-relaxed">{selectedProject.description}</p>
                </div>
                <div>
                   <h4 className="text-lg font-bold text-slate-900 mb-2">Tech Stack</h4>
                   <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map(t => <Badge key={t} text={t} color="blue" />)}
                   </div>
                </div>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 h-fit">
                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Key Metrics</h4>
                <div className="space-y-4">
                  {Object.entries(selectedProject.stats).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center border-b border-slate-200 pb-2 last:border-0">
                      <span className="text-slate-600 capitalize">{key}</span>
                      <span className="font-bold text-slate-900">{value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Client</h4>
                  <p className="font-semibold text-slate-900">{selectedProject.client}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-4 pt-4 border-t border-slate-100">
               <Button onClick={() => setSelectedProject(null)}>Close</Button>
               <Button primary>Request Similar Project</Button>
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
    timeoutRef.current = setTimeout(next, 5000);
    return () => clearTimeout(timeoutRef.current);
  }, [active]);

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionTitle title="Client Success Stories" subtitle="Testimonials" />
        
        <div className="max-w-5xl mx-auto relative">
          <div className="absolute top-1/2 -left-12 -translate-y-1/2 hidden lg:block z-10">
            <button onClick={prev} className="p-3 rounded-full bg-white border border-slate-200 shadow-lg hover:bg-slate-50 transition-colors">
              <ChevronLeft className="w-6 h-6 text-slate-600" />
            </button>
          </div>
          <div className="absolute top-1/2 -right-12 -translate-y-1/2 hidden lg:block z-10">
            <button onClick={next} className="p-3 rounded-full bg-white border border-slate-200 shadow-lg hover:bg-slate-50 transition-colors">
              <ChevronRight className="w-6 h-6 text-slate-600" />
            </button>
          </div>

          <div className="relative overflow-hidden min-h-[300px]">
            {TESTIMONIALS.map((t, i) => {
              let position = 'translate-x-full opacity-0';
              if (i === active) position = 'translate-x-0 opacity-100';
              if (i === (active - 1 + TESTIMONIALS.length) % TESTIMONIALS.length) position = '-translate-x-full opacity-0';

              return (
                <div key={t.id} className={`absolute top-0 left-0 w-full transition-all duration-700 ease-in-out ${position}`}>
                   <div className="bg-slate-50 rounded-[3rem] p-10 md:p-16 border border-slate-100 relative mx-4">
                      <div className="absolute top-10 left-10 text-9xl text-blue-100 font-serif leading-none opacity-50">"</div>
                      <div className="relative z-10 text-center">
                        <div className="flex justify-center gap-1 mb-6">
                          {[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 text-yellow-400 fill-current" />)}
                        </div>
                        <p className="text-xl md:text-3xl font-light text-slate-800 leading-relaxed mb-8">
                          {t.content}
                        </p>
                        <div className="flex items-center justify-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                            {t.avatar}
                          </div>
                          <div className="text-left">
                            <h5 className="font-bold text-slate-900">{t.name}</h5>
                            <p className="text-sm text-slate-500">{t.role}</p>
                          </div>
                        </div>
                      </div>
                   </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 ${active === i ? 'w-8 bg-blue-600' : 'w-2 bg-slate-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Careers = () => {
  const jobs = [
    { title: "Senior React Developer", type: "Full Time", loc: "Remote", exp: "4+ Years" },
    { title: "Backend Engineer (Go/Node)", type: "Full Time", loc: "Bangalore", exp: "3+ Years" },
    { title: "UI/UX Designer", type: "Contract", loc: "Remote", exp: "2+ Years" },
  ];

  return (
    <section className="py-32 bg-slate-900 text-white relative overflow-hidden" id="careers">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[120px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-900/50 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-widest mb-4">
               We Are Hiring
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6">Join The <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Elite Team</span></h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-lg">
              Work on challenging enterprise projects, cutting-edge tech stacks, and enjoy a culture of learning and growth.
            </p>
            <div className="flex gap-4 mb-12">
               <div className="text-center">
                  <h4 className="text-3xl font-bold text-white">4.8</h4>
                  <p className="text-xs text-slate-500 uppercase">Glassdoor</p>
               </div>
               <div className="w-px bg-slate-700"></div>
               <div className="text-center">
                  <h4 className="text-3xl font-bold text-white">96%</h4>
                  <p className="text-xs text-slate-500 uppercase">Retention</p>
               </div>
            </div>
            <Button primary>View All Openings</Button>
          </div>
          
          <div className="space-y-4">
             {jobs.map((job, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer group">
                   <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{job.title}</h4>
                      <ArrowRight className="text-slate-500 group-hover:text-white transition-colors"/>
                   </div>
                   <div className="flex gap-4 text-sm text-slate-400">
                      <span className="flex items-center gap-1"><Briefcase size={14}/> {job.type}</span>
                      <span className="flex items-center gap-1"><MapPin size={14}/> {job.loc}</span>
                      <span className="flex items-center gap-1"><Clock size={14}/> {job.exp}</span>
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
    <section className="py-32 bg-slate-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionTitle title="Common Questions" subtitle="FAQ" />
        <div className="space-y-4">
          {FAQS.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-300">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-lg text-slate-900">{item.q}</span>
                <ChevronDown className={`text-slate-400 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', service: 'Web Development', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

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
      // Simulate API call
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', service: 'Web Development', message: '' });
      }, 2000);
    }
  };

  return (
    <div className="glass-card p-8 md:p-10 rounded-3xl border border-slate-200 shadow-xl relative overflow-hidden">
       {status === 'success' && (
         <div className="absolute inset-0 bg-white/95 backdrop-blur z-20 flex flex-col items-center justify-center text-center p-8 animate-fade-in-up">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
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
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className={`w-full bg-slate-50 border ${errors.name ? 'border-red-300' : 'border-slate-200'} rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:bg-white transition-all shadow-sm`} 
              placeholder="John Doe" 
            />
            {errors.name && <p className="text-red-500 text-xs ml-1">{errors.name}</p>}
          </div>
          <div className="space-y-2 input-group">
            <label className="text-slate-500 text-xs font-bold uppercase tracking-wider ml-1">Email Address</label>
            <input 
              type="email" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className={`w-full bg-slate-50 border ${errors.email ? 'border-red-300' : 'border-slate-200'} rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:bg-white transition-all shadow-sm`} 
              placeholder="john@example.com" 
            />
             {errors.email && <p className="text-red-500 text-xs ml-1">{errors.email}</p>}
          </div>
        </div>
        
        <div className="space-y-2 input-group">
          <label className="text-slate-500 text-xs font-bold uppercase tracking-wider ml-1">Service Interested In</label>
          <select 
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
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            className={`w-full bg-slate-50 border ${errors.message ? 'border-red-300' : 'border-slate-200'} rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:bg-white transition-all resize-none shadow-sm`} 
            placeholder="Tell us about your project requirements..."
          ></textarea>
           {errors.message && <p className="text-red-500 text-xs ml-1">{errors.message}</p>}
        </div>

        <Button primary className="w-full" type="submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </div>
  );
};

// --- CORE SECTIONS (Upgraded) ---

const Hero = ({ navigateTo }) => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
    <style>{styles}</style>
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-grid"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100 rounded-full blur-[120px] animate-blob opacity-40 mix-blend-multiply"></div>
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-purple-100 rounded-full blur-[120px] animate-blob delay-2000 opacity-40 mix-blend-multiply"></div>
    </div>

    <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-10 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 rounded-full border border-slate-200">
           <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-semibold text-slate-600">Accepting New Projects</span>
        </div>
        
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter">
          BUILDING <br/>
          <span className="gradient-text">DIGITAL</span> <br/>
          EMPIRES
        </h1>
        
        <p className="text-xl text-slate-600 max-w-xl leading-relaxed font-light border-l-4 border-blue-600 pl-6">
          We are <strong>Hexanx</strong>. Architects of enterprise software, sophisticated ERPs, and scalable digital ecosystems.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5">
          <Button primary onClick={() => navigateTo('contact')}>
            Start Your Journey <Rocket className="ml-2 w-4 h-4" />
          </Button>
          <Button onClick={() => navigateTo('portfolio')}>
             View Case Studies
          </Button>
        </div>
        
        <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200">
          {[
             { num: "50+", label: "Enterprise Clients", icon: Building },
             { num: "99%", label: "Client Retention", icon: ShieldCheck },
             { num: "24/7", label: "Critical Support", icon: Clock }
          ].map((stat, i) => (
             <div key={i}>
                <h4 className="text-3xl font-bold text-slate-900 mb-1">{stat.num}</h4>
                <p className="text-slate-500 text-sm">{stat.label}</p>
             </div>
          ))}
        </div>
      </div>

      <div className="hidden lg:block relative animate-float">
         <div className="relative z-10 glass-card p-2 rounded-[2rem] shadow-2xl rotate-[-2deg] hover:rotate-0 transition-all duration-500">
            <div className="bg-slate-50 rounded-[1.8rem] overflow-hidden border border-slate-200 relative">
               <div className="h-10 bg-white border-b border-slate-200 flex items-center px-6 gap-2">
                  <div className="flex gap-2">
                     <div className="w-3 h-3 rounded-full bg-red-400"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                     <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="mx-auto bg-slate-100 px-4 py-1 rounded-md text-[10px] text-slate-400 font-mono">
                     api.hexanx.com/v1/analytics
                  </div>
               </div>
               <div className="p-8 grid grid-cols-2 gap-6 bg-slate-50/50">
                   <div className="col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                      <div className="flex justify-between items-center mb-6">
                         <div>
                            <h5 className="text-sm text-slate-500 font-bold uppercase">Total Revenue</h5>
                            <h3 className="text-3xl font-bold text-slate-900">$2,450,900</h3>
                         </div>
                         <div className="p-3 bg-green-50 rounded-xl">
                            <BarChart3 className="text-green-600"/>
                         </div>
                      </div>
                      <div className="h-32 w-full bg-gradient-to-t from-blue-50 to-transparent rounded-lg border-b border-blue-200 relative">
                          <div className="absolute bottom-0 left-0 w-full h-[60%] bg-blue-500/10 skew-y-6"></div>
                      </div>
                   </div>
                   <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                      <div className="flex items-center gap-3 mb-4">
                         <div className="p-2 bg-purple-50 rounded-lg"><Users size={18} className="text-purple-600"/></div>
                         <span className="font-bold text-slate-700">Users</span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-1">+14.2%</h3>
                      <p className="text-xs text-green-500 font-bold">↑ Growth this week</p>
                   </div>
                   <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                      <div className="flex items-center gap-3 mb-4">
                         <div className="p-2 bg-orange-50 rounded-lg"><Zap size={18} className="text-orange-600"/></div>
                         <span className="font-bold text-slate-700">Speed</span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-1">24ms</h3>
                      <p className="text-xs text-green-500 font-bold">⚡ Lightning Fast</p>
                   </div>
               </div>
            </div>
         </div>
         {/* Decorative Floating Elements */}
         <div className="absolute -left-12 top-1/3 glass-card p-4 rounded-2xl animate-bounce delay-1000 shadow-lg">
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">R</div>
               <div>
                  <p className="text-xs font-bold text-slate-900">New Lead</p>
                  <p className="text-[10px] text-slate-500">Just Now</p>
               </div>
            </div>
         </div>
         <div className="absolute -right-8 bottom-1/4 glass-card p-4 rounded-2xl animate-bounce delay-2000 shadow-lg">
             <div className="flex items-center gap-3">
                <CheckCircle2 className="text-green-500 w-8 h-8" />
                <div>
                   <p className="text-xs font-bold text-slate-900">System Stable</p>
                   <p className="text-[10px] text-slate-500">99.99% Uptime</p>
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
            <div key={index} className="glass-card glass-card-hover p-8 rounded-3xl group">
               <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
               <p className="text-slate-600 text-sm mb-6 leading-relaxed">{service.description}</p>
               <div className="flex flex-wrap gap-2">
                  {service.tags.map(t => <span key={t} className="text-[10px] font-bold uppercase px-2 py-1 bg-slate-100 rounded text-slate-500">{t}</span>)}
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- DUMMY COMPONENTS FOR MISSING IMPORTS ---
const Building = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M8 10h.01"/><path d="M16 10h.01"/><path d="M8 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M16 18h.01"/></svg>;

// --- LAYOUT ---

const Footer = () => (
  <footer className="bg-slate-900 text-slate-400 pt-24 pb-10 relative z-10">
    <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
      <div className="col-span-1 md:col-span-2">
        <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
          <img 
            src="/logo.png" 
            alt="Hexanx Logo" 
            className="w-14 h-14 object-contain mr-3" 
          />
          Hexanx
        </h2>
        <p className="max-w-sm text-base leading-relaxed mb-8 text-slate-400">
          Transforming businesses through innovative IT solutions. We build the digital infrastructure that powers the future economy.
        </p>
        <div className="flex gap-4">
           {[Globe, Mail, Phone].map((Icon, i) => (
             <div key={i} className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all cursor-pointer">
               <Icon size={18}/>
             </div>
           ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-white font-bold mb-6 text-lg">Quick Links</h3>
        <ul className="space-y-4">
          {["Services", "Portfolio", "Careers", "About Us"].map(item => (
             <li key={item} className="hover:text-blue-400 cursor-pointer transition-colors flex items-center">
                <ChevronRight size={14} className="mr-2"/> {item}
             </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-white font-bold mb-6 text-lg">Contact</h3>
        <ul className="space-y-4 text-sm">
          <li className="flex items-start gap-3">
             <MapPin className="shrink-0 text-blue-500" size={18}/>
             <span>Hexanx Tech Park, Sector 6,<br/>IT Hub, Bangalore, India</span>
          </li>
          <li className="flex items-center gap-3">
             <Phone className="shrink-0 text-blue-500" size={18}/>
             <span>+91 98765 43210</span>
          </li>
          <li className="flex items-center gap-3">
             <Mail className="shrink-0 text-blue-500" size={18}/>
             <span>contact@hexanx.com</span>
          </li>
        </ul>
      </div>
    </div>
    
    <div className="container mx-auto px-6 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
      <p>&copy; {new Date().getFullYear()} Hexanx IT Solutions. All rights reserved.</p>
      <div className="flex gap-6 mt-4 md:mt-0">
         <span>Privacy Policy</span>
         <span>Terms of Service</span>
         <span>Sitemap</span>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'careers', label: 'Careers' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-500 selection:text-white">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="text-2xl font-bold flex items-center cursor-pointer group" onClick={() => navigateTo('home')}>
            <img 
                src="/logo.png" 
                alt="Hexanx Logo" 
                className="w-14 h-14 object-contain mr-3" 
            />
            <span className="tracking-tight text-slate-900">Hexanx</span>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <div className="bg-white/80 rounded-full px-2 py-1 border border-slate-200 backdrop-blur-md mr-4 shadow-sm">
                {navLinks.map((link) => (
                <button
                    key={link.id}
                    onClick={() => navigateTo(link.id)}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === link.id ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'}`}
                >
                    {link.label}
                </button>
                ))}
            </div>
            <Button className="py-2.5 px-6 text-sm !rounded-full" primary onClick={() => navigateTo('contact')}>Get Quote</Button>
          </div>

          <button className="md:hidden text-slate-900 p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-slate-100 p-6 flex flex-col space-y-4 shadow-2xl md:hidden animate-fade-in-up">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => navigateTo(link.id)}
                className={`text-left py-3 px-4 rounded-lg font-medium border border-transparent ${activeTab === link.id ? 'bg-blue-50 text-blue-600 border-blue-100' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        {activeTab === 'home' && (
          <>
            <Hero navigateTo={navigateTo} />
            <Services />
            <PortfolioSection />
            <Testimonials />
            <Careers />
            <FAQ />
            <section className="py-32 bg-white relative">
              <div className="container mx-auto px-6">
                 <SectionTitle title="Start Your Project" subtitle="Get In Touch" />
                 <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
                    <div className="lg:col-span-1 space-y-6">
                       <div className="glass-card p-8 rounded-3xl h-full border-t-4 border-t-blue-600 flex flex-col justify-between">
                          <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-8">Contact Info</h3>
                            <div className="space-y-8">
                               {[
                                 { icon: Mail, label: "Email Us", val: "contact@hexanx.com", sub: "support@hexanx.com", bg: "blue" },
                                 { icon: Phone, label: "Call Us", val: "+91 98765 43210", sub: "Mon-Fri, 9am - 6pm", bg: "purple" },
                                 { icon: MapPin, label: "Visit Us", val: "Hexanx Tech Park", sub: "Sector 6, IT Hub", bg: "green" }
                               ].map((c, i) => (
                                 <div key={i} className="flex items-start group">
                                    <div className={`w-12 h-12 bg-${c.bg}-50 rounded-xl flex items-center justify-center mr-4 shrink-0 transition-colors`}>
                                       <c.icon className={`w-6 h-6 text-${c.bg}-600`} />
                                    </div>
                                    <div>
                                       <h4 className="text-slate-900 font-semibold mb-1">{c.label}</h4>
                                       <p className="text-slate-500 text-sm">{c.val}</p>
                                       <p className="text-slate-400 text-xs">{c.sub}</p>
                                    </div>
                                 </div>
                               ))}
                            </div>
                          </div>
                          <div className="mt-12 pt-8 border-t border-slate-100">
                             <p className="text-xs text-slate-400 text-center">We respect your privacy. No spam.</p>
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
        {activeTab === 'services' && <Services />}
        {activeTab === 'portfolio' && <PortfolioSection />}
        {activeTab === 'careers' && <Careers />}
        {activeTab === 'contact' && (
           <section className="pt-32 pb-20 bg-white">
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