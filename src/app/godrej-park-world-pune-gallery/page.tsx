import type { Metadata } from "next";
import PageContent from "@/components/layout/PageContent";

export const metadata: Metadata = {
  title: "Gallery & Views | Godrej Properties Pune Projects",
  description: "View the stunning architecture, expansive waterscapes, and ultra-luxury interiors of Godrej Park World, Pune.",
  keywords: ["Aqua Retreat Gallery", "Godrej Park World Gallery", "Godrej Park World Walkthrough", "Virtual Tour", "Luxury Lifestyle", "Premium Living", "Club Lifestyle"],
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FAFAFA] selection:bg-emerald-aqua/30 selection:text-white pt-24">
      <PageContent />
    </main>
  );
}
