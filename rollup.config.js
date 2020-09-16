import rollupPluginJson from '@rollup/plugin-json';
import rollupPluginTypeScript from '@wessberg/rollup-plugin-ts';

export default {
  input: './src/vue-filter-date-format.ts',
  output: [
    {
      exports: 'named',
      file: 'dist/vue-filter-date-format.esm.js',
      format: 'es',
      sourcemap: true
    },
    {
      exports: 'named',
      file: 'dist/vue-filter-date-format.cjs.js',
      format: 'commonjs',
      sourcemap: true
    }
  ],
  plugins: [
    rollupPluginJson(),
    rollupPluginTypeScript()
  ]
};
