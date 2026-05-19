import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Use relative asset paths so built `index.html` and assets
  // work when Vercel rewrites to index.html for SPA routes.
  base: './',
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
})
