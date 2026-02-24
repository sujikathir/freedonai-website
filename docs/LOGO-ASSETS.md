# FreeDon AI — Logo & High-Quality Assets

All logo files are **SVG** (resolution-independent), so they stay sharp at any size.

---

## Where the files are

| File | Use |
|------|-----|
| **`/public/logo.svg`** | Main logo (icon + “FreeDon AI”) for **light backgrounds** — header, shared images, docs. |
| **`/public/logo-footer.svg`** | Same logo with white/teal for **dark backgrounds** — footer. |
| **`/public/logo-icon.svg`** | **Icon only** (speech bubble + bars) — favicon, social profile pictures, app icon. |
| **`/src/app/icon.svg`** | Favicon used by the site (same as icon mark). |

---

## Using the icon for social / LinkedIn

You need a **square image** for:

- **LinkedIn company profile:** 300 × 300 px (min), PNG or JPG.
- **LinkedIn personal profile:** same.
- **Twitter/X, Instagram:** 400 × 400 px or larger is safe.

### How to get a high-quality PNG from the SVG

**Option 1 — Browser**  
1. Open `https://freedonai.tech/logo-icon.svg` in Chrome/Safari.  
2. Right‑click → Save image (or screenshot the page).  
3. Resize to 300×300 (or 1024×1024 for best quality) in Preview, Figma, or [squoosh.app](https://squoosh.app).

**Option 2 — Figma / design tool**  
1. Import `public/logo-icon.svg`.  
2. Create a 300×300 (or 1024×1024) frame, center the icon, export as PNG @1x and @2x.

**Option 3 — Command line (ImageMagick)**  
```bash
# From project root, if you have ImageMagick (brew install imagemagick):
convert -background none -resize 300x300 public/logo-icon.svg public/logo-icon-300.png
convert -background none -resize 1024x1024 public/logo-icon.svg public/logo-icon-1024.png
```

**Option 4 — Online**  
Upload `logo-icon.svg` to [cloudconvert.com/svg-to-png](https://cloudconvert.com/svg-to-png) and set size to 300×300 or 1024×1024.

---

## LinkedIn banner (cover image)

- **Size:** 1128 × 376 px.
- Use the **full logo** (`logo.svg`) plus tagline, e.g.  
  **“Your AI tutor for real conversation”** and **freedonai.tech**.  
- Export from Figma/Canva or any design tool; PNG or JPG is fine.

---

## Brand colors (for consistency)

- **Coral (primary):** `#E07A5F`  
- **Teal:** `#3D5A80`  
- **Teal light:** `#81B29A`  
- **Charcoal (text):** `#2D3142`  
- **White:** `#FFFFFF`

Use these in any exported PNGs or graphics so the logo and social assets match the site.
