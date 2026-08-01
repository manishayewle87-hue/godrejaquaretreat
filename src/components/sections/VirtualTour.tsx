"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, Maximize2, MousePointerClick } from "lucide-react";
import { useModal } from "@/context/ModalContext";

export default function VirtualTour() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const { openModal } = useModal();
  const [isHovered, setIsHovered] = useState(false);

  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1.05]);

  return (
    <section ref={containerRef} className="py-24 bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="text-center mb-16">
          <span className="text-emerald-aqua uppercase tracking-[0.4em] text-xs font-semibold mb-4 block">
            Immersive Experience
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-6">
            360° Virtual Walkthrough
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the grandeur of the 50,000 Sq.Ft Aqua Retreat clubhouse before it's even built. Step inside the absolute pinnacle of luxury.
          </p>
        </div>

        <motion.div 
          style={{ scale }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={openModal}
          className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl cursor-pointer group bg-black"
        >
          <Image 
            fill
            src="https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/aqua-banner-1920x900-01-1-1-cmrnnfkpo000kj2phc4uv4hry.webp"
            alt="360 Virtual Tour Godrej Park World"
            className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-60"
          />
          
          {/* Virtual Tour Overlay UI */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <motion.div 
              animate={{ 
                scale: isHovered ? 1.2 : 1,
                rotate: isHovered ? 90 : 0
              }}
              transition={{ duration: 0.5, type: "spring" }}
              className="w-24 h-24 bg-emerald-aqua/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(45,212,191,0.5)] mb-6"
            >
              <Play className="w-10 h-10 text-white ml-2" />
            </motion.div>
            
            <div className="flex items-center gap-3 bg-gray-900/80 backdrop-blur-md text-white px-6 py-3 rounded-full text-sm tracking-widest uppercase border border-white/10">
              <MousePointerClick className="w-4 h-4" />
              <span>Click to Enter 360° View</span>
            </div>
          </div>

          {/* Compass / Navigation Hint */}
          <div className="absolute bottom-6 left-6 flex items-center gap-4 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
              <div className="w-1 h-4 bg-red-500 rounded-full" />
            </div>
            <span className="text-white text-xs tracking-widest uppercase">Drag to look around</span>
          </div>

          {/* Fullscreen Hint */}
          <div className="absolute top-6 right-6 text-white pointer-events-none">
            <Maximize2 className="w-6 h-6" />
          </div>

        </motion.div>
        
      </div>
    </section>
  );
}
