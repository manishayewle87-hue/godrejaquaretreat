import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import SmoothScroller from "@/components/layout/SmoothScroller";
import FloatingCTA from "@/components/ui/FloatingCTA";
import CustomCursor from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  title: "Godrej Park World | The Aqua Retreat by Godrej Properties Pune",
  description: "Discover the finest of Godrej Properties Pune projects. Experience resort-style living at Godrej Park World, Hinjewadi Phase 1, featuring premium 2 & 3 BHK residences and expansive waterscapes.",
  keywords: ["Godrej Properties Pune", "Godrej Properties Pune Projects", "Godrej Park World", "Godrej Park World Pune", "Godrej Park World Hinjewadi", "The Aqua Retreat", "Luxury Real Estate Pune", "2 BHK", "3 BHK", "Resort-style living"],
  openGraph: {
    title: "Godrej Park World | The Aqua Retreat by Godrej Properties Pune",
    description: "Discover the finest of Godrej Properties Pune projects. Experience resort-style living at Godrej Park World, Hinjewadi Phase 1.",
    url: "https://godrejparkworld-aqua.com",
    siteName: "Godrej Park World Pune",
    images: [
      {
        url: "https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/aqua-banner-1920x900-01-1-1-cmrnnfkpo000kj2phc4uv4hry.webp",
        width: 1920,
        height: 900,
        alt: "Godrej Park World by Godrej Properties Pune",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Godrej Park World | The Aqua Retreat by Godrej Properties Pune",
    description: "Discover the finest of Godrej Properties Pune projects at Godrej Park World, Hinjewadi Phase 1.",
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
      <body className="antialiased bg-luxury-dark text-luxury-light selection:bg-emerald-aqua selection:text-gray-900 overflow-x-hidden">
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
