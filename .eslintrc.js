module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
  },
  env: {
    browser: true,
    es2020: true,
  },
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  rules: {
    "no-unused-vars": "warn",
  },
};
