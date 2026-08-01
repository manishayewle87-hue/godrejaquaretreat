"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';
import { useModal } from '@/context/ModalContext';

export default function EnquiryModal() {
  const { isOpen, closeModal } = useModal();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      // Reset after 3 seconds and close modal
      setTimeout(() => {
        closeModal();
        setStatus('idle');
      }, 3000);
    }, 1500);
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
          <div className="fixed inset-0 z-[101] pointer-events-none flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-lg pointer-events-auto overflow-hidden flex flex-col relative"
            >
              {/* Close Button */}
              <button 
                onClick={closeModal}
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 transition-colors z-10"
              >
                <X size={24} />
              </button>

              <div className="p-10 md:p-12">
                {status === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center justify-center text-center py-10"
                  >
                    <CheckCircle2 size={64} className="text-emerald-aqua mb-6" />
                    <h3 className="font-serif text-3xl text-gray-900 mb-2">Thank You</h3>
                    <p className="text-gray-600 font-light">
                      Your enquiry has been successfully submitted. Our preferred partners will contact you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="mb-10">
                      <h3 className="font-serif text-3xl text-gray-900 mb-2">Book a Site Visit</h3>
                      <p className="text-gray-600 font-light">
                        Leave your details below and our team will get back to you to schedule an exclusive tour.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="name" className="text-xs font-semibold tracking-widest text-gray-900 uppercase">Full Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          required
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
                          className="w-full border-b border-gray-300 py-2 bg-transparent text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-emerald-aqua transition-colors"
                          placeholder="+91 00000 00000"
                        />
                      </div>

                      <button 
                        type="submit"
                        disabled={status === 'submitting'}
                        className="mt-6 w-full bg-emerald-aqua text-white py-4 rounded-full text-sm font-semibold tracking-widest uppercase hover:bg-emerald-aqua/90 transition-colors disabled:opacity-70 flex justify-center items-center"
                      >
                        {status === 'submitting' ? 'Submitting...' : 'Submit Enquiry'}
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
