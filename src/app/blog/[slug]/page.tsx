import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS, getBlogPost } from "@/data/blog";
import Footer from "@/components/layout/Footer";
import StickyCTA from "@/components/ui/StickyCTA";
import dynamic from "next/dynamic";

const Quiz = dynamic(() => import("@/components/sections/Quiz"));

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getBlogPost(resolvedParams.slug);

  if (!post) {
    return { title: "Article Not Found | Godrej Park World" };
  }

  return {
    title: `${post.title} | Godrej Park World Pune`,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://godrejaquaretreat.godrejparkworld.com/blog/${post.slug}`,
      images: [
        {
          url: `https://godrejaquaretreat.godrejparkworld.com/api/og?title=${encodeURIComponent(post.title)}&subtitle=${encodeURIComponent('Godrej Park World Blog')}`,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ],
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`https://godrejaquaretreat.godrejparkworld.com/api/og?title=${encodeURIComponent(post.title)}&subtitle=${encodeURIComponent('Godrej Park World Blog')}`],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getBlogPost(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://godrejaquaretreat.godrejparkworld.com/blog/${post.slug}`
    },
    "headline": post.title,
    "description": post.description,
    "image": [post.image],
    "datePublished": `${post.date}T08:00:00+05:30`,
    "dateModified": `${post.date}T08:00:00+05:30`,
    "author": {
      "@type": "Organization",
      "name": post.author,
      "url": "https://godrejaquaretreat.godrejparkworld.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Godrej Properties Pune",
      "logo": {
        "@type": "ImageObject",
        "url": "https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/aqua-banner-1920x900-01-1-1-cmrnnfkpo000kj2phc4uv4hry.webp"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="min-h-screen pt-32 pb-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          
          <Link href="/blog" className="text-emerald-aqua hover:text-emerald-aqua/80 flex items-center mb-10 transition-colors">
            <span className="mr-2">←</span> Back to Insights
          </Link>

          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center space-x-4 text-foreground/60 mb-10">
              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              <span>•</span>
              <span>By {post.author}</span>
            </div>
            <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12">
              <Image 
                src={post.image} 
                alt={post.title} 
                fill 
                priority
                className="object-cover"
              />
            </div>
          </header>

          <div 
            className="prose prose-lg md:prose-xl prose-headings:font-serif prose-headings:text-foreground prose-p:text-foreground/80 prose-strong:text-emerald-aqua max-w-none mb-24"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <hr className="border-white/10 mb-24" />

        </div>
      </article>

      {/* Dynamic Lead Capture Injection */}
      <section className="pb-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Ready to Explore Godrej Park World?</h2>
          <p className="text-gray-400 font-light">
            Take our 30-second assessment to filter our premium inventory and get a personalized cost sheet.
          </p>
        </div>
        <Quiz />
      </section>

      <StickyCTA />
      <Footer />
    </>
  );
}
