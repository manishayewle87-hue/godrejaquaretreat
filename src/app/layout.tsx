import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import SmoothScroller from "@/components/layout/SmoothScroller";
import FloatingCTA from "@/components/ui/FloatingCTA";
import CustomCursor from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  title: "The Aqua Retreat by Godrej Properties Hinjewadi | Godrej Park World Pune",
  description: "Official Site: The Aqua Retreat at Godrej Park World Hinjewadi Phase 1 by Godrej Properties Pune. Explore 2 & 3 BHK luxury resort apartments, 50,000 sq ft clubhouse & price breakdown. MahaRERA: PM1260002500070.",
  keywords: [
    // --- Core Target Keyword ---
    "The Aqua Retreat by Godrej Properties Hinjewadi", "Godrej Properties Pune", "Godrej Properties", "Godrej Homes",
    
    // --- Aqua Retreat Specifics ---
    "Godrej Park World", "Godrej Park World Pune", "Godrej Park World Hinjewadi", "Godrej Park World Phase 1", 
    "Godrej Park World Township", "Godrej Park World Price", "Godrej Park World Master Plan", "Godrej Park World Brochure",
    "Godrej Park World Location", "Godrej Park World Central Greens", "Godrej Park World Investment",
    "Godrej Aqua Retreat", "The Aqua Retreat", "Aqua Retreat Hinjewadi", "Aqua Retreat Pune", "Godrej Aqua Retreat Pune", 
    "Aqua Retreat Apartments", "Aqua Retreat 2 BHK", "Aqua Retreat 3 BHK", "Aqua Retreat Floor Plan", "Aqua Retreat Amenities", 
    "Aqua Retreat Possession", "Aqua Retreat RERA", "Aqua Retreat Hinjewadi Phase 1", "Godrej Aqua Retreat price", 
    "Aqua Retreat booking", "Aqua Retreat EOI", "Godrej Hinjewadi project",
    
    // --- Godrej Pune Ecosystem ---
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
    
    // --- High ROI & Search Intent ---
    "Top Builders in Pune", "Best Real Estate Developer Pune", "Pune Real Estate Market", "Property Rates in Pune", 
    "Hinjewadi Property Rates", "New Residential Projects Pune", "Upcoming Townships Pune", "Buy 2 BHK Pune", 
    "Buy 3 BHK Pune", "Spacious Homes Pune", "Smart City Pune Properties", "Pune West Real Estate"
  ],
  openGraph: {
    title: "Godrej Park World Hinjewadi | Pune Real Estate Investment | The Aqua Retreat",
    description: "Experience The Aqua Retreat by Godrej Properties. Discover the finest Pune Real Estate projects, featuring premium 2 & 3 BHK resort-style luxury residences in Hinjewadi Phase 1.",
    url: siteConfig.url,
    siteName: "Godrej Properties Pune",
    images: [
      {
        url: "https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/aqua-banner-1920x900-01-1-1-cmrnnfkpo000kj2phc4uv4hry.webp",
        width: 1920,
        height: 900,
        alt: "The Aqua Retreat by Godrej Properties Hinjewadi",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Aqua Retreat by Godrej Properties Hinjewadi",
    description: "Experience The Aqua Retreat by Godrej Properties Hinjewadi. Discover the finest Godrej Properties Pune projects in Hinjewadi Phase 1.",
    images: ["https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/aqua-banner-1920x900-01-1-1-cmrnnfkpo000kj2phc4uv4hry.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Pune",
    "geo.position": "18.5790625;73.7281875",
    "ICBM": "18.5790625, 73.7281875"
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

const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '500', '600'], variable: '--font-outfit' });
const syne = Syne({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], variable: '--font-syne' });

import { GoogleAnalytics } from '@next/third-parties/google';
import WhatsAppWidget from "@/components/ui/WhatsAppWidget";
import StickyCTA from "@/components/ui/StickyCTA";
import MobileTabBar from "@/components/ui/MobileTabBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${syne.variable}`}>
      <head>
        <link rel="preconnect" href="https://gplwebsitecdnblob.blob.core.windows.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://gplwebsitecdnblob.blob.core.windows.net" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "The Aqua Retreat by Godrej Properties Hinjewadi",
              "url": `${siteConfig.url}/`,
              "potentialAction": {
                "@type": "SearchAction",
                "target": `${siteConfig.url}/?q={search_term_string}`,
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Godrej Properties Pune",
              "image": "https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/aqua-banner-1920x900-01-1-1-cmrnnfkpo000kj2phc4uv4hry.webp",
              "@id": `${siteConfig.url}/`,
              "url": `${siteConfig.url}/`,
              "telephone": "+917744009295",
              "priceRange": "Premium",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Godrej Park World, Hinjewadi Phase 1",
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
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "09:00",
                "closes": "19:00"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
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
                  "name": "Masterplan",
                  "item": `${siteConfig.url}/godrej-park-world-pune-masterplan`
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Luxury Residences",
                  "item": `${siteConfig.url}/godrej-park-world-pune-luxury-residences`
                }
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Where is Godrej Park World located?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Godrej Park World is located in Hinjewadi Phase 1, Pune, Maharashtra. It offers excellent connectivity to the Rajiv Gandhi Infotech Park and the upcoming Hinjewadi Metro Station."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is The Aqua Retreat?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The Aqua Retreat is the flagship ultra-luxury residential cluster within the Godrej Park World township in Hinjewadi, offering premium 2 and 3 BHK resort-style apartments with a 50,000 sq.ft clubhouse."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is Godrej Park World a good investment?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, investing in Godrej Park World Hinjewadi is highly lucrative due to its proximity to the IT corridor, ensuring high rental yields and strong capital appreciation in Pune West."
                  }
                }
              ]
            })
          }}
        />
        {/* --- Phase 26: Google.com Rich Snippets (ApartmentComplex & AggregateRating) --- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ApartmentComplex",
              "name": "The Aqua Retreat at Godrej Park World Hinjewadi",
              "description": "2 & 3 BHK Resort-Style Luxury Residences in Hinjewadi Phase 1, Pune by Godrej Properties.",
              "url": siteConfig.url,
              "image": "https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/aqua-banner-1920x900-01-1-1-cmrnnfkpo000kj2phc4uv4hry.webp",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Godrej Park World, Hinjewadi Phase 1",
                "addressLocality": "Pune",
                "addressRegion": "MH",
                "postalCode": "411057",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 18.5913,
                "longitude": 73.7389
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "bestRating": "5",
                "ratingCount": "142",
                "reviewCount": "142"
              },
              "offers": {
                "@type": "AggregateOffer",
                "priceCurrency": "INR",
                "lowPrice": "11000000",
                "highPrice": "25000000",
                "offerCount": "12",
                "availability": "https://schema.org/InStock"
              }
            })
          }}
        />
        {/* --- Phase 26: Google.com VideoObject Schema --- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VideoObject",
              "name": "The Aqua Retreat at Godrej Park World Hinjewadi - Cinematic Masterplan Preview",
              "description": "Explore the 12+ acres of central greens, 50,000 sq ft luxury clubhouse, and resort-style 2 & 3 BHK residences at Godrej Park World Hinjewadi Phase 1.",
              "thumbnailUrl": [
                "https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/aqua-banner-1920x900-01-1-1-cmrnnfkpo000kj2phc4uv4hry.webp"
              ],
              "uploadDate": "2026-01-15T08:00:00+05:30",
              "duration": "PT2M30S",
              "contentUrl": `${siteConfig.url}/#tour`,
              "embedUrl": `${siteConfig.url}/#tour`
            })
          }}
        />
        {/* --- Phase 26: Google.com Event Schema --- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              "name": "Godrej Park World Private Site Preview & Masterplan Showcase",
              "startDate": "2026-08-10T10:00:00+05:30",
              "endDate": "2026-08-31T18:00:00+05:30",
              "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
              "eventStatus": "https://schema.org/EventScheduled",
              "location": {
                "@type": "Place",
                "name": "Godrej Park World Experience Center",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Hinjewadi Phase 1",
                  "addressLocality": "Pune",
                  "postalCode": "411057",
                  "addressRegion": "MH",
                  "addressCountry": "IN"
                }
              },
              "description": "Exclusive private site tour and masterplan walkthrough for The Aqua Retreat at Godrej Park World Hinjewadi.",
              "organizer": {
                "@type": "Organization",
                "name": "Godrej Properties Pune",
                "url": siteConfig.url
              }
            })
          }}
        />
        {/* --- Google SERP Rank #1 FAQPage Schema --- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is the starting price of 2 & 3 BHK apartments at The Aqua Retreat by Godrej Properties Hinjewadi?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The Aqua Retreat at Godrej Park World Hinjewadi Phase 1 offers premium 2 BHK apartments starting at ₹1.10 Cr* and luxury 3 BHK residences starting at ₹1.55 Cr*, featuring European fittings and Aman-resort inspired architecture."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the MahaRERA Registration Number for Godrej Park World Hinjewadi?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The Aqua Retreat at Godrej Park World is officially registered under MahaRERA registration number PM1260002500070, verifiable on maharera.mahaonline.gov.in."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Where is Godrej Park World located in Pune?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Godrej Park World is located in Hinjewadi Phase 1, Pune West, just 5 minutes from Wipro Circle and Rajiv Gandhi Infotech Park, with direct connectivity to Pune Metro Line 3."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are the key resort amenities at The Aqua Retreat Hinjewadi?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The project features a 50,000 sq. ft. 4-level resort clubhouse, a 50-meter Olympic-length infinity lagoon pool, sunken poolside cabanas, Ayurvedic spa suites, and 100% vehicle-free podiums."
                  }
                }
              ]
            })
          }}
        />
        {/* --- Google SERP Rank #1 BreadcrumbList Schema --- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": siteConfig.url
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Pune Real Estate",
                  "item": `${siteConfig.url}/#about`
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Hinjewadi Phase 1",
                  "item": `${siteConfig.url}/#location`
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Godrej Park World - The Aqua Retreat",
                  "item": `${siteConfig.url}/clusters/the-aqua-retreat`
                }
              ]
            })
          }}
        />
        {/* --- Google SERP Rank #1 Product & Residence Schema (Star Rating + Price Range) --- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "The Aqua Retreat by Godrej Properties Hinjewadi - 2 & 3 BHK Luxury Residences",
              "image": [
                "https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/aqua-banner-1920x900-01-1-1-cmrnnfkpo000kj2phc4uv4hry.webp"
              ],
              "description": "Premium resort-style 2 & 3 BHK apartments at Godrej Park World Hinjewadi Phase 1 featuring a 50,000 sq ft clubhouse, 50m Olympic lagoon pool, and European specifications.",
              "sku": "GPW-AQUA-01",
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
                "validFrom": "2026-01-01"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "bestRating": "5",
                "ratingCount": "142",
                "reviewCount": "142"
              }
            })
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
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  );
}
