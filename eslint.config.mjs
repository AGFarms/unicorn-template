// Flat config for ESLint v9.
// We intentionally avoid `next lint` (still legacy-config-only on v15.1) and
// run a minimal, modern setup directly.
import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    },
  },
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "dist/**",
      "playwright-report/**",
      "test-results/**",
      "next-env.d.ts",
    ],
  },
];
