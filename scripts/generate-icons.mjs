import sharp from 'sharp';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = resolve(__dirname, '..', 'public');

function makeSvg(size) {
  const r = Math.round(size * 0.188);
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#6366f1"/>
      <stop offset="100%" style="stop-color:#4f46e5"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="${r}" fill="url(#bg)"/>
  <text x="256" y="200" text-anchor="middle" font-family="Georgia,serif" font-size="72" font-weight="bold" fill="rgba(255,255,255,0.95)">Verb</text>
  <text x="256" y="280" text-anchor="middle" font-family="Georgia,serif" font-size="48" font-style="italic" fill="rgba(255,255,255,0.7)">Daily</text>
  <line x1="160" y1="310" x2="352" y2="310" stroke="rgba(255,255,255,0.3)" stroke-width="2"/>
  <text x="256" y="380" text-anchor="middle" font-family="Georgia,serif" font-size="110" fill="rgba(255,255,255,0.85)">V</text>
</svg>`);
}

for (const size of [192, 512]) {
  await sharp(makeSvg(size))
    .resize(size, size)
    .png()
    .toFile(resolve(publicDir, `icon-${size}.png`));
  console.log(`Created icon-${size}.png`);
}

console.log('Done!');
