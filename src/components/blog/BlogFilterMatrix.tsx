"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/data/blog';
import { Search, Sparkles, BookOpen, Clock, ArrowRight } from 'lucide-react';

interface BlogFilterMatrixProps {
  posts: BlogPost[];
}

type CategoryFilter = 'all' | 'deep-dives' | 'pune-market' | 'nri-playbooks' | 'godrej-legacy';

export default function BlogFilterMatrix({ posts }: BlogFilterMatrixProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Helper to classify post into category based on slug / keywords
  const getPostCategory = (post: BlogPost): CategoryFilter => {
    const s = post.slug.toLowerCase();
    const k = post.keywords.join(' ').toLowerCase();

    if (s.includes('nri') || k.includes('nri') || s.includes('fema')) {
      return 'nri-playbooks';
    }
    if (s.includes('vs-competitors') || s.includes('aqua-retreat-hinjewadi') || s.includes('50000-sqft') || s.includes('2bhk-vs-3bhk')) {
      return 'deep-dives';
    }
    if (s.includes('portfolio') || s.includes('legacy') || s.includes('construction-quality') || s.includes('rera')) {
      return 'godrej-legacy';
    }
    return 'pune-market';
  };

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory = 
        activeCategory === 'all' || getPostCategory(post) === activeCategory;

      const matchesSearch = 
        searchQuery === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.keywords.some(kw => kw.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [posts, activeCategory, searchQuery]);

  const featuredPost = posts[0];

  return (
    <div className="w-full">
      
      {/* Featured Pillar Article Hero Card */}
      {featuredPost && activeCategory === 'all' && searchQuery === '' && (
        <div className="mb-16">
          <div className="flex items-center gap-2 text-emerald-aqua uppercase tracking-[0.3em] text-xs font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Featured Pillar Authority Deep-Dive</span>
          </div>
          <Link 
            href={`/blog/${featuredPost.slug}`}
            className="group grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#0D0F14] border border-emerald-aqua/20 hover:border-emerald-aqua/50 rounded-3xl overflow-hidden p-6 lg:p-8 transition-all duration-500 shadow-2xl"
          >
            <div className="lg:col-span-7 relative min-h-[300px] lg:min-h-[400px] rounded-2xl overflow-hidden">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-white/20 text-emerald-aqua px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider">
                FLAGSHIP ANALYSIS
              </div>
            </div>
            
            <div className="lg:col-span-5 flex flex-col justify-between py-2">
              <div>
                <div className="flex items-center gap-4 text-gray-400 text-xs mb-4">
                  <span>{new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    12 Min Read
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-white mb-4 leading-tight group-hover:text-emerald-aqua transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-300 text-sm font-light leading-relaxed mb-6">
                  {featuredPost.description}
                </p>
              </div>
              
              <div className="flex items-center gap-2 text-emerald-aqua font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                <span>Read Full Analysis</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        </div>
      )}

      {/* Filter HUD & Keyword Search */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 pb-6 border-b border-white/10">
        
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {[
            { id: 'all', label: `All Insights (${posts.length})` },
            { id: 'deep-dives', label: 'Godrej Park World Deep-Dives' },
            { id: 'pune-market', label: 'Pune Market & ROI Reports' },
            { id: 'nri-playbooks', label: 'NRI Investment Playbooks' },
            { id: 'godrej-legacy', label: 'Godrej Properties Legacy' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as CategoryFilter)}
              className={`px-4 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-emerald-aqua text-gray-950 shadow-lg'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Live Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search keywords, ROI, metro..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-full pl-11 pr-4 py-2.5 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-emerald-aqua/50 transition-colors"
          />
        </div>
      </div>

      {/* Blog Cards Grid */}
      {filteredPosts.length === 0 ? (
        <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/10">
          <BookOpen className="w-12 h-12 text-gray-500 mx-auto mb-4" />
          <h3 className="text-xl font-serif text-white mb-2">No matching articles found</h3>
          <p className="text-gray-400 text-sm font-light">
            Try adjusting your category filter or search keywords.
          </p>
          <button
            onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
            className="mt-6 text-emerald-aqua text-xs uppercase tracking-widest font-semibold underline hover:text-white transition-colors"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col justify-between rounded-3xl overflow-hidden bg-[#0D0F14] border border-white/10 hover:border-emerald-aqua/40 p-6 transition-all duration-500 shadow-xl hover:shadow-2xl"
            >
              <div>
                <div className="relative w-full h-56 rounded-2xl overflow-hidden mb-6">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md border border-white/20 text-gray-200 px-3 py-1 rounded-full text-[10px] font-medium tracking-wider">
                    {getPostCategory(post).replace('-', ' ').toUpperCase()}
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-400 text-xs mb-3">
                  <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  <span>•</span>
                  <span>{post.content.length > 2000 ? '10 Min Read' : '5 Min Read'}</span>
                </div>

                <h3 className="text-xl font-serif text-white mb-3 line-clamp-2 group-hover:text-emerald-aqua transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-400 text-xs font-light line-clamp-3 leading-relaxed mb-6">
                  {post.description}
                </p>
              </div>

              <div className="flex items-center gap-2 text-emerald-aqua text-xs uppercase tracking-widest font-semibold group-hover:translate-x-2 transition-transform duration-300 pt-4 border-t border-white/5">
                <span>Read Insight</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>
      )}

    </div>
  );
}
