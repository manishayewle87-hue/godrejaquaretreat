"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useModal } from '@/context/ModalContext';
import KineticText from '@/components/ui/KineticText';
import { Waves, Sparkles, Dumbbell, Wine, CheckCircle2, Download, ArrowRight, ShieldCheck, Layers, Eye, HeartHandshake } from 'lucide-react';

type LevelId = 'LEVEL_1' | 'LEVEL_2' | 'LEVEL_3' | 'LEVEL_4';

interface ClubhouseLevel {
  id: LevelId;
  label: string;
  name: string;
  area: string;
  tagline: string;
  description: string;
  seoKeywordFocus: string;
  keyAmenities: {
    title: string;
    description: string;
  }[];
  architecturalFeature: string;
}

const CLUBHOUSE_LEVELS: ClubhouseLevel[] = [
  {
    id: 'LEVEL_1',
    label: 'Level 1',
    name: 'Aqua Deck & Lagoon Pool Pavilion',
    area: '18,500 Sq. Ft. Indoor / Outdoor Deck',
    tagline: 'Olympic-Length Infinity Lagoon & Sunken Cabanas',
    description: 'Designed as the centerpiece of Godrej Aqua Retreat Hinjewadi, Level 1 features a 50-meter Olympic-length infinity lagoon pool surrounded by sunken poolside cabanas, an aqua gym, and a dedicated children’s splash pad.',
    seoKeywordFocus: 'Godrej Park World clubhouse swimming pool & lagoon deck',
    keyAmenities: [
      {
        title: '50-Meter Olympic Infinity Lagoon Pool',
        description: 'Temperature-monitored infinity edge pool overlooking the 12-acre botanical green spine of Hinjewadi Phase 1.'
      },
      {
        title: 'Sunken Poolside Cabanas & Cocktail Bar Deck',
        description: 'Aman-resort inspired sunken lounge seating with personal attendant service and wireless charging docks.'
      },
      {
        title: 'Dedicated Aqua Gym & Hydrotherapy Jets',
        description: 'Specialized low-impact aquatic resistance training zones for cardio and sports rehabilitation.'
      },
      {
        title: 'Childrens Safety Splash Pad & Shallow Cove',
        description: 'Zero-depth entry kids pool with non-slip Italian mosaic tiling and permanent lifeguard surveillance.'
      }
    ],
    architecturalFeature: 'Frameless Acrylic Edge Pool Overhang with Submerged Fiber-Optic Star Lighting'
  },
  {
    id: 'LEVEL_2',
    label: 'Level 2',
    name: 'Wellness & Ayurvedic Holistic Spa',
    area: '11,000 Sq. Ft. Wellness Sanctuary',
    tagline: 'Heated Vitality Pool & Ayurvedic Treatment Suites',
    description: 'Level 2 is an immersive wellness sanctuary offering Ayurvedic therapeutic spa rooms, Finnish timber saunas, eucalyptus steam chambers, and a heated indoor vitality pool designed for year-round rejuvenation.',
    seoKeywordFocus: 'Godrej Aqua Retreat Hinjewadi spa & wellness clubhouse',
    keyAmenities: [
      {
        title: 'Heated Indoor Vitality Pool & Jacuzzi Suites',
        description: 'Indoor temperature-controlled vitality hydrotherapy pool with ergonomic underwater massage lounges.'
      },
      {
        title: 'Ayurvedic Therapy & Massage Treatment Rooms',
        description: 'Private spa therapy suites designed with natural stone interiors and acoustic soundproofing.'
      },
      {
        title: 'Eucalyptus Steam & Finnish Timber Saunas',
        description: 'Authentic Nordic sauna chambers and aromatherapy steam rooms for deep cellular detoxification.'
      },
      {
        title: 'Meditation Zen Studio & Sound Bath Pavilion',
        description: 'Quiet acoustic pavilion for morning yoga, sound bath therapy, and mindfulness meditation.'
      }
    ],
    architecturalFeature: 'Acoustic Cedar-Wood Walls with Dimmable Circadian Rhythm Lighting'
  },
  {
    id: 'LEVEL_3',
    label: 'Level 3',
    name: 'High-Performance Fitness & Racquet Club',
    area: '12,500 Sq. Ft. Sports & Athletic Floor',
    tagline: 'Technogym Studio & Championship Badminton Courts',
    description: 'Engineered for athletes and IT leaders, Level 3 houses a 5,000 sq. ft. Technogym-equipped cardio and strength conditioning studio, double-height championship indoor badminton courts, and an air-conditioned squash court.',
    seoKeywordFocus: 'Godrej Park World gym & indoor badminton club Hinjewadi',
    keyAmenities: [
      {
        title: '5,000 Sq. Ft. Technogym Biostrength Studio',
        description: 'AI-guided Technogym equipment with personalized workout tracking and panoramic lagoon views.'
      },
      {
        title: '2 Championship Indoor Badminton Courts',
        description: 'BWF-standard wooden flooring with glare-free professional tournament LED lighting.'
      },
      {
        title: 'Air-Conditioned Glass Squash Court',
        description: 'WSF-approved glass-back squash court with spectator gallery and maple wood flooring.'
      },
      {
        title: 'Pilates & Aerial Yoga Conditioning Studio',
        description: 'Dedicated reformer Pilates and aerial silk yoga studio with full-length mirror walls.'
      }
    ],
    architecturalFeature: 'Double-Height 24-Foot Ceiling with Glare-Free Indirect Sports LED Arrays'
  },
  {
    id: 'LEVEL_4',
    label: 'Level 4',
    name: 'Rooftop Sky Lounge & Business Suite',
    area: '8,000 Sq. Ft. Rooftop & Entertainment Deck',
    tagline: 'Sunset Sky Bar, IMAX Mini-Theatre & Co-Working Hub',
    description: 'The crown of The Aqua Retreat Clubhouse. Host clients in the high-speed co-working business center, screen films in the 24-seat private IMAX mini-theatre, or unwind at the sunset rooftop sky lounge.',
    seoKeywordFocus: 'Godrej Hinjewadi rooftop clubhouse sky lounge & theatre',
    keyAmenities: [
      {
        title: 'Rooftop Sunset Sky Lounge & Cigar Terrace',
        description: 'Open-air sunset bar and terrace lounge overlooking the shimmering Hinjewadi IT skyline.'
      },
      {
        title: '24-Seat Private IMAX-Spec Screening Theatre',
        description: '4K Dolby Atmos private movie theatre with reclining leather loungers for family screenings.'
      },
      {
        title: 'MNC-Grade Co-Working Business Center & Boardrooms',
        description: 'High-speed Wi-Fi 6 co-working pods, soundproof Zoom phone booths, and formal boardroom.'
      },
      {
        title: 'Private Dining Room & Gourmet Chef’s Kitchen',
        description: 'Exclusive banquet dining suite for hosting private dinner parties with personal chef access.'
      }
    ],
    architecturalFeature: 'Motorized Bi-Climatic Pergola Roof with Integrated Wind & Rain Sensors'
  }
];

export default function ClubhouseAmenityExplorer() {
  const [activeLevel, setActiveLevel] = useState<LevelId>('LEVEL_1');
  const { openModal } = useModal();

  const currentLevelData = CLUBHOUSE_LEVELS.find(l => l.id === activeLevel) || CLUBHOUSE_LEVELS[0];

  return (
    <section id="aqua-clubhouse" className="py-28 bg-[#06080E] text-white relative z-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Top Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
          <div>
            <span className="text-emerald-aqua uppercase tracking-[0.4em] text-xs font-semibold mb-4 block flex items-center gap-2">
              <Waves className="w-4 h-4 text-emerald-aqua" />
              50,000 Sq. Ft. Private Resort Clubhouse
            </span>
            <KineticText 
              text="4 Levels of Aman-Resort Luxury."
              el="h2"
              className="font-serif text-4xl md:text-6xl text-white"
            />
          </div>
          <p className="text-gray-400 font-light max-w-md lg:text-right text-sm leading-relaxed">
            Explore Pune West&apos;s largest private residential clubhouse—featuring an Olympic infinity lagoon pool, Ayurvedic spa suites, Technogym studios, and rooftop sky bars.
          </p>
        </div>

        {/* 4-Level Interactive Switcher HUD */}
        <div className="flex flex-wrap items-center gap-3 mb-12 bg-[#0C0F17] border border-white/10 p-3 rounded-3xl w-fit">
          {CLUBHOUSE_LEVELS.map((level) => (
            <button
              key={level.id}
              onClick={() => setActiveLevel(level.id)}
              className={`px-6 py-3 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 flex items-center gap-2.5 ${
                activeLevel === level.id
                  ? 'bg-emerald-aqua text-gray-950 shadow-xl font-bold'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{level.label}: {level.name.split(' ')[0]} {level.name.split(' ')[1]}</span>
            </button>
          ))}
        </div>

        {/* Interactive Clubhouse Floor Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#0C0E16] border border-white/15 rounded-3xl p-6 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-aqua/5 blur-[100px] rounded-full pointer-events-none" />

          {/* Left Column: Architectural Level Showcase */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-emerald-aqua font-semibold bg-emerald-aqua/10 border border-emerald-aqua/30 px-3 py-1 rounded-full font-mono">
                {currentLevelData.area}
              </span>
              <span className="text-xs text-gray-400 font-mono">
                SEO Focus: {currentLevelData.seoKeywordFocus}
              </span>
            </div>

            <h3 className="text-2xl md:text-4xl font-serif text-white">
              {currentLevelData.name}
            </h3>

            <p className="text-gray-300 text-sm font-light leading-relaxed">
              {currentLevelData.description}
            </p>

            {/* Key Amenities 2x2 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/10">
              {currentLevelData.keyAmenities.map((amenity, idx) => (
                <div key={idx} className="bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-emerald-aqua/30 transition-all duration-300">
                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-aqua flex-shrink-0" />
                    <span>{amenity.title}</span>
                  </h4>
                  <p className="text-gray-400 text-xs font-light leading-relaxed">
                    {amenity.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Signature Architectural Highlight Box */}
            <div className="bg-black/60 border border-emerald-aqua/30 rounded-2xl p-5">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-aqua uppercase tracking-widest mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Architectural & Engineering Highlight</span>
              </div>
              <p className="text-sm font-medium text-white">
                {currentLevelData.architecturalFeature}
              </p>
            </div>
          </div>

          {/* Right Column: CTA HUD Box */}
          <div className="lg:col-span-5 bg-[#080A10] border border-white/15 rounded-2xl p-6 lg:p-8 flex flex-col justify-between h-full space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-emerald-aqua font-bold block mb-3">
                Clubhouse Dossier
              </span>
              <h4 className="text-xl font-serif text-white mb-4">
                Download Complete 50,000 Sq. Ft. Clubhouse Floor Plans PDF
              </h4>
              <p className="text-xs text-gray-400 font-light leading-relaxed mb-6">
                Receive official floor plans, membership privilege schedules, and private guest reservation guidelines for Godrej Aqua Retreat Hinjewadi.
              </p>

              <ul className="space-y-3 text-xs text-gray-300 font-light mb-8">
                <li className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-aqua flex-shrink-0" />
                  <span>Exclusive Resident-Only Membership Privileges</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-aqua flex-shrink-0" />
                  <span>Managed by International Hospitality Partners</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-aqua flex-shrink-0" />
                  <span>24/7 Concierge & Private Guest Reservations</span>
                </li>
              </ul>
            </div>

            <button
              onClick={openModal}
              className="w-full bg-emerald-aqua text-gray-950 py-4 px-6 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Clubhouse Floor Plans PDF</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
