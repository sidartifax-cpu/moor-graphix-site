# Moor Graphix — Image Asset Structure

```
assets/images/
├── branding/          ← Logo files used in nav, footer, OG tags
│   └── moor-graphix-logo.png
│
├── social/            ← Social media card preview screenshots
│   ├── social-facebook-preview.jpg
│   ├── social-instagram-preview.png
│   ├── social-linkedin-preview.png
│   └── social-twitter-preview.jpg
│
└── portfolio/         ← Client work images (drop new ones here)
    ├── scrolls-of-maat-logo.jpg
    ├── own-the-song-logo.jpg
    ├── 2-sports-moms-logo.png
    ├── amerukhan-basics-coin.png
    ├── nama-new-amsterdam-musical.png
    ├── wsl4-commemorative-coin.png
    ├── widows-son-lodge-4-website.png
    ├── roberts-law-group-website.png
    ├── joyous-ocean-website.png
    ├── evans-guild-website.png
    ├── hinson-security-website.png
    ├── black-mans-roundtable-website.png
    ├── montague-studios-website.png
    ├── isisara-bey-website.png
    ├── 2-sports-moms-full-site.png
    ├── nama-harlem-website.png
    ├── african-dance-class-flyer.jpg
    └── parent-playbook-series.png
```

## Adding a New Portfolio Image

1. **Drop your image file** into `assets/images/portfolio/`  
   Name convention: `kebab-case-project-name.png` (or `.jpg`)

2. **Add an entry** to the `rawProjects` array in `assets/js/main.js`:
   ```js
   {
     src: "assets/images/portfolio/your-project-name.png",
     name: "Client / Project Name",
     cat: "Logo Design",          // display label on cards
     category: "logos",           // filter key — see list below
     desc: "One to three sentences describing the project, cultural context, and design intent."
   },
   ```

3. **Filter `category` values** (must match exactly):
   - `logos`
   - `brand_identity`
   - `web_design`
   - `event_print`
   - `campaign`

4. Save and refresh — the image will appear in the Hero gallery, Showcase strip,
   Portfolio grid, and be navigable in the Modal automatically.

## Recommended image sizes
| Slot | Recommended | Min |
|------|-------------|-----|
| Portfolio grid (4:3) | 800 × 600 px | 400 × 300 px |
| Logo / coin close-up | 600 × 600 px | 300 × 300 px |
| Event flyer / portrait | 600 × 900 px | 400 × 600 px |
| Social card preview | 800 × 500 px | 400 × 250 px |

All images are displayed with `object-fit: contain` so exact ratios are flexible —
transparent-background PNGs look best for logos.
