module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-prettier"],
  rules: {
    "declaration-empty-line-before": null,
    "function-name-case": ["lower", { ignoreFunctions: [] }],
    "value-keyword-case": ["lower", { ignoreKeywords: [] }],
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["extends"],
      },
    ],
    "block-no-empty": null,
    "unit-whitelist": ["em", "rem", "s"],
  },
  ignoreFiles: ["node_modules/**", ".next"],
};
