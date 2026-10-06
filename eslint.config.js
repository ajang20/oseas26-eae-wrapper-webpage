const browser = [
  "document",
  "window",
  "fetch",
  "console",
  "setTimeout",
  "clearTimeout",
  "URLSearchParams"
];
const node = ["process", "console"];
const globals = (names) => Object.fromEntries(names.map((n) => [n, "readonly"]));
const rules = {
  "no-var": "error",
  "prefer-const": "error",
  eqeqeq: "error",
  "no-unused-vars": "error",
  "no-undef": "error",
  "no-restricted-syntax": [
    "error",
    { selector: "ClassDeclaration", message: "Use plain functions, not classes (EAE style)." }
  ]
};
export default [
  {
    files: ["src/**/*.js"],
    languageOptions: { ecmaVersion: 2020, sourceType: "module", globals: globals(browser) },
    rules
  },
  {
    files: ["bin/**/*.js"],
    languageOptions: { ecmaVersion: 2020, sourceType: "module", globals: globals(node) },
    rules
  }
];
