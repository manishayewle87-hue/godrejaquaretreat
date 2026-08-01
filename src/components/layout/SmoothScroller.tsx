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
  }, [pathname]);

  return <>{children}</>;
}
