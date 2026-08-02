"use client";


import dynamic from 'next/dynamic';
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Location from "@/components/sections/Location";
import Footer from "@/components/layout/Footer";

// Lazy load heavy components
const Heritage = dynamic(() => import("@/components/sections/Heritage"));
const VideoTour = dynamic(() => import("@/components/sections/VideoTour"));
const AquaLifestyle = dynamic(() => import("@/components/sections/AquaLifestyle"));
const InteractiveMasterplan = dynamic(() => import("@/components/sections/InteractiveMasterplan"));
const Masterplan = dynamic(() => import("@/components/sections/Masterplan"));
const Residences = dynamic(() => import("@/components/sections/Residences"));
const FloorRiseViewSelector = dynamic(() => import("@/components/sections/FloorRiseViewSelector"));
const BalconyVisualizer = dynamic(() => import("@/components/sections/BalconyVisualizer"));
const Amenities = dynamic(() => import("@/components/sections/Amenities"));
const Specifications = dynamic(() => import("@/components/sections/Specifications"));
const InvestmentCalculator = dynamic(() => import("@/components/sections/InvestmentCalculator"));
const PaymentPlanSchedule = dynamic(() => import("@/components/sections/PaymentPlanSchedule"));
const CompetitorBenchmarkMatrix = dynamic(() => import("@/components/sections/CompetitorBenchmarkMatrix"));
const RentalYieldMatrix = dynamic(() => import("@/components/sections/RentalYieldMatrix"));
const Gallery = dynamic(() => import("@/components/sections/Gallery"));
const VirtualTour = dynamic(() => import("@/components/sections/VirtualTour"));
const MetroConnectivityScorecard = dynamic(() => import("@/components/sections/MetroConnectivityScorecard"));
const Location = dynamic(() => import("@/components/sections/Location"));
const ConstructionProgress = dynamic(() => import("@/components/sections/ConstructionProgress"));
const Quiz = dynamic(() => import("@/components/sections/Quiz"));
const FAQ = dynamic(() => import("@/components/sections/FAQ"));
const MicroMarketSEOBar = dynamic(() => import("@/components/layout/MicroMarketSEOBar"));

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
      <FloorRiseViewSelector />
      <BalconyVisualizer />
      <Amenities />
      <Specifications />
      <InvestmentCalculator />
      <PaymentPlanSchedule />
      <CompetitorBenchmarkMatrix />
      <RentalYieldMatrix />
      <Quiz />
      <Gallery />
      <VirtualTour />
      <MetroConnectivityScorecard />
      <Location />
      <ConstructionProgress />
      <FAQ />
      <MicroMarketSEOBar />
      <Footer />
    </>
  );
}
