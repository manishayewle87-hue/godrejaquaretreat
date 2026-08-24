import { siteConfig } from "@/config/site";
import type { Metadata } from "next";
import Link from "next/link";
import { Building2, MapPin, CheckCircle2, ShieldCheck, PhoneCall, Sparkles, ArrowRight, Award, Compass, Layers, Trees, Waves } from "lucide-react";

export const metadata: Metadata = {
  title: "Godrej Properties Pune: Complete Portfolio 2026 | All Projects, Prices & Masterplans",
  description: "Official Godrej Properties Pune Ecosystem: Explore all luxury townships, 2, 3 & 4 BHK apartments, and villa developments across Hinjewadi, Mahalunge, PCMC, Kharadi & Undri. Verified MahaRERA details, price lists & priority EOI booking.",
  keywords: [
    "Godrej Properties Pune",
    "Godrej Properties in Pune",
    "Godrej Projects in Pune",
    "Godrej Pune All Projects",
    "Godrej Upcoming Projects in Pune 2026",
    "Godrej Properties Pune Price List",
    "Godrej The Retreat Hinjewadi",
    "Godrej Park World Hinjewadi",
    "Godrej Mahalunge Pune",
    "Godrej Emerald Waters Pimpri",
    "Godrej Urban Retreat Kharadi",
    "Godrej Infinity Pune",
    "Godrej 2 BHK Pune",
    "Godrej 3 BHK Pune",
    "Best Godrej Project in Pune"
  ],
  alternates: {
    canonical: `${siteConfig.url}/godrej-properties-pune`,
  },
  openGraph: {
    title: "Godrej Properties Pune: Complete Real Estate Ecosystem & Portals",
    description: "Explore the comprehensive Godrej Properties Pune portfolio: Godrej The Retreat, Godrej Park World, Mahalunge, Kharadi, Pimpri & Undri. Verified prices, plans & MahaRERA.",
    url: `${siteConfig.url}/godrej-properties-pune`,
    images: [
      {
        url: "https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/aqua-banner-1920x900-01-1-1-cmrnnfkpo000kj2phc4uv4hry.webp",
        width: 1920,
        height: 900,
        alt: "Godrej Properties Pune Complete Portfolio",
      }
    ],
    locale: "en_IN",
    type: "website",
  },
};

const PUNE_PROJECTS = [
  {
    corridor: "Hinjewadi IT Park Corridor (Pune West)",
    icon: <Waves className="w-6 h-6 text-emerald-aqua" />,
    badge: "Flagship Mega Township",
    projects: [
      {
        name: "Godrej The Retreat (The Aqua Retreat)",
        rera: "PM1260002500070",
        href: "/godrej-the-retreat-hinjewadi",
        typology: "2 & 3 BHK Resort Residences",
        price: "₹1.10 Cr* - ₹2.50 Cr*",
        desc: "50,000 sq.ft 4-tier aqua clubhouse, 50m Olympic lagoon pool, 12+ acres central greens in Hinjewadi Phase 1."
      },
      {
        name: "Godrej Park World (100+ Acre Township)",
        rera: "MahaRERA Registered",
        href: "/godrej-park-world-hinjewadi",
        typology: "Integrated Mega Township",
        price: "Pre-Launch Launch Offers",
        desc: "Pune West's largest self-sustaining city within a city with high-street retail, civic infra, and lush eco-podiums."
      },
      {
        name: "Godrej Elements Hinjewadi Phase 1",
        rera: "P52100016626",
        href: "/properties/godrej-elements",
        typology: "2 & 3 BHK Smart Homes",
        price: "₹98 Lakh* - ₹1.45 Cr*",
        desc: "Advanced smart home automation with 21+ lifestyle amenities near Rajiv Gandhi Infotech Park."
      },
      {
        name: "Godrej 24 Hinjewadi",
        rera: "P52100018598",
        href: "/properties/godrej-24",
        typology: "24/7 Lifestyle Apartments",
        price: "₹88 Lakh* - ₹1.30 Cr*",
        desc: "Round-the-clock operational concierge, gymnasiums, and work cafes for IT leaders."
      },
      {
        name: "Godrej Woodsville Hinjewadi",
        rera: "MahaRERA Registered",
        href: "/properties/godrej-woodsville",
        typology: "2 & 3 BHK Enclave",
        price: "₹82 Lakh* - ₹1.25 Cr*",
        desc: "Serene residential enclaves balancing modern architecture with nature trails."
      }
    ]
  },
  {
    corridor: "Mahalunge & Baner-Balewadi Corridor (Pune West)",
    icon: <Trees className="w-6 h-6 text-emerald-aqua" />,
    badge: "100+ Acre Riverfront Township",
    projects: [
      {
        name: "Godrej Rivergreens Mahalunge",
        rera: "MahaRERA Registered",
        href: "/properties/godrej-rivergreens-mahalunge",
        typology: "2 & 3 BHK Riverfront Flats",
        price: "₹65 Lakh* - ₹1.40 Cr*",
        desc: "Sprawling riverfront development with 4-tier community clubhouses and sports arenas."
      },
      {
        name: "Godrej Hillside Mahalunge (Phases 1, 2, 3)",
        rera: "MahaRERA Registered",
        href: "/properties/godrej-hillside-mahalunge",
        typology: "Hillside Residences",
        price: "₹62 Lakh* - ₹1.20 Cr*",
        desc: "Overlooking 400+ acres of protected green hills with crisp air quality index levels."
      },
      {
        name: "Godrej Meadows & Green Vistas",
        rera: "MahaRERA Registered",
        href: "/properties/godrej-meadows-mahalunge",
        typology: "Wellness-Themed Enclaves",
        price: "₹58 Lakh* - ₹1.15 Cr*",
        desc: "Dedicated healing gardens, meditation pavilions, and 3,000+ indigenous trees."
      },
      {
        name: "Godrej Boulevard Mahalunge",
        rera: "MahaRERA Registered",
        href: "/properties/godrej-boulevard-mahalunge",
        typology: "High-Street Residential",
        price: "₹68 Lakh* - ₹1.35 Cr*",
        desc: "Dynamic residential boulevard with pedestrian retail plazas."
      }
    ]
  },
  {
    corridor: "PCMC & Pimpri-Chinchwad Luxury Corridor",
    icon: <Building2 className="w-6 h-6 text-emerald-aqua" />,
    badge: "High-Rise Luxury",
    projects: [
      {
        name: "Godrej Emerald Waters Pimpri",
        rera: "MahaRERA Registered",
        href: "/properties/godrej-emerald-waters",
        typology: "2, 3 & 4 BHK Luxury High-Rise",
        price: "₹1.25 Cr* - ₹2.80 Cr*",
        desc: "Iconic architectural landmark on Old Mumbai-Pune Highway with private sky cabanas."
      },
      {
        name: "Godrej Forest Grove & Central Park Mamurdi",
        rera: "MahaRERA Registered",
        href: "/properties/godrej-forest-grove",
        typology: "2 & 3 BHK Parkland Homes",
        price: "₹52 Lakh* - ₹95 Lakh*",
        desc: "6-acre contiguous multi-tier central parks and immediate expressway connectivity."
      }
    ]
  },
  {
    corridor: "East & South Pune Corridors (Kharadi, Keshavnagar & Undri)",
    icon: <Compass className="w-6 h-6 text-emerald-aqua" />,
    badge: "IT & Riverfront Hubs",
    projects: [
      {
        name: "Godrej Urban Retreat Kharadi",
        rera: "MahaRERA Registered",
        href: "/properties/godrej-urban-retreat",
        typology: "2 & 3 BHK Luxury Apartments",
        price: "₹92 Lakh* - ₹1.75 Cr*",
        desc: "Walking distance to EON Free Zone, World Trade Center, and high-street shopping."
      },
      {
        name: "Godrej Infinity & Rejuve Keshavnagar",
        rera: "MahaRERA Registered",
        href: "/properties/godrej-infinity",
        typology: "Riverfront & Health Enclaves",
        price: "₹82 Lakh* - ₹1.60 Cr*",
        desc: "Premium riverfront living with holistic wellness facilities and jogging promenades."
      },
      {
        name: "Godrej Greens & Horizon Undri (South Pune)",
        rera: "MahaRERA Registered",
        href: "/properties/godrej-greens-undri",
        typology: "2 & 3 BHK Nature Homes",
        price: "₹48 Lakh* - ₹90 Lakh*",
        desc: "Lush hillside nature residences with panoramic views of South Pune."
      }
    ]
  }
];

export default function GodrejPropertiesPuneMasterPage() {
  const pageUrl = `${siteConfig.url}/godrej-properties-pune`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": siteConfig.url },
        { "@type": "ListItem", "position": 2, "name": "Godrej Properties Pune", "item": pageUrl }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      "name": "Godrej Properties Pune",
      "image": "https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/aqua-banner-1920x900-01-1-1-cmrnnfkpo000kj2phc4uv4hry.webp",
      "url": pageUrl,
      "telephone": "+917744009295",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Godrej Park World, Hinjewadi Phase 1, Rajiv Gandhi Infotech Park",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411057",
        "addressCountry": "IN"
      },
      "priceRange": "₹48 Lakh - ₹2.80 Crore",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "1250"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Godrej Properties Pune Complete Portfolio",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Godrej The Retreat Hinjewadi", "url": `${siteConfig.url}/godrej-the-retreat-hinjewadi` },
        { "@type": "ListItem", "position": 2, "name": "Godrej The Aqua Retreat Hinjewadi", "url": `${siteConfig.url}/godrej-the-aqua-retreat-hinjewadi` },
        { "@type": "ListItem", "position": 3, "name": "Godrej Park World Hinjewadi", "url": `${siteConfig.url}/godrej-park-world-hinjewadi` },
        { "@type": "ListItem", "position": 4, "name": "Godrej Rivergreens Mahalunge", "url": `${siteConfig.url}/properties/godrej-rivergreens-mahalunge` },
        { "@type": "ListItem", "position": 5, "name": "Godrej Emerald Waters Pimpri", "url": `${siteConfig.url}/properties/godrej-emerald-waters` },
        { "@type": "ListItem", "position": 6, "name": "Godrej Urban Retreat Kharadi", "url": `${siteConfig.url}/properties/godrej-urban-retreat` }
      ]
    }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <main className="min-h-screen bg-[#0B0C10] text-white pt-32 pb-24 selection:bg-emerald-aqua/30 selection:text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="text-emerald-aqua uppercase tracking-[0.3em] text-xs font-semibold mb-4 inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-aqua/10 border border-emerald-aqua/30 rounded-full">
              <Award className="w-4 h-4 text-emerald-aqua" />
              Official Real Estate Master Portfolio
            </span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-wide mt-3 mb-6">
              Godrej Properties <i className="text-emerald-aqua font-light">Pune</i>
            </h1>
            <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-3xl mx-auto">
              Explore the entire master-planned ecosystem by Godrej Properties across Pune. Compare prices, floor plans, RERA approvals, and investment yields for over 25+ benchmark residential developments.
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center">
              <span className="text-3xl md:text-4xl font-serif text-emerald-aqua font-bold block mb-1">25+</span>
              <span className="text-xs uppercase tracking-widest text-gray-400">Pune Developments</span>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center">
              <span className="text-3xl md:text-4xl font-serif text-emerald-aqua font-bold block mb-1">100+</span>
              <span className="text-xs uppercase tracking-widest text-gray-400">Acre Mega Townships</span>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center">
              <span className="text-3xl md:text-4xl font-serif text-emerald-aqua font-bold block mb-1">7.8%</span>
              <span className="text-xs uppercase tracking-widest text-gray-400">Top Rental Yields</span>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center">
              <span className="text-3xl md:text-4xl font-serif text-emerald-aqua font-bold block mb-1">100%</span>
              <span className="text-xs uppercase tracking-widest text-gray-400">MahaRERA Compliant</span>
            </div>
          </div>

          {/* Master Corridors */}
          <div className="space-y-16">
            {PUNE_PROJECTS.map((corridor, idx) => (
              <div key={idx} className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-6 border-b border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-emerald-aqua/10 border border-emerald-aqua/30 rounded-2xl">
                      {corridor.icon}
                    </div>
                    <div>
                      <h2 className="font-serif text-2xl md:text-3xl text-white">{corridor.corridor}</h2>
                      <span className="text-emerald-aqua text-xs uppercase tracking-widest font-semibold">{corridor.badge}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {corridor.projects.map((project, pIdx) => (
                    <Link
                      key={pIdx}
                      href={project.href}
                      className="bg-[#15181E] border border-white/5 p-6 rounded-2xl hover:border-emerald-aqua/40 hover:bg-white/[0.04] transition-all group flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex justify-between items-start gap-2 mb-3">
                          <h3 className="font-serif text-lg text-white group-hover:text-emerald-aqua transition-colors">
                            {project.name}
                          </h3>
                        </div>
                        <span className="text-xs text-gray-500 font-mono block mb-3">{project.rera}</span>
                        <p className="text-gray-400 text-xs font-light leading-relaxed mb-4">
                          {project.desc}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-white/5 flex justify-between items-center text-xs">
                        <span className="text-emerald-aqua font-semibold">{project.price}</span>
                        <span className="text-gray-400 group-hover:text-emerald-aqua transition-colors flex items-center gap-1">
                          View Specs <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Consultation CTA */}
          <div className="mt-20 bg-gradient-to-r from-emerald-aqua/20 via-white/5 to-emerald-aqua/20 border border-emerald-aqua/40 p-10 md:p-14 rounded-3xl text-center">
            <h2 className="font-serif text-3xl md:text-5xl text-white mb-4">
              Looking for the Best Godrej Property in Pune?
            </h2>
            <p className="text-gray-300 font-light max-w-2xl mx-auto text-sm md:text-base mb-8">
              Connect with our senior property advisors for unit-wise cost sheets, pre-launch discounts, and private site visits at Godrej The Retreat Hinjewadi or any Godrej Pune development.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/917744009295?text=Hi%2C%20I%20am%20interested%20in%20Godrej%20Properties%20Pune%20projects.%20Please%20share%20the%20complete%20price%20list%20and%20brochures."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#25D366] text-white font-semibold rounded-full hover:bg-[#20bd5a] transition-all flex items-center gap-2 text-sm shadow-xl"
              >
                Chat on WhatsApp ➔
              </a>
              <Link
                href="/eoi"
                className="px-8 py-4 bg-emerald-aqua text-black font-semibold rounded-full hover:bg-white transition-all text-sm shadow-xl"
              >
                Submit Priority EOI ➔
              </Link>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
