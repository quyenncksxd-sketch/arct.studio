from PIL import Image

def make_white_logo(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()
    
    newData = []
    for item in datas:
        r, g, b, a = item
        if a > 0:
            # Change any visible pixel to white, preserving original transparency (anti-aliasing)
            newData.append((255, 255, 255, a))
        else:
            newData.append((255, 255, 255, 0))
            
    img.putdata(newData)
    
    # Crop to bounding box
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        
    img.save(output_path, "PNG")
    print(f"White logo saved to {output_path}")

if __name__ == "__main__":
    make_white_logo("assets/images/logo.png", "assets/images/hero-logo-white.png")
