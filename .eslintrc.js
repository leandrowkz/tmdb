/* eslint-disable no-undef */
/** @type {import('eslint').ESLint.ConfigData} */

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    'spaced-comment': 'error',
    'no-duplicate-imports': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'enumMember',
        format: ['UPPER_CASE'],
      },
    ],
  },
}
