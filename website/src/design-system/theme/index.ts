import { createCss, StitchesCss, StitchesVariants } from "@stitches/react";
import { colors } from "./colors";
import { fonts, fontSizes, letterSpacings, lineHeights } from "./typography";
import { radii } from "./radii";
import { shadows } from "./shadows";
import { space, sizes } from "./spacing";
import { zIndices } from "./zIndices";
import { utils } from "./utils";

const stitches = createCss({
  theme: {
    colors,
    fonts,
    fontSizes,
    letterSpacings,
    lineHeights,
    radii,
    shadows,
    sizes,
    space,
    zIndices,
  },
  media: {
    bp1: "(min-width: 640px)",
    bp2: "(min-width: 768px)",
    bp3: "(max-width: 1024px)",
    bp4: "(min-width: 1280px)",
    bp5: "(min-width: 1536px)",
    motion: "(prefers-reduced-motion)",
    hover: "(any-hover: hover)",
    dark: "(prefers-color-scheme: dark)",
    light: "(prefers-color-scheme: light)",
  },
  utils,
});

export const { styled, css, theme, getCssString, global, keyframes, config } =
  stitches;

export type CSS = StitchesCss<typeof stitches>;
export type { StitchesVariants };
