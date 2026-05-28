# Moor Graphix — Wix Header Setup Guide

**Studio:** Moor Graphix  
**File:** `wix-export/wix-header-setup.md`  
**Last updated:** 2026-05-27

This guide walks you through recreating the designed navigation header exactly in Wix Editor — every element, every value, in the correct order.

---

## ⚠️ DO THIS FIRST — Load Fonts (Before Any Design Work)

If fonts aren't loaded, nothing else will look right. Do this **before** touching the header.

1. Go to **Wix Dashboard → Settings → Custom Code**
2. Click **+ Add Custom Code**
3. Set placement to **Head**
4. Set "Add code to" → **All Pages**
5. Paste this entire block:

```html
<!-- Moor Graphix — Global Fonts + Icons -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Serif+Display:ital@0;1&display=swap">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@2.47.0/tabler-icons.min.css">
```

6. Click **Apply**
7. **Publish the site** — fonts won't appear in the editor until published or previewed

> **Why this matters:** Syne is used for all nav text, labels, buttons, and body copy. DM Serif Display is used for all headings. Tabler Icons are used for UI icons across the site. If this step is skipped, Wix will substitute a fallback font and nothing will match the design.

---

## Color Reference

Add these to your Wix color palette (**Design → Colors → Manage Colors**) before you start so every picker has the right value ready.

| Name | Hex | Usage |
|---|---|---|
| MG Black | `#020408` | Header background, page dark background |
| MG Dark 2 | `#080D1A` | Secondary dark sections |
| MG Mid | `#0D1628` | Mid-tone dark cards |
| MG Blue | `#3060D0` | Primary brand blue, "LIVE WORK" label |
| MG Blue Light | `#6AABFF` | Nav links hover, button text, accents |
| MG White | `#FFFFFF` | Logo text primary |
| MG Light 1 | `#F0F4FF` | Light section backgrounds |
| MG Light 2 | `#E8EEF8` | Light-2 section backgrounds |
| MG Text Dark | `#1A1F2E` | Body text on light sections |
| MG Text Mid | `#3A4560` | Secondary text on light sections |

---

## Part 1 — Header Setup (The Sticky Nav Bar)

### 1.1 — Enable and Configure the Header Strip

1. In Wix Editor, click the top strip of the page — the **Header**
2. Click **Header Settings** (or right-click → Edit Header)
3. Set **Scroll behavior** → **Scroll with site** ❌  
   Instead: check **Fix header to top of page** ✅  
   *(This makes it sticky — stays visible on scroll)*
4. Set header **height** to `72px`
5. Click the header background → **Change Background**:
   - Type: **Color**
   - Color: `#020408`
   - **Opacity: 93%**
6. **Bottom border:** Add a horizontal line element (see 1.7 below)

> **Frosted glass note:** Wix does not support `backdrop-filter: blur()` natively on header elements. The dark semi-transparent `#020408` at 93% opacity replicates the frosted effect visually. Do not attempt to add `backdrop-filter` via Custom CSS on the header strip — it will not apply reliably.

---

### 1.2 — Upload the Logo Image

1. Go to **Wix Media Manager** (left sidebar → Media icon)
2. Click **Upload Media** → select `assets/images/branding/moor-graphix-logo.png`
3. Once uploaded, note the file name — you'll use it in the next step

**Add logo to header:**
1. In the header, click **Add (+) → Image**
2. Select the uploaded `moor-graphix-logo.png`
3. In the image settings panel, set:
   - **Width:** `44px`
   - **Height:** `44px`
   - **Crop:** Click "Crop" → select **Circle** (round crop mask)
   - **Fit:** **Fill** (so the logo fills the circle)
4. Position: **Left side of header**, vertically centered
   - X position: `24px` from left edge
   - Y position: centered in the 72px header height (approximately `14px` from top)

**Link the logo to the homepage:**
1. Click the logo image → **Link** icon (chain icon in toolbar)
2. Choose **Page** → select your homepage
3. Click **Done**

---

### 1.3 — Logo Text Block (Two-Line Stack)

The logo text sits directly to the right of the logo image. You'll create **two separate text elements** and group them.

#### Line 1 — Studio Name

1. **Add (+) → Text → Paragraph** (use paragraph, not heading — you'll override the style)
2. Type: `MOOR GRAPHIX`
3. In the text settings:
   - **Font:** Syne *(type "Syne" in the font search box)*
   - **Size:** `16px`
   - **Weight:** `800` (Extra Bold)
   - **Letter Spacing:** `0.12em` → In Wix this is the "Character Spacing" slider; 0.12em ≈ **1.9px** at 16px, set it to **2**
   - **Transform:** Uppercase *(type in all caps — Wix's text transform is unreliable with custom fonts)*
   - **Color:** `#FFFFFF` at **100% opacity**
   - **Line height:** `1.1`

#### Line 2 — Tagline

1. **Add (+) → Text → Paragraph**
2. Type: `CULTURAL ALCHEMY + AI SYSTEMS`
3. In the text settings:
   - **Font:** Syne
   - **Size:** `8.5px` *(if Wix minimum is 6px, use 9px as the closest)*
   - **Weight:** `400` (Regular)
   - **Letter Spacing:** `0.36em` → at 8.5px, 0.36em ≈ **3px**, set to **3**
   - **Transform:** Uppercase (type in all caps)
   - **Color:** `#64A0FF` at **45% opacity** *(this matches `rgba(100,160,255,0.45)`)*
   - **Line height:** `1.1`

#### Stack and Group

1. Position Line 2 directly below Line 1 — no gap between them
2. Select both text elements (Shift+click both)
3. Right-click → **Group**
4. Position the group: immediately to the right of the logo image, vertically centered in header
   - Left edge of group: `24px` gap from right edge of logo image (so approximately `X: 80px`)

---

### 1.4 — Navigation Links

The nav links sit in the center-right area of the header.

**Create each link as a separate text element** (Wix's built-in menu widget uses its own fonts and is harder to fully customize — individual text elements give you full control).

**For each link, the settings are identical:**
- **Font:** Syne
- **Size:** `10.5px`
- **Weight:** `400`
- **Letter Spacing:** `0.13em` → at 10.5px ≈ **1.5px**, set to **2**
- **Transform:** Uppercase (type in all caps)
- **Color default:** `#64A0FF` at **50% opacity** (`rgba(100,160,255,0.5)`)
- **Color hover:** `#6AABFF` at **100% opacity**

**To set hover color in Wix:**
1. Click the text element → **Design** tab
2. Click **Customize Design**
3. Under **Text** → set default color (50% opacity blue as above)
4. Click the **Hover** state toggle
5. Set color to `#6AABFF` at 100% opacity

**Links to create (left to right):**

| Label | Link Type | Target |
|---|---|---|
| `WORK` | Anchor on this page | `#work` on homepage |
| `SERVICES` | Page | `/services` |
| `VIDEOS` | Anchor on this page | `#videos` on homepage |
| `AI LAB` | Page | `/ai-training` |
| `WORKSHOPS` | Page | `/ai-training` |
| `ABOUT` | Anchor on this page | `#about` on homepage |
| `CONTACT` | Anchor on this page | `#contact` on homepage |

**To link each text element:**
1. Click the text → **Link** icon in the toolbar
2. For anchors: choose **Anchor** → select the matching anchor on the target page
3. For pages: choose **Page** → select the page
4. **Do NOT check "Open in new tab"** for any of these links

**Spacing:** Place links horizontally with `28px` gap between each. Keep all vertically centered in the header.

> **Alternative:** You can use Wix's built-in **Menu** widget for this. If you do, after adding the menu go to **Manage Menu** and add the pages + anchors listed above. Then customize the menu design to match the font/color/spacing specs above. The custom text element approach gives more control but the menu widget handles mobile collapse automatically.

---

### 1.5 — Book Free Consult Button

1. **Add (+) → Button**
2. Set button text to: `• Book Free Consult`
   - The bullet `•` is a Unicode bullet (U+2022), typed directly — it does not animate in Wix without custom code. See Part 3 for the animated pulse version via HTML widget.
3. **Button Design — Normal state:**
   - Background color: `#3060D0` at **15% opacity** *(matches `rgba(80,140,255,0.15)`)*
   - Border: **0.5px** solid `#3060D0` at **40% opacity**
   - Border radius: `4px`
   - Padding: top/bottom `10px`, left/right `20px`
4. **Button Design — Hover state:**
   - Background color: `#3060D0` at **28% opacity**
   - Border: same as normal
5. **Button Text:**
   - Font: Syne
   - Size: `10.5px`
   - Weight: `700`
   - Letter spacing: `0.1em` → set to **1**
   - Uppercase (type in all caps with bullet: `• BOOK FREE CONSULT`)
   - Color: `#6AABFF` at 100% opacity
6. **Position:** Far right of header, `24px` from right edge, vertically centered

**Link the button:**
1. Click button → **Link**
2. Choose **Web Address**
3. Enter: `https://www.moorgraphix.com/booking-calendar/custom-wall-art`
4. **Do NOT check "Open in new tab"**

---

### 1.6 — Header Layout Summary

From left to right across the 72px header:

```
[24px gap] [Logo 44×44 circle] [16px gap] [MOOR GRAPHIX / tagline stack] [flex spacer] [WORK] [28px] [SERVICES] [28px] [VIDEOS] [28px] [AI LAB] [28px] [WORKSHOPS] [28px] [ABOUT] [28px] [CONTACT] [32px] [• Book Free Consult button] [24px gap]
```

All elements vertically centered at `Y: 50%` within the header.

---

### 1.7 — Bottom Border Line

The header has a subtle `0.5px` bottom border.

1. **Add (+) → Shape → Line** (horizontal line)
2. Set line color: `#64A0FF` at **12% opacity** *(matches `rgba(100,160,255,0.12)`)*
3. Set line thickness: **1px** *(Wix minimum — the design uses 0.5px but 1px at 12% opacity reads the same visually)*
4. Stretch line to full header width
5. Position at the **very bottom** of the header strip (Y = 71px if header is 72px tall)

---

### 1.8 — Mobile Header (Hamburger Menu)

Wix automatically collapses headers to a hamburger menu on mobile. Configure it:

1. Switch to **Mobile Editor** (phone icon at top of editor)
2. Click the hamburger icon → **Design**
3. Set hamburger icon color: `#6AABFF`
4. Set mobile menu background: `#020408` at 97% opacity
5. Set mobile menu link color: `#6AABFF`
6. Set mobile menu font: Syne, 14px, weight 400, letter-spacing 0.13em
7. The logo and logo text should remain visible in the mobile header — check that they're positioned correctly and not overlapping the hamburger icon

---

## Part 2 — Ticker Bar (Below the Header)

The ticker is a separate strip element placed directly below the header.

### 2.1 — Add the Ticker Strip

1. Click **Add (+) → Strip** (or drag a strip from the left panel)
2. Place it immediately below the header
3. Set strip height: `36px`
4. Set background color: `#04060F` at 100% opacity
5. Add a bottom border line:
   - **Add (+) → Shape → Line**, color `#3060D0` at **12% opacity**, thickness 1px
   - Position at bottom of strip

### 2.2 — "LIVE WORK" Label

1. **Add (+) → Text → Paragraph** inside the ticker strip
2. Type: `LIVE WORK`
3. Settings:
   - Font: Syne
   - Size: `9px`
   - Weight: `700`
   - Letter spacing: `0.38em` → at 9px ≈ **3.5px**, set to **4**
   - Uppercase (all caps)
   - Color: `#3060D0` at 100% opacity
4. Position: Left side of strip, vertically centered, X: `24px`

### 2.3 — Scrolling Ticker Text (HTML Widget)

The scrolling animation cannot be done with Wix's native text elements. Use an **HTML widget**.

1. **Add (+) → Embed → HTML iFrame**
2. Resize it to fill the remaining width of the ticker strip (from after "LIVE WORK" label to right edge)
3. Set height to `36px`
4. Click **Enter Code** and paste the following:

```html
<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    background: transparent;
    overflow: hidden;
    height: 36px;
    display: flex;
    align-items: center;
  }
  .ticker-wrap {
    width: 100%;
    overflow: hidden;
    height: 36px;
    display: flex;
    align-items: center;
  }
  .ticker-track {
    display: flex;
    white-space: nowrap;
    animation: ticker-scroll 38s linear infinite;
  }
  .ticker-track:hover { animation-play-state: paused; }
  .ticker-item {
    font-family: 'Syne', sans-serif;
    font-size: 10px;
    font-weight: 400;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: rgba(100, 160, 255, 0.55);
    padding: 0 28px;
  }
  .ticker-sep {
    color: rgba(100, 160, 255, 0.28);
    font-size: 9px;
    padding: 0 4px;
  }
  @keyframes ticker-scroll {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400&display=swap');
</style>
</head>
<body>
<div class="ticker-wrap">
  <div class="ticker-track">
    <!-- First copy -->
    <span class="ticker-item">Brand Identity Systems</span>
    <span class="ticker-sep">✦</span>
    <span class="ticker-item">Web Design + Consulting</span>
    <span class="ticker-sep">✦</span>
    <span class="ticker-item">AI Agent Infrastructure</span>
    <span class="ticker-sep">✦</span>
    <span class="ticker-item">Cultural Alchemy</span>
    <span class="ticker-sep">✦</span>
    <span class="ticker-item">Logo Design</span>
    <span class="ticker-sep">✦</span>
    <span class="ticker-item">Apparel + Print Graphics</span>
    <span class="ticker-sep">✦</span>
    <span class="ticker-item">Marketing Materials</span>
    <span class="ticker-sep">✦</span>
    <span class="ticker-item">Digital Illustrations</span>
    <span class="ticker-sep">✦</span>
    <span class="ticker-item">AI Workshops + Training</span>
    <span class="ticker-sep">✦</span>
    <span class="ticker-item">30+ Years of Visual Equity</span>
    <span class="ticker-sep">✦</span>
    <!-- Duplicate copy for seamless loop -->
    <span class="ticker-item">Brand Identity Systems</span>
    <span class="ticker-sep">✦</span>
    <span class="ticker-item">Web Design + Consulting</span>
    <span class="ticker-sep">✦</span>
    <span class="ticker-item">AI Agent Infrastructure</span>
    <span class="ticker-sep">✦</span>
    <span class="ticker-item">Cultural Alchemy</span>
    <span class="ticker-sep">✦</span>
    <span class="ticker-item">Logo Design</span>
    <span class="ticker-sep">✦</span>
    <span class="ticker-item">Apparel + Print Graphics</span>
    <span class="ticker-sep">✦</span>
    <span class="ticker-item">Marketing Materials</span>
    <span class="ticker-sep">✦</span>
    <span class="ticker-item">Digital Illustrations</span>
    <span class="ticker-sep">✦</span>
    <span class="ticker-item">AI Workshops + Training</span>
    <span class="ticker-sep">✦</span>
    <span class="ticker-item">30+ Years of Visual Equity</span>
    <span class="ticker-sep">✦</span>
  </div>
</div>
</body>
</html>
```

5. Click **Update**
6. The ticker background is `transparent` — the `#04060F` strip background shows through

> **How the loop works:** The track contains the items twice. When `translateX(-50%)` is reached (the exact midpoint), the animation resets to `0` — creating a seamless infinite scroll with no jump.

### 2.4 — Anchoring the Ticker Bar

The ticker strip should be pinned below the sticky header so it scrolls away with the page (unlike the header which stays fixed).

1. Click the ticker strip
2. In **Arrange** panel: set **Position** → **Relative to page** (NOT fixed/sticky)
3. It will naturally sit below the sticky header and scroll away when the user scrolls down

---

## Part 3 — Pulsing Dot on Book Button (Optional Enhancement)

If you want the `•` bullet in the Book button to pulse/animate:

1. **Remove** the `•` from the button text (change to `BOOK FREE CONSULT`)
2. **Add (+) → Shape → Ellipse** — make it `6px × 6px`
3. Set fill color: `#6AABFF`
4. Position it to the left of the button text inside the button element
5. Click the circle → **Animation** → **Pulse** → set duration to `1.8s`, repeat `infinite`

> **Alternative (more accurate):** Replace the entire button with an **HTML widget** using the exact HTML/CSS from `index.html`. The widget gives you full control over the pulsing keyframe animation. Copy the `.cta-btn` element and its associated `@keyframes pulse-dot` rule from `assets/css/style.css`.

---

## Part 4 — Final Checklist

Work through this top-to-bottom before publishing:

- [ ] **Fonts loaded** — Syne, DM Serif Display, Tabler Icons added to Custom Code head
- [ ] **Colors added** to Wix palette (all 10 values from the color reference table)
- [ ] **Logo image** uploaded to Media Manager
- [ ] **Logo image** — 44×44px, circular crop, linked to homepage
- [ ] **"MOOR GRAPHIX"** text — Syne 16px 800 weight, `#FFFFFF`, letter-spacing 2
- [ ] **"CULTURAL ALCHEMY + AI SYSTEMS"** text — Syne 9px 400 weight, `#64A0FF` 45% opacity, letter-spacing 3
- [ ] **Both text elements** grouped and positioned next to logo
- [ ] **All 7 nav links** added — correct fonts, colors, hover states, and link targets
- [ ] **No nav links** set to "Open in new tab" (YouTube and social links excepted — those live elsewhere on the page, not in the header)
- [ ] **Book Free Consult button** — correct background, border, text, hover state
- [ ] **Button links** to `https://www.moorgraphix.com/booking-calendar/custom-wall-art` with NO new tab
- [ ] **Header background** `#020408` at 93% opacity
- [ ] **Header set to sticky** (fixed to top on scroll)
- [ ] **Bottom border line** added — 1px, `#64A0FF` at 12% opacity
- [ ] **Ticker strip** added below header — `#04060F` background, 36px height
- [ ] **"LIVE WORK" label** — Syne 9px 700 weight, `#3060D0`, letter-spacing 4
- [ ] **Scrolling ticker HTML widget** added and displaying correctly
- [ ] **Mobile header** — hamburger icon color `#6AABFF`, mobile menu background `#020408`
- [ ] **Preview the site** to confirm fonts render (they won't show in editor until previewed/published)
- [ ] **Publish**

---

## Quick Reference — All Exact Values

```
Header height:           72px
Header bg:               #020408 @ 93% opacity
Header border-bottom:    1px solid #64A0FF @ 12% opacity
Header position:         Fixed (sticky to top)

Logo:                    44 × 44px, circular crop
Logo margin-left:        24px
Logo link:               Homepage

Studio name:             MOOR GRAPHIX
  Font:                  Syne 16px 800
  Color:                 #FFFFFF
  Letter-spacing:        2 (≈0.12em)

Tagline:                 CULTURAL ALCHEMY + AI SYSTEMS
  Font:                  Syne 9px 400
  Color:                 #64A0FF @ 45% opacity
  Letter-spacing:        3 (≈0.36em)

Nav links:               Syne 10.5px 400, letter-spacing 2 (≈0.13em)
  Default color:         #64A0FF @ 50% opacity
  Hover color:           #6AABFF @ 100% opacity
  Gap between links:     28px

Book button:
  Text:                  • BOOK FREE CONSULT
  Font:                  Syne 10.5px 700, letter-spacing 1 (≈0.1em)
  Text color:            #6AABFF
  BG normal:             #3060D0 @ 15% opacity
  BG hover:              #3060D0 @ 28% opacity
  Border:                1px solid #3060D0 @ 40% opacity
  Border-radius:         4px
  Padding:               10px 20px
  Link:                  https://www.moorgraphix.com/booking-calendar/custom-wall-art

Ticker strip height:     36px
Ticker bg:               #04060F
Ticker border-bottom:    1px solid #3060D0 @ 12% opacity
LIVE WORK label:         Syne 9px 700, #3060D0, letter-spacing 4 (≈0.38em)
Ticker text color:       #64A0FF @ 55% opacity
Ticker scroll duration:  38s linear infinite
```

---

*End of Wix Header Setup Guide — Moor Graphix*
