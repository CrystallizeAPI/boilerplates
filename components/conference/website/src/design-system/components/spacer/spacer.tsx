import { styled } from "@/design-system";

import { space } from "@/design-system/theme/spacing";

const spaceKeys = Object.keys(space);
const sizeVariants = Object.fromEntries(spaceKeys.map((d) => [d, {}]));

let compoundVariants: any[] = ["horizontal", "vertical"]
  .map((direction) => {
    const cssKey = direction === "horizontal" ? "mr" : "mt";

    return spaceKeys.map((space) => ({
      direction,
      space,
      css: { [cssKey]: `$${space}` },
    }));
  })
  .flat();

export const Spacer = styled("div", {
  display: "block",

  variants: {
    direction: {
      horizontal: {},
      vertical: {},
    },
    space: sizeVariants,
  },

  compoundVariants,

  defaultVariants: {
    direction: "vertical",
    space: "2",
  },
});
