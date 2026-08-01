import fitz  # PyMuPDF
import os

pdf_path = "/Users/vikasyewle/.gemini/antigravity/brain/d7d02050-9fef-4fe0-b6b3-d5c9c7822bb8/.user_uploaded/media__1785522687494.pdf"
output_dir = "/Users/vikasyewle/Documents/godrejparkworld/public/images/brochure"

os.makedirs(output_dir, exist_ok=True)

doc = fitz.open(pdf_path)

for i in range(len(doc)):
    page = doc[i]
    image_list = page.get_images()
    
    if image_list:
        print(f"Found {len(image_list)} images on page {i}")
        for image_index, img in enumerate(image_list, start=1):
            xref = img[0]
            pix = fitz.Pixmap(doc, xref)
            
            # Save only if it's RGB or GRAY (prevent CMYK errors and tiny logos)
            if pix.width > 200 and pix.height > 200:
                if pix.n - pix.alpha < 4:
                    pix.save(f"{output_dir}/page_{i+1}_img_{image_index}.png")
                else:
                    # Convert CMYK to RGB
                    pix1 = fitz.Pixmap(fitz.csRGB, pix)
                    pix1.save(f"{output_dir}/page_{i+1}_img_{image_index}.png")
                    pix1 = None
            pix = None

print("Extraction complete.")
