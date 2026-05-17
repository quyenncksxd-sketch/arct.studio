import sys
try:
    from PIL import Image
except ImportError:
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image

def remove_black_bg(input_path, output_path):
    # Open the image and convert to RGBA
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()
    
    newData = []
    for item in datas:
        # Get RGB values
        r, g, b, a = item
        
        # Calculate how "black" the pixel is. 
        # Dark teal is approx (0, 48, 45). Black is (0,0,0).
        # We can calculate luminance or just check if it's very dark and lacks color.
        # If r, g, b are all less than 15, it's basically black.
        # Let's make the alpha channel proportional to the distance from black to give smooth edges.
        
        # Max value of G and B to distinguish from black
        color_intensity = max(r, g, b)
        
        if color_intensity < 10:
            # It's pure black or very close
            newData.append((0, 0, 0, 0))
        elif color_intensity < 35:
            # Anti-aliasing edge: partial transparency
            alpha = int((color_intensity - 10) / 25 * 255)
            newData.append((r, g, b, alpha))
        else:
            # It's the dark teal logo
            newData.append((r, g, b, 255))

    img.putdata(newData)
    img.save(output_path, "PNG")
    print(f"Successfully processed logo and saved to {output_path}")

if __name__ == "__main__":
    remove_black_bg("assets/images/logo.png", "assets/images/logo.png")
