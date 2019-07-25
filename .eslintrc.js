module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    createjs: false,
    TimelineMax: false,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-underscore-dangle': 'off',
    'no-param-reassign': 'off',
    // 'import/extensions': [{ js: 'always', json: 'never' }],
    'no-plusplus': 'off',
    'object-curly-newline': 'warn',
    'class-methods-use-this': 'off',
    'no-unused-expressions': 'off',
    'no-use-before-define': 'error',
    'consistent-return': 'warn',
    'object-shorthand': 'error',
    'no-multi-spaces': 'warn',
    'arrow-spacing': ['error', { before: true, after: true }],
    'space-in-parens': 'warn',
    'consistent-return': 'warn',
    'no-mixed-operators': 'warn',
    'no-bitwise': 'warn',
    'no-multiple-empty-lines': 'warn',
    'no-new': 'warn',
    'no-eval': 'warn',
    'no-lone-blocks': 'off',
    'no-return-assign': 'warn',
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
    'prefer-rest-params': 'warn',
    'react/no-string-refs': 'off',
    'react/require-default-props': 'off',
    'react/no-unused-prop-types': 'off',
    'react/no-deprecated': 'off',
    'react/prefer-stateless-function': 'warn',
  },
};
