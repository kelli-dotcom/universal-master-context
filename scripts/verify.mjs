#!/usr/bin/env node
/**
 * Master template check. Zero dependencies.
 * Confirms every required file in this template is present,
 * and that every code file is feather true: no code file over
 * 20 KB, and the master template itself under 60 KB total.
 * Docs and pictures are not code, so they are not counted.
 * See FEATHER_STANDARD.md for the rule and the budgets.
 * Usage: node scripts/verify.mjs
 */
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

export const REQUIRED_FILES = [
  "README.md",
  "AGENTS.md",
  "LICENSE",
  ".gitignore",
  ".env.example",
  "CHANGELOG.md",
  "HANDOFF.md",
  "mistakes.md",
  "llms.txt",
  "CONTRIBUTING.md",
  "package.json",
  "MASTER_MANIFEST.md",
  "MASTER_SPEC.md",
  "NATION.md",
  "ROUTES.md",
  "WHY_REPOVERSE.md",
  "FEATHER_STANDARD.md",
  "SECURITY.md",
  "CODE_OF_CONDUCT.md",
  "scripts/new-repo.mjs",
  "docs/START_HERE.md",
  "examples/example.md",
  "scripts/verify.mjs",
  "skills/agent-etiquette/SKILL.md",
  "skills/repo-audit/SKILL.md",
  "skills/skill-use/SKILL.md",
  "skills/likeness-gate/SKILL.md",
  "tests/smoke.test.mjs",
  ".github/pull_request_template.md",
  ".github/ISSUE_TEMPLATE/bug-report.md",
  ".github/workflows/ci.yml",
];

export const FEATHER_CODE_BYTES = 20480;
export const FEATHER_THEME_BYTES = 8192;
export const FEATHER_PER_FILE_BYTES = FEATHER_CODE_BYTES;
export const FEATHER_TEMPLATE_TOTAL_BYTES = 61440;

// Code files are checked by size. Docs and pictures are not
// code, so they are skipped here. A README is supposed to be
// long, and a picture is not code.
const CHECKED_EXTS = new Set([
  ".mjs", ".js", ".ts", ".tsx", ".jsx", ".css", ".json",
  ".yml", ".yaml", ".sh",
]);

// Generated or private folders are not code, so the feather
// check skips them. Everything else is checked by size.
const SKIP_DIRS = new Set([
  ".git",
  "node_modules",
  "dist",
  ".next",
  "out",
  "build",
  "blobs",
  "uploads",
  "sessions",
]);

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

export function checkFiles(rootDir = root) {
  const missing = REQUIRED_FILES.filter((f) => !existsSync(resolve(rootDir, f)));
  let packageOk = true;
  try {
    JSON.parse(readFileSync(resolve(rootDir, "package.json"), "utf8"));
  } catch {
    packageOk = false;
  }
  return { missing, packageOk };
}

function walk(dir, out) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = resolve(dir, entry.name);
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      walk(full, out);
    } else if (entry.isFile()) {
      out.push(full);
    }
  }
  return out;
}

export function checkFeather(rootDir = root) {
  const files = walk(rootDir, []);
  const overBudget = [];
  let totalBytes = 0;
  for (const full of files) {
    const size = statSync(full).size;
    totalBytes += size;
    const ext = full.slice(full.lastIndexOf(".")).toLowerCase();
    if (!CHECKED_EXTS.has(ext)) continue;
    if (size > FEATHER_CODE_BYTES) {
      overBudget.push({ file: full.replace(rootDir + "/", ""), size });
    }
  }
  let dependencies = [];
  try {
    const pkg = JSON.parse(readFileSync(resolve(rootDir, "package.json"), "utf8"));
    dependencies = Object.keys(pkg.dependencies || {});
  } catch {
    dependencies = [];
  }
  // The total budget applies to the master template only, not to a
  // child repo made from it. A real app grows, but every file in it
  // still has to stay under the per-file budget. The master is the
  // only folder that carries MASTER_MANIFEST.md.
  const isMaster = existsSync(resolve(rootDir, "MASTER_MANIFEST.md"));
  const totalOver = isMaster && totalBytes > FEATHER_TEMPLATE_TOTAL_BYTES;
  return { overBudget, totalBytes, fileCount: files.length, dependencies, totalOver, isMaster };
}

const isMain = process.argv[1] && resolve(process.argv[1]) === resolve(fileURLToPath(import.meta.url));
if (isMain) {
  const { missing, packageOk } = checkFiles();
  if (missing.length > 0) {
    console.error(`Missing ${missing.length} file(s):`);
    for (const f of missing) console.error(`  - ${f}`);
    process.exit(1);
  }
  if (!packageOk) {
    console.error("package.json does not parse.");
    process.exit(1);
  }
  console.log(`Template complete: ${REQUIRED_FILES.length} required files present, package.json parses.`);
  const feather = checkFeather();
  console.log(`Feather check: ${feather.fileCount} files, ${feather.totalBytes} bytes total, ${feather.dependencies.length} dependencies.`);
  if (feather.overBudget.length > 0) {
    console.error(`Feather fail: ${feather.overBudget.length} file(s) over ${FEATHER_PER_FILE_BYTES} bytes:`);
    for (const f of feather.overBudget) console.error(`  - ${f.file} (${f.size} bytes)`);
    process.exit(1);
  }
  if (feather.totalOver) {
    console.error(`Feather fail: master template total ${feather.totalBytes} bytes is over ${FEATHER_TEMPLATE_TOTAL_BYTES} bytes.`);
    process.exit(1);
  }
  console.log("Feather check passed: no code file over 20 KB.");
}
