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
        { "@type": "ListItem", "position": 2, "name": "Godrej The Retreat Hinjewadi", "item": `${baseUrl}/godrej-the-retreat-hinjewadi` },
        { "@type": "ListItem", "position": 3, "name": investmentName, "item": pageUrl }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": `${investmentName} - Godrej The Retreat Investment Guide`,
      "description": `Comprehensive analysis of ${investmentName} for homebuyers and investors in Pune West. MahaRERA: PM1260002500070.`,
      "image": "https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/aqua-banner-1920x900-01-1-1-cmrnnfkpo000kj2phc4uv4hry.webp",
      "author": {
        "@type": "Organization",
        "name": "Godrej Properties Pune Research Desk"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Godrej Properties Pune",
        "url": baseUrl
      },
      "mainEntityOfPage": pageUrl,
      "datePublished": "2026-01-01T00:00:00.000Z",
      "dateModified": new Date().toISOString()
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
          "name": `What are the expected returns for ${investmentName}?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `Godrej The Retreat Hinjewadi Phase 1 projects a 7.2% to 8.0% gross rental yield with 12% - 15% forecasted capital appreciation upon completion of Pune Metro Line 3.`
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
        <h1 className="sr-only">Guide to {investmentName} at Godrej The Retreat Hinjewadi</h1>
        
        <div className="bg-[#0B0C10] text-gray-300 text-center py-2.5 px-4 text-[11px] font-sans tracking-[0.2em] uppercase border-b border-white/10 relative z-50 flex items-center justify-center gap-3">
          <span className="text-emerald-aqua font-bold">{investmentName}</span>
          <span className="text-gray-500">•</span>
          <span>Godrej The Retreat Hinjewadi Phase 1</span>
          <span className="text-gray-500">•</span>
          <span className="text-emerald-aqua">MahaRERA PM1260002500070</span>
        </div>

        <PageContent />
      </main>
    </>
  );
}
