module.exports = [
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'commonjs',
      globals: {
        module: 'readonly',
        require: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': 'warn',
    },
  },
];