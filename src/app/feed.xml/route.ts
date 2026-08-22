import { BLOG_POSTS } from "@/data/blog";
import { siteConfig } from "@/config/site";

export const runtime = 'edge';

export async function GET() {
  const baseUrl = siteConfig.url;
  const buildDate = new Date().toUTCString();

  const itemsXml = BLOG_POSTS.map((post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author><![CDATA[sales@godrejparkworld.com (Godrej Properties Pune)]]></author>
      <category><![CDATA[Real Estate Intelligence]]></category>
      <enclosure url="${post.image}" type="image/webp" length="0" />
    </item>
  `).join("");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:sy="http://purl.org/rss/1.0/modules/syndication/"
     xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title><![CDATA[Godrej The Retreat Hinjewadi | Real Estate Market & Project Updates]]></title>
    <link>${baseUrl}</link>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
    <description><![CDATA[Official news, floor plan releases, price breakdowns, and construction updates for Godrej The Retreat (The Aqua Retreat) at Godrej Park World Hinjewadi Phase 1, Pune. MahaRERA PM1260002500070.]]></description>
    <language>en-IN</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <sy:updatePeriod>hourly</sy:updatePeriod>
    <sy:updateFrequency>1</sy:updateFrequency>
    <image>
      <url>https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/aqua-banner-1920x900-01-1-1-cmrnnfkpo000kj2phc4uv4hry.webp</url>
      <title>Godrej The Retreat Hinjewadi</title>
      <link>${baseUrl}</link>
    </image>
    ${itemsXml}
  </channel>
</rss>`;

  return new Response(rssFeed.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate',
    },
  });
}
