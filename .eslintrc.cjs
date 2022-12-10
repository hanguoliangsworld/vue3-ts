module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:vue/vue3-recommended", "plugin:prettier/recommended"],
  plugins: ["prettier", "vue"],
  rules: {
    "no-console": 0,
    "prettier/prettier": [
      "error",
      {
        singleQuote: false, //使用单引号
        trailingComma: "all", //有效的尾随逗号（对象、数组等）
        bracketSameLine: true,
        endOfLine: "auto",
      },
    ],
    "vue/no-multiple-template-root": 0,
  },
};
