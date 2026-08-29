import { siteConfig } from "@/config/site";
import type { Metadata } from "next";
import PageContent from "@/components/layout/PageContent";

export const metadata: Metadata = {
  title: "Godrej Park World Hinjewadi Phase 1 Pune | 100+ Acre Mega Township",
  description: "Official Portal: Godrej Park World Hinjewadi Phase 1 by Godrej Properties Pune. Explore 100+ acre integrated township, 12+ acres central greens, 50,000 sq.ft clubhouse, masterplan & 2/3 BHK luxury residences. MahaRERA: PM1260002500070.",
  keywords: [
    "Godrej Park World", "Godrej Park World Hinjewadi", "Godrej Park World Pune",
    "Godrej Park World Hinjewadi Phase 1", "Godrej Park World Township", "Godrej Park World Price",
    "Godrej Park World Floor Plan", "Godrej Park World Masterplan", "Godrej Park World 2 BHK",
    "Godrej Park World 3 BHK", "Godrej The Retreat Park World", "The Aqua Retreat Park World",
    "Godrej Park World Brochure PDF", "Godrej Park World Construction Status", "Godrej Park World Possession Date",
    "Godrej Park World MahaRERA PM1260002500070", "Godrej Park World Sales Office", "Godrej Park World Contact Number",
    "Godrej Park World Sample Flat Video", "Godrej Park World Reviews", "Godrej Park World Location",
    "Godrej Park World Rajiv Gandhi Infotech Park", "Godrej Park World Central Greens", "Godrej Park World 50000 sq ft Clubhouse",
    "Flats in Godrej Park World", "Apartments in Godrej Park World", "Buy Flat in Godrej Park World Hinjewadi",
    "Godrej Park World vs Kolte Patil Life Republic", "Godrej Park World vs Shapoorji Joyville", "Godrej Park World Pre Launch Offers"
  ],
  alternates: {
    canonical: `${siteConfig.url}/godrej-park-world-hinjewadi`,
  }
};

export default function GodrejParkWorldFlagshipPage() {
  const baseUrl = siteConfig.url;
  const pageUrl = `${baseUrl}/godrej-park-world-hinjewadi`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl },
        { "@type": "ListItem", "position": 2, "name": "Godrej Park World Hinjewadi", "item": pageUrl }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Godrej Park World Hinjewadi Phase 1 Pune",
      "description": "100+ Acre Integrated Township by Godrej Properties in Hinjewadi Phase 1, Pune. Featuring The Retreat & The Aqua Retreat luxury residences, 50,000 sq ft clubhouse, and 12+ acres central greens. MahaRERA: PM1260002500070.",
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
        "ratingCount": "342"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "ApartmentComplex",
      "name": "Godrej Park World Hinjewadi",
      "identifier": "PM1260002500070",
      "url": pageUrl,
      "hasMap": "https://www.google.com/maps?q=godrej+the+aqua+retreat+hinjewadi",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Godrej Park World, Hinjewadi Phase 1, Rajiv Gandhi Infotech Park",
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
      "@type": "FloorPlan",
      "@id": `${pageUrl}/#floorplan-2bhk`,
      "name": "Godrej Park World 2 BHK Luxury Residence",
      "description": "Premium 2 BHK resort residence with private sundeck and designer fittings.",
      "numberOfRooms": 2,
      "numberOfBedrooms": 2,
      "numberOfBathroomsTotal": 2,
      "floorSize": {
        "@type": "QuantitativeValue",
        "value": 780,
        "unitCode": "FTK"
      },
      "offers": {
        "@type": "Offer",
        "price": "11000000",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FloorPlan",
      "@id": `${pageUrl}/#floorplan-3bhk`,
      "name": "Godrej Park World 3 BHK Regal Residence",
      "description": "Expansive 3 BHK residence with master bedroom suite and Olympic lagoon pool views.",
      "numberOfRooms": 3,
      "numberOfBedrooms": 3,
      "numberOfBathroomsTotal": 3,
      "floorSize": {
        "@type": "QuantitativeValue",
        "value": 1180,
        "unitCode": "FTK"
      },
      "offers": {
        "@type": "Offer",
        "price": "16500000",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "@id": `${pageUrl}/#video-tour`,
      "name": "Godrej Park World Hinjewadi 100+ Acre Township Virtual Tour",
      "description": "Take a 3D cinematic tour of Godrej Park World Hinjewadi Phase 1, the 50,000 sq ft clubhouse, 12+ acres central greens, and luxury sample apartments.",
      "thumbnailUrl": "https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/aqua-banner-1920x900-01-1-1-cmrnnfkpo000kj2phc4uv4hry.webp",
      "uploadDate": "2026-08-20T10:00:00+05:30",
      "duration": "PT3M45S",
      "contentUrl": `${pageUrl}/#tour`,
      "embedUrl": `${pageUrl}/#tour`,
      "publisher": {
        "@type": "Organization",
        "name": "Godrej Properties Pune",
        "logo": {
          "@type": "ImageObject",
          "url": `${siteConfig.url}/favicon.ico`
        }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Godrej Park World Hinjewadi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Godrej Park World is a landmark 100+ acre integrated township development by Godrej Properties in Hinjewadi Phase 1, Pune. It features 12+ acres of central greens, multi-tier lifestyle clubhouses, high-street retail, and luxury residential clusters including Godrej The Retreat (The Aqua Retreat) under MahaRERA PM1260002500070."
          }
        },
        {
          "@type": "Question",
          "name": "What is the starting price of apartments at Godrej Park World Hinjewadi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "2 BHK luxury residences start from ₹1.10 Crore* onwards, and 3 BHK regal residences start from ₹1.65 Crore* to ₹2.50 Crore* with flexible construction-linked payment schemes."
          }
        },
        {
          "@type": "Question",
          "name": "Where is Godrej Park World located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Godrej Park World is located in Hinjewadi Phase 1 inside Rajiv Gandhi Infotech Park, offering 0-minute commute to Infosys, Wipro, and TCS, and 2 minutes to the upcoming Pune Metro Line 3 station."
          }
        }
      ]
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex min-h-screen flex-col bg-[#FAFAFA] selection:bg-emerald-aqua/30 selection:text-white">
        <h1 className="sr-only">Godrej Park World Hinjewadi Phase 1 Pune - 100+ Acre Township & Luxury Residences</h1>
        
        <div className="bg-[#0B0C10] text-gray-300 text-center py-2.5 px-4 text-[11px] font-sans tracking-[0.2em] uppercase border-b border-white/10 relative z-50 flex items-center justify-center gap-3">
          <span className="text-emerald-aqua font-bold">Godrej Park World</span>
          <span className="text-gray-500">•</span>
          <span>100+ Acre Integrated Township</span>
          <span className="text-gray-500">•</span>
          <span className="text-emerald-aqua">MahaRERA PM1260002500070</span>
        </div>

        <PageContent />
      </main>
    </>
  );
}
