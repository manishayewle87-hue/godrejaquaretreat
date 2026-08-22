import { siteConfig } from "@/config/site";
import type { Metadata } from "next";
import PageContent from "@/components/layout/PageContent";
import ProgrammaticContextHero from "@/components/layout/ProgrammaticContextHero";

export const AMENITIES = [
  "50000-sq-ft-clubhouse-apartments-pune",
  "resort-style-living-hinjewadi",
  "olympic-size-swimming-pool-flats-pune",
  "smart-home-automation-apartments-hinjewadi",
  "nature-integrated-townships-pune-west",
  "luxury-amenities-flats-in-pune",
  "apartments-with-private-cabanas-pune",
  "infinity-pool-apartments-hinjewadi",
  "wellness-centric-homes-pune",
  "townships-with-high-street-retail-pune"
];

const formatAmenityName = (slug: string) => {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export function generateStaticParams() {
  return AMENITIES.map((amenity) => ({
    amenity: amenity,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ amenity: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const amenityName = formatAmenityName(resolvedParams.amenity);
  
  return {
    title: `Buy ${amenityName} | Godrej Park World Hinjewadi Phase 1`,
    description: `Experience ${amenityName} at Godrej Park World, Hinjewadi. Discover The Aqua Retreat's ultra-luxury lifestyle designed by Godrej Properties Pune.`,
    keywords: [
      amenityName, `${amenityName} Godrej Properties`, 
      `Buy flats with ${amenityName}`, `Godrej Park World ${amenityName}`, 
      "The Aqua Retreat Amenities", "Pune Luxury Real Estate"
    ],
    alternates: {
      canonical: `${siteConfig.url}/amenities/${resolvedParams.amenity}`,
    },
    openGraph: {
      title: `${amenityName} | Godrej Park World`,
      description: `Explore premium ${amenityName} at The Aqua Retreat, Hinjewadi.`,
      url: `${siteConfig.url}/amenities/${resolvedParams.amenity}`,
      images: [
        {
          url: `${siteConfig.url}/api/og?title=${encodeURIComponent(amenityName)}&subtitle=${encodeURIComponent('Godrej Park World Amenities')}`,
          width: 1200,
          height: 630,
          alt: amenityName,
        }
      ],
    },
  };
}

export default async function AmenitySEOPage({ params }: { params: Promise<{ amenity: string }> }) {
  const resolvedParams = await params;
  const amenityName = formatAmenityName(resolvedParams.amenity);
  const baseUrl = siteConfig.url;
  const pageUrl = `${baseUrl}/amenities/${resolvedParams.amenity}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl },
        { "@type": "ListItem", "position": 2, "name": "Godrej The Retreat Hinjewadi", "item": `${baseUrl}/godrej-the-retreat-hinjewadi` },
        { "@type": "ListItem", "position": 3, "name": amenityName, "item": pageUrl }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": `${amenityName} - Godrej The Retreat Hinjewadi`,
      "description": `World-class lifestyle feature (${amenityName}) at Godrej The Retreat, Godrej Park World Hinjewadi Phase 1 by Godrej Properties Pune. MahaRERA PM1260002500070.`,
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
      "name": "Godrej The Retreat Hinjewadi",
      "identifier": "PM1260002500070",
      "url": pageUrl,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Godrej The Retreat, Godrej Park World, Hinjewadi Phase 1",
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
          "name": `What amenities are included with ${amenityName} at Godrej The Retreat?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `Residents enjoy a 50,000 sq ft 4-tier clubhouse, 50m Olympic lagoon pool, 12+ acres central greens, sports courts, and hydrotherapy spa at Godrej The Retreat Hinjewadi Phase 1.`
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
        <ProgrammaticContextHero
          title={amenityName}
          category="Resort Amenities"
          categoryLink="/godrej-park-world-pune-premium-amenities"
          description={`Experience world-class luxury living with ${amenityName} at Godrej The Retreat, Godrej Park World Hinjewadi Phase 1, Pune. MahaRERA PM1260002500070.`}
        />
        <PageContent />
      </main>
    </>
  );
}
