/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['@rocketseat/eslint-config/next'],
  plugins: ['simples-import-sort'],
  rules: {
    'simples-import-sort/imports': 'error',
  },
}
