import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import SmoothScroller from "@/components/layout/SmoothScroller";
import FloatingCTA from "@/components/ui/FloatingCTA";
import CustomCursor from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  title: "The Aqua Retreat at Godrej Park World | Ultra-Luxury Residences in Hinjewadi",
  description: "Experience resort-style living at The Aqua Retreat. Premium 2 & 3 BHK residences in Hinjewadi Phase 1, Pune featuring biophilic design and expansive waterscapes.",
  keywords: ["Godrej Park World", "The Aqua Retreat", "Luxury Real Estate Pune", "Hinjewadi Phase 1", "2 BHK", "3 BHK", "Resort-style living"],
  openGraph: {
    title: "The Aqua Retreat at Godrej Park World",
    description: "Experience the pinnacle of resort-style living at Godrej Park World, Hinjewadi.",
    url: "https://godrejparkworld-aqua.com",
    siteName: "The Aqua Retreat",
    images: [
      {
        url: "https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/aqua-banner-1920x900-01-1-1-cmrnnfkpo000kj2phc4uv4hry.webp",
        width: 1920,
        height: 900,
        alt: "The Aqua Retreat Hero View",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Aqua Retreat at Godrej Park World",
    description: "Experience resort-style living at The Aqua Retreat in Hinjewadi Phase 1, Pune.",
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
};

import { ModalProvider } from "@/context/ModalContext";
import EnquiryModal from "@/components/ui/EnquiryModal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600&family=Syne:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-luxury-dark text-luxury-light selection:bg-emerald-aqua selection:text-gray-900">
        <ModalProvider>
          <SmoothScroller>
            <CustomCursor />
            <Navbar />
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
