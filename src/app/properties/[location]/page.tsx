import { siteConfig } from "@/config/site";
import type { Metadata } from "next";
import PageContent from "@/components/layout/PageContent";

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

  // Mega SEO Domination Slugs
  "pune-real-estate-market", "real-estate-pune", "baner-real-estate-market",
  "mahalunge-real-estate-market", "hinjewadi-real-estate-market", "buy-home-in-pune",
  "new-launch-projects-in-pune", "upcoming-residential-projects-pune",
  "township-projects-in-pune", "luxury-projects-in-pune-west",

  // --- MEGA TIER 1 GODREJ THE RETREAT DOMINATION SLUGS ---
  "godrej-the-retreat", "godrej-the-retreat-hinjewadi", "godrej-the-retreat-pune", 
  "godrej-the-retreat-hinjewadi-phase-1", "the-retreat-hinjewadi", "the-retreat-pune", 
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
  "godrej-new-launch-pune", "godrej-luxury-apartments-pune", "godrej-properties-pune",
  "godrej-park-world-possession", "godrej-park-world-rera", "godrej-park-world-amenities",
  "godrej-park-world-master-plan", "godrej-park-world-sales-office", "godrej-park-world-contact"
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
  const locName = formatLocation(resolvedParams.location);
  
  return {
    title: `Godrej Properties in ${locName} | Godrej Park World Pune`,
    description: `Looking for premium apartments near ${locName}? Discover Godrej Park World, an ultra-luxury township by Godrej Properties Pune offering resort-style living just minutes from ${locName}.`,
    keywords: [
      `Godrej Properties ${locName}`, `Godrej flats in ${locName}`, `Buy apartment ${locName}`, 
      `Luxury apartments ${locName}`, `Godrej new launch near ${locName}`, `Premium township ${locName}`,
      `Godrej Park World ${locName}`, `Godrej Aqua Retreat ${locName}`, `Best property near ${locName}`
    ],
    alternates: {
      // CRITICAL: Set canonical to itself so Google indexes it as a unique landing page
      canonical: `${siteConfig.url}/properties/${resolvedParams.location}`,
    },
    openGraph: {
      title: `${locName} - Godrej Properties Hinjewadi`,
      description: `Explore premium Godrej Properties in ${locName}, Pune. Buy luxury 2 & 3 BHK flats at The Aqua Retreat by Godrej Properties Hinjewadi Phase 1.`,
      url: `${siteConfig.url}/properties/${resolvedParams.location}`,
      images: [
        {
          url: `${siteConfig.url}/api/og?title=${encodeURIComponent(locName)}&subtitle=${encodeURIComponent('Godrej Park World Hinjewadi')}`,
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
  const locName = formatLocation(resolvedParams.location);
  const baseUrl = siteConfig.url;
  const pageUrl = `${baseUrl}/properties/${resolvedParams.location}`;
  
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
          "name": `Godrej Properties ${locName}`,
          "item": pageUrl
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      "name": `Godrej Properties Pune - ${locName} Authorised Partner`,
      "url": pageUrl,
      "image": "https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/aqua-banner-1920x900-01-1-1-cmrnnfkpo000kj2phc4uv4hry.webp",
      "description": `Authorized real estate marketing partner for Godrej Park World Hinjewadi, serving homebuyers and investors from ${locName}.`,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Godrej Park World, Hinjewadi Phase 1",
        "addressLocality": "Pune",
        "addressRegion": "MH",
        "postalCode": "411057",
        "addressCountry": "IN"
      },
      "areaServed": {
        "@type": "Place",
        "name": `${locName}, Pune, Maharashtra`
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
        {/* Invisible H1 for Google Crawlers to anchor the keyword intent */}
        <h1 className="sr-only">Godrej Properties in {locName} - Luxury Apartments & Premium Township</h1>
        
        {/* Subtle visible text to ensure Google doesn't flag it as cloaking */}
        <div className="bg-[#0B0C10] text-gray-400 text-center py-2 text-[10px] font-sans tracking-[0.2em] uppercase border-b border-white/5 relative z-50">
          Godrej Properties Pune presents ultra-luxury living accessible from {locName}
        </div>

        <PageContent />
      </main>
    </>
  );
}
