import type { Metadata } from "next";
import PageContent from "@/components/layout/PageContent";

export const metadata: Metadata = {
  title: "Aqua Lifestyle | Godrej Properties Pune Projects",
  description: "Immerse yourself in resort-style living at Godrej Park World. Discover an ultra-luxury lifestyle inspired by water in Hinjewadi.",
  keywords: ["Aqua Living", "Resort Living", "Wellness Living", "Water Inspired Living", "Luxury Lifestyle", "Resort Township Pune", "Nature Homes", "Green Living"],
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FAFAFA] selection:bg-emerald-aqua/30 selection:text-white pt-24">
      <PageContent />
    </main>
  );
}
