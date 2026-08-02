"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useModal } from '@/context/ModalContext';
import KineticText from '@/components/ui/KineticText';
import { Building2, Compass, Sun, Eye, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Layers } from 'lucide-react';

type ElevationTier = 'LOW' | 'MID' | 'HIGH' | 'PENTHOUSE';
type OrientationType = 'EAST' | 'WEST';

interface ElevationData {
  id: ElevationTier;
  label: string;
  floors: string;
  floorRisePremium: string;
  viewHeadline: string;
  viewDescription: string;
  idealFor: string;
  acoustics: string;
  eastAdvantage: string;
  westAdvantage: string;
}

const ELEVATION_TIERS: ElevationData[] = [
  {
    id: 'LOW',
    label: 'Low-Rise Canopy',
    floors: 'Floors 1 - 5',
    floorRisePremium: '₹0 / Sq. Ft. (Base Price Advantage)',
    viewHeadline: 'Direct Botanical Garden & Green Spine Canopy Views',
    viewDescription: 'Experience intimate, eye-level immersion into the 12+ acre central greens, landscaped walkways, and perennial flower gardens. Perfect for buyers who love tree-canopy serenity.',
    idealFor: 'Senior citizens, nature enthusiasts, and families seeking immediate garden accessibility.',
    acoustics: 'Triple-glazed UPVC windows ensure pin-drop quiet interiors even at podium level.',
    eastAdvantage: 'Morning sunlight filtered through lush tropical foliage.',
    westAdvantage: 'Cool shaded afternoon balconies overlooking the quiet residential promenade.'
  },
  {
    id: 'MID',
    label: 'Mid-Rise Horizon',
    floors: 'Floors 6 - 15',
    floorRisePremium: '+₹75 / Sq. Ft.* (Indicative Tier 1)',
    viewHeadline: 'Panoramic Aqua Resort Pool & Clubhouse Deck Vistas',
    viewDescription: 'The sweet spot of elevated living. Enjoy wide-angle views of the 50,000 sq. ft. Aqua Clubhouse, Olympic-length infinity lagoon pool, and sunken poolside cabanas.',
    idealFor: 'IT executives and couples wanting a balanced resort poolside vibe and open horizon light.',
    acoustics: 'Elevated acoustic buffer with unobstructed cross-ventilation breezes.',
    eastAdvantage: 'Direct sunrise views over the shimmering resort lagoon pool.',
    westAdvantage: 'Sunset vistas across the 100-acre township green belt.'
  },
  {
    id: 'HIGH',
    label: 'High-Rise Sky Vista',
    floors: 'Floors 16 - 25',
    floorRisePremium: '+₹150 / Sq. Ft.* (Indicative Tier 2)',
    viewHeadline: 'Sweeping Hinjewadi IT Skyline & Sahyadri Mountain Vistas',
    viewDescription: 'Rise above Pune West. Revel in panoramic aerial views across Rajiv Gandhi Infotech Park and the distant rolling Sahyadri mountain ranges.',
    idealFor: 'Expat professionals and buyers desiring maximum privacy, breeze, and dramatic horizon vistas.',
    acoustics: 'Absolute acoustic isolation above city ambient levels with 24/7 natural airflow.',
    eastAdvantage: 'Golden morning light illuminating the entire eastern Hinjewadi IT corridor.',
    westAdvantage: 'Spectacular sunset silhouettes behind the Sahyadri hills.'
  },
  {
    id: 'PENTHOUSE',
    label: 'Sky-Residence Crown',
    floors: 'Floors 26+ (Top Levels)',
    floorRisePremium: '+₹225 / Sq. Ft.* (Indicative Crown Tier)',
    viewHeadline: 'Unobstructed 360° Sky-Residence Cloud Vistas',
    viewDescription: 'The pinnacle of Pune West luxury. Enjoy penthouse-grade unobstructed views stretching across the entire western Pune metropolitan horizon above the clouds.',
    idealFor: 'Ultra-luxury connoisseurs, corporate founders, and C-suite leadership.',
    acoustics: 'Supreme penthouse privacy, zero overhead noise, and panoramic sky terraces.',
    eastAdvantage: 'Unrestricted 180-degree sunrise views across Pune city.',
    westAdvantage: 'Unobstructed twilight skies and star-lit mountain horizons.'
  }
];

export default function FloorRiseViewSelector() {
  const [selectedTier, setSelectedTier] = useState<ElevationTier>('MID');
  const [orientation, setOrientation] = useState<OrientationType>('EAST');
  const { openModal } = useModal();

  const currentData = ELEVATION_TIERS.find(t => t.id === selectedTier) || ELEVATION_TIERS[1];

  return (
    <section id="floor-views" className="py-28 bg-[#07080C] text-white relative z-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Top Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
          <div>
            <span className="text-emerald-aqua uppercase tracking-[0.4em] text-xs font-semibold mb-4 block flex items-center gap-2">
              <Layers className="w-4 h-4 text-emerald-aqua" />
              Interactive Tower Elevation Guide
            </span>
            <KineticText 
              text="Floor Rise & View Orientations."
              el="h2"
              className="font-serif text-4xl md:text-6xl text-white"
            />
          </div>
          <p className="text-gray-400 font-light max-w-md lg:text-right text-sm leading-relaxed">
            Compare view characteristics, indicative floor rise pricing, and orientation advantages across all elevation tiers.
          </p>
        </div>

        {/* HUD Switchers: Floor Tiers & Orientations */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 bg-[#11141D] border border-white/10 p-4 rounded-3xl">
          
          {/* Elevation Tier Selector */}
          <div className="flex flex-wrap items-center bg-black/60 p-1.5 rounded-full border border-white/10 w-full md:w-auto gap-1">
            {ELEVATION_TIERS.map((tier) => (
              <button
                key={tier.id}
                onClick={() => setSelectedTier(tier.id)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 ${
                  selectedTier === tier.id
                    ? 'bg-emerald-aqua text-gray-950 shadow-md font-bold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tier.label} ({tier.floors})
              </button>
            ))}
          </div>

          {/* Orientation Toggle */}
          <div className="flex items-center bg-black/60 p-1.5 rounded-full border border-white/10 w-full md:w-auto">
            <button
              onClick={() => setOrientation('EAST')}
              className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 flex items-center gap-2 ${
                orientation === 'EAST'
                  ? 'bg-white text-gray-950 shadow-md font-bold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Sun className="w-3.5 h-3.5" />
              <span>East / Pool Facing</span>
            </button>
            <button
              onClick={() => setOrientation('WEST')}
              className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 flex items-center gap-2 ${
                orientation === 'WEST'
                  ? 'bg-emerald-aqua text-gray-950 shadow-md font-bold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>West / Mountain Facing</span>
            </button>
          </div>

        </div>

        {/* Interactive View Matrix Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#0D1017] border border-white/15 rounded-3xl p-6 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-aqua/5 blur-[100px] rounded-full pointer-events-none" />

          {/* Left Column: Elevation Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-emerald-aqua font-semibold bg-emerald-aqua/10 border border-emerald-aqua/30 px-3 py-1 rounded-full">
                {currentData.floors}
              </span>
              <span className="text-xs text-gray-400 font-mono">
                MahaRERA: PM1260002500070
              </span>
            </div>

            <h3 className="text-2xl md:text-4xl font-serif text-white">
              {currentData.viewHeadline}
            </h3>

            <p className="text-gray-300 text-sm font-light leading-relaxed">
              {currentData.viewDescription}
            </p>

            {/* Scorecard Line Items */}
            <div className="space-y-4 pt-4 border-t border-white/10 text-sm font-light">
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-gray-400">Indicative Floor Rise Premium</span>
                <span className="font-bold text-emerald-aqua font-mono">{currentData.floorRisePremium}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-gray-400">Recommended Homebuyer Persona</span>
                <span className="font-semibold text-white text-right max-w-xs">{currentData.idealFor}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-gray-400">Acoustic & Airflow Profile</span>
                <span className="font-light text-gray-200 text-right max-w-xs">{currentData.acoustics}</span>
              </div>
            </div>

            {/* Orientation Highlight Box */}
            <div className="bg-black/60 border border-white/10 rounded-2xl p-5">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-aqua uppercase tracking-widest mb-2">
                <Sparkles className="w-4 h-4" />
                <span>{orientation === 'EAST' ? 'East / Pool-Facing Advantage' : 'West / Mountain-Facing Advantage'}</span>
              </div>
              <p className="text-xs text-gray-300 font-light leading-relaxed">
                {orientation === 'EAST' ? currentData.eastAdvantage : currentData.westAdvantage}
              </p>
            </div>
          </div>

          {/* Right Column: CTA HUD Box */}
          <div className="lg:col-span-5 bg-[#0A0C11] border border-white/15 rounded-2xl p-6 lg:p-8 flex flex-col justify-between h-full space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-emerald-aqua font-bold block mb-3">
                Live Inventory Check
              </span>
              <h4 className="text-xl font-serif text-white mb-4">
                Verify {currentData.label} Unit Availability
              </h4>
              <p className="text-xs text-gray-400 font-light leading-relaxed mb-6">
                Our inventory management system tracks real-time floor availability across Tower 1, Tower 2, and Tower 3. Request a live floor sheet today.
              </p>

              <ul className="space-y-3 text-xs text-gray-300 font-light mb-8">
                <li className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-aqua flex-shrink-0" />
                  <span>100% Transparent RERA Pricing (No Hidden Fees)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-aqua flex-shrink-0" />
                  <span>Floor Rise Waiver Available on Select Inventory*</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-aqua flex-shrink-0" />
                  <span>Instant Floor Plan PDF & Cost Breakdown</span>
                </li>
              </ul>
            </div>

            <button
              onClick={openModal}
              className="w-full bg-emerald-aqua text-gray-950 py-4 px-6 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
            >
              <span>Check Live Floor Availability</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
