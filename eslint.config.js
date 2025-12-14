import eslintPluginAstro from "eslint-plugin-astro";
export default [
  // Ignore generated outputs
  { ignores: ["coverage/**", "dist/**"] },
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },
  },
];
