/**
 * Optimize bridge.png → bridge.avif + bridge.webp
 * Applies a subtle unsharp mask to recover cable crispness
 * without oversaturating the glow.
 */
import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const SRC = "public/bridge.png";
const OUT_DIR = "public";

await mkdir(OUT_DIR, { recursive: true });

const base = sharp(SRC).sharpen({ sigma: 0.6, m1: 0.3, m2: 0.2 });

await Promise.all([
  base
    .clone()
    .avif({ quality: 62, effort: 6, chromaSubsampling: "4:4:4" })
    .toFile(`${OUT_DIR}/bridge.avif`),
  base
    .clone()
    .webp({ quality: 82, effort: 6, smartSubsample: true })
    .toFile(`${OUT_DIR}/bridge.webp`),
]);

console.log("✓ bridge.avif + bridge.webp generated");
