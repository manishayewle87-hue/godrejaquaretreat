import os
import re

components_dir = 'src/components/sections'

for filename in os.listdir(components_dir):
    if not filename.endswith('.tsx'):
        continue
    filepath = os.path.join(components_dir, filename)
    with open(filepath, 'r') as f:
        content = f.read()

    if '<img ' in content:
        # Add import if missing
        if 'import Image from "next/image"' not in content and "import Image from 'next/image'" not in content:
            content = content.replace('import {', "import Image from 'next/image';\nimport {", 1)

        # Replace <img> with <Image>
        # We need to find all <img ...> or <img ... />
        # and ensure it has `fill` added if not present.
        def replacer(match):
            tag = match.group(0)
            tag = tag.replace('<img ', '<Image fill ')
            if not tag.endswith('/>'):
                tag = tag.replace('>', ' />') # Ensure it's self-closing since Next.js Image requires it
            return tag
            
        content = re.sub(r'<img\s+[^>]+>', replacer, content)

        with open(filepath, 'w') as f:
            f.write(content)
        print(f"Updated {filename}")
