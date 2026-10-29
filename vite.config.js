import { dirname } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Chrome/Brave unpacked extensions need real files at fixed paths:
//   dist/background.js  dist/content.js  dist/popup/index.html  dist/panel/index.html
// Vite's default build hashes file names and nests HTML pages under src/, which
// breaks manifest.json references ("Could not load JavaScript 'content.js'").
// We declare every extension entry point in `build.rollupOptions.input`, force
// stable output names, and relocate the built HTML pages to their manifest paths.
// Everything in `public/` (manifest.json, icons, _locales) is copied verbatim.
const ROOT = dirname(new URL(import.meta.url).pathname);

/** Move dist/src/<name>/index.html → dist/<name>/index.html and rebase asset URLs. */
function flattenExtensionPages() {
  let resolvedOutDir = "dist";
  return {
    name: "flatten-extension-pages",
    apply: "build",
    configResolved(config) {
      resolvedOutDir = config.build.outDir.startsWith("/")
        ? config.build.outDir
        : `${config.root}/${config.build.outDir}`;
    },
    async writeBundle() {
      const { promises: fs } = await import("node:fs");
      for (const page of ["popup", "panel"]) {
        const from = `${resolvedOutDir}/src/${page}/index.html`;
        const to = `${resolvedOutDir}/${page}/index.html`;
        let html;
        try {
          html = await fs.readFile(from, "utf8");
        } catch {
          continue; // page not part of this build
        }
        // The page was emitted one directory deeper — rebase relative asset URLs.
        html = html.replaceAll("../../assets/", "../assets/");
        await fs.mkdir(`${resolvedOutDir}/${page}`, { recursive: true });
        await fs.writeFile(to, html);
        await fs.rm(`${resolvedOutDir}/src/${page}`, { recursive: true, force: true });
      }
      // Drop the now-empty dist/src tree.
      await fs.rm(`${resolvedOutDir}/src`, { recursive: true, force: true });
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), flattenExtensionPages()],
  base: "./",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        // Dev/portfolio landing page (harmless inside an extension package).
        main: `${ROOT}/index.html`,
        background: `${ROOT}/src/background/index.ts`,
        content: `${ROOT}/src/content/index.ts`,
        popup: `${ROOT}/src/popup/index.html`,
        panel: `${ROOT}/src/panel/index.html`,
      },
      output: {
        // Fixed names for the scripts referenced directly by manifest.json —
        // these must never be content-hashed or the browser cannot find them.
        entryFileNames: (chunk) => {
          if (chunk.name === "background") return "background.js";
          if (chunk.name === "content") return "content.js";
          return "assets/[name]-[hash].js";
        },
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name ?? "";
          // Keep CSS chunks flat and predictable.
          if (name.endsWith(".css")) return "assets/[name][extname]";
          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
    hmr: {
      port: 3000,
    },
  },
});
