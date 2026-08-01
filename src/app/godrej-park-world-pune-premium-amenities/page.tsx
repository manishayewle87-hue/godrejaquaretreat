import type { Metadata } from "next";
import PageContent from "@/components/layout/PageContent";

export const metadata: Metadata = {
  title: "Ultra-Luxury Amenities | Godrej Park World Pune",
  description: "Explore 50,000 sq.ft of world-class amenities at Godrej Park World, including a lagoon, clubhouse, and floating meditation decks.",
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FAFAFA] selection:bg-emerald-aqua/30 selection:text-white pt-24">
      <PageContent />
    </main>
  );
}
