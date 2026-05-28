# Moor Graphix — Homepage Project

## Owner & Studio

| Field | Value |
|---|---|
| **Owner** | Sid Washington |
| **Studio** | Moor Graphix |
| **Tagline** | Cultural Alchemy + AI Systems |
| **Location** | Douglasville, GA (serves nationwide) |
| **Phone** | (470) 499-4407 |
| **Email** | sidart@moorgraphix.com |
| **Website** | https://www.moorgraphix.com |
| **YouTube** | https://www.youtube.com/@moorgraphix |
| **Facebook** | https://www.facebook.com/moorthangraphics |
| **Instagram** | https://www.instagram.com/moorgraphix |
| **LinkedIn** | https://www.linkedin.com/company/moor-graphix |
| **X / Twitter** | https://www.twitter.com/moorgraphix |
| **Experience** | 30+ years |
| **AI Agents Live** | 8+ |
| **Brand ecosystems** | 3 |

## What the Studio Does

Moor Graphix is a brand design and AI systems studio rooted in **Cultural Alchemy** — the practice of extracting the hidden gold inside a client's heritage, name, and story and forging it into visual equity no competitor can copy. Services span brand identity systems, web design, AI agent infrastructure, apparel/print graphics, marketing materials, and digital illustrations.

The name "Moor" traces from **Morrison** — Sid's grandfather's middle name. Research into that name surfaced the Morrison family crest in *Fairbairn's Crest*, which contains three faces of Moors. That crest became a personal symbol; that symbol became the company.

---

## File Structure

```
moor-graphix-site/
├── index.html                  ← single-page homepage
├── services.html               ← services & pricing page
├── CLAUDE.md                   ← this file
├── wix-export/
│   ├── wix-page.html           ← Wix embed snippet (scoped .mg- CSS)
│   └── wix-instructions.txt    ← step-by-step Wix integration guide
├── assets/
│   ├── css/
│   │   └── style.css           ← all shared styles
│   ├── js/
│   │   ├── images.js           ← ALL image data + section routing (edit this to control every section)
│   │   └── main.js             ← homepage JS (gallery, showcase, portfolio grid, modal)
│   └── images/
│       ├── branding/           ← logo and brand marks
│       │   └── moor-graphix-logo.png
│       ├── social/             ← social media preview images (4 platforms)
│       ├── hero-slideshow/     ← images shown in the homepage hero RIGHT panel (6 images)
│       ├── showcase-strip/     ← thumbnails in the strip below the homepage hero (18 images)
│       ├── services-hero/      ← slides for the services.html hero slideshow (15 NAMA blueprint pages)
│       └── portfolio/          ← portfolio grid images, organized by category
│           ├── logos/          ← logo design projects (3 images)
│           ├── brand-identity/ ← brand identity projects (3 images)
│           ├── web-design/     ← website design projects (10 images)
│           ├── event-print/    ← event flyers and print work (1 image)
│           └── campaign/       ← campaign design projects (1 image)
```

All files were split from a single 6.4 MB monolithic HTML file. The split reduced `index.html` from 6.4 MB to 27 KB.

### Image Section Control

Each site section loads from its own dedicated folder. **All routing is controlled by `assets/js/images.js`.**

| Section | Folder | Category key in images.js |
|---|---|---|
| Homepage hero slideshow | `hero-slideshow/` | `hero_slideshow` |
| Showcase strip (below hero) | `showcase-strip/` | `showcase_strip` |
| Portfolio grid | `portfolio/<subcategory>/` | `logos` / `brand_identity` / `web_design` / `event_print` / `campaign` |
| Services page hero | `services-hero/` | `portfolio_slides` |

**To change the homepage hero slideshow:**  
Drop images into `assets/images/hero-slideshow/` and add/remove matching entries in `images.js` with `category: "hero_slideshow"`.

**To change the showcase strip:**  
Drop images into `assets/images/showcase-strip/` and add/remove matching entries in `images.js` with `category: "showcase_strip"`.

**To add portfolio work:**  
Drop the file into the correct `assets/images/portfolio/<subcategory>/` folder, then add an entry to `images.js` with the matching `category` slug (`logos`, `brand_identity`, `web_design`, `event_print`, or `campaign`).

**To change the services page hero slides:**  
Drop files into `assets/images/services-hero/` and add/remove entries in `images.js` with `category: "portfolio_slides"`.

---

## Design System

### Color Variables (`style.css` `:root`)

| Variable | Hex | Usage |
|---|---|---|
| `--dark` | `#020408` | Page background (dark sections) |
| `--dark2` | `#080D1A` | Secondary dark sections |
| `--mid` | `#0D1628` | Mid-tone dark sections |
| `--light1` | `#F0F4FF` | Light section background |
| `--light2` | `#E8EEF8` | Light-2 section background |
| `--light3` | `#DDE5F5` | Light-3 / card fills |
| `--blue` | `#3060D0` | Primary brand blue |
| `--blue-lt` | `#6AABFF` | Light blue (accents, hover glow) |
| `--text-dark` | `#1A1F2E` | Body text on light sections |
| `--text-mid` | `#3A4560` | Secondary text on light sections |

### Typography

| Font | Weights | Role |
|---|---|---|
| **Syne** | 400, 600, 700, 800 | Body copy, UI, nav, labels |
| **DM Serif Display** | 400 (italic 0 & 1) | All headings (h1, h2, h3), stat numbers, quotes |

Fonts loaded from Google Fonts CDN. Icons from Tabler Icons (`@tabler/icons-webfont@2.47.0`).

### Section Classes

| Class | Background | Text |
|---|---|---|
| `.sec-dark` | `rgba(2,4,8,0.97)` | `#d0deff` |
| `.sec-dark2` | `rgba(8,13,26,0.97)` | `#d0deff` |
| `.sec-mid` | `rgba(13,22,40,0.98)` | `#d0deff` |
| `.sec-light` | `var(--light1)` | `var(--text-dark)` |
| `.sec-light2` | `var(--light2)` | `var(--text-dark)` |
| `.sec-red` | `#06000A` | `#d0deff` (red border-top) |

---

## Page Sections (HTML anchor IDs)

| Section | ID | Class |
|---|---|---|
| Hero + gallery slideshow | `#work` | `.sec-dark` |
| About / Origin Story | `#about` | `.sec-light` |
| Services | `#services` | `.sec-dark2` |
| Portfolio grid | `#portfolio` | `.sec-light` |
| Videos | `#videos` | `.sec-dark2` |
| AI Lab | `#ai` | `.sec-mid` |
| Workshops | `#workshops` | `.sec-light` |
| Social Media | `#social` | `.sec-light2` |
| Testimonials | `#reviews` | `.sec-light` |
| Final CTA / Contact | `#contact` | `.sec-red` |

---

## Portfolio — All 18 Projects

All portfolio images live in `assets/images/portfolio/<subcategory>/`. The array in `images.js` is Fisher-Yates shuffled on every page load, so display order is randomized at runtime.

### Logo Design — `portfolio/logos/`

| # | File | Display Name |
|---|---|---|
| 1 | `logos/scrolls-of-maat-logo.jpg` | Scrolls of MAAT |
| 2 | `logos/own-the-song-logo.jpg` | Own the Song |
| 3 | `logos/2-sports-moms-logo.png` | 2 Sports Moms |

### Brand Identity — `portfolio/brand-identity/`

| # | File | Display Name |
|---|---|---|
| 4 | `brand-identity/amerukhan-basics-coin.png` | Amerukhan Basics Coin |
| 5 | `brand-identity/nama-new-amsterdam-musical.png` | NAMA — New Amsterdam Musical |
| 6 | `brand-identity/wsl4-commemorative-coin.png` | WSL4 Commemorative Coin |

### Web Design — `portfolio/web-design/`

| # | File | Display Name |
|---|---|---|
| 7 | `web-design/widows-son-lodge-4-website.png` | Widow's Son Lodge #4 Website |
| 8 | `web-design/roberts-law-group-website.png` | The Roberts Law Group |
| 9 | `web-design/joyous-ocean-website.png` | Joyous Ocean — Dionne Monsanto |
| 10 | `web-design/evans-guild-website.png` | The Evans Guild |
| 11 | `web-design/hinson-security-website.png` | Hinson Security Services |
| 12 | `web-design/black-mans-roundtable-website.png` | Black Man's Roundtable |
| 13 | `web-design/montague-studios-website.png` | Montague Studios |
| 14 | `web-design/isisara-bey-website.png` | Isisara Bey |
| 15 | `web-design/2-sports-moms-full-site.png` | 2 Sports Moms — Full Site |
| 16 | `web-design/nama-harlem-website.png` | NAMA Harlem Website |

### Event + Print — `portfolio/event-print/`

| # | File | Display Name |
|---|---|---|
| 17 | `event-print/african-dance-class-flyer.jpg` | African Dance Class — El Barrio |

### Campaign — `portfolio/campaign/`

| # | File | Display Name |
|---|---|---|
| 18 | `campaign/parent-playbook-series.png` | Parent Playbook Series |

### Valid `category` filter values (portfolio grid)

```
logos | brand_identity | web_design | event_print | campaign
```

These must match exactly — they map to the filter buttons in `#portfolio`.

---

## YouTube Videos

### Featured (full-width player, `#ytMain`)

| ID | Label |
|---|---|
| `9PKxsJIykxk` | Moor Graphix — Featured Reel |

### Video Grid (`#videoGrid`, 3-column, 16:9)

| ID | Label |
|---|---|
| `HW4kxzqvTJY` | Brand Reel |
| `hSABN8sDrB0` | Design Process |
| `vj0MPw26avg` | Client Work Showcase |
| `HH-CeLEeXZg` | Logo Animation |
| `Y6vqct_uFi4` | Cultural Design |
| `w2BNKA8od8s` | AI + Design |

### Shorts Grid (`#shortsGrid`, 3-column, 9:16 portrait)

| ID | Label |
|---|---|
| `V_KPnvbQI_M` | Behind the Brand |
| `6802KCAsa-s` | Design Tips |
| `W07akSTDYyE` | Cultural Alchemy |

All players use `youtube-nocookie.com` embed with `autoplay=1&rel=0` on click. Thumbnails are loaded from `img.youtube.com/vi/{id}/hqdefault.jpg`.

> **Local dev note:** YouTube embeds require an HTTP server. Run `python3 -m http.server 8080` from the site root and open `http://localhost:8080`.

---

## Hero Gallery Slideshow

The right column of the homepage hero is a full-panel image slideshow built in `main.js`. Key facts:

- Slides are built from `heroSlides` — items with `category: "hero_slideshow"` in `images.js`
- Source folder: `assets/images/hero-slideshow/` — **6 curated images**
- Auto-advances every **4 500 ms**
- Left `‹` / right `›` arrow buttons reset the timer on click
- Active slide: `opacity: 1`; inactive: `opacity: 0` (CSS transition `0.65s ease`)
- Image rendering: `object-fit: contain` with dark `#02040A` background — no cropping
- Counter label bottom-right: `"2 / 6"` format

---

## Adding a New Portfolio Image

Each site section has its own folder and its own `category` value in `images.js`. You only need to touch one file.

### Add to Portfolio Grid

1. **Drop the file** into the matching subfolder:
   - Logo design → `assets/images/portfolio/logos/`
   - Brand identity → `assets/images/portfolio/brand-identity/`
   - Web design → `assets/images/portfolio/web-design/`
   - Event/print → `assets/images/portfolio/event-print/`
   - Campaign → `assets/images/portfolio/campaign/`

2. **Add one entry** to `assets/js/images.js` in the PORTFOLIO section:

   ```js
   {
     src:      "assets/images/portfolio/web-design/your-filename.png",
     name:     "Client / Project Name",
     cat:      "Web Design",       // shown on gallery cards (free text)
     category: "web_design",       // filter key — must match list above exactly
     desc:     "One to three sentences: what was designed, cultural context, design intent."
   },
   ```

3. **Save and refresh** — the image appears automatically in:
   - Portfolio grid with filter support
   - Modal detail view with prev/next navigation

### Also Add to Showcase Strip

Drop the same file (or a cropped thumbnail version) into `assets/images/showcase-strip/` and add a matching entry with `category: "showcase_strip"`. Clicking the showcase thumbnail will open the portfolio modal for that project.

### Also Add to Hero Slideshow

Drop the file into `assets/images/hero-slideshow/` and add an entry with `category: "hero_slideshow"`.

### Recommended Image Sizes

| Type | Ideal | Minimum |
|---|---|---|
| Website screenshot (4:3) | 800 × 600 px | 400 × 300 px |
| Logo / coin (square) | 600 × 600 px | 300 × 300 px |
| Event flyer (portrait) | 600 × 900 px | 400 × 600 px |
| Social preview | 800 × 500 px | 400 × 250 px |

All images render with `object-fit: contain` — transparent-background PNGs look best for logos.

---

## AI Agent Stack (live, as of site copy)

| Agent | Status | Role |
|---|---|---|
| MG Concierge Agent | Live | Client intake, brand discovery, project routing |
| MAAT Master Orchestrator | Live | Routes all 8 agents across 3 brand ecosystems |
| Sma Taui — Revenue Intel | Live | Weekly monetization briefings every Thursday |
| Amerukhan Culture Shop | Live | AI concierge for cultural apparel brand |
| MAAT Guide + Lab Onboarding | Live | Educational and incubator platform agents |
| Sid Ambassador — Voice AI | Expanding | AI voice agent trained on Sid's cadence |

---

## Services & Pricing (as shown on site)

| Service | Price |
|---|---|
| Brand Identity Systems | From $350 |
| Web Design + Consulting | Custom Quote |
| AI Integration + Agents | Enterprise Pricing |
| Apparel + Print Graphics | From $150 |
| Marketing Materials | From $75 |
| Digital Illustrations + Art | Custom Quote |

Every engagement includes a **Brand Blueprint** — a complete roadmap for visual identity, brand voice, and digital presence.

---

## Booking & Contact Links

| Purpose | URL |
|---|---|
| Book Free Consult | `https://www.moorgraphix.com/booking-calendar/custom-wall-art` |
| Contact form | `https://www.moorgraphix.com/contact-us` |
| Portfolio | `https://www.moorgraphix.com/portfolio` |
| All Services | `https://www.moorgraphix.com/services` |
| AI Workshops | `https://www.moorgraphix.com/ai-training` |

---

## Dev Notes

- **No build step.** Pure HTML + CSS + JS. Open `index.html` directly or serve with `python3 -m http.server 8080`.
- **No framework, no npm.** Edit `style.css`, `main.js`, and `index.html` directly.
- **Particle background** (`#bg` canvas) is drawn with `requestAnimationFrame` — 180 stars + 26 node-graph points. Lives at the top of `main.js`.
- **Modal keyboard nav:** `←`/`→` arrows navigate, `Escape` closes.
- **Showcase strip** shows the first 12 projects (post-shuffle). Each cell opens the modal for that project on click.
- **Portfolio filter buttons** (`#portfolio`) filter `rawProjects` by `category` field in-place — no page reload.
- The footer copyright reads `© 2046` — this is intentional (future-facing).
- **Waitlist form:** `ai-training.html` uses Formspree for the waitlist capture form. Replace `YOUR_FORM_ID` in the `action` attribute with the real form ID after creating a free account at [formspree.io/register](https://formspree.io/register). The form ID looks like `xabc1234` and the action URL becomes `https://formspree.io/f/xabc1234`.
