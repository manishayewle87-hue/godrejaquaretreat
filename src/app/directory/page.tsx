import { siteConfig } from "@/config/site";
import type { Metadata } from "next";
import Link from "next/link";
import { LOCATIONS } from "@/app/properties/[location]/page";
import { CLUSTERS } from "@/app/clusters/[cluster]/page";
import { CONFIGURATIONS } from "@/app/configurations/[config]/page";
import { AMENITIES } from "@/app/amenities/[amenity]/page";
import { INVESTMENTS } from "@/app/investments/[investment]/page";
import { BLOG_POSTS } from "@/data/blog";
import { Building2, Compass, Home, Layers, Sparkles, TrendingUp, BookOpen, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Ecosystem Directory & HTML Sitemap | Godrej The Retreat Hinjewadi",
  description: "Complete architectural directory and sitemap for Godrej The Retreat, Godrej Park World Hinjewadi Phase 1, Pune. Explore all 330+ configurations, locations, amenities, and investment guides.",
  alternates: {
    canonical: `${siteConfig.url}/directory`,
  },
};

const formatSlug = (slug: string) => {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export default function DirectoryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": siteConfig.url },
      { "@type": "ListItem", "position": 2, "name": "Ecosystem Directory", "item": `${siteConfig.url}/directory` }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="min-h-screen bg-[#0B0C10] text-white pt-32 pb-24 selection:bg-emerald-aqua/30 selection:text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-emerald-aqua uppercase tracking-[0.3em] text-xs font-semibold mb-4 inline-block px-3 py-1 bg-emerald-aqua/10 border border-emerald-aqua/20 rounded-full">
              Crawlable PageRank Architecture & Sitemap
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-white tracking-wide mt-2 mb-6">
              Godrej The Retreat <i className="text-emerald-aqua font-light">Directory</i>
            </h1>
            <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
              Explore the complete 330+ page real estate knowledge matrix and property ecosystem for <strong>Godrej The Retreat</strong> at Godrej Park World Hinjewadi Phase 1, Pune.
            </p>
          </div>

          {/* Tier 1 Primary Authority Hubs */}
          <div className="mb-16 bg-white/5 border border-emerald-aqua/30 rounded-3xl p-8 backdrop-blur-md">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="w-6 h-6 text-emerald-aqua" />
              <h2 className="font-serif text-2xl text-white">Tier 1 Primary Authority Hubs</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-xs">
              <Link href="/" className="p-3 bg-black/40 hover:bg-emerald-aqua/20 border border-white/10 rounded-xl hover:text-emerald-aqua transition-colors font-medium">
                🏠 Home / Master Township
              </Link>
              <Link href="/godrej-the-retreat-hinjewadi" className="p-3 bg-emerald-aqua text-black font-bold rounded-xl hover:bg-white transition-colors">
                ⭐ Godrej The Retreat Flagship Hub
              </Link>
              <Link href="/godrej-properties-hinjewadi-pune" className="p-3 bg-black/40 hover:bg-emerald-aqua/20 border border-white/10 rounded-xl hover:text-emerald-aqua transition-colors font-medium">
                🏢 Godrej Properties Hinjewadi
              </Link>
              <Link href="/eoi" className="p-3 bg-black/40 hover:bg-emerald-aqua/20 border border-white/10 rounded-xl hover:text-emerald-aqua transition-colors font-medium">
                📝 Expression of Interest (EOI)
              </Link>
              <Link href="/godrej-park-world-pune-luxury-residences" className="p-3 bg-black/40 hover:bg-emerald-aqua/20 border border-white/10 rounded-xl hover:text-emerald-aqua transition-colors font-medium">
                📐 Luxury Residences & Floor Plans
              </Link>
              <Link href="/godrej-park-world-pune-masterplan" className="p-3 bg-black/40 hover:bg-emerald-aqua/20 border border-white/10 rounded-xl hover:text-emerald-aqua transition-colors font-medium">
                🌳 100+ Acre Township Masterplan
              </Link>
              <Link href="/godrej-park-world-pune-premium-amenities" className="p-3 bg-black/40 hover:bg-emerald-aqua/20 border border-white/10 rounded-xl hover:text-emerald-aqua transition-colors font-medium">
                🏊 50,000 Sq.Ft Aqua Clubhouse
              </Link>
              <Link href="/godrej-park-world-pune-hinjewadi-location" className="p-3 bg-black/40 hover:bg-emerald-aqua/20 border border-white/10 rounded-xl hover:text-emerald-aqua transition-colors font-medium">
                📍 Hinjewadi Phase 1 Location & Metro
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Section 1: Configurations & Typologies */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Home className="w-5 h-5 text-emerald-aqua" />
                <h3 className="font-serif text-xl text-white">Residences & Typology Silos ({CONFIGURATIONS.length})</h3>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-400 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                {CONFIGURATIONS.map((config) => (
                  <li key={config}>
                    <Link href={`/configurations/${config}`} className="hover:text-emerald-aqua transition-colors block py-1">
                      • {formatSlug(config)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 2: Township Clusters */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Layers className="w-5 h-5 text-emerald-aqua" />
                <h3 className="font-serif text-xl text-white">Clusters & Township Silos ({CLUSTERS.length})</h3>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-400 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                {CLUSTERS.map((cluster) => (
                  <li key={cluster}>
                    <Link href={`/clusters/${cluster}`} className="hover:text-emerald-aqua transition-colors block py-1">
                      • {formatSlug(cluster)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 3: Amenities & Clubhouse */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-5 h-5 text-emerald-aqua" />
                <h3 className="font-serif text-xl text-white">Resort Amenities Silos ({AMENITIES.length})</h3>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-400 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                {AMENITIES.map((amenity) => (
                  <li key={amenity}>
                    <Link href={`/amenities/${amenity}`} className="hover:text-emerald-aqua transition-colors block py-1">
                      • {formatSlug(amenity)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 4: Investment & Financial Yield Guides */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-5 h-5 text-emerald-aqua" />
                <h3 className="font-serif text-xl text-white">Investment & ROI Guides ({INVESTMENTS.length})</h3>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-400 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                {INVESTMENTS.map((inv) => (
                  <li key={inv}>
                    <Link href={`/investments/${inv}`} className="hover:text-emerald-aqua transition-colors block py-1">
                      • {formatSlug(inv)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 5: Micro-Market Locations (180+ Hubs) */}
          <div className="mt-12 bg-white/5 border border-white/10 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Compass className="w-5 h-5 text-emerald-aqua" />
              <h3 className="font-serif text-xl text-white">Micro-Market & Location Silos ({LOCATIONS.length} Areas)</h3>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-xs text-gray-400 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
              {LOCATIONS.map((loc) => (
                <li key={loc}>
                  <Link href={`/properties/${loc}`} className="hover:text-emerald-aqua transition-colors block py-1">
                    • {formatSlug(loc)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 6: Real Estate Intelligence Blog */}
          <div className="mt-12 bg-white/5 border border-white/10 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-5 h-5 text-emerald-aqua" />
              <h3 className="font-serif text-xl text-white">Pillar Blog Posts & Market Insights ({BLOG_POSTS.length} Posts)</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-gray-300">
              {BLOG_POSTS.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="p-4 bg-black/40 border border-white/5 rounded-2xl hover:border-emerald-aqua/40 hover:text-white transition-all group"
                >
                  <p className="font-medium group-hover:text-emerald-aqua transition-colors text-sm mb-1">{post.title}</p>
                  <p className="text-gray-400 text-xs line-clamp-2">{post.description}</p>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
