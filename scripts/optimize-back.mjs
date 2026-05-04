/**
 * Optimize back.png → back.avif + back.webp
 * High quality settings: AVIF q=82 chroma 4:4:4, WebP q=92 smart subsample.
 * Preserva detalhe dos cabos e do glow neon sem oversharpen.
 */
import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const SRC = "public/back.png";
const OUT_DIR = "public";

await mkdir(OUT_DIR, { recursive: true });

const base = sharp(SRC).sharpen({ sigma: 0.4, m1: 0.25, m2: 0.15 });

await Promise.all([
  base
    .clone()
    .avif({ quality: 82, effort: 7, chromaSubsampling: "4:4:4" })
    .toFile(`${OUT_DIR}/back.avif`),
  base
    .clone()
    .webp({ quality: 92, effort: 6, smartSubsample: true })
    .toFile(`${OUT_DIR}/back.webp`),
]);

console.log("✓ back.avif + back.webp generated");
