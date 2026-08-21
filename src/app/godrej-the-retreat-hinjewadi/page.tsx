import { siteConfig } from "@/config/site";
import type { Metadata } from "next";
import PageContent from "@/components/layout/PageContent";

export const metadata: Metadata = {
  title: "Godrej The Retreat Hinjewadi | Price, Floor Plans, RERA & Brochure 2026",
  description: "Official Godrej The Retreat Hinjewadi Phase 1 Portal. Explore 2 & 3 BHK luxury resort apartments starting ₹1.10 Cr* with 50,000 sq.ft clubhouse, 12+ acres greens & MahaRERA PM1260002500070.",
  keywords: [
    "Godrej The Retreat Hinjewadi",
    "Godrej The Retreat",
    "Godrej The Retreat Pune",
    "Godrej The Retreat Hinjewadi Phase 1",
    "Godrej The Retreat Price",
    "Godrej The Retreat Floor Plan",
    "Godrej The Retreat Brochure",
    "Godrej The Retreat Reviews",
    "Godrej The Retreat Possession Date",
    "Godrej The Retreat MahaRERA",
    "Godrej The Retreat Contact Number",
    "Godrej The Retreat Sample Flat",
    "Godrej The Retreat 2 BHK",
    "Godrej The Retreat 3 BHK",
    "The Aqua Retreat Hinjewadi",
    "Godrej Park World Hinjewadi"
  ],
  alternates: {
    canonical: `${siteConfig.url}/godrej-the-retreat-hinjewadi`,
  },
  openGraph: {
    title: "Godrej The Retreat Hinjewadi | Luxury 2 & 3 BHK Resort Residences",
    description: "Discover Godrej The Retreat at Godrej Park World Hinjewadi Phase 1. 50,000 sq ft clubhouse, 50m Olympic lagoon pool & high ROI investment.",
    url: `${siteConfig.url}/godrej-the-retreat-hinjewadi`,
    images: [
      {
        url: "https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/aqua-banner-1920x900-01-1-1-cmrnnfkpo000kj2phc4uv4hry.webp",
        width: 1920,
        height: 900,
        alt: "Godrej The Retreat Hinjewadi Phase 1 Pune",
      }
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Godrej The Retreat Hinjewadi Phase 1 | Godrej Properties",
    description: "Official portal for Godrej The Retreat Hinjewadi. Luxury 2 & 3 BHK apartments with 50,000 sq.ft aqua clubhouse.",
    images: ["https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/aqua-banner-1920x900-01-1-1-cmrnnfkpo000kj2phc4uv4hry.webp"],
  },
};

export default function GodrejTheRetreatHinjewadiPage() {
  const pageUrl = `${siteConfig.url}/godrej-the-retreat-hinjewadi`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": siteConfig.url
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Godrej The Retreat Hinjewadi",
          "item": pageUrl
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "RealEstateListing",
      "name": "Godrej The Retreat Hinjewadi Phase 1",
      "description": "Ultra-luxury 2 & 3 BHK resort-style apartments at Godrej The Retreat, Godrej Park World Hinjewadi Phase 1, Pune by Godrej Properties.",
      "url": pageUrl,
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
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "ApartmentComplex",
      "name": "Godrej The Retreat Hinjewadi",
      "alternateName": "Godrej The Retreat",
      "identifier": "PM1260002500070",
      "url": pageUrl,
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
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "342"
      }
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex min-h-screen flex-col bg-[#FAFAFA] selection:bg-emerald-aqua/30 selection:text-white">
        {/* Semantic H1 for Google Crawlers */}
        <h1 className="sr-only">
          Godrej The Retreat Hinjewadi - Luxury 2 & 3 BHK Resort Apartments Hinjewadi Phase 1 Pune
        </h1>
        
        {/* Visible Context Banner */}
        <div className="bg-[#0B0C10] text-gray-300 text-center py-2.5 px-4 text-[11px] font-sans tracking-[0.2em] uppercase border-b border-white/10 relative z-50 flex items-center justify-center gap-3">
          <span className="text-emerald-aqua font-bold">Godrej The Retreat Hinjewadi</span>
          <span className="text-gray-500">•</span>
          <span>MahaRERA: PM1260002500070</span>
          <span className="text-gray-500">•</span>
          <span className="text-emerald-aqua font-semibold">2 & 3 BHK Resort Residences</span>
        </div>

        <PageContent />
      </main>
    </>
  );
}
