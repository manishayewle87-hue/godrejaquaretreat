import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageContent from "@/components/layout/PageContent";

export const metadata: Metadata = {
  title: "Godrej Properties Hinjewadi Pune | Godrej Park World & The Aqua Retreat",
  description: "The ultimate guide to Godrej Properties Hinjewadi Pune. Explore Godrej Park World, The Aqua Retreat, The Gale, and more premium luxury townships in Hinjewadi Phase 1.",
  keywords: ["Godrej Properties Hinjewadi Pune", "Godrej Park World Hinjewadi", "The Aqua Retreat Hinjewadi", "Godrej Hinjewadi Township", "Buy Godrej flats in Pune"],
  alternates: {
    canonical: "https://godrejaquaretreat.godrejparkworld.com/godrej-properties-hinjewadi-pune",
  }
};

export default function PillarPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Godrej Properties Hinjewadi Pune",
    "description": "Comprehensive guide to all Godrej Properties residential clusters within the Hinjewadi IT corridor, focusing on Godrej Park World.",
    "url": "https://godrejaquaretreat.godrejparkworld.com/godrej-properties-hinjewadi-pune"
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#FAFAFA] selection:bg-emerald-aqua/30 selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      {/* Invisible H1 for Google Crawlers to anchor the absolute keyword intent */}
      <h1 className="sr-only">Godrej Properties Hinjewadi Pune - Godrej Park World & The Aqua Retreat</h1>
      
      {/* Subtle visible text to ensure Google doesn't flag it as cloaking */}
      <div className="bg-[#0B0C10] text-gray-400 text-center py-2 text-[10px] font-sans tracking-[0.2em] uppercase border-b border-white/5 relative z-50">
        Discover the complete Godrej Properties Hinjewadi Pune Ecosystem
      </div>

      <PageContent />
    </main>
  );
}
