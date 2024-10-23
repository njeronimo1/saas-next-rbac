/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['@rocketseat/eslint-config/react'],
  plugins: ['simples-import-sort'],
  rules: {
    'simples-import-sort/imports': 'error'
  }
}