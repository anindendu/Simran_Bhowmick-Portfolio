import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    // adapter-static config
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html', // GitHub Pages specifically looks for 404.html for SPAs
      precompress: false,
      strict: true
    }),

    paths: {
      // This must match your repo name exactly: Simran_Bhowmick-Portfolio
      base: process.env.NODE_ENV === 'production' 
        ? '/Simran_Bhowmick_Portfolio' 
        : '',
    }
  }
};

export default config;