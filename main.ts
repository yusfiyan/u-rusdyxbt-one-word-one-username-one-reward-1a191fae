// One Word, One Username, One Reward
// Entry: a single word, the handle this entry wears into the judge's ring.
// "quokka" — the happiest animal on Earth. It smiles in every photo,
// it fits in one word, and once you've seen it you don't forget it.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "quokka";

// Gate guard: mirror the sealed scorer before anything is written.
// One word, 1-30 characters, no whitespace, nothing else.
if (
  WORD.length < 1 ||
  WORD.length > 30 ||
  /\s/.test(WORD) ||
  WORD.trim() !== WORD
) {
  throw new Error(`entry word fails the gate: ${JSON.stringify(WORD)}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
