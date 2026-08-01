import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageContent from "@/components/layout/PageContent";

import EcosystemMap from "@/components/sections/EcosystemMap";

export const metadata: Metadata = {
  title: "Godrej Properties Hinjewadi Pune | Godrej Park World & The Aqua Retreat",
  description: "The ultimate guide to Godrej Properties Hinjewadi Pune. Explore Godrej Park World, The Aqua Retreat, The Gale, and more premium luxury townships in Hinjewadi Phase 1.",
  keywords: ["Godrej Properties Hinjewadi Pune", "Godrej Park World Hinjewadi", "The Aqua Retreat Hinjewadi", "Godrej Hinjewadi Township", "Buy Godrej flats in Pune"],
  alternates: {
    canonical: "https://godrejaquaretreat.godrejparkworld.com/godrej-properties-hinjewadi-pune",
  }
};

export default function PillarPage() {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Godrej Properties Hinjewadi Pune",
      "description": "Comprehensive guide to all Godrej Properties residential clusters within the Hinjewadi IT corridor, focusing on Godrej Park World.",
      "url": "https://godrejaquaretreat.godrejparkworld.com/godrej-properties-hinjewadi-pune"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why is Godrej Park World better than Lodha or VTP in Hinjewadi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Godrej Park World is an integrated, self-sustaining township, not just a standalone building. The Aqua Retreat cluster specifically offers a massive 50,000 sq.ft clubhouse and sprawling central greens that standalone projects simply cannot mathematically match in terms of density and luxury."
          }
        },
        {
          "@type": "Question",
          "name": "Which Godrej Properties project is closest to Infosys and Wipro in Hinjewadi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Godrej Park World is strategically located in Hinjewadi Phase 1, offering zero-bridge traffic and direct connectivity to massive IT hubs like the Rajiv Gandhi Infotech Park, Infosys, and Wipro."
          }
        },
        {
          "@type": "Question",
          "name": "What is the price of The Aqua Retreat at Godrej Park World?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Aqua Retreat offers premium 2 & 3 BHK configurations. Pricing is highly competitive considering the 5-star resort amenities. Download the brochure on our website for the exact cost sheet."
          }
        }
      ]
    }
  ];

  return (
    <main className="flex min-h-screen flex-col bg-[#FAFAFA] selection:bg-emerald-aqua/30 selection:text-white">
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      
      {/* Invisible H1 for Google Crawlers to anchor the absolute keyword intent */}
      <h1 className="sr-only">Godrej Properties Hinjewadi Pune - Godrej Park World & The Aqua Retreat</h1>
      
      {/* Subtle visible text to ensure Google doesn't flag it as cloaking */}
      <div className="bg-[#0B0C10] text-gray-400 text-center py-2 text-[10px] font-sans tracking-[0.2em] uppercase border-b border-white/5 relative z-50">
        Discover the complete Godrej Properties Hinjewadi Pune Ecosystem
      </div>

      <EcosystemMap />
      <PageContent />
    </main>
  );
}
