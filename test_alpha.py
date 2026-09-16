from PIL import Image

path = r"C:\Users\Mukesh Raj\.gemini\antigravity-ide\brain\8a69733a-c92c-4770-a8b5-d20cb8333c90\.user_uploaded\media_1789584306248.png"
img = Image.open(path)
print("Image mode:", img.mode)

has_transparency = False
if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
    has_transparency = True
    
print("Has alpha channel or transparency info:", has_transparency)

# Let's also check if it actually has any pixels with alpha < 255
if img.mode == 'RGBA':
    datas = img.getdata()
    transparent_pixels = sum(1 for item in datas if item[3] < 255)
    print(f"Number of transparent pixels: {transparent_pixels}")
