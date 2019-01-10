export default {
  cache: true,
  compileEnhancements: false,
  concurrency: 4,
  extensions: [
    'ts',
    'vue'
  ],
  files: [
    'src/**/*.spec.ts'
  ],
  require: [
    'ts-node/register',
    './ava.setup.js'
  ],
  sources: [
    'src/**/*.ts',
    'src/**/*.vue',
    '!src/**/*.spec.ts'
  ],
  typescript: true
};
