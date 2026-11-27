import { defineConfig } from 'vite';

// Relative asset paths let the same build run at both the domain root and
// a GitHub Pages repository path (for example: username.github.io/mikro-plan/).
export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
