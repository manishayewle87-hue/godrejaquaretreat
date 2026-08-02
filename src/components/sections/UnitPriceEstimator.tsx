"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useModal } from '@/context/ModalContext';
import KineticText from '@/components/ui/KineticText';
import { Calculator, Sparkles, CheckCircle2, Download, ShieldCheck, ArrowRight, Layers, Car, Building } from 'lucide-react';

type ConfigId = '2BHK_EXEC' | '2BHK_DECK' | '3BHK_RESORT' | '3BHK_GRAND';
type FloorBandId = 'LOW' | 'MID' | 'HIGH' | 'SKY';

interface UnitConfig {
  id: ConfigId;
  label: string;
  type: string;
  carpetAreaSqFt: number;
  basePriceLakhs: number;
  badge: string;
  description: string;
}

interface FloorRiseBand {
  id: FloorBandId;
  label: string;
  floors: string;
  plcRateSqFt: number;
  viewDescription: string;
}

const UNIT_CONFIGS: UnitConfig[] = [
  {
    id: '2BHK_EXEC',
    label: '2 BHK Executive',
    type: '2 Bedroom + 2 Bath',
    carpetAreaSqFt: 780,
    basePriceLakhs: 110,
    badge: 'Best For Young IT Families',
    description: 'Smartly engineered 2 BHK residence featuring an efficient living layout, private master suite, and garden-view balcony.'
  },
  {
    id: '2BHK_DECK',
    label: '2 BHK Deck Suite',
    type: '2 Bedroom + 2 Bath + Large Balcony',
    carpetAreaSqFt: 850,
    basePriceLakhs: 122,
    badge: 'Popular Choice',
    description: 'Spacious 2 BHK residence featuring an expansive sunset balcony deck designed for outdoor dining and lagoon views.'
  },
  {
    id: '3BHK_RESORT',
    label: '3 BHK Resort Suite',
    type: '3 Bedroom + 3 Bath + Staff Toilet',
    carpetAreaSqFt: 1080,
    basePriceLakhs: 155,
    badge: 'Ideal For Executives',
    description: 'Generous 3 BHK family suite featuring double-aspect windows, walk-in master wardrobe, and a dedicated home office niche.'
  },
  {
    id: '3BHK_GRAND',
    label: '3 BHK Grand Lagoon',
    type: '3 Bedroom + 3 Bath + Grand Terrace Deck',
    carpetAreaSqFt: 1250,
    basePriceLakhs: 182,
    badge: 'Flagship Residence',
    description: 'Our premier corner residence overlooking the 50-meter Olympic lagoon pool and central 12-acre botanical spine.'
  }
];

const FLOOR_BANDS: FloorRiseBand[] = [
  {
    id: 'LOW',
    label: 'Low Rise Band',
    floors: 'Floors 1 to 7',
    plcRateSqFt: 0,
    viewDescription: 'Podium tree-line canopy & child-safe garden level views.'
  },
  {
    id: 'MID',
    label: 'Mid Rise Band',
    floors: 'Floors 8 to 18',
    plcRateSqFt: 150,
    viewDescription: 'Overlooking the shimmering 50,000 sq. ft. Aqua Resort Clubhouse & lagoon pool.'
  },
  {
    id: 'HIGH',
    label: 'High Rise Band',
    floors: 'Floors 19 to 28',
    plcRateSqFt: 300,
    viewDescription: 'Unobstructed Hinjewadi IT skyline & Rajiv Gandhi Infotech Park panorama.'
  },
  {
    id: 'SKY',
    label: 'Sky Level Band',
    floors: 'Floors 29 to 33',
    plcRateSqFt: 450,
    viewDescription: 'Panoramic Pune West valley, Sahyadri hills & cloud deck views.'
  }
];

export default function UnitPriceEstimator() {
  const [selectedConfig, setSelectedConfig] = useState<ConfigId>('2BHK_DECK');
  const [selectedBand, setSelectedBand] = useState<FloorBandId>('MID');
  const [doubleParking, setDoubleParking] = useState<boolean>(false);
  const { openModal } = useModal();

  const config = UNIT_CONFIGS.find(c => c.id === selectedConfig) || UNIT_CONFIGS[1];
  const band = FLOOR_BANDS.find(b => b.id === selectedBand) || FLOOR_BANDS[1];

  // Financial calculations
  const baseAgreementValue = config.basePriceLakhs; // in Lakhs
  const floorRisePLC = (config.carpetAreaSqFt * band.plcRateSqFt) / 100000; // in Lakhs
  const parkingCost = doubleParking ? 4.0 : 0.0; // 4 Lakhs for double covered parking
  const totalAgreementValue = baseAgreementValue + floorRisePLC + parkingCost;

  // Statutory approx (Stamp duty ~7%, GST ~5%)
  const stampDutyAndReg = totalAgreementValue * 0.07;
  const gstCost = totalAgreementValue * 0.05;
  const totalPackagePrice = totalAgreementValue + stampDutyAndReg + gstCost;

  return (
    <section id="price-calculator" className="py-28 bg-[#06080F] text-white relative z-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Top Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
          <div>
            <span className="text-emerald-aqua uppercase tracking-[0.4em] text-xs font-semibold mb-4 block flex items-center gap-2">
              <Calculator className="w-4 h-4 text-emerald-aqua" />
              Interactive Quotation Engine
            </span>
            <KineticText 
              text="Custom Unit Price & PLC Estimator."
              el="h2"
              className="font-serif text-4xl md:text-6xl text-white"
            />
          </div>
          <p className="text-gray-400 font-light max-w-md lg:text-right text-sm leading-relaxed">
            Select your apartment configuration and preferred floor band to receive an instant transparent price bracket, statutory tax breakdown, and PLC estimate.
          </p>
        </div>

        {/* Interactive Estimator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Columns (8 cols): Controls & Configuration Selector */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Step 1: Select Residence Configuration */}
            <div>
              <label className="text-xs uppercase tracking-widest text-emerald-aqua font-bold block mb-4">
                Step 1: Select Residence Configuration
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {UNIT_CONFIGS.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedConfig(item.id)}
                    className={`cursor-pointer p-5 rounded-2xl border transition-all duration-300 relative ${
                      selectedConfig === item.id
                        ? 'bg-emerald-aqua/15 border-emerald-aqua shadow-lg'
                        : 'bg-[#0D101A] border-white/10 hover:border-white/30'
                    }`}
                  >
                    <span className="text-[10px] uppercase tracking-wider text-emerald-aqua font-mono font-bold block mb-1">
                      {item.badge}
                    </span>
                    <h3 className="text-lg font-serif text-white mb-1">
                      {item.label}
                    </h3>
                    <p className="text-xs text-gray-400 font-light mb-3">
                      {item.type} • <span className="text-white font-medium">{item.carpetAreaSqFt} Sq. Ft.</span>
                    </p>
                    <div className="text-sm font-bold font-mono text-emerald-aqua">
                      Base: ₹{item.basePriceLakhs.toFixed(2)} Lakhs*
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2: Select Floor Rise Band */}
            <div>
              <label className="text-xs uppercase tracking-widest text-emerald-aqua font-bold block mb-4">
                Step 2: Select Tower Elevation Band (Floor Rise PLC)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {FLOOR_BANDS.map((fb) => (
                  <div
                    key={fb.id}
                    onClick={() => setSelectedBand(fb.id)}
                    className={`cursor-pointer p-4 rounded-2xl border transition-all duration-300 ${
                      selectedBand === fb.id
                        ? 'bg-emerald-aqua/15 border-emerald-aqua shadow-lg'
                        : 'bg-[#0D101A] border-white/10 hover:border-white/30'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-white uppercase tracking-wider">
                        {fb.label}
                      </span>
                      <span className="text-xs font-mono text-emerald-aqua font-bold">
                        {fb.plcRateSqFt === 0 ? 'Base Rate' : `+₹${fb.plcRateSqFt}/sq.ft`}
                      </span>
                    </div>
                    <span className="text-xs text-gray-400 font-mono block mb-2">
                      {fb.floors}
                    </span>
                    <p className="text-xs text-gray-400 font-light leading-relaxed">
                      {fb.viewDescription}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 3: Optional Add-on */}
            <div className="bg-[#0C0F1A] border border-white/10 rounded-2xl p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Car className="w-5 h-5 text-emerald-aqua" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Double Covered Car Parking Suite</h4>
                  <p className="text-xs text-gray-400 font-light">Upgrade from 1 covered bay to 2 side-by-side covered car bays.</p>
                </div>
              </div>
              <button
                onClick={() => setDoubleParking(!doubleParking)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  doubleParking
                    ? 'bg-emerald-aqua text-gray-950'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {doubleParking ? 'Included (+₹4.00 L)' : 'Add Optional Bay'}
              </button>
            </div>

          </div>

          {/* Right Column (5 cols): Live Financial Summary Card */}
          <div className="lg:col-span-5 bg-[#090C15] border border-emerald-aqua/30 rounded-3xl p-6 lg:p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-aqua/5 blur-[90px] rounded-full pointer-events-none" />
            
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-emerald-aqua font-bold block mb-1">
                  Instant Quotation
                </span>
                <h3 className="text-xl font-serif text-white">
                  {config.label} Package
                </h3>
              </div>
              <span className="text-xs font-mono text-gray-400 bg-white/5 px-3 py-1 rounded-full">
                {config.carpetAreaSqFt} Sq. Ft.
              </span>
            </div>

            {/* Price Line Items Table */}
            <div className="space-y-3 text-xs font-mono mb-6">
              <div className="flex justify-between text-gray-300">
                <span>Base Unit Agreement Value</span>
                <span>₹ {baseAgreementValue.toFixed(2)} L</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Floor Rise ({band.label})</span>
                <span>₹ {floorRisePLC.toFixed(2)} L</span>
              </div>
              {doubleParking && (
                <div className="flex justify-between text-gray-300">
                  <span>Double Covered Car Bay</span>
                  <span>₹ {parkingCost.toFixed(2)} L</span>
                </div>
              )}
              <div className="border-t border-white/10 pt-2 flex justify-between font-bold text-white text-sm">
                <span>Total Agreement Value</span>
                <span className="text-emerald-aqua">₹ {totalAgreementValue.toFixed(2)} L</span>
              </div>

              {/* Statutory Taxes Breakdown */}
              <div className="border-t border-white/10 pt-3 space-y-2 text-gray-400">
                <div className="flex justify-between">
                  <span>Est. Stamp Duty & Registration (~7%)</span>
                  <span>₹ {stampDutyAndReg.toFixed(2)} L</span>
                </div>
                <div className="flex justify-between">
                  <span>Est. GST (~5%)</span>
                  <span>₹ {gstCost.toFixed(2)} L</span>
                </div>
              </div>

              {/* Total Estimated Package */}
              <div className="border-t border-emerald-aqua/40 pt-4 flex justify-between items-center text-white">
                <div>
                  <span className="text-xs uppercase tracking-widest block text-gray-400 font-sans">Total Estimated Package</span>
                  <span className="text-xl md:text-2xl font-bold text-emerald-aqua">
                    ₹ {(totalPackagePrice / 100).toFixed(2)} Cr*
                  </span>
                </div>
                <span className="text-[10px] text-gray-400 max-w-[120px] text-right font-sans">
                  All statutory charges included.
                </span>
              </div>
            </div>

            <p className="text-[11px] text-gray-400 font-light leading-relaxed mb-8">
              *Prices are indicative for initial expressions of interest (EOI) at Godrej Park World Hinjewadi. Custom payment plans (CLP & Flexi Subvention) available on request.
            </p>

            <button
              onClick={openModal}
              className="w-full bg-emerald-aqua text-gray-950 py-4 px-6 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 shadow-xl flex items-center justify-center gap-2 mb-4"
            >
              <Download className="w-4 h-4" />
              <span>Download Verified Cost Sheet PDF</span>
            </button>

            <div className="flex items-center justify-center gap-2 text-[10px] text-gray-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-aqua" />
              <span>Verified MahaRERA Project: PM1260002500070</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
