#!/usr/bin/env node
/**
 * One smoke test for the master template. Zero dependencies.
 * Runs the template check and the feather check, and asserts
 * both pass. See FEATHER_STANDARD.md for the feather rule.
 * Usage: node tests/smoke.test.mjs
 */
import assert from "node:assert/strict";
import { checkFiles, checkFeather, REQUIRED_FILES, FEATHER_CODE_BYTES } from "../scripts/verify.mjs";

const { missing, packageOk } = checkFiles();

assert.equal(missing.length, 0, `Missing files: ${missing.join(", ")}`);
assert.equal(packageOk, true, "package.json does not parse");
assert.ok(REQUIRED_FILES.length >= 20, "Template should list at least 20 required files");

const feather = checkFeather();
assert.equal(
  feather.overBudget.length,
  0,
  `Code files over ${FEATHER_CODE_BYTES} bytes: ${feather.overBudget.map((f) => `${f.file} (${f.size} bytes)`).join(", ")}`
);
assert.equal(feather.totalOver, false, `Master template total ${feather.totalBytes} bytes is over budget.`);

console.log(`Smoke test passed: ${REQUIRED_FILES.length} required files present, package.json parses, feather check passed (${feather.fileCount} files, ${feather.totalBytes} bytes, ${feather.dependencies.length} dependencies).`);
