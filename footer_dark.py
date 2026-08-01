import os

filepath = 'src/components/layout/Footer.tsx'
with open(filepath, 'r') as f:
    content = f.read()

replacements = {
    'bg-luxury-dark': 'bg-[#15181E]',
    'text-gray-900': 'text-white',
    'text-gray-600': 'text-gray-400',
    'border-black/10': 'border-white/10',
    'border-black/20': 'border-white/20',
    'text-luxury-light': 'text-white',
    'hover:text-luxury-dark': 'hover:text-gray-900', # icons
}

new_content = content
for old, new in replacements.items():
    new_content = new_content.replace(old, new)

with open(filepath, 'w') as f:
    f.write(new_content)
print(f"Updated {filepath} to dark mode")
