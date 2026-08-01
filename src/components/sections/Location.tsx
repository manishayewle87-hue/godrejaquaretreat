"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const locationPoints = [
  { name: "Rajiv Gandhi IT Park", time: "5 Mins" },
  { name: "Mumbai-Pune Expressway", time: "10 Mins" },
  { name: "Upcoming Metro Station", time: "2 Mins" },
  { name: "Phoenix Marketcity", time: "15 Mins" },
];

export default function Location() {
  return (
    <section id="location" className="py-32 bg-luxury-dark text-luxury-light relative border-t border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-end mb-20">
          <div className="flex-1">
            <span className="text-emerald-aqua uppercase tracking-[0.4em] text-xs font-semibold mb-6 block">
              The Location
            </span>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-8 leading-[0.9]">
              Connected to <i className="text-emerald-aqua font-light">Everything.</i>
            </h2>
          </div>
          <div className="flex-1">
            <p className="text-gray-600 font-light max-w-lg leading-relaxed text-sm">
              Situated in the prime IT hub of Hinjewadi Phase 1, Godrej Park World Pune offers unparalleled connectivity to major tech parks, educational institutions, and lifestyle destinations, ensuring your retreat remains connected to the pulse of the city.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.5, ease: [0.83, 0, 0.17, 1] }}
            className="lg:col-span-4 flex flex-col justify-between bg-black border border-black/10 p-10 md:p-12"
          >
            <div>
              <h3 className="text-2xl font-serif text-gray-900 mb-10">Points of Interest</h3>
              
              <div className="flex flex-col gap-6">
                {locationPoints.map((poi, index) => (
                  <div key={index} className="flex items-center justify-between border-b border-black/10 pb-4 group">
                    <h4 className="text-sm font-light text-gray-700 group-hover:text-emerald-aqua transition-colors">{poi.name}</h4>
                    <span className="text-xs text-emerald-aqua tracking-widest uppercase font-semibold">{poi.time}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <button className="text-gray-900 border border-black/20 px-8 py-4 text-xs tracking-[0.2em] uppercase font-light hover:border-emerald-aqua hover:text-emerald-aqua transition-colors duration-500 w-full mt-12 bg-black/5">
              Get Directions
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.5, ease: [0.83, 0, 0.17, 1] }}
            className="lg:col-span-8 relative min-h-[500px] w-full border border-black/10 overflow-hidden group"
          >
            <Image fill 
              src="https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/1ce5fd50-c862-4897-b366-193da11253ca.webp"
              alt="Godrej Park World Pune Location Map - Godrej Properties Pune Projects"
              className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-luxury-dark/40 mix-blend-overlay pointer-events-none"></div>
            
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center bg-black/60 backdrop-blur-md border border-black/10 p-8">
                <div className="w-3 h-3 bg-emerald-aqua rounded-full mx-auto mb-4 animate-pulse"></div>
                <p className="font-serif text-3xl text-gray-900 tracking-wide mb-2">The Aqua Retreat</p>
                <p className="text-gray-600 text-xs tracking-[0.2em] uppercase">Hinjewadi Phase 1</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
