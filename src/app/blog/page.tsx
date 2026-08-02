import { Metadata } from "next";
import { BLOG_POSTS } from "@/data/blog";
import BlogFilterMatrix from "@/components/blog/BlogFilterMatrix";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Real Estate Insights, Deep-Dives & Investment Playbooks | Godrej Park World Pune",
  description: "Read ultra-advanced analytical reports, Pune Metro Line 3 impact guides, NRI FEMA playbooks, and architectural reviews of Godrej Park World and The Aqua Retreat.",
  keywords: [
    "Pune Real Estate Blog",
    "Godrej Park World Review",
    "The Aqua Retreat Hinjewadi",
    "Godrej Properties Pune News",
    "Hinjewadi Investment Guide 2026",
    "NRI Property Buy India"
  ],
  alternates: {
    canonical: "https://godrejaquaretreat.godrejparkworld.com/blog",
  }
};

export default function BlogIndexPage() {
  return (
    <>
      <main className="min-h-screen pt-32 pb-24 bg-[#0A0B0E] text-white selection:bg-emerald-aqua/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          
          <div className="mb-12">
            <span className="text-emerald-aqua uppercase tracking-[0.4em] text-xs font-semibold mb-4 block">
              Godrej Properties Pune • Authorised Partner Knowledge Hub
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6">
              Real Estate Intelligence.
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl font-light leading-relaxed">
              Exhaustive architectural deep-dives, empirical Pune IT corridor rental reports, and NRI investment playbooks for Godrej Park World Hinjewadi.
            </p>
          </div>

          <BlogFilterMatrix posts={BLOG_POSTS} />

        </div>
      </main>
      <Footer />
    </>
  );
}
