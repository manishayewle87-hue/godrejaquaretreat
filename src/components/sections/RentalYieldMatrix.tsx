"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useModal } from '@/context/ModalContext';
import KineticText from '@/components/ui/KineticText';
import { TrendingUp, Building2, Users, Download, ShieldCheck, CheckCircle2, Sparkles, ArrowRight, DollarSign } from 'lucide-react';

type ConfigType = '2BHK' | '3BHK';
type LeaseType = 'SEMI' | 'CORPORATE';

interface TenantHub {
  company: string;
  campus: string;
  distance: string;
  employees: string;
  demandRating: string;
}

const TENANT_HUBS: TenantHub[] = [
  {
    company: 'Infosys Phase 1 Circle',
    campus: 'Rajiv Gandhi Infotech Park Main Campus',
    distance: '3 Minutes (Walk / Metro)',
    employees: '45,000+ Engineers',
    demandRating: '99.2% Walk-to-Work Demand'
  },
  {
    company: 'Wipro Technologies Circle',
    campus: 'Phase 1 IT Campus',
    distance: '4 Minutes',
    employees: '35,000+ IT Professionals',
    demandRating: '98.5% Corporate Demand'
  },
  {
    company: 'TCS & Megapolis Circle',
    campus: 'Phase 3 SEZ Hub',
    distance: '7 Minutes (Metro Line 3)',
    employees: '50,000+ Tech Consultants',
    demandRating: '97.8% Rental Demand'
  },
  {
    company: 'Cognizant & Capgemini',
    campus: 'Phase 2 & Phase 3 IT Corridors',
    distance: '8 Minutes',
    employees: '40,000+ Software Architects',
    demandRating: '98.1% Executive Lease Demand'
  }
];

export default function RentalYieldMatrix() {
  const [config, setConfig] = useState<ConfigType>('2BHK');
  const [lease, setLease] = useState<LeaseType>('CORPORATE');
  const { openModal } = useModal();

  // Calculate rental stats based on selections
  const getRentalStats = () => {
    if (config === '2BHK' && lease === 'SEMI') {
      return {
        monthlyRent: '₹38,000 - ₹44,000*',
        annualCashflow: '₹4,80,000*',
        netYield: '7.4%',
        targetTenant: 'Senior IT Engineers & Tech Couples',
        vacancyRate: '1.4% (98.6% Occupied)'
      };
    }
    if (config === '2BHK' && lease === 'CORPORATE') {
      return {
        monthlyRent: '₹48,000 - ₹58,000*',
        annualCashflow: '₹6,60,000*',
        netYield: '7.9%',
        targetTenant: 'MNC Corporate Fully-Furnished Lease',
        vacancyRate: '0.8% (99.2% Occupied)'
      };
    }
    if (config === '3BHK' && lease === 'SEMI') {
      return {
        monthlyRent: '₹55,000 - ₹68,000*',
        annualCashflow: '₹7,50,000*',
        netYield: '7.6%',
        targetTenant: 'VP & Department Heads / Senior Families',
        vacancyRate: '1.6% (98.4% Occupied)'
      };
    }
    return {
      monthlyRent: '₹78,000 - ₹95,000*',
      annualCashflow: '₹10,20,000*',
      netYield: '8.2%',
      targetTenant: 'Expat Executives & C-Suite MNC Leadership',
      vacancyRate: '0.5% (99.5% Occupied)'
    };
  };

  const stats = getRentalStats();

  return (
    <section id="rental-yields" className="py-28 bg-[#0B0C10] text-white relative z-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Top Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
          <div>
            <span className="text-emerald-aqua uppercase tracking-[0.4em] text-xs font-semibold mb-4 block flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-aqua" />
              Empirical Investment Intelligence
            </span>
            <KineticText 
              text="8.2% Net Rental Yields."
              el="h2"
              className="font-serif text-4xl md:text-6xl text-white"
            />
          </div>
          <p className="text-gray-400 font-light max-w-md lg:text-right text-sm leading-relaxed">
            Hinjewadi Phase 1 commands Pune Wests highest corporate lease demand. Calculate your annual passive rental income.
          </p>
        </div>

        {/* Configuration & Lease Type Selector HUD */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 bg-[#12151E] border border-white/10 p-4 rounded-3xl">
          
          {/* BHK Selector */}
          <div className="flex items-center bg-black/60 p-1.5 rounded-full border border-white/10 w-full md:w-auto">
            <button
              onClick={() => setConfig('2BHK')}
              className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 ${
                config === '2BHK'
                  ? 'bg-emerald-aqua text-gray-950 shadow-md font-bold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              2 BHK Luxury (780 Sq. Ft.)
            </button>
            <button
              onClick={() => setConfig('3BHK')}
              className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 ${
                config === '3BHK'
                  ? 'bg-emerald-aqua text-gray-950 shadow-md font-bold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              3 BHK Regal (1150 Sq. Ft.)
            </button>
          </div>

          {/* Lease Type Selector */}
          <div className="flex items-center bg-black/60 p-1.5 rounded-full border border-white/10 w-full md:w-auto">
            <button
              onClick={() => setLease('SEMI')}
              className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 ${
                lease === 'SEMI'
                  ? 'bg-white text-gray-950 shadow-md font-bold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Semi-Furnished Lease
            </button>
            <button
              onClick={() => setLease('CORPORATE')}
              className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 ${
                lease === 'CORPORATE'
                  ? 'bg-emerald-aqua text-gray-950 shadow-md font-bold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Corporate Fully-Furnished
            </button>
          </div>

        </div>

        {/* Scorecard Matrix Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Interactive Rental Cashflow Card */}
          <div className="lg:col-span-6 bg-[#11141D] border border-white/15 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-aqua/5 blur-[80px] rounded-full pointer-events-none" />

            <div className="flex justify-between items-center pb-6 mb-8 border-b border-white/10">
              <div>
                <span className="text-xs uppercase tracking-widest text-emerald-aqua font-semibold">
                  {config} • {lease === 'CORPORATE' ? 'Corporate Walk-to-Work Lease' : 'Semi-Furnished Residence'}
                </span>
                <h3 className="text-2xl md:text-3xl font-serif text-white mt-1">
                  Rental Cashflow Scorecard
                </h3>
              </div>
              <span className="bg-emerald-aqua/20 text-emerald-aqua border border-emerald-aqua/40 px-3 py-1 rounded-full text-xs font-bold tracking-wide">
                TOP 1% YIELD
              </span>
            </div>

            {/* Key Stats Scorecard */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-black/50 border border-white/10 p-5 rounded-2xl">
                <span className="text-[11px] uppercase tracking-widest text-gray-400 block mb-1">
                  Estimated Monthly Rent
                </span>
                <span className="text-2xl md:text-3xl font-serif font-bold text-white font-mono">
                  {stats.monthlyRent}
                </span>
              </div>

              <div className="bg-black/50 border border-white/10 p-5 rounded-2xl">
                <span className="text-[11px] uppercase tracking-widest text-gray-400 block mb-1">
                  Annual Passive Income
                </span>
                <span className="text-2xl md:text-3xl font-serif font-bold text-emerald-aqua font-mono">
                  {stats.annualCashflow}
                </span>
              </div>
            </div>

            {/* Yield & Occupancy Metrics */}
            <div className="space-y-4 text-sm font-light mb-8">
              <div className="flex justify-between items-center py-3 border-b border-white/5">
                <span className="text-gray-300">Net Rental Yield (Annualized)</span>
                <span className="font-bold text-emerald-aqua text-lg font-mono">{stats.netYield}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/5">
                <span className="text-gray-300">Average Occupancy Rate</span>
                <span className="font-semibold text-white">{stats.vacancyRate}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/5">
                <span className="text-gray-300">Target Tenant Demographic</span>
                <span className="font-semibold text-gray-200 text-right">{stats.targetTenant}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/5">
                <span className="text-emerald-aqua flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> 50,000 Sq. Ft. Resort Club Access
                </span>
                <span className="font-bold text-emerald-aqua">25% RENTAL PREMIUM</span>
              </div>
            </div>

            <button
              onClick={openModal}
              className="w-full bg-emerald-aqua text-gray-950 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Complete 2026 Rental Report PDF</span>
            </button>
          </div>

          {/* Right Column: IT Park Walk-to-Work Tenant Demographics */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-emerald-aqua text-xs uppercase tracking-widest font-semibold block mb-2">
                Empirical Demand Drivers
              </span>
              <h4 className="text-2xl font-serif text-white mb-4">
                Why Hinjewadi Phase 1 Commands 98.4% Occupancy
              </h4>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                With over 250,000 IT engineers operating across Rajiv Gandhi Infotech Park, walk-to-work resort residences like Godrej Park World command a continuous waitlist of high-salaried MNC tenants.
              </p>
            </div>

            {/* Tenant Campus Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TENANT_HUBS.map((hub, index) => (
                <div 
                  key={index} 
                  className="bg-[#11141D] border border-white/10 hover:border-emerald-aqua/40 p-5 rounded-2xl transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-aqua">
                      {hub.company}
                    </span>
                    <Building2 className="w-4 h-4 text-gray-500" />
                  </div>
                  <p className="text-xs text-gray-400 font-light mb-3">
                    {hub.campus} • <strong>{hub.distance}</strong>
                  </p>
                  <div className="flex justify-between items-center pt-3 border-t border-white/5 text-[11px]">
                    <span className="text-white font-medium">{hub.employees}</span>
                    <span className="text-emerald-aqua font-semibold">{hub.demandRating}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Corporate Lease Advantage Box */}
            <div className="bg-black/60 border border-white/15 rounded-2xl p-6 flex items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-white block">
                  Godrej Corporate Lease Helpdesk
                </span>
                <p className="text-xs text-gray-400 font-light mt-1">
                  Our authorised partner team assists homeowners with verified tenant screening, agreement registration, and corporate lease management.
                </p>
              </div>
              <button
                onClick={openModal}
                className="text-emerald-aqua uppercase tracking-widest font-semibold text-xs hover:underline flex-shrink-0 flex items-center gap-1"
              >
                <span>Speak to Leasing Team</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
