#!/usr/bin/env node
/**
 * Removes redundant heading color utilities so headings inherit from body/parent.
 * Strips: text-black, text-zinc-950, text-zinc-900, text-gray-900, text-foreground
 * from h1–h6 className attributes. Unwraps <span className="text-black"> in headings.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = path.join(process.cwd(), "src");
const SKIP_DIRS = new Set(["deprecated", "node_modules", ".agents"]);
const HEADING_COLORS = new Set([
  "text-black",
  "text-zinc-950",
  "text-zinc-900",
  "text-gray-900",
  "text-foreground",
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

function stripHeadingColorsFromClass(classNames) {
  const parts = classNames.split(/\s+/).filter(Boolean);
  const next = parts.filter((p) => !HEADING_COLORS.has(p));
  return next.join(" ");
}

function processHeadingTags(content) {
  return content.replace(/<(h[1-6])(\s[^>]*?)>/gi, (match, tag, attrs) => {
    const classMatch = attrs.match(/className="([^"]*)"/);
    if (!classMatch) return match;

    const cleaned = stripHeadingColorsFromClass(classMatch[1]);
    if (cleaned === classMatch[1]) return match;

    const newAttrs = attrs.replace(classMatch[0], `className="${cleaned}"`);
    return `<${tag}${newAttrs}>`;
  });
}

function unwrapBlackSpans(content) {
  return content
    .replace(
      /<span className="text-black">([^<]*)<\/span>\s*\{" "\}/g,
      "$1 ",
    )
    .replace(
      /<span className="text-black">([^<]*)<\/span>\s*\{' '\}/g,
      "$1 ",
    )
    .replace(/<span className="text-black">([^<]*)<\/span>/g, "$1");
}

let changedFiles = 0;
let totalReplacements = 0;

for (const file of walkDir(ROOT)) {
  const original = fs.readFileSync(file, "utf8");
  let next = processHeadingTags(original);
  next = unwrapBlackSpans(next);

  if (next !== original) {
    fs.writeFileSync(file, next);
    changedFiles += 1;
    totalReplacements += 1;
  }
}

console.log(`Updated ${changedFiles} files under src/`);
