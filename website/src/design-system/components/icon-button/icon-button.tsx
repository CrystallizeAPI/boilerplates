import { forwardRef } from "react";
import { styled, CSS, StitchesVariants } from "@/design-system";

import type * as Polymorphic from "@radix-ui/react-polymorphic";

const DEFAULT_TAG = "button";

type IconButtonCSSProp = { css?: CSS };
type IconButtonVariants = StitchesVariants<typeof StyledIconButton>;
type IconButtonOwnProps = IconButtonCSSProp & IconButtonVariants;

const StyledIconButton = styled(DEFAULT_TAG, {
  // Reset
  alignItems: "center",
  appearance: "none",
  borderWidth: "0",
  boxSizing: "border-box",
  display: "inline-flex",
  flexShrink: 0,
  fontFamily: "inherit",
  fontSize: "14px",
  justifyContent: "center",
  lineHeight: "1",
  outline: "none",
  padding: "0",
  textDecoration: "none",
  userSelect: "none",
  WebkitTapHighlightColor: "transparent",
  color: "inherit",
  cursor: "pointer",
  p: "$2",
  borderRadius: "$md",

  "&::before": {
    boxSizing: "border-box",
  },
  "&::after": {
    boxSizing: "border-box",
  },

  "&:active": {
    backgroundColor: "$accent",
  },
  "&:focus": {
    backgroundColor: "$accent",
  },
  "&:disabled": {
    pointerEvents: "none",
  },

  variants: {
    size: {
      "1": {
        borderRadius: "$1",
        height: "$5",
        width: "$5",
      },
      "2": {
        borderRadius: "$2",
        height: "$6",
        width: "$6",
      },
      "3": {
        borderRadius: "$2",
        height: "$7",
        width: "$7",
      },
      "4": {
        borderRadius: "$3",
        height: "$8",
        width: "$8",
      },
    },
    variant: {
      ghost: {
        backgroundColor: "transparent",
        borderWidth: "0",
        "@hover": {
          "&:hover": {
            backgroundColor: "$accent",
          },
        },
        "&:focus": {
          boxShadow:
            "inset 0 0 0 1px $colors$$accent, 0 0 0 1px $colors$$accent",
        },
        "&:active": {
          backgroundColor: "$accent",
        },
      },
      raised: {
        boxShadow:
          "0 0 transparent, 0 16px 32px hsl(206deg 12% 5% / 25%), 0 3px 5px hsl(0deg 0% 0% / 10%)",
        "@hover": {
          "&:hover": {
            boxShadow:
              "0 0 transparent, 0 16px 32px hsl(206deg 12% 5% / 25%), 0 3px 5px hsl(0deg 0% 0% / 10%)",
          },
        },
        "&:focus": {
          boxShadow:
            "0 0 0 1px $colors$accent, 0 16px 32px hsl(206deg 12% 5% / 25%), 0 3px 5px hsl(0deg 0% 0% / 10%)",
        },
        "&:active": {
          backgroundColor: "$accent",
        },
      },
    },
  },
  defaultVariants: {
    variant: "ghost",
  },
});

type IconButtonComponent = Polymorphic.ForwardRefComponent<
  typeof DEFAULT_TAG,
  IconButtonOwnProps
>;

export const IconButton = forwardRef((props, forwardedRef) => {
  return <StyledIconButton {...props} ref={forwardedRef} />;
}) as IconButtonComponent;
