#!/usr/bin/env node
/**
 * Repoverse & Feather Standard smoke test. Zero dependencies.
 * Usage: node tests/smoke.test.mjs
 */
import assert from "node:assert/strict";
import { checkFiles, checkFeather, REQUIRED_FILES, FEATHER_CODE_BYTES } from "../scripts/verify.mjs";

const { missing, packageOk } = checkFiles();

assert.equal(missing.length, 0, `Missing files: ${missing.join(", ")}`);
assert.equal(packageOk, true, "package.json does not parse");
assert.ok(REQUIRED_FILES.length >= 20, "Manifest should list at least 20 required files");

const feather = checkFeather();
assert.equal(
  feather.overBudget.length,
  0,
  `Code files over ${FEATHER_CODE_BYTES} bytes: ${feather.overBudget.map((f) => `${f.file} (${f.size} bytes)`).join(", ")}`
);

console.log(`Smoke test passed: ${REQUIRED_FILES.length} required files present, package.json parses, 0 code files over ${FEATHER_CODE_BYTES} bytes.`);
