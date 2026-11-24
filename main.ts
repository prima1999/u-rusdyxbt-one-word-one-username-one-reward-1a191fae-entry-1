import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry word is Prima's own make.fun username, one word and nothing else.
const word = "0x-down";

// The grader sets MAKEFUN_OUTPUT_DIR; default to /output when it is unset.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The one file the competition reads.
const entryPath = join(outputDir, "entry.txt");

// Create the output directory first, so the write below never fails.
mkdirSync(outputDir, { recursive: true });

// Write just the word, with no trailing newline and no extra text.
writeFileSync(entryPath, word, "utf8");
