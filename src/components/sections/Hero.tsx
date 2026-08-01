"use client";

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import KineticText from "@/components/ui/KineticText";
import Magnetic from "@/components/ui/Magnetic";
import { useModal } from "@/context/ModalContext";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { openModal } = useModal();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} id="home" aria-label="Hero Introduction" className="relative h-screen w-full overflow-hidden bg-luxury-dark">
      {/* Background Media */}
      <motion.div 
        style={{ y, opacity }} 
        className="absolute inset-0 w-full h-full"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-dark/40 via-transparent to-luxury-dark/90 z-10" />
        <Image fill 
          src="https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/overview-1740x810-cmrnngdyo000lj2phcjaf0u8l.webp" 
          alt="Godrej Park World Elevation - Godrej Properties Pune Projects" 
          className="object-cover w-full h-full scale-105"
        />
        {/* Soft floating particles / Water ripple placeholder effect */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] z-20 opacity-30 mix-blend-overlay"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-30 h-full flex flex-col justify-end items-start pb-32 px-6 lg:px-16 max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, delay: 0.2, ease: [0.83, 0, 0.17, 1] }}
          className="max-w-4xl"
        >
          <span className="text-emerald-aqua tracking-[0.4em] uppercase text-xs md:text-sm font-semibold mb-8 block ml-1">
            Godrej Properties Pune • Luxury Premium Township in Hinjewadi Phase 1
          </span>

          <KineticText 
            text="A Life Inspired By The Way Of Water."
            el="h1"
            className="font-serif text-6xl md:text-8xl lg:text-[110px] text-luxury-light leading-[0.9] mb-8"
          />

          <p className="text-gray-700 text-lg md:text-2xl font-light max-w-3xl mb-12 leading-relaxed">
            Where water shapes life, every space flows with calm, grace & meaning. Experience resort-style luxury living and buy a premium 2 & 3 BHK flat at The Aqua Retreat, the crown jewel of Godrej Park World.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <Magnetic strength={0.4}>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openModal} 
                className="bg-[#15181E] text-white px-10 py-5 rounded-full text-xs font-semibold tracking-widest uppercase hover:bg-emerald-aqua transition-colors duration-500 shadow-xl shadow-black/10"
              >
                Book A Private Tour
              </motion.button>
            </Magnetic>
            <Magnetic strength={0.4}>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openModal}
                className="bg-white/90 backdrop-blur-md text-gray-900 px-8 py-4 rounded-full text-sm tracking-[0.15em] uppercase font-semibold shadow-xl shadow-black/5 hover:bg-white transition-all duration-300"
              >
                Download Brochure
              </motion.button>
            </Magnetic>
          </div>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
      >
        <span className="text-gray-900/50 text-xs tracking-widest uppercase">Scroll to explore</span>
        <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 64, 64] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="w-full h-1/2 bg-white absolute top-0 left-0"
          />
        </div>
      </motion.div>
    </section>
  );
}
