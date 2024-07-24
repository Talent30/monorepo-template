// FIXME: This kinda stinks...
/// <reference types="../../tooling/eslint/types.d.ts" />

import baseConfig from "@acme/eslint-config/base";
import react from "@acme/eslint-config/react";

export default [...baseConfig, ...react];
