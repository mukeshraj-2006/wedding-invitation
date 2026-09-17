from PIL import Image
import sys

def remove_checkerboard(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()
    
    newData = []
    
    # The checkerboard in the AI image is composed of light grey and white.
    # We want to identify those colors and make them completely transparent.
    # Any color that has a hint of gold/yellow should be kept.
    
    for item in datas:
        r, g, b, a = item
        
        # Calculate how "grey" a pixel is (difference between color channels)
        color_diff = max(abs(r - g), abs(g - b), abs(r - b))
        
        # Calculate brightness
        brightness = (r + g + b) / 3.0
        
        # The checkerboard is mostly grey/white (low color difference, high brightness)
        # Gold has a higher color difference (more Red/Green than Blue).
        
        if color_diff < 20 and brightness > 150:
            # It's part of the grey/white checkerboard background
            # Make it fully transparent
            newData.append((r, g, b, 0))
        elif color_diff < 40 and brightness > 120:
             # Anti-aliasing / edge blending
             # Calculate an alpha based on how close it is to the grey background
             alpha = int(min(255, (color_diff / 40.0) * 255))
             newData.append((r, g, b, alpha))
        else:
            # It's the gold logo or shadow, keep it completely opaque
            newData.append(item)
            
    img.putdata(newData)
    img.save(output_path, "PNG")
    print(f"Saved flawless transparent image to {output_path}")

if __name__ == "__main__":
    input_file = sys.argv[1]
    output_file = sys.argv[2]
    remove_checkerboard(input_file, output_file)
