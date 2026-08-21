"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Loader2 } from 'lucide-react';
import { useModal } from '@/context/ModalContext';
import { trackConversion } from '@/lib/analytics';

export default function EnquiryModal() {
  const { isOpen, closeModal } = useModal();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', _hp: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error("Failed to submit");
      
      trackConversion('generate_lead', {
        event_category: 'Lead Capture',
        event_label: 'Enquiry Modal'
      });

      setStatus('success');
      // Reset after 3 seconds and close modal
      setTimeout(() => {
        closeModal();
        setStatus('idle');
        setFormData({ name: '', email: '', phone: '', _hp: '' });
      }, 3000);
    } catch (error) {
      console.error(error);
      setStatus('idle');
      alert("Failed to submit enquiry. Please try again or contact us via WhatsApp.");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100]"
          />
          
          {/* Modal Container */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row my-auto"
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/10 hover:bg-black/20 text-gray-800 rounded-full flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Side: Brand Imagery */}
              <div className="w-full md:w-5/12 bg-[#0D211C] p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
                {/* Visual accents */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-aqua/10 rounded-full blur-3xl pointer-events-none" />
                
                <div>
                  <span className="text-emerald-aqua text-xs font-semibold uppercase tracking-[0.2em] mb-2 block">
                    Godrej Properties
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
                    The Aqua Retreat
                  </h2>
                  <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
                    Hinjewadi Phase 1, Pune. Resort-style luxury living surrounded by 3.5+ acres of central greens.
                  </p>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-aqua animate-pulse" />
                    <span className="text-xs text-gray-300 tracking-wider">
                      Pre-Launch Privilege Passes Available
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Side: Form */}
              <div className="w-full md:w-7/12 p-8 md:p-12 bg-white flex flex-col justify-center">
                {status === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 flex flex-col items-center justify-center"
                  >
                    <CheckCircle2 className="w-16 h-16 text-emerald-aqua mb-4" />
                    <h3 className="font-serif text-2xl text-gray-900 mb-2">Thank You!</h3>
                    <p className="text-gray-600 text-sm max-w-xs">
                      Your interest has been registered. Our relationship manager will reach out shortly with exclusive details.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div className="mb-10">
                      <h3 className="font-serif text-3xl text-gray-900 mb-2">Book a Site Visit</h3>
                      <p className="text-gray-600 font-light">
                        Leave your details below and our team will get back to you to schedule an exclusive tour.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      {/* Honeypot field for bot detection */}
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
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="name" className="text-xs font-semibold tracking-widest text-gray-900 uppercase">Full Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full border-b border-gray-300 py-2 bg-transparent text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-emerald-aqua transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-xs font-semibold tracking-widest text-gray-900 uppercase">Email Address</label>
                        <input 
                          type="email" 
                          id="email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full border-b border-gray-300 py-2 bg-transparent text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-emerald-aqua transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="phone" className="text-xs font-semibold tracking-widest text-gray-900 uppercase">Phone Number</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full border-b border-gray-300 py-2 bg-transparent text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-emerald-aqua transition-colors"
                          placeholder="+91 00000 00000"
                        />
                      </div>

                      <button 
                        type="submit"
                        disabled={status === 'submitting'}
                        className="mt-6 w-full bg-emerald-aqua text-gray-900 py-4 rounded-full text-sm font-semibold tracking-widest uppercase hover:bg-emerald-aqua/90 transition-colors disabled:opacity-70 flex justify-center items-center gap-2"
                      >
                        {status === 'submitting' ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Processing...
                          </>
                        ) : (
                          'Submit Enquiry'
                        )}
                      </button>
                    </form>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
