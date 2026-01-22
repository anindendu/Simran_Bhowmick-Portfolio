import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html' // 👈 THIS FIXES THE ERROR
    }),

    paths: {
      base: process.env.NODE_ENV === 'production'
        ? '/Portfolio_Simran_Bhowmick'
        : '',
    }
  }
};

export default config;

