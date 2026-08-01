"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { useModal } from "@/context/ModalContext";

export default function StickyCTA() {
  const { openModal } = useModal();

  const handleWhatsApp = () => {
    window.open("https://wa.me/919000000000?text=I'm%20interested%20in%20Godrej%20Park%20World", "_blank");
  };

  const handleCall = () => {
    window.open("tel:+919000000000", "_self");
  };

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
      >
        <button
          onClick={handleWhatsApp}
          className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group relative"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute right-full mr-4 bg-gray-900 text-white text-xs px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity pointer-events-none">
            WhatsApp Us
          </span>
        </button>

        <button
          onClick={openModal}
          className="bg-emerald-aqua text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group relative"
          aria-label="Request Call Back"
        >
          <Phone className="w-6 h-6" />
          <span className="absolute right-full mr-4 bg-gray-900 text-white text-xs px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity pointer-events-none">
            Request Callback
          </span>
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
