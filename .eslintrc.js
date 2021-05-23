module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
    mocha: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    "no-unused-vars": "off",
  },
};
