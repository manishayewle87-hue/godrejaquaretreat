"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import KineticText from '@/components/ui/KineticText';
import { useModal } from '@/context/ModalContext';
import { Volume2, VolumeX, Sun, Sunset, Moon, Compass, Sparkles } from 'lucide-react';

interface Vista {
  id: string;
  name: string;
  facing: string;
  desc: string;
  image: string;
}

const VISTAS: Vista[] = [
  {
    id: 'lagoon',
    name: 'Central Lagoon & Resort Pool',
    facing: 'East Facing • Morning Sun',
    desc: 'Overlooks the multi-tiered infinity lagoon pool, sunken cabanas, and cascading waterfalls.',
    image: 'https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/aqua-banner-1920x900-01-1-1-cmrnnfkpo000kj2phc4uv4hry.webp'
  },
  {
    id: 'greens',
    name: '12-Acre Township Central Greens',
    facing: 'North-East Facing • Park View',
    desc: 'Unobstructed vistas of the lush botanical gardens, shaded walking trails, and amphitheater.',
    image: 'https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/overview-1740x810-cmrnngdyo000lj2phcjaf0u8l.webp'
  },
  {
    id: 'horizon',
    name: 'Sahyadri Hills & Valley Horizon',
    facing: 'West Facing • Golden Hour Sunset',
    desc: 'Panoramic skyline views across Hinjewadi Phase 1 towards the rolling Sahyadri mountain range.',
    image: 'https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/1ce5fd50-c862-4897-b366-193da11253ca.webp'
  }
];

type LightingMode = 'day' | 'sunset' | 'night';

export default function BalconyVisualizer() {
  const [activeVistaIndex, setActiveVistaIndex] = useState(0);
  const [lightingMode, setLightingMode] = useState<LightingMode>('day');
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const { openModal } = useModal();

  const currentVista = VISTAS[activeVistaIndex];

  // Synthesize gentle water fountain ambient ripple using Web Audio API
  useEffect(() => {
    if (isAudioPlaying) {
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioCtx();
        audioContextRef.current = ctx;

        // Create pink noise buffer for water fountain sound
        const bufferSize = ctx.sampleRate * 2;
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          b0 = 0.99886 * b0 + white * 0.0555179;
          b1 = 0.99332 * b1 + white * 0.0750759;
          b2 = 0.96900 * b2 + white * 0.1538520;
          b3 = 0.86650 * b3 + white * 0.3104856;
          b4 = 0.55000 * b4 + white * 0.5329522;
          b5 = -0.7616 * b5 - white * 0.0168980;
          output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
          b6 = white * 0.115926;
        }

        const whiteNoise = ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;

        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0.08, ctx.currentTime);
        gainNodeRef.current = gainNode;

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(600, ctx.currentTime);

        whiteNoise.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);

        whiteNoise.start();
      } catch (e) {
        console.error("Web Audio API not supported", e);
      }
    } else {
      if (audioContextRef.current) {
        audioContextRef.current.close();
        audioContextRef.current = null;
      }
    }

    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, [isAudioPlaying]);

  const getLightingFilter = (mode: LightingMode) => {
    switch (mode) {
      case 'sunset':
        return 'sepia(40%) contrast(115%) saturate(140%) hue-rotate(-15deg)';
      case 'night':
        return 'brightness(50%) contrast(135%) saturate(85%) hue-rotate(180deg)';
      default:
        return 'brightness(100%) contrast(105%) saturate(105%)';
    }
  };

  return (
    <section id="balcony-views" className="py-32 bg-[#0A0B0E] text-white relative z-20 overflow-hidden border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-emerald-aqua uppercase tracking-[0.4em] text-xs font-semibold mb-4 block flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-aqua" />
              Interactive Balcony Deck Experience
            </span>
            <KineticText 
              text="Your Private Resort Vista."
              el="h2"
              className="font-serif text-4xl md:text-6xl text-white"
            />
          </div>
          <p className="text-gray-400 font-light max-w-sm md:text-right text-sm leading-relaxed">
            Experience the panoramic serenity of The Aqua Retreat from your private balcony deck across Morning, Golden Hour, and Midnight.
          </p>
        </div>

        {/* Visualizer Main Matrix */}
        <div className="relative w-full aspect-[16/10] md:aspect-[21/9] bg-black border border-white/15 rounded-3xl overflow-hidden shadow-2xl shadow-black/80">
          
          {/* Dynamic Image Layer with Lighting Transitions */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${currentVista.id}-${lightingMode}`}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.83, 0, 0.17, 1] }}
              className="absolute inset-0 w-full h-full"
              style={{ filter: getLightingFilter(lightingMode) }}
            >
              <Image 
                src={currentVista.image} 
                alt={currentVista.name}
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* Sunset & Night Atmospheric Overlays */}
          {lightingMode === 'sunset' && (
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-600/30 via-transparent to-rose-500/20 mix-blend-overlay pointer-events-none transition-opacity duration-700" />
          )}
          {lightingMode === 'night' && (
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/60 via-black/40 to-black/80 mix-blend-multiply pointer-events-none transition-opacity duration-700" />
          )}

          {/* Vignette & Gradient Protection */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40 pointer-events-none" />

          {/* Top HUD Controls (Lighting & Soundscape) */}
          <div className="absolute top-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 z-20">
            {/* Lighting Mode Selector */}
            <div className="flex items-center bg-black/70 backdrop-blur-md border border-white/20 rounded-full p-1 shadow-lg">
              <button
                onClick={() => setLightingMode('day')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 ${
                  lightingMode === 'day' 
                    ? 'bg-white text-black shadow-md' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <Sun className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Morning</span>
              </button>
              <button
                onClick={() => setLightingMode('sunset')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 ${
                  lightingMode === 'sunset' 
                    ? 'bg-amber-500 text-white shadow-md' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <Sunset className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Golden Hour</span>
              </button>
              <button
                onClick={() => setLightingMode('night')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 ${
                  lightingMode === 'night' 
                    ? 'bg-indigo-600 text-white shadow-md' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <Moon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Midnight</span>
              </button>
            </div>

            {/* Ambient Water Fountain Soundscape Toggle */}
            <button
              onClick={() => setIsAudioPlaying(!isAudioPlaying)}
              className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold backdrop-blur-md border transition-all duration-300 shadow-lg ${
                isAudioPlaying
                  ? 'bg-emerald-aqua text-black border-emerald-aqua animate-pulse'
                  : 'bg-black/70 text-gray-200 border-white/20 hover:border-white/40'
              }`}
            >
              {isAudioPlaying ? (
                <>
                  <Volume2 className="w-4 h-4" />
                  <span>Resort Audio: ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4" />
                  <span>Resort Audio: OFF</span>
                </>
              )}
            </button>
          </div>

          {/* Bottom HUD Information & Vista Switcher */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 z-20">
            {/* Current Vista Info */}
            <div className="max-w-md bg-black/70 backdrop-blur-md border border-white/15 p-6 rounded-2xl shadow-xl">
              <div className="flex items-center gap-2 text-emerald-aqua text-xs uppercase tracking-widest font-semibold mb-2">
                <Compass className="w-4 h-4" />
                <span>{currentVista.facing}</span>
              </div>
              <h3 className="text-2xl font-serif text-white mb-2">{currentVista.name}</h3>
              <p className="text-gray-300 text-xs font-light leading-relaxed">{currentVista.desc}</p>
            </div>

            {/* Vista Switcher Tabs & CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              <div className="flex bg-black/70 backdrop-blur-md border border-white/20 rounded-full p-1.5 w-full sm:w-auto overflow-x-auto">
                {VISTAS.map((vista, index) => (
                  <button
                    key={vista.id}
                    onClick={() => setActiveVistaIndex(index)}
                    className={`px-4 py-2.5 rounded-full text-xs uppercase tracking-widest font-medium whitespace-nowrap transition-all duration-300 ${
                      activeVistaIndex === index
                        ? 'bg-white text-black font-semibold shadow-md'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    View {index + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={openModal}
                className="bg-emerald-aqua text-gray-950 px-8 py-3.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase hover:bg-white transition-all duration-300 shadow-xl w-full sm:w-auto text-center"
              >
                Lock In This View
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
