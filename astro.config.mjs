// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  vite: {
    plugins: [
      tailwindcss(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.svg'],
        manifest: {
          name: 'Real Online Compass',
          short_name: 'Compass',
          description: 'Free online compass, spirit level, inclinometer, speedometer, light meter & EMF meter.',
          theme_color: '#fafafa',
          background_color: '#fafafa',
          display: 'standalone',
          scope: '/',
          start_url: '/',
          icons: [
            {
              src: '/favicon.svg',
              sizes: 'any',
              type: 'image/svg+xml',
            },
          ],
        },
      }),
    ],
  },
});
