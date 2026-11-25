// Fortune Cookie for the Liquidated Trader — writes the entry to /output/entry.txt.
// Node 22, standard library only. The entry is one fortune cookie line (14 words,
// 85 characters) for a crypto trader who has just been liquidated.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ENTRY = fortune();

function fortune(): string {
  return "A great fortune awaits you — unfortunately, it is currently in someone else's wallet.";
}

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ENTRY + '\n', 'utf8');
