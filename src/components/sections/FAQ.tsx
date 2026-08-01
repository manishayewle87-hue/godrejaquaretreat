"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import KineticText from "@/components/ui/KineticText";

const faqs = [
  {
    question: "Where is Godrej Park World located?",
    answer: "Godrej Park World is located in Hinjewadi Phase 1, Pune, Maharashtra. It offers excellent connectivity to the Rajiv Gandhi Infotech Park, the upcoming Hinjewadi Metro Station, and the Mumbai-Pune Expressway."
  },
  {
    question: "What is The Aqua Retreat?",
    answer: "The Aqua Retreat is the flagship ultra-luxury residential cluster within the Godrej Park World township in Hinjewadi. It offers premium 2 and 3 BHK resort-style apartments centered around a massive 50,000 sq.ft luxury clubhouse."
  },
  {
    question: "Is Godrej Park World a good investment?",
    answer: "Yes, investing in Godrej Park World Hinjewadi is highly lucrative. Due to its direct proximity to Pune's largest IT corridor, investors typically see significantly higher rental yields (around 6-7%) and strong year-on-year capital appreciation compared to other Pune micro-markets."
  },
  {
    question: "What are the configuration options available?",
    answer: "The current phase offers Premium 2 BHK, Luxury 2 BHK + Study, and Ultra-Luxury 3 BHK configurations. Carpet areas range from 558 Sq.Ft to over 1,082 Sq.Ft."
  },
  {
    question: "Is the project RERA approved?",
    answer: "Yes, Godrej Park World and The Aqua Retreat are fully MahaRERA registered and compliant, ensuring complete transparency and on-time delivery backed by the 127-year Godrej legacy."
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
