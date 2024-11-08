import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Ensure all paths are relative
  plugins: [react()],
});
