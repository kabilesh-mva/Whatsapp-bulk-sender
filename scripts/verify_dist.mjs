/* Verifies the built unpacked extension in dist/ matches manifest.json references.
   Usage: node scripts/verify_dist.mjs [dist]  */
import { readFileSync, existsSync, readdirSync } from "node:fs";
import * as p from "node:path";

const readDirSafe = (d) => {
  try {
    return readdirSync(d);
  } catch {
    return null;
  }
};

const root = process.argv[2] || "dist";
const m = JSON.parse(readFileSync(p.join(root, "manifest.json"), "utf8"));
let ok = true;

function chk(f, label) {
  const e = existsSync(p.join(root, f));
  if (!e) ok = false;
  console.log((e ? "OK   " : "MISS ") + (label || f));
}

chk(m.background.service_worker, "service_worker: " + m.background.service_worker);
Object.values(m.icons).forEach((i) => chk(i, "icon " + i));
chk(m.action.default_popup, "popup " + m.action.default_popup);
m.content_scripts.forEach((cs) => cs.js.forEach((j) => chk(j, "content script " + j)));
for (const w of m.web_accessible_resources) {
  for (const r of w.resources) {
    if (r.endsWith("/*")) {
      // Glob entry: the directory itself must exist and contain files.
      const dir = r.slice(0, -2);
      const entries = existsSync(p.join(root, dir)) ? readDirSafe(p.join(root, dir)) : null;
      const good = !!entries && entries.length > 0;
      if (!good) ok = false;
      console.log((good ? "OK   " : "MISS ") + `WAR ${r} (${entries ? entries.length : 0} file(s))`);
    } else {
      chk(r, "WAR " + r);
    }
  }
}
chk("_locales/en/messages.json", "_locales/en/messages.json");

const msgs = JSON.parse(readFileSync(p.join(root, "_locales/en/messages.json"), "utf8"));
for (const k of ["extensionName", "extensionDescription", "actionTitle"]) {
  if (!msgs[k]) {
    ok = false;
    console.log("MISS locale key " + k);
  } else {
    console.log("OK   locale key " + k);
  }
}

// Every asset referenced by the built HTML pages must exist on disk.
for (const page of ["popup/index.html", "panel/index.html"]) {
  const html = readFileSync(p.join(root, page), "utf8");
  const dir = p.posix.dirname(page);
  for (const mm of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
    const ref = mm[1];
    if (/^(https?:|#|data:)/.test(ref)) continue;
    const target = p.posix.normalize(p.posix.join(dir, ref));
    const e = existsSync(p.join(root, target));
    if (!e) ok = false;
    console.log((e ? "OK   " : "MISS ") + page + " -> " + target);
  }
}

console.log(ok ? "ALL CHECKS PASSED" : "CHECKS FAILED");
process.exit(ok ? 0 : 1);
