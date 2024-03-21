module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    // "airbnb",
    // "airbnb-typescript",
    // "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname + "/..",
  },
  ignorePatterns: ["dist", "node_modules", ".eslintrc.cjs"],
  plugins: ["@typescript-eslint", "react", "prettier"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/require-default-props": "off",
    "react/function-component-definition": [
      2,
      {
        namedComponents: ["function-declaration", "arrow-function"],
        unnamedComponents: "function-expression",
      },
    ],
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    "no-console": "warn",
    "react/prop-types": "off",
    "react/jsx-uses-react": "off",
    "react/self-closing-comp": "warn",
    "react/no-array-index-key": "off",
    "import/prefer-default-export": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        args: "after-used",
        ignoreRestSiblings: false,
        argsIgnorePattern: "^_.*?$",
      },
    ],
    // "padding-line-between-statements": [
    //   "warn",
    //   { blankLine: "always", prev: "*", next: "return" },
    //   {
    //     blankLine: "always",
    //     prev: ["const", "let", "var", "block-like", "export"],
    //     next: "*",
    //   },
    //   {
    //     blankLine: "always",
    //     prev: ["const", "let", "var", "block-like", "export"],
    //     next: ["const", "let", "var", "block-like", "export"],
    //   },
    // ],
  },
};
