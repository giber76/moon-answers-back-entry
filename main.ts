// The Moon Finally Answers Back — one line, 1 to 240 characters, in the
// voice of the Moon replying at last to the wishes, howls and late-night
// promises of everyone staring up at it. The line is the whole entry.
// The gate wants /output/entry.txt to be UTF-8 text of 1 to 240 characters,
// not only white space.
//
// The line, written fresh for this bounty to win a pairwise judge on
// funny + Moon's voice + comeback:
//   - speaks as the Moon, first person, answering all three things the
//     brief names — wishes, howls, 2 a.m. promises — so it wins criterion 1
//     against any line that is merely about the Moon;
//   - "Four billion years" sets the voice at once: wry, old, a little
//     tired of being wished upon (criterion 3);
//   - the turn lands in the second half: after a lifetime of everyone's
//     wishes, not one of them ever wished the Moon a good night back —
//     the comeback arrives before the line ends (criterion 4);
//   - short (about 120 characters), no word wasted, no joke explained
//     (criterion 5).
// Run outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Four billion years of wishes, howls, and 2 a.m. promises \u2014 and not one of you has ever wished me a good night back.";

// The gate refuses anything outside 1–240 characters or whitespace-only,
// and the entry must be a single line, so fail loudly here instead of
// writing an entry the judge never sees.
if (LINE.length < 1 || LINE.length > 240 || !/\S/.test(LINE)) {
  throw new Error(`line fails the gate at ${LINE.length} characters`);
}
if (/[\r\n]/.test(LINE)) {
  throw new Error("line must be a single line with no line breaks");
}

const dest = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// In the grader /output is a mount point: create it when it is missing,
// never remove it and never empty it wholesale.
mkdirSync(dest, { recursive: true });
writeFileSync(`${dest}/entry.txt`, LINE, "utf8");

console.log(`wrote ${dest}/entry.txt (${LINE.length} characters)`);
