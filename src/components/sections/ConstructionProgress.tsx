"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useModal } from '@/context/ModalContext';
import KineticText from '@/components/ui/KineticText';
import { CheckCircle2, Clock, ShieldCheck, Download, HardHat, Camera, Building2 } from 'lucide-react';

interface Milestone {
  quarter: string;
  year: string;
  title: string;
  desc: string;
  status: 'completed' | 'in-progress' | 'scheduled';
  progress: number;
}

const MILESTONES: Milestone[] = [
  {
    quarter: 'Q1',
    year: '2025',
    title: 'Land Acquisition & MahaRERA Approval',
    desc: 'Official township land consolidation and MahaRERA registration approved under Number PM1260002500070.',
    status: 'completed',
    progress: 100
  },
  {
    quarter: 'Q3',
    year: '2025',
    title: 'Site Excavation & Foundation Shoring',
    desc: 'Deep basement piling, soil reinforcement, and primary perimeter boundary wall construction across 100+ acres.',
    status: 'completed',
    progress: 100
  },
  {
    quarter: 'Q1',
    year: '2026',
    title: 'Aqua Clubhouse & Lagoon Basin Casting',
    desc: 'RCC reinforced casting of the 50,000 sq. ft. clubhouse foundation and multi-tier infinity lagoon pool basin.',
    status: 'in-progress',
    progress: 65
  },
  {
    quarter: 'Q4',
    year: '2026',
    title: 'Super-Structure Mivan Formwork Casting',
    desc: 'High-speed, earthquake-resistant monolithic shear wall casting across all signature residential towers.',
    status: 'scheduled',
    progress: 0
  },
  {
    quarter: '2029',
    year: '2030',
    title: 'MahaRERA Handover & Possession',
    desc: 'Official occupancy certificate inspection, clubhouse handover, and key delivery to homeowners.',
    status: 'scheduled',
    progress: 0
  }
];

const SITE_GALLERY = [
  {
    id: 'lagoon',
    title: 'Aqua Clubhouse Foundation & Lagoon Basin',
    date: 'February 2026 Update',
    image: 'https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/aqua-banner-1920x900-01-1-1-cmrnnfkpo000kj2phc4uv4hry.webp',
    desc: 'Site engineers completing reinforced concrete waterproofing and foundation casting for the 50,000 sq. ft. resort clubhouse.'
  },
  {
    id: 'greens',
    title: '12-Acre Central Greens Land Grading',
    date: 'January 2026 Update',
    image: 'https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/overview-1740x810-cmrnngdyo000lj2phcjaf0u8l.webp',
    desc: 'Soil compaction, natural water drainage mapping, and botanical spine alignment across the township center.'
  },
  {
    id: 'access',
    title: 'Hinjewadi Phase 1 Metro Corridor Road Access',
    date: 'January 2026 Update',
    image: 'https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/1ce5fd50-c862-4897-b366-193da11253ca.webp',
    desc: 'Widening of the 30-meter arterial approach road connecting Godrej Park World directly to Hinjewadi Metro Line 3.'
  }
];

export default function ConstructionProgress() {
  const [activeGalleryTab, setActiveGalleryTab] = useState(0);
  const { openModal } = useModal();

  const activePhoto = SITE_GALLERY[activeGalleryTab];

  return (
    <section id="construction-status" className="py-32 bg-[#0B0C10] text-white relative z-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Top Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-20">
          <div>
            <span className="text-emerald-aqua uppercase tracking-[0.4em] text-xs font-semibold mb-4 block flex items-center gap-2">
              <HardHat className="w-4 h-4 text-emerald-aqua" />
              Live Engineering & Construction Status
            </span>
            <KineticText 
              text="Verified Site Progress."
              el="h2"
              className="font-serif text-4xl md:text-6xl text-white"
            />
          </div>
          <p className="text-gray-400 font-light max-w-md lg:text-right text-sm leading-relaxed">
            Godrej Properties Pune is committed to 100% engineering transparency and zero-risk delivery under strict MahaRERA escrow protections.
          </p>
        </div>

        {/* Milestone Timeline Roadmap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-20">
          {MILESTONES.map((milestone, index) => (
            <div 
              key={index} 
              className={`flex flex-col justify-between p-6 rounded-3xl border transition-all duration-500 relative overflow-hidden ${
                milestone.status === 'in-progress'
                  ? 'bg-[#151922] border-emerald-aqua shadow-xl'
                  : milestone.status === 'completed'
                  ? 'bg-white/5 border-white/15 hover:border-white/30'
                  : 'bg-white/[0.02] border-white/5 opacity-70'
              }`}
            >
              {/* Status Badge */}
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-aqua">
                  {milestone.quarter} {milestone.year}
                </span>
                {milestone.status === 'completed' && (
                  <span className="flex items-center gap-1.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider">
                    <CheckCircle2 className="w-3 h-3" /> Completed
                  </span>
                )}
                {milestone.status === 'in-progress' && (
                  <span className="flex items-center gap-1.5 bg-emerald-aqua/20 text-emerald-aqua border border-emerald-aqua/50 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider animate-pulse">
                    <Clock className="w-3 h-3" /> Active Work
                  </span>
                )}
                {milestone.status === 'scheduled' && (
                  <span className="text-gray-500 text-[10px] uppercase tracking-wider">
                    Scheduled
                  </span>
                )}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-serif text-white mb-2 leading-snug">
                  {milestone.title}
                </h3>
                <p className="text-gray-400 text-xs font-light leading-relaxed mb-6">
                  {milestone.desc}
                </p>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                <div 
                  className="bg-emerald-aqua h-full transition-all duration-1000" 
                  style={{ width: `${milestone.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Live Construction Site Photo Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#10131B] border border-white/10 rounded-3xl p-6 lg:p-12 shadow-2xl">
          
          {/* Photo Viewer */}
          <div className="lg:col-span-7 relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/15 bg-black">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeGalleryTab}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 w-full h-full"
              >
                <Image 
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 800px"
                />
              </motion.div>
            </AnimatePresence>

            {/* Photo HUD Overlay */}
            <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-white/20 text-emerald-aqua px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider flex items-center gap-2">
              <Camera className="w-3.5 h-3.5" />
              <span>{activePhoto.date}</span>
            </div>
          </div>

          {/* Photo Controls & Engineering Audit CTA */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-8">
            <div>
              <span className="text-emerald-aqua text-xs font-semibold tracking-widest uppercase block mb-3">
                Monthly Engineering Log
              </span>
              <h3 className="text-2xl lg:text-3xl font-serif text-white mb-4">
                {activePhoto.title}
              </h3>
              <p className="text-gray-300 text-sm font-light leading-relaxed mb-6">
                {activePhoto.desc}
              </p>

              {/* Photo Selector Tabs */}
              <div className="flex flex-col gap-2.5">
                {SITE_GALLERY.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveGalleryTab(index)}
                    className={`flex items-center justify-between p-3.5 rounded-xl border text-left transition-all duration-300 ${
                      activeGalleryTab === index
                        ? 'bg-white/10 border-emerald-aqua text-white shadow-md'
                        : 'bg-white/5 border-white/5 text-gray-400 hover:text-white hover:border-white/20'
                    }`}
                  >
                    <span className="text-xs font-medium uppercase tracking-wider">{item.title}</span>
                    <span className="text-[10px] text-emerald-aqua font-semibold">{index + 1}/3</span>
                  </button>
                ))}
              </div>
            </div>

            {/* MahaRERA Security & Download CTA Button */}
            <div className="bg-black/60 border border-white/15 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="w-5 h-5 text-emerald-aqua flex-shrink-0" />
                <span className="text-xs font-semibold uppercase tracking-wider text-white">
                  MahaRERA Escrow Protection (PM1260002500070)
                </span>
              </div>
              <p className="text-gray-400 text-xs font-light mb-6 leading-relaxed">
                70% of all customer collections are secured in a dedicated RERA bank escrow account solely reserved for construction and engineering costs.
              </p>
              
              <button
                onClick={openModal}
                className="w-full bg-emerald-aqua text-gray-950 py-3.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Complete Inspection PDF</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
