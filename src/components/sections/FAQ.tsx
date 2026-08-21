"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import KineticText from "@/components/ui/KineticText";

const faqs = [
  {
    question: "What is Godrej The Retreat Hinjewadi?",
    answer: "Godrej The Retreat (also known as The Aqua Retreat) is the flagship ultra-luxury residential development inside the 100+ acre Godrej Park World township in Hinjewadi Phase 1, Pune. Developed by Godrej Properties Pune, it features premium 2 & 3 BHK resort-style residences centered around an Olympic lagoon pool and a 50,000 sq.ft 4-level clubhouse."
  },
  {
    question: "Where is Godrej The Retreat located in Pune?",
    answer: "Godrej The Retreat is located in Hinjewadi Phase 1, Rajiv Gandhi Infotech Park, Pune, Maharashtra 411057. It enjoys zero-bridge connectivity to Infosys Circle, Wipro Campus, TCS, and the upcoming Hinjewadi Metro Line 3 station (just 2 minutes away)."
  },
  {
    question: "What is the price of 2 BHK and 3 BHK at Godrej The Retreat Hinjewadi?",
    answer: "At Godrej The Retreat Hinjewadi, luxury 2 BHK residences start at approximately ₹1.10 Crore* (750 - 820 sq.ft carpet), while regal 3 BHK resort residences range from ₹1.65 Crore* to ₹2.50 Crore* (1060 - 1250 sq.ft carpet) featuring expansive panoramic balcony decks."
  },
  {
    question: "What is the MahaRERA registration number for Godrej The Retreat?",
    answer: "Godrej The Retreat is fully registered under MahaRERA registration number PM1260002500070. All project approvals, layout sanctions, and quarterly completion milestones are verifiable on the official MahaRERA portal (maharera.mahaonline.gov.in)."
  },
  {
    question: "Why is Godrej The Retreat the top investment in Hinjewadi Phase 1?",
    answer: "Godrej The Retreat delivers an outstanding 7.2% to 8.0% expected rental yield fueled by over 300,000 IT professionals in Hinjewadi. Combined with the upcoming Pune Metro Line 3 commissioning, investors benefit from high corporate tenant demand and substantial capital appreciation."
  },
  {
    question: "What resort amenities are provided at Godrej The Retreat?",
    answer: "Key amenities include a 50,000 sq.ft multi-tier luxury clubhouse, a 50m Olympic-length lagoon infinity pool, sunken poolside cabanas, Ayurvedic hydrotherapy spa, indoor badminton and squash courts, 100% vehicle-free podium, and 12+ acres of contiguous central greens."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-[#0B0C10] relative z-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-emerald-aqua/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageCircleQuestion className="w-8 h-8 text-emerald-aqua" />
          </div>
          <span className="text-emerald-aqua uppercase tracking-[0.4em] text-xs font-semibold mb-4 block">
            Information Matrix
          </span>
          <KineticText 
            text="Frequently Asked Questions"
            el="h2"
            className="font-serif text-4xl md:text-5xl text-white mb-6"
          />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`border border-white/10 rounded-2xl overflow-hidden transition-colors duration-300 ${
                openIndex === index ? 'bg-white/5 border-emerald-aqua/30' : 'bg-[#15181E] hover:border-white/20'
              }`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className={`font-serif text-lg md:text-xl transition-colors ${openIndex === index ? 'text-emerald-aqua' : 'text-gray-300'}`}>
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-emerald-aqua' : ''}`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-400 font-light leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
