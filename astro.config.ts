import { defineConfig } from 'astro/config'

export default defineConfig({
  site: process.env.SITE || 'https://acreetionos.org',
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },
})
