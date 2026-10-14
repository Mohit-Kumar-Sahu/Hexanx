"use client";

import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, MessageSquare, X, Send } from 'lucide-react';

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I am Ayra, Hexanx's Autonomous AI assistant. How can I assist your enterprise today?", isBot: true }
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
      let botResponse = "Thank you for reaching out! A Hexanx SaaS specialist will review your request and connect shortly.";
      const lowerInput = input.toLowerCase();
      
      if (lowerInput.includes("pricing") || lowerInput.includes("cost")) {
        botResponse = "Our SaaS pricing is tailored to your scale. Would you like to schedule an executive demo at hexanx.in/booking?";
      } else if (lowerInput.includes("service") || lowerInput.includes("product") || lowerInput.includes("app") || lowerInput.includes("os")) {
        botResponse = "We build scalable SaaS ecosystems: Hexanx OS (Enterprise ERP), Flasto (Restaurant OS), Roomyes (Hotel PMS), and Ayra AI.";
      } else if (lowerInput.includes("location") || lowerInput.includes("raipur")) {
        botResponse = "Our parent headquarters is located at Santoshi Nagar, Raipur, Chhattisgarh 492001.";
      }

      setMessages(prev => [...prev, { id: Date.now() + 1, text: botResponse, isBot: true }]);
    }, 1000);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open Ayra AI Assistant"
        className="fixed bottom-6 right-4 sm:right-6 z-50 p-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl hover:scale-110 active:scale-95 animate-pulse-glow transition-all duration-300 flex items-center justify-center group"
      >
        {isOpen ? (
          <X className="w-6 h-6 m-1.5" />
        ) : (
          <div className="relative flex items-center justify-center">
            <img 
              src="/logos/ayra-ai.png" 
              alt="Ayra AI Assistant" 
              className="w-9 h-9 rounded-full aspect-square object-cover shadow-lg border-2 border-slate-100" 
            />
            <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></span>
          </div>
        )}
      </button>

      {isOpen && (
        <div className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 max-w-sm bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[75vh] sm:max-h-[500px] animate-slide-in">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center gap-3 text-white">
            <img 
              src="/logos/ayra-ai.png" 
              alt="Ayra AI" 
              className="w-10 h-10 rounded-full aspect-square object-cover shadow-lg border-2 border-slate-100" 
            />
            <div>
              <h4 className="font-bold text-base flex items-center gap-2">
                Ayra AI
                <span className="text-[9px] bg-white/20 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider">Hexanx Agent</span>
              </h4>
              <p className="text-[10px] text-blue-100 flex items-center gap-1">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span> Online • Intelligent Assistant
              </p>
            </div>
          </div>
          <div className="flex-1 p-4 overflow-y-auto bg-slate-50 space-y-3">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex items-end gap-2 ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                {msg.isBot && (
                  <img
                    src="/logos/ayra-ai.png"
                    alt="Ayra AI"
                    className="w-6 h-6 rounded-full aspect-square object-cover shadow-xs border border-slate-100 shrink-0 mb-1"
                  />
                )}
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
              placeholder="Ask Ayra anything..."
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
}
