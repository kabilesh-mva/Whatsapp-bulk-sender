import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { readFileSync, writeFileSync, existsSync, rmSync, mkdirSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * Vite treats HTML entry points as relative to the project root, so
 * `src/panel/index.html` would otherwise be emitted to `dist/src/panel/...`.
 * Chrome's manifest expects `panel/index.html` and `popup/index.html` at the
 * dist root — this small plugin relocates them after each build.
 */
function flattenHtmlEntries(): Plugin {
  const moves: Array<[string, string]> = [
    ['src/panel/index.html', 'panel/index.html'],
    ['src/popup/index.html', 'popup/index.html'],
  ];
  return {
    name: 'flatten-html-entries',
    apply: 'build',
    closeBundle() {
      const outDir = resolve(__dirname, 'dist');
      for (const [from, to] of moves) {
        const srcFile = join(outDir, from);
        const destFile = join(outDir, to);
        if (!existsSync(srcFile)) continue;
        let html = readFileSync(srcFile, 'utf8');
        // Vite emits root-absolute URLs ("/assets/x.js"). Extensions cannot use
        // those (chrome-extension://<id>/assets/... resolves outside the page),
        // so rewrite every absolute reference to be relative to this file.
        html = html.replace(/(["'(])\/(assets\/|panel\/|popup\/|icons\/)/g, '$1../$2');
        mkdirSync(dirname(destFile), { recursive: true });
        writeFileSync(destFile, html);
        rmSync(srcFile);
      }
      // Remove now-empty dist/src tree
      const srcTree = join(outDir, 'src');
      if (existsSync(srcTree)) rmSync(srcTree, { recursive: true, force: true });
    },
  };
}

// Multi-entry build for a Chrome MV3 extension.
// - panel: the injected side-panel UI (content script bundle, IIFE so it can be
//   loaded with chrome.scripting.executeScript / <script> without modules)
// - content: the small loader that runs on web.whatsapp.com and mounts the panel
// - background: the service worker (kept as an ES module; MV3 SWs support type: module)
// - popup: the toolbar action page
export default defineConfig({
  plugins: [react(), flattenHtmlEntries()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
    target: 'chrome110',
    modulePreload: false,
    rollupOptions: {
      input: {
        panel: resolve(__dirname, 'src/panel/index.html'),
        popup: resolve(__dirname, 'src/popup/index.html'),
        inject: resolve(__dirname, 'src/panel/inject.tsx'),
        content: resolve(__dirname, 'src/content/index.ts'),
        background: resolve(__dirname, 'src/background/index.ts'),
      },
      output: {
        entryFileNames: (info) => {
          if (info.name === 'content') return 'content.js';
          if (info.name === 'background') return 'background.js';
          if (info.name === 'inject') return 'panel/inject.js';
          return 'assets/[name].js';
        },
        assetFileNames: (info) => {
          const name = info.name ?? '';
          if (name.endsWith('.css')) return 'assets/panel.css';
          return 'assets/[name][extname]';
        },
      },
    },
  },
});
