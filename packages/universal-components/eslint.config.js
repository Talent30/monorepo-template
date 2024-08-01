// FIXME: This kinda stinks...
/// <reference types="../../tooling/eslint/types.d.ts" />

import baseConfig from "@acme/eslint-config/base";
import react from "@acme/eslint-config/react";
import tailwind from "@acme/eslint-config/tailwind";

export default [...baseConfig, ...react, ...tailwind];
