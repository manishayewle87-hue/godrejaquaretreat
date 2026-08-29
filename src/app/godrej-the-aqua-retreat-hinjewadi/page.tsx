import { siteConfig } from "@/config/site";
import type { Metadata } from "next";
import PageContent from "@/components/layout/PageContent";

export const metadata: Metadata = {
  title: "Godrej The Aqua Retreat Hinjewadi Phase 1 Pune | Luxury Resort Apartments",
  description: "Official Portal for Godrej The Aqua Retreat (Godrej The Retreat) at Godrej Park World Hinjewadi Phase 1, Pune by Godrej Properties. Explore luxury 2 & 3 BHK residences, 50,000 sq ft aqua clubhouse, Olympic lagoon pool, floor plans & price list. MahaRERA: PM1260002500070.",
  keywords: [
    "Godrej The Aqua Retreat Hinjewadi",
    "The Aqua Retreat Hinjewadi",
    "The Aqua Retreat Hinjewadi Phase 1",
    "Godrej Aqua Retreat Hinjewadi",
    "Godrej Aqua Retreat Pune",
    "The Aqua Retreat Godrej Park World",
    "The Aqua Retreat Price",
    "The Aqua Retreat Floor Plan",
    "The Aqua Retreat Brochure",
    "The Aqua Retreat 2 BHK",
    "The Aqua Retreat 3 BHK",
    "Godrej The Retreat Hinjewadi",
    "Godrej Park World Hinjewadi"
  ],
  alternates: {
    canonical: `${siteConfig.url}/godrej-the-aqua-retreat-hinjewadi`,
  },
  openGraph: {
    title: "Godrej The Aqua Retreat Hinjewadi | Luxury 2 & 3 BHK Resort Residences",
    description: "Discover Godrej The Aqua Retreat at Godrej Park World Hinjewadi Phase 1. 50,000 sq ft aqua clubhouse, 50m Olympic lagoon pool & high ROI investment.",
    url: `${siteConfig.url}/godrej-the-aqua-retreat-hinjewadi`,
    images: [
      {
        url: "https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/aqua-banner-1920x900-01-1-1-cmrnnfkpo000kj2phc4uv4hry.webp",
        width: 1920,
        height: 900,
        alt: "Godrej The Aqua Retreat Hinjewadi Phase 1 Pune",
      }
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Godrej The Aqua Retreat Hinjewadi Phase 1 | Godrej Properties",
    description: "Official portal for Godrej The Aqua Retreat Hinjewadi. Luxury 2 & 3 BHK apartments with 50,000 sq.ft aqua clubhouse.",
    images: ["https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/aqua-banner-1920x900-01-1-1-cmrnnfkpo000kj2phc4uv4hry.webp"],
  },
};

export default function GodrejTheAquaRetreatHinjewadiPage() {
  const pageUrl = `${siteConfig.url}/godrej-the-aqua-retreat-hinjewadi`;

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
          "name": "Godrej The Aqua Retreat Hinjewadi",
          "item": pageUrl
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Godrej The Aqua Retreat Hinjewadi Phase 1 Pune",
      "alternateName": "The Aqua Retreat at Godrej Park World",
      "description": "Ultra-luxury 2 & 3 BHK resort-style apartments at Godrej The Aqua Retreat, situated in Godrej Park World Hinjewadi Phase 1, Pune. Features a 50,000 sq.ft aqua clubhouse, 50m Olympic lagoon pool, and 12+ acres central greens. MahaRERA: PM1260002500070.",
      "sku": "GODREJ-AQUA-RETREAT-HINJEWADI-2026",
      "mpn": "PM1260002500070",
      "image": [
        "https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/aqua-banner-1920x900-01-1-1-cmrnnfkpo000kj2phc4uv4hry.webp",
        "https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/overview-1740x810-cmrnngdyo000lj2phcjaf0u8l.webp"
      ],
      "brand": {
        "@type": "Brand",
        "name": "Godrej Properties Pune"
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "INR",
        "lowPrice": "11000000",
        "highPrice": "25000000",
        "offerCount": "12",
        "availability": "https://schema.org/InStock",
        "priceValidUntil": "2027-12-31",
        "seller": {
          "@type": "RealEstateAgent",
          "name": "Godrej Properties Pune",
          "telephone": "+917744009295"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "342",
        "reviewCount": "342"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "ApartmentComplex",
      "name": "Godrej The Aqua Retreat",
      "alternateName": [
        "Godrej The Aqua Retreat Hinjewadi",
        "The Aqua Retreat at Godrej Park World",
        "Godrej Aqua Retreat Hinjewadi Phase 1"
      ],
      "identifier": "PM1260002500070",
      "url": pageUrl,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "The Aqua Retreat, Godrej Park World, Hinjewadi Phase 1, Rajiv Gandhi Infotech Park",
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
      "hasMap": "https://www.google.com/maps?q=godrej+the+aqua+retreat+hinjewadi",
      "telephone": "+917744009295",
      "containedInPlace": {
        "@type": "Place",
        "name": "Godrej Park World Township",
        "description": "100+ Acre Integrated Master Township with 12+ Acres Central Greens"
      },
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "50,000 Sq.Ft 4-Tier Aqua Clubhouse", "value": "true" },
        { "@type": "LocationFeatureSpecification", "name": "50m Olympic Length Infinity Lagoon Pool", "value": "true" },
        { "@type": "LocationFeatureSpecification", "name": "12+ Acres Contiguous Central Greens", "value": "true" },
        { "@type": "LocationFeatureSpecification", "name": "Sunken Poolside Cabanas & Aqua Lounge", "value": "true" },
        { "@type": "LocationFeatureSpecification", "name": "100% Vehicle-Free Eco Podium", "value": "true" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FloorPlan",
      "@id": `${pageUrl}/#floorplan-2bhk`,
      "name": "2 BHK Luxury Resort Residence",
      "description": "2 BHK Luxury Residence with private sun deck overlooking Olympic lagoon pool.",
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
      "name": "3 BHK Regal Resort Residence",
      "description": "3 BHK Regal Residence with expansive master suite, double-height sundeck, and panoramic central green views.",
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
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Godrej The Aqua Retreat Hinjewadi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Godrej The Aqua Retreat (also known as Godrej The Retreat) is the flagship ultra-luxury residential resort cluster situated inside the 100+ acre Godrej Park World township in Hinjewadi Phase 1, Pune. It features luxury 2 & 3 BHK homes, a 50,000 sq ft aqua clubhouse, and a 50m Olympic lagoon pool under MahaRERA PM1260002500070."
          }
        },
        {
          "@type": "Question",
          "name": "What is the starting price for 2 BHK and 3 BHK at The Aqua Retreat Hinjewadi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "2 BHK luxury residences start from ₹1.10 Crore* onwards (750 - 820 sq.ft carpet), and 3 BHK regal residences start from ₹1.65 Crore* to ₹2.50 Crore* (1060 - 1250 sq.ft carpet)."
          }
        },
        {
          "@type": "Question",
          "name": "What is the MahaRERA number for Godrej The Aqua Retreat Hinjewadi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The MahaRERA registration number for Godrej The Aqua Retreat is PM1260002500070, verified on the official portal maharera.mahaonline.gov.in."
          }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "@id": `${pageUrl}/#video-tour`,
      "name": "Godrej The Aqua Retreat Hinjewadi - Cinematic Virtual Tour & Masterplan",
      "description": "Official virtual site tour of Godrej The Aqua Retreat at Godrej Park World Hinjewadi Phase 1, Pune. Explore the 50,000 sq ft luxury clubhouse, 50m Olympic lagoon pool, and furnished 2 & 3 BHK sample flats.",
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
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex min-h-screen flex-col bg-[#FAFAFA] selection:bg-emerald-aqua/30 selection:text-white">
        <h1 className="sr-only">Godrej The Aqua Retreat Hinjewadi Phase 1 Pune - Luxury Resort Residences</h1>
        
        <div className="bg-[#0B0C10] text-gray-300 text-center py-2.5 px-4 text-[11px] font-sans tracking-[0.2em] uppercase border-b border-white/10 relative z-50 flex items-center justify-center gap-3">
          <span className="text-emerald-aqua font-bold">The Aqua Retreat</span>
          <span className="text-gray-500">•</span>
          <span>Godrej Park World Hinjewadi Phase 1</span>
          <span className="text-gray-500">•</span>
          <span className="text-emerald-aqua font-bold">MahaRERA PM1260002500070</span>
        </div>

        <PageContent />
      </main>
    </>
  );
}
