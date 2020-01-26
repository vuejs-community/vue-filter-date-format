export default {
  cache: true,
  concurrency: 4,
  extensions: [
    'ts',
    'vue'
  ],
  files: [
    'src/**/*.spec.ts'
  ],
  ignoredByWatcher: [
    '!src/**/*.spec.ts'
  ],
  require: [
    'ts-node/register',
    './ava.setup.js'
  ],
  typescript: true
};
