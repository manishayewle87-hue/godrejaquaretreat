"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Building2, Train, Building, Trees, Waves } from 'lucide-react';

const ecosystemData = [
  {
    title: "The Aqua Retreat",
    subtitle: "Flagship Ultra-Luxury Resort Cluster",
    icon: <Waves className="w-6 h-6 text-emerald-aqua" />,
    description: "The crown jewel of Godrej Park World, featuring a 50,000 sq.ft clubhouse, cascading infinity pools, and resort-style 2 & 3 BHK residences."
  },
  {
    title: "The Gale",
    subtitle: "High-Energy Urban Dynamism",
    icon: <Building2 className="w-6 h-6 text-emerald-aqua" />,
    description: "Designed for the modern IT professional. Seamlessly integrated with high-street retail, bustling promenades, and ultimate connectivity."
  },
  {
    title: "Godrej Woodsville",
    subtitle: "Premium Residential Enclave",
    icon: <Building className="w-6 h-6 text-emerald-aqua" />,
    description: "A serene residential offering within the township, balancing modern architectural elegance with Godrej's signature trust and quality."
  },
  {
    title: "The Greenfront",
    subtitle: "Expansive Nature Sanctuary",
    icon: <Trees className="w-6 h-6 text-emerald-aqua" />,
    description: "Dedicated to mental wellness and tranquility. Overlooking massive central greens, providing a vital escape from the Hinjewadi IT corridor."
  }
];

const infrastructureData = [
  {
    title: "Rajiv Gandhi Infotech Park",
    type: "IT Corridor",
    icon: <Building2 className="w-5 h-5 text-gray-400" />
  },
  {
    title: "Upcoming Metro Line 3",
    type: "Transit Hub",
    icon: <Train className="w-5 h-5 text-gray-400" />
  },
  {
    title: "Infosys & Wipro Campuses",
    type: "Corporate Zone",
    icon: <MapPin className="w-5 h-5 text-gray-400" />
  },
  {
    title: "Embassy TechZone",
    type: "Commercial Hub",
    icon: <Building2 className="w-5 h-5 text-gray-400" />
  }
];

export default function EcosystemMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section ref={containerRef} className="py-32 bg-[#0B0C10] relative overflow-hidden">
      
      {/* Background Graphic */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <span className="text-emerald-aqua tracking-[0.3em] uppercase text-xs font-semibold block mb-6">
            The Township Masterplan
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">
            The Godrej Park World Ecosystem
          </h2>
          <p className="text-gray-400 font-light text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Godrej Properties Hinjewadi Pune presents a self-sustaining city within a city. Explore the internal residential clusters and the massive external IT infrastructure that surrounds The Aqua Retreat.
          </p>
        </motion.div>

        {/* The Internal Ecosystem */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {ecosystemData.map((cluster, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="bg-[#15181E] border border-white/5 p-10 hover:border-emerald-aqua/30 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-aqua/5 blur-[100px] rounded-full group-hover:bg-emerald-aqua/10 transition-colors" />
              
              <div className="mb-6 bg-white/5 w-14 h-14 rounded-full flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                {cluster.icon}
              </div>
              <h3 className="text-2xl font-serif text-white mb-2">{cluster.title}</h3>
              <span className="text-emerald-aqua text-xs uppercase tracking-widest block mb-6">{cluster.subtitle}</span>
              <p className="text-gray-400 font-light leading-relaxed text-sm">
                {cluster.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* The External Infrastructure */}
        <motion.div 
          style={{ y }}
          className="bg-gradient-to-r from-[#1A1D24] to-[#15181E] border border-white/10 p-12 relative overflow-hidden"
        >
          <div className="absolute left-0 top-0 w-1 h-full bg-emerald-aqua" />
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-12">
            <div>
              <h3 className="text-3xl font-serif text-white mb-4">Hinjewadi IT Corridor</h3>
              <p className="text-gray-400 font-light max-w-xl text-sm leading-relaxed">
                Godrej Park World is strategically positioned at the absolute epicenter of Pune West. It guarantees immediate access to the largest multinational corporations and upcoming transit networks.
              </p>
            </div>
            <div className="px-6 py-3 border border-emerald-aqua/30 text-emerald-aqua text-xs uppercase tracking-[0.2em] font-semibold whitespace-nowrap">
              0 KM to Work
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-12">
            {infrastructureData.map((infra, i) => (
              <div key={i} className="flex flex-col gap-3">
                {infra.icon}
                <span className="text-white font-medium text-sm">{infra.title}</span>
                <span className="text-gray-500 text-xs uppercase tracking-widest">{infra.type}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
