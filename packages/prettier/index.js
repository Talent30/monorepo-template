/** @typedef {import("prettier").Config} PrettierConfig */
/** @typedef {import("prettier-plugin-tailwindcss").PluginOptions} TailwindConfig */
/** @typedef {import("@ianvs/prettier-plugin-sort-imports").PluginConfig} SortImportsConfig */

/** @type { PrettierConfig | SortImportsConfig  } */

export default {
  plugins: [
    // "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  // tailwindConfig: fileURLToPath(
  //   new URL("../../tooling/tailwind/base.ts", import.meta.url),
  // ),
  tailwindFunctions: ["tv"],
  // importOrder: [
  //   "<TYPES>",
  //   "^(react/(.*)$)|^(react$)|^(react-native(.*)$)",
  //   "^(next/(.*)$)|^(next$)",
  //   "^(expo(.*)$)|^(expo$)",
  //   "<THIRD_PARTY_MODULES>",
  //   "",
  //   "<TYPES>^@acme",
  //   "^@acme/(.*)$",
  //   "",
  //   "<TYPES>^[.|..|~]",
  //   "^~/",
  //   "^[../]",
  //   "^[./]",
  // ],
  // importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  // importOrderTypeScriptVersion: "5.6.2",
  overrides: [
    {
      files: "*.json.hbs",
      options: {
        parser: "json",
      },
    },
    {
      files: "*.js.hbs",
      options: {
        parser: "babel",
      },
    },
  ],
};
