import { siteConfig } from "@/config/site";

export const runtime = 'edge';

export async function GET() {
  const baseUrl = siteConfig.url;
  const buildDate = new Date().toUTCString();

  const inventory = [
    {
      id: "GTR-2BHK-LUX",
      title: "2 BHK Luxury Resort Residence - Godrej The Retreat Hinjewadi",
      description: "Ultra-luxury 2 BHK apartment with 780 sq.ft carpet area, private deck, access to 50,000 sq.ft clubhouse and Olympic lagoon pool at Godrej The Retreat, Hinjewadi Phase 1, Pune. MahaRERA: PM1260002500070.",
      link: `${baseUrl}/configurations/godrej-the-retreat-2-bhk-flats-hinjewadi`,
      image: "https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/overview-1740x810-cmrnngdyo000lj2phcjaf0u8l.webp",
      price: "11000000 INR",
      availability: "in_stock",
      carpetArea: "780 sq.ft",
      bedrooms: "2",
      bathrooms: "2",
    },
    {
      id: "GTR-3BHK-REG",
      title: "3 BHK Regal Resort Residence - Godrej The Retreat Hinjewadi",
      description: "Spacious 3 BHK luxury apartment with 1,180 sq.ft carpet area, panoramic greens view, and smart home automation at Godrej The Retreat, Hinjewadi Phase 1, Pune. MahaRERA: PM1260002500070.",
      link: `${baseUrl}/configurations/godrej-the-retreat-3-bhk-luxury-apartments`,
      image: "https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/aqua-banner-1920x900-01-1-1-cmrnnfkpo000kj2phc4uv4hry.webp",
      price: "16500000 INR",
      availability: "in_stock",
      carpetArea: "1180 sq.ft",
      bedrooms: "3",
      bathrooms: "3",
    },
    {
      id: "GTR-3BHK-LUX",
      title: "3 BHK Grand Luxe Residence - Godrej The Retreat Hinjewadi",
      description: "Exclusive corner 3 BHK luxury residence with expansive balconies overlooking 12+ acres central greens at Godrej The Retreat, Hinjewadi Phase 1, Pune. MahaRERA: PM1260002500070.",
      link: `${baseUrl}/configurations/godrej-the-retreat-3-bhk-luxury-apartments`,
      image: "https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/overview-1740x810-cmrnngdyo000lj2phcjaf0u8l.webp",
      price: "25000000 INR",
      availability: "in_stock",
      carpetArea: "1450 sq.ft",
      bedrooms: "3",
      bathrooms: "3",
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
      <g:custom_label_0>Godrej The Retreat</g:custom_label_0>
      <g:custom_label_1>Hinjewadi Phase 1 Pune</g:custom_label_1>
      <g:custom_label_2>MahaRERA: PM1260002500070</g:custom_label_2>
      <g:custom_label_3>${item.carpetArea}</g:custom_label_3>
      <g:custom_label_4>${item.bedrooms} BHK</g:custom_label_4>
    </item>
  `).join("");

  const feedXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title><![CDATA[Godrej The Retreat Hinjewadi - Real Estate Inventory Feed]]></title>
    <link>${baseUrl}</link>
    <description><![CDATA[Official Real Estate product and inventory feed for Godrej The Retreat at Godrej Park World Hinjewadi Phase 1, Pune. MahaRERA PM1260002500070.]]></description>
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
