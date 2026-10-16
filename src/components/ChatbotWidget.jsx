"use client";

import React, { useState, useEffect, useRef } from 'react';
import { X, Send } from 'lucide-react';

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hello! I am Ayra, Hexanx's Autonomous AI assistant. How can I assist your enterprise today?"
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const abortControllerRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen, isTyping]);

  // Cleanup hook to abort on unmount (Law 9 compliance)
  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  const handleSend = async (messageText) => {
    if (!messageText.trim()) return;

    // 1. Snapshot user message and clear input
    const userMsg = { role: 'user', content: messageText };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // 2. Memory-Safe Abort Protocol (Cancel ongoing streams)
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    const controller = new AbortController();
    abortControllerRef.current = controller;

    try {
      // 3. Initiate SSE connection to Ayra Engine
      const response = await fetch('https://hexanx-backend.onrender.com/api/ayra/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-product-source': 'hexanx'
        },
        body: JSON.stringify({
          message: messageText,
          // Extract only the necessary history to prevent payload bloat
          messages: messages.map((m) => ({
            role: m.role || (m.isBot ? 'assistant' : 'user'),
            content: m.content || m.text || ''
          })),
          isPublic: true, // CRITICAL: Enforces Guest Persona (Zero Privilege)
          product: 'hexanx'
        }),
        signal: controller.signal
      });

      if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

      // 4. Prepare empty assistant message for streaming
      setMessages((prev) => [...prev, { role: 'assistant', content: '' }]);

      // 5. Decode Server-Sent Events
      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const payload = line.substring(6).trim();
            if (payload === '[DONE]') {
              setIsTyping(false);
              return;
            }
            try {
              const parsed = JSON.parse(payload);
              if (parsed.text) {
                // Safely update the last message with the new token
                setMessages((prev) => {
                  const newMsgs = [...prev];
                  const lastIdx = newMsgs.length - 1;
                  if (lastIdx >= 0) {
                    newMsgs[lastIdx] = {
                      ...newMsgs[lastIdx],
                      content: (newMsgs[lastIdx].content || '') + parsed.text
                    };
                  }
                  return newMsgs;
                });
              }
            } catch (e) {
              // Ignore partial JSON packet boundary issues
            }
          }
        }
      }

      // Check remaining buffer
      if (buffer.trim().startsWith('data: ')) {
        const payload = buffer.trim().substring(6).trim();
        if (payload !== '[DONE]') {
          try {
            const parsed = JSON.parse(payload);
            if (parsed.text) {
              setMessages((prev) => {
                const newMsgs = [...prev];
                const lastIdx = newMsgs.length - 1;
                if (lastIdx >= 0) {
                  newMsgs[lastIdx] = {
                    ...newMsgs[lastIdx],
                    content: (newMsgs[lastIdx].content || '') + parsed.text
                  };
                }
                return newMsgs;
              });
            }
          } catch (e) {
            // Ignore partial JSON
          }
        }
      }
    } catch (err) {
      if (err.name !== 'AbortError') {
        console.error('Ayra SSE Connection Failed:', err);
        const fallbackText = "I'm currently undergoing scheduled maintenance. Please try again later or use the contact form.";
        setMessages((prev) => {
          const newMsgs = [...prev];
          const lastIdx = newMsgs.length - 1;
          const lastMsg = newMsgs[lastIdx];
          if (lastMsg && lastMsg.role === 'assistant' && !lastMsg.content) {
            newMsgs[lastIdx] = { role: 'assistant', content: fallbackText };
            return newMsgs;
          }
          return [...prev, { role: 'assistant', content: fallbackText }];
        });
      }
    } finally {
      setIsTyping(false);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const text = input;
    handleSend(text);
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
        <div className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 max-w-sm bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[75vh] sm:max-h-[520px] animate-slide-in">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
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
            <button 
              onClick={() => setIsOpen(false)}
              aria-label="Close Chat"
              className="p-1.5 rounded-full hover:bg-white/10 transition-colors text-white/80 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto bg-slate-50 space-y-3">
            {messages.map((msg, idx) => {
              const isBot = msg.role === 'assistant' || msg.isBot;
              const content = msg.content || msg.text || '';
              return (
                <div key={idx} className={`flex items-end gap-2 ${isBot ? 'justify-start' : 'justify-end'}`}>
                  {isBot && (
                    <img
                      src="/logos/ayra-ai.png"
                      alt="Ayra AI"
                      className="w-6 h-6 rounded-full aspect-square object-cover shadow-xs border border-slate-100 shrink-0 mb-1"
                    />
                  )}
                  <div className={`max-w-[85%] p-3 rounded-2xl text-sm shadow-sm whitespace-pre-wrap leading-relaxed ${isBot ? 'bg-white border border-slate-200 text-slate-700 rounded-tl-none' : 'bg-blue-600 text-white rounded-tr-none'}`}>
                    {content ? (
                      content
                    ) : isBot && isTyping ? (
                      <span className="flex items-center gap-1.5 py-1 px-1">
                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                        <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce"></span>
                      </span>
                    ) : null}
                  </div>
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={onSubmit} className="p-3 bg-white border-t border-slate-100 flex gap-2 items-center">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Ayra anything..."
              className="flex-1 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-blue-500"
            />
            <button 
              type="submit" 
              disabled={!input.trim()}
              aria-label="Send message"
              className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
