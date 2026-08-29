import { siteConfig } from "@/config/site";
import type { Metadata } from "next";
import PageContent from "@/components/layout/PageContent";
import ProgrammaticContextHero from "@/components/layout/ProgrammaticContextHero";

// Ultra-comprehensive list of Pune micro-markets and Godrej Projects
export const LOCATIONS = [
  // Phase 5: The IT-Park Capture Matrix (Hyper-Local Expansion)
  "near-infosys-hinjewadi-phase-1", "near-wipro-hinjewadi-phase-1", "near-tcs-hinjewadi-phase-3",
  "embassy-techzone-hinjewadi", "blueridge-it-park-hinjewadi", "quadron-business-park-hinjewadi",
  "near-cognizant-hinjewadi", "near-capgemini-hinjewadi", "international-tech-park-pune",

  // Hyper-Local Hinjewadi Hubs (Absolute Focus)
  "hinjewadi", "hinjewadi-phase-1", "hinjewadi-phase-2", "hinjewadi-phase-3", 
  "hinjewadi-rajiv-gandhi-infotech-park", "hinjewadi-wipro-circle", "hinjewadi-infosys-circle", 
  "marunji-hinjewadi", "maan-hinjewadi", "hinjewadi-phase-1-it-park", "bhumkar-chowk-hinjewadi",

  // Core IT Corridors & Pune West
  "wakad", "baner", "balewadi", "mahalunge", "bavdhan", "tathawade", "punawale", 
  "ravet", "kiwale", "mamurdi", "pimple-saudagar", "pimple-nilakh", "aundh", "sus", 
  "pashan", "kothrud", "karve-nagar", "warje", "shivajinagar", "deccan",
  
  // Pune East & IT Parks
  "kharadi", "viman-nagar", "kalyani-nagar", "koregaon-park", "magarpatta", 
  "hadapsar", "wagholi", "keshav-nagar", "mundhwa", "kharadi-annexe",
  
  // Pune South
  "nibm", "undri", "wanowrie", "kondhwa", "camp", "katraj", "dhankawadi", "bibwewadi",

  // PCMC & Industrial
  "pimpri", "chinchwad", "nigdi", "akurdi", "moshi", "bhosari", "chikhali",

  // Godrej Projects Competitor & Portfolio Capture
  "godrej-elements", "godrej-24", "godrej-rejuve", "godrej-woodsville", 
  "godrej-hillside", "godrej-green-vistas", "godrej-meadows", "godrej-rivergreens", 
  "godrej-gale", "godrej-greenfront", "godrej-emerald-waters", "godrej-urban-retreat",
  "godrej-parkridge", "godrej-forest-grove", "godrej-boulevard", "godrej-nurture",
  "godrej-prana", "godrej-infinity", "godrej-central-park", "godrej-properties-pune",
  
  // Phase 31: High-Intent Compound Micro-Market Slugs (Hinjewadi, Mahalunge, Pune Wide)
  "godrej-mahalunge-pune", "godrej-rivergreens-mahalunge", "godrej-hillside-mahalunge",
  "godrej-green-vistas-mahalunge", "godrej-meadows-mahalunge", "godrej-boulevard-mahalunge",
  "godrej-eden-estate-mahalunge", "godrej-properties-mahalunge", "godrej-park-world-hinjewadi",
  "the-aqua-retreat-hinjewadi", "godrej-aqua-retreat-hinjewadi", "godrej-properties-hinjewadi",
  "godrej-properties-pune-projects",

  // Mega SEO Domination Slugs - Pune Real Estate, Hinjewadi & Pune West
  "pune-real-estate-market", "real-estate-pune", "baner-real-estate-market",
  "mahalunge-real-estate-market", "hinjewadi-real-estate-market", "buy-home-in-pune",
  "new-launch-projects-in-pune", "upcoming-residential-projects-pune",
  "township-projects-in-pune", "luxury-projects-in-pune-west",
  "godrej-properties-pune-all-projects", "godrej-projects-in-pune", "godrej-upcoming-projects-in-pune",
  "godrej-properties-pune-price-list-2026", "godrej-townships-in-pune", "godrej-flats-in-pune", "best-godrej-project-in-pune",
  "hinjewadi-real-estate", "hinjewadi-real-estate-market-2026", "property-rates-in-hinjewadi",
  "best-residential-projects-in-hinjewadi", "flats-for-sale-in-hinjewadi-pune", "luxury-apartments-in-hinjewadi",
  "top-builders-in-hinjewadi", "hinjewadi-phase-1-real-estate", "upcoming-projects-in-hinjewadi-phase-1",
  "pune-west-real-estate", "pune-west-real-estate-market", "best-property-investment-in-pune-west",
  "luxury-townships-in-pune-west", "pune-west-luxury-apartments", "real-estate-investment-in-pune-west",
  "pune-metro-line-3-real-estate",

  // --- MEGA TIER 1 GODREJ THE RETREAT DOMINATION SLUGS ---
  "godrej-the-retreat", "godrej-the-retreat-hinjewadi", "godrej-the-retreat-pune", 
  "godrej-the-retreat-hinjewadi-phase-1", "godrej-the-retreat-hinjewadi-park-world",
  "godrej-the-retreat-at-godrej-park-world", "godrej-the-retreat-at-godrej-park-world-hinjewadi",
  "godrej-park-world-the-retreat-hinjewadi", "godrej-the-retreat-park-world-pune",
  "the-retreat-hinjewadi", "the-retreat-pune", 
  "the-retreat-godrej-properties", "godrej-the-retreat-price", "godrej-the-retreat-floor-plan",
  "godrej-the-retreat-brochure", "godrej-the-retreat-reviews", "godrej-the-retreat-possession",
  "godrej-the-retreat-rera", "godrej-the-retreat-sample-flat", "godrej-the-retreat-contact",
  "godrej-the-retreat-2-bhk", "godrej-the-retreat-3-bhk", "godrej-the-retreat-master-plan",

  // --- MEGA TIER 1 COMMERCIAL & BRAND INJECTION ---
  "godrej-park-world-price", "godrej-park-world-pune-price", "godrej-park-world-hinjewadi-price", 
  "godrej-park-world-price-list", "godrej-park-world-booking", "godrej-park-world-2-bhk",
  "godrej-park-world-3-bhk", "godrej-park-world-flats", "godrej-park-world-apartments",
  "godrej-park-world-property", "godrej-park-world-brochure", "godrej-park-world-floor-plan",
  "godrej-park-world-site-visit", "godrej-park-world-investment",
  
  // The Aqua Retreat Specific
  "godrej-aqua-retreat", "godrej-aqua-retreat-pune", "godrej-aqua-retreat-hinjewadi",
  "the-aqua-retreat-pune", "the-aqua-retreat-hinjewadi-phase-1", "aqua-retreat-2-bhk", "aqua-retreat-3-bhk",
  
  // The Greenfront & The Gale
  "the-greenfront-pune", "the-greenfront-hinjewadi", "godrej-greenfront-pune", 
  "the-gale-pune", "the-gale-hinjewadi", "godrej-gale-pune",
  
  // Godrej Hill Retreat (Distinct)
  "godrej-hill-retreat", "godrej-hill-retreat-pune", "godrej-hill-retreat-mahalunge", 
  "godrej-hill-retreat-hinjewadi", "godrej-hill-retreat-price", "godrej-hill-retreat-2-bhk",
  
  // Broad Brand & Intent
  "best-godrej-project-pune", "godrej-project-investment", "godrej-property-investment-pune",
  "buy-godrej-flat-pune", "buy-godrej-apartment-pune", "buy-godrej-property-hinjewadi",
  "godrej-projects-comparison-pune", "godrej-park-world-vs-godrej-elements",
  "godrej-park-world-vs-godrej-hillside", "godrej-park-world-vs-godrej-infinity",
  "godrej-properties-hinjewadi", "godrej-property-hinjewadi", "godrej-flats-hinjewadi",
  "godrej-apartments-hinjewadi", "godrej-new-project-hinjewadi", "godrej-upcoming-project-pune",
  // Complete Godrej Properties Pune Wide Portfolio Expansion
  "godrej-greens-undri", "godrej-horizon-undri", "godrej-sky-greens-mahalunge",
  "godrej-sky-vistas-kharadi", "godrej-sunrise-mundhwa", "godrej-keshavnagar-pune",
  "godrej-undri-pune", "godrej-kharadi-pune", "godrej-manjari-pune",
  "godrej-mamurdi-pune", "godrej-pimpri-pune", "godrej-pune-new-launch-2026",
  "godrej-pune-brochure-download", "godrej-pune-sample-flat-video", "godrej-pune-possession-dates",
  "godrej-pune-rera-numbers", "godrej-pune-2-bhk-flats", "godrej-pune-3-bhk-flats",
  "godrej-pune-4-bhk-luxury-apartments", "godrej-pune-resale-flats", "godrej-pune-nri-investment",
  "godrej-properties-maharera-pune", "godrej-properties-pune-office", "godrej-properties-pune-sales-gallery",
  "godrej-properties-pune-under-1-crore", "godrej-properties-pune-luxury-villas", "godrej-properties-pune-ready-to-move",
  "godrej-properties-pune-rera-approved", "godrej-flats-near-pune-metro-line-3", "godrej-projects-in-hinjewadi",
  "godrej-projects-in-mahalunge", "godrej-projects-in-pcmc", "godrej-projects-in-kharadi",
  "godrej-properties-pune-all-projects-list", "godrej-properties-pune-ready-possession",
  "godrej-properties-pune-under-construction", "godrej-properties-pune-upcoming-launches",
  "godrej-properties-pune-luxury-flats", "godrej-properties-pune-affordable-housing",
  "godrej-properties-pune-investment-guide", "godrej-properties-pune-rera-status",
  "godrej-properties-pune-sales-gallery-address", "godrej-properties-pune-customer-reviews",
  "godrej-properties-pune-2-bhk-carpet-area", "godrej-properties-pune-3-bhk-price-list",
  "godrej-properties-pune-nri-services",
  "godrej-park-world-possession", "godrej-park-world-rera", 
  "godrej-park-world-amenities", "godrej-park-world-master-plan", "godrej-park-world-sales-office", 
  "godrej-park-world-contact"
];

// Helper to format slugs into Title Case (e.g., "viman-nagar" -> "Viman Nagar")
export const formatLocation = (slug: string) => {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// 1. Programmatically Generate Static Params for Next.js Router
export function generateStaticParams() {
  return LOCATIONS.map((location) => ({
    location: location,
  }));
}

// 2. Programmatically Generate Ultra-Targeted SEO Metadata
export async function generateMetadata({ params }: { params: Promise<{ location: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const loc = resolvedParams.location;
  const locName = formatLocation(loc);
  
  const isRetreat = loc.includes('retreat') || loc.includes('the-retreat');
  
  const title = isRetreat
    ? `${locName} | Godrej The Retreat Hinjewadi Phase 1 Pune`
    : `Godrej Properties in ${locName} | Godrej The Retreat Hinjewadi`;

  const description = isRetreat
    ? `Official guide and details for ${locName}. Explore 2 & 3 BHK luxury resort apartments at Godrej The Retreat, Godrej Park World Hinjewadi Phase 1 with 50,000 sq ft clubhouse & MahaRERA PM1260002500070.`
    : `Looking for premium apartments near ${locName}? Discover Godrej The Retreat at Godrej Park World, an ultra-luxury township in Hinjewadi Phase 1 offering resort-style living just minutes from ${locName}.`;

  return {
    title,
    description,
    keywords: [
      `${locName}`, `Godrej Properties ${locName}`, `Godrej flats ${locName}`, `Buy apartment ${locName}`, 
      `Godrej The Retreat ${locName}`, `Godrej The Retreat Hinjewadi`, `Godrej The Retreat Price`,
      `Godrej The Retreat Floor Plan`, `Godrej Park World ${locName}`, `Godrej Aqua Retreat ${locName}`
    ],
    alternates: {
      // CRITICAL: Set canonical to itself so Google indexes it as a unique landing page
      canonical: `${siteConfig.url}/properties/${resolvedParams.location}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/properties/${resolvedParams.location}`,
      images: [
        {
          url: `${siteConfig.url}/api/og?title=${encodeURIComponent(locName)}&subtitle=${encodeURIComponent('Godrej The Retreat Hinjewadi')}`,
          width: 1200,
          height: 630,
          alt: `${locName} Real Estate`,
        }
      ],
    },
  };
}

// 3. Render the Page
export default async function LocationSEOPage({ params }: { params: Promise<{ location: string }> }) {
  const resolvedParams = await params;
  const loc = resolvedParams.location;
  const locName = formatLocation(loc);
  const baseUrl = siteConfig.url;
  const pageUrl = `${baseUrl}/properties/${loc}`;
  const isRetreat = loc.includes('retreat') || loc.includes('the-retreat');
  
  const heroDescription = isRetreat
    ? `Explore official floor plans, price breakdowns, and MahaRERA PM1260002500070 documentation for ${locName} at Godrej The Retreat, Godrej Park World Hinjewadi Phase 1.`
    : `Discover ultra-luxury 2 & 3 BHK resort-style residences at Godrej The Retreat, Godrej Park World Hinjewadi Phase 1, conveniently accessible from ${locName}, Pune.`;
  
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": baseUrl
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Godrej The Retreat Hinjewadi",
          "item": `${baseUrl}/godrej-the-retreat-hinjewadi`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": locName,
          "item": pageUrl
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": isRetreat ? `${locName} - Godrej The Retreat Hinjewadi` : `Godrej Properties in ${locName}`,
      "description": `Luxury 2 & 3 BHK resort-style apartments at Godrej The Retreat, Hinjewadi Phase 1, Pune. MahaRERA PM1260002500070.`,
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
          title={isRetreat ? `${locName}` : `Godrej Properties in ${locName}`}
          category={isRetreat ? "Godrej The Retreat Silo" : "Micro-Market Hub"}
          categoryLink="/godrej-the-retreat-hinjewadi"
          description={heroDescription}
        />
        <PageContent />
      </main>
    </>
  );
}
