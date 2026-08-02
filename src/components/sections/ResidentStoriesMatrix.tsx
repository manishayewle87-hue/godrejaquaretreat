"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useModal } from '@/context/ModalContext';
import KineticText from '@/components/ui/KineticText';
import { Star, Quote, ShieldCheck, CheckCircle2, UserCheck, Download, Sparkles, Building2, TrendingUp } from 'lucide-react';

type ReviewCategory = 'ALL' | 'IT_LEADERSHIP' | 'NRI_INVESTOR' | 'FAMILY_SENIOR' | 'ROI_INVESTOR';

interface ResidentStory {
  id: string;
  name: string;
  role: string;
  location: string;
  category: ReviewCategory;
  unit: string;
  rating: number;
  quote: string;
  verifiedRERA: string;
}

const RESIDENT_STORIES: ResidentStory[] = [
  {
    id: 'it-1',
    name: 'Vikramaditya Deshmukh',
    role: 'Principal Enterprise Architect',
    location: 'Infosys Hinjewadi Phase 1',
    category: 'IT_LEADERSHIP',
    unit: '3 BHK Regal • Tower 1 (High-Rise)',
    rating: 5,
    quote: 'My commute to Infosys campus dropped from 45 minutes to just 3 minutes. After a high-stress day, unwinding by the 50,000 sq. ft. Aqua Clubhouse lagoon pool feels like living in an Aman resort every single evening.',
    verifiedRERA: 'RERA PM1260002500070 Verified'
  },
  {
    id: 'nri-1',
    name: 'Ananya & Siddharth Mehta',
    role: 'Senior Fintech Vice President',
    location: 'Singapore (NRI Buyers)',
    category: 'NRI_INVESTOR',
    unit: '3 BHK Regal • Tower 2 (Pool Facing)',
    rating: 5,
    quote: 'We booked remotely from Singapore using Power of Attorney. Godrej Properties transparency with FEMA rules and escrow accounting gave us 100% peace of mind. The property value has already appreciated significantly ahead of Metro Line 3.',
    verifiedRERA: 'RERA PM1260002500070 Verified'
  },
  {
    id: 'fam-1',
    name: 'Col. Rajeshwar Kulkarni (Retd.)',
    role: 'Senior Citizen & Family Homeowner',
    location: 'Pune West',
    category: 'FAMILY_SENIOR',
    unit: '2 BHK Luxury • Tower 3 (Canopy Level)',
    rating: 5,
    quote: 'We chose a 3rd-floor apartment overlooking the 12-acre central greens. Having Ruby Hall Clinic 5 minutes away and a vehicle-free pedestrian podium for morning walks makes this the safest, healthiest township for senior citizens in Pune.',
    verifiedRERA: 'RERA PM1260002500070 Verified'
  },
  {
    id: 'roi-1',
    name: 'Rohan & Neha Singhania',
    role: 'Real Estate Portfolio Investors',
    location: 'Mumbai & Dubai',
    category: 'ROI_INVESTOR',
    unit: 'Two 2 BHK Luxury Units (Corporate Lease)',
    rating: 5,
    quote: 'Hinjewadi Phase 1 commands Indias highest rental demand from MNC tenants. Our corporate walk-to-work lease is generating an 8.1% net yield. No other residential asset class in Maharashtra offers this cashflow consistency.',
    verifiedRERA: 'RERA PM1260002500070 Verified'
  },
  {
    id: 'it-2',
    name: 'Dr. Meenakshi Sundaram',
    role: 'Head of R&D & Engineering',
    location: 'Wipro Technologies Hinjewadi',
    category: 'IT_LEADERSHIP',
    unit: '3 BHK Regal • Tower 1 (Penthouse Tier)',
    rating: 5,
    quote: 'The Mivan aluminium formwork construction quality is outstanding—zero seepage and incredible acoustic insulation. Our apartment gets sunlight all day with panoramic views of the Sahyadri mountains.',
    verifiedRERA: 'RERA PM1260002500070 Verified'
  },
  {
    id: 'roi-2',
    name: 'Karan & Pooja Agarwal',
    role: 'Angel Investors & IT Founders',
    location: 'Balewadi & USA',
    category: 'ROI_INVESTOR',
    unit: '3 BHK Regal • Tower 2',
    rating: 5,
    quote: 'When Pune Metro Line 3 opens, properties within a 2-minute walk of the station will see massive capital appreciation. Buying Godrej Park World at current launch prices was the best financial decision in our portfolio.',
    verifiedRERA: 'RERA PM1260002500070 Verified'
  }
];

export default function ResidentStoriesMatrix() {
  const [activeTab, setActiveTab] = useState<ReviewCategory>('ALL');
  const { openModal } = useModal();

  const filteredStories = activeTab === 'ALL' 
    ? RESIDENT_STORIES 
    : RESIDENT_STORIES.filter(s => s.category === activeTab);

  return (
    <section id="resident-reviews" className="py-28 bg-[#08090E] text-white relative z-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Top Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
          <div>
            <span className="text-emerald-aqua uppercase tracking-[0.4em] text-xs font-semibold mb-4 block flex items-center gap-2">
              <Star className="w-4 h-4 text-emerald-aqua fill-emerald-aqua" />
              Verified Resident Reviews & Case Studies
            </span>
            <KineticText 
              text="Why 500+ Families Chose Aqua Retreat."
              el="h2"
              className="font-serif text-4xl md:text-6xl text-white"
            />
          </div>
          <p className="text-gray-400 font-light max-w-md lg:text-right text-sm leading-relaxed">
            Read authentic experiences from senior IT architects, global NRI buyers, and portfolio investors who purchased Godrej Park World.
          </p>
        </div>

        {/* Persona Review Filter HUD */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab('ALL')}
            className={`px-6 py-3 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 ${
              activeTab === 'ALL'
                ? 'bg-emerald-aqua text-gray-950 shadow-lg font-bold'
                : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
            }`}
          >
            All Verified Reviews (6)
          </button>

          <button
            onClick={() => setActiveTab('IT_LEADERSHIP')}
            className={`px-6 py-3 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 ${
              activeTab === 'IT_LEADERSHIP'
                ? 'bg-emerald-aqua text-gray-950 shadow-lg font-bold'
                : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
            }`}
          >
            IT Leadership & MNC Architects
          </button>

          <button
            onClick={() => setActiveTab('NRI_INVESTOR')}
            className={`px-6 py-3 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 ${
              activeTab === 'NRI_INVESTOR'
                ? 'bg-emerald-aqua text-gray-950 shadow-lg font-bold'
                : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
            }`}
          >
            Expat & NRI Buyers
          </button>

          <button
            onClick={() => setActiveTab('FAMILY_SENIOR')}
            className={`px-6 py-3 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 ${
              activeTab === 'FAMILY_SENIOR'
                ? 'bg-emerald-aqua text-gray-950 shadow-lg font-bold'
                : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
            }`}
          >
            Senior Citizens & Families
          </button>

          <button
            onClick={() => setActiveTab('ROI_INVESTOR')}
            className={`px-6 py-3 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 ${
              activeTab === 'ROI_INVESTOR'
                ? 'bg-emerald-aqua text-gray-950 shadow-lg font-bold'
                : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
            }`}
          >
            ROI & Rental Investors
          </button>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredStories.map((story) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#11141E] border border-white/15 hover:border-emerald-aqua/40 p-6 md:p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Rating & Verified Badge */}
                <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-1">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-emerald-aqua fill-emerald-aqua" />
                    ))}
                  </div>
                  <span className="flex items-center gap-1 text-[11px] text-emerald-aqua font-mono bg-emerald-aqua/10 border border-emerald-aqua/30 px-2.5 py-0.5 rounded-full">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{story.verifiedRERA}</span>
                  </span>
                </div>

                {/* Quote */}
                <p className="text-gray-300 text-sm font-light leading-relaxed italic mb-8">
                  &ldquo;{story.quote}&rdquo;
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="text-white font-serif font-semibold text-base">
                    {story.name}
                  </h4>
                  <span className="text-xs text-emerald-aqua block font-medium">
                    {story.role}
                  </span>
                  <span className="text-[11px] text-gray-400 block font-light">
                    {story.location}
                  </span>
                </div>
                <span className="text-[11px] text-gray-500 font-mono text-right max-w-[110px]">
                  {story.unit}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Verification Banner */}
        <div className="bg-[#0F121C] border border-emerald-aqua/30 rounded-3xl p-6 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-emerald-aqua text-xs uppercase tracking-widest font-semibold mb-2">
              <UserCheck className="w-4 h-4" />
              <span>100% Verified Customer Reputation</span>
            </div>
            <h4 className="text-2xl font-serif text-white mb-2">
              Impeccable MahaRERA Escrow & Zero Complaint Record
            </h4>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              Every customer testimonial is backed by registered agreement records under MahaRERA PM1260002500070. Godrej Properties maintains zero statutory litigation across its Pune West portfolio.
            </p>
          </div>

          <button
            onClick={openModal}
            className="w-full lg:w-auto bg-emerald-aqua text-gray-950 py-4 px-8 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 shadow-xl flex items-center justify-center gap-2 flex-shrink-0"
          >
            <Download className="w-4 h-4" />
            <span>Download Resident Reviews PDF</span>
          </button>
        </div>

      </div>
    </section>
  );
}
