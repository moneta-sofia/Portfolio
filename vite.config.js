import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          // Si usás react-router:
          router: ['react-router-dom'],
        }
      }
    },
    chunkSizeWarningLimit: 500,
  }
})