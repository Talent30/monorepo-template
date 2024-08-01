import tailwind from "eslint-plugin-tailwindcss";

export default [
  ...tailwind.configs["flat/recommended"],
  {
    settings: {
      tailwindcss: {
        // These are the default values but feel free to customize
        callees: ["cn", "cva", "tva"],
        config: "tailwind.config.ts", // returned from `loadConfig()` utility if not provided
      },
    },
    rules: {
      "tailwindcss/classnames-order": "off",
    },
  },
];
