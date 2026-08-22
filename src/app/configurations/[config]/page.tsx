import { siteConfig } from "@/config/site";
import type { Metadata } from "next";
import PageContent from "@/components/layout/PageContent";
import ProgrammaticContextHero from "@/components/layout/ProgrammaticContextHero";

export const CONFIGURATIONS = [
  // Core Godrej The Retreat Slugs
  "godrej-the-retreat-2-bhk-flats-hinjewadi", "godrej-the-retreat-3-bhk-luxury-apartments",
  "godrej-the-retreat-floor-plans-pune", "godrej-the-retreat-price-list",
  "godrej-the-retreat-sample-flat-hinjewadi",

  // Core Godrej Configurations
  "2-bhk-flats-in-hinjewadi", "3-bhk-flats-in-hinjewadi", "3-bhk-luxury-apartments-in-pune",
  "2-bhk-flats-in-mahalunge", "3-bhk-flats-in-mahalunge",
  "4-bhk-apartments-in-baner", "4-bhk-flats-in-mahalunge", "4-bhk-luxury-in-hinjewadi",
  "5-bhk-villas-near-hinjewadi", "5-bhk-pune-west",

  // Specialty & Premium Layouts
  "duplex-apartments-in-hinjewadi", "duplex-apartments-in-mahalunge", "duplex-pune-west",
  "skyduplex-in-pune", "skyduplex-hinjewadi", "skyduplex-mahalunge",
  "simplex-homes-pune", "simplex-apartments-hinjewadi", "simplex-mahalunge",
  
  // IT Park Targeted
  "2-bhk-near-infosys-pune", "3-bhk-near-wipro-pune", "2-bhk-near-tcs-hinjewadi", "3-bhk-near-tech-mahindra-hinjewadi",
  "luxury-homes-hinjewadi-phase-1", "premium-apartments-pune-west", "resort-style-apartments-pune",
  
  // High Intent Catch-all
  "premium-villas-near-hinjewadi", "residential-townships-in-pune-west",
  "godrej-2bhk-pune", "godrej-3bhk-pune", "godrej-4bhk-pune",
  "new-launch-2bhk-hinjewadi", "new-launch-3bhk-hinjewadi", "new-launch-4bhk-mahalunge"
];

const formatConfigName = (slug: string) => {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export function generateStaticParams() {
  return CONFIGURATIONS.map((config) => ({
    config: config,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ config: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const configName = formatConfigName(resolvedParams.config);
  
  return {
    title: `${configName} | Godrej The Retreat Hinjewadi Phase 1`,
    description: `Searching for ${configName}? Discover Godrej The Retreat at Godrej Park World, Hinjewadi Phase 1 offering premium 2 & 3 BHK resort-style residences with 50,000 sq ft clubhouse. MahaRERA PM1260002500070.`,
    keywords: [
      configName, `Buy ${configName}`, `${configName} Price`, 
      `Godrej Properties ${configName}`, `Godrej The Retreat ${configName}`,
      "Godrej The Retreat Hinjewadi", "Pune Real Estate"
    ],
    alternates: {
      canonical: `${siteConfig.url}/configurations/${resolvedParams.config}`,
    },
    openGraph: {
      title: `${configName} | Godrej The Retreat Hinjewadi`,
      description: `Explore premium ${configName} at Godrej The Retreat, Hinjewadi Phase 1.`,
      url: `${siteConfig.url}/configurations/${resolvedParams.config}`,
      images: [
        {
          url: `${siteConfig.url}/api/og?title=${encodeURIComponent(configName)}&subtitle=${encodeURIComponent('Godrej The Retreat Hinjewadi')}`,
          width: 1200,
          height: 630,
          alt: `${configName} Layout`,
        }
      ],
    },
  };
}

export default async function ConfigurationSEOPage({ params }: { params: Promise<{ config: string }> }) {
  const resolvedParams = await params;
  const configName = formatConfigName(resolvedParams.config);
  const baseUrl = siteConfig.url;
  const pageUrl = `${baseUrl}/configurations/${resolvedParams.config}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl },
        { "@type": "ListItem", "position": 2, "name": "Godrej The Retreat Hinjewadi", "item": `${baseUrl}/godrej-the-retreat-hinjewadi` },
        { "@type": "ListItem", "position": 3, "name": configName, "item": pageUrl }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": `${configName} - Godrej The Retreat Hinjewadi`,
      "description": `Premium ${configName} layout at Godrej The Retreat, Godrej Park World Hinjewadi Phase 1 by Godrej Properties Pune. MahaRERA: PM1260002500070.`,
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
          "name": `What is the price and layout for ${configName}?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `At Godrej The Retreat Hinjewadi Phase 1, luxury residences range from ₹1.10 Crore* (2 BHK) to ₹1.65 Crore* - ₹2.50 Crore* (3 BHK) with resort views and 50,000 sq ft clubhouse access.`
          }
        },
        {
          "@type": "Question",
          "name": "Is Godrej The Retreat MahaRERA registered?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Godrej The Retreat is registered under MahaRERA No. PM1260002500070."
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
          title={configName}
          category="Residences & Layouts"
          categoryLink="/godrej-park-world-pune-luxury-residences"
          description={`Discover luxurious architectural plans, carpet area breakdowns, and pricing for ${configName} at Godrej The Retreat, Hinjewadi Phase 1, Pune. MahaRERA PM1260002500070.`}
        />
        <PageContent />
      </main>
    </>
  );
}
