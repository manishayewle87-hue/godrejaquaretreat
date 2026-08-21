"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';

type Message = {
  id: string;
  sender: 'ai' | 'user';
  text: string;
};

// Extremely basic keyword matching for the demo
const getAIResponse = (input: string): string => {
  const q = input.toLowerCase();
  if (q.includes('price') || q.includes('cost')) {
    return "The Aqua Retreat at Godrej Park World offers 2 BHK starting at ₹95 Lakhs* and 3 BHK starting at ₹1.35 Cr*. Would you like me to schedule a call with a sales manager for a detailed cost sheet?";
  }
  if (q.includes('rera') || q.includes('possession')) {
    return "The project is RERA registered (No. PM1260002500070). The estimated possession date is December 2028.";
  }
  if (q.includes('location') || q.includes('where')) {
    return "Godrej Park World is located in Hinjewadi Phase 1, Pune, right next to the upcoming Metro Station and major IT Parks.";
  }
  if (q.includes('amenities') || q.includes('club')) {
    return "We feature a 50,000 sq.ft ultra-luxury clubhouse, a 1.5-acre central lagoon, temperature-controlled pools, and a massive 12-acre central greens ecosystem.";
  }
  if (q.match(/[0-9]{10}/)) {
    return "Thank you. I have captured your number. A senior relationship manager will call you within the next 2 hours.";
  }
  return "That's a great question about Godrej Park World. To give you the most accurate information, could you share your phone number so our sales expert can assist you directly?";
};

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', sender: 'ai', text: "Welcome to Godrej Park World! I am Aqua, your digital assistant. Are you looking for pricing, floor plans, or possession details?" }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), sender: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Simulate AI typing delay
    setTimeout(() => {
      const aiResponse = getAIResponse(userMsg.text);
      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), sender: 'ai', text: aiResponse }]);
      
      // If user typed a phone number, extract digits and send to lead API
      const digits = userMsg.text.replace(/\D/g, '');
      if (digits.length >= 10) {
        fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: "AI Chat Lead",
            phone: digits.slice(-10),
            email: "",
            configuration: `Chatbot Lead (${userMsg.text.slice(0, 100)})`
          })
        }).catch(console.error);
      }
    }, 1000);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1.7 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`fixed bottom-24 right-6 z-50 bg-[#15181E] border border-white/10 text-white p-4 rounded-full shadow-2xl flex items-center justify-center group overflow-hidden ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="Open AI Assistant"
      >
        <div className="absolute inset-0 rounded-full bg-emerald-aqua/20 blur-md group-hover:bg-emerald-aqua/40 transition-colors" />
        <MessageSquare size={24} className="relative z-10 text-emerald-aqua" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 w-[350px] sm:w-[400px] h-[550px] max-h-[85vh] bg-[#15181E] border border-white/10 rounded-2xl shadow-2xl z-[100] flex flex-col overflow-hidden font-sans"
          >
            {/* Header */}
            <div className="bg-[#0B0C10] p-4 flex items-center justify-between border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-aqua/20 flex items-center justify-center">
                  <Sparkles size={16} className="text-emerald-aqua" />
                </div>
                <div>
                  <h3 className="text-white font-serif tracking-widest text-sm uppercase">Aqua AI</h3>
                  <p className="text-emerald-aqua text-[10px] uppercase tracking-widest flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-aqua animate-pulse"></span> Online
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-black/20">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex items-end gap-2 ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${msg.sender === 'user' ? 'bg-white/10' : 'bg-emerald-aqua/20'}`}>
                    {msg.sender === 'user' ? <User size={12} className="text-white" /> : <Bot size={12} className="text-emerald-aqua" />}
                  </div>
                  <div className={`max-w-[75%] p-3 text-sm font-light leading-relaxed ${
                    msg.sender === 'user' 
                      ? 'bg-emerald-aqua text-gray-900 rounded-2xl rounded-br-none' 
                      : 'bg-[#0B0C10] border border-white/5 text-gray-300 rounded-2xl rounded-bl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-[#0B0C10] border-t border-white/5">
              <form onSubmit={handleSend} className="flex items-center gap-2 relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about pricing, floor plans..."
                  className="w-full bg-[#15181E] border border-white/10 rounded-full py-3 pl-4 pr-12 text-sm text-white placeholder:text-gray-600 outline-none focus:border-emerald-aqua transition-colors font-light"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="absolute right-1 top-1 w-10 h-10 bg-emerald-aqua rounded-full flex items-center justify-center text-gray-900 disabled:opacity-50 disabled:bg-white/10 disabled:text-gray-500 transition-colors"
                >
                  <Send size={16} className="-ml-0.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
