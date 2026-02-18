#!/usr/bin/env node

/**
 * fix-workspace-links.mjs
 *
 * Creates symlinks for workspace packages under node_modules/@canvydocs/.
 * Bun on WSL2 sometimes fails to create these automatically.
 * This script is idempotent and safe to run on every install.
 */

import { mkdirSync, symlinkSync, lstatSync, readlinkSync, rmSync } from "fs";
import { resolve, relative } from "path";

const ROOT = resolve(import.meta.dirname, "..");

/** [symlink location, target directory] — all relative to ROOT */
const links = [
  // Root node_modules/@canvydocs/*
  ["node_modules/@canvydocs/ui", "packages/ui"],
  ["node_modules/@canvydocs/auth", "packages/auth"],
  ["node_modules/@canvydocs/api", "packages/api"],
  ["node_modules/@canvydocs/db", "packages/db"],
  ["node_modules/@canvydocs/common", "packages/common"],
  ["node_modules/@canvydocs/stripe", "packages/stripe"],
  ["node_modules/@canvydocs/eslint-config", "tooling/eslint-config"],
  ["node_modules/@canvydocs/prettier-config", "tooling/prettier-config"],
  ["node_modules/@canvydocs/tailwind-config", "tooling/tailwind-config"],
  ["node_modules/@canvydocs/typescript-config", "tooling/typescript-config"],

  // packages/auth needs @canvydocs/common
  ["packages/auth/node_modules/@canvydocs/common", "packages/common"],

  // packages/api needs @canvydocs/stripe, @canvydocs/common, @canvydocs/auth, @canvydocs/db
  ["packages/api/node_modules/@canvydocs/stripe", "packages/stripe"],
  ["packages/api/node_modules/@canvydocs/common", "packages/common"],
  ["packages/api/node_modules/@canvydocs/auth", "packages/auth"],
  ["packages/api/node_modules/@canvydocs/db", "packages/db"],
];

function ensureLink(linkPath, targetPath) {
  const absLink = resolve(ROOT, linkPath);
  const absTarget = resolve(ROOT, targetPath);

  // Ensure parent directory exists
  const parent = resolve(absLink, "..");
  mkdirSync(parent, { recursive: true });

  // Compute relative target from the link's parent
  const relTarget = relative(parent, absTarget);

  // Check if symlink already exists and points to the right place
  try {
    const stat = lstatSync(absLink);
    if (stat.isSymbolicLink()) {
      const existing = readlinkSync(absLink);
      if (existing === relTarget) {
        return; // Already correct
      }
      // Wrong target, remove and recreate
      rmSync(absLink);
    } else {
      // Not a symlink (maybe a real directory), remove it
      rmSync(absLink, { recursive: true });
    }
  } catch {
    // Does not exist, that's fine
  }

  symlinkSync(relTarget, absLink);
  console.log(`  linked ${linkPath} -> ${relTarget}`);
}

console.log("Fixing workspace symlinks...");
for (const [linkPath, targetPath] of links) {
  ensureLink(linkPath, targetPath);
}
console.log("Workspace symlinks OK.");
