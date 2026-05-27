#!/usr/bin/env node
/**
 * Normalizes <p> tag colors to the two-tier system:
 * - Primary body: inherit --foreground (strip explicit primary color classes)
 * - Secondary/supporting: text-muted-foreground
 * Skips paragraphs on dark backgrounds (explicit light text classes).
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = path.join(process.cwd(), "src");
const SKIP_DIRS = new Set(["deprecated", "node_modules", ".agents"]);

const PRIMARY_COLORS = new Set([
  "text-black",
  "text-zinc-950",
  "text-zinc-900",
  "text-gray-900",
  "text-foreground",
  "text-foreground/70",
]);

const SECONDARY_COLORS = new Set([
  "text-gray-400",
  "text-gray-500",
  "text-gray-600",
  "text-gray-700",
  "text-gray-800",
  "text-zinc-400",
  "text-zinc-500",
  "text-zinc-600",
  "text-zinc-700",
  "text-zinc-800",
  "text-slate-500",
  "text-slate-600",
  "text-slate-700",
  "text-slate-800",
]);

const DARK_TEXT_INDICATORS = new Set([
  "text-white",
  "text-zinc-100",
  "text-zinc-200",
  "text-zinc-300",
  "text-gray-100",
  "text-gray-200",
  "text-gray-300",
]);

function walkDir(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      walkDir(full, files);
    } else if (/\.(tsx|jsx)$/.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

function normalizeParagraphClasses(classNames) {
  const parts = classNames.split(/\s+/).filter(Boolean);

  if (parts.some((p) => DARK_TEXT_INDICATORS.has(p))) {
    return classNames;
  }

  let hasSecondary = parts.some((p) => SECONDARY_COLORS.has(p));
  const next = [];
  let addedMuted = false;

  for (const part of parts) {
    if (PRIMARY_COLORS.has(part) || SECONDARY_COLORS.has(part)) {
      if (SECONDARY_COLORS.has(part)) {
        hasSecondary = true;
      }
      continue;
    }
    next.push(part);
  }

  if (hasSecondary && !next.includes("text-muted-foreground")) {
    next.push("text-muted-foreground");
    addedMuted = true;
  }

  const result = next.join(" ");
  return result === classNames && !addedMuted ? classNames : result;
}

function processParagraphTags(content) {
  return content.replace(/<p(\s[^>]*?)>/gi, (match, attrs) => {
    const classMatch = attrs.match(/className="([^"]*)"/);
    if (!classMatch) return match;

    const cleaned = normalizeParagraphClasses(classMatch[1]);
    if (cleaned === classMatch[1]) return match;

    const newAttrs = attrs.replace(classMatch[0], `className="${cleaned}"`);
    return `<p${newAttrs}>`;
  });
}

let changedFiles = 0;

for (const file of walkDir(ROOT)) {
  const original = fs.readFileSync(file, "utf8");
  const next = processParagraphTags(original);

  if (next !== original) {
    fs.writeFileSync(file, next);
    changedFiles += 1;
  }
}

console.log(`Updated ${changedFiles} files under src/`);
