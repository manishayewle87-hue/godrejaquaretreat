"use client";


import Hero from "@/components/sections/Hero";
import VideoTour from "@/components/sections/VideoTour";
import About from "@/components/sections/About";
import AquaLifestyle from "@/components/sections/AquaLifestyle";
import InteractiveMasterplan from "@/components/sections/InteractiveMasterplan";
import Masterplan from "@/components/sections/Masterplan";
import Residences from "@/components/sections/Residences";
import Amenities from "@/components/sections/Amenities";
import Specifications from "@/components/sections/Specifications";
import InvestmentCalculator from "@/components/sections/InvestmentCalculator";
import Gallery from "@/components/sections/Gallery";
import Heritage from "@/components/sections/Heritage";
import VirtualTour from "@/components/sections/VirtualTour";
import Location from "@/components/sections/Location";
import Footer from "@/components/layout/Footer";

export default function PageContent() {
  return (
    <>
      <Hero />
      <Heritage />
      <VideoTour />
      <About />
      <AquaLifestyle />
      <InteractiveMasterplan />
      <Masterplan />
      <Residences />
      <Amenities />
      <Specifications />
      <InvestmentCalculator />
      <Gallery />
      <VirtualTour />
      <Location />
      <Footer />
    </>
  );
}
