const path = require('path');

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  plugins: ['@typescript-eslint', 'import', 'prettier', 'testing-library', 'jest-dom'],
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:testing-library/react',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  rules: {
    // 추가 예정
    'react/prop-types': 0,
    '@typescript-eslint/no-var-requires': 0,
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json', './packages/**/tsconfig.json'],
      },
    },
    {
      files: ['**/*.spec.ts?(x)'],
      rules: {
        '@typescript-eslint/unbound-method': 'off',
        'jest/unbound-method': 'error',
      },
    },
    {
      files: ['packages/common-styles/**/*.ts?(x)', 'packages/common-styles/**/*.js?(x)'],
      settings: {
        'import/resolver': {
          typescript: {
            project: path.resolve(`${__dirname}/packages/common-styles/tsconfig.json`),
          },
        },
      },
    },
    {
      files: ['packages/knowlly-webview/**/*.ts?(x)', 'packages/knowlly-webview/**/*.js?(x)'],
      settings: {
        'import/resolver': {
          typescript: {
            project: path.resolve(`${__dirname}/packages/knowlly-webview/tsconfig.json`),
          },
        },
      },
    },
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.js'],
    },
    'import/resolver': {
      typescript: './tsconfig.json',
    },
  },
};
