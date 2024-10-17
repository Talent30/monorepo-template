import react from "@eslint-react/eslint-plugin";
import reactComplierPlugin from "eslint-plugin-react-compiler";
import hooksPlugin from "eslint-plugin-react-hooks";

/** @type {Awaited<import('typescript-eslint').Config>} */
export default [
  {
    files: ["**/*.ts", "**/*.tsx"],
    ...react.configs["recommended-type-checked"],
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      "react-hooks": hooksPlugin,
      "react-compiler": reactComplierPlugin,
    },
    rules: {
      ...hooksPlugin.configs.recommended.rules,
      "react-compiler/react-compiler": "error",
    },
  },
];
