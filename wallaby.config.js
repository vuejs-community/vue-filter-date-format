const wallabyVueCompiler = require('wallaby-vue-compiler');

module.exports = wallaby => ({
  compilers: {
    '**/*.ts': wallaby.compilers.typeScript(),
    '**/*.vue': wallabyVueCompiler(wallaby.compilers.typeScript())
  },
  debug: true,
  env: {
    params: {
      runner: `-r ${require.resolve('esm')}`,
    },
    runner: 'node',
    type: 'node'
  },
  files: [
    'src/**/*.ts',
    'src/**/*.vue',
    '!src/**/*.spec.ts'
  ],
  setup() {
    require('jsdom-global')();
  },
  testFramework: 'ava',
  tests: [
    'src/**/*.spec.ts'
  ]
});
