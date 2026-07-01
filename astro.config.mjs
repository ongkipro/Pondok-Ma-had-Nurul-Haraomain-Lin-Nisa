// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  build: {
    // Inline all CSS into <style> so no stylesheet blocks initial render (PageSpeed: render-blocking requests)
    inlineStylesheets: 'always'
  },
  vite: {
    plugins: [tailwindcss()]
  }
});