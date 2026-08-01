"use client";

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';

const hotspots = [
  { id: 1, title: "The Lagoon", desc: "Central water body spanning 1.5 acres", top: "45%", left: "55%" },
  { id: 2, title: "Club Aqua", desc: "50,000 sq.ft ultra-luxury clubhouse", top: "60%", left: "40%" },
  { id: 3, title: "Yoga Pavilion", desc: "Serene floating meditation decks", top: "35%", left: "30%" },
  { id: 4, title: "Sky Lounge", desc: "Tower A rooftop observatory", top: "25%", left: "65%" },
];

export default function InteractiveMasterplan() {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  return (
    <section id="project" className="py-32 bg-luxury-dark text-luxury-light border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-emerald-aqua uppercase tracking-[0.4em] text-xs font-semibold mb-6 block">
            Masterplan
          </span>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-8">
            Explore the <i className="text-emerald-aqua font-light">Estate.</i>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Interact with the map below to discover the expansive open spaces, water features, and premium amenities that make up The Aqua Retreat.
          </p>
        </div>

        {/* Interactive Map Container */}
        <div className="relative w-full h-[500px] md:h-[800px] bg-black/5 overflow-hidden border border-black/10">
          
          <Image fill 
            src="https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/1ef79448-5bba-45fd-8dc6-f03704d80188.webp" 
            alt="Godrej Park World Entire Master Layout" 
            className="absolute inset-0 w-full h-full object-contain p-4 md:p-10 opacity-70 transition-transform duration-1000"
          />
          
          {/* Hotspots */}
          {hotspots.map((hotspot) => (
            <div 
              key={hotspot.id} 
              className="absolute z-10" 
              style={{ top: hotspot.top, left: hotspot.left }}
              onMouseEnter={() => setActiveHotspot(hotspot.id)}
              onMouseLeave={() => setActiveHotspot(null)}
              onClick={() => setActiveHotspot(hotspot.id === activeHotspot ? null : hotspot.id)}
            >
              <div className="relative -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
                {/* Ping Animation */}
                <div className="absolute inset-0 bg-emerald-aqua rounded-full animate-ping opacity-20 group-hover:opacity-50 transition-colors"></div>
                
                {/* Marker Icon */}
                <div className="relative w-10 h-10 md:w-12 md:h-12 bg-luxury-dark text-emerald-aqua rounded-full flex items-center justify-center border border-emerald-aqua group-hover:bg-emerald-aqua group-hover:text-luxury-dark transition-colors">
                  <MapPin size={20} className="md:w-6 md:h-6" strokeWidth={1.5} />
                </div>
                
                {/* Tooltip */}
                <AnimatePresence>
                  {activeHotspot === hotspot.id && (
                    <motion.div 
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.4, ease: [0.83, 0, 0.17, 1] }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-56 md:w-64 bg-luxury-dark border border-black/10 text-gray-900 p-6 z-20 pointer-events-none"
                    >
                      <h4 className="font-serif text-xl mb-2 text-luxury-light">{hotspot.title}</h4>
                      <p className="text-sm text-gray-600 font-light mb-4 leading-relaxed">{hotspot.desc}</p>
                      <div className="flex items-center gap-2 text-[10px] text-emerald-aqua uppercase tracking-widest font-light">
                        <span>Explore</span>
                        <ArrowRight size={14} strokeWidth={1} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
          
          {/* Mobile Hint */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 border border-black/10 bg-luxury-dark/80 backdrop-blur-md px-6 py-3 md:hidden">
            <span className="text-xs text-gray-700 font-light tracking-[0.2em] uppercase">Tap pins to explore</span>
          </div>

        </div>
      </div>
    </section>
  );
}
