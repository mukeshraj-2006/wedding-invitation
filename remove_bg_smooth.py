from PIL import Image
import sys

def remove_white_bg_smooth(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()

    newData = []
    for item in datas:
        r, g, b, a = item
        
        # Distance from perfect white (255, 255, 255)
        dist_from_white = ((255 - r)**2 + (255 - g)**2 + (255 - b)**2)**0.5
        
        if dist_from_white < 30:
            # Very close to white, make it fully transparent
            alpha = int((dist_from_white / 30.0) * 255)
            newData.append((r, g, b, alpha))
        elif dist_from_white < 80:
             # Semi-transparent edge blending for smooth anti-aliasing
             alpha = int(min(255, 255 * (dist_from_white / 60.0)))
             newData.append((r, g, b, alpha))
        else:
            newData.append(item)

    img.putdata(newData)
    img.save(output_path, "PNG")
    print(f"Saved smooth transparent image to {output_path}")

if __name__ == "__main__":
    input_file = sys.argv[1]
    output_file = sys.argv[2]
    remove_white_bg_smooth(input_file, output_file)
