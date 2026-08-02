"use client";

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useModal } from '@/context/ModalContext';
import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '/', id: 'home' },
  { name: 'Project', href: '/#project', id: 'project' },
  { name: 'Lifestyle', href: '/#lifestyle', id: 'lifestyle' },
  { name: 'Residences', href: '/#residences', id: 'residences' },
  { name: 'Amenities', href: '/#amenities', id: 'amenities' },
  { name: 'Location', href: '/#location', id: 'location' },
  { name: 'Gallery', href: '/#gallery', id: 'gallery' },
  { name: 'Blog', href: '/blog', id: 'blog' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openModal } = useModal();



  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.83, 0, 0.17, 1] }}
        className={`fixed w-full z-50 transition-all duration-700 flex justify-center ${scrolled ? 'top-4' : 'top-0'}`}
      >
        <div className={`relative w-full transition-all duration-700 flex items-center justify-between mx-auto bg-white/95 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-black/5 rounded-full ${
          scrolled 
            ? 'max-w-6xl px-6 py-2' 
            : 'max-w-7xl px-8 py-3 mt-4'
        }`}>
          
          {/* Logo - Left */}
          <div className={`flex-shrink-0 flex items-center gap-4 cursor-pointer transition-colors duration-500 text-gray-900`}>
            <svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg" className="h-10 md:h-14 w-auto">
              <g fill="#3BA0D1">
                <path className="animate-wave-1" d="M140 38 C 160 30, 180 30, 200 38 C 220 46, 240 46, 260 38 L 260 45 C 240 53, 220 53, 200 45 C 180 37, 160 37, 140 45 Z" />
                <path className="animate-wave-2" d="M140 53 C 165 42, 195 42, 220 53 C 240 62, 260 62, 280 53 L 280 63 C 260 72, 240 72, 220 63 C 195 52, 165 52, 140 63 Z" />
                <path className="animate-wave-3" d="M140 75 C 170 65, 200 65, 220 75 C 240 85, 260 85, 280 75 L 280 85 C 260 95, 240 95, 220 85 C 200 75, 170 75, 140 85 Z" />
              </g>
              <text x="200" y="115" fontFamily="var(--font-serif)" fontSize="24" fontWeight="500" letterSpacing="3" textAnchor="middle" fill="currentColor">GODREJ PARK WORLD</text>
              <text x="200" y="140" fontFamily="var(--font-sans)" fontSize="10" fontWeight="400" letterSpacing="6" textAnchor="middle" fill="currentColor">THE AQUA RETREAT HINJEWADI</text>
            </svg>
          </div>

          {/* Menu - Center */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + (i * 0.1), ease: "easeOut" }}
              >
                <Link
                  href={link.href}
                  className="text-sm font-sans uppercase tracking-widest font-semibold text-gray-700 transition-colors duration-300 hover:text-emerald-aqua block"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA - Right */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hidden lg:flex flex-shrink-0"
          >
            <button 
              onClick={openModal}
              className="bg-emerald-aqua text-white px-8 py-3 rounded-full text-xs font-sans uppercase font-semibold tracking-widest shadow-md shadow-emerald-aqua/20 hover:shadow-lg hover:shadow-emerald-aqua/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              Book Site Visit
            </button>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-900 hover:text-emerald-aqua transition-colors p-2"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.83, 0, 0.17, 1] }}
            className="fixed inset-0 z-40 bg-luxury-dark/95 backdrop-blur-2xl pt-32 px-10 flex flex-col gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + (i * 0.1), ease: [0.83, 0, 0.17, 1] }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-4xl font-serif font-light text-luxury-light hover:text-emerald-aqua transition-colors block"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.button 
              onClick={() => {
                setMobileMenuOpen(false);
                openModal();
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-12 text-emerald-aqua border border-emerald-aqua/50 w-max px-8 py-4 text-xs tracking-[0.2em] uppercase font-light hover:bg-emerald-aqua hover:text-luxury-dark transition-colors duration-500"
            >
              Book Site Visit
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
