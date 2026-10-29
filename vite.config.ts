import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';
import fs from 'fs';

// Moves dist/src/<name> -> dist/<name> so manifest paths stay clean
function flattenPages() {
  return {
    name: 'flatten-pages',
    closeBundle() {
      for (const name of ['popup', 'panel']) {
        const from = resolve(__dirname, 'dist/src', name);
        const to = resolve(__dirname, 'dist', name);
        if (fs.existsSync(from)) {
          fs.rmSync(to, { recursive: true, force: true });
          fs.renameSync(from, to);
        }
      }
      const leftover = resolve(__dirname, 'dist/src');
      if (fs.existsSync(leftover) && fs.readdirSync(leftover).length === 0) {
        fs.rmdirSync(leftover);
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), flattenPages()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        content: resolve(__dirname, 'src/content/index.ts'),
        background: resolve(__dirname, 'src/background/index.ts'),
        popup: resolve(__dirname, 'src/popup/index.html'),
        panel: resolve(__dirname, 'src/panel/index.html'),
      },
      output: {
        entryFileNames: (chunk) =>
          chunk.name === 'content' || chunk.name === 'background'
            ? '[name].js'
            : 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
  },
});
