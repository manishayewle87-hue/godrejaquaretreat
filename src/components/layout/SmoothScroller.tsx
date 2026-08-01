"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from '@studio-freight/lenis';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroller({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

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
    // Global Link Interceptor to force Lenis to scroll smoothly instead of jumping
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        const id = anchor.hash.substring(1);
        const element = document.getElementById(id);
        
        if (element) {
          e.preventDefault();
          element.scrollIntoView({ behavior: 'smooth' });
          
          // Optionally, find the matching route and push state
          const routeMapReversed: Record<string, string> = {
            "project": "/godrej-park-world-pune-masterplan",
            "lifestyle": "/godrej-park-world-pune-aqua-lifestyle",
            "residences": "/godrej-park-world-pune-luxury-residences",
            "amenities": "/godrej-park-world-pune-premium-amenities",
            "location": "/godrej-park-world-pune-hinjewadi-location",
            "gallery": "/godrej-park-world-pune-gallery",
          };
          
          const href = routeMapReversed[id];
          if (href) {
            window.history.pushState(null, '', href);
          }
        }
      }
    };
    
    document.addEventListener('click', handleGlobalClick);

    // On mount or Next.js route change (not history pushState), check if we need to jump to a section
    const routeMap: Record<string, string> = {
      "/godrej-park-world-pune-masterplan": "project",
      "/godrej-park-world-pune-aqua-lifestyle": "lifestyle",
      "/godrej-park-world-pune-luxury-residences": "residences",
      "/godrej-park-world-pune-premium-amenities": "amenities",
      "/godrej-park-world-pune-hinjewadi-location": "location",
      "/godrej-park-world-pune-gallery": "gallery",
    };

    const targetId = routeMap[pathname];
    if (targetId) {
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          // Instant jump on initial load to avoid flashing
          window.scrollTo(0, element.offsetTop);
          ScrollTrigger.refresh();
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    }
    
    return () => document.removeEventListener('click', handleGlobalClick);
  }, [pathname]);

  return <>{children}</>;
}
