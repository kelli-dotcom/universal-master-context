#!/usr/bin/env node
/**
 * Make a new repo from this master. Zero dependencies.
 * Usage: node scripts/new-repo.mjs <project-name> <new-folder>
 * Example: node scripts/new-repo.mjs my-kit ../my-kit
 *
 * It copies every file in this template, except the master-only
 * files (MASTER_MANIFEST.md and WHY_REPOVERSE.md stay here),
 * and fills in the project name in README.md and package.json.
 * It does not create a GitHub repo and it does not push anything.
 * That part is yours, on purpose.
 */
import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const [name, destArg] = process.argv.slice(2);
if (!name || !destArg) {
  console.error("Usage: node scripts/new-repo.mjs <project-name> <new-folder>");
  process.exit(2);
}
const dest = resolve(process.cwd(), destArg);
if (existsSync(dest) && readdirSync(dest).length > 0) {
  console.error(`Folder ${dest} already exists and is not empty. Pick an empty folder.`);
  process.exit(1);
}
mkdirSync(dest, { recursive: true });
for (const entry of readdirSync(root, { withFileTypes: true })) {
  if (entry.name === ".git") continue;
  if (entry.name === "MASTER_MANIFEST.md") continue;
  if (entry.name === "WHY_REPOVERSE.md") continue;
  if (entry.name === "scripts" && entry.isDirectory()) {
    // Copy scripts, but not this new-repo script itself into the child.
    // The child gets verify.mjs, and new-repo stays with the master.
    const srcDir = resolve(root, "scripts");
    const dstDir = resolve(dest, "scripts");
    mkdirSync(dstDir, { recursive: true });
    for (const f of readdirSync(srcDir)) {
      if (f === "new-repo.mjs") continue;
      cpSync(resolve(srcDir, f), resolve(dstDir, f));
    }
    continue;
  }
  cpSync(resolve(root, entry.name), resolve(dest, entry.name), { recursive: true });
}
// The child is a project, not the master, so its check must not
// require master-only files. Strip only the exact required-file
// lines for those three from its verify list. Do not strip any
// other line that merely mentions them, or the check breaks.
const verifyPath = resolve(dest, "scripts/verify.mjs");
if (existsSync(verifyPath)) {
  const masterOnly = /^\s*"(MASTER_MANIFEST\.md|WHY_REPOVERSE\.md|scripts\/new-repo\.mjs)",?\s*$/;
  const lines = readFileSync(verifyPath, "utf8").split("\n").filter((l) => !masterOnly.test(l));
  writeFileSync(verifyPath, lines.join("\n"), "utf8");
}
const readmePath = resolve(dest, "README.md");
if (existsSync(readmePath)) {
  writeFileSync(readmePath, readFileSync(readmePath, "utf8").replace("[Your project name]", name), "utf8");
}
const pkgPath = resolve(dest, "package.json");
if (existsSync(pkgPath)) {
  const pkg = JSON.parse(readFileSync(pkgPath, "utf8"));
  pkg.name = name;
  pkg.description = name;
  writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n", "utf8");
}
console.log(`Made ${name} at ${dest}. Next: fill in docs/START_HERE.md, then run node tests/smoke.test.mjs.`);
