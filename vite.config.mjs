import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import imageminPlugin from 'vite-plugin-imagemin'; // Import the imagemin plugin

export default defineConfig(() => {
  return {
    build: {
      outDir: 'build',
    },
    plugins: [
      react(),
      imageminPlugin({
        // Options for imagemin
        verbose: true,
        // Specify the images to optimize
        gifsicle: {
          optimizationLevel: 3,
        },
        // Add other image optimizations here
        // Example: pngquant, mozjpeg, etc.
        pngquant: {
          quality: [0.8, 0.9],
        },
        mozjpeg: {
          quality: 75,
        },
        webp: {
          quality: 75,
        },
      }),
    ],
  };
});