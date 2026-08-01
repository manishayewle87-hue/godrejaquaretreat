import type { Metadata } from "next";
import PageContent from "@/components/layout/PageContent";

export const metadata: Metadata = {
  title: "Premium 2 & 3 BHK Residences | Godrej Park World Pune",
  description: "Discover ultra-luxury 2 & 3 BHK apartments at Godrej Park World, Hinjewadi Phase 1. Designed for elegance, clarity, and calm.",
  keywords: ["1 BHK Hinjewadi", "2 BHK Hinjewadi", "3 BHK Hinjewadi", "Luxury 2 BHK Pune", "Luxury 3 BHK Pune", "Premium Apartments Pune", "Aqua Retreat 2 BHK", "Aqua Retreat 3 BHK", "Godrej Park World Apartments", "Smart Homes Pune", "Buy Flat Pune", "Buy Apartment Hinjewadi", "New Launch Apartments Pune"],
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FAFAFA] selection:bg-emerald-aqua/30 selection:text-white pt-24">
      <PageContent />
    </main>
  );
}
