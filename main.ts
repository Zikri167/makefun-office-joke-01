// One-Line Office Joke: 24-Hour Sprint
// Writes a single original one-line office joke to /output/entry.txt.
// Node 22, stdlib only, deterministic, no network.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  'HR says our open-plan office "encourages collaboration" — which is how I know Dave\'s divorce lawyer\'s first name.';

// Gate: 1-200 characters, single line, not only whitespace, no trailing newline.
if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(`Joke length ${JOKE.length} is outside 1-200 characters.`);
}
if (/\n|\r/.test(JOKE) || JOKE.trim().length === 0) {
  throw new Error("Joke must be a single non-empty line.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
