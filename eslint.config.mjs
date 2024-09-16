import pluginJs from "@eslint/js"
import eslintPluginPrettier from "eslint-plugin-prettier/recommended"
import globals from "globals"
import tseslint from "typescript-eslint"

export default [
  {
    languageOptions: {
      globals: {
        ...globals.node, // Já configurado para ambiente Node.js
        ...globals.jest, // Adiciona suporte ao ambiente Jest
      },
    },
  },
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  ...tseslint.configs.recommended,
  pluginJs.configs.recommended,
  eslintPluginPrettier,
  {
    rules: {
      "capitalized-comments": [
        "warn",
        "always",
        {
          ignoreConsecutiveComments: true,
          ignorePattern: "const|if|let|var|return|expect",
        },
      ],
    },
  },
]
