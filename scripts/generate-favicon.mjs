/**
 * Génère app/favicon.ico (16 + 32 px, BMP dans conteneur ICO) sans dépendance :
 * carré navy #0A1F44, anneau or #C9A24B — même marque que app/icon.svg.
 * Usage : node scripts/generate-favicon.mjs
 */
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const NAVY = [0x44, 0x1f, 0x0a]; // BGR
const GOLD = [0x4b, 0xa2, 0xc9]; // BGR

function makeBmpIcon(sizePx) {
  const ringOuter = sizePx * 0.42;
  const ringInner = sizePx * 0.26;
  const dotCx = sizePx * 0.72;
  const dotCy = sizePx * 0.28;
  const dotR = sizePx * 0.11;
  const cx = sizePx / 2;
  const cy = sizePx / 2;

  const rowSize = sizePx * 4;
  const pixels = Buffer.alloc(rowSize * sizePx);
  // Lignes BMP stockées de bas en haut.
  for (let y = 0; y < sizePx; y++) {
    for (let x = 0; x < sizePx; x++) {
      const px = x + 0.5;
      const py = sizePx - 1 - y + 0.5;
      const dRing = Math.hypot(px - cx, py - cy);
      const dDot = Math.hypot(px - dotCx, py - dotCy);
      const isGold = (dRing <= ringOuter && dRing >= ringInner) || dDot <= dotR;
      const [b, g, r] = isGold ? GOLD : NAVY;
      const offset = y * rowSize + x * 4;
      pixels[offset] = b;
      pixels[offset + 1] = g;
      pixels[offset + 2] = r;
      pixels[offset + 3] = 0xff;
    }
  }

  // AND mask (tout opaque), aligné sur 32 bits par ligne.
  const maskRowSize = Math.ceil(sizePx / 32) * 4;
  const mask = Buffer.alloc(maskRowSize * sizePx);

  const header = Buffer.alloc(40);
  header.writeUInt32LE(40, 0); // biSize
  header.writeInt32LE(sizePx, 4); // biWidth
  header.writeInt32LE(sizePx * 2, 8); // biHeight (XOR + AND)
  header.writeUInt16LE(1, 12); // biPlanes
  header.writeUInt16LE(32, 14); // biBitCount
  header.writeUInt32LE(pixels.length + mask.length, 20); // biSizeImage

  return Buffer.concat([header, pixels, mask]);
}

const sizes = [16, 32];
const images = sizes.map(makeBmpIcon);

const headerSize = 6 + 16 * sizes.length;
const icondir = Buffer.alloc(6);
icondir.writeUInt16LE(0, 0); // réservé
icondir.writeUInt16LE(1, 2); // type ICO
icondir.writeUInt16LE(sizes.length, 4);

let offset = headerSize;
const entries = sizes.map((sizePx, i) => {
  const entry = Buffer.alloc(16);
  entry.writeUInt8(sizePx === 256 ? 0 : sizePx, 0); // largeur
  entry.writeUInt8(sizePx === 256 ? 0 : sizePx, 1); // hauteur
  entry.writeUInt8(0, 2); // palette
  entry.writeUInt8(0, 3); // réservé
  entry.writeUInt16LE(1, 4); // plans
  entry.writeUInt16LE(32, 6); // bits/pixel
  entry.writeUInt32LE(images[i].length, 8);
  entry.writeUInt32LE(offset, 12);
  offset += images[i].length;
  return entry;
});

const out = Buffer.concat([icondir, ...entries, ...images]);
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
writeFileSync(join(root, "app", "favicon.ico"), out);
console.log(`app/favicon.ico généré (${out.length} octets)`);
