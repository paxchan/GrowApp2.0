import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // or https://localhost:5001 if using HTTPS
        changeOrigin: true,
        secure: false, // allows self-signed certs during development
      },
    },
  },
});
