import vitePluginDTS from 'vite-plugin-dts';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      formats: ['cjs', 'es', 'umd'],
      name: 'VueFilterDateFormat'
    }
  },
  plugins: [
    vitePluginDTS({
      insertTypesEntry: true
    })
  ]
});
