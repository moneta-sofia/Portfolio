import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { webfontDownload } from 'vite-plugin-webfont-dl'

export default defineConfig({
  plugins: [
    react(),
    webfontDownload([
      'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;700;800&display=swap',
    ]),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          framer: ['framer-motion'],
          icons: ['react-icons'],
          emailjs: ['@emailjs/browser'],
          recaptcha: ['react-google-recaptcha'],
          sonner: ['sonner'],
          scroll: ['react-scroll'],
          observer: ['react-intersection-observer'],
        }
      }
    },
  }
})