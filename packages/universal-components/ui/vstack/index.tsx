import type { VariantProps } from "@gluestack-ui/nativewind-utils";
import type { ComponentProps } from "react";
import { forwardRef } from "react";
import { View } from "react-native";

import { vstackStyle } from "./styles";

type IVStackProperties = ComponentProps<typeof View> &
  VariantProps<typeof vstackStyle> & { className?: string };

const VStack = forwardRef(
  ({ className, space, reversed, ...props }: IVStackProperties, ref?: any) => {
    return (
      <View
        className={vstackStyle({ space, reversed, class: className })}
        {...props}
        ref={ref}
      />
    );
  },
);

VStack.displayName = "VStack";

export { VStack };
