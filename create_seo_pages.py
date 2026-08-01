import os

pages = [
    {
        "slug": "godrej-park-world-pune-masterplan",
        "title": "Interactive Masterplan | Godrej Park World Pune",
        "desc": "Explore the 12+ acres of central greens and premium amenities on the interactive masterplan of Godrej Park World, Hinjewadi Phase 1.",
        "component": "InteractiveMasterplan"
    },
    {
        "slug": "godrej-park-world-pune-aqua-lifestyle",
        "title": "Aqua Lifestyle | Godrej Properties Pune Projects",
        "desc": "Immerse yourself in resort-style living at Godrej Park World. Discover an ultra-luxury lifestyle inspired by water in Hinjewadi.",
        "component": "AquaLifestyle"
    },
    {
        "slug": "godrej-park-world-pune-luxury-residences",
        "title": "Premium 2 & 3 BHK Residences | Godrej Park World Pune",
        "desc": "Discover ultra-luxury 2 & 3 BHK apartments at Godrej Park World, Hinjewadi Phase 1. Designed for elegance, clarity, and calm.",
        "component": "Residences"
    },
    {
        "slug": "godrej-park-world-pune-premium-amenities",
        "title": "Ultra-Luxury Amenities | Godrej Park World Pune",
        "desc": "Explore 50,000 sq.ft of world-class amenities at Godrej Park World, including a lagoon, clubhouse, and floating meditation decks.",
        "component": "Amenities"
    },
    {
        "slug": "godrej-park-world-pune-hinjewadi-location",
        "title": "Location Map | Godrej Park World Hinjewadi Phase 1",
        "desc": "Godrej Park World offers unparalleled connectivity to Rajiv Gandhi IT Park, Mumbai-Pune Expressway, and top lifestyle destinations.",
        "component": "Location"
    },
    {
        "slug": "godrej-park-world-pune-gallery",
        "title": "Gallery & Views | Godrej Properties Pune Projects",
        "desc": "View the stunning architecture, expansive waterscapes, and ultra-luxury interiors of Godrej Park World, Pune.",
        "component": "Gallery"
    }
]

template = """import type {{ Metadata }} from "next";
import PageContent from "@/components/layout/PageContent";

export const metadata: Metadata = {{
  title: "{title}",
  description: "{desc}",
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
