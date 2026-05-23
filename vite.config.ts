import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:5000',
          changeOrigin: true,
        },
      },
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    build: {
      // Target modern browsers — smaller bundle output
      target: 'es2020',
      // Minify with esbuild (fast) for JS
      minify: 'esbuild',
      // Split vendor chunks for better browser caching
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor':  ['react', 'react-dom'],
            'motion-vendor': ['motion'],
            'lucide-vendor': ['lucide-react'],
          },
        },
        // Remove unused code
        treeshake: {
          moduleSideEffects: false,
        },
      },
      // Warn if any chunk exceeds 500 KB
      chunkSizeWarningLimit: 500,
      // Enable CSS code splitting per chunk
      cssCodeSplit: true,
    },
  };
});
