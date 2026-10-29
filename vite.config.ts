import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

// Multi-entry build for a Chrome MV3 extension.
// - panel: the injected side-panel UI (content script bundle, IIFE so it can be
//   loaded with chrome.scripting.executeScript / <script> without modules)
// - content: the small loader that runs on web.whatsapp.com and mounts the panel
// - background: the service worker (kept as an ES module; MV3 SWs support type: module)
// - popup: the toolbar action page
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
    target: 'chrome110',
    rollupOptions: {
      input: {
        panel: resolve(__dirname, 'src/panel/index.html'),
        popup: resolve(__dirname, 'src/popup/index.html'),
        content: resolve(__dirname, 'src/content/index.ts'),
        background: resolve(__dirname, 'src/background/index.ts'),
      },
      output: {
        entryFileNames: (info) => {
          if (info.name === 'content') return 'content.js';
          if (info.name === 'background') return 'background.js';
          return 'assets/[name].js';
        },
      },
    },
  },
});
