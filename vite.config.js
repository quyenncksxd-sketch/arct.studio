import { defineConfig } from 'vite';

export default defineConfig({
  base: '/arct.studio/',
  server: {
    host: true,
    allowedHosts: true,
  },
});
