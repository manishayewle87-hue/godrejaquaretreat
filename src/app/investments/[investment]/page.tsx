import { siteConfig } from "@/config/site";
import type { Metadata } from "next";
import PageContent from "@/components/layout/PageContent";

export const INVESTMENTS = [
  "rental-yield-hinjewadi-phase-1",
  "capital-appreciation-godrej-properties-pune",
  "pre-launch-offers-godrej-park-world",
  "pune-it-corridor-real-estate-roi",
  "tax-benefits-home-loan-pune-flats",
  "best-roi-real-estate-pune-west",
  "godrej-park-world-payment-plan",
  "nri-investment-godrej-properties",
  "hinjewadi-property-rates-2026",
  "buy-vs-rent-hinjewadi-flats"
];

const formatInvestmentName = (slug: string) => {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export function generateStaticParams() {
  return INVESTMENTS.map((inv) => ({
    investment: inv,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ investment: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const investmentName = formatInvestmentName(resolvedParams.investment);
  
  return {
    title: `${investmentName} | Godrej Park World Investment Guide`,
    description: `Discover everything you need to know about ${investmentName} at Godrej Park World, Hinjewadi Phase 1. Maximize your real estate ROI with Godrej Properties.`,
    keywords: [
      investmentName, `Real Estate ROI ${investmentName}`, 
      `Godrej Park World ${investmentName}`, `Invest in Pune West`, 
      "Hinjewadi Property Rates", "Godrej Properties Pune Investment"
    ],
    alternates: {
      canonical: `${siteConfig.url}/investments/${resolvedParams.investment}`,
    },
    openGraph: {
      title: `${investmentName} | Godrej Park World`,
      description: `Maximize your ROI with ${investmentName} at Godrej Park World, Hinjewadi Phase 1.`,
      url: `${siteConfig.url}/investments/${resolvedParams.investment}`,
      images: [
        {
          url: `${siteConfig.url}/api/og?title=${encodeURIComponent(investmentName)}&subtitle=${encodeURIComponent('Godrej Park World Investment')}`,
          width: 1200,
          height: 630,
          alt: investmentName,
        }
      ],
    },
  };
}

export default async function InvestmentSEOPage({ params }: { params: Promise<{ investment: string }> }): Promise<React.ReactElement> {
  const resolvedParams = await params;
  const investmentName = formatInvestmentName(resolvedParams.investment);
  const baseUrl = siteConfig.url;
  const pageUrl = `${baseUrl}/investments/${resolvedParams.investment}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl },
        { "@type": "ListItem", "position": 2, "name": "Investment Intelligence", "item": `${baseUrl}/investments/rental-yield-hinjewadi-phase-1` },
        { "@type": "ListItem", "position": 3, "name": investmentName, "item": pageUrl }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": `${investmentName} - Godrej Park World Investment Guide`,
      "description": `Comprehensive analysis of ${investmentName} for homebuyers and investors in Pune West.`,
      "author": {
        "@type": "Organization",
        "name": "Godrej Properties Pune Research"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Godrej Properties Pune",
        "url": baseUrl
      },
      "mainEntityOfPage": pageUrl,
      "datePublished": "2026-01-01T00:00:00.000Z",
      "dateModified": new Date().toISOString()
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex min-h-screen flex-col bg-[#FAFAFA] selection:bg-emerald-aqua/30 selection:text-white">
        <h1 className="sr-only">Guide to {investmentName} at Godrej Park World Hinjewadi</h1>
        
        <div className="bg-[#0B0C10] text-gray-400 text-center py-2 text-[10px] font-sans tracking-[0.2em] uppercase border-b border-white/5 relative z-50">
          Godrej Properties Pune: Expert Insights on {investmentName}
        </div>

        <PageContent />
      </main>
    </>
  );
}
