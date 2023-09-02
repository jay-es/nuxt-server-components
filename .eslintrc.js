/** @type {import('eslint/lib/shared/types').ConfigData} */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/strict',
    'plugin:@typescript-eslint/stylistic',
    'prettier',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  plugins: ['simple-import-sort'],
  rules: {
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/consistent-type-imports': 'error', // tsconfig の verbatimModuleSyntax の代わり
    '@typescript-eslint/no-import-type-side-effects': 'error', // tsconfig の verbatimModuleSyntax の代わり
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  overrides: [
    {
      files: '*.vue',
      rules: {
        'no-undef': 'off',
        'vue/no-v-html': 'off',
      },
    },
    {
      files: 'pages/**/*.vue',
      rules: {
        'vue/multi-word-component-names': 'off',
      },
    },
  ],
};
