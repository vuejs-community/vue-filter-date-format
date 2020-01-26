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
    '!rc/**/*.spec.ts'
  ],
  require: [
    'ts-node/register',
    './ava.setup.js'
  ],
  typescript: true
};
