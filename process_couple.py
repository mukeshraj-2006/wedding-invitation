from rembg import remove
from PIL import Image
import io

input_path = r"C:\Users\Mukesh Raj\.gemini\antigravity-ide\brain\8a69733a-c92c-4770-a8b5-d20cb8333c90\.user_uploaded\media_1789585459240.jpg"
output_path = r"c:\Users\Mukesh Raj\OneDrive\Documents\Invitation\wedding-invitation\assets\images\couple-swing.png"

with open(input_path, 'rb') as i:
    input_data = i.read()
    output_data = remove(input_data)

with open(output_path, 'wb') as o:
    o.write(output_data)

print("Saved clean transparent couple swing successfully!")
