"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import KineticText from '@/components/ui/KineticText';

export default function Masterplan() {
  return (
    <section id="masterplan" className="py-32 bg-[#FAFAFA] text-gray-900 border-t border-black/5 relative z-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="mb-20 text-center">
          <span className="text-emerald-aqua uppercase tracking-[0.4em] text-xs font-semibold mb-4 block">
            The Layout
          </span>
          <KineticText 
            text="Interactive Masterplan."
            el="h2"
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-luxury-light"
          />
          <p className="text-gray-600 font-light mt-6 max-w-2xl mx-auto">
            12+ Acres of Central Greens & Playgrounds. Designed around a resilient landscape centerpiece, fostering a deeper connection between residents and nature.
          </p>
        </div>

        <div className="flex flex-col gap-24">
          {/* Township Masterplan */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full flex flex-col items-center group"
          >
            <h3 className="text-2xl font-serif text-luxury-light mb-8 text-center">Township Masterplan</h3>
            <div className="w-full bg-white p-2 shadow-2xl relative overflow-hidden">
              <Image fill 
                src="https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/1ef79448-5bba-45fd-8dc6-f03704d80188.webp" 
                alt="Township Masterplan - Godrej Park World" 
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </motion.div>

        </div>
        
      </div>
    </section>
  );
}
