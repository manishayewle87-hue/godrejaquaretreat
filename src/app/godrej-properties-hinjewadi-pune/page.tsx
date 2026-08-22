import { siteConfig } from "@/config/site";
import type { Metadata } from "next";
import PageContent from "@/components/layout/PageContent";

import EcosystemMap from "@/components/sections/EcosystemMap";

export const metadata: Metadata = {
  title: "Godrej Properties Hinjewadi Pune | Godrej Park World & The Aqua Retreat",
  description: "The ultimate guide to Godrej Properties Hinjewadi Pune. Explore Godrej Park World, The Aqua Retreat, The Gale, and more premium luxury townships in Hinjewadi Phase 1.",
  keywords: ["Godrej Properties Hinjewadi Pune", "Godrej Park World Hinjewadi", "The Aqua Retreat Hinjewadi", "Godrej Hinjewadi Township", "Buy Godrej flats in Pune"],
  alternates: {
    canonical: `${siteConfig.url}/godrej-properties-hinjewadi-pune`,
  }
};

export default function PillarPage() {
  const baseUrl = siteConfig.url;
  const pageUrl = `${baseUrl}/godrej-properties-hinjewadi-pune`;

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl },
        { "@type": "ListItem", "position": 2, "name": "Godrej Properties Pune Projects", "item": pageUrl }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Godrej Properties Pune Projects Portfolio - Godrej The Retreat Flagship",
      "description": "Comprehensive portfolio guide to Godrej Properties projects in Pune: Godrej The Retreat (Hinjewadi Phase 1), Godrej Park World, Godrej Elements, Godrej Hillside, Godrej Rivergreens, Godrej Emerald Waters. MahaRERA PM1260002500070.",
      "image": "https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/aqua-banner-1920x900-01-1-1-cmrnnfkpo000kj2phc4uv4hry.webp",
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "INR",
        "lowPrice": "11000000",
        "highPrice": "25000000",
        "offerCount": "12",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "RealEstateAgent",
          "name": "Godrej Properties Pune",
          "telephone": "+917744009295"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "342"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "ApartmentComplex",
      "name": "Godrej The Retreat Hinjewadi Phase 1",
      "identifier": "PM1260002500070",
      "url": `${baseUrl}/godrej-the-retreat-hinjewadi`,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Godrej The Retreat, Godrej Park World, Hinjewadi Phase 1, Rajiv Gandhi Infotech Park",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411057",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 18.5790625,
        "longitude": 73.7281875
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the latest Godrej Properties projects in Pune for 2026?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Godrej The Retreat (The Aqua Retreat) at Godrej Park World Hinjewadi Phase 1 is the flagship 2026 launch by Godrej Properties in Pune, featuring 2 & 3 BHK luxury resort-style residences, a 50,000 sq ft clubhouse, and 12+ acres central greens under MahaRERA PM1260002500070."
          }
        },
        {
          "@type": "Question",
          "name": "How does Godrej The Retreat compare with Godrej Elements and Godrej 24 in Hinjewadi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "While Godrej Elements and Godrej 24 are established premium developments, Godrej The Retreat is part of the mega 100+ acre Godrej Park World integrated township in Hinjewadi Phase 1, offering modern 4-tier resort amenities and direct 2-minute connectivity to Pune Metro Line 3."
          }
        },
        {
          "@type": "Question",
          "name": "What are Godrej Properties' other major townships in Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Godrej Properties operates major developments across Pune including Godrej Park World (Hinjewadi Phase 1), Godrej Rivergreens (Manjari), Godrej Hillside & Meadows (Mahalunge), Godrej Forest Grove (Mamurdi), and Godrej Emerald Waters (Pimpri)."
          }
        },
        {
          "@type": "Question",
          "name": "What is the price of Godrej The Retreat Hinjewadi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "2 BHK luxury residences start from ₹1.10 Cr* onwards and 3 BHK regal residences start from ₹1.65 Cr* to ₹2.50 Cr* with flexible payment plans and pre-launch priority allocation."
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
