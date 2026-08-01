"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gift, Phone } from "lucide-react";
import { useModal } from "@/context/ModalContext";

export default function ExitIntentModal() {
  const [show, setShow] = useState(false);
  const { openModal } = useModal();

  useEffect(() => {
    // Only trigger once per session
    const hasTriggered = sessionStorage.getItem("exitIntentTriggered");
    if (hasTriggered) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger if mouse moves up out of the viewport (indicating closing tab/changing URL)
      if (e.clientY <= 0) {
        setShow(true);
        sessionStorage.setItem("exitIntentTriggered", "true");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!show) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      >
        <motion.div 
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          className="bg-[#15181E] border border-emerald-aqua/30 w-full max-w-lg rounded-2xl relative overflow-hidden shadow-[0_0_50px_rgba(45,212,191,0.1)]"
        >
          {/* Close button */}
          <button 
            onClick={() => setShow(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Graphics */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-aqua to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-aqua/5 blur-[100px] rounded-full pointer-events-none" />

          <div className="p-10 text-center relative z-10">
            <div className="w-16 h-16 bg-emerald-aqua/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Gift className="w-8 h-8 text-emerald-aqua" />
            </div>
            
            <h3 className="text-2xl font-serif text-white mb-2">Wait! Before you leave...</h3>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
              We have an exclusive, unadvertised <strong className="text-white">Pre-Launch Offer</strong> available only for today. Claim your spot for a priority site visit and secure the lowest possible pricing at Godrej Park World Hinjewadi.
            </p>

            <button 
              onClick={() => {
                setShow(false);
                openModal();
              }}
              className="w-full bg-emerald-aqua text-gray-900 font-semibold uppercase tracking-widest text-sm py-4 rounded-lg hover:bg-white transition-colors shadow-xl mb-4"
            >
              Claim Pre-Launch Discount
            </button>
            
            <button 
              onClick={() => setShow(false)}
              className="text-gray-500 text-xs hover:text-white transition-colors"
            >
              No thanks, I will pay full price later
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
