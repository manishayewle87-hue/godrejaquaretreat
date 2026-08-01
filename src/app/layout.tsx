import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import SmoothScroller from "@/components/layout/SmoothScroller";
import FloatingCTA from "@/components/ui/FloatingCTA";
import CustomCursor from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  metadataBase: new URL("https://godrejaquaretreat.godrejparkworld.com"),
  alternates: {
    canonical: "/",
  },
  title: "The Aqua Retreat at Godrej Park World Hinjewadi | Godrej Properties Pune",
  description: "Explore Godrej Park World in Hinjewadi Phase 1. Discover our flagship cluster, The Aqua Retreat, featuring premium 2 & 3 BHK resort-style luxury residences in Pune's massive Godrej Township.",
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
    title: "The Aqua Retreat by Godrej Properties Hinjewadi",
    description: "Experience The Aqua Retreat by Godrej Properties Hinjewadi. Discover the finest Godrej Properties Pune projects, featuring premium 2 & 3 BHK resort-style luxury residences in Hinjewadi Phase 1.",
    url: "https://godrejaquaretreat.godrejparkworld.com",
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
    "geo.position": "18.5913;73.7389",
    "ICBM": "18.5913, 73.7389"
  },
  verification: {
    google: "0wrEaGVPHBj6OBUSf4IwT6iOuQejVAt1WvxZgKIS7co",
  }
};

import { Outfit, Syne } from 'next/font/google';
import { ModalProvider } from "@/context/ModalContext";
import EnquiryModal from "@/components/ui/EnquiryModal";
import SmartHUD from "@/components/layout/SmartHUD";
import PWAInit from "@/components/ui/PWAInit";

const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '500', '600'], variable: '--font-outfit' });
const syne = Syne({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], variable: '--font-syne' });

import { GoogleAnalytics } from '@next/third-parties/google';

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
              "url": "https://godrejaquaretreat.godrejparkworld.com/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://godrejaquaretreat.godrejparkworld.com/?q={search_term_string}",
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
              "@id": "https://godrejaquaretreat.godrejparkworld.com/",
              "url": "https://godrejaquaretreat.godrejparkworld.com/",
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
                "latitude": 18.5913,
                "longitude": 73.7389
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
                  "item": "https://godrejaquaretreat.godrejparkworld.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Masterplan",
                  "item": "https://godrejaquaretreat.godrejparkworld.com/godrej-park-world-pune-masterplan"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Luxury Residences",
                  "item": "https://godrejaquaretreat.godrejparkworld.com/godrej-park-world-pune-luxury-residences"
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
            <EnquiryModal />
          </SmoothScroller>
        </ModalProvider>
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  );
}
