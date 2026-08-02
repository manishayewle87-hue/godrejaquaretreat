"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useModal } from '@/context/ModalContext';
import KineticText from '@/components/ui/KineticText';
import { GraduationCap, Stethoscope, ShoppingBag, UtensilsCrossed, MapPin, Clock, Download, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

type CategoryType = 'SCHOOLS' | 'HOSPITALS' | 'RETAIL' | 'HOSPITALITY';

interface Landmark {
  id: string;
  name: string;
  category: CategoryType;
  type: string;
  distanceKm: string;
  travelMins: string;
  highlight: string;
}

const LANDMARKS: Landmark[] = [
  // SCHOOLS
  {
    id: 'vibgyor',
    name: 'Vibgyor High School (Hinjewadi)',
    category: 'SCHOOLS',
    type: 'CBSE / ICSE Boarding & Day School',
    distanceKm: '2.5 KM',
    travelMins: '5 Mins',
    highlight: 'Premier K-12 education with Olympic-grade sports infrastructure.'
  },
  {
    id: 'pawar',
    name: 'Pawar Public School (Hinjewadi)',
    category: 'SCHOOLS',
    type: 'ICSE International Curriculum',
    distanceKm: '3.2 KM',
    travelMins: '7 Mins',
    highlight: 'Award-winning academic excellence and holistic development.'
  },
  {
    id: 'akshara',
    name: 'Akshara International School',
    category: 'SCHOOLS',
    type: 'IB / IGCSE Global School',
    distanceKm: '3.8 KM',
    travelMins: '8 Mins',
    highlight: 'International Baccalaureate curriculum for global universities.'
  },
  {
    id: 'mahindra',
    name: 'Mahindra International School',
    category: 'SCHOOLS',
    type: 'IB World School (Pune West)',
    distanceKm: '6.5 KM',
    travelMins: '12 Mins',
    highlight: 'Pune Wests most prestigious international boarding academy.'
  },

  // HOSPITALS
  {
    id: 'ruby',
    name: 'Ruby Hall Clinic (Hinjewadi Phase 1)',
    category: 'HOSPITALS',
    type: '24/7 Super-Speciality Hospital & Trauma Center',
    distanceKm: '2.2 KM',
    travelMins: '5 Mins',
    highlight: 'JCI-accredited tertiary care with advanced ICU & cardiology.'
  },
  {
    id: 'sanctuary',
    name: 'Sanctuary Hospital & Emergency Care',
    category: 'HOSPITALS',
    type: 'Multi-Specialty Healthcare Hub',
    distanceKm: '2.8 KM',
    travelMins: '6 Mins',
    highlight: 'Specialized pediatrics, gynecology, and orthopedic surgery.'
  },
  {
    id: 'manipal',
    name: 'Manipal Hospital (Baner)',
    category: 'HOSPITALS',
    type: 'Quaternary Healthcare Institution',
    distanceKm: '8.0 KM',
    travelMins: '14 Mins',
    highlight: 'National benchmark for organ transplants and oncology.'
  },
  {
    id: 'aditya',
    name: 'Aditya Birla Memorial Hospital',
    category: 'HOSPITALS',
    type: '500-Bed Multi-Specialty Medical Center',
    distanceKm: '9.5 KM',
    travelMins: '16 Mins',
    highlight: 'Punes largest corporate healthcare and diagnostic campus.'
  },

  // RETAIL
  {
    id: 'phoenix',
    name: 'Phoenix Mall of the Millennium (Wakad)',
    category: 'RETAIL',
    type: '1.2 Million Sq. Ft. Luxury Shopping Mall',
    distanceKm: '5.5 KM',
    travelMins: '10 Mins',
    highlight: 'Punes flagship luxury retail, INOX IMAX, and fine dining destination.'
  },
  {
    id: 'grand',
    name: 'Grand Highstreet Hinjewadi',
    category: 'RETAIL',
    type: 'Premium Open-Air Lifestyle & Retail Hub',
    distanceKm: '1.8 KM',
    travelMins: '4 Mins',
    highlight: 'Everyday gourmet shopping, cafes, and boutique fashion.'
  },
  {
    id: 'balewadi',
    name: 'Balewadi High Street',
    category: 'RETAIL',
    type: 'Premier Dining, Pubs & Entertainment District',
    distanceKm: '7.0 KM',
    travelMins: '12 Mins',
    highlight: 'Pune Wests most vibrant culinary and nightlife boulevard.'
  },
  {
    id: 'xion',
    name: 'Xion Mall & Multiplex',
    category: 'RETAIL',
    type: 'E-Square Multiplex & Brand Retail',
    distanceKm: '2.5 KM',
    travelMins: '6 Mins',
    highlight: 'Convenient movie theater and weekend family entertainment.'
  },

  // HOSPITALITY
  {
    id: 'radisson',
    name: 'Radisson Blu Pune (Hinjewadi)',
    category: 'HOSPITALITY',
    type: '5-Star Luxury Hotel & Spa',
    distanceKm: '2.1 KM',
    travelMins: '5 Mins',
    highlight: 'World-class corporate banquets, fine dining, and wellness suites.'
  },
  {
    id: 'vivanta',
    name: 'Vivanta Pune by Taj (Hinjewadi)',
    category: 'HOSPITALITY',
    type: 'Taj Group 5-Star Business Hotel',
    distanceKm: '2.6 KM',
    travelMins: '6 Mins',
    highlight: 'Iconic Taj hospitality and gourmet international restaurants.'
  },
  {
    id: 'hyatt',
    name: 'Hyatt Place Pune (Hinjewadi Phase 1)',
    category: 'HOSPITALITY',
    type: 'International Business & Lifestyle Hotel',
    distanceKm: '2.0 KM',
    travelMins: '5 Mins',
    highlight: 'Ideal for hosting visiting expat executives and corporate guests.'
  }
];

export default function NeighborhoodSocialMatrix() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('SCHOOLS');
  const { openModal } = useModal();

  const filteredLandmarks = LANDMARKS.filter(item => item.category === activeCategory);

  return (
    <section id="neighborhood" className="py-28 bg-[#0B0C10] text-white relative z-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Top Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
          <div>
            <span className="text-emerald-aqua uppercase tracking-[0.4em] text-xs font-semibold mb-4 block flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-aqua" />
              Mature Social Ecosystem
            </span>
            <KineticText 
              text="5-Minute Social Infrastructure."
              el="h2"
              className="font-serif text-4xl md:text-6xl text-white"
            />
          </div>
          <p className="text-gray-400 font-light max-w-md lg:text-right text-sm leading-relaxed">
            Godrej Park World is surrounded by Pune Wests most prestigious international schools, JCI-accredited hospitals, luxury malls, and 5-star hotels.
          </p>
        </div>

        {/* Interactive Category Switcher HUD */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          <button
            onClick={() => setActiveCategory('SCHOOLS')}
            className={`px-6 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 flex items-center gap-2.5 ${
              activeCategory === 'SCHOOLS'
                ? 'bg-emerald-aqua text-gray-950 shadow-lg font-bold'
                : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>IB / CBSE Schools</span>
          </button>

          <button
            onClick={() => setActiveCategory('HOSPITALS')}
            className={`px-6 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 flex items-center gap-2.5 ${
              activeCategory === 'HOSPITALS'
                ? 'bg-emerald-aqua text-gray-950 shadow-lg font-bold'
                : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
            }`}
          >
            <Stethoscope className="w-4 h-4" />
            <span>Multi-Specialty Hospitals</span>
          </button>

          <button
            onClick={() => setActiveCategory('RETAIL')}
            className={`px-6 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 flex items-center gap-2.5 ${
              activeCategory === 'RETAIL'
                ? 'bg-emerald-aqua text-gray-950 shadow-lg font-bold'
                : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Malls & Highstreets</span>
          </button>

          <button
            onClick={() => setActiveCategory('HOSPITALITY')}
            className={`px-6 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 flex items-center gap-2.5 ${
              activeCategory === 'HOSPITALITY'
                ? 'bg-emerald-aqua text-gray-950 shadow-lg font-bold'
                : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
            }`}
          >
            <UtensilsCrossed className="w-4 h-4" />
            <span>5-Star Hotels & Dining</span>
          </button>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-16">
          {filteredLandmarks.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#11141D] border border-white/10 hover:border-emerald-aqua/40 p-6 md:p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-3">
                  <span className="text-xs uppercase tracking-widest text-emerald-aqua font-semibold">
                    {item.type}
                  </span>
                  <div className="flex items-center gap-1.5 bg-emerald-aqua/15 text-emerald-aqua px-3 py-1 rounded-full text-xs font-mono font-bold">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{item.travelMins}</span>
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-serif text-white mb-2">
                  {item.name}
                </h3>

                <p className="text-gray-300 text-sm font-light leading-relaxed mb-6">
                  {item.highlight}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/5 text-xs text-gray-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-aqua" />
                  <span>Distance: <strong>{item.distanceKm}</strong></span>
                </span>
                <span className="text-[11px] text-gray-500 font-mono">
                  Hinjewadi Phase 1 Core
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Assurance Banner */}
        <div className="bg-[#0E1017] border border-white/15 rounded-3xl p-6 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-emerald-aqua text-xs uppercase tracking-widest font-semibold mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Walk-to-Everything Lifestyle</span>
            </div>
            <h4 className="text-2xl font-serif text-white mb-2">
              Why Hinjewadi Phase 1 is Pune West&apos;s Most Developed Zone
            </h4>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              Unlike outlying developments in Marunji or Punawale, Godrej Park World sits directly within Hinjewadi Phase 1—giving your family immediate access to mature roads, international schools, and tertiary hospitals.
            </p>
          </div>

          <button
            onClick={openModal}
            className="w-full lg:w-auto bg-emerald-aqua text-gray-950 py-4 px-8 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 shadow-xl flex items-center justify-center gap-2 flex-shrink-0"
          >
            <Download className="w-4 h-4" />
            <span>Download Schools & Healthcare Guide PDF</span>
          </button>
        </div>

      </div>
    </section>
  );
}
