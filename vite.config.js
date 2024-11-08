import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/<TOMATO-WEBSITE>/', // Replace <repository-name> with your repo name
  plugins: [react()],
});
