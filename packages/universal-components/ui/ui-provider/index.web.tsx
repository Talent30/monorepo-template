"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";
import { setFlushStyles } from "@gluestack-ui/nativewind-utils/flush";
import { OverlayProvider } from "@gluestack-ui/overlay";
import { ToastProvider } from "@gluestack-ui/toast";

import { config } from "./config";

const styleTagId = "gluestack-ui-nativewind";
const createStyle = (styleTagId: string) => {
  const style = document.createElement("style");
  style.id = styleTagId;
  style.append(document.createTextNode(""));
  return style;
};

export function GluestackUIProvider({
  mode = "light",
  ...properties
}: {
  mode?: "light" | "dark";
  children?: ReactNode;
}) {
  const stringcssvars = Object.keys(config[mode]).reduce(
    (accumulator, current) => {
      accumulator += `${current}:${config[mode][current]};`;
      return accumulator;
    },
    "",
  );

  setFlushStyles(`:root {${stringcssvars}} `);

  useEffect(() => {
    if (config[mode] && typeof document !== "undefined") {
      const element = document.documentElement;
      if (element) {
        element.classList.add(mode);
        element.classList.remove(mode === "light" ? "dark" : "light");
        const head = element.querySelector("head");
        let style = head?.querySelector(`[id='${styleTagId}']`);
        if (!style) {
          style = createStyle(styleTagId);
        }
        style.innerHTML = `:root {${stringcssvars}} `;
        if (head) head.append(style);
      }
    }
  }, [mode]);

  return (
    <OverlayProvider>
      <ToastProvider>{properties.children}</ToastProvider>
    </OverlayProvider>
  );
}
