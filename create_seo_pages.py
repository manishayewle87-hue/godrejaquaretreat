import os

pages = [
    {
        "slug": "godrej-park-world-pune-masterplan",
        "title": "Interactive Master Plan | Godrej Park World Pune",
        "desc": "Explore the 12+ acres of central greens and premium amenities on the interactive master plan of Godrej Park World, Hinjewadi Phase 1.",
        "keywords": '["Godrej Park World Master Plan", "Aqua Retreat Master Plan", "Godrej Park World Central Greens", "Township in Hinjewadi", "Premium Township Pune", "Godrej Park World Township", "Integrated Township Pune", "Green Township Pune"]'
    },
    {
        "slug": "godrej-park-world-pune-aqua-lifestyle",
        "title": "Aqua Lifestyle | Godrej Properties Pune Projects",
        "desc": "Immerse yourself in resort-style living at Godrej Park World. Discover an ultra-luxury lifestyle inspired by water in Hinjewadi.",
        "keywords": '["Aqua Living", "Resort Living", "Wellness Living", "Water Inspired Living", "Luxury Lifestyle", "Resort Township Pune", "Nature Homes", "Green Living"]'
    },
    {
        "slug": "godrej-park-world-pune-luxury-residences",
        "title": "Premium 2 & 3 BHK Residences | Godrej Park World Pune",
        "desc": "Discover ultra-luxury 2 & 3 BHK apartments at Godrej Park World, Hinjewadi Phase 1. Designed for elegance, clarity, and calm.",
        "keywords": '["1 BHK Hinjewadi", "2 BHK Hinjewadi", "3 BHK Hinjewadi", "Luxury 2 BHK Pune", "Luxury 3 BHK Pune", "Premium Apartments Pune", "Aqua Retreat 2 BHK", "Aqua Retreat 3 BHK", "Godrej Park World Apartments", "Smart Homes Pune", "Buy Flat Pune", "Buy Apartment Hinjewadi", "New Launch Apartments Pune"]'
    },
    {
        "slug": "godrej-park-world-pune-premium-amenities",
        "title": "Ultra-Luxury Amenities | Godrej Park World Pune",
        "desc": "Explore 50,000 sq.ft of world-class amenities at Godrej Park World, including an infinity pool, clubhouse, and floating meditation decks.",
        "keywords": '["Aqua Retreat Amenities", "Aqua Retreat Clubhouse", "Godrej Park World Amenities", "Godrej Park World Clubhouse", "Infinity Pool", "Aqua Gym", "Yoga Deck", "Meditation Garden", "Co Working Space", "Business Lounge"]'
    },
    {
        "slug": "godrej-park-world-pune-hinjewadi-location",
        "title": "Location Map | Godrej Park World Hinjewadi Phase 1",
        "desc": "Godrej Park World offers unparalleled connectivity to Rajiv Gandhi IT Park, Mumbai-Pune Expressway, and top lifestyle destinations.",
        "keywords": '["Hinjewadi Phase 1", "Maan Road", "Rajiv Gandhi Infotech Park", "Pune IT Hub", "Wakad", "Baner", "Near Infosys", "Near TCS", "Near Wipro", "Near Hinjewadi Metro", "Near Phoenix Mall", "IT Corridor Investment"]'
    },
    {
        "slug": "godrej-park-world-pune-gallery",
        "title": "Gallery & Views | Godrej Properties Pune Projects",
        "desc": "View the stunning architecture, expansive waterscapes, and ultra-luxury interiors of Godrej Park World, Pune.",
        "keywords": '["Aqua Retreat Gallery", "Godrej Park World Gallery", "Godrej Park World Walkthrough", "Virtual Tour", "Luxury Lifestyle", "Premium Living", "Club Lifestyle"]'
    }
]

template = """import type {{ Metadata }} from "next";
import PageContent from "@/components/layout/PageContent";

export const metadata: Metadata = {{
  title: "{title}",
  description: "{desc}",
  keywords: {keywords},
}};

export default function Page() {{
  return (
    <main className="flex min-h-screen flex-col bg-[#FAFAFA] selection:bg-emerald-aqua/30 selection:text-white pt-24">
      <PageContent />
    </main>
  );
}}
"""

base_dir = "src/app"

for page in pages:
    dir_path = os.path.join(base_dir, page["slug"])
    os.makedirs(dir_path, exist_ok=True)
    file_path = os.path.join(dir_path, "page.tsx")
    content = template.format(**page)
    with open(file_path, "w") as f:
        f.write(content)
    print(f"Created {file_path}")
