#!/usr/bin/env node
/**
 * add-black-bg.js
 * Flatten transparent PNGs against a pure black background and save as JPG.
 *
 * Scans:
 *   assets/images/portfolio/**
 *   assets/images/hero-slideshow/
 *   assets/images/showcase-strip/
 *
 * For each .png found:
 *   1. Composite the image over a solid black canvas
 *   2. Save as .jpg (quality 95) at the same path
 *   3. Delete the original .png
 *
 * Then rewrites assets/js/images.js replacing every .png → .jpg reference
 * that was touched (portfolio, hero-slideshow, showcase-strip paths only).
 */

const sharp  = require('sharp');
const fs     = require('fs');
const path   = require('path');

const ROOT = path.resolve(__dirname, '..');

// ── Folders to scan (recursive for portfolio) ──────────────────────────────
const SCAN_DIRS = [
  path.join(ROOT, 'assets/images/portfolio'),
  path.join(ROOT, 'assets/images/hero-slideshow'),
  path.join(ROOT, 'assets/images/showcase-strip'),
];

// ── Collect all PNG files ──────────────────────────────────────────────────
function collectPngs(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...collectPngs(full));
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.png')) {
      results.push(full);
    }
  }
  return results;
}

const allPngs = SCAN_DIRS.flatMap(collectPngs);

if (allPngs.length === 0) {
  console.log('No PNG files found — nothing to do.');
  process.exit(0);
}

console.log(`Found ${allPngs.length} PNG file(s) to convert:\n`);

// ── Convert each PNG ───────────────────────────────────────────────────────
async function convertPng(pngPath) {
  const jpgPath = pngPath.replace(/\.png$/i, '.jpg');

  // Get image metadata to know the dimensions for the black canvas
  const meta = await sharp(pngPath).metadata();

  // Flatten: create solid black base, then composite the PNG on top
  await sharp({
    create: {
      width:      meta.width,
      height:     meta.height,
      channels:   3,
      background: { r: 0, g: 0, b: 0 },
    }
  })
    .composite([{ input: pngPath, blend: 'over' }])
    .jpeg({ quality: 95, mozjpeg: false })
    .toFile(jpgPath);

  fs.unlinkSync(pngPath);
  console.log(`  ✔  ${path.relative(ROOT, pngPath)}  →  ${path.relative(ROOT, jpgPath)}`);

  return {
    oldRel: path.relative(ROOT, pngPath).replace(/\\/g, '/'),
    newRel: path.relative(ROOT, jpgPath).replace(/\\/g, '/'),
  };
}

(async () => {
  const conversions = [];

  for (const p of allPngs) {
    try {
      conversions.push(await convertPng(p));
    } catch (err) {
      console.error(`  ✘  ${path.relative(ROOT, p)}: ${err.message}`);
    }
  }

  if (conversions.length === 0) {
    console.log('\nNo successful conversions — images.js not modified.');
    return;
  }

  // ── Patch images.js ─────────────────────────────────────────────────────
  const imagesJsPath = path.join(ROOT, 'assets/js/images.js');
  let src = fs.readFileSync(imagesJsPath, 'utf8');

  for (const { oldRel, newRel } of conversions) {
    // Match the path as it appears in src="" values (may start with assets/)
    const escaped = oldRel.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    src = src.replace(new RegExp(escaped, 'g'), newRel);
  }

  fs.writeFileSync(imagesJsPath, src, 'utf8');
  console.log(`\n✔  images.js updated — ${conversions.length} reference(s) patched.`);

  // ── Quick syntax check ───────────────────────────────────────────────────
  try {
    require(imagesJsPath);  // will throw if syntax is broken
    console.log('✔  images.js syntax OK');
  } catch (e) {
    console.error('✘  images.js syntax ERROR after patch:', e.message);
    console.error('    Restore from git or check the file manually.');
  }

  console.log('\nDone. Refresh the browser to see the changes.');
})();
