"use client";

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import KineticText from '@/components/ui/KineticText';
import { 
  Trees, Leaf, Apple, PlaySquare, Dumbbell, Mountain, Dog,
  Coffee, BookOpen, Briefcase, Users, Utensils, Scissors, Droplets,
  HeartPulse, Activity, Bath, Waves, Sun, PartyPopper, Umbrella,
  Armchair, Flower2, TreePine, Volleyball, Gamepad2, Bed, Store,
  Swords, TableProperties, X, ChevronRight, ChevronLeft
} from 'lucide-react';

const featuredAmenities = [
  { title: "Amphi-seating", img: "/images/brochure/page_11_img_1.png", subtitle: "Where quiet gatherings come alive." },
  { title: "BBQ Area", img: "/images/brochure/page_12_img_1.png", subtitle: "A warm corner for cool conversations." },
  { title: "Camping Area", img: "/images/brochure/page_13_img_1.png", subtitle: "Where stars shine brighter and stories flow." },
  { title: "Urban Deck", img: "/images/brochure/page_15_img_1.png", subtitle: "Where elevated views meet flowing moments." },
];

const amenityCategories = [
  {
    name: "Lower Ground",
    bgClass: "bg-gradient-to-br from-emerald-aqua/20 to-[#F5F5F0]",
    img: "/images/brochure/page_16_img_1.png",
    items: [
      { name: "Party Lawn", icon: PartyPopper },
      { name: "Nature Trail", icon: Leaf },
      { name: "Fruit Orchard", icon: Apple },
      { name: "Urban Swing", icon: PlaySquare },
      { name: "Open Gym", icon: Dumbbell },
      { name: "Raised Viewing Deck", icon: Mountain },
      { name: "Pet Park", icon: Dog },
    ]
  },
  {
    name: "Club House 1",
    bgClass: "bg-gradient-to-bl from-emerald-aqua/20 to-[#F5F5F0]",
    img: "/images/brochure/page_23_img_1.png",
    items: [
      { name: "Club Reception", icon: Users },
      { name: "Lounge and Library", icon: BookOpen },
      { name: "Business Centre", icon: Briefcase },
      { name: "Meeting Room (2)", icon: Users },
      { name: "Poolside Café", icon: Coffee },
      { name: "Hobby Room", icon: Flame }, // Note: Using Droplets as fallback if Flame fails
      { name: "Salon", icon: Scissors },
      { name: "Spa & Sauna", icon: Droplets },
      { name: "Gymnasium", icon: Dumbbell },
      { name: "Yoga/Zumba", icon: Activity },
      { name: "Aqua Gym", icon: HeartPulse },
      { name: "Kids' Pool", icon: Waves },
      { name: "Jacuzzi", icon: Bath },
      { name: "Swimming Pool", icon: Waves },
      { name: "Submerged Loungers", icon: Sun },
      { name: "Multi-Purpose Hall", icon: Utensils },
    ]
  },
  {
    name: "E Deck Level",
    bgClass: "bg-gradient-to-tr from-emerald-aqua/20 to-[#F5F5F0]",
    img: "/images/brochure/page_29_img_1.png",
    items: [
      { name: "Youth Interaction", icon: Users },
      { name: "Lawn", icon: Trees },
      { name: "Lagoon", icon: Waves },
      { name: "Garden by Lagoon", icon: Flower2 },
      { name: "Tree Island", icon: TreePine },
      { name: "Cabana and Deck", icon: Umbrella },
      { name: "Sunken Seating", icon: Armchair },
      { name: "Floor Fountain", icon: Droplets },
      { name: "Meditation Deck", icon: Activity },
      { name: "Reading Trellis", icon: BookOpen },
      { name: "Elderly Court", icon: Trees },
      { name: "Multi-Purpose Lawn", icon: PartyPopper },
      { name: "Flower Garden", icon: Flower2 },
      { name: "Children's Play Area", icon: PlaySquare },
      { name: "Multi-Purpose Court", icon: Volleyball },
    ]
  },
  {
    name: "Under Tower",
    bgClass: "bg-gradient-to-tl from-emerald-aqua/20 to-[#F5F5F0]",
    img: "/images/brochure/page_36_img_1.png",
    items: [
      { name: "Guest Suites", icon: Bed },
      { name: "Indoor Games Area", icon: Gamepad2 },
      { name: "Senior Citizen Area", icon: Users },
      { name: "Kids' Crèche", icon: PlaySquare },
      { name: "Mini Store", icon: Store },
      { name: "Badminton Court", icon: Swords },
      { name: "Squash Court", icon: TableProperties },
    ]
  }
];

function Flame(props: any) {
  return <Droplets {...props} />; // Fallback icon
}

function AmenityCard({ item, index }: { item: any, index: number }) {
  return (
    <motion.article 
      className="relative h-[60vh] md:h-[80vh] w-[90vw] md:w-[70vw] lg:w-[45vw] flex-shrink-0 group overflow-hidden"
    >
      <motion.div 
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 2, ease: [0.33, 1, 0.68, 1] }}
        viewport={{ once: true, margin: "-100px" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${item.img})` }}
      ></motion.div>
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-1000 z-10"></div>
      
      <motion.div 
        className="absolute inset-0 bg-[#FAFAFA] z-20 origin-right"
        initial={{ scaleX: 1 }}
        whileInView={{ scaleX: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: [0.83, 0, 0.17, 1] }}
      ></motion.div>

      <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 max-w-sm overflow-hidden z-30">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 + (index % 2) * 0.2 }}
        >
          <div className="text-emerald-aqua text-sm font-sans tracking-[0.2em] mb-3 opacity-80 uppercase">0{index + 1}</div>
          <h3 className="text-3xl md:text-4xl font-serif text-luxury-light mb-2">{item.title}</h3>
          {item.subtitle && <p className="text-gray-600 font-light text-sm">{item.subtitle}</p>}
        </motion.div>
      </div>
    </motion.article>
  );
}

export default function Amenities() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const carouselRef = useRef(null);

  return (
    <section id="amenities" className="py-32 bg-[#FAFAFA] border-t border-black/5 relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
        <span className="text-emerald-aqua uppercase tracking-[0.4em] text-xs font-semibold mb-4 block">
          The Experiences
        </span>
        <KineticText 
          text="Amenities In Motion."
          el="h2"
          className="font-serif text-5xl md:text-6xl lg:text-7xl text-luxury-light"
        />
      </div>

      <div className="overflow-x-auto pb-10 hide-scrollbar cursor-ew-resize">
        <div className="flex gap-4 md:gap-8 px-6 lg:px-12 w-max">
          {featuredAmenities.map((item, index) => (
            <AmenityCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>

      {/* Dynamic Bento Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-32 relative">
        <div className="mb-16 flex justify-between items-end">
          <div>
            <h3 className="font-serif text-3xl md:text-4xl text-luxury-light mb-4">The Complete Aqua Amenities</h3>
            <p className="text-gray-600 font-light text-lg">Over 40+ curated lifestyle features.</p>
          </div>
          {activeIdx !== null && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setActiveIdx(null)}
              className="flex items-center gap-2 text-sm tracking-widest uppercase text-emerald-aqua hover:text-gray-900 transition-colors"
            >
              <X size={16} /> Close
            </motion.button>
          )}
        </div>

        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
          layout 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 relative min-h-[600px]"
        >
          {amenityCategories.map((category, idx) => {
            const isActive = activeIdx === idx;
            const isInactive = activeIdx !== null && activeIdx !== idx;

            if (isInactive) return null; // Hide inactive blocks

            return (
              <motion.div
                layoutId={`bento-${idx}`}
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.95 },
                  show: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: { type: "spring", stiffness: 100, damping: 20 }
                  }
                }}
                onClick={() => !isActive && setActiveIdx(idx)}
                className={`${
                  isActive ? "col-span-1 md:col-span-2 row-span-2 h-[600px] cursor-default" : "h-[280px] cursor-pointer hover:border-emerald-aqua/30"
                } shadow-2xl shadow-black/5 border border-white rounded-[32px] overflow-hidden flex flex-col transition-colors duration-500 relative group`}
              >
                {/* Background image & gradient */}
                {category.img && (
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                    style={{ backgroundImage: `url(${category.img})` }}
                  ></div>
                )}
                <div className={`absolute inset-0 bg-white/70 group-hover:bg-white/50 transition-colors duration-1000 backdrop-blur-[2px]`}></div>
                <div className={`absolute inset-0 opacity-40 mix-blend-multiply ${category.bgClass}`}></div>
                
                {/* Header */}
                <motion.div layout className="p-10 relative z-10 flex justify-between items-start">
                  <div>
                    <h4 className="font-serif text-3xl text-luxury-light mb-2">{category.name}</h4>
                    <p className="text-emerald-aqua text-sm tracking-widest uppercase">{category.items.length} Amenities</p>
                  </div>
                  {!isActive && (
                    <div className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center text-gray-900/50 group-hover:text-emerald-aqua group-hover:border-emerald-aqua transition-colors duration-500">
                      <ChevronRight strokeWidth={1} />
                    </div>
                  )}
                </motion.div>

                {/* Internal Carousel (Only when active) */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                      className="flex-1 w-full relative z-10 overflow-hidden flex items-center"
                    >
                      {/* Drag constraints ref */}
                      <div ref={carouselRef} className="absolute inset-0 flex items-center px-10">
                        <motion.div
                          drag="x"
                          dragConstraints={carouselRef}
                          dragElastic={0.2}
                          className="flex gap-8 cursor-grab active:cursor-grabbing pb-10"
                        >
                          {category.items.map((item, itemIdx) => {
                            const Icon = item.icon;
                            return (
                              <motion.div 
                                key={itemIdx}
                                whileHover={{ scale: 1.05, y: -10 }}
                                className="w-40 h-48 rounded-[24px] bg-[#FAFAFA]/80 shadow-2xl shadow-black/5 border border-white rounded-[32px] flex flex-col items-center justify-center p-6 text-center shadow-2xl flex-shrink-0"
                              >
                                <div className="text-emerald-aqua mb-6">
                                  <Icon size={40} strokeWidth={1} />
                                </div>
                                <p className="text-gray-700 text-sm font-light leading-snug">{item.name}</p>
                              </motion.div>
                            );
                          })}
                        </motion.div>
                      </div>
                      
                      {/* Swipe Hint */}
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 text-gray-500 text-xs tracking-widest uppercase"
                      >
                        <ChevronLeft size={16} /> Drag to explore <ChevronRight size={16} />
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
