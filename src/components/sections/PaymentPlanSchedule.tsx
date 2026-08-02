"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useModal } from '@/context/ModalContext';
import KineticText from '@/components/ui/KineticText';
import { CreditCard, CheckCircle2, ShieldCheck, Download, Calendar, Percent, ArrowRight, Sparkles } from 'lucide-react';

type ConfigType = '2BHK' | '3BHK';
type PlanType = 'CLP' | 'FLEXI';

interface MilestonePayment {
  stage: string;
  milestone: string;
  clpPercent: number;
  flexiPercent: number;
  status: 'due-on-booking' | 'completed-stage' | 'in-progress' | 'future-milestone';
}

const PAYMENT_MILESTONES: MilestonePayment[] = [
  {
    stage: 'Booking & Agreement',
    milestone: 'Booking Amount & Expression of Interest (EOI)',
    clpPercent: 10,
    flexiPercent: 20,
    status: 'due-on-booking'
  },
  {
    stage: 'Excavation & Piling',
    milestone: 'On Completion of Foundation & Basement Piling',
    clpPercent: 15,
    flexiPercent: 0,
    status: 'completed-stage'
  },
  {
    stage: 'Podium & Clubhouse Plinth',
    milestone: 'On Casting of 50,000 Sq. Ft. Aqua Clubhouse Plinth',
    clpPercent: 15,
    flexiPercent: 0,
    status: 'in-progress'
  },
  {
    stage: 'Superstructure Framework',
    milestone: 'On Completion of 10th Floor Slab RCC Casting',
    clpPercent: 25,
    flexiPercent: 0,
    status: 'future-milestone'
  },
  {
    stage: 'Superstructure Completion',
    milestone: 'On Completion of Top Floor Slab & Brickwork',
    clpPercent: 20,
    flexiPercent: 70,
    status: 'future-milestone'
  },
  {
    stage: 'Possession & Handover',
    milestone: 'On Offer of Possession & Key Handover (MahaRERA PM1260002500070)',
    clpPercent: 15,
    flexiPercent: 10,
    status: 'future-milestone'
  }
];

export default function PaymentPlanSchedule() {
  const [config, setConfig] = useState<ConfigType>('2BHK');
  const [plan, setPlan] = useState<PlanType>('CLP');
  const { openModal } = useModal();

  // Financial simulation numbers (indicative for display transparency)
  const basePrice = config === '2BHK' ? 12000000 : 18000000;
  const stampDuty = Math.round(basePrice * 0.06);
  const gstAmount = Math.round(basePrice * 0.05);
  const registrationFee = 30000;
  const totalAllInclusive = basePrice + stampDuty + gstAmount + registrationFee;

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section id="payment-plans" className="py-28 bg-[#08090E] text-white relative z-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Top Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
          <div>
            <span className="text-emerald-aqua uppercase tracking-[0.4em] text-xs font-semibold mb-4 block flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-emerald-aqua" />
              MahaRERA Compliant Payment Schemes
            </span>
            <KineticText 
              text="Interactive Cost Sheet & Schedules."
              el="h2"
              className="font-serif text-4xl md:text-6xl text-white"
            />
          </div>
          <p className="text-gray-400 font-light max-w-md lg:text-right text-sm leading-relaxed">
            Compare construction-linked payment milestones vs. NRI 20:80 flexi schemes with transparent statutory breakdowns.
          </p>
        </div>

        {/* Configuration & Scheme Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 bg-[#12151E] border border-white/10 p-4 rounded-3xl">
          
          {/* BHK Selector */}
          <div className="flex items-center bg-black/60 p-1.5 rounded-full border border-white/10 w-full md:w-auto">
            <button
              onClick={() => setConfig('2BHK')}
              className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 ${
                config === '2BHK'
                  ? 'bg-emerald-aqua text-gray-950 shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              2 BHK (780 Sq. Ft.)
            </button>
            <button
              onClick={() => setConfig('3BHK')}
              className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 ${
                config === '3BHK'
                  ? 'bg-emerald-aqua text-gray-950 shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              3 BHK (1150 Sq. Ft.)
            </button>
          </div>

          {/* Payment Plan Switcher */}
          <div className="flex items-center bg-black/60 p-1.5 rounded-full border border-white/10 w-full md:w-auto">
            <button
              onClick={() => setPlan('CLP')}
              className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 ${
                plan === 'CLP'
                  ? 'bg-white text-gray-950 shadow-md font-bold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Construction-Linked Plan (CLP)
            </button>
            <button
              onClick={() => setPlan('FLEXI')}
              className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 ${
                plan === 'FLEXI'
                  ? 'bg-emerald-aqua text-gray-950 shadow-md font-bold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              NRI 20:80 Flexi Scheme
            </button>
          </div>

        </div>

        {/* Matrix Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Itemized Cost Breakdown Scorecard */}
          <div className="lg:col-span-5 bg-[#0D1017] border border-white/15 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-emerald-aqua/10 blur-[60px] rounded-full pointer-events-none" />

            <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
              <div>
                <span className="text-xs uppercase tracking-widest text-emerald-aqua font-semibold">
                  {config} Indicative Cost Sheet
                </span>
                <h3 className="text-2xl font-serif text-white mt-1">
                  All-Inclusive Estimate
                </h3>
              </div>
              <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-[10px] text-gray-400 font-mono">
                PM1260002500070
              </span>
            </div>

            {/* Line Items */}
            <div className="space-y-4 text-sm font-light mb-8">
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-gray-300">Basic Sale Price (BSP)</span>
                <span className="font-semibold text-white font-mono">{formatINR(basePrice)}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-gray-300">Stamp Duty (6% Maharashtra)</span>
                <span className="font-semibold text-gray-200 font-mono">{formatINR(stampDuty)}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-gray-300">GST (5% Under Construction)</span>
                <span className="font-semibold text-gray-200 font-mono">{formatINR(gstAmount)}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-gray-300">Registration Fee (Fixed)</span>
                <span className="font-semibold text-gray-200 font-mono">{formatINR(registrationFee)}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-emerald-aqua flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> 50,000 Sq. Ft. Aqua Club Membership
                </span>
                <span className="font-bold text-emerald-aqua">INCLUDED (₹0*)</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-emerald-aqua">Covered Car Parking Space</span>
                <span className="font-bold text-emerald-aqua">INCLUDED (₹0*)</span>
              </div>
            </div>

            {/* Total Footer Box */}
            <div className="bg-black/60 border border-white/10 rounded-2xl p-6 mb-8">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs uppercase tracking-widest text-gray-400 font-medium">
                  Total Indicative Outflow
                </span>
                <span className="text-2xl font-serif font-bold text-white font-mono">
                  {formatINR(totalAllInclusive)}
                </span>
              </div>
              <p className="text-[11px] text-gray-500 font-light mt-2">
                *Subject to floor rise, view preference, and statutory MahaRERA norms.
              </p>
            </div>

            <button
              onClick={openModal}
              className="w-full bg-emerald-aqua text-gray-950 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Verified Cost Sheet PDF</span>
            </button>
          </div>

          {/* Right Column: Milestone Payment Schedule Table */}
          <div className="lg:col-span-7 bg-[#0D1017] border border-white/15 rounded-3xl p-6 md:p-8 shadow-2xl">
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 mb-6 border-b border-white/10">
              <div>
                <span className="text-xs uppercase tracking-widest text-emerald-aqua font-semibold">
                  {plan === 'CLP' ? 'Construction-Linked Schedule' : 'NRI 20:80 Flexi Payment Scheme'}
                </span>
                <h3 className="text-2xl font-serif text-white mt-1">
                  Milestone Payout Timeline
                </h3>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-3.5 py-1.5 rounded-full text-xs text-gray-300">
                <ShieldCheck className="w-4 h-4 text-emerald-aqua" />
                <span>100% Escrow Secured</span>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-[11px] uppercase tracking-widest text-gray-400 font-semibold">
                    <th className="py-3 pr-4">Construction Stage</th>
                    <th className="py-3 px-4">Milestone Description</th>
                    <th className="py-3 pl-4 text-right">Payment %</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-sm font-light">
                  {PAYMENT_MILESTONES.map((row, index) => {
                    const percent = plan === 'CLP' ? row.clpPercent : row.flexiPercent;
                    const amount = Math.round((totalAllInclusive * percent) / 100);

                    return (
                      <tr 
                        key={index} 
                        className={`hover:bg-white/[0.03] transition-colors ${
                          row.status === 'completed-stage' ? 'text-gray-400' : 'text-white'
                        }`}
                      >
                        <td className="py-4 pr-4 font-medium">
                          <div className="flex items-center gap-2">
                            {row.status === 'completed-stage' && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                            )}
                            {row.status === 'in-progress' && (
                              <span className="w-2 h-2 rounded-full bg-emerald-aqua animate-ping flex-shrink-0" />
                            )}
                            <span>{row.stage}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-gray-300 text-xs leading-relaxed">
                          {row.milestone}
                        </td>
                        <td className="py-4 pl-4 text-right font-mono font-semibold">
                          <span className="text-emerald-aqua block text-base">{percent}%</span>
                          <span className="text-[11px] text-gray-400 block font-normal">{formatINR(amount)}</span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Subvention Note */}
            <div className="mt-8 p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between text-xs text-gray-400">
              <span>
                Need custom subvention or loan sanction from HDFC, SBI, or ICICI Bank?
              </span>
              <button
                onClick={openModal}
                className="text-emerald-aqua font-semibold uppercase tracking-wider hover:underline flex items-center gap-1"
              >
                <span>Speak to Loan Advisor</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
