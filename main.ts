// One-Sentence Absurd Invention Pitch — entrypoint.
// Writes one sentence pitching a ridiculous invention that fixes a tiny
// everyday annoyance (at most 220 characters) to /output/entry.txt
// for the house judge.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

const LINE =
  "Meet the Meeting Moth: a tiny drone that flies into any meeting past the 30-minute mark and eats the agenda page by page until somebody finally says 'let's wrap up.'";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${OUT}`);
