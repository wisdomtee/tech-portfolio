import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // ✅ important for Netlify or subfolder builds
  build: {
    outDir: 'dist',
  },
})
