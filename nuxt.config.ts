import { defineNuxtConfig } from 'nuxt3';

export default defineNuxtConfig({
  target: 'static',
  mode: 'spa',
  ssr: false,
  css: ['~/styles/global.sass'],
  server: {
    host: '0.0.0.0',
    port: 3000
  }
});
