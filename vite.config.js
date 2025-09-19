import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'https://irbis-trade.uz',
        changeOrigin: false,
        secure: true,
        rewrite: path => path.replace(/^\/api/, '/api'),
      }
    }
  }
});