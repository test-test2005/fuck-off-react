import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  base: './',
  plugins: [
    tailwindcss(),
    react()
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
      'pages': path.resolve(import.meta.dirname, './src/pages'),
      'component': path.resolve(import.meta.dirname, './src/component'),
      'components': path.resolve(import.meta.dirname, './src/component'),
      'comoinent': path.resolve(import.meta.dirname, './src/component'),
    }
  }
});
