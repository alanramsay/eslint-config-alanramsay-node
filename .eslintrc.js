module.exports = {
  extends: ['standard', 'prettier', 'plugin:security/recommended'],
  plugins: ['prettier'],
  rules: {
    'guard-for-in': 'error',
    'no-var': 'error',
    semi: ['error', 'always'],
    'no-extra-semi': 'error',
    'no-unused-vars': 'error',
    'no-duplicate-imports': 'error',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true
      }
    ],
    'standard/computed-property-even-spacing': 'off'
  },
  parser: 'babel-eslint',
  globals: {
    assert: false,
    browser: false,
    expect: false
  }
};
