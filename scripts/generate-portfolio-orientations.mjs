// Reads every portfolio image's actual pixel dimensions and writes a
// filename -> orientation map to data/portfolio-orientations.json.
// Run this whenever you add/replace images: npm run gen:orientations
import { imageSizeFromFile } from "image-size/fromFile";
import { writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const CATEGORIES = [
  { id: "events", count: 12 },
  { id: "venue", count: 0 },
  { id: "wedding", count: 12 },
  { id: "decor-styling", count: 7 },
  { id: "corporate", count: 12 },
  { id: "entertainment", count: 0 },
  { id: "invitation", count: 0 },
  { id: "special", count: 9 },
];

const PUBLIC_DIR = path.join(process.cwd(), "public", "images", "our-work");

async function run() {
  const orientations = {};
  let missing = 0;

  for (const category of CATEGORIES) {
    for (let n = 1; n <= category.count; n++) {
      const id = `${category.id}-${n}`;
      const filePath = path.join(PUBLIC_DIR, `${id}.jpg`);

      if (!existsSync(filePath)) {
        console.warn(`⚠️  Missing file, skipping: ${id}.jpg`);
        missing++;
        continue;
      }

      try {
        const { width, height } = await imageSizeFromFile(filePath);
        orientations[id] = height > width ? "portrait" : "landscape";
      } catch (err) {
        console.warn(`⚠️  Could not read ${id}.jpg:`, err.message);
      }
    }
  }

  const outPath = path.join(process.cwd(), "data", "portfolio-orientations.json");
  await writeFile(outPath, JSON.stringify(orientations, null, 2) + "\n");

  console.log(`✅ Wrote ${Object.keys(orientations).length} orientations to ${outPath}`);
  if (missing > 0) console.log(`   (${missing} files were missing and skipped)`);
}

run();