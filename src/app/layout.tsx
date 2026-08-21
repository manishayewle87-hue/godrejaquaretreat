import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import SmoothScroller from "@/components/layout/SmoothScroller";
import FloatingCTA from "@/components/ui/FloatingCTA";
import CustomCursor from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Godrej The Retreat Hinjewadi Phase 1 | The Aqua Retreat Godrej Park World Pune",
  description: "Official Site: Godrej The Retreat (The Aqua Retreat) at Godrej Park World Hinjewadi Phase 1, Pune by Godrej Properties. Luxury 2 & 3 BHK resort apartments, 50,000 sq ft clubhouse, floor plans, price list & brochure. MahaRERA: PM1260002500070.",
  keywords: [
    // --- Core Primary Target Keywords ---
    "Godrej The Retreat", "Godrej The Retreat Hinjewadi", "Godrej The Retreat Pune", 
    "Godrej The Retreat Hinjewadi Phase 1", "The Retreat by Godrej Properties Hinjewadi",
    "The Retreat Hinjewadi", "The Retreat Pune", "Godrej The Retreat price", 
    "Godrej The Retreat floor plan", "Godrej The Retreat brochure", "Godrej The Retreat reviews",
    "Godrej The Retreat possession date", "Godrej The Retreat RERA", "Godrej The Retreat sample flat",
    "Godrej The Retreat location", "Godrej The Retreat 2 BHK", "Godrej The Retreat 3 BHK",
    "The Aqua Retreat by Godrej Properties Hinjewadi", "Godrej Aqua Retreat", "The Aqua Retreat", 
    "Aqua Retreat Hinjewadi", "Aqua Retreat Pune", "Godrej Aqua Retreat Pune",
    "Godrej Properties Pune", "Godrej Properties Hinjewadi", "Godrej Homes Pune",
    
    // --- Godrej Park World Township Ecosystem ---
    "Godrej Park World", "Godrej Park World Pune", "Godrej Park World Hinjewadi", "Godrej Park World Phase 1", 
    "Godrej Park World Township", "Godrej Park World Price", "Godrej Park World Master Plan", "Godrej Park World Brochure",
    "Godrej Park World Location", "Godrej Park World Central Greens", "Godrej Park World Investment",
    "Godrej Park World The Retreat", "Godrej Park World Aqua Retreat", "Godrej Hinjewadi project",
    
    // --- Godrej Pune Portfolio & Competitor Intercepts ---
    "Godrej Residential Pune", "Godrej New Launch Pune", "Godrej Premium Homes", "Godrej Luxury Apartments", 
    "Godrej Township Pune", "Godrej Projects Pune", "Godrej Upcoming Projects Pune", "Godrej Under Construction Pune", 
    "Godrej Ready Possession Pune", "Godrej Smart Homes Pune", "Godrej Real Estate Pune", "Godrej Properties Hinjewadi",
    "Godrej Flats Pune", "Godrej Developers Pune", "Godrej Builders Pune", "Godrej IT Park Homes", "Godrej 2 BHK Pune", 
    "Godrej 3 BHK Pune", "Godrej 4 BHK Pune", "Godrej Pre Launch Pune", "Godrej NFO Pune", "Godrej Phase 1",
    "Godrej Elements", "Godrej 24", "Godrej Rejuve", "Godrej Woodsville", "Godrej Hillside", "Godrej Green Vistas", 
    "Godrej Meadows", "Godrej Rivergreens", "Godrej Gale", "Godrej Greenfront", "Godrej Emerald Waters", 
    "Godrej Urban Retreat", "Godrej Parkridge", "Godrej Forest Grove", "Godrej Boulevard", "Godrej Nurture", 
    "Godrej Prana", "Godrej Infinity", "Godrej Central Park",
    
    // --- Pune Real Estate Micro Markets ---
    "Luxury Real Estate Pune", "Buy Flat Pune", "Buy Apartment Hinjewadi", "Buy Home Pune", "Buy Luxury Apartment",
    "Best Property Pune", "Invest in Pune", "Invest in Hinjewadi", "Pune Property Investment", "Rental Income Pune", 
    "Metro Investment Pune", "IT Corridor Investment", "Flats near Infosys Pune", "Flats near TCS Pune", "Flats near Wipro Pune",
    "Flats in Hinjewadi Phase 1", "Flats in Hinjewadi Phase 2", "Flats in Hinjewadi Phase 3", "Flats in Wakad", 
    "Flats in Baner", "Flats in Balewadi", "Flats in Mahalunge", "Flats in Bavdhan", "Flats in Tathawade", 
    "Flats in Punawale", "Flats in Ravet", "Flats in Kiwale", "Flats in Pimple Saudagar", "Flats in Aundh", 
    "Flats in Kothrud", "Flats in Kharadi", "Flats in Viman Nagar", "Flats in Kalyani Nagar", "Flats in Koregaon Park",
    "Flats in Magarpatta", "Flats in Hadapsar", "Flats in Wagholi", "Flats in NIBM", "Flats in Undri", 
    "Premium Apartments Pune West", "Luxury Township Pune West", "Resort Style Living Pune", "Integrated Township Pune",
    
    // --- High ROI & Commercial Search Intent ---
    "Top Builders in Pune", "Best Real Estate Developer Pune", "Pune Real Estate Market", "Property Rates in Pune", 
    "Hinjewadi Property Rates", "New Residential Projects Pune", "Upcoming Townships Pune", "Buy 2 BHK Pune", 
    "Buy 3 BHK Pune", "Spacious Homes Pune", "Smart City Pune Properties", "Pune West Real Estate"
  ],
  openGraph: {
    title: "Godrej The Retreat Hinjewadi | The Aqua Retreat at Godrej Park World Pune",
    description: "Official Portal: Godrej The Retreat by Godrej Properties Hinjewadi Phase 1. Discover ultra-luxury 2 & 3 BHK resort residences, 50,000 sq ft clubhouse & Olympic lagoon pool.",
    url: siteConfig.url,
    siteName: "Godrej Properties Pune",
    images: [
      {
        url: "https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/aqua-banner-1920x900-01-1-1-cmrnnfkpo000kj2phc4uv4hry.webp",
        width: 1920,
        height: 900,
        alt: "Godrej The Retreat Hinjewadi Phase 1 Pune - The Aqua Retreat at Godrej Park World",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: siteConfig.url,
    languages: {
      'en-IN': siteConfig.url,
      'en-US': siteConfig.url,
      'en-GB': siteConfig.url,
      'en-AE': siteConfig.url, // UAE - Huge NRI market
      'en-SG': siteConfig.url, // Singapore NRI market
      'x-default': siteConfig.url,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Godrej The Retreat Hinjewadi | Godrej Properties Pune",
    description: "Experience Godrej The Retreat (The Aqua Retreat) at Godrej Park World Hinjewadi Phase 1. Luxury resort apartments by Godrej Properties Pune.",
    images: ["https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/aqua-banner-1920x900-01-1-1-cmrnnfkpo000kj2phc4uv4hry.webp"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Pune, Hinjewadi",
    "geo.position": "18.5790625;73.7281875",
    "ICBM": "18.5790625, 73.7281875",
    "revisit-after": "1 days",
    "rating": "General",
    "distribution": "Global",
    "coverage": "Worldwide",
  },
  verification: {
    google: "0wrEaGVPHBj6OBUSf4IwT6iOuQejVAt1WvxZgKIS7co",
  }
};

import { Outfit, Syne } from 'next/font/google';
import { ModalProvider } from "@/context/ModalContext";
import SmartHUD from "@/components/layout/SmartHUD";
import PWAInit from "@/components/ui/PWAInit";
import EnquiryModal from "@/components/ui/EnquiryModal";
import AIChatbot from "@/components/ui/AIChatbot";
import ExitIntentModal from "@/components/ui/ExitIntentModal";

const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '500', '600'], variable: '--font-outfit', display: 'swap' });
const syne = Syne({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], variable: '--font-syne', display: 'swap' });

import { GoogleAnalytics } from '@next/third-parties/google';
import MobileTabBar from "@/components/ui/MobileTabBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const unifiedGraphSchema = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. WebSite Schema with SearchAction
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        "url": `${siteConfig.url}/`,
        "name": "Godrej The Retreat Hinjewadi | Godrej Park World Pune",
        "alternateName": [
          "Godrej The Retreat",
          "Godrej The Retreat Hinjewadi Phase 1",
          "The Aqua Retreat by Godrej Properties Hinjewadi",
          "Godrej Aqua Retreat",
          "Godrej Park World The Retreat"
        ],
        "description": "Official portal for Godrej The Retreat (The Aqua Retreat) at Godrej Park World, Hinjewadi Phase 1, Pune. MahaRERA: PM1260002500070.",
        "inLanguage": "en-IN",
        "publisher": {
          "@id": `${siteConfig.url}/#organization`
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${siteConfig.url}/?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      },
      // 2. RealEstateAgent & LocalBusiness Schema (Google Maps & Local SEO)
      {
        "@type": ["RealEstateAgent", "LocalBusiness"],
        "@id": `${siteConfig.url}/#organization`,
        "name": "Godrej Properties Pune - Godrej The Retreat Hinjewadi",
        "alternateName": [
          "Godrej The Retreat Hinjewadi Sales Office",
          "Godrej Park World Hinjewadi Sales Experience Center",
          "Godrej Properties Hinjewadi Phase 1 Experience Center",
          "The Aqua Retreat Sales Lounge"
        ],
        "url": `${siteConfig.url}/`,
        "logo": "https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/aqua-banner-1920x900-01-1-1-cmrnnfkpo000kj2phc4uv4hry.webp",
        "image": "https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/aqua-banner-1920x900-01-1-1-cmrnnfkpo000kj2phc4uv4hry.webp",
        "telephone": "+917744009295",
        "email": "sales@godrejparkworld.com",
        "priceRange": "₹1.10 Cr - ₹2.50 Cr",
        "currenciesAccepted": "INR",
        "paymentAccepted": "Cash, Cheque, Bank Transfer, Home Loan Approved by SBI, HDFC, ICICI, Axis Bank",
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
        },
        "hasMap": "https://maps.google.com/?q=18.5790625,73.7281875",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "09:00",
            "closes": "20:00"
          }
        ],
        "areaServed": [
          { "@type": "AdministrativeArea", "name": "Pune" },
          { "@type": "AdministrativeArea", "name": "Hinjewadi Phase 1" },
          { "@type": "AdministrativeArea", "name": "Hinjewadi Phase 2" },
          { "@type": "AdministrativeArea", "name": "Hinjewadi Phase 3" },
          { "@type": "AdministrativeArea", "name": "Wakad" },
          { "@type": "AdministrativeArea", "name": "Baner" },
          { "@type": "AdministrativeArea", "name": "Balewadi" },
          { "@type": "AdministrativeArea", "name": "Mahalunge" },
          { "@type": "AdministrativeArea", "name": "Pimpri-Chinchwad (PCMC)" },
          { "@type": "AdministrativeArea", "name": "Pune West" },
          { "@type": "Country", "name": "United Arab Emirates (UAE - Dubai NRI Hub)" },
          { "@type": "Country", "name": "Singapore" },
          { "@type": "Country", "name": "United States" },
          { "@type": "Country", "name": "United Kingdom" }
        ],
        "sameAs": [
          "https://maharera.mahaonline.gov.in",
          "https://maps.google.com/?q=18.5790625,73.7281875"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "342",
          "reviewCount": "342"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Rohit Deshmukh" },
            "datePublished": "2026-01-15",
            "reviewBody": "Godrej The Retreat in Hinjewadi Phase 1 offers an unmatched lifestyle. The 50,000 sq ft Aqua clubhouse and Olympic lagoon pool are spectacular.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Ananya Kulkarni" },
            "datePublished": "2026-02-01",
            "reviewBody": "Best investment in Pune West IT corridor. Zero bridge traffic to Wipro and Infosys campuses and top-tier construction quality by Godrej Properties at Godrej The Retreat.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Sameer Joshi" },
            "datePublished": "2026-02-18",
            "reviewBody": "Godrej The Retreat Hinjewadi is the most complete resort township in Pune. 12+ acres of central greens and direct access to Pune Metro Line 3.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
          }
        ]
      },
      // 3. ApartmentComplex Real Estate Master Structure
      {
        "@type": "ApartmentComplex",
        "@id": `${siteConfig.url}/#apartment-complex`,
        "name": "Godrej The Retreat Hinjewadi",
        "alternateName": [
          "Godrej The Retreat",
          "Godrej The Retreat Pune",
          "The Aqua Retreat at Godrej Park World",
          "Godrej Aqua Retreat Hinjewadi Phase 1",
          "Godrej Park World The Retreat"
        ],
        "description": "Ultra-luxury 2 & 3 BHK resort-style residences at Godrej The Retreat inside a 100+ acre integrated township in Hinjewadi Phase 1, Pune featuring 12+ acres central greens, 50,000 sq ft clubhouse, and 50m Olympic lagoon pool.",
        "identifier": "PM1260002500070",
        "url": `${siteConfig.url}/`,
        "telephone": "+917744009295",
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
        },
        "numberOfAccommodations": "800+",
        "petsAllowed": "True",
        "amenityFeature": [
          { "@type": "LocationFeatureSpecification", "name": "50,000 Sq.Ft 4-Tier Luxury Clubhouse", "value": "true" },
          { "@type": "LocationFeatureSpecification", "name": "50m Olympic Length Infinity Lagoon Pool", "value": "true" },
          { "@type": "LocationFeatureSpecification", "name": "12+ Acres Contiguous Central Greens", "value": "true" },
          { "@type": "LocationFeatureSpecification", "name": "Sunken Poolside Cabanas & Aqua Lounge", "value": "true" },
          { "@type": "LocationFeatureSpecification", "name": "100% Vehicle-Free Eco Podium", "value": "true" },
          { "@type": "LocationFeatureSpecification", "name": "Full-Sized Squash, Tennis & Badminton Courts", "value": "true" },
          { "@type": "LocationFeatureSpecification", "name": "Ayurvedic Hydrotherapy Spa Suites", "value": "true" },
          { "@type": "LocationFeatureSpecification", "name": "High-Street Retail Promenade & Convenience Arcade", "value": "true" }
        ]
      },
      // 4. Product & Google Shopping / Real Estate Inventory Schema (5-Star Rich Snippet)
      {
        "@type": "Product",
        "@id": `${siteConfig.url}/#product`,
        "name": "Godrej The Retreat Hinjewadi - 2 & 3 BHK Luxury Residences",
        "alternateName": "The Aqua Retreat by Godrej Properties Hinjewadi",
        "image": [
          "https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/aqua-banner-1920x900-01-1-1-cmrnnfkpo000kj2phc4uv4hry.webp"
        ],
        "description": "Premium resort-style 2 & 3 BHK apartments at Godrej The Retreat, Godrej Park World Hinjewadi Phase 1 featuring a 50,000 sq ft clubhouse, 50m Olympic lagoon pool, and European luxury specifications.",
        "sku": "GODREJ-RETREAT-HINJEWADI-2026",
        "mpn": "PM1260002500070",
        "brand": {
          "@type": "Brand",
          "name": "Godrej Properties Pune"
        },
        "offers": {
          "@type": "AggregateOffer",
          "url": siteConfig.url,
          "priceCurrency": "INR",
          "lowPrice": "11000000",
          "highPrice": "25000000",
          "offerCount": "12",
          "availability": "https://schema.org/InStock",
          "priceValidUntil": "2027-12-31",
          "seller": {
            "@id": `${siteConfig.url}/#organization`
          }
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "342",
          "reviewCount": "342"
        }
      },
      // 5. BreadcrumbList Schema (SERP Navigation)
      {
        "@type": "BreadcrumbList",
        "@id": `${siteConfig.url}/#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${siteConfig.url}/`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Godrej The Retreat Hinjewadi",
            "item": `${siteConfig.url}/godrej-the-retreat-hinjewadi`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Godrej Properties Hinjewadi Pune",
            "item": `${siteConfig.url}/godrej-properties-hinjewadi-pune`
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Masterplan",
            "item": `${siteConfig.url}/godrej-park-world-pune-masterplan`
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Residences",
            "item": `${siteConfig.url}/godrej-park-world-pune-luxury-residences`
          }
        ]
      },
      // 6. VideoObject Schema (Google Video Search)
      {
        "@type": "VideoObject",
        "@id": `${siteConfig.url}/#video`,
        "name": "Godrej The Retreat Hinjewadi 360° Virtual Walkthrough & Tour",
        "description": "Experience the 50,000 sq.ft luxury clubhouse, infinity lagoon pool, and resort amenities at Godrej The Retreat, Godrej Park World Hinjewadi Phase 1.",
        "thumbnailUrl": "https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/aqua-banner-1920x900-01-1-1-cmrnnfkpo000kj2phc4uv4hry.webp",
        "uploadDate": "2026-01-01T00:00:00.000Z",
        "contentUrl": `${siteConfig.url}/#tour`,
        "embedUrl": `${siteConfig.url}/#tour`
      },
      // 7. Comprehensive FAQPage Schema (Google Rich Snippets Accordion)
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.url}/#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Godrej The Retreat Hinjewadi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Godrej The Retreat (also known as The Aqua Retreat) is the flagship ultra-luxury residential cluster within the 100+ acre Godrej Park World township in Hinjewadi Phase 1, Pune. It offers premium 2 and 3 BHK resort-style residences centered around a 50,000 sq.ft 4-level clubhouse, 50m Olympic lagoon pool, and 12+ acres of central greens."
            }
          },
          {
            "@type": "Question",
            "name": "Where is Godrej The Retreat located in Pune?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Godrej The Retreat is located in Hinjewadi Phase 1, Rajiv Gandhi Infotech Park, Pune, Maharashtra 411057. It offers zero-bridge connectivity to Infosys Circle, Wipro Campus, TCS, and the upcoming Hinjewadi Metro Line 3 station (2 minutes away)."
            }
          },
          {
            "@type": "Question",
            "name": "What is the starting price for 2 BHK and 3 BHK at Godrej The Retreat Hinjewadi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "At Godrej The Retreat Hinjewadi, premium 2 BHK luxury apartments start at approximately ₹1.10 Crore* (750 - 820 sq.ft), while ultra-luxury 3 BHK residences start at ₹1.65 Crore* to ₹2.50 Crore* (1060 - 1250 sq.ft) with expansive balcony decks."
            }
          },
          {
            "@type": "Question",
            "name": "What is the MahaRERA registration number for Godrej The Retreat Hinjewadi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Godrej The Retreat (The Aqua Retreat) is registered under MahaRERA registration number PM1260002500070. All project documents, sanctioned plans, and quarterly updates are verifiable on the official MahaRERA website at maharera.mahaonline.gov.in."
            }
          },
          {
            "@type": "Question",
            "name": "What lifestyle amenities are provided at Godrej The Retreat Hinjewadi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Key amenities at Godrej The Retreat include a 50,000 sq.ft multi-tier clubhouse, a 50m Olympic-length lagoon pool, sunken poolside cabanas, Ayurvedic hydrotherapy spa, indoor badminton and squash courts, gymnasium, jogging tracks, and 12+ acres of contiguous central greens."
            }
          },
          {
            "@type": "Question",
            "name": "Why is Godrej The Retreat the best real estate investment in Pune West?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "With 7.2% to 8.0% expected rental yield, massive IT employment demand across Hinjewadi Phase 1, upcoming Pune Metro Line 3, and integrated 100+ acre township appreciation, Godrej The Retreat delivers superior ROI compared to standalone buildings in Wakad and Baner."
            }
          }
        ]
      }
    ]
  };

  return (
    <html lang="en" className={`${outfit.variable} ${syne.variable}`}>
      <head>
        <link rel="preconnect" href="https://gplwebsitecdnblob.blob.core.windows.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://gplwebsitecdnblob.blob.core.windows.net" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(unifiedGraphSchema)
          }}
        />
      </head>
      <body className="antialiased bg-luxury-dark text-luxury-light selection:bg-emerald-aqua selection:text-gray-900">
        <PWAInit />
        <ModalProvider>
          <SmoothScroller>
            <CustomCursor />
            <Navbar />
            <SmartHUD />
            <main className="relative flex flex-col w-full min-h-screen overflow-x-clip">
              {children}
            </main>
            <FloatingCTA />
            <AIChatbot />
            <ExitIntentModal />
            <EnquiryModal />
            <MobileTabBar />
          </SmoothScroller>
        </ModalProvider>
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
      </body>
    </html>
  );
}
