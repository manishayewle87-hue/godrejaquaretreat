"use client";

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import KineticText from '@/components/ui/KineticText';

export default function VideoTour() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} id="tour" className="relative py-32 bg-[#15181E] border-y border-black/5 overflow-hidden z-20 text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-emerald-aqua uppercase tracking-[0.4em] text-xs font-semibold mb-6 block">
              Cinematic Tour
            </span>
            <KineticText 
              text="Experience the Vision."
              el="h2"
              className="font-serif text-4xl md:text-5xl lg:text-7xl text-white"
            />
          </div>
          <p className="text-gray-400 font-light max-w-sm md:text-right text-sm leading-relaxed">
            Immerse yourself in the breathtaking architecture and flowing waterscapes of The Aqua Retreat.
          </p>
        </div>

        <motion.div 
          style={{ scale, opacity }}
          className="relative w-full aspect-video md:aspect-[21/9] bg-black border border-white/10 rounded-[32px] overflow-hidden shadow-2xl shadow-black/50"
        >
          {isMounted && (
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/i9Uk1bydq5s?autoplay=1&mute=1&loop=1&playlist=i9Uk1bydq5s&controls=0&rel=0&modestbranding=1"
              title="Godrej Park World Aqua Retreat Video Tour"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 pointer-events-none"></div>

          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 pointer-events-none">
            <p className="text-xs tracking-[0.3em] uppercase text-gray-300 font-light mb-2">Masterplan Preview</p>
            <p className="font-serif text-2xl md:text-3xl text-white drop-shadow-lg">The Aqua Retreat</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
