"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from 'next/link';

export default function Footer() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <footer className="bg-[#15181E] text-white pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.5, ease: [0.83, 0, 0.17, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-24"
        >
          
          {/* Brand & Newsletter */}
          <div className="lg:col-span-5">
            <h3 className="font-serif text-3xl md:text-4xl mb-6 tracking-wide text-white">
              The <i className="text-emerald-aqua font-light">Aqua</i> Retreat
            </h3>
            <p className="text-gray-400 font-light max-w-sm mb-10 leading-relaxed text-sm">
              Experience the pinnacle of resort-style living at Godrej Park World, Hinjewadi. Designed for clarity, calm, and continuous flow.
            </p>
            
            <div className="mb-8 relative">
              <h4 className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold mb-6">Stay Inspired</h4>
              
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 text-emerald-aqua text-sm"
                  >
                    <CheckCircle2 size={18} /> Successfully subscribed!
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubscribe}
                    className="flex items-center max-w-sm border-b border-white/20 pb-3 transition-colors focus-within:border-emerald-aqua group"
                  >
                    <input 
                      type="email" 
                      required
                      disabled={status === 'submitting'}
                      placeholder="Enter your email address" 
                      className="bg-transparent border-none outline-none w-full text-sm text-white placeholder:text-gray-400 font-light disabled:opacity-50"
                    />
                    <button 
                      type="submit"
                      disabled={status === 'submitting'}
                      aria-label="Subscribe" 
                      className="text-gray-500 group-hover:text-emerald-aqua transition-colors disabled:opacity-50"
                    >
                      <ArrowRight size={18} strokeWidth={1.5} />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer Navigation" className="lg:col-span-2 lg:col-start-7">
            <h4 className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold mb-6">Explore</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-400 font-light">
              <li><Link href="/godrej-park-world-pune-aqua-lifestyle" scroll={false} className="hover:text-emerald-aqua transition-colors">The Philosophy</Link></li>
              <li><Link href="/godrej-park-world-pune-masterplan" scroll={false} className="hover:text-emerald-aqua transition-colors">Masterplan</Link></li>
              <li><Link href="/godrej-park-world-pune-luxury-residences" scroll={false} className="hover:text-emerald-aqua transition-colors">Residences</Link></li>
              <li><Link href="/godrej-park-world-pune-premium-amenities" scroll={false} className="hover:text-emerald-aqua transition-colors">Amenities</Link></li>
              <li><Link href="/godrej-park-world-pune-gallery" scroll={false} className="hover:text-emerald-aqua transition-colors">Gallery</Link></li>
            </ul>
          </nav>

          {/* Contact & Socials */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold mb-6">Contact</h4>
            <address className="not-italic flex flex-col gap-5 text-sm text-gray-400 font-light mb-10">
              <div className="flex items-start gap-3">
                <MapPin size={18} strokeWidth={1} className="text-emerald-aqua shrink-0 mt-0.5" />
                <p className="leading-relaxed">Godrej Park World,<br/> Hinjewadi Phase 1,<br/> Pune, Maharashtra 411057</p>
              </div>
              <div className="flex items-center gap-3 hover:text-emerald-aqua transition-colors">
                <Phone size={18} strokeWidth={1} className="text-emerald-aqua shrink-0" />
                <a href="tel:+917744009295">+91 7744009295</a>
              </div>
            </address>

            <div className="flex flex-col gap-4">
              <h4 className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold mt-4 mb-2">MahaRERA Registration</h4>
              <p className="text-xs text-gray-400 font-light border border-white/20 inline-block px-3 py-2 rounded-[32px] w-max mb-6">
                No. PM1260002500070
              </p>
              
              <div className="flex items-center gap-4">
                <a href="#" aria-label="Instagram" className="w-10 h-10 border border-white/20 flex items-center justify-center text-gray-400 hover:bg-emerald-aqua hover:text-gray-900 hover:border-emerald-aqua transition-all">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" aria-label="Facebook" className="w-10 h-10 border border-white/20 flex items-center justify-center text-gray-400 hover:bg-emerald-aqua hover:text-gray-900 hover:border-emerald-aqua transition-all">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" aria-label="Twitter" className="w-10 h-10 border border-white/20 flex items-center justify-center text-gray-400 hover:bg-emerald-aqua hover:text-gray-900 hover:border-emerald-aqua transition-all">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </a>
              </div>
            </div>
          </div>
          
        </motion.div>

        {/* Advanced SEO Matrix */}
        <div className="py-12 border-t border-white/10 mt-8 mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Godrej Ecosystem */}
            <div>
              <h5 className="text-gray-400 font-semibold text-xs tracking-[0.2em] uppercase mb-4">Godrej Pune Ecosystem</h5>
              <ul className="flex flex-col gap-2 text-[10px] text-gray-500 font-light leading-relaxed">
                <li><Link href="/" className="hover:text-emerald-aqua transition-colors">Godrej Park World</Link></li>
                <li><Link href="/clusters/the-aqua-retreat" className="hover:text-emerald-aqua transition-colors">Godrej Aqua Retreat</Link></li>
                <li><Link href="/clusters/the-gale" className="hover:text-emerald-aqua transition-colors">Godrej The Gale</Link></li>
                <li><Link href="/clusters/the-greenfront" className="hover:text-emerald-aqua transition-colors">Godrej Greenfront</Link></li>
                <li><Link href="/clusters/godrej-woodsville" className="hover:text-emerald-aqua transition-colors">Godrej Woodsville</Link></li>
                <li><Link href="/clusters/the-eden-estate-na-plots" className="hover:text-emerald-aqua transition-colors">Godrej Eden Estate</Link></li>
                <li><Link href="/clusters/godrej-elements" className="hover:text-emerald-aqua transition-colors">Godrej Elements</Link></li>
                <li><Link href="/clusters/godrej-24" className="hover:text-emerald-aqua transition-colors">Godrej 24</Link></li>
              </ul>
            </div>

            {/* Popular Searches */}
            <div>
              <h5 className="text-gray-400 font-semibold text-xs tracking-[0.2em] uppercase mb-4">Trending Searches</h5>
              <ul className="flex flex-col gap-2 text-[10px] text-gray-500 font-light leading-relaxed">
                <li><a href="#" className="hover:text-emerald-aqua transition-colors">best apartments in Hinjewadi</a></li>
                <li><a href="#" className="hover:text-emerald-aqua transition-colors">luxury apartments in Hinjewadi</a></li>
                <li><a href="#" className="hover:text-emerald-aqua transition-colors">premium township in Pune</a></li>
                <li><a href="#" className="hover:text-emerald-aqua transition-colors">flats near Infosys Pune</a></li>
                <li><a href="#" className="hover:text-emerald-aqua transition-colors">apartments near Wipro Pune</a></li>
                <li><a href="#" className="hover:text-emerald-aqua transition-colors">apartments near metro Pune</a></li>
                <li><a href="#" className="hover:text-emerald-aqua transition-colors">investment property in Hinjewadi</a></li>
                <li><a href="#" className="hover:text-emerald-aqua transition-colors">under construction projects Pune</a></li>
              </ul>
            </div>

            {/* Competitor Comparisons (Discreet) */}
            <div>
              <h5 className="text-gray-400 font-semibold text-xs tracking-[0.2em] uppercase mb-4">Market Comparisons</h5>
              <ul className="flex flex-col gap-2 text-[10px] text-gray-500 font-light leading-relaxed">
                <li><a href="#" className="hover:text-emerald-aqua transition-colors">Godrej vs Lodha Hinjewadi</a></li>
                <li><a href="#" className="hover:text-emerald-aqua transition-colors">Godrej vs Kolte Patil Hinjewadi</a></li>
                <li><a href="#" className="hover:text-emerald-aqua transition-colors">Godrej vs VTP Hinjewadi</a></li>
                <li><a href="#" className="hover:text-emerald-aqua transition-colors">Godrej vs Gera Hinjewadi</a></li>
                <li><a href="#" className="hover:text-emerald-aqua transition-colors">Shapoorji Pallonji Hinjewadi</a></li>
                <li><a href="#" className="hover:text-emerald-aqua transition-colors">Mahindra Citadel Alternatives</a></li>
                <li><a href="#" className="hover:text-emerald-aqua transition-colors">Pride World City Comparisons</a></li>
                <li><a href="#" className="hover:text-emerald-aqua transition-colors">Vilas Javdekar Pune</a></li>
              </ul>
            </div>

            {/* Investment & Queries */}
            <div>
              <h5 className="text-gray-400 font-semibold text-xs tracking-[0.2em] uppercase mb-4">Investment & FAQs</h5>
              <ul className="flex flex-col gap-2 text-[10px] text-gray-500 font-light leading-relaxed">
                <li><Link href="/blog/hinjewadi-phase-1-real-estate-investment-guide" className="hover:text-emerald-aqua transition-colors">Pune Property Investment</Link></li>
                <li><Link href="/blog/godrej-park-world-hinjewadi-township-guide" className="hover:text-emerald-aqua transition-colors">Godrej Park World Township Guide</Link></li>
                <li><Link href="/blog/the-aqua-retreat-price-breakdown-floor-plans" className="hover:text-emerald-aqua transition-colors">Rental Yield Hinjewadi</Link></li>
                <li><Link href="/blog/godrej-park-world-vs-competitors-review" className="hover:text-emerald-aqua transition-colors">Is Aqua Retreat worth buying?</Link></li>
                <li><Link href="/blog/godrej-park-world-vs-competitors-review" className="hover:text-emerald-aqua transition-colors">Is Godrej Park World a good investment?</Link></li>
                <li><Link href="/blog/the-gale-vs-the-aqua-retreat-godrej-park-world" className="hover:text-emerald-aqua transition-colors">The Gale vs Aqua Retreat</Link></li>
                <li><Link href="/blog/inside-godrej-aqua-retreat-5-star-resort-lifestyle" className="hover:text-emerald-aqua transition-colors">Aqua Retreat Lifestyle</Link></li>
                <li><Link href="/blog/the-aqua-retreat-price-breakdown-floor-plans" className="hover:text-emerald-aqua transition-colors">Download Cost Sheet</Link></li>
              </ul>
            </div>

          </div>
          
          <p className="text-gray-600 font-light text-[10px] leading-relaxed max-w-5xl mt-12">
            The Aqua Retreat by Godrej Properties Hinjewadi is one of the premier Godrej Properties Pune projects offering ultra-luxury resort-style living in Hinjewadi Phase 1. 
            Designed to integrate seamlessly with nature, this flagship Godrej Properties Pune development sets a new benchmark for premium real estate in Pune West. 
            Keywords and references to third-party developers (Lodha, VTP, Kolte Patil, Gera, Shapoorji Pallonji, Mahindra, Kohinoor, Kasturi, Rohan Builders, Pride Purple, Nyati, Kumar, Vilas Javdekar) are for comparative market analysis only.
          </p>
        </div>

        {/* Legal */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10 text-xs text-gray-500 font-light"
        >
          <p>&copy; {new Date().getFullYear()} Godrej Properties. All rights reserved.</p>
          <div className="flex gap-6 uppercase tracking-widest text-[10px]">
            <a href="#" className="hover:text-emerald-aqua transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-aqua transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-emerald-aqua transition-colors">RERA Disclaimers</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
