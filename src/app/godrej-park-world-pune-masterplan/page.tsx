import type { Metadata } from "next";
import InteractiveMasterplan from "@/components/sections/InteractiveMasterplan";

export const metadata: Metadata = {
  title: "Interactive Masterplan | Godrej Park World Pune",
  description: "Explore the 12+ acres of central greens and premium amenities on the interactive masterplan of Godrej Park World, Hinjewadi Phase 1.",
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FAFAFA] selection:bg-emerald-aqua/30 selection:text-white pt-24">
      <InteractiveMasterplan />
    </main>
  );
}
