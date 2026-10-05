import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api/handbook-request': {
        target: 'https://www.sspartners.in',
        changeOrigin: true,
      },
      '/api/handbook-confirm': {
        target: 'https://www.sspartners.in',
        changeOrigin: true,
      },
    },
  },
})
