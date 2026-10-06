import { existsSync, readFileSync } from "node:fs";

const strict = process.argv.includes("--strict");
const page = "views/crop-suitability.html";
const errors = [];
const warnings = [];

const required = [
  page,
  "views/partials/site-header.html",
  "views/partials/site-footer.html",
  "stylesheets/template.css",
  "src/main.js",
  "src/partials.js"
];
for (const file of required) {
  if (!existsSync(file)) errors.push(`Missing file: ${file}`);
}

if (existsSync(page)) {
  const html = readFileSync(page, "utf8");
  const scripts = html.match(/<script\b/g) || [];
  if (scripts.length !== 1) errors.push(`Expected exactly 1 <script> tag, found ${scripts.length}`);
  if (/\sstyle\s*=/.test(html)) errors.push("Inline style= is not allowed");
  if (/\sonclick\s*=/.test(html)) errors.push("Inline onclick= is not allowed");

  const src = /<iframe\b[^>]*\ssrc="([^"]*)"/.exec(html);
  if (!src) errors.push("Zone 2 iframe with a src attribute not found");
  else if (src[1].trim() === "") {
    (strict ? errors : warnings).push("Zone 2 iframe src is still empty");
  }
}

for (const w of warnings) console.warn(`warn: ${w}`);
for (const e of errors) console.error(`error: ${e}`);
if (errors.length > 0) process.exit(1);
console.log(`check-config ok${strict ? " (strict)" : ""}`);
