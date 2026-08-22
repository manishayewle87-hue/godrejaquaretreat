"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ShieldCheck, MapPin, Building, Calendar, IndianRupee, Layers, Compass, CheckCircle2 } from 'lucide-react';

const FACT_ITEMS = [
  {
    icon: Building,
    label: "Project Name",
    value: "Godrej The Retreat (The Aqua Retreat)",
    subtext: "At Godrej Park World Township"
  },
  {
    icon: ShieldCheck,
    label: "MahaRERA Registration",
    value: "PM1260002500070",
    subtext: "Verified on maharera.mahaonline.gov.in"
  },
  {
    icon: MapPin,
    label: "Exact Location",
    value: "Hinjewadi Phase 1, Pune 411057",
    subtext: "Rajiv Gandhi Infotech Park (2 mins to Metro 3)"
  },
  {
    icon: IndianRupee,
    label: "Starting Price",
    value: "₹1.10 Crore* Onwards",
    subtext: "2 BHK from ₹1.10 Cr* | 3 BHK from ₹1.65 Cr*"
  },
  {
    icon: Layers,
    label: "Configurations & Typologies",
    value: "2 BHK Luxury & 3 BHK Regal",
    subtext: "Carpet Area: 750 - 1250 Sq. Ft."
  },
  {
    icon: Compass,
    label: "Township & Green Area",
    value: "100+ Acres Integrated Township",
    subtext: "12+ Acres Contiguous Central Greens"
  },
  {
    icon: Calendar,
    label: "Target Possession Date",
    value: "December 2029 (Phased Delivery)",
    subtext: "RERA Compliant Milestone Schedule"
  },
  {
    icon: Building,
    label: "Clubhouse & Lifestyle Amenities",
    value: "50,000 Sq. Ft. 4-Tier Clubhouse",
    subtext: "50m Olympic Lagoon Pool & Hydro Spa"
  }
];

export default function ProjectFactSheet() {
  return (
    <section id="project-overview-table" className="py-24 bg-[#0B0C10] text-white border-t border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-aqua uppercase tracking-[0.3em] text-xs font-semibold mb-4 inline-block px-3 py-1 bg-emerald-aqua/10 border border-emerald-aqua/20 rounded-full">
            Official Project Summary & RERA Verification
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-white tracking-wide mt-2 mb-4">
            Godrej The Retreat <i className="text-emerald-aqua font-light">Hinjewadi</i> Fact Sheet
          </h2>
          <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
            Direct, verified architectural, pricing, and MahaRERA specifications for <strong>Godrej The Retreat Hinjewadi Phase 1, Pune</strong> by Godrej Properties.
          </p>
        </div>

        {/* Fact Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FACT_ITEMS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white/5 border border-white/10 hover:border-emerald-aqua/40 p-6 rounded-2xl transition-all duration-300 group hover:bg-white/[0.07]"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-aqua/10 border border-emerald-aqua/20 flex items-center justify-center text-emerald-aqua mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <p className="text-xs uppercase tracking-wider text-gray-400 font-medium mb-1">
                  {item.label}
                </p>
                <h3 className="text-base md:text-lg font-serif font-semibold text-white mb-1.5 group-hover:text-emerald-aqua transition-colors">
                  {item.value}
                </h3>
                <p className="text-xs text-gray-400 font-light">
                  {item.subtext}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Action & Verification Bar */}
        <div className="mt-12 p-6 md:p-8 bg-gradient-to-r from-emerald-aqua/10 via-black to-emerald-aqua/10 border border-emerald-aqua/30 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-aqua/20 flex items-center justify-center text-emerald-aqua shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-serif text-lg">MahaRERA Project ID: PM1260002500070</h4>
              <p className="text-xs text-gray-400">
                100% verified documentation, sanctions, title deeds, and quarterly construction updates.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <Link
              href="/godrej-the-retreat-hinjewadi"
              className="w-full md:w-auto text-center px-6 py-3 bg-emerald-aqua text-black font-semibold text-xs md:text-sm tracking-wider uppercase rounded-full hover:bg-white transition-all shadow-lg"
            >
              The Retreat Portal
            </Link>
            <Link
              href="/eoi"
              className="w-full md:w-auto text-center px-6 py-3 bg-white/10 text-white font-semibold text-xs md:text-sm tracking-wider uppercase rounded-full hover:bg-emerald-aqua hover:text-black transition-all border border-white/20"
            >
              Request Cost Sheet
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
