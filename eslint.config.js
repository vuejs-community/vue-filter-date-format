import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';

export default [
  {
    files: [
      'src/**/*.js',
      'src/**/*.ts'
    ],
    languageOptions: {
      parser: typescriptParser
    },
    plugins: {
      typescript: typescriptPlugin
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],

      'typescript/no-unused-vars': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    }
  }
];
