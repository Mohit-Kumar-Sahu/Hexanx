"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { X, Send, Mic, Volume2, VolumeX } from 'lucide-react';

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hello! I am Ayra, Hexanx's Autonomous AI assistant. How can I assist your enterprise today?"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [voiceMode, setVoiceMode] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const abortControllerRef = useRef(null);
  const audioRef = useRef(null);
  const voiceModeRef = useRef(voiceMode);

  useEffect(() => {
    voiceModeRef.current = voiceMode;
  }, [voiceMode]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen, isTyping]);

  // Global Cmd+K / Ctrl+K Magic UX (Hexanx Law 9)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen((prev) => {
          const next = !prev;
          if (next) {
            setTimeout(() => {
              inputRef.current?.focus();
            }, 300);
          }
          return next;
        });
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Cleanup hook to abort on unmount (Law 9 compliance)
  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Acoustic STT (Speech-to-Text via Web Speech API)
  const handleMicClick = () => {
    const SpeechRecognition = typeof window !== 'undefined' ? (window.SpeechRecognition || window.webkitSpeechRecognition) : null;
    if (!SpeechRecognition) {
      alert("Voice recognition is not supported in this browser. Please use Chrome or Safari.");
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-IN'; // Indian English
    recognition.interimResults = false;

    recognition.onstart = () => setIsListening(true);
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInputValue((prev) => prev ? prev + ' ' + transcript : transcript);
    };
    recognition.onerror = (event) => {
      console.error("Speech recognition error", event.error);
      setIsListening(false);
    };
    recognition.onend = () => setIsListening(false);

    recognition.start();
  };

  // Neural TTS (Audio Playback)
  const playTTS = async (text) => {
    if (!text || !text.trim()) return;

    // Reset previous audio if playing
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    // Strip markdown formatting for natural voice synthesis
    const cleanText = text
      .replace(/[*_#`~>]/g, '')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .trim();

    setIsPlaying(true);
    try {
      const response = await fetch('https://hexanx-backend.onrender.com/api/ayra/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: cleanText || text })
      });
      if (!response.ok) throw new Error('TTS fetch failed');
      const blob = await response.blob();
      const audioUrl = URL.createObjectURL(blob);
      const audio = new Audio(audioUrl);
      audioRef.current = audio;
      audio.onended = () => {
        setIsPlaying(false);
        URL.revokeObjectURL(audioUrl);
        audioRef.current = null;
      };
      audio.onerror = () => {
        setIsPlaying(false);
        URL.revokeObjectURL(audioUrl);
        audioRef.current = null;
      };
      audio.play();
    } catch (err) {
      console.error('TTS Error:', err);
      setIsPlaying(false);
    }
  };

  const handleSend = async (messageText) => {
    if (!messageText.trim()) return;

    // 1. Snapshot user message and clear input
    const userMsg = { role: 'user', content: messageText };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
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
      let fullResponseText = "";

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
              // CRITICAL: Auto-play if Voice Mode is ON
              if ((voiceMode || voiceModeRef.current) && fullResponseText.trim()) {
                playTTS(fullResponseText);
              }
              return;
            }
            try {
              const parsed = JSON.parse(payload);
              if (parsed.text) {
                fullResponseText += parsed.text;
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
        if (payload === '[DONE]') {
          setIsTyping(false);
          if ((voiceMode || voiceModeRef.current) && fullResponseText.trim()) {
            playTTS(fullResponseText);
          }
          return;
        }
        try {
          const parsed = JSON.parse(payload);
          if (parsed.text) {
            fullResponseText += parsed.text;
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

      if ((voiceMode || voiceModeRef.current) && fullResponseText.trim()) {
        playTTS(fullResponseText);
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
    if (!inputValue.trim()) return;
    const text = inputValue;
    handleSend(text);
  };

  return (
    <>
      {/* BORDERLESS FLOATING AVATAR LAUNCHER */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Ayra AI"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-transparent border-none shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] hover:scale-110 hover:shadow-[0_20px_50px_-10px_rgba(0,100,255,0.6)] transition-all duration-300 overflow-hidden p-0 focus:outline-none focus:ring-0 cursor-pointer"
      >
        {/* Replace with your exact Ayra avatar image path */}
        <Image
          src="/ayra-avatar.png"
          alt="Ayra AI"
          width={64}
          height={64}
          className="w-full h-full object-cover"
        />
      </button>

      {isOpen && (
        <div className="fixed bottom-24 sm:bottom-28 right-4 sm:right-8 z-50 w-[calc(100vw-2rem)] sm:w-96 max-w-sm bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[75vh] sm:max-h-[520px] animate-slide-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <Image 
                src="/ayra-avatar.png" 
                alt="Ayra AI" 
                width={40}
                height={40}
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
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setVoiceMode(!voiceMode)}
                aria-label="Toggle Voice Mode"
                title={voiceMode ? "Voice Mode ON (Auto-play)" : "Voice Mode OFF"}
                className={`p-1.5 rounded-full transition-colors ${voiceMode ? 'bg-white/20 text-white' : 'hover:bg-white/10 text-white/60 hover:text-white'}`}
              >
                {voiceMode ? <Volume2 className="w-4 h-4"/> : <VolumeX className="w-4 h-4"/>}
              </button>
              <button 
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close Chat"
                className="p-1.5 rounded-full hover:bg-white/10 transition-colors text-white/80 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto bg-slate-50 space-y-3">
            {messages.map((msg, idx) => {
              const isBot = msg.role === 'assistant' || msg.isBot;
              const content = msg.content || msg.text || '';
              return (
                <div key={idx} className={`flex items-end gap-2 ${isBot ? 'justify-start' : 'justify-end'}`}>
                  {isBot && (
                    <Image
                      src="/ayra-avatar.png"
                      alt="Ayra AI"
                      width={24}
                      height={24}
                      className="w-6 h-6 rounded-full aspect-square object-cover shadow-xs border border-slate-100 shrink-0 mb-1"
                    />
                  )}
                  <div className={`max-w-[85%] p-3 rounded-2xl text-sm shadow-sm whitespace-pre-wrap leading-relaxed ${isBot ? 'bg-white border border-slate-200 text-slate-700 rounded-tl-none' : 'bg-blue-600 text-white rounded-tr-none'}`}>
                    {content ? (
                      <>
                        <div>{content}</div>
                        {isBot && (
                          <div className="flex items-center gap-1 mt-2 pt-1 border-t border-slate-100">
                            <button
                              type="button"
                              onClick={() => playTTS(content)}
                              disabled={isPlaying}
                              aria-label="Play audio response"
                              title="Listen to Ayra"
                              className={`flex items-center gap-1.5 text-[11px] font-medium transition-colors px-1.5 py-0.5 rounded hover:bg-slate-100 ${
                                isPlaying ? 'text-blue-600 font-semibold' : 'text-slate-400 hover:text-slate-600'
                              }`}
                            >
                              <Volume2 size={13} className={isPlaying ? "text-blue-600 animate-pulse" : ""} />
                              <span>{isPlaying ? "Playing..." : "Play Audio"}</span>
                            </button>
                          </div>
                        )}
                      </>
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

          {/* Input Form with Mic and Send */}
          <form onSubmit={onSubmit} className="p-3 bg-white border-t border-slate-100 flex gap-2 items-center">
            {/* Acoustic STT Mic Button */}
            <button
              type="button"
              onClick={handleMicClick}
              aria-label="Voice input"
              title={isListening ? "Listening... Speak now" : "Speak to Ayra (Web Speech API)"}
              className={`p-2 rounded-full transition-all duration-300 relative shrink-0 ${
                isListening
                  ? 'bg-red-50 text-red-500 ring-2 ring-red-500 ring-offset-1 animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.4)]'
                  : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100'
              }`}
            >
              {isListening && (
                <span className="absolute inset-0 rounded-full border-2 border-red-500 animate-ping opacity-75 pointer-events-none" />
              )}
              <Mic size={18} className="relative z-10" />
            </button>

            <input 
              ref={inputRef}
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={isListening ? "Listening... speak now" : "Ask Ayra anything..."}
              className="flex-1 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-blue-500"
            />
            <button 
              type="submit" 
              disabled={!inputValue.trim()}
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
