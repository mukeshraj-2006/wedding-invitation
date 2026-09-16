# 💍 Cinematic Tamil Wedding Invitation Website

A premium, cinematic, interactive wedding invitation website for **K. Ganesh Raj & V. Gayathri**.

Built with vanilla HTML5, CSS3, and JavaScript — no frameworks required.

---

## ✨ Features

- 🎬 **Cinematic experience** — 10 animated scenes with scroll-snap transitions
- 🕉️ **Traditional aesthetics** — South Indian temple, Ganesha, lanterns, florals
- 🇮🇳 **Bilingual** — Tamil (primary) + English (secondary)
- 📱 **Mobile-first** — Optimized for portrait screens (360–430px)
- 🎵 **Background music** — Toggle on/off, starts on user interaction
- 📅 **Add to Calendar** — Downloads ICS file with wedding details
- 📤 **Share** — Web Share API with clipboard fallback
- 📍 **Google Maps** — Direct link to wedding venue
- ⏳ **Live countdown** — Days, hours, minutes, seconds to the wedding
- ♿ **Accessible** — Semantic HTML, keyboard nav, reduced-motion support
- 🎨 **Fully editable** — Change ALL wedding details in one file (`data.js`)

---

## 📁 Project Structure

```
wedding-invitation/
├── index.html              ← Main HTML (10 cinematic scenes)
├── style.css               ← All styles, animations, responsive design
├── script.js               ← Interactions, music, share, calendar, countdown
├── data.js                 ← ⭐ ALL wedding data (edit this file)
├── assets/
│   ├── images/
│   │   ├── temple.jpg      ← South Indian temple illustration
│   │   ├── ganesha.jpg     ← Lord Ganesha illustration
│   │   ├── vintage-car.jpg ← Vintage car illustration
│   │   ├── couple.jpg      ← ⚠️ REPLACE with your couple photo
│   │   ├── groom.jpg       ← ⚠️ REPLACE with groom's photo (optional)
│   │   └── bride.jpg       ← ⚠️ REPLACE with bride's photo (optional)
│   ├── music/
│   │   └── wedding-music.mp3 ← ⚠️ ADD your background music file
│   └── icons/
└── README.md               ← This file
```

---

## 🚀 Quick Start

### Run Locally

1. **No build step required.** Simply open `index.html` in a browser:
   - Double-click `index.html`, OR
   - Use VS Code's "Live Server" extension, OR
   - Run a local server:
     ```bash
     # Python
     python -m http.server 8000

     # Node.js
     npx serve .
     ```
2. Open `http://localhost:8000` in your browser.

---

## ✏️ How to Update Wedding Details

**All wedding information is in `data.js`.** You only need to edit this single file.

### Change Names
```javascript
groom: {
    nameTamil: "K.கணேஷ் ராஜ்",        // ← Change Tamil name
    nameEnglish: "K. Ganesh Raj",       // ← Change English name
    qualification: "B.E(CSE)",          // ← Change qualification
    workplace: "Assa Abloy, Chennai",   // ← Change workplace
},
```

### Change Date & Time
```javascript
wedding: {
    date: "2026-11-13",                // ← ISO date (YYYY-MM-DD)
    dateDisplay: "13.11.2026",         // ← Display format
    dateEnglish: "November 13, 2026",  // ← English display
    dayTamil: "வெள்ளிக்கிழமை",          // ← Tamil day
    muhurthamTamil: "காலை 9.00 – 10.30 மணி", // ← Tamil time
    muhurthamStart: "09:00",           // ← 24h format (for calendar)
    muhurthamEnd: "10:30",             // ← 24h format (for calendar)
},
```

### Change Venue
```javascript
venue: {
    nameTamil: "வெங்கடாசலபதி ஸ்ரீ ராகவேந்திரா திருமண மஹால்",
    nameEnglish: "Venkatachalapathi Sri Raghavendra Thirumana Mahal",
    locationTamil: "திருமலை திருப்பதி",
    locationEnglish: "Thirumalai, Tirupathi",
    mapsUrl: "https://maps.google.com/?q=...",  // ← Google Maps URL
},
```

### Change Family Names
Edit the `parents`, `groomLineage`, `brideLineage`, and `family` sections in `data.js`.

---

## 🖼️ How to Replace Photos

1. **Couple photo:** Replace `assets/images/couple.jpg` with your couple photo.
2. **Groom photo:** Replace `assets/images/groom.jpg` (optional).
3. **Bride photo:** Replace `assets/images/bride.jpg` (optional).

**Recommended dimensions:**
- Couple photo: 600×750px (portrait, 4:5 ratio)
- Individual photos: 400×500px (portrait)

**Supported formats:** JPG, PNG, WebP

---

## 🎵 How to Replace Music

1. Add your audio file to `assets/music/wedding-music.mp3`
2. Supported formats: MP3, OGG, WAV
3. Recommended: Instrumental music, 2–5 minutes, loop-friendly
4. ⚠️ Do NOT use copyrighted music without permission

**Royalty-free music sources:**
- [Pixabay Music](https://pixabay.com/music/)
- [Free Music Archive](https://freemusicarchive.org/)
- [Bensound](https://www.bensound.com/)

---

## 🎨 How to Change Colors

Edit the `colors` section in `data.js`:

```javascript
colors: {
    deepTeal:   "#0A5E54",   // Primary background
    softMint:   "#1A8A7D",   // Accent teal
    dustyPink:  "#D4918E",   // Lanterns, romantic elements
    cream:      "#FDF5E6",   // Card backgrounds, light text
    paleYellow: "#FAF0D7",   // Info section background
    mutedGold:  "#C9A94E",   // Gold accents, borders
    deepNavy:   "#0F1B3D",   // Opening/closing backgrounds
    lavender:   "#C8B4D4",   // Photo section accent
    warmPeach:  "#F2C4A4",   // Lantern warm tones
},
```

---

## 🔤 How to Change Fonts

Edit the Google Fonts link in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT&display=swap" rel="stylesheet">
```

Then update `style.css`:

```css
:root {
    --font-tamil:   'Your Tamil Font', serif;
    --font-english: 'Your English Font', serif;
    --font-body:    'Your Body Font', sans-serif;
}
```

**Recommended Tamil fonts:**
- Noto Serif Tamil (current)
- Mukta Malar
- Catamaran

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **"New Project"** → Import your repository.
4. Framework: **Other** (no framework needed).
5. Click **Deploy**.
6. Your invitation will be live at `your-project.vercel.app`.

### Deploy to GitHub Pages

1. Push to GitHub.
2. Go to **Settings** → **Pages**.
3. Source: **Deploy from a branch** → `main` → `/ (root)`.
4. Your invitation will be live at `username.github.io/repo-name`.

### Deploy to Netlify

1. Go to [netlify.com](https://netlify.com).
2. Drag and drop the `wedding-invitation` folder.
3. Your invitation will be live instantly.

---

## 📱 Supported Devices

| Device | Status |
|--------|--------|
| iPhone (any) | ✅ |
| Android phones | ✅ |
| iPad / tablets | ✅ |
| Desktop (Chrome, Edge, Firefox, Safari) | ✅ |
| Reduced motion preference | ✅ |

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `M` | Toggle music |
| `Esc` | Open invitation (if on cover) |

---

## 🔄 Updating After Deployment

1. Edit `data.js` locally.
2. Push the changes to your GitHub repository.
3. Vercel/Netlify will automatically redeploy.

---

## 📄 License

This wedding invitation website is for personal use. The generated artwork (temple, Ganesha, vintage car) was created using AI image generation.

---

Built with ❤️ for the wedding of **K. Ganesh Raj & V. Gayathri**
