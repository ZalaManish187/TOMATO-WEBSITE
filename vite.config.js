import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/TOMATO-WEBSITE/',  // Correct repository name
  plugins: [react()],
});
