import type { ReactNode } from "react";
import type { StyleProp, ViewStyle } from "react-native";
import { View } from "react-native";
import { OverlayProvider } from "@gluestack-ui/overlay";
import { ToastProvider } from "@gluestack-ui/toast";

import { config } from "./config";

export function GluestackUIProvider({
  mode = "light",
  ...properties
}: {
  mode?: "light" | "dark";
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <View
      style={[
        config[mode],
        { flex: 1, height: "100%", width: "100%" },
        properties.style,
      ]}
    >
      <OverlayProvider>
        <ToastProvider>{properties.children}</ToastProvider>
      </OverlayProvider>
    </View>
  );
}
