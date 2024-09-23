import globals from 'globals';
import airbnbBase from 'eslint-config-airbnb-base';
import pluginJest from 'eslint-plugin-jest';

export default [
  {
    files: ['*.js'],
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      globals: {
        ...globals.es2021,
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
    },
    plugins: {
      jest: pluginJest,
    },
    rules: {
      ...airbnbBase.rules,
      'max-classes-per-file': 'off',
      'no-underscore-dangle': 'off',
      'no-console': 'off',
      'no-shadow': 'off',
      'no-restricted-syntax': [
        'error',
        'LabeledStatement',
        'WithStatement',
      ],
    },
    settings: {
      'jest': {
        version: 26,
      },
    },
  },
  {
    files: ['*.test.js'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
];
