"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import KineticText from '@/components/ui/KineticText';
import { ShieldCheck, Droplet, Sun, PenTool, ChevronDown } from 'lucide-react';

const specs = [
  {
    icon: ShieldCheck,
    title: "Structural Integrity",
    subtitle: "IS 13920 Earthquake Resistance",
    desc: "Built with an earthquake-resistant framed RCC structure. We prioritize safety by opting for certified steel conforming to IS 1786. Where design requires M30 grade, we procure higher grade M35 concrete to ensure maximum core strength and long-term durability.",
  },
  {
    icon: Droplet,
    title: "Advanced Waterproofing",
    subtitle: "5x the Industry Standard",
    desc: "We apply a waterproof chemical coating up to a height of 1.5m in shower areas of all washrooms, which is 5 times the industry standard of 0.3m. A 2-coat single component waterproof layer is applied to all wet areas. We also execute damp proofing on external dead walls before texture and paint, completely ruling out any seepage.",
  },
  {
    icon: Sun,
    title: "Performance Glass",
    subtitle: "Thermal Regulation & Impact Safety",
    desc: "All glasses used in the development are heat-strengthened. For bottom fixed panels, we utilize laminated heat-strengthened glass prioritizing safety against impact and breakage. The performance glass conforms to IGBC Silver rating requirements for significantly better thermal regulation.",
  },
  {
    icon: PenTool,
    title: "Detailed Finishes",
    subtitle: "Premium Tiling & Modern Utilities",
    desc: "We provide micro-concrete bands at the junctions of wet areas (toilets, balconies, utilities) to prevent lateral seepage through tile bedding mortar. In an industry-first practice, we provision concealed secondary drain spouts in washrooms to direct water percolating through bedding mortar directly into the drain pipe. Premium Vitrified tiles adorn the living spaces with anti-skid tiles mapped to all wet areas.",
  }
];

export default function Specifications() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="specifications" className="py-32 bg-[#FAFAFA] text-gray-900 border-t border-black/5 relative z-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-20">
        
        {/* Left Side: Title */}
        <div className="lg:w-1/3">
          <div className="sticky top-32">
            <span className="text-emerald-aqua uppercase tracking-[0.4em] text-xs font-semibold mb-4 block">
              The Specifications
            </span>
            <KineticText 
              text="Built with Quality."
              el="h2"
              className="font-serif text-5xl md:text-6xl text-luxury-light leading-tight mb-4"
            />
            <p className="text-gray-600 font-light text-lg mb-10">
              Detailed with grace. Inspired by the Way of Water.
            </p>
            <div className="hidden lg:block w-full h-[1px] bg-black/10"></div>
          </div>
        </div>

        {/* Right Side: Accordion */}
        <div className="lg:w-2/3">
          <div className="flex flex-col ">
            {specs.map((spec, index) => {
              const Icon = spec.icon;
              const isOpen = openIndex === index;
              return (
                <div key={index} className="mb-4 bg-white shadow-lg shadow-black/5 rounded-[24px] px-6 border border-black/5">
                  <button 
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between py-8 group text-left"
                  >
                    <div className="flex items-center gap-6 md:gap-10">
                      <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-colors duration-500 ${isOpen ? 'bg-emerald-aqua text-luxury-dark' : 'bg-black/5 text-emerald-aqua group-hover:bg-black/10'}`}>
                        <Icon size={24} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className={`text-2xl md:text-3xl font-serif transition-colors duration-500 ${isOpen ? 'text-luxury-light' : 'text-gray-600 group-hover:text-luxury-light'}`}>
                          {spec.title}
                        </h3>
                        <p className={`text-xs uppercase tracking-widest mt-2 ${isOpen ? 'text-emerald-aqua' : 'text-gray-600 group-hover:text-gray-600'}`}>
                          {spec.subtitle}
                        </p>
                      </div>
                    </div>
                    <motion.div 
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="text-gray-500 group-hover:text-gray-900"
                    >
                      <ChevronDown size={24} strokeWidth={1} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.83, 0, 0.17, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-10 pl-[72px] md:pl-[104px] pr-4 md:pr-12">
                          <p className="text-gray-700 font-light leading-relaxed text-sm md:text-base">
                            {spec.desc}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
        
      </div>
    </section>
  );
}
