import os
import glob

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Replacements for Light Theme
    replacements = {
        'bg-[#05080a]': 'bg-[#FAFAFA]',
        'bg-[#0a0f14]': 'bg-[#F5F5F0]',
        'text-white': 'text-gray-900',
        'text-gray-400': 'text-gray-600',
        'text-gray-300': 'text-gray-700',
        'border-white/5': 'border-black/5',
        'border-white/10': 'border-black/10',
        'border-white/20': 'border-black/20',
        'border-white/30': 'border-black/30',
        'bg-white/5': 'bg-black/5',
        'bg-white/10': 'bg-black/10',
        'text-luxury-light': 'text-luxury-light', # Keep as is, it's remapped in globals
        'text-luxury-dark': 'text-luxury-dark', # Keep as is, it's remapped in globals
    }

    new_content = content
    for old, new in replacements.items():
        new_content = new_content.replace(old, new)

    if new_content != content:
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

if __name__ == "__main__":
    files = glob.glob('src/components/**/*.tsx', recursive=True)
    for f in files:
        process_file(f)
