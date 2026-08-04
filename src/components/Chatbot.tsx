import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { COMPANY_INFO } from '../data/companyData';
import { Bot, Send, X, Minimize2, Sparkles, Loader2, RefreshCw } from 'lucide-react';

interface ChatbotProps {
  openQuoteModal: () => void;
}

export const Chatbot: React.FC<ChatbotProps> = ({ openQuoteModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: `Hello! I am the Loop Mold AI Assistant. How can I assist with your 3D printing, prototyping, or material selection today?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    'What materials do you offer?',
    'How fast is turnaround?',
    'Where are you located?',
    'Request a quote help',
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim() || loading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: query }),
      });

      const data = await response.json();
      const botText = data.response || "I am available to answer questions about Loop Mold's 3D printing services in Lake Elsinore, CA! Call us directly at (949) 350-7410.";

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error('Chatbot error:', err);
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: `Loop Mold is located in Lake Elsinore, California, offering 3D printing and rapid prototyping. You can reach us directly at (949) 350-7410 or email ${COMPANY_INFO.email}!`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* Floating Launcher Button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="relative group p-4 rounded-full bg-blue-600 text-white shadow-[0_0_25px_rgba(37,99,235,0.5)] hover:shadow-[0_0_35px_rgba(37,99,235,0.8)] hover:bg-blue-500 hover:scale-105 active:scale-95 transition-all flex items-center justify-center"
        >
          <Bot className="w-7 h-7" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-[#0f1115] animate-pulse" />
          
          {/* Tooltip hint */}
          <span className="absolute right-16 bg-[#1a1d23] border border-white/10 text-blue-400 text-xs font-mono px-3 py-1.5 rounded-xl whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            💬 AI Prototyping Assistant
          </span>
        </button>
      )}

      {/* Floating Chatbot Window */}
      {isOpen && (
        <div className="w-[360px] sm:w-[420px] h-[520px] bg-[#1a1d23] border border-white/10 rounded-2xl shadow-2xl backdrop-blur-xl flex flex-col justify-between overflow-hidden animate-fadeIn">
          
          {/* Header */}
          <div className="p-4 bg-[#0f1115] border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span>Loop Mold AI Assistant</span>
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                </h4>
                <p className="text-[10px] text-blue-400 font-mono">Live Prototyping & CAD Guide</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-[#252a33]"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="p-4 flex-1 overflow-y-auto space-y-3.5 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl leading-relaxed shadow-md ${
                    msg.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-[#252a33] border border-white/5 text-gray-200 rounded-bl-none'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                  <span className={`text-[9px] font-mono block mt-1 ${msg.sender === 'user' ? 'text-blue-100 text-right' : 'text-gray-400'}`}>
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-[#252a33] border border-white/5 p-3 rounded-2xl rounded-bl-none flex items-center gap-2 text-blue-400">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-xs font-mono">Analyzing specs...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompt Pills */}
          <div className="px-3 py-2 bg-[#0f1115] border-t border-white/5 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSend(prompt)}
                className="px-2.5 py-1 rounded-full bg-[#252a33] hover:bg-blue-600/20 hover:text-blue-400 text-[10px] font-medium text-gray-300 border border-white/5 whitespace-nowrap transition-colors"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-3 bg-[#0f1115] border-t border-white/5 flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask about 3D printing, materials, lead times..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 px-3.5 py-2.5 rounded-xl bg-[#1a1d23] border border-white/10 text-white text-xs focus:border-blue-500 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => handleSend()}
              disabled={loading || !input.trim()}
              className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white hover:shadow-md disabled:opacity-50 font-bold transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}
    </div>
  );
};
