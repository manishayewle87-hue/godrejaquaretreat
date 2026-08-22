"use client";

import Link from 'next/link';
import { ChevronRight, ShieldCheck, Download, Calendar, Sparkles } from 'lucide-react';

interface ProgrammaticContextHeroProps {
  title: string;
  category: string;
  categoryLink: string;
  description: string;
  badge?: string;
}

export default function ProgrammaticContextHero({
  title,
  category,
  categoryLink,
  description,
  badge = "MahaRERA: PM1260002500070"
}: ProgrammaticContextHeroProps) {
  return (
    <div className="bg-[#0B0C10] text-white pt-28 pb-12 border-b border-white/10 relative z-30 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-aqua/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-emerald-aqua/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Breadcrumb Bar */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-gray-400 mb-6 flex-wrap font-light">
          <Link href="/" className="hover:text-emerald-aqua transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
          <Link href="/godrej-the-retreat-hinjewadi" className="hover:text-emerald-aqua transition-colors">
            Godrej The Retreat
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
          <Link href={categoryLink} className="hover:text-emerald-aqua transition-colors">
            {category}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
          <span className="text-emerald-aqua font-medium truncate max-w-[200px] md:max-w-none">
            {title}
          </span>
        </nav>

        {/* Hero Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-emerald-aqua/15 border border-emerald-aqua/30 text-emerald-aqua text-[11px] font-semibold tracking-wider uppercase rounded-full flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                {category}
              </span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 text-[11px] font-medium tracking-wider uppercase rounded-full flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-aqua" />
                {badge}
              </span>
            </div>

            <h1 className="font-serif text-3xl md:text-5xl text-white tracking-wide leading-tight mb-4">
              {title}
            </h1>

            <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed max-w-3xl mb-6">
              {description}
            </p>

            {/* PageRank Internal Link Silo Pills */}
            <div className="flex items-center gap-3 flex-wrap pt-2">
              <Link
                href="/godrej-the-retreat-hinjewadi"
                className="text-xs px-4 py-2 bg-emerald-aqua text-black font-semibold rounded-full hover:bg-white transition-all shadow-md"
              >
                The Retreat Flagship Hub
              </Link>
              <Link
                href="/eoi"
                className="text-xs px-4 py-2 bg-white/10 text-white font-medium rounded-full hover:bg-emerald-aqua hover:text-black transition-all border border-white/20 flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                Cost Sheet & Floor Plans
              </Link>
              <Link
                href="/#tour"
                className="text-xs px-4 py-2 bg-white/5 text-gray-300 font-medium rounded-full hover:text-white hover:bg-white/10 transition-all border border-white/10 flex items-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5" />
                Book VIP Site Tour
              </Link>
            </div>
          </div>

          {/* Quick Stats Panel */}
          <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
            <h4 className="text-xs uppercase tracking-widest text-emerald-aqua font-semibold mb-4">
              Key Project Highlights
            </h4>
            <div className="space-y-3 text-xs text-gray-300">
              <div className="flex justify-between pb-2 border-b border-white/5">
                <span className="text-gray-400">Typologies</span>
                <span className="font-semibold text-white">2 & 3 BHK Resort Residences</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-white/5">
                <span className="text-gray-400">Starting Price</span>
                <span className="font-semibold text-emerald-aqua">₹1.10 Cr* Onwards</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-white/5">
                <span className="text-gray-400">Clubhouse</span>
                <span className="font-semibold text-white">50,000 Sq. Ft. Aqua Hub</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Connectivity</span>
                <span className="font-semibold text-white">2 Mins to Metro Line 3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
