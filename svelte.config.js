import { defineConfig } from 'vite';

export default defineConfig({
  base: '/sag_poc/', // GitHub repository name
  build: {
    assetsDir: '.', // Use relative assets directory
  },  
});
