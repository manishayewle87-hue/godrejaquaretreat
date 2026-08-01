import type { Metadata } from "next";
import PageContent from "@/components/layout/PageContent";

// Ultra-comprehensive list of Pune micro-markets and Godrej Projects
export const LOCATIONS = [
  // Core IT Corridors & Pune West
  "hinjewadi", "hinjewadi-phase-1", "hinjewadi-phase-2", "hinjewadi-phase-3", 
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
  "godrej-prana", "godrej-infinity", "godrej-central-park", "godrej-properties-pune"
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
      canonical: `https://godrejaquaretreat.godrejparkworld.com/properties/${resolvedParams.location}`,
    },
    openGraph: {
      title: `${locName} - Godrej Properties Hinjewadi`,
      description: `Explore premium Godrej Properties in ${locName}, Pune. Buy luxury 2 & 3 BHK flats at The Aqua Retreat by Godrej Properties Hinjewadi Phase 1.`,
      url: `https://godrejaquaretreat.godrejparkworld.com/properties/${resolvedParams.location}`,
      images: [
        {
          url: `https://godrejaquaretreat.godrejparkworld.com/api/og?title=${encodeURIComponent(locName)}&subtitle=${encodeURIComponent('Godrej Park World Hinjewadi')}`,
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
  
  return (
    <main className="flex min-h-screen flex-col bg-[#FAFAFA] selection:bg-emerald-aqua/30 selection:text-white">
      {/* Invisible H1 for Google Crawlers to anchor the keyword intent */}
      <h1 className="sr-only">Godrej Properties in {locName} - Luxury Apartments & Premium Township</h1>
      
      {/* Subtle visible text to ensure Google doesn't flag it as cloaking */}
      <div className="bg-[#0B0C10] text-gray-400 text-center py-2 text-[10px] font-sans tracking-[0.2em] uppercase border-b border-white/5 relative z-50">
        Godrej Properties Pune presents ultra-luxury living accessible from {locName}
      </div>

      <PageContent />
    </main>
  );
}
