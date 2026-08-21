"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Loader2, Sparkles } from "lucide-react";
import KineticText from "@/components/ui/KineticText";

import { trackConversion } from "@/lib/analytics";

type QuizState = 'q1' | 'q2' | 'q3' | 'calculating' | 'capture' | 'success';

export default function Quiz() {
  const [step, setStep] = useState<QuizState>('q1');
  const [answers, setAnswers] = useState({ intent: '', config: '', budget: '' });
  const [formData, setFormData] = useState({ name: '', phone: '', _hp: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAnswer = (question: 'intent' | 'config' | 'budget', value: string) => {
    setAnswers(prev => ({ ...prev, [question]: value }));
    
    if (question === 'intent') setStep('q2');
    if (question === 'config') setStep('q3');
    if (question === 'budget') {
      setStep('calculating');
      setTimeout(() => setStep('capture'), 2500);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          _hp: formData._hp,
          email: '',
          configuration: `Quiz Lead: ${answers.config} | Budget: ${answers.budget} | Intent: ${answers.intent}`
        })
      });
      
      trackConversion('quiz_completed', {
        event_category: 'Lead Capture',
        event_label: 'Qualification Quiz',
        intent: answers.intent,
        budget: answers.budget,
        configuration: answers.config
      });
      
      setStep('success');
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="quiz" className="py-24 bg-luxury-dark relative z-20 text-luxury-light overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-aqua/5 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="text-center mb-16">
          <span className="text-emerald-aqua uppercase tracking-[0.4em] text-xs font-semibold mb-4 block">
            Personalized Curation
          </span>
          <KineticText 
            text="Find Your Perfect Match."
            el="h2"
            className="font-serif text-4xl md:text-5xl text-white mb-6"
          />
          <p className="text-gray-400 font-light max-w-xl mx-auto">
            Take this 30-second assessment to filter through our premium inventory and receive a personalized cost sheet tailored to your exact requirements.
          </p>
        </div>

        <div className="bg-[#15181E] border border-white/10 rounded-3xl p-8 md:p-12 min-h-[400px] flex flex-col justify-center shadow-2xl relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            
            {/* Q1: Intent */}
            {step === 'q1' && (
              <motion.div
                key="q1"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="flex flex-col h-full justify-center"
              >
                <div className="text-emerald-aqua text-sm font-semibold tracking-widest mb-4">Question 1 of 3</div>
                <h3 className="text-3xl font-serif text-white mb-8">What is your primary goal?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['Investment & High ROI', 'Self-Use / Primary Residence'].map((opt) => (
                    <button 
                      key={opt}
                      onClick={() => handleAnswer('intent', opt)}
                      className="text-left p-6 rounded-2xl border border-white/10 hover:border-emerald-aqua hover:bg-emerald-aqua/10 transition-colors group flex justify-between items-center"
                    >
                      <span className="text-lg text-gray-300 group-hover:text-white transition-colors">{opt}</span>
                      <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-emerald-aqua transition-colors" />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Q2: Config */}
            {step === 'q2' && (
              <motion.div
                key="q2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="flex flex-col h-full justify-center"
              >
                <div className="text-emerald-aqua text-sm font-semibold tracking-widest mb-4">Question 2 of 3</div>
                <h3 className="text-3xl font-serif text-white mb-8">What configuration do you require?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {['Premium 2 BHK', 'Luxury 2 BHK + Study', 'Ultra-Luxury 3 BHK'].map((opt) => (
                    <button 
                      key={opt}
                      onClick={() => handleAnswer('config', opt)}
                      className="text-left p-6 rounded-2xl border border-white/10 hover:border-emerald-aqua hover:bg-emerald-aqua/10 transition-colors group flex justify-between items-center"
                    >
                      <span className="text-lg text-gray-300 group-hover:text-white transition-colors">{opt}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Q3: Budget */}
            {step === 'q3' && (
              <motion.div
                key="q3"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="flex flex-col h-full justify-center"
              >
                <div className="text-emerald-aqua text-sm font-semibold tracking-widest mb-4">Question 3 of 3</div>
                <h3 className="text-3xl font-serif text-white mb-8">What is your estimated budget?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {['₹95 Lakhs - ₹1.2 Cr', '₹1.2 Cr - ₹1.5 Cr', 'Above ₹1.5 Cr'].map((opt) => (
                    <button 
                      key={opt}
                      onClick={() => handleAnswer('budget', opt)}
                      className="text-left p-6 rounded-2xl border border-white/10 hover:border-emerald-aqua hover:bg-emerald-aqua/10 transition-colors group flex justify-between items-center"
                    >
                      <span className="text-lg text-gray-300 group-hover:text-white transition-colors">{opt}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Calculating State */}
            {step === 'calculating' && (
              <motion.div
                key="calculating"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center text-center py-12 h-full"
              >
                <div className="relative mb-8">
                  <div className="w-20 h-20 border-4 border-white/10 border-t-emerald-aqua rounded-full animate-spin" />
                  <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-emerald-aqua" />
                </div>
                <h3 className="text-2xl font-serif text-white mb-2">Analyzing Inventory...</h3>
                <p className="text-gray-400 font-light">Cross-referencing your criteria with available phase 1 units.</p>
              </motion.div>
            )}

            {/* Capture Trap */}
            {step === 'capture' && (
              <motion.div
                key="capture"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col h-full justify-center max-w-md mx-auto w-full"
              >
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 bg-emerald-aqua/20 text-emerald-aqua px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4 border border-emerald-aqua/30">
                    <Check className="w-4 h-4" /> 2 Units Matched
                  </div>
                  <h3 className="text-3xl font-serif text-white mb-2">Unlock Your Results</h3>
                  <p className="text-gray-400 font-light text-sm">
                    Enter your details to instantly view the personalized cost sheet for the {answers.config} units matching your criteria.
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
                    className="w-full bg-[#0B0C10] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-aqua transition-colors"
                  />
                  <input 
                    type="tel" 
                    required
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-[#0B0C10] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-aqua transition-colors"
                  />
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-2 w-full bg-emerald-aqua text-gray-900 py-4 rounded-xl font-semibold tracking-widest uppercase hover:bg-emerald-aqua/90 transition-colors disabled:opacity-70 flex justify-center items-center gap-2"
                  >
                    {isSubmitting ? <><Loader2 className="w-5 h-5 animate-spin" /> Unlocking...</> : 'View Matching Units'}
                  </button>
                </form>
              </motion.div>
            )}

            {/* Success */}
            {step === 'success' && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-12 h-full"
              >
                <div className="w-20 h-20 bg-emerald-aqua/20 rounded-full flex items-center justify-center mb-6 border border-emerald-aqua/30">
                  <Check className="w-10 h-10 text-emerald-aqua" />
                </div>
                <h3 className="text-3xl font-serif text-white mb-4">Results Unlocked</h3>
                <p className="text-gray-400 font-light max-w-sm">
                  Our algorithm has successfully matched your profile. A senior Godrej relationship manager will contact you momentarily with the exclusive cost sheet.
                </p>
              </motion.div>
            )}

          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
