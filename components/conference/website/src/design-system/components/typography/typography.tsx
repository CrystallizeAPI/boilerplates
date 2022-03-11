import React from "react";
import { styled, CSS, StitchesVariants } from "@/design-system/theme";
import type * as Polymorphic from "@radix-ui/react-polymorphic";

const DEFAULT_TAG = "span";

export const StyledTypography = styled(DEFAULT_TAG, {
  // Reset
  m: "0",
  lineHeight: "1",
  fontWeight: 400,
  fontVariantNumeric: "tabular-nums",

  variants: {
    size: {
      1: { fontSize: "$1" },
      2: { fontSize: "$2" },
      3: { fontSize: "$3" },
      4: { fontSize: "$4" },
      5: { fontSize: "$5" },
      6: { fontSize: "$6" },
      7: { fontSize: "$7" },
      8: { fontSize: "$8" },
      9: { fontSize: "$9" },
      10: { fontSize: "$10" },
      11: { fontSize: "$11" },
      12: { fontSize: "$12" },
      13: { fontSize: "$13" },
    },
    variant: {
      text: { fontFamily: "$body" },
      heading: { fontFamily: "$heading", fontWeight: 900 },
    },
  },
  compoundVariants: [
    { size: "2", variant: "text", css: { lineHeight: "$normal" } },
  ],
  defaultVariants: {
    size: "2",
    variant: "text",
  },
});

type TypographyCSSProp = { css?: CSS };
type TypographyVariants = StitchesVariants<typeof StyledTypography>;
type TypographyOwnProps = TypographyCSSProp & TypographyVariants;
type TypographyComponent = Polymorphic.ForwardRefComponent<
  typeof DEFAULT_TAG,
  TypographyOwnProps
>;

export const Typography = React.forwardRef((props, forwardedRef) => {
  return <StyledTypography {...props} ref={forwardedRef} />;
}) as TypographyComponent;

Typography.toString = () => `.${StyledTypography.className}`;
