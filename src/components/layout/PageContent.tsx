"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Hero from "@/components/sections/Hero";
import VideoTour from "@/components/sections/VideoTour";
import About from "@/components/sections/About";
import AquaLifestyle from "@/components/sections/AquaLifestyle";
import InteractiveMasterplan from "@/components/sections/InteractiveMasterplan";
import Masterplan from "@/components/sections/Masterplan";
import Residences from "@/components/sections/Residences";
import Amenities from "@/components/sections/Amenities";
import Specifications from "@/components/sections/Specifications";
import Gallery from "@/components/sections/Gallery";
import Location from "@/components/sections/Location";
import Footer from "@/components/layout/Footer";

export default function PageContent() {
  const pathname = usePathname();

  useEffect(() => {
    // Map paths to section IDs
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
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 500); // Wait for Lenis/GSAP to mount
    }
  }, [pathname]);

  return (
    <>
      <Hero />
      <VideoTour />
      <About />
      <AquaLifestyle />
      <InteractiveMasterplan />
      <Masterplan />
      <Residences />
      <Amenities />
      <Specifications />
      <Gallery />
      <Location />
      <Footer />
    </>
  );
}
