import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          emailjs: ['@emailjs/browser'],
          recaptcha: ['react-google-recaptcha'],
          sonner: ['sonner'],
          scroll: ['react-scroll'],
          observer: ['react-intersection-observer'],
        }
      }
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
})