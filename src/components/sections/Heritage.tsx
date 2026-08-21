"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck, Award, Building2, TrendingUp } from "lucide-react";
import KineticText from "@/components/ui/KineticText";

const stats = [
  { icon: <ShieldCheck className="w-8 h-8 text-emerald-aqua" />, value: "127+", label: "Years of Trust" },
  { icon: <Award className="w-8 h-8 text-emerald-aqua" />, value: "250+", label: "Awards Won" },
  { icon: <Building2 className="w-8 h-8 text-emerald-aqua" />, value: "90+", label: "Projects Delivered" },
  { icon: <TrendingUp className="w-8 h-8 text-emerald-aqua" />, value: "32M+", label: "Sq.Ft. Developed" },
];

export default function Heritage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="py-32 bg-luxury-dark relative overflow-hidden text-luxury-light">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,100 C20,0 50,0 100,100 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <span className="text-emerald-aqua uppercase tracking-[0.4em] text-xs font-semibold mb-6 block">
              The Godrej Legacy
            </span>
            <KineticText 
              text="127 Years of Unshakable Trust."
              el="h2"
              className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-[1.1]"
            />
            <p className="text-gray-400 text-lg font-light leading-relaxed mb-10 max-w-xl">
              Godrej Properties brings the Godrej Group philosophy of innovation, sustainability, and excellence to the real estate industry. Each development combines a 127-year legacy of excellence and trust with a commitment to cutting-edge design and technology.
            </p>
            <p className="text-gray-400 text-lg font-light leading-relaxed max-w-xl">
              At Godrej Park World Hinjewadi, you are not just buying a home. You are securing a generational asset backed by India&apos;s most trusted real estate developer.
            </p>
          </motion.div>

          <motion.div style={{ y }} className="grid grid-cols-2 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-[#15181E] border border-white/5 p-8 rounded-2xl flex flex-col items-center justify-center text-center shadow-2xl hover:border-emerald-aqua/30 transition-colors duration-500"
              >
                <div className="mb-4 bg-black/50 p-4 rounded-full">
                  {stat.icon}
                </div>
                <div className="font-serif text-4xl text-white mb-2">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
