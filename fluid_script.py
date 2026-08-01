import os
import glob
import re

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Fluid Architecture Replacements
    # 1. Soften all radii
    new_content = content.replace('rounded-sm', 'rounded-[32px]')
    new_content = new_content.replace('rounded-md', 'rounded-[24px]')
    
    # 2. Add floating shadows instead of harsh borders for major blocks
    # Specifically for the Bento grid in Amenities
    if 'Amenities.tsx' in filepath:
        new_content = new_content.replace('border border-black/10', 'shadow-2xl shadow-black/5 border border-white')
        new_content = new_content.replace('w-40 h-48', 'w-40 h-48 rounded-[24px]')
        new_content = new_content.replace('bg-[#FAFAFA]/80 border border-black/10 rounded-sm', 'bg-white/80 shadow-xl shadow-black/5 rounded-[24px] border border-white')
        
    # Specifically for Specifications accordion
    if 'Specifications.tsx' in filepath:
        new_content = new_content.replace('border-b border-black/10', 'mb-4 bg-white shadow-lg shadow-black/5 rounded-[24px] px-6 border border-black/5')
        new_content = new_content.replace('border-t border-black/10', '') # Remove top border of container

    # For Gallery
    if 'Gallery.tsx' in filepath:
        new_content = new_content.replace('w-[80vw] h-[60vh]', 'w-[80vw] h-[60vh] rounded-[32px] shadow-2xl')
        
    # For Residences
    if 'Residences.tsx' in filepath:
        new_content = new_content.replace('border border-black/10 bg-black/5', 'bg-white shadow-2xl shadow-black/10 rounded-[32px] border border-black/5')
        new_content = new_content.replace('border-black/5 p-8', 'border-black/5 p-8 rounded-[32px] bg-white/50')
        
    if new_content != content:
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

if __name__ == "__main__":
    files = glob.glob('src/components/**/*.tsx', recursive=True)
    for f in files:
        process_file(f)
