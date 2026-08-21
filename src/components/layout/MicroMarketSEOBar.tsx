"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Building2, MapPin, Sparkles, Compass } from 'lucide-react';

interface MicroMarketGroup {
  id: string;
  title: string;
  icon: string;
  description: string;
  keywords: { label: string; slug: string; highlight?: boolean }[];
}

const MICRO_MARKET_GROUPS: MicroMarketGroup[] = [
  {
    id: 'hinjewadi',
    title: 'Godrej The Retreat & Hinjewadi Hubs',
    icon: '🏢',
    description: 'Explore ultra-luxury resort residences & integrated townships across Rajiv Gandhi Infotech Park & Phase 1.',
    keywords: [
      { label: 'Godrej The Retreat Hinjewadi', slug: 'godrej-the-retreat-hinjewadi', highlight: true },
      { label: 'Godrej The Retreat Phase 1', slug: 'godrej-the-retreat-phase-1', highlight: true },
      { label: 'Godrej Park World Hinjewadi', slug: 'godrej-park-world-hinjewadi', highlight: true },
      { label: 'The Aqua Retreat Hinjewadi Phase 1', slug: 'the-aqua-retreat-hinjewadi', highlight: true },
      { label: 'Godrej The Retreat Floor Plan', slug: 'godrej-the-retreat-floor-plan' },
      { label: 'Godrej The Retreat Price List', slug: 'godrej-the-retreat-price' },
      { label: 'Godrej The Retreat Brochure', slug: 'godrej-the-retreat-brochure' },
      { label: 'Godrej The Retreat Sample Flat', slug: 'godrej-the-retreat-sample-flat' },
      { label: 'Godrej Elements Hinjewadi', slug: 'godrej-elements' },
      { label: 'Godrej 24 Hinjewadi', slug: 'godrej-24' },
      { label: 'Godrej Woodsville Hinjewadi', slug: 'godrej-woodsville' },
      { label: 'Near Infosys Hinjewadi Phase 1', slug: 'near-infosys-hinjewadi-phase-1' },
      { label: 'Near Wipro Circle Hinjewadi', slug: 'near-wipro-hinjewadi-phase-1' },
      { label: 'Near TCS Hinjewadi Phase 3', slug: 'near-tcs-hinjewadi-phase-3' },
      { label: 'Hinjewadi Rajiv Gandhi Infotech Park', slug: 'hinjewadi-rajiv-gandhi-infotech-park' },
      { label: 'Godrej New Launch Hinjewadi', slug: 'godrej-properties-hinjewadi' },
      { label: 'Flats in Hinjewadi Phase 1', slug: 'hinjewadi-phase-1' },
    ]
  },
  {
    id: 'mahalunge',
    title: 'Godrej Mahalunge & Baner Townships',
    icon: '🌿',
    description: 'Discover river-front townships, hillside sanctuaries, and premium residences along the Mahalunge-Baner IT Corridor.',
    keywords: [
      { label: 'Godrej Mahalunge Pune', slug: 'godrej-mahalunge-pune', highlight: true },
      { label: 'Godrej Rivergreens Mahalunge', slug: 'godrej-rivergreens-mahalunge', highlight: true },
      { label: 'Godrej Hillside Mahalunge', slug: 'godrej-hillside-mahalunge' },
      { label: 'Godrej Green Vistas Mahalunge', slug: 'godrej-green-vistas-mahalunge' },
      { label: 'Godrej Meadows Mahalunge', slug: 'godrej-meadows-mahalunge' },
      { label: 'Godrej Boulevard Mahalunge', slug: 'godrej-boulevard-mahalunge' },
      { label: 'Godrej Eden Estate Mahalunge', slug: 'godrej-eden-estate-mahalunge' },
      { label: 'Godrej Properties Mahalunge Baner', slug: 'godrej-properties-mahalunge' },
      { label: 'Wakad IT Corridor Apartments', slug: 'wakad' },
      { label: 'Baner Balewadi High Street Flats', slug: 'baner' },
      { label: 'Mahalunge Pune Real Estate', slug: 'mahalunge' },
    ]
  },
  {
    id: 'portfolio',
    title: 'Godrej Properties Pune Portfolio',
    icon: '👑',
    description: 'Browse Godrej Properties Pune luxury projects across Pimpri-Chinchwad, Kharadi, Manjari, Mundhwa, and Undri.',
    keywords: [
      { label: 'Godrej Properties Pune Projects', slug: 'godrej-properties-pune-projects', highlight: true },
      { label: 'Godrej Emerald Waters Pimpri', slug: 'godrej-emerald-waters', highlight: true },
      { label: 'Godrej Urban Retreat Kharadi', slug: 'godrej-urban-retreat' },
      { label: 'Godrej Parkridge Manjari', slug: 'godrej-parkridge' },
      { label: 'Godrej Gale Pune', slug: 'godrej-gale' },
      { label: 'Godrej Greenfront Pune', slug: 'godrej-greenfront' },
      { label: 'Godrej Forest Grove Mamurdi', slug: 'godrej-forest-grove' },
      { label: 'Godrej Nurture Mamurdi', slug: 'godrej-nurture' },
      { label: 'Godrej Prana Undri', slug: 'godrej-prana' },
      { label: 'Godrej Infinity Keshav Nagar', slug: 'godrej-infinity' },
      { label: 'Godrej Rejuve Mundhwa', slug: 'godrej-rejuve' },
      { label: 'Godrej Properties Pune Price List', slug: 'godrej-properties-pune' },
    ]
  },
  {
    id: 'rank1',
    title: 'Google SERP Rank #1 Keywords',
    icon: '🚀',
    description: 'High-intent search queries engineered to rank #1 on Google Search for Godrej The Retreat Hinjewadi & Godrej Park World.',
    keywords: [
      { label: 'Godrej The Retreat Hinjewadi', slug: 'godrej-the-retreat-hinjewadi', highlight: true },
      { label: 'Godrej The Retreat Price & Cost Sheet', slug: 'godrej-the-retreat-price', highlight: true },
      { label: 'Godrej The Retreat Floor Plans 2 & 3 BHK', slug: 'godrej-the-retreat-floor-plan', highlight: true },
      { label: 'The Aqua Retreat by Godrej Properties Hinjewadi', slug: 'the-aqua-retreat-hinjewadi', highlight: true },
      { label: 'Godrej Park World Hinjewadi Phase 1', slug: 'godrej-park-world-hinjewadi', highlight: true },
      { label: 'Godrej The Retreat Sample Flat Photos & Video', slug: 'godrej-the-retreat-sample-flat' },
      { label: '50,000 Sq. Ft. Aqua Clubhouse & Infinity Pool Hinjewadi', slug: 'the-aqua-retreat-hinjewadi' },
      { label: 'Best 2 & 3 BHK Luxury Resort Apartments Pune West', slug: 'hinjewadi-phase-1' },
      { label: 'Godrej The Retreat Reviews & Possession Date', slug: 'godrej-the-retreat-reviews' },
      { label: 'MahaRERA PM1260002500070 Verified Registration', slug: 'godrej-the-retreat-rera' },
      { label: 'Godrej Park World vs Lodha Panache Comparison', slug: 'godrej-park-world-hinjewadi' },
      { label: 'Pune West Real Estate Investment Yield Matrix', slug: 'godrej-park-world-hinjewadi' },
    ]
  },
  {
    id: 'core-directory',
    title: 'Godrej The Retreat & Park World Directory',
    icon: '🏆',
    description: 'Direct high-intent commercial and brand portal for all Godrej The Retreat and Park World properties, pricing, and configurations.',
    keywords: [
      { label: 'Godrej The Retreat Hinjewadi', slug: 'godrej-the-retreat-hinjewadi', highlight: true },
      { label: 'Godrej The Retreat 2 BHK & 3 BHK', slug: 'godrej-the-retreat-2-bhk', highlight: true },
      { label: 'Godrej The Retreat Booking & Cost Sheet', slug: 'godrej-the-retreat-price' },
      { label: 'Godrej The Retreat Brochure PDF', slug: 'godrej-the-retreat-brochure' },
      { label: 'Godrej Park World Price', slug: 'godrej-park-world-price' },
      { label: 'The Greenfront by Godrej Pune', slug: 'the-greenfront-pune' },
      { label: 'The Gale at Godrej Park World', slug: 'the-gale-pune' },
      { label: 'Godrej Hill Retreat Mahalunge (Distinct Project)', slug: 'godrej-hill-retreat-mahalunge' },
      { label: 'Godrej Properties Hinjewadi Phase 1', slug: 'godrej-properties-hinjewadi' },
      { label: 'Buy Godrej Property in Pune', slug: 'buy-godrej-flat-pune' },
      { label: 'Godrej The Retreat MahaRERA PM1260002500070', slug: 'godrej-the-retreat-rera' },
      { label: 'Godrej The Retreat Master Plan', slug: 'godrej-the-retreat-master-plan' }
    ]
  }
];

export default function MicroMarketSEOBar() {
  const [activeTab, setActiveTab] = useState<string>('hinjewadi');

  const currentGroup = MICRO_MARKET_GROUPS.find(g => g.id === activeTab) || MICRO_MARKET_GROUPS[0];

  return (
    <section 
      aria-label="Godrej Properties Pune Micro-Market Keyword Hub" 
      className="py-16 bg-[#08090C] text-white border-t border-white/10 relative z-20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-emerald-aqua uppercase tracking-[0.3em] text-xs font-semibold mb-3">
              <Sparkles className="w-4 h-4" />
              <span>Micro-Market & Portfolio Index</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif text-white">
              Explore Godrej Properties Across Pune West & East
            </h2>
          </div>

          {/* Interactive Group Switcher Tabs */}
          <div className="flex flex-wrap items-center bg-white/5 border border-white/10 rounded-full p-1.5 w-full md:w-auto">
            {MICRO_MARKET_GROUPS.map((group) => (
              <button
                key={group.id}
                onClick={() => setActiveTab(group.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 ${
                  activeTab === group.id
                    ? 'bg-emerald-aqua text-gray-950 shadow-md'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <span>{group.icon}</span>
                <span>{group.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Current Tab Description & Micro-Market Pill Cloud */}
        <div className="bg-[#0E1015] border border-white/10 rounded-3xl p-6 md:p-8 shadow-xl">
          <p className="text-gray-400 text-xs font-light mb-6 leading-relaxed">
            {currentGroup.description}
          </p>

          <div className="flex flex-wrap items-center gap-2.5">
            {currentGroup.keywords.map((kw, index) => (
              <Link
                key={index}
                href={`/properties/${kw.slug}`}
                className={`group inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                  kw.highlight
                    ? 'bg-emerald-aqua/20 text-emerald-aqua border border-emerald-aqua/40 hover:bg-emerald-aqua hover:text-gray-950 shadow-sm'
                    : 'bg-white/5 text-gray-300 border border-white/10 hover:border-emerald-aqua/50 hover:text-white hover:bg-white/10'
                }`}
              >
                <MapPin className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                <span>{kw.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Trust Line */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center text-[11px] text-gray-500 font-light gap-4">
          <p>
            Authorised Partner Website for Godrej Park World Hinjewadi & Godrej Properties Pune. MahaRERA Number: PM1260002500070.
          </p>
          <Link
            href="/properties/godrej-properties-pune"
            className="text-emerald-aqua hover:underline uppercase tracking-widest font-semibold"
          >
            View Complete Pune Directory →
          </Link>
        </div>

      </div>
    </section>
  );
}
