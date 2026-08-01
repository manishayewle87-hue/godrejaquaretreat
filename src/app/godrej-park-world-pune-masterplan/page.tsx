import type { Metadata } from "next";
import PageContent from "@/components/layout/PageContent";

export const metadata: Metadata = {
  title: "Interactive Master Plan | Godrej Park World Pune",
  description: "Explore the 12+ acres of central greens and premium amenities on the interactive master plan of Godrej Park World, Hinjewadi Phase 1.",
  keywords: ["Godrej Park World Master Plan", "Aqua Retreat Master Plan", "Godrej Park World Central Greens", "Township in Hinjewadi", "Premium Township Pune", "Godrej Park World Township", "Integrated Township Pune", "Green Township Pune"],
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FAFAFA] selection:bg-emerald-aqua/30 selection:text-white pt-24">
      <PageContent />
    </main>
  );
}
