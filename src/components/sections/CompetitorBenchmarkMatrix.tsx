"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useModal } from '@/context/ModalContext';
import KineticText from '@/components/ui/KineticText';
import { Trophy, CheckCircle2, XCircle, ShieldCheck, Download, Sparkles, Building2, TrendingUp, Compass } from 'lucide-react';

interface BenchmarkVector {
  id: string;
  category: string;
  metric: string;
  godrejScore: string;
  competitorScore: string;
  godrejAdvantage: string;
  deepDive: string;
}

const BENCHMARK_VECTORS: BenchmarkVector[] = [
  {
    id: 'greens',
    category: 'Township Open Space',
    metric: 'Unobstructed Central Greens',
    godrejScore: '12+ Acres Pure Central Greens',
    competitorScore: '2 to 5 Acres Fragmented Open Space',
    godrejAdvantage: '300% Larger Green Spine',
    deepDive: 'While most Hinjewadi developments squeeze towers around narrow 2-acre courtyards, Godrej Park World devotes an expansive 12+ acre contiguous botanical park as the township centerpiece, ensuring lifelong light, cross-ventilation, and privacy.'
  },
  {
    id: 'clubhouse',
    category: 'Resort Amenities',
    metric: 'Clubhouse Scale & Water Features',
    godrejScore: '50,000 Sq. Ft. Aqua Resort Club + Lagoon Pool',
    competitorScore: '15,000 - 30,000 Sq. Ft. Standard Gym/Pool',
    godrejAdvantage: 'Aman-Resort Inspired Luxury Scale',
    deepDive: 'The Aqua Retreat features Pune Wests largest multi-tier resort clubhouse complete with an Olympic-length infinity lagoon pool, sunken poolside cabanas, spa suites, and business lounges—delivering an unmatched 5-star lifestyle.'
  },
  {
    id: 'construction',
    category: 'Structural Quality',
    metric: 'Construction Technology',
    godrejScore: '100% Monolithic Mivan Aluminium Formwork',
    competitorScore: 'Conventional Brick-and-Mortar / Hybrid RCC',
    godrejAdvantage: 'Zero Seepage & Earthquake Shear Walls',
    deepDive: 'Mivan Aluminium Formwork casts columns, beams, and slabs simultaneously into a single monolithic shear wall structure. This eliminates dampness, enhances carpet area efficiency by 5-8%, and provides superior seismic safety.'
  },
  {
    id: 'metro',
    category: 'IT Park Connectivity',
    metric: 'Pune Metro Line 3 Distance',
    godrejScore: '2-Minute Walk from Main Township Gate',
    competitorScore: '15 - 30 Mins via Congested Feeder Roads',
    godrejAdvantage: 'Instant Elevated Commute Advantage',
    deepDive: 'Located directly along the Rajiv Gandhi Infotech Park main spine, residents can walk 2 minutes to the upcoming Metro Line 3 station, cutting commute times to Shivaji Nagar and central Pune by up to 60%.'
  },
  {
    id: 'legacy',
    category: 'Developer Trust',
    metric: 'Brand Legacy & RERA Compliance',
    godrejScore: '128-Year Legacy | PM1260002500070',
    competitorScore: 'Regional / Local Developer Entities',
    godrejAdvantage: '100% RERA Escrow Bank Protection',
    deepDive: 'Godrej Properties maintains an impeccable 128-year national track record for transparent escrow accounting, zero litigation risk, and punctual project handovers.'
  },
  {
    id: 'rental',
    category: 'Investment ROI',
    metric: 'Annual Rental Yield in IT Corridor',
    godrejScore: '7.5% - 8.2% (Hinjewadi Phase 1 Core)',
    competitorScore: '4.5% - 6.0% (Outlying Marunji/Punawale)',
    godrejAdvantage: '+35% Higher Rental Returns',
    deepDive: 'Tenants from Infosys, Wipro, and TCS pay a significant rental premium for Phase 1 properties that offer walk-to-work IT park access and resort-grade amenities.'
  },
  {
    id: 'resale',
    category: 'Capital Appreciation',
    metric: 'Secondary Market Resale Premium',
    godrejScore: 'Highest Institutional & NRI Resale Liquidity',
    competitorScore: 'Moderate Secondary Market Turnover',
    godrejAdvantage: 'Proven Brand Value Appreciation',
    deepDive: 'Godrej Properties consistently commands the highest resale premium in Pune secondary markets due to strict facility management and timeless architectural aesthetics.'
  }
];

export default function CompetitorBenchmarkMatrix() {
  const [selectedVectorId, setSelectedVectorId] = useState<string>('greens');
  const { openModal } = useModal();

  const selectedVector = BENCHMARK_VECTORS.find(v => v.id === selectedVectorId) || BENCHMARK_VECTORS[0];

  return (
    <section id="competitor-scorecard" className="py-28 bg-[#07080C] text-white relative z-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Top Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
          <div>
            <span className="text-emerald-aqua uppercase tracking-[0.4em] text-xs font-semibold mb-4 block flex items-center gap-2">
              <Trophy className="w-4 h-4 text-emerald-aqua" />
              Empirical Market Scorecard
            </span>
            <KineticText 
              text="Why Godrej Park World Dominates."
              el="h2"
              className="font-serif text-4xl md:text-6xl text-white"
            />
          </div>
          <p className="text-gray-400 font-light max-w-md lg:text-right text-sm leading-relaxed">
            Side-by-side empirical benchmark comparing Godrej The Aqua Retreat against standard luxury developers across Hinjewadi Phase 1.
          </p>
        </div>

        {/* 7-Point Comparison Matrix Table */}
        <div className="bg-[#10131C] border border-white/15 rounded-3xl p-6 lg:p-10 shadow-2xl mb-16 overflow-hidden">
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-xs uppercase tracking-widest text-gray-400 font-semibold">
                  <th className="py-4 pr-4 w-1/4">Benchmark Metric</th>
                  <th className="py-4 px-4 w-5/12 text-emerald-aqua font-bold">
                    Godrej Park World (The Aqua Retreat)
                  </th>
                  <th className="py-4 pl-4 w-1/3 text-gray-400 font-normal">
                    Other Grade-A Hinjewadi Projects
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm">
                {BENCHMARK_VECTORS.map((vector) => {
                  const isSelected = selectedVectorId === vector.id;

                  return (
                    <tr 
                      key={vector.id}
                      onClick={() => setSelectedVectorId(vector.id)}
                      className={`cursor-pointer transition-colors duration-300 ${
                        isSelected 
                          ? 'bg-emerald-aqua/10 text-white' 
                          : 'hover:bg-white/[0.03] text-gray-300'
                      }`}
                    >
                      {/* Metric Name */}
                      <td className="py-5 pr-4 font-medium">
                        <div className="flex items-center gap-3">
                          <span className={`w-2 h-2 rounded-full flex-shrink-0 ${isSelected ? 'bg-emerald-aqua' : 'bg-gray-600'}`} />
                          <div>
                            <span className="text-white block font-semibold">{vector.metric}</span>
                            <span className="text-[11px] text-gray-400 block font-normal">{vector.category}</span>
                          </div>
                        </div>
                      </td>

                      {/* Godrej Score */}
                      <td className="py-5 px-4 font-semibold text-emerald-aqua">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          <span>{vector.godrejScore}</span>
                        </div>
                        <span className="inline-block mt-1 bg-emerald-aqua/15 text-emerald-aqua border border-emerald-aqua/30 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
                          {vector.godrejAdvantage}
                        </span>
                      </td>

                      {/* Competitor Score */}
                      <td className="py-5 pl-4 text-gray-400 font-light">
                        <div className="flex items-center gap-2">
                          <XCircle className="w-4 h-4 text-gray-500 flex-shrink-0" />
                          <span>{vector.competitorScore}</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="mt-6 pt-4 border-t border-white/5 text-center text-xs text-gray-400 font-light">
            💡 Click any row above to inspect the empirical engineering & ROI deep-dive below.
          </div>
        </div>

        {/* Interactive Deep-Dive Box & Official Report Download CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0E1017] border border-emerald-aqua/30 rounded-3xl p-6 lg:p-10 shadow-2xl">
          
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2 text-emerald-aqua text-xs uppercase tracking-widest font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>Deep-Dive Analysis: {selectedVector.category}</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-serif text-white">
              Why {selectedVector.metric} Drives Maximum Value
            </h3>
            <p className="text-gray-300 text-sm font-light leading-relaxed">
              {selectedVector.deepDive}
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-center">
            <button
              onClick={openModal}
              className="w-full bg-emerald-aqua text-gray-950 py-4 px-6 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Full Comparison PDF</span>
            </button>
            <span className="text-[10px] text-gray-500 text-center mt-3 block font-mono">
              MahaRERA Number: PM1260002500070
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
