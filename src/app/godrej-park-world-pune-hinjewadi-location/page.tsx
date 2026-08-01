import type { Metadata } from "next";
import PageContent from "@/components/layout/PageContent";

export const metadata: Metadata = {
  title: "Location Map | Godrej Park World Hinjewadi Phase 1",
  description: "Godrej Park World offers unparalleled connectivity to Rajiv Gandhi IT Park, Mumbai-Pune Expressway, and top lifestyle destinations.",
  keywords: ["Hinjewadi Phase 1", "Maan Road", "Rajiv Gandhi Infotech Park", "Pune IT Hub", "Wakad", "Baner", "Near Infosys", "Near TCS", "Near Wipro", "Near Hinjewadi Metro", "Near Phoenix Mall", "IT Corridor Investment"],
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FAFAFA] selection:bg-emerald-aqua/30 selection:text-white pt-24">
      <PageContent />
    </main>
  );
}
