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
const ClubhouseAmenityExplorer = dynamic(() => import("@/components/sections/ClubhouseAmenityExplorer"));
const InteractiveMasterplan = dynamic(() => import("@/components/sections/InteractiveMasterplan"));
const Masterplan = dynamic(() => import("@/components/sections/Masterplan"));
const Residences = dynamic(() => import("@/components/sections/Residences"));
const FloorRiseViewSelector = dynamic(() => import("@/components/sections/FloorRiseViewSelector"));
const BalconyVisualizer = dynamic(() => import("@/components/sections/BalconyVisualizer"));
const Amenities = dynamic(() => import("@/components/sections/Amenities"));
const Specifications = dynamic(() => import("@/components/sections/Specifications"));
const InteriorStyleCustomizer = dynamic(() => import("@/components/sections/InteriorStyleCustomizer"));
const InvestmentCalculator = dynamic(() => import("@/components/sections/InvestmentCalculator"));
const UnitPriceEstimator = dynamic(() => import("@/components/sections/UnitPriceEstimator"));
const PaymentPlanSchedule = dynamic(() => import("@/components/sections/PaymentPlanSchedule"));
const CompetitorBenchmarkMatrix = dynamic(() => import("@/components/sections/CompetitorBenchmarkMatrix"));
const RentalYieldMatrix = dynamic(() => import("@/components/sections/RentalYieldMatrix"));
const Gallery = dynamic(() => import("@/components/sections/Gallery"));
const VirtualTour = dynamic(() => import("@/components/sections/VirtualTour"));
const MetroConnectivityScorecard = dynamic(() => import("@/components/sections/MetroConnectivityScorecard"));
const NeighborhoodSocialMatrix = dynamic(() => import("@/components/sections/NeighborhoodSocialMatrix"));
const ConstructionProgress = dynamic(() => import("@/components/sections/ConstructionProgress"));
const Quiz = dynamic(() => import("@/components/sections/Quiz"));
const FAQ = dynamic(() => import("@/components/sections/FAQ"));
const ResidentStoriesMatrix = dynamic(() => import("@/components/sections/ResidentStoriesMatrix"));
const MicroMarketSEOBar = dynamic(() => import("@/components/layout/MicroMarketSEOBar"));

export default function PageContent() {
  return (
    <>
      <Hero />
      <Heritage />
      <VideoTour />
      <About />
      <AquaLifestyle />
      <ClubhouseAmenityExplorer />
      <InteractiveMasterplan />
      <Masterplan />
      <Residences />
      <FloorRiseViewSelector />
      <BalconyVisualizer />
      <Amenities />
      <Specifications />
      <InteriorStyleCustomizer />
      <InvestmentCalculator />
      <UnitPriceEstimator />
      <PaymentPlanSchedule />
      <CompetitorBenchmarkMatrix />
      <RentalYieldMatrix />
      <Quiz />
      <Gallery />
      <VirtualTour />
      <MetroConnectivityScorecard />
      <NeighborhoodSocialMatrix />
      <Location />
      <ConstructionProgress />
      <FAQ />
      <ResidentStoriesMatrix />
      <MicroMarketSEOBar />
      <Footer />
    </>
  );
}
