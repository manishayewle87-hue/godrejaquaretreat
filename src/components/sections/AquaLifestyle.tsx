"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Leaf, Droplets, Sun, Wind } from 'lucide-react';

export default function AquaLifestyle() {
  const bentoItems = [
    {
      title: "Biophilic Design",
      desc: "Architecture that breathes with nature.",
      icon: <Leaf className="text-emerald-aqua w-6 h-6 mb-4" />,
      colSpan: "md:col-span-2",
      img: "https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/gallery-outer-image-550x550-01-cmrnni081000nj2ph4yc0h62v.webp"
    },
    {
      title: "Aqua Wellness",
      desc: "Curated water therapies.",
      icon: <Droplets className="text-emerald-aqua w-6 h-6 mb-4" />,
      colSpan: "md:col-span-1",
      img: "https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/amenities-1440x210-01-cmrnngyr7000mj2phgw6fbadc.webp"
    },
    {
      title: "Sky Lounges",
      desc: "Elevated views of the estate.",
      icon: <Sun className="text-emerald-aqua w-6 h-6 mb-4" />,
      colSpan: "md:col-span-1",
      bg: "bg-luxury-dark border border-black/10"
    },
    {
      title: "Continuous Flow",
      desc: "Seamless indoor-outdoor living.",
      icon: <Wind className="text-emerald-aqua w-6 h-6 mb-4" />,
      colSpan: "md:col-span-2",
      img: "https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/gallery-inner-image-1310x750-03-cmrnnkaqu000tj2ph04dj6dqc.webp"
    }
  ];

  return (
    <section id="lifestyle" className="py-32 bg-ocean text-gray-900 relative overflow-hidden">
      {/* Decorative Wave Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <svg viewBox="0 0 1440 320" className="absolute top-0 w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,149.3C672,139,768,149,864,170.7C960,192,1056,224,1152,224C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-end mb-20">
          <div className="flex-1">
            <span className="text-emerald-aqua uppercase tracking-[0.2em] text-sm font-semibold mb-6 block">
              The Experience
            </span>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-[90px] leading-[0.9] mb-8">
              Where Every Day <br/> Flows Like <i className="text-emerald-aqua font-light">Water.</i>
            </h2>
          </div>
          <div className="flex-1">
            <p className="text-lg md:text-xl font-light text-gray-700 max-w-lg">
              Wake up to the gentle sound of water. Stroll through biophilic corridors. End your day at the sky lounge watching the sunset over the lagoon. This is the ultimate resort lifestyle.
            </p>
          </div>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[400px]">
          {bentoItems.map((item, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.5, delay: i * 0.15, ease: [0.83, 0, 0.17, 1] }}
              className={`relative overflow-hidden group border border-black/5 ${item.colSpan} ${item.bg || 'bg-luxury-dark'}`}
            >
              {item.img && (
                <>
                  <Image fill src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 opacity-60 group-hover:opacity-40" />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/90 via-luxury-dark/10 to-transparent"></div>
                </>
              )}
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end z-10">
                {item.icon}
                <h3 className="font-serif text-3xl md:text-4xl mb-3 text-luxury-light">{item.title}</h3>
                <p className="text-sm text-gray-600 font-light tracking-wide">{item.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
