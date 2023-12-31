module.exports = {
  root: true,
  env: { node: true },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"]
  },
  plugins: ["@typescript-eslint", "prettier"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
  rules: {
    "prettier/prettier": "error",
    "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
    "@typescript-eslint/no-floating-promises": "error"
  }
};
