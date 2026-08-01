import type { Metadata } from "next";
import Gallery from "@/components/sections/Gallery";

export const metadata: Metadata = {
  title: "Gallery & Views | Godrej Properties Pune Projects",
  description: "View the stunning architecture, expansive waterscapes, and ultra-luxury interiors of Godrej Park World, Pune.",
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FAFAFA] selection:bg-emerald-aqua/30 selection:text-white pt-24">
      <Gallery />
    </main>
  );
}
