"use client";

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import KineticText from '@/components/ui/KineticText';

const images = [
  "https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/gallery-inner-image-1310x750-01-cmrnnjdp3000qj2phbce868dn.webp",
  "https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/gallery-outer-image-550x550-01-cmrnni081000nj2ph4yc0h62v.webp",
  "https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/gallery-inner-image-1310x750-02-cmrnnk4as000sj2ph2ycmc25i.webp",
  "https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/gallery-outer-image-550x550-02-cmrnni7e8000oj2ph6zewcfp5.webp",
  "https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/gallery-inner-image-1310x750-03-cmrnnkaqu000tj2ph04dj6dqc.webp",
  "https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/gallery-outer-image-550x550-03-cmrnnieyh000pj2phaywf682n.webp",
];

export default function Gallery() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  return (
    <section id="gallery" ref={targetRef} className="relative h-[300vh] bg-luxury-dark border-t border-black/5">
      <div className="sticky top-0 h-screen flex flex-col items-start overflow-hidden pt-32 pb-16">
        
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 mb-12 shrink-0 z-10 relative">
          <span className="text-emerald-aqua uppercase tracking-[0.4em] text-xs font-semibold mb-4 block">
            The Gallery
          </span>
          <KineticText 
            text="A Glimpse of Elegance."
            el="h2"
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-luxury-light"
          />
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-6 lg:px-12 h-[50vh] min-h-[400px]">
          {images.map((img, index) => (
            <div 
              key={index}
              className={`relative overflow-hidden group shrink-0 border border-black/10 bg-black ${index % 2 === 0 ? 'w-[70vw] md:w-[50vw] lg:w-[40vw]' : 'w-[50vw] md:w-[35vw] lg:w-[25vw]'}`}
            >
              <Image fill 
                src={img} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-luxury-dark/20 group-hover:bg-transparent transition-colors duration-1000 pointer-events-none"></div>
              
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 translate-y-4 group-hover:translate-y-0 text-gray-900 font-serif text-2xl drop-shadow-md">
                View {index + 1}
              </div>
            </div>
          ))}
        </motion.div>

        <div className="absolute bottom-10 left-6 lg:left-12 flex gap-2 items-center">
          <span className="w-12 h-[1px] bg-white/20"></span>
          <span className="text-gray-900/40 text-xs tracking-[0.2em] uppercase font-light">Scroll horizontally</span>
        </div>
      </div>
    </section>
  );
}
