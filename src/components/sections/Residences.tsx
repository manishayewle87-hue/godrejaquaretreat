"use client";

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import KineticText from '@/components/ui/KineticText';

const units = [
  { type: "1 BHK", sqM: "51.80 - 57.79", sqFt: "558 - 622", img: "/images/brochure/page_31_img_1.png" },
  { type: "2 BHK", sqM: "79.97 - 84.19", sqFt: "861 - 906", img: "/images/brochure/page_32_img_1.png" },
  { type: "2 BHK + Study", sqM: "103.73 - 103.94", sqFt: "1117 - 1119", img: "/images/brochure/page_33_img_1.png" },
  { type: "3 BHK", sqM: "98.45 - 100.49", sqFt: "1060 - 1082", img: "/images/brochure/page_33_img_1.png" },
];

export default function Residences() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="residences" className="py-32 bg-[#FAFAFA] text-gray-900 border-t border-black/5 relative z-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="mb-20">
          <span className="text-emerald-aqua uppercase tracking-[0.4em] text-xs font-semibold mb-4 block">
            Premium Luxury Apartments in Pune
          </span>
          <KineticText 
            text="Unit Configurations."
            el="h2"
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-luxury-light"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Table / List */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-center">
            {units.map((unit, index) => (
              <div 
                key={index}
                onClick={() => setActiveTab(index)}
                className={`cursor-pointer group flex flex-col gap-2 p-6 border-l-2 transition-all duration-500 ${
                  activeTab === index 
                    ? 'border-emerald-aqua bg-black/5' 
                    : 'border-black/10 hover:border-black/30 hover:bg-black/5'
                }`}
              >
                <div className="flex justify-between items-center">
                  <h3 className={`text-2xl md:text-3xl font-serif transition-colors duration-500 ${activeTab === index ? 'text-luxury-light' : 'text-gray-600'}`}>
                    {unit.type}
                  </h3>
                  <span className={`text-sm tracking-widest ${activeTab === index ? 'text-emerald-aqua' : 'text-gray-600'}`}>
                    VIEW
                  </span>
                </div>
                <div className={`grid grid-cols-2 text-sm mt-4 transition-all duration-500 ${activeTab === index ? 'text-gray-700 opacity-100 h-auto' : 'text-gray-500 opacity-50 h-0 overflow-hidden'}`}>
                  <div>
                    <p className="text-gray-600 text-xs mb-1">CARPET AREA (SQ. M.)</p>
                    <p>{unit.sqM}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-xs mb-1">CARPET AREA (SQ. FT.)</p>
                    <p>{unit.sqFt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Floor Plan Viewer */}
          <div className="lg:col-span-7 bg-black/5 border border-black/10 flex items-center justify-center p-8 min-h-[400px] md:min-h-[600px] relative">
             <div className="absolute top-6 left-6 text-emerald-aqua text-xs tracking-widest uppercase">
               Representative Plan Layout
             </div>
             <AnimatePresence mode="wait">
               <motion.div
                 key={activeTab}
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 1.05 }}
                 transition={{ duration: 0.6, ease: [0.83, 0, 0.17, 1] }}
                 className="flex flex-col items-center justify-center text-gray-500 font-light w-full"
               >
                 {/* Exact Floor Plan Viewer */}
                 <div className="w-full max-w-lg aspect-square bg-white flex flex-col items-center justify-center shadow-2xl relative overflow-hidden group">
                   <Image fill 
                     src={units[activeTab].img} 
                     alt={`${units[activeTab].type} Floor Plan`}
                     className="w-full h-full object-contain p-4 mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                   />
                 </div>
               </motion.div>
             </AnimatePresence>
          </div>
        </div>
        
      </div>
    </section>
  );
}
