import { siteConfig } from "@/config/site";
import type { Metadata } from "next";
import PageContent from "@/components/layout/PageContent";

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
        { "@type": "ListItem", "position": 2, "name": "Amenities", "item": `${baseUrl}/amenities/50000-sq-ft-clubhouse-apartments-pune` },
        { "@type": "ListItem", "position": 3, "name": amenityName, "item": pageUrl }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "name": `${amenityName} - Godrej Park World`,
      "description": `World-class lifestyle feature (${amenityName}) at Godrej Park World Hinjewadi by Godrej Properties Pune.`,
      "url": pageUrl,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Godrej Park World, Hinjewadi Phase 1",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411057",
        "addressCountry": "IN"
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
        <h1 className="sr-only">Experience {amenityName} at Godrej Park World Hinjewadi</h1>
        
        <div className="bg-[#0B0C10] text-gray-400 text-center py-2 text-[10px] font-sans tracking-[0.2em] uppercase border-b border-white/5 relative z-50">
          Godrej Properties Pune offers exclusive {amenityName}
        </div>

        <PageContent />
      </main>
    </>
  );
}
