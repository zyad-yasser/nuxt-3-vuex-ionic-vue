import { defineNuxtConfig } from 'nuxt3';

export default defineNuxtConfig({
  mode: 'spa',
	ssr: false,
  css: [
    '~/styles/global.sass',
  ],
  meta: [
    {
      name: 'color-scheme',
      content: 'light',
    }
  ]
});
