"use client";

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Magnetic from "@/components/ui/Magnetic";
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal animations for text
      gsap.fromTo(
        ".reveal-text",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          stagger: 0.15,
          ease: "expo.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 85%",
          }
        }
      );

      // Parallax effect for image (Increased Intensity)
      gsap.fromTo(
        ".about-image",
        { y: -120, scale: 1.15 },
        {
          y: 120,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-32 relative bg-[#F5F5F0] text-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Typography & Story */}
          <div ref={textRef} className="flex flex-col justify-center py-10 md:py-20 pr-8">
            <span className="reveal-text text-emerald-aqua uppercase tracking-[0.4em] text-xs font-semibold mb-8 block">
              Godrej The Retreat Hinjewadi • Godrej Properties Pune
            </span>
            <h2 className="reveal-text font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-10 text-luxury-light">
              Soak in the essence of <br className="hidden md:block" />
              <i className="text-emerald-aqua font-light">Aqua living.</i>
            </h2>
            <div className="reveal-text w-20 h-[1px] bg-emerald-aqua/30 mb-10"></div>
            <p className="reveal-text text-base md:text-xl text-gray-600 font-light leading-relaxed mb-8">
              A premium gated resort community meticulously crafted around a resilient landscape centerpiece, standing as the apex of <strong>Pune Real Estate Investment</strong>: <strong>Godrej The Retreat</strong> at Godrej Park World Hinjewadi Phase 1 features 12+ Acres of Central Greens, 50,000 sq.ft 4-level clubhouse, and Olympic lagoon pools.
            </p>
            <p className="reveal-text text-base md:text-xl text-gray-600 font-light leading-relaxed mb-12">
              At the heart of this integrated 100+ acre township in Rajiv Gandhi Infotech Park lies the restoration of an existing natural stream, nurturing a serene eco-sanctuary. Whether seeking high rental yield (7.2% - 8.0%) or luxury living 2 minutes from Pune Metro Line 3, <strong>Godrej The Retreat Hinjewadi</strong> offers an unmatched standard of tranquility and capital appreciation.
            </p>
            <div className="reveal-text flex flex-wrap gap-4 mt-4">
               <Magnetic strength={0.3}>
                 <Link href="/godrej-the-retreat-hinjewadi" scroll={false} className="bg-emerald-aqua text-black px-6 py-3 rounded-full text-xs md:text-sm tracking-[0.1em] uppercase font-bold hover:bg-black hover:text-white transition-all duration-500 shadow-md inline-block">
                   Godrej The Retreat Portal
                 </Link>
               </Magnetic>
               <Magnetic strength={0.3}>
                 <Link href="/godrej-park-world-pune-masterplan" scroll={false} className="bg-emerald-aqua/10 text-emerald-aqua px-6 py-3 rounded-full text-xs md:text-sm tracking-[0.1em] uppercase font-semibold hover:bg-emerald-aqua hover:text-white transition-all duration-500 shadow-sm inline-block">
                   Explore Masterplan
                 </Link>
               </Magnetic>
            </div>
          </div>

          {/* Right: Large Editorial Photography */}
          <div ref={imageRef} className="relative h-[500px] md:h-[700px] w-full overflow-hidden border-l border-black/5">
            <div className="about-image absolute inset-[-15%] w-[130%] h-[130%]">
              <Image fill 
                src="https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/aqua-banner-1920x900-01-1-1-cmrnnfkpo000kj2phc4uv4hry.webp" 
                alt="The Aqua Retreat at Godrej Park World - A Godrej Properties Pune Project" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-luxury-dark/20 mix-blend-overlay pointer-events-none"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
