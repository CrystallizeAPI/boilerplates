import { styled, StitchesVariants } from "@/design-system/theme";

export const Box = styled("div", {
  // Reset
  boxSizing: "border-box",
  variants: {
    variant: {
      card: {
        boxShadow:
          "0px 0px 5px rgba(40, 41, 61, 0.04), 0px 4px 12px rgba(96, 97, 112, 0.16)",
        borderRadius: "28.2px",
        overflow: "hidden"
      },
    },
  },
});
