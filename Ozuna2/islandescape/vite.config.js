import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',

      includeAssets: [
        'favicon.ico',
        'pwa-192x192.webp',
        'pwa-512x512.webp'
      ],

      manifest: {
        name: "Island Escape",
        short_name: "Island Escape",
        description: "Juego indie de acción, aventura y supervivencia.",
        theme_color: "#000000",
        background_color: "#000000",
        display: "standalone",
        start_url: "/",
        scope: "/",

        icons: [
          {
            src: "pwa-192x192.webp",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.webp",
            sizes: "512x512",
            type: "image/png",
          }
        ],

        // ✔❗ AÑADO SCREENSHOTS PARA QUITAR TUS ADVERTENCIAS
        screenshots: [
          {
            src: "screenshots/desktop.webp",
            sizes: "1280x720",
            type: "image/png",
            form_factor: "wide"
          },
          {
            src: "screenshots/mobile.webp",
            sizes: "720x1280",
            type: "image/png"
          }
        ]
      },

      devOptions: {
        enabled: true
      }
    })
  ]
});
 