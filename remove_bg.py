from PIL import Image

def remove_white_bg(input_path, output_path, fuzz=235):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()

    newData = []
    for item in datas:
        # white background threshold
        if item[0] > fuzz and item[1] > fuzz and item[2] > fuzz:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)

    img.putdata(newData)
    img.save(output_path, "PNG")
    print("Saved transparent image to", output_path)

import sys

if __name__ == "__main__":
    if len(sys.argv) == 3:
        input_file = sys.argv[1]
        output_file = sys.argv[2]
        remove_white_bg(input_file, output_file, fuzz=240)
    else:
        print("Usage: python remove_bg.py <input> <output>")
