module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      { semi: false, singleQuote: true, parser: 'flow' },
    ],
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-props-no-spreading': 'off',

    // "arrow-body-style": "off",
    // "prefer-arrow-callback": "off",
    // "no-unused-vars": ["error", { vars: "local", args: "none" }],
    'react/prop-types': 'off',
    'global-require': 0,
    // "semicolon": [true, "always", "ignore-bound-class-methods"]
  },
  settings: {
    // "import/resolver": {
    //   alias: {
    //     map: [["@", "./client/src"]],
    //     extensions: [".js", ".jsx"],
    //   },
    // },
  },
}
