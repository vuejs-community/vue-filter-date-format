module.exports = () => ({
  autoDetect: true,
  files: [
    'src/**/*.js',
    'src/**/*.ts',
    '!src/**/*.spec.js',
    '!src/**/*.spec.ts'
  ],
  tests: [
    'src/**/*.spec.js',
    'src/**/*.spec.ts'
  ]
});
