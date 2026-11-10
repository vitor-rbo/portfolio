import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    // The hero gradient (@shadergradient/react -> zustand) needs this CommonJS shim
    // pre-bundled up front, otherwise the dev server serves it without a default export.
    include: ['@shadergradient/react', 'zustand/traditional', 'use-sync-external-store/shim/with-selector'],
  },
})
