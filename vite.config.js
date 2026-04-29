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
          toast: ['react-hot-toast'],
          scroll: ['react-scroll'],
          observer: ['react-intersection-observer'],
        },
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      }
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
})