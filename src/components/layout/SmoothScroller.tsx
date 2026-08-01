"use client";

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from '@studio-freight/lenis';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroller({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, []);

  useEffect(() => {
    if (!lenisRef.current) return;

    // Map the Next.js pathname to the target section ID
    const routeMap: Record<string, string> = {
      "/godrej-park-world-pune-masterplan": "project",
      "/godrej-park-world-pune-aqua-lifestyle": "lifestyle",
      "/godrej-park-world-pune-luxury-residences": "residences",
      "/godrej-park-world-pune-premium-amenities": "amenities",
      "/godrej-park-world-pune-hinjewadi-location": "location",
      "/godrej-park-world-pune-gallery": "gallery",
    };

    // 1. React to Pathname Changes (Back/Forward buttons & Initial Load)
    const targetId = routeMap[pathname];
    setTimeout(() => {
      if (targetId) {
        const element = document.getElementById(targetId);
        if (element) lenisRef.current?.scrollTo(element, { offset: -50, duration: 1.5 });
      } else if (pathname === "/") {
        lenisRef.current?.scrollTo(0, { duration: 1.5 });
      }
    }, 100);

    // 2. Global Click Interceptor (Fixes clicking the same link twice)
    const handleGlobalClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;
      
      const href = target.getAttribute('href');
      if (href) {
        const mappedId = routeMap[href];
        if (mappedId) {
          const element = document.getElementById(mappedId);
          if (element) {
            lenisRef.current?.scrollTo(element, { offset: -50, duration: 1.5 });
          }
        } else if (href === "/") {
          lenisRef.current?.scrollTo(0, { duration: 1.5 });
        }
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
    
  }, [pathname]);

  return <>{children}</>;
}
