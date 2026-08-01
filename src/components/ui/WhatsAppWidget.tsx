"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppWidget() {
  const phoneNumber = "917744009295";
  const message = encodeURIComponent("Hi, I am interested in The Aqua Retreat at Godrej Park World. Please share more details.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group overflow-hidden"
      aria-label="Chat with us on WhatsApp"
    >
      <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping group-hover:hidden" />
      <MessageCircle size={28} className="relative z-10" />
      
      {/* Tooltip on Hover */}
      <span className="absolute right-full mr-4 bg-gray-900 text-white text-xs font-semibold py-2 px-4 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
        Chat with Sales Team
      </span>
    </motion.a>
  );
}
