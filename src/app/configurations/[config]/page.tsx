import { siteConfig } from "@/config/site";
import type { Metadata } from "next";
import PageContent from "@/components/layout/PageContent";

export const CONFIGURATIONS = [
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
    title: `Buy ${configName} | Godrej Park World Hinjewadi`,
    description: `Searching for ${configName}? Discover Godrej Park World, an ultra-luxury township in Hinjewadi Phase 1 offering premium resort-style living by Godrej Properties.`,
    keywords: [
      configName, `Buy ${configName}`, `${configName} Price`, 
      `Godrej Properties ${configName}`, `The Aqua Retreat ${configName}`,
      "Godrej Park World Hinjewadi", "Pune Real Estate"
    ],
    alternates: {
      canonical: `${siteConfig.url}/configurations/${resolvedParams.config}`,
    },
    openGraph: {
      title: `${configName} | Godrej Park World`,
      description: `Explore premium ${configName} at Godrej Park World, Hinjewadi Phase 1.`,
      url: `${siteConfig.url}/configurations/${resolvedParams.config}`,
      images: [
        {
          url: `${siteConfig.url}/api/og?title=${encodeURIComponent(configName)}&subtitle=${encodeURIComponent('Godrej Park World Hinjewadi')}`,
          width: 1200,
          height: 630,
          alt: configName,
        }
      ],
    },
  };
}

export default async function ConfigurationSEOPage({ params }: { params: Promise<{ config: string }> }) {
  const resolvedParams = await params;
  const configName = formatConfigName(resolvedParams.config);
  
  return (
    <main className="flex min-h-screen flex-col bg-[#FAFAFA] selection:bg-emerald-aqua/30 selection:text-white">
      <h1 className="sr-only">Buy {configName} - Godrej Park World Hinjewadi Phase 1</h1>
      
      <div className="bg-[#0B0C10] text-gray-400 text-center py-2 text-[10px] font-sans tracking-[0.2em] uppercase border-b border-white/5 relative z-50">
        Godrej Properties Pune presents premium {configName}
      </div>

      <PageContent />
    </main>
  );
}
