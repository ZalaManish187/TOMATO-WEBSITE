import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/tomato-website/', // Ensure this matches your GitHub Pages repository name
});
