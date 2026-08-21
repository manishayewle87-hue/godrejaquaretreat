"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, ChevronLeft, Building2, Home } from 'lucide-react';
import Link from 'next/link';

type EOIForm = {
  config: string;
  floorBand: string;
  name: string;
  email: string;
  phone: string;
  _hp?: string;
};

export default function EOIPage() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState<EOIForm>({
    config: '',
    floorBand: '',
    name: '',
    email: '',
    phone: '',
    _hp: '',
  });

  const nextStep = () => setStep(s => Math.min(s + 1, 3));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: "Priority EOI Engine",
          config: `${formData.config} | ${formData.floorBand}`
        })
      });

      if (!response.ok) throw new Error("Failed");
      
      setStatus('success');
    } catch (error) {
      console.error(error);
      setStatus('idle');
      alert("Failed to submit EOI. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-[#0B0C10] flex flex-col items-center justify-center pt-24 px-6 relative overflow-hidden font-sans">
      
      {/* Background Decor */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-aqua/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/5 blur-[150px] pointer-events-none" />

      <div className="w-full max-w-3xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/" className="inline-flex items-center text-xs text-gray-500 uppercase tracking-[0.2em] hover:text-emerald-aqua transition-colors mb-8">
            <ChevronLeft size={16} className="mr-2" /> Back to Estate
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
            Expression of Interest
          </h1>
          <p className="text-gray-400 font-light text-sm md:text-base max-w-lg mx-auto">
            Lock in your priority allocation at The Aqua Retreat by submitting your preferences below.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-white/5 h-1 rounded-full mb-12 overflow-hidden">
          <motion.div 
            className="h-full bg-emerald-aqua"
            initial={{ width: "33%" }}
            animate={{ width: `${(step / 3) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Form Container */}
        <div className="bg-[#15181E] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative min-h-[400px]">
          <AnimatePresence mode="wait">
            
            {/* Step 1: Configuration */}
            {step === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col h-full"
              >
                <h2 className="text-2xl font-serif text-white mb-8">Select Configuration</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <button 
                    onClick={() => setFormData({...formData, config: '2 BHK Premium'})}
                    className={`flex flex-col items-center justify-center p-8 rounded-2xl border transition-all duration-300 ${formData.config === '2 BHK Premium' ? 'border-emerald-aqua bg-emerald-aqua/10 text-emerald-aqua' : 'border-white/10 hover:border-white/30 text-gray-400'}`}
                  >
                    <Home size={32} strokeWidth={1} className="mb-4" />
                    <span className="text-xl font-serif text-white mb-2">2 BHK Premium</span>
                    <span className="text-xs uppercase tracking-widest opacity-80">~800 sq.ft</span>
                  </button>
                  <button 
                    onClick={() => setFormData({...formData, config: '3 BHK Luxury'})}
                    className={`flex flex-col items-center justify-center p-8 rounded-2xl border transition-all duration-300 ${formData.config === '3 BHK Luxury' ? 'border-emerald-aqua bg-emerald-aqua/10 text-emerald-aqua' : 'border-white/10 hover:border-white/30 text-gray-400'}`}
                  >
                    <Building2 size={32} strokeWidth={1} className="mb-4" />
                    <span className="text-xl font-serif text-white mb-2">3 BHK Luxury</span>
                    <span className="text-xs uppercase tracking-widest opacity-80">~1200 sq.ft</span>
                  </button>
                </div>
                <div className="mt-auto flex justify-end">
                  <button 
                    onClick={nextStep}
                    disabled={!formData.config}
                    className="flex items-center bg-white text-gray-900 px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-emerald-aqua transition-colors disabled:opacity-30"
                  >
                    Continue <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Preference */}
            {step === 2 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col h-full"
              >
                <h2 className="text-2xl font-serif text-white mb-8">Select Floor Preference</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {['Low Rise (1-10)', 'Mid Rise (11-20)', 'High Rise (21+)'].map((band) => (
                    <button 
                      key={band}
                      onClick={() => setFormData({...formData, floorBand: band})}
                      className={`py-6 px-4 rounded-xl border text-sm text-center transition-all ${formData.floorBand === band ? 'border-emerald-aqua bg-emerald-aqua/10 text-emerald-aqua' : 'border-white/10 text-gray-400 hover:border-white/30'}`}
                    >
                      {band}
                    </button>
                  ))}
                </div>
                <div className="mt-auto flex justify-between">
                  <button onClick={prevStep} className="text-gray-500 hover:text-white text-xs uppercase tracking-widest transition-colors">Back</button>
                  <button 
                    onClick={nextStep}
                    disabled={!formData.floorBand}
                    className="flex items-center bg-white text-gray-900 px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-emerald-aqua transition-colors disabled:opacity-30"
                  >
                    Continue <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Details */}
            {step === 3 && status !== 'success' && (
              <motion.div 
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col h-full"
              >
                <h2 className="text-2xl font-serif text-white mb-2">Final Details</h2>
                <p className="text-gray-500 font-light text-sm mb-8">You are locking in an EOI for a {formData.config} on a {formData.floorBand} floor.</p>
                
                <form id="eoiForm" onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <input 
                    type="text" 
                    name="_hp" 
                    value={formData._hp} 
                    onChange={(e) => setFormData({...formData, _hp: e.target.value})} 
                    className="hidden" 
                    tabIndex={-1} 
                    autoComplete="off" 
                    aria-hidden="true" 
                  />
                  <input 
                    type="text" 
                    required 
                    placeholder="Full Name" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-black/30 border border-white/10 py-3 px-4 rounded-xl text-white outline-none focus:border-emerald-aqua transition-colors font-light"
                  />
                  <input 
                    type="email" 
                    required 
                    placeholder="Email Address" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-black/30 border border-white/10 py-3 px-4 rounded-xl text-white outline-none focus:border-emerald-aqua transition-colors font-light"
                  />
                  <input 
                    type="tel" 
                    required 
                    placeholder="Phone Number (+91)" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-black/30 border border-white/10 py-3 px-4 rounded-xl text-white outline-none focus:border-emerald-aqua transition-colors font-light"
                  />
                </form>

                <div className="mt-auto flex justify-between pt-8">
                  <button onClick={prevStep} className="text-gray-500 hover:text-white text-xs uppercase tracking-widest transition-colors">Back</button>
                  <button 
                    type="submit"
                    form="eoiForm"
                    disabled={status === 'submitting'}
                    className="flex items-center bg-emerald-aqua text-gray-900 px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-emerald-aqua/80 transition-colors disabled:opacity-50"
                  >
                    {status === 'submitting' ? 'Processing...' : 'Submit EOI'}
                  </button>
                </div>
              </motion.div>
            )}

            {/* Success */}
            {status === 'success' && (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center h-full py-12"
              >
                <CheckCircle2 size={80} strokeWidth={1} className="text-emerald-aqua mb-6" />
                <h2 className="text-3xl font-serif text-white mb-4">EOI Logged Successfully</h2>
                <p className="text-gray-400 font-light mb-8 max-w-sm">
                  Your priority allocation for {formData.config} has been registered. A relationship manager will contact you within 2 hours.
                </p>
                <Link href="/" className="px-8 py-3 border border-white/20 text-white rounded-full text-xs uppercase tracking-widest hover:border-emerald-aqua hover:text-emerald-aqua transition-colors">
                  Return to Estate
                </Link>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </main>
  );
}
