"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useModal } from '@/context/ModalContext';
import KineticText from '@/components/ui/KineticText';
import { Train, Car, MapPin, Clock, Sparkles, Download, ArrowRight, ShieldCheck } from 'lucide-react';

interface CommuteDestination {
  id: string;
  name: string;
  category: 'IT Hub' | 'Lifestyle' | 'Central Pune';
  roadMins: number;
  metroMins: number;
  savingsPercent: number;
  description: string;
}

const COMMUTE_DESTINATIONS: CommuteDestination[] = [
  {
    id: 'infosys',
    name: 'Infosys & Wipro Circle (Phase 1)',
    category: 'IT Hub',
    roadMins: 10,
    metroMins: 3,
    savingsPercent: 70,
    description: 'Direct elevated access along Rajiv Gandhi Infotech Park main arterial spine.'
  },
  {
    id: 'tcs',
    name: 'TCS & Megapolis Circle (Phase 3)',
    category: 'IT Hub',
    roadMins: 22,
    metroMins: 7,
    savingsPercent: 68,
    description: 'Bypass Hinjewadi Phase 2 peak-hour junction traffic with seamless elevated metro travel.'
  },
  {
    id: 'baner',
    name: 'Baner & Balewadi High Street',
    category: 'Lifestyle',
    roadMins: 25,
    metroMins: 11,
    savingsPercent: 56,
    description: 'Effortless access to premier restaurants, pubs, and shopping districts in Baner Annexe.'
  },
  {
    id: 'wakad',
    name: 'Wakad Highway & Phoenix Mall of the Millennium',
    category: 'Lifestyle',
    roadMins: 20,
    metroMins: 8,
    savingsPercent: 60,
    description: 'Fast commute to Pune Wests largest luxury retail and multiplex shopping destination.'
  },
  {
    id: 'shivajinagar',
    name: 'Shivaji Nagar & Civil Court Interchange',
    category: 'Central Pune',
    roadMins: 55,
    metroMins: 22,
    savingsPercent: 60,
    description: 'Direct transfer to Pune Metro Line 1 & Line 2 connecting Kalyani Nagar, Viman Nagar, and Railway Station.'
  }
];

export default function MetroConnectivityScorecard() {
  const [selectedId, setSelectedId] = useState<string>('infosys');
  const { openModal } = useModal();

  const currentDest = COMMUTE_DESTINATIONS.find(d => d.id === selectedId) || COMMUTE_DESTINATIONS[0];

  return (
    <section id="metro-line-3" className="py-28 bg-[#0B0C10] text-white relative z-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Top Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
          <div>
            <span className="text-emerald-aqua uppercase tracking-[0.4em] text-xs font-semibold mb-4 block flex items-center gap-2">
              <Train className="w-4 h-4 text-emerald-aqua" />
              Pune Metro Line 3 • Commute Advantage
            </span>
            <KineticText 
              text="2-Minute Metro Access."
              el="h2"
              className="font-serif text-4xl md:text-6xl text-white"
            />
          </div>
          <p className="text-gray-400 font-light max-w-md lg:text-right text-sm leading-relaxed">
            Godrej Park World is strategically located just 2 minutes from upcoming Pune Metro Line 3, transforming your daily commute.
          </p>
        </div>

        {/* Destination Pills */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          {COMMUTE_DESTINATIONS.map((dest) => (
            <button
              key={dest.id}
              onClick={() => setSelectedId(dest.id)}
              className={`px-5 py-3 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 ${
                selectedId === dest.id
                  ? 'bg-emerald-aqua text-gray-950 shadow-lg'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              <span>{dest.name}</span>
            </button>
          ))}
        </div>

        {/* Interactive Comparison Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#11141D] border border-white/15 rounded-3xl p-6 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-aqua/5 blur-[100px] rounded-full pointer-events-none" />
          
          {/* Left Column: Animated Commute Scorecard */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-emerald-aqua text-xs uppercase tracking-widest font-semibold block mb-2">
                {currentDest.category} Commute Comparison
              </span>
              <h3 className="text-2xl md:text-3xl font-serif text-white mb-3">
                {currentDest.name}
              </h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                {currentDest.description}
              </p>
            </div>

            {/* Time Comparison Bars */}
            <div className="space-y-6 pt-4">
              
              {/* Road Traffic Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-gray-400 flex items-center gap-2">
                    <Car className="w-4 h-4 text-gray-500" />
                    Peak-Hour Road Commute
                  </span>
                  <span className="text-red-400 font-mono font-semibold">{currentDest.roadMins} Minutes</span>
                </div>
                <div className="w-full bg-white/5 h-3 rounded-full overflow-hidden border border-white/10">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min(100, (currentDest.roadMins / 60) * 100)}%` }}
                    transition={{ duration: 0.8 }}
                    className="bg-red-500/80 h-full rounded-full"
                  />
                </div>
              </div>

              {/* Pune Metro Line 3 Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-emerald-aqua flex items-center gap-2">
                    <Train className="w-4 h-4 text-emerald-aqua" />
                    Pune Metro Line 3 (Elevated)
                  </span>
                  <span className="text-emerald-aqua font-mono font-bold text-sm">{currentDest.metroMins} Minutes</span>
                </div>
                <div className="w-full bg-white/5 h-4 rounded-full overflow-hidden border border-emerald-aqua/40">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min(100, (currentDest.metroMins / 60) * 100)}%` }}
                    transition={{ duration: 0.8 }}
                    className="bg-emerald-aqua h-full rounded-full shadow-lg"
                  />
                </div>
              </div>

            </div>

            {/* Savings Scorecard Box */}
            <div className="bg-black/60 border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-gray-400 font-medium block">
                  Daily Time & Stress Saved
                </span>
                <span className="text-3xl font-serif text-white font-bold block mt-1">
                  {currentDest.savingsPercent}% Faster Commute
                </span>
              </div>
              <div className="text-xs text-gray-400 font-light max-w-xs">
                Zero parking hassles, zero signal bottlenecks, and 100% predictable travel timings.
              </div>
            </div>

          </div>

          {/* Right Column: Fast Facts & Report Download CTA */}
          <div className="lg:col-span-5 bg-[#0A0C11] border border-white/15 rounded-2xl p-6 md:p-8 flex flex-col justify-between h-full space-y-8">
            <div>
              <div className="flex items-center gap-2 text-emerald-aqua text-xs font-semibold uppercase tracking-widest mb-4">
                <Sparkles className="w-4 h-4" />
                <span>Metro Line 3 Key Facts</span>
              </div>
              <h4 className="text-xl font-serif text-white mb-6">
                Why Metro Line 3 is Driving 35% Capital Appreciation
              </h4>

              <ul className="space-y-4 text-xs text-gray-300 font-light">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-emerald-aqua flex-shrink-0 mt-0.5" />
                  <span><strong>23.3 KM Elevated Corridor</strong> linking 23 stations from Megapolis Circle to Civil Court.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-emerald-aqua flex-shrink-0 mt-0.5" />
                  <span>Executed by <strong>Pune IT City Metro Rail Ltd.</strong> (Tata Group & PMRDA partnership).</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-emerald-aqua flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Interchange</strong> at Civil Court connects to Pune Airport and Kalyani Nagar IT corridor.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-emerald-aqua flex-shrink-0 mt-0.5" />
                  <span><strong>2-Minute Walk</strong> from Godrej Park World township gate to upcoming metro station.</span>
                </li>
              </ul>
            </div>

            <button
              onClick={openModal}
              className="w-full bg-emerald-aqua text-gray-950 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Metro Route Map & Price PDF</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
