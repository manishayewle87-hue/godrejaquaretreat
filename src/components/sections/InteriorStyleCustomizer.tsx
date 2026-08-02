"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useModal } from '@/context/ModalContext';
import KineticText from '@/components/ui/KineticText';
import { Palette, Layers, Sparkles, CheckCircle2, Download, ArrowRight, ShieldCheck, Home, Utensils, BedDouble, Sun } from 'lucide-react';

type StyleId = 'MILANESE' | 'SCANDINAVIAN' | 'HERITAGE';
type RoomId = 'LIVING' | 'KITCHEN' | 'MASTER_SUITE' | 'BALCONY';

interface MoodboardStyle {
  id: StyleId;
  name: string;
  tagline: string;
  badge: string;
  flooring: string;
  wallFinish: string;
  fittings: string;
  lighting: string;
  description: string;
  roomDetails: Record<RoomId, {
    headline: string;
    description: string;
    keyFeature: string;
  }>;
}

const MOODBOARD_STYLES: MoodboardStyle[] = [
  {
    id: 'MILANESE',
    name: 'Milanese Modern',
    tagline: 'Sleek Italian Minimalist Luxury',
    badge: 'Cosmopolitan European Palette',
    flooring: 'Statuario White Marble Finish Tiles (800 x 1600mm)',
    wallFinish: 'Warm Walnut Fluted Wood Paneling & Matte Acrylic Emulsion',
    fittings: 'Matte Champagne & Brushed Brass Hardware (Kohler / Grohe)',
    lighting: 'Concealed Architectural COB Downlights & Warm Cove LED LED strips',
    description: 'Inspired by Milan design houses, this moodboard combines pristine white marble aesthetics with rich walnut wood warmth and champagne gold accents for an ultra-sophisticated city residence.',
    roomDetails: {
      LIVING: {
        headline: 'Double-Height Visual Grandeur & Marble Sophistication',
        description: 'Seamless Statuario marble finish flooring stretches across the living and formal dining area, accented by a walnut-fluted TV feature wall and warm indirect cove lighting.',
        keyFeature: 'Fluted Walnut Feature Wall with Integrated Soundbar Recess'
      },
      KITCHEN: {
        headline: 'Italian Gourmet Quartz Island & Concealed Appliances',
        description: 'Matte graphite modular cabinetry combined with a Calacatta quartz countertop and breakfast bar. Engineered for zero-clutter gourmet cooking.',
        keyFeature: 'Scratch-Resistant Quartz Breakfast Bar with Champagne Accents'
      },
      MASTER_SUITE: {
        headline: 'Boutique Hotel Suite with Acoustic Fluted Bedhead',
        description: 'Warm walnut fluted headboard paneling with reading sconces, accompanied by dedicated his-and-hers walk-in wardrobe zones.',
        keyFeature: 'Custom Fluted Bedhead Wall with Dimmable Brass Sconces'
      },
      BALCONY: {
        headline: 'Italian Terrace with All-Weather Composite Decking',
        description: 'Anti-skid wood-look porcelain tiles with frameless toughened glass railing and warm LED planter accent lighting overlooking the Aqua Resort Lagoon.',
        keyFeature: 'Frameless Glass Balustrade with Seamless Lagoon Horizon View'
      }
    }
  },
  {
    id: 'SCANDINAVIAN',
    name: 'Scandinavian Aqua',
    tagline: 'Nordic Coastal Aman-Resort Living',
    badge: 'Breezy Resort Palette',
    flooring: 'Bleached White Oak Finish Engineered Tiles (Anti-Skid)',
    wallFinish: 'Soft Sage & Aqua Teal Lime Wash Accent Walls',
    fittings: 'Brushed Nickel & Matte Stainless Steel European Fittings',
    lighting: 'Organic Woven Pendant Lamps & Diffused Warm-White LED Coves',
    description: 'Crafted for serene resort living, Scandinavian Aqua pairs bleached oak textures with calm aqua teal tones, breathable organic linens, and brushed nickel hardware.',
    roomDetails: {
      LIVING: {
        headline: 'Sun-Drenched Coastal Haven with Breathable Textures',
        description: 'Light white oak finish floors paired with soft sage accent walls and sheer Belgian linen drapery that maximize morning natural light.',
        keyFeature: 'Lime-Wash Aqua Teal Feature Wall with Floating Oak Credenza'
      },
      KITCHEN: {
        headline: 'Nordic White-and-Oak Minimalist Culinary Studio',
        description: 'Matte white handleless cabinetry with natural oak open shelving and a seamless snow-white solid surface countertop.',
        keyFeature: 'Handleless Soft-Close German Hardware & Herb Planter Niche'
      },
      MASTER_SUITE: {
        headline: 'Zen Sanctuary with Linen Headboard & Ambient Cove',
        description: 'A calming primary suite featuring a soft upholstered linen bedhead, natural jute rugs, and floor-to-ceiling UPVC garden-view windows.',
        keyFeature: 'Acoustic Upholstered Linen Wall & Motorized Blackout Blinds Prep'
      },
      BALCONY: {
        headline: 'Breezy Resort Deck with Built-in Teak Planters',
        description: 'Weathered oak-finish porcelain decking with integrated herb planter troughs and ambient low-voltage garden lighting.',
        keyFeature: 'Integrated All-Weather Planter Troughs with Drip Irrigation Prep'
      }
    }
  },
  {
    id: 'HERITAGE',
    name: 'Royal Maharaja',
    tagline: 'Contemporary Regal Indian Heritage',
    badge: 'Timeless Luxury Palette',
    flooring: 'Beige Travertine Marble Finish Porcelain Tiles',
    wallFinish: 'Rich Burma Teakwood Accents & Subtle Gold-Weave Wallcoverings',
    fittings: 'Antique Gold & Rose Gold Metallic Bath Fittings (Kohler)',
    lighting: 'Handcrafted Brass Chandeliers & Warm Bronze Spotlights',
    description: 'A celebration of timeless Indian opulence modernized for 2026. Warm travertine marble meets rich teakwood woodwork and antique brass accents for a majestic family residence.',
    roomDetails: {
      LIVING: {
        headline: 'Palatial Living with Travertine & Antique Gold Nuances',
        description: 'Warm beige travertine marble flooring combined with brass-inlaid teakwood divider screens and handcrafted statement lighting.',
        keyFeature: 'Brass-Inlaid Teakwood Privacy Screen for Formal Foyer'
      },
      KITCHEN: {
        headline: 'Regal Modular Kitchen with Granite & Gold Hardware',
        description: 'Deep espresso teak-finish cabinetry paired with a polished Kashmir gold granite countertop and antique brass drawer pulls.',
        keyFeature: 'Heavy-Duty Brass Hardware & Integrated Indian Spice Pantry'
      },
      MASTER_SUITE: {
        headline: 'Maharaja Suite with Handwoven Silk-Texture Wallcoverings',
        description: 'Rich royal suite featuring a carved teakwood bedhead frame, warm ambient sconces, and generous walk-in dressing space.',
        keyFeature: 'Handcrafted Teak Bedhead Frame with Silk-Weave Acoustic Paneling'
      },
      BALCONY: {
        headline: 'Royal Verandah with Traditional Jaali Railing Accents',
        description: 'Warm terracotta-finish porcelain tiles with contemporary brass-finish jaali balcony privacy screens overlooking the central botanical spine.',
        keyFeature: 'Contemporary Brass-Finish Privacy Jaali Screening'
      }
    }
  }
];

const ROOMS: { id: RoomId; label: string; icon: React.ReactNode }[] = [
  { id: 'LIVING', label: 'Living & Formal Dining', icon: <Home className="w-4 h-4" /> },
  { id: 'KITCHEN', label: 'Gourmet Kitchen', icon: <Utensils className="w-4 h-4" /> },
  { id: 'MASTER_SUITE', label: 'Master Suite', icon: <BedDouble className="w-4 h-4" /> },
  { id: 'BALCONY', label: 'Sunset Balcony Deck', icon: <Sun className="w-4 h-4" /> }
];

export default function InteriorStyleCustomizer() {
  const [activeStyle, setActiveStyle] = useState<StyleId>('MILANESE');
  const [activeRoom, setActiveRoom] = useState<RoomId>('LIVING');
  const { openModal } = useModal();

  const currentMoodboard = MOODBOARD_STYLES.find(s => s.id === activeStyle) || MOODBOARD_STYLES[0];
  const currentRoomData = currentMoodboard.roomDetails[activeRoom];

  return (
    <section id="interior-styles" className="py-28 bg-[#07080C] text-white relative z-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Top Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
          <div>
            <span className="text-emerald-aqua uppercase tracking-[0.4em] text-xs font-semibold mb-4 block flex items-center gap-2">
              <Palette className="w-4 h-4 text-emerald-aqua" />
              Interactive Design Studio
            </span>
            <KineticText 
              text="Curated Luxury Moodboards."
              el="h2"
              className="font-serif text-4xl md:text-6xl text-white"
            />
          </div>
          <p className="text-gray-400 font-light max-w-md lg:text-right text-sm leading-relaxed">
            Explore 3 bespoke interior aesthetics engineered for Godrej Park World residences—from Milanese minimalist marble to Nordic coastal resort warmth.
          </p>
        </div>

        {/* HUD Switchers: Moodboard Styles */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          {MOODBOARD_STYLES.map((style) => (
            <button
              key={style.id}
              onClick={() => setActiveStyle(style.id)}
              className={`px-6 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 flex items-center gap-2.5 ${
                activeStyle === style.id
                  ? 'bg-emerald-aqua text-gray-950 shadow-xl font-bold'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>{style.name}</span>
            </button>
          ))}
        </div>

        {/* Room Explorer Tabs */}
        <div className="flex flex-wrap items-center bg-black/60 p-1.5 rounded-full border border-white/10 w-fit mb-12 gap-1">
          {ROOMS.map((room) => (
            <button
              key={room.id}
              onClick={() => setActiveRoom(room.id)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeRoom === room.id
                  ? 'bg-white text-gray-950 shadow-md font-bold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {room.icon}
              <span>{room.label}</span>
            </button>
          ))}
        </div>

        {/* Interactive Moodboard Specification Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#0C0F17] border border-white/15 rounded-3xl p-6 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-aqua/5 blur-[100px] rounded-full pointer-events-none" />

          {/* Left Column: Room Aesthetic Showcase */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-emerald-aqua font-semibold bg-emerald-aqua/10 border border-emerald-aqua/30 px-3 py-1 rounded-full">
                {currentMoodboard.badge}
              </span>
              <span className="text-xs text-gray-400 font-mono">
                {currentMoodboard.tagline}
              </span>
            </div>

            <h3 className="text-2xl md:text-4xl font-serif text-white">
              {currentRoomData.headline}
            </h3>

            <p className="text-gray-300 text-sm font-light leading-relaxed">
              {currentRoomData.description}
            </p>

            {/* Key Architectural Feature Highlight */}
            <div className="bg-black/60 border border-emerald-aqua/30 rounded-2xl p-5">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-aqua uppercase tracking-widest mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Signature Architectural Detail</span>
              </div>
              <p className="text-sm font-medium text-white">
                {currentRoomData.keyFeature}
              </p>
            </div>

            {/* Material & Fittings Specification Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs">
              <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                <span className="text-gray-400 uppercase tracking-wider block mb-1 font-semibold">Flooring Palette</span>
                <span className="text-gray-200 font-light">{currentMoodboard.flooring}</span>
              </div>
              <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                <span className="text-gray-400 uppercase tracking-wider block mb-1 font-semibold">Wall Finishes</span>
                <span className="text-gray-200 font-light">{currentMoodboard.wallFinish}</span>
              </div>
              <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                <span className="text-gray-400 uppercase tracking-wider block mb-1 font-semibold">Hardware & Fittings</span>
                <span className="text-gray-200 font-light">{currentMoodboard.fittings}</span>
              </div>
              <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                <span className="text-gray-400 uppercase tracking-wider block mb-1 font-semibold">Architectural Lighting</span>
                <span className="text-gray-200 font-light">{currentMoodboard.lighting}</span>
              </div>
            </div>
          </div>

          {/* Right Column: CTA HUD Box */}
          <div className="lg:col-span-5 bg-[#080A0F] border border-white/15 rounded-2xl p-6 lg:p-8 flex flex-col justify-between h-full space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-emerald-aqua font-bold block mb-3">
                Lookbook Directory
              </span>
              <h4 className="text-xl font-serif text-white mb-4">
                Download {currentMoodboard.name} Style Guide PDF
              </h4>
              <p className="text-xs text-gray-400 font-light leading-relaxed mb-6">
                Get our comprehensive interior fit-out lookbook, material supplier codes, and electrical layout drawings for 2 BHK and 3 BHK residences.
              </p>

              <ul className="space-y-3 text-xs text-gray-300 font-light mb-8">
                <li className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-aqua flex-shrink-0" />
                  <span>Compatible with Smart Home Automation Systems</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-aqua flex-shrink-0" />
                  <span>Includes Curated Vendor & Material Sourcing List</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-aqua flex-shrink-0" />
                  <span>3D CAD Floor Layouts & Electrical Schematics</span>
                </li>
              </ul>
            </div>

            <button
              onClick={openModal}
              className="w-full bg-emerald-aqua text-gray-950 py-4 px-6 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Official Lookbook PDF</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
