module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "security", "prettier"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "plugin:security/recommended",
    "plugin:jest/recommended",
    "plugin:import/typescript",
  ],
  parserOptions: {
    ecmaVersion: 2019,
    project: "./tsconfig.json",
    sourceType: "module",
  },
  rules: {},
  root: true,
};
