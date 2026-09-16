import urllib.request
import os

assets = {
    'assets/backgrounds/meenaya-bg-blue.png': 'https://framerusercontent.com/images/3vpFOuN5tHb2JuYqzoPGPaRcA.png?width=1024&height=1024',
    'assets/images/meenaya-gopuram.png': 'https://framerusercontent.com/images/cyIPT3IPm257uiP1lpxhaxTt8E.png?scale-down-to=4096&width=1386&height=5741',
    'assets/images/meenaya-car.png': 'https://framerusercontent.com/images/CxMq9eNVYFWeipRkOH7L6BF7EV4.png?width=1350&height=3716',
    'assets/backgrounds/meenaya-bg-teal.png': 'https://framerusercontent.com/images/HbWyQm5QqRuXQY7LxMf5kx10akU.png?scale-down-to=1024&width=1026&height=1834',
    'assets/images/meenaya-ganesha.svg': 'https://framerusercontent.com/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg',
    'assets/images/meenaya-lantern.png': 'https://framerusercontent.com/images/tjsmDC8g305SmMs98B3ABqR5QE.png?width=279&height=296',
    'assets/backgrounds/meenaya-bg-pink.png': 'https://framerusercontent.com/images/gXWpfu1hEOSPMvZeJtINB07pfJU.png?scale-down-to=1024&width=1030&height=1840',
    'assets/backgrounds/meenaya-bg-yellow.png': 'https://framerusercontent.com/images/4moRDGJdHuGozf1nEo8Y2t4pdw.png?scale-down-to=1024&width=1032&height=1834',
    'assets/backgrounds/meenaya-bg-navy.png': 'https://framerusercontent.com/images/VgBpHrwsihOjP7HT4E3SSrxEs0.png?scale-down-to=1024&width=1028&height=1832',
    'assets/images/meenaya-frame.png': 'https://framerusercontent.com/images/7Rkp2TXFX8Lomrn68coHcBaIdpY.png?scale-down-to=1024&width=1536&height=1625'
}

os.makedirs('assets/backgrounds', exist_ok=True)
os.makedirs('assets/images', exist_ok=True)

for path, url in assets.items():
    print(f'Downloading {path}...')
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req) as response, open(path, 'wb') as out_file:
            data = response.read()
            out_file.write(data)
    except Exception as e:
        print(f"Failed to download {url}: {e}")

print('Done!')
