#!/usr/bin/env node
/**
 * Zero-dependency JSON validator for Agent Etiquette handoffs.
 * Enforces schemas/handoff.json exactly without adding external fields.
 * Usage: node scripts/validate-handoff.mjs <handoff.json> [schema.json]
 */
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export function validateHandoffObject(data, schema) {
  const errors = [];
  if (typeof data !== "object" || data === null || Array.isArray(data)) {
    return ["Root handoff payload must be a JSON object."];
  }

  const required = Array.isArray(schema.required) ? schema.required : [];
  for (const key of required) {
    if (!(key in data)) {
      errors.push(`Missing required field: "${key}"`);
    }
  }

  const props = schema.properties || {};
  if (schema.additionalProperties === false) {
    for (const key of Object.keys(data)) {
      if (!(key in props)) {
        errors.push(`Unexpected property not allowed by schema: "${key}"`);
      }
    }
  }

  for (const [key, rule] of Object.entries(props)) {
    if (!(key in data)) continue;
    const val = data[key];
    if (rule.type === "string") {
      if (typeof val !== "string") {
        errors.push(`Field "${key}" must be a string.`);
        continue;
      }
      if (typeof rule.minLength === "number" && val.length < rule.minLength) {
        errors.push(`Field "${key}" must have length >= ${rule.minLength}.`);
      }
      if (Array.isArray(rule.enum) && !rule.enum.includes(val)) {
        errors.push(`Field "${key}" must be one of: ${rule.enum.join(", ")} (got "${val}").`);
      }
    } else if (rule.type === "array") {
      if (!Array.isArray(val)) {
        errors.push(`Field "${key}" must be an array.`);
        continue;
      }
      if (rule.items?.type === "string") {
        val.forEach((item, idx) => {
          if (typeof item !== "string") {
            errors.push(`Field "${key}[${idx}]" must be a string.`);
          }
        });
      }
    }
  }

  return errors;
}

const isMain = process.argv[1] && resolve(process.argv[1]) === resolve(fileURLToPath(import.meta.url));
if (isMain) {
  const payloadPath = process.argv[2];
  const schemaPath = process.argv[3] || resolve(__dirname, "../schemas/handoff.json");
  if (!payloadPath) {
    console.error("Usage: node scripts/validate-handoff.mjs <handoff.json> [schema.json]");
    process.exit(2);
  }
  let schema;
  let payload;
  try {
    schema = JSON.parse(readFileSync(schemaPath, "utf8"));
  } catch (err) {
    console.error(`Failed to read schema at ${schemaPath}: ${err.message}`);
    process.exit(2);
  }
  try {
    payload = JSON.parse(readFileSync(payloadPath, "utf8"));
  } catch (err) {
    console.error(`Failed to parse handoff JSON at ${payloadPath}: ${err.message}`);
    process.exit(1);
  }

  const errors = validateHandoffObject(payload, schema);
  if (errors.length > 0) {
    console.error("INVALID HANDOFF:");
    for (const e of errors) console.error(`  - ${e}`);
    process.exit(1);
  }
  console.log(`VALID HANDOFF: ${payloadPath} matches ${schema.title || "handoff.json"}`);
}
