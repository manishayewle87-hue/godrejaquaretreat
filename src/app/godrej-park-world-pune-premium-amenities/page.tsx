import type { Metadata } from "next";
import PageContent from "@/components/layout/PageContent";

export const metadata: Metadata = {
  title: "Ultra-Luxury Amenities | Godrej Park World Pune",
  description: "Explore 50,000 sq.ft of world-class amenities at Godrej Park World, including an infinity pool, clubhouse, and floating meditation decks.",
  keywords: ["Aqua Retreat Amenities", "Aqua Retreat Clubhouse", "Godrej Park World Amenities", "Godrej Park World Clubhouse", "Infinity Pool", "Aqua Gym", "Yoga Deck", "Meditation Garden", "Co Working Space", "Business Lounge"],
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FAFAFA] selection:bg-emerald-aqua/30 selection:text-white pt-24">
      <PageContent />
    </main>
  );
}
