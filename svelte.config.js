import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/sag_poc/', // GitHub repository name
  plugins: [
    svelte({
      preprocess: vitePreprocess()
    }),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'sag_poc',
        short_name: 'sag_poc',
        description: 'My Svelte PWA Proof of Concept',
        start_url: '/sag_poc/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ff3e00',
        icons: [
          {
            src: 'icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
