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
  title: "The Aqua Retreat by Godrej Properties Hinjewadi | Godrej Properties Pune",
  description: "Experience The Aqua Retreat by Godrej Properties Hinjewadi. Discover the finest Godrej Properties Pune projects, featuring premium 2 & 3 BHK resort-style luxury residences in Hinjewadi Phase 1.",
  keywords: [
    "The Aqua Retreat by Godrej Properties Hinjewadi", "Godrej Properties Pune", "Godrej Properties", "Godrej Homes", "Godrej Residential Pune", "Godrej New Launch Pune", 
    "Godrej Premium Homes", "Godrej Luxury Apartments", "Godrej Township Pune", "Godrej Projects Pune", "Godrej Upcoming Projects Pune", 
    "Godrej Under Construction Pune", "Godrej Ready Possession Pune", "Godrej Smart Homes Pune", "Godrej Real Estate Pune",
    "Godrej Park World", "Godrej Park World Pune", "Godrej Park World Hinjewadi", "Godrej Park World Phase 1", 
    "Godrej Park World Township", "Godrej Park World Price", "Godrej Park World Master Plan", "Godrej Park World Brochure",
    "Godrej Park World Location", "Godrej Park World Central Greens", "Godrej Park World Investment",
    "Godrej Aqua Retreat", "The Aqua Retreat", "Aqua Retreat Hinjewadi", "Aqua Retreat Pune", "Godrej Aqua Retreat Pune", 
    "Aqua Retreat Apartments", "Aqua Retreat 2 BHK", "Aqua Retreat 3 BHK", "Aqua Retreat Floor Plan", "Aqua Retreat Amenities", 
    "Aqua Retreat Possession", "Aqua Retreat RERA", "Aqua Retreat Hinjewadi Phase 1",
    "Godrej Aqua Retreat price", "Aqua Retreat booking", "Aqua Retreat EOI", "Godrej Hinjewadi project", 
    "Godrej luxury apartments Pune", "New Godrej project Hinjewadi", "Godrej flats near Infosys", "Godrej apartments near Metro",
    "Buy Flat Pune", "Buy Apartment Hinjewadi", "Buy Home Pune", "Buy Luxury Apartment", "Book Site Visit", "Best Property Pune",
    "Invest in Pune", "Invest in Hinjewadi", "Pune Property Investment", "Rental Income Pune", "Metro Investment Pune"
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
  }
};

import { Outfit, Syne } from 'next/font/google';
import { ModalProvider } from "@/context/ModalContext";
import EnquiryModal from "@/components/ui/EnquiryModal";
import SmartHUD from "@/components/layout/SmartHUD";

const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '500', '600'], variable: '--font-outfit' });
const syne = Syne({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], variable: '--font-syne' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${outfit.variable} ${syne.variable}`}>
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
      <body className="antialiased bg-luxury-dark text-luxury-light selection:bg-emerald-aqua selection:text-gray-900 overflow-x-clip">
        <ModalProvider>
          <SmoothScroller>
            <CustomCursor />
            <Navbar />
            <SmartHUD />
            <main className="relative flex flex-col w-full min-h-screen">
              {children}
            </main>
            <FloatingCTA />
            <EnquiryModal />
          </SmoothScroller>
        </ModalProvider>
      </body>
    </html>
  );
}
