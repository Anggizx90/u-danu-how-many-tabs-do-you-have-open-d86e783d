// How Many Tabs Do You Have Open? — make.fun entry
// Writes a single honest tab count, digits only, to /output/entry.txt.
//
// The number 1834 is the entry: a specific, non-round count of open browser
// tabs, chosen after surveying the field (see README.md). It is written as
// exactly four ASCII digits with no trailing newline, so the file is
// byte-identical on every run.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const COUNT = "1834";

mkdirSync(out, { recursive: true });
writeFileSync(join(out, "entry.txt"), COUNT, "utf8");
