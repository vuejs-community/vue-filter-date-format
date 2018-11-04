import rollupPluginJson from 'rollup-plugin-json';
import rollupPluginTypeScript from 'rollup-plugin-typescript';

export default {
  experimentalCodeSplitting: true,
  input: './src/main.ts',
  output: {
    exports: 'named'
  },
  plugins: [
    rollupPluginJson(),
    rollupPluginTypeScript()
  ]
}
