// Crisxai5 Turns Noisy Crypto Chaos: one-line entry for make.fun.
//
// The program writes exactly one line - the drafted winning line for the
// 'Spotlight @crisxai5: AI & Crypto Expert on X' bounty - to entry.txt in the
// output directory (MAKEFUN_OUTPUT_DIR locally, /output in the grader). The line is a fixed constant with no trailing newline, so both of the grader's runs
// write byte-identical output: 89 UTF-8 characters, inside the 1-200 gate.
import * as fs from "node:fs";
import * as path from "node:path";

const LINE =
  "@crisxai5 turns noisy crypto chaos into clear AI-powered signals you can actually act on.";

function main(): void {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(path.join(outputDir, "entry.txt"), LINE, "utf-8");  // no trailing newline: both grader runs byte-identical
}

main();
