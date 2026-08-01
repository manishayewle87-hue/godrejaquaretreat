import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BLOG_POSTS } from "@/data/blog";

export const metadata: Metadata = {
  title: "Real Estate Insights & News | Godrej Park World Pune",
  description: "Read the latest insights, investment guides, and news about Godrej Park World and the Pune real estate market.",
  keywords: ["Pune Real Estate Blog", "Hinjewadi Investment Guide", "Godrej Properties News", "Property Market Pune"]
};

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-4">Real Estate Insights</h1>
          <p className="text-foreground/70 text-lg md:text-xl max-w-2xl">
            Expert analysis, investment guides, and the latest news from the premium real estate market in Pune West.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group block rounded-2xl overflow-hidden glass-dark hover:glass transition-all duration-500 border border-emerald-aqua/10 hover:border-emerald-aqua/30"
            >
              <div className="relative w-full h-64 overflow-hidden">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
              <div className="p-8">
                <p className="text-emerald-aqua text-sm font-medium mb-3">{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                <h2 className="text-2xl font-serif text-luxury-light mb-4 line-clamp-2">{post.title}</h2>
                <p className="text-luxury-light/70 line-clamp-3 mb-6">{post.description}</p>
                <span className="text-emerald-aqua font-medium flex items-center group-hover:translate-x-2 transition-transform duration-300">
                  Read Article <span className="ml-2">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
