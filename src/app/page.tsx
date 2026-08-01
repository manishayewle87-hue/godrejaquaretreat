import dynamic from 'next/dynamic';
import Hero from "@/components/sections/Hero";
import VideoTour from "@/components/sections/VideoTour";
import About from "@/components/sections/About";
import AquaLifestyle from "@/components/sections/AquaLifestyle";
import Masterplan from "@/components/sections/Masterplan";
import Residences from "@/components/sections/Residences";
import Amenities from "@/components/sections/Amenities";
import Specifications from "@/components/sections/Specifications";
import Gallery from "@/components/sections/Gallery";
import Location from "@/components/sections/Location";
import Footer from "@/components/layout/Footer";

// Lazy load heavy interactive/media components
const InteractiveMasterplan = dynamic(() => import("@/components/sections/InteractiveMasterplan"));

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FAFAFA] selection:bg-emerald-aqua/30 selection:text-white">
      <Hero />
      <VideoTour />
      <About />
      <Masterplan />
      <Residences />
      <Amenities />
      <Specifications />
      <Gallery />
      <Location />
      <Footer />
    </main>
  );
}
