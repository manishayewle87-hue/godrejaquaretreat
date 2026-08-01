"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, ArrowRight, Lock } from "lucide-react";
import { useModal } from "@/context/ModalContext";

export default function InvestmentCalculator() {
  const [config, setConfig] = useState<"2BHK" | "3BHK">("2BHK");
  const [downpayment, setDownpayment] = useState(20);
  const { openModal } = useModal();

  const basePrice = config === "2BHK" ? 12000000 : 18000000;
  const loanAmount = basePrice * (1 - downpayment / 100);
  const interestRate = 8.5; // Fixed for simulation
  const tenure = 20; // 20 years

  // Standard EMI formula: P * r * (1+r)^n / ((1+r)^n - 1)
  const r = interestRate / 12 / 100;
  const n = tenure * 12;
  const emi = Math.round((loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));

  return (
    <section className="py-24 bg-[#0B0C10] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <span className="text-emerald-aqua tracking-[0.3em] uppercase text-xs font-semibold block mb-4">
            Financial Planning
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            ROI & EMI Calculator
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Calculate your investment at Godrej Park World Hinjewadi. Adjust your downpayment and discover the massive ROI potential.
          </p>
        </div>

        <div className="bg-[#15181E] border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-aqua/5 blur-[100px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Controls */}
            <div className="space-y-8">
              <div>
                <label className="text-sm text-gray-400 uppercase tracking-widest block mb-4">Select Configuration</label>
                <div className="flex bg-black/50 p-1 rounded-lg">
                  <button 
                    onClick={() => setConfig("2BHK")}
                    className={`flex-1 py-3 text-sm font-semibold rounded-md transition-colors ${config === "2BHK" ? 'bg-emerald-aqua text-gray-900' : 'text-gray-400 hover:text-white'}`}
                  >
                    Premium 2 BHK
                  </button>
                  <button 
                    onClick={() => setConfig("3BHK")}
                    className={`flex-1 py-3 text-sm font-semibold rounded-md transition-colors ${config === "3BHK" ? 'bg-emerald-aqua text-gray-900' : 'text-gray-400 hover:text-white'}`}
                  >
                    Luxury 3 BHK
                  </button>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-4">
                  <span className="text-gray-400 uppercase tracking-widest">Downpayment</span>
                  <span className="text-white font-mono">{downpayment}% (₹{((basePrice * downpayment) / 100 / 100000).toFixed(1)} Cr)</span>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="50" 
                  step="5"
                  value={downpayment}
                  onChange={(e) => setDownpayment(Number(e.target.value))}
                  className="w-full accent-emerald-aqua bg-white/10 h-1 rounded-full appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>10%</span>
                  <span>50%</span>
                </div>
              </div>

              <div className="p-4 bg-white/5 border border-white/5 rounded-lg flex gap-4 items-start">
                <Calculator className="w-5 h-5 text-emerald-aqua shrink-0 mt-0.5" />
                <p className="text-xs text-gray-400 leading-relaxed">
                  Calculations are based on a fixed {interestRate}% interest rate over {tenure} years. This is for illustrative purposes only.
                </p>
              </div>
            </div>

            {/* Results */}
            <div className="bg-black/40 rounded-xl p-8 border border-white/5 flex flex-col justify-center">
              <div className="mb-8">
                <span className="text-sm text-gray-400 block mb-2">Estimated Monthly EMI</span>
                <div className="text-4xl md:text-5xl font-serif text-white flex items-baseline gap-2">
                  ₹{emi.toLocaleString('en-IN')} <span className="text-sm font-sans text-gray-500 tracking-widest uppercase">/ month</span>
                </div>
              </div>

              <div className="space-y-4 mb-10">
                <div className="flex justify-between text-sm border-b border-white/5 pb-2">
                  <span className="text-gray-400">Total Property Value</span>
                  <span className="text-white">₹{(basePrice / 10000000).toFixed(2)} Cr*</span>
                </div>
                <div className="flex justify-between text-sm border-b border-white/5 pb-2">
                  <span className="text-gray-400">Projected Rental Yield</span>
                  <span className="text-emerald-400">~6.5% Annually</span>
                </div>
              </div>

              {/* The Trap (Lead Gen) */}
              <div className="relative group">
                <button 
                  onClick={openModal}
                  className="w-full bg-white text-gray-900 py-4 rounded-lg font-semibold tracking-widest text-sm uppercase flex items-center justify-center gap-2 hover:bg-emerald-aqua transition-colors duration-300"
                >
                  <Lock className="w-4 h-4" />
                  Unlock Pre-Launch Discount
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
