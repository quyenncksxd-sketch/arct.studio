from PIL import Image

def crop_bottom_text(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    width, height = img.size
    
    # Calculate alpha sum for each row
    row_alphas = [sum(img.getpixel((x, y))[3] for x in range(width)) for y in range(height)]
    
    # Find the y-coordinate that separates the top logo and bottom text.
    # We look for a large block of 0 alpha (or very low alpha) in the middle of the image.
    start_y = 0
    # First, find the end of the top symbol.
    # Start from 20% height, go down until we hit a gap.
    in_symbol = True
    gap_y = int(height * 0.5) # Fallback to middle if not found
    
    for y in range(int(height * 0.1), height):
        if row_alphas[y] == 0:
            if in_symbol:
                in_symbol = False
                # Start of the gap
        else:
            if not in_symbol:
                # End of the gap, start of text!
                gap_y = y - 5 # Give a little padding
                break
                
    # If the gap wasn't found properly, gap_y is still height*0.5
    
    # Crop the image from gap_y to bottom
    box = (0, gap_y, width, height)
    cropped_img = img.crop(box)
    
    # Trim any remaining transparent space
    bbox = cropped_img.getbbox()
    if bbox:
        cropped_img = cropped_img.crop(bbox)
        
    cropped_img.save(output_path, "PNG")
    print(f"Cropped image saved to {output_path}. Cropped at Y: {gap_y}")

if __name__ == "__main__":
    crop_bottom_text("assets/images/hero-logo-white.png", "assets/images/hero-text-only-white.png")
