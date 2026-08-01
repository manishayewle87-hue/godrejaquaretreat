import type { Metadata } from "next";
import PageContent from "@/components/layout/PageContent";

// High-value search locations in Pune targeting IT professionals and investors
const LOCATIONS = [
  "hinjewadi", "wakad", "baner", "balewadi", "mahalunge", 
  "kharadi", "viman-nagar", "kalyani-nagar", "koregaon-park",
  "pimple-saudagar", "aundh", "bavdhan", "tathawade", "punawale"
];

// Helper to format slugs into Title Case (e.g., "viman-nagar" -> "Viman Nagar")
const formatLocation = (slug: string) => {
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
      title: `Godrej Properties in ${locName} | Godrej Park World Pune`,
      description: `Discover premium Godrej Properties apartments accessible from ${locName}.`,
      url: `https://godrejaquaretreat.godrejparkworld.com/properties/${resolvedParams.location}`,
    }
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
