import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
  },
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    // setupFiles: './src/setupTests.ts', // Will add this back later
  },
});
