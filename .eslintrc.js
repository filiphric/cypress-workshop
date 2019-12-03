module.exports = {
  "env": {
      "browser": true,
      "node": true,
      "commonjs": true,
      "es6": true,
      "cypress/globals": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
      "sourceType": "module"
  },
  "rules": {
    "chai-friendly/no-unused-expressions": [2, { allowTernary: true }],
    "comma-spacing": ["error", { "before": false, "after": true }],
    "space-infix-ops": "error",
    "key-spacing": ["error", { "afterColon": true }],
    "arrow-spacing": ["error", { "before": true, "after": true }],
      "indent": [
          "error",
          2
      ],
      "linebreak-style": [
          "error",
          "unix"
      ],
      "quotes": [
          "error",
          "single"
      ],
      "semi": [
          "error",
          "always"
      ],
      "no-multiple-empty-lines": [
        "error", { 
          "max": 1, 
          "maxEOF": 1 }
        ],
      "padding-line-between-statements": [
          "error", { "blankLine": "always", "prev": "multiline-block-like", "next": "multiline-block-like" }  
        ],
      "no-console": "off"
  },
  "plugins": [
    "cypress",
    "chai-friendly"
  ]
};