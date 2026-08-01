import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

// Township Clusters targeting specific competitor/sister projects
export const CLUSTERS = [
  "the-aqua-retreat",
  "the-gale",
  "the-greenfront",
  "godrej-woodsville",
  "the-eden-estate-na-plots",
  "godrej-elements",
  "godrej-24"
];

const formatClusterName = (slug: string) => {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export async function generateStaticParams() {
  return CLUSTERS.map((cluster) => ({
    cluster: cluster,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ cluster: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const clusterName = formatClusterName(resolvedParams.cluster);
  
  return {
    title: `${clusterName} at Godrej Park World Hinjewadi | Pune Real Estate`,
    description: `Discover ${clusterName}, a premium residential cluster inside the Godrej Park World Township in Hinjewadi Phase 1. Compare floor plans, prices, and exclusive amenities alongside The Aqua Retreat.`,
    keywords: [`${clusterName} Godrej`, `${clusterName} Hinjewadi`, `${clusterName} Price`, `${clusterName} Floor Plan`, `Godrej Park World ${clusterName}`, `The Aqua Retreat`],
    openGraph: {
      title: `${clusterName} | Godrej Park World Hinjewadi`,
      description: `Explore ${clusterName} at Godrej Park World, Hinjewadi Phase 1. Premium luxury residences by Godrej Properties Pune.`,
      url: `https://godrejaquaretreat.godrejparkworld.com/clusters/${resolvedParams.cluster}`,
      images: [
        {
          url: `https://godrejaquaretreat.godrejparkworld.com/api/og?title=${encodeURIComponent(clusterName)}&subtitle=${encodeURIComponent('Godrej Park World Township')}`,
          width: 1200,
          height: 630,
          alt: clusterName,
        }
      ],
    },
    alternates: {
      canonical: `https://godrejaquaretreat.godrejparkworld.com/clusters/${resolvedParams.cluster}`,
    }
  };
}

export default async function ClusterSiloPage({ params }: { params: Promise<{ cluster: string }> }) {
  const resolvedParams = await params;
  const clusterName = formatClusterName(resolvedParams.cluster);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    "name": `${clusterName} at Godrej Park World`,
    "description": `Premium real estate offering inside the Godrej Park World township in Hinjewadi.`,
    "url": `https://godrejaquaretreat.godrejparkworld.com/clusters/${resolvedParams.cluster}`,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Godrej Properties Pune"
      }
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen pt-32 pb-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          
          <div className="mb-16 text-center">
            <h4 className="text-emerald-aqua tracking-[0.2em] uppercase text-sm font-semibold mb-4">Godrej Park World Township</h4>
            <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-6">{clusterName}</h1>
            <p className="text-foreground/70 text-lg md:text-xl max-w-3xl mx-auto">
              Explore {clusterName}, a vital part of the massive <strong>Godrej Park World</strong> ecosystem in Hinjewadi Phase 1. 
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden glass-dark border border-emerald-aqua/20">
              <Image 
                src="https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/overview-1740x810-cmrnngdyo000lj2phcjaf0u8l.webp"
                alt={`${clusterName} Godrej Park World`}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-serif text-foreground mb-6">Compare with The Aqua Retreat</h2>
              <p className="text-foreground/80 text-lg mb-6 leading-relaxed">
                While {clusterName} offers exceptional value within the Godrej Park World township, our flagship ultra-luxury cluster, <strong>The Aqua Retreat</strong>, delivers an unparalleled 5-star resort lifestyle with a massive 50,000 sq.ft clubhouse.
              </p>
              <ul className="space-y-4 mb-8 text-foreground/80">
                <li className="flex items-center"><span className="text-emerald-aqua mr-3">✓</span> Resort-Style Living</li>
                <li className="flex items-center"><span className="text-emerald-aqua mr-3">✓</span> Premium 2 & 3 BHK Configurations</li>
                <li className="flex items-center"><span className="text-emerald-aqua mr-3">✓</span> Highest Expected ROI in Hinjewadi</li>
              </ul>
              <Link href="/" className="inline-block px-8 py-4 bg-emerald-aqua text-white rounded-none font-semibold hover:bg-emerald-aqua/90 transition-colors">
                Discover The Aqua Retreat
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
