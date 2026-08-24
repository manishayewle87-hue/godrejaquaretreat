"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, PhoneCall } from 'lucide-react';
import { useModal } from '@/context/ModalContext';

export default function FloatingCTA() {
  const [expanded, setExpanded] = useState(false);
  const { openModal } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      setExpanded(window.scrollY > window.innerHeight * 0.5);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.5, duration: 1, ease: [0.83, 0, 0.17, 1] }}
      className="hidden md:flex fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[90] flex-col gap-3 items-end"
    >
      <AnimatePresence>
        {expanded && (
          <>
            <motion.a
              href="https://wa.me/917744009295?text=Hi%2C%20I%20am%20interested%20in%20Godrej%20The%20Retreat%20Hinjewadi.%20Please%20share%20the%20brochure%2C%20floor%20plans%2C%20and%20price%20list."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'whatsapp_click', {
                    event_category: 'Lead Generation',
                    event_label: 'Desktop Floating WhatsApp',
                  });
                }
              }}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-xl hover:bg-[#20bd5a] transition-all hover:scale-110"
              title="Chat on WhatsApp"
            >
              <MessageCircle size={24} />
            </motion.a>

            <motion.a
              href="tel:+917744009295"
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'phone_call_click', {
                    event_category: 'Lead Generation',
                    event_label: 'Desktop Floating Phone Call',
                  });
                }
              }}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="w-14 h-14 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-emerald-aqua shadow-xl hover:bg-white transition-colors"
              title="Call Sales Lounge"
            >
              <PhoneCall size={20} />
            </motion.a>
          </>
        )}
      </AnimatePresence>
      
      <motion.button 
        onClick={openModal}
        className="group relative flex items-center justify-center h-14 bg-emerald-aqua text-white rounded-full shadow-2xl hover:bg-emerald-aqua/90 transition-colors overflow-hidden"
        animate={{
          width: expanded ? '140px' : '56px',
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <span className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
        <motion.span 
          animate={{ opacity: expanded ? 1 : 0 }}
          className="absolute text-xs tracking-[0.2em] uppercase font-semibold whitespace-nowrap"
        >
          {expanded ? "Book Visit" : ""}
        </motion.span>
        <motion.div
          animate={{ opacity: expanded ? 0 : 1 }}
          className="absolute"
        >
          <PhoneCall size={20} />
        </motion.div>
      </motion.button>
    </motion.div>
  );
}
