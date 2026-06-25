# Moor Graphix — SMS Compliance Pages
## Claude Code Implementation Brief

You are building 2 new legal pages and updating 3 existing pages for **moorgraphix.com**.

---

## Site Design System

### Colors
```
--mg-black:     #0d0d0d   /* Primary background, nav, footer */
--mg-gold:      #c8a96e   /* Accent — borders, highlights, links */
--mg-white:     #ffffff   /* Page background */
--mg-gray-dark: #1a1a1a   /* Body text */
--mg-gray-mid:  #555555   /* Secondary text */
--mg-gray-light:#999999   /* Tertiary / meta text */
--mg-cream:     #f9f5ee   /* Callout box backgrounds */
--mg-ticker-bg: #111111   /* Ticker bar background */
```

### Typography
```
Headings:   Arial, Helvetica, sans-serif (bold)
Body text:  Georgia, serif
Code/mono:  Courier New, monospace
```

### Sizing Scale
```
hero-h1:    2.6rem (desktop), 1.8rem (mobile)
h2:         1.6rem
h3:         1.1rem bold
body:       1rem / 1.8 line-height
small/meta: 0.82–0.85rem
```

### Nav Structure (identical on all pages)
```html
<header class="mg-header">
  <nav class="mg-nav">
    <a class="mg-logo" href="/index.html">
      <img src="/assets/images/branding/moor-graphix-logo.png" alt="Moor Graphix Logo" />
      <span>Moor Graphix<span class="mg-logo-sub">Cultural Alchemy + AI Systems</span></span>
    </a>
    <button class="mg-hamburger" aria-label="Open menu">✕</button>
    <ul class="mg-nav-links">
      <li><a href="/index.html#portfolio">Work</a></li>
      <li><a href="/services.html">Services</a></li>
      <li><a href="/ai-workshop.html">AI Workshop</a></li>
      <li><a href="/blog.html">Blog</a></li>
      <li><a href="/about.html">About</a></li>
      <li><a href="/contact.html">Contact</a></li>
    </ul>
    <a class="mg-btn-primary" href="https://calendly.com/moorwashington">Book Free Consult</a>
  </nav>
</header>
```

### Ticker Bar (used on most pages)
```html
<div class="mg-ticker-wrap" aria-hidden="true">
  <div class="mg-ticker-inner">
    <!-- repeat 2x for seamless loop -->
    ✦ Privacy Policy ✦ SMS Terms &amp; Conditions ✦ TCPA Compliant ✦ 10DLC Ready ✦ Opt-In Documented ✦ Moor Graphix ✦
  </div>
</div>
```
Ticker CSS: `overflow:hidden; background:#111; color:#c8a96e; font:700 0.8rem Arial; white-space:nowrap`
Animation: `@keyframes ticker { from{transform:translateX(0)} to{transform:translateX(-50%)} } .mg-ticker-inner { animation: ticker 28s linear infinite; display:inline-block; }`

### Footer (identical on all pages)
```html
<footer class="mg-footer">
  <div class="mg-footer-inner">
    <a class="mg-logo" href="/index.html">Moor Graphix<span>Cultural Alchemy + AI Systems</span></a>
    <div class="mg-footer-social">
      <a href="https://www.facebook.com/moorthangraphics" target="_blank" rel="noopener">Facebook</a>
      <a href="https://www.linkedin.com/in/moorgraphix/" target="_blank" rel="noopener">LinkedIn</a>
      <a href="https://www.instagram.com/moorgraphix/" target="_blank" rel="noopener">Instagram</a>
      <a href="https://www.tiktok.com/@moorgraphix" target="_blank" rel="noopener">TikTok</a>
      <a href="https://www.youtube.com/@sidartifax" target="_blank" rel="noopener">YouTube</a>
    </div>
    <div class="mg-footer-legal">
      <span>© 2026 Moor Graphix</span>
      <a href="/privacy-policy.html">Privacy Policy</a>
      <a href="/sms-terms.html">SMS Terms</a>
      <a href="/contact.html">Contact</a>
    </div>
    <p class="mg-footer-quote">"Graphic design is the masterful syncopation of text and images."</p>
  </div>
</footer>
```

### Shared CSS Components
All pages share these reusable classes. Define in a shared `_legal.css` or inline per page:

```css
/* Page hero */
.mg-legal-hero { background:#111; color:#fff; padding:70px 40px 55px; border-bottom:3px solid #c8a96e; }
.mg-legal-hero .mg-eyebrow { font:700 0.78rem/1 Arial; color:#999; letter-spacing:.1em; text-transform:uppercase; }
.mg-legal-hero h1 { font:700 2.4rem/1.1 Arial; color:#fff; margin:12px 0 10px; }
.mg-legal-hero .mg-meta { font:400 0.82rem Arial; color:#888; }

/* Content container */
.mg-legal-body { max-width:820px; margin:0 auto; padding:64px 40px 96px; }

/* Section heading with gold underline */
.mg-legal-body h2 { font:700 1.2rem/1.3 Arial; color:#0d0d0d; margin:52px 0 14px; padding-bottom:10px; border-bottom:2px solid #c8a96e; }
.mg-legal-body h3 { font:700 1rem/1.4 Arial; color:#333; margin:28px 0 10px; }
.mg-legal-body p { margin-bottom:18px; }
.mg-legal-body ul { margin:10px 0 20px 28px; }
.mg-legal-body ul li { margin-bottom:8px; }
.mg-legal-body a { color:#c8a96e; }

/* Callout box */
.mg-callout { background:#f9f5ee; border-left:4px solid #c8a96e; padding:22px 26px; margin:28px 0; border-radius:0 4px 4px 0; }
.mg-callout strong { font-family:Arial,sans-serif; display:block; margin-bottom:6px; }

/* Dark info box */
.mg-dark-box { background:#0d0d0d; color:#fff; padding:34px 38px; border-radius:4px; margin:40px 0; }
.mg-dark-box h3 { font:700 1rem Arial; color:#c8a96e; margin-bottom:14px; }
.mg-dark-box a { color:#c8a96e; }

/* Badge pill */
.mg-badge { display:inline-block; background:#0d0d0d; color:#c8a96e; font:700 0.72rem Arial; letter-spacing:.08em; text-transform:uppercase; padding:4px 10px; border-radius:3px; margin-bottom:10px; }

/* Quick-ref grid (SMS Terms page) */
.mg-qr-grid { display:grid; grid-template-columns:1fr 1fr; gap:20px 40px; }
.mg-qr-grid label { display:block; font:700 0.72rem Arial; color:#888; letter-spacing:.07em; text-transform:uppercase; margin-bottom:4px; }
.mg-qr-grid span { font:700 1rem Arial; color:#fff; }

/* Form opt-in block */
.mg-optin-block { background:#f9f5ee; border:1.5px solid #c8a96e; border-radius:4px; padding:22px 24px; margin:24px 0; }
.mg-optin-block label { font:400 0.88rem/1.6 Georgia; color:#333; display:flex; gap:12px; align-items:flex-start; cursor:pointer; }
.mg-optin-block input[type="checkbox"] { margin-top:3px; flex-shrink:0; accent-color:#c8a96e; width:16px; height:16px; }
.mg-optin-block a { color:#c8a96e; }

@media(max-width:640px) {
  .mg-legal-hero { padding:44px 24px 38px; }
  .mg-legal-body { padding:40px 24px 64px; }
  .mg-qr-grid { grid-template-columns:1fr; }
  .mg-dark-box { padding:24px 20px; }
}
```

---

## Task 1 — CREATE: privacy-policy.html

**File:** `privacy-policy.html`
**URL:** `moorgraphix.com/privacy-policy.html`

### Page Structure
```
<head> — SEO meta, canonical, OG tags (match pattern from other pages)
<header> — standard nav
<div.mg-ticker-wrap> — ticker: "✦ Privacy Policy ✦ SMS Covered ✦ TCPA Compliant ✦ Moor Graphix ✦ Data Protected ✦"
<div.mg-legal-hero>
  <p.mg-eyebrow>Legal · Moor Graphix</p>
  <h1>Privacy Policy</h1>
  <p.mg-meta>Effective Date: June 25, 2026 | Last Updated: June 25, 2026</p>
</div>
<div.mg-legal-body>
  [All sections below]
</div>
<footer> — standard footer WITH privacy-policy.html and sms-terms.html links
```

### Meta Tags
```html
<title>Privacy Policy | Moor Graphix</title>
<meta name="description" content="Moor Graphix Privacy Policy — how we collect, use, and protect your personal information, including SMS messaging data and TCPA consent records." />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://moorgraphix.com/privacy-policy.html" />
<!-- OG tags matching site pattern -->
<meta property="og:title" content="Privacy Policy | Moor Graphix" />
<meta property="og:description" content="Moor Graphix Privacy Policy — SMS data coverage, TCPA compliance, and how we protect your information." />
<meta property="og:url" content="https://moorgraphix.com/privacy-policy.html" />
<meta property="og:site_name" content="Moor Graphix" />
<meta property="og:type" content="website" />
```

### Content — All 8 Sections

**Section 1 — Information We Collect**
Subsections: "Information You Provide Directly" and "Information Collected Through SMS Opt-In"
- Information You Provide: name/email, phone, business name/project details, other voluntarily shared info
- SMS Opt-In collects: mobile phone number, method + timestamp of opt-in consent, message delivery + interaction data, opt-out requests + date received

**Section 2 — How We Use Your Information**
General uses: respond to inquiries, deliver proposals, provide services, send project updates, schedule consultations, improve site, comply with legal obligations.
SMS-specific subsection (use `.mg-badge` label "SMS Program"): mobile number and consent used exclusively to send consented messages (appointment reminders, updates, promos), maintain TCPA consent records, process opt-out requests.
Callout box: "Moor Graphix does not sell, share, rent, or transfer your mobile phone number or SMS opt-in data to third parties for their marketing or promotional purposes."

**Section 3 — SMS Messaging Program**
Use `.mg-badge` with label "TCPA Compliance" above section heading.
Subsections: Consent, Message Types, Message Frequency (up to 4/month), Costs (msg + data rates may apply), How to Opt Out (reply STOP — one confirmation then done; also email sidart@moorgraphix.com or call (470) 499-4407), How to Get Help (reply HELP), Carrier Disclaimer (carriers not liable for delayed/undelivered), Data Retention + Security (retain opt-in records minimum 4 years for TCPA).

**Section 4 — Sharing of Information**
We do not sell. Trusted third-party service providers (hosting, email, scheduling, SMS delivery) under protective agreements. Legal disclosure where required by law.

**Section 5 — Cookies and Tracking**
Standard cookie disclosure. May use cookies to improve experience, analyze traffic, understand visitor behavior. Can be disabled via browser settings.

**Section 6 — Your Rights**
Right to access, correct, delete personal info (subject to legal retention). Opt out of marketing. Withdraw SMS consent via STOP reply. Contact sidart@moorgraphix.com.

**Section 7 — Children's Privacy**
Not directed at children under 13. No knowing collection from children. Contact us to delete if inadvertent.

**Section 8 — Updates to This Policy**
Revise "Last Updated" date on changes. Continued use = acceptance.

**Contact dark box at bottom:**
```
Moor Graphix
Douglasville, GA — Serving Nationwide
sidart@moorgraphix.com
(470) 499-4407
```

---

## Task 2 — CREATE: sms-terms.html

**File:** `sms-terms.html`
**URL:** `moorgraphix.com/sms-terms.html`

### Page Structure
Same pattern as privacy-policy.html with:
- Ticker: "✦ SMS Terms & Conditions ✦ STOP to Opt Out ✦ HELP for Assistance ✦ Up to 4 Messages/Month ✦ 10DLC Registered ✦ Moor Graphix ✦"
- Hero eyebrow: "Legal · Moor Graphix"
- Hero h1: "SMS Terms & Conditions"
- Hero meta: "Effective Date: June 25, 2026 | Last Updated: June 25, 2026"

### Quick Reference Dark Box (place immediately after intro paragraph, before Section 1)
```html
<div class="mg-dark-box">
  <h3>Quick Reference</h3>
  <div class="mg-qr-grid">
    <div><label>Business</label><span>Moor Graphix</span></div>
    <div><label>Program</label><span>Client Communications &amp; Updates</span></div>
    <div><label>Message Frequency</label><span>Up to 4 messages/month</span></div>
    <div><label>Costs</label><span>Msg &amp; data rates may apply</span></div>
    <div><label>To Opt Out</label><span>Reply STOP</span></div>
    <div><label>For Help</label><span>Reply HELP</span></div>
  </div>
</div>
```

### Content — All 10 Sections

**Section 1 — Program Description**
Messages may include: project updates and milestone notifications, appointment reminders and scheduling confirmations, promotional offers and service announcements, responses to website inquiries, follow-up communications.

**Section 2 — How to Opt In**
Methods: (a) checking SMS opt-in checkbox on contact form at moorgraphix.com/contact.html or moorgraphix.com/sms-compliance.html, (b) providing written consent during consultation/intake, (c) texting a designated keyword.
Confirmations required: authorized account holder, 18+, consent to recurring messages.
Bold line: "Consent to receive SMS messages is not a condition of purchasing any Moor Graphix service."

**Section 3 — Message Frequency**
Up to 4 messages per month. Frequency varies by project status. Will not send unnecessarily.

**Section 4 — Costs and Carrier Fees**
No charge from Moor Graphix. Msg + data rates may apply from wireless provider. Contact carrier for plan details. Carriers not liable for delayed/undelivered messages.

**Section 5 — How to Opt Out (STOP)**
Use `.mg-callout` box:
"To stop receiving messages from Moor Graphix at any time: Reply STOP to any text message you receive from us. After sending STOP, you will receive one final confirmation text acknowledging your opt-out. No further messages will be sent unless you opt back in."
Also: email sidart@moorgraphix.com with mobile number + removal request, or call (470) 499-4407.
Can re-enroll by contacting us or submitting new opt-in via website.

**Section 6 — How to Get Help (HELP)**
Reply HELP. Or contact: sidart@moorgraphix.com | (470) 499-4407 | moorgraphix.com/contact.html

**Section 7 — Privacy and Data Use**
Per Privacy Policy at moorgraphix.com/privacy-policy.html. No selling/renting/sharing of mobile number. Maintain opt-in consent records per TCPA.

**Section 8 — Limitations and Disclaimers**
Right to modify/suspend/terminate program. Not responsible for carrier failures or technical interruptions.

**Section 9 — Changes to These Terms**
Material changes communicated via SMS or this page. Continued participation = acceptance.

**Section 10 — Governing Law**
Georgia law + federal law including TCPA, 47 U.S.C. § 227, and FCC rules.

**Contact dark box at bottom** — same as privacy-policy.html.

---

## Task 3 — UPDATE: contact.html

**What to change:** Add SMS opt-in consent block inside the contact form, immediately before the Submit button.

**Locate:** The `<form>` or form section containing the phone number field and submit button.

**Add this block before the submit button:**
```html
<div class="mg-optin-block">
  <label>
    <input type="checkbox" name="sms_consent" value="yes" />
    By checking this box, I consent to receive recurring SMS text messages from 
    Moor Graphix at the mobile number provided above. Messages may include project 
    updates, appointment reminders, and promotional offers. Message frequency may 
    vary — up to 4 messages/month. Msg &amp; data rates may apply. Reply STOP to 
    unsubscribe at any time. Reply HELP for help. Consent is not a condition of 
    purchase. View our <a href="/sms-terms.html">SMS Terms</a> and 
    <a href="/privacy-policy.html">Privacy Policy</a>.
  </label>
</div>
```

**Also update** the phone field label from "Phone (Optional)" to:
```html
<label>Phone Number <span style="font-weight:400;color:#888;">(for project communication + optional SMS updates)</span></label>
```

---

## Task 4 — UPDATE: sms-compliance.html

**What to change:** Add footer links for Privacy Policy and SMS Terms if not already present. Add a brief line in any audit form or CTA section referencing the two new compliance pages.

**Locate the footer** and add the two links:
```html
<a href="/privacy-policy.html">Privacy Policy</a>
<a href="/sms-terms.html">SMS Terms</a>
```

**Locate any callout or CTA section** and add:
```html
<p>Our <a href="/privacy-policy.html">Privacy Policy</a> and 
<a href="/sms-terms.html">SMS Terms &amp; Conditions</a> are live and 
publicly accessible for 10DLC registration review.</p>
```

---

## Task 5 — UPDATE: All Pages (index, services, about, ai-workshop, blog, contact, sms-compliance)

**Add to the footer of EVERY page:**
```html
<a href="/privacy-policy.html">Privacy Policy</a>
<a href="/sms-terms.html">SMS Terms</a>
```

These must appear in the `.mg-footer-legal` div (or equivalent footer legal links section) on every page. If the footer already has a copyright line and a "Contact" link, add the two new links alongside them.

**Order:** `© 2026 Moor Graphix  |  Privacy Policy  |  SMS Terms  |  Contact`

---

## File Output Checklist

```
NEW FILES:
[ ] privacy-policy.html
[ ] sms-terms.html

UPDATED FILES:
[ ] contact.html       — SMS opt-in block added to form
[ ] sms-compliance.html — footer links + reference to new pages added
[ ] index.html         — footer links added
[ ] services.html      — footer links added
[ ] about.html         — footer links added
[ ] ai-workshop.html   — footer links added
[ ] blog.html          — footer links added
```

---

## Quality Checks Before Commit

1. Both new pages render correctly on mobile (max-width: 640px breakpoint)
2. All internal links (`/privacy-policy.html`, `/sms-terms.html`) resolve correctly
3. Contact form opt-in checkbox is NOT pre-checked (default = unchecked)
4. Footer on every page includes both Privacy Policy and SMS Terms links
5. Ticker on both new pages loops smoothly (test at 28s animation)
6. Headings use Arial bold, body text uses Georgia
7. Gold color `#c8a96e` consistent on all accent elements
8. No inline styles where class equivalents exist
9. All `<a target="_blank">` links include `rel="noopener noreferrer"`
10. Run the 5-point audit at moorgraphix.com/sms-compliance.html after deploy — all 5 should pass

---

## Contact Info (Used Throughout)

```
Business:  Moor Graphix
Owner:     Sid Washington
Email:     sidart@moorgraphix.com
Phone:     (470) 499-4407
Address:   Douglasville, GA — Serving Nationwide
Website:   https://moorgraphix.com
Calendar:  https://calendly.com/moorwashington
```

---

## Reference: Existing Page Patterns

The site is hosted on GitHub Pages (sidartifax-cpu.github.io) mapped to moorgraphix.com.
All assets in `/assets/images/branding/`. Logo file: `moor-graphix-logo.png`.
No build system — pure HTML/CSS/JS. No framework. No bundler.
All pages use inline `<style>` blocks in `<head>`. No external CSS files currently exist.
Match that pattern: inline `<style>` in `<head>` of each new page.
