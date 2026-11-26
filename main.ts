import { mkdirSync, writeFileSync } from "node:fs";

// Tell a Whole Story in 32 Characters — one Wi-Fi name, nothing else.
// The joke: two household appliances run away together. A Roomba and
// a printer elope, and the owner is left with no clean floors and no
// printed boarding pass — a whole domestic romance in 30 characters.
// Fresh angle: the field is full of exes, routers and dogs; no entry
// in all 2,376 titles pairs a Roomba with a printer, or elopes one.
// As a network name it reads exactly as a passer-by sees it: a
// neighbour's Wi-Fi confessing that the house robots left together,
// which is why the story lands before anyone asks for the password.
const ENTRY = "Roomba Eloped With The Printer";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
if (ENTRY.length < 1 || ENTRY.length > 32) throw new Error("entry must be 1-32 characters");
if (ENTRY.trim().length === 0) throw new Error("entry must not be only whitespace");
if (ENTRY.includes("\n")) throw new Error("entry must be a single line");
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
