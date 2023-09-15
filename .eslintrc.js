/** @type {import('eslint/lib/shared/types').ConfigData} */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended'],
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.vue'],
      extends: [
        'plugin:@typescript-eslint/strict',
        'plugin:@typescript-eslint/stylistic',
      ],
      rules: {
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/consistent-type-imports': 'error', // tsconfig の verbatimModuleSyntax の代わり
        '@typescript-eslint/no-import-type-side-effects': 'error', // tsconfig の verbatimModuleSyntax の代わり
      },
    },
    {
      files: ['*.ts'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'error',
      },
    },
    {
      // Vue
      files: '*.vue',
      extends: ['plugin:vue/vue3-recommended'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        ...require('@typescript-eslint/eslint-plugin').configs[
          'eslint-recommended'
        ].overrides[0].rules,
        'vue/no-v-html': 'off',
      },
    },
    {
      // Nuxt page components
      files: 'pages/**/[a-z]*.vue',
      rules: {
        'vue/multi-word-component-names': 'off',
      },
    },
    {
      // Prettier
      files: ['*.*'],
      extends: ['prettier'],
    },
  ],
};
