import { defineConfig } from 'astro/config'
import AstroPWA from '@vite-pwa/astro'

// https://astro.build/config
export default defineConfig({
  integrations: [
    AstroPWA({
      /* your pwa options */
    })
  ]
})