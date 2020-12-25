module.exports = {
  env: {
    es6: true,
    browser: true,
    commonjs: true,
  },

  parser: "@typescript-eslint/parser",

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },

  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended", // E
  ],

  plugins: [
    "@typescript-eslint",
    "eslint-comments",
    "react",
    "react-hooks",
    "react-native",
    "@react-native-community",
    "jest",
  ],

  settings: {
    react: {
      version: require("./package.json").dependencies.react,
    },
  },

  // Map from global var to bool specifying if it can be redefined
  globals: {
    __DEV__: true,
    __dirname: false,
    __fbBatchedBridgeConfig: false,
    alert: false,
    cancelAnimationFrame: false,
    cancelIdleCallback: false,
    clearImmediate: true,
    clearInterval: false,
    clearTimeout: false,
    console: false,
    document: false,
    escape: false,
    Event: false,
    EventTarget: false,
    exports: false,
    fetch: false,
    FormData: false,
    global: false,
    Map: true,
    module: false,
    navigator: false,
    process: false,
    Promise: true,
    requestAnimationFrame: true,
    requestIdleCallback: true,
    require: false,
    Set: true,
    setImmediate: true,
    setInterval: false,
    setTimeout: false,
    window: false,
    XMLHttpRequest: false,
  },

  rules: {
    "prettier/prettier": [
      2,
      {
        useTabs: false,
        printWidth: 120,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: "none",
        jsxBracketSameLine: false,
        semi: true,
        tabs: false,
        quoteProps: "as-needed",
        bracketSpacing: true,
        arrowParens: "always",
        flattenTernaries: true,
      },
    ],

    // General

    indent: [
      2,
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        FunctionDeclaration: {
          parameters: 1,
          body: 1,
        },
        FunctionExpression: {
          parameters: 1,
          body: 1,
        },
      },
    ],
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    // general
    "linebreak-style": ["error", "unix"],
    semi: ["error", "always"],
    "comma-dangle": [
      "error",
      {
        arrays: "never",
        objects: "never",
        imports: "never",
        exports: "never",
        functions: "ignore",
      },
    ],
    "object-curly-spacing": ["error", "always"],
    "eol-last": ["error", "always"],
    "no-console": "off",
    "no-restricted-syntax": [
      "error",
      {
        selector:
          "CallExpression[callee.object.name='console'][callee.property.name!=/^(warn|error|info|trace|disableYellowBox|tron)$/]",
        message: "Unexpected property on console object was called",
      },
    ],
    eqeqeq: ["error", "always"],
    // react
    "react/no-unescaped-entities": ["error", { forbid: [">", '"', "}"] }],
    "react/prop-types": [
      2,
      { ignore: ["action", "dispatch", "nav", "navigation"] },
    ],
    "react/display-name": 0,
    "react/jsx-boolean-value": 2,
    "react/jsx-no-undef": 2,
    "react/jsx-uses-react": 2,
    "react/jsx-sort-props": [
      2,
      {
        callbacksLast: true,
        shorthandFirst: true,
        ignoreCase: true,
        noSortAlphabetically: true,
      },
    ],
    "react/jsx-pascal-case": 2,
    "react/no-children-prop": 0,
    // react-native specific rules
    "react-native/no-unused-styles": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 2,
    "react-native/no-raw-text": 2,
    quotes: [2, "single", { avoidEscape: true, allowTemplateLiterals: false }],
  },
};
