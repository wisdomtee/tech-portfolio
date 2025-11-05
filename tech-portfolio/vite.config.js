import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  css: {
    // Disable lightningcss for compatibility with Netlify’s Linux build system
    lightningcss: false,
  },
  build: {
    outDir: "dist",
  },
});
