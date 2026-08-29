import { siteConfig } from "@/config/site";

export const runtime = 'edge';

export async function GET() {
  const baseUrl = siteConfig.url;
  const buildDate = new Date().toUTCString();

  const inventory = [
    {
      id: "GTR-AQUA-2BHK-LUX",
      title: "2 BHK Luxury Resort Residence - Godrej The Aqua Retreat Hinjewadi",
      description: "Ultra-luxury 2 BHK apartment with 780 sq.ft carpet area, private sun deck, access to 50,000 sq.ft 4-tier clubhouse and 50m Olympic lagoon pool at Godrej The Aqua Retreat, Hinjewadi Phase 1, Pune. MahaRERA: PM1260002500070.",
      link: `${baseUrl}/godrej-the-aqua-retreat-hinjewadi`,
      image: "https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/overview-1740x810-cmrnngdyo000lj2phcjaf0u8l.webp",
      price: "11000000 INR",
      availability: "in_stock",
      carpetArea: "780 sq.ft",
      bedrooms: "2",
      bathrooms: "2",
      cluster: "The Aqua Retreat"
    },
    {
      id: "GTR-AQUA-2BHK-STUDY",
      title: "2 BHK + Study Luxury Residence - Godrej The Aqua Retreat Hinjewadi",
      description: "Spacious 2 BHK plus dedicated work-from-home study room with 906 sq.ft carpet area and lagoon pool views at Godrej The Aqua Retreat Hinjewadi Phase 1, Pune. MahaRERA: PM1260002500070.",
      link: `${baseUrl}/configurations/godrej-the-retreat-2-bhk-flats-hinjewadi`,
      image: "https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/aqua-banner-1920x900-01-1-1-cmrnnfkpo000kj2phc4uv4hry.webp",
      price: "12800000 INR",
      availability: "in_stock",
      carpetArea: "906 sq.ft",
      bedrooms: "2.5",
      bathrooms: "2",
      cluster: "The Aqua Retreat"
    },
    {
      id: "GTR-AQUA-3BHK-REG",
      title: "3 BHK Regal Resort Residence - Godrej The Aqua Retreat Hinjewadi",
      description: "Premium 3 BHK luxury apartment with 1,180 sq.ft carpet area, expansive double-width sundeck, master suite, and smart home automation at Godrej The Aqua Retreat Hinjewadi Phase 1, Pune. MahaRERA: PM1260002500070.",
      link: `${baseUrl}/godrej-the-aqua-retreat-hinjewadi`,
      image: "https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/aqua-banner-1920x900-01-1-1-cmrnnfkpo000kj2phc4uv4hry.webp",
      price: "16500000 INR",
      availability: "in_stock",
      carpetArea: "1180 sq.ft",
      bedrooms: "3",
      bathrooms: "3",
      cluster: "The Aqua Retreat"
    },
    {
      id: "GTR-AQUA-3BHK-LUX",
      title: "3 BHK Grand Luxe Residence - Godrej The Aqua Retreat Hinjewadi",
      description: "Exclusive corner 3 BHK grand luxe residence with 1,450 sq.ft carpet area overlooking 12+ acres central greens at Godrej Park World Hinjewadi Phase 1, Pune. MahaRERA: PM1260002500070.",
      link: `${baseUrl}/configurations/godrej-the-retreat-3-bhk-luxury-apartments`,
      image: "https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/overview-1740x810-cmrnngdyo000lj2phcjaf0u8l.webp",
      price: "25000000 INR",
      availability: "in_stock",
      carpetArea: "1450 sq.ft",
      bedrooms: "3",
      bathrooms: "3",
      cluster: "The Aqua Retreat"
    },
    {
      id: "GPW-100ACRE-TOWNSHIP",
      title: "Godrej Park World 100+ Acre Township Residences Hinjewadi",
      description: "Master township luxury homes in Pune West's largest integrated township with retail boulevard, Olympic sports, and rapid Pune Metro Line 3 connectivity. MahaRERA: PM1260002500070.",
      link: `${baseUrl}/godrej-park-world-hinjewadi`,
      image: "https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/overview-1740x810-cmrnngdyo000lj2phcjaf0u8l.webp",
      price: "11000000 INR",
      availability: "in_stock",
      carpetArea: "780 - 1450 sq.ft",
      bedrooms: "2, 3 BHK",
      bathrooms: "2, 3",
      cluster: "Godrej Park World"
    }
  ];

  const itemsXml = inventory.map(item => `
    <item>
      <g:id>${item.id}</g:id>
      <g:title><![CDATA[${item.title}]]></g:title>
      <g:description><![CDATA[${item.description}]]></g:description>
      <g:link>${item.link}</g:link>
      <g:image_link>${item.image}</g:image_link>
      <g:brand>Godrej Properties Pune</g:brand>
      <g:condition>new</g:condition>
      <g:availability>${item.availability}</g:availability>
      <g:price>${item.price}</g:price>
      <g:google_product_category>Real Estate &gt; Residential Properties &gt; Apartments</g:google_product_category>
      <g:custom_label_0>${item.cluster}</g:custom_label_0>
      <g:custom_label_1>Hinjewadi Phase 1 Pune</g:custom_label_1>
      <g:custom_label_2>MahaRERA: PM1260002500070</g:custom_label_2>
      <g:custom_label_3>${item.carpetArea}</g:custom_label_3>
      <g:custom_label_4>${item.bedrooms}</g:custom_label_4>
    </item>
  `).join("");

  const feedXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title><![CDATA[Godrej The Aqua Retreat & Godrej Park World Hinjewadi - Real Estate Feed]]></title>
    <link>${baseUrl}</link>
    <description><![CDATA[Official Real Estate product and inventory feed for Godrej The Aqua Retreat and Godrej Park World Hinjewadi Phase 1, Pune. MahaRERA PM1260002500070.]]></description>
    <lastBuildDate>${buildDate}</lastBuildDate>
    ${itemsXml}
  </channel>
</rss>`;

  return new Response(feedXml.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate',
    },
  });
}
