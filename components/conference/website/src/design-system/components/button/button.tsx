import { forwardRef } from "react";
import { styled, CSS, StitchesVariants } from "@/design-system/theme";
import type * as Polymorphic from "@radix-ui/react-polymorphic";

const DEFAULT_TAG = "button";

export const StyledButton = styled(DEFAULT_TAG, {
  // Reset
  all: "unset",
  alignItems: "center",
  boxSizing: "border-box",
  userSelect: "none",
  "&::before": {
    boxSizing: "border-box",
  },
  "&::after": {
    boxSizing: "border-box",
  },

  // Custom reset?
  display: "inline-flex",
  flexShrink: 0,
  justifyContent: "center",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  cursor: "pointer",
  position: "relative",

  // Custom
  px: "$8",
  py: "$2",
  fontFamily: "$button",
  fontSize: "$2",
  fontWeight: 700,
  fontVariantNumeric: "tabular-nums",
  lineHeight: "$normal",
  borderRadius: "28px",
  boxShadow:
    "0px 0px 2px rgba(40, 41, 61, 0.04), 0px 4px 8px rgba(96, 97, 112, 0.16)",

  variants: {
    variant: {
      primary: {
        color: "$white",
        background: "$primaryGradient",
        "@hover": {
          "&:hover": {
            borderColor: "$black",
            backgroundColor: "$black",
          },
        },
        "&:focus": {
          "&::after": {
            content: "' '",
            position: "absolute",
            width: "calc(100% + 12px)",
            height: "calc(100% + 12px)",
            borderWidth: "2px",
            borderStyle: "solid",
            borderRadius: "$xl",
            borderColor: "$white",
          },
        },
        "&:disabled": {
          backgroundColor: "$transparentPrimary",
        },
      },
      secondary: {
        color: "$white",
        background: "$secondaryGradient",
        "@hover": {
          "&:hover": {
            color: "$white",
            backgroundColor: "$primary",
          },
          "&:focus": {
            color: "black",
            backgroundColor: "transparent",
          },
        },
      },
    },

    on: {
      default: {},
      primary: {},
    },
    size: {
      sm: { height: "$12" },
      md: { height: "$14" },
      lg: { height: "$16" },
    },
  },

  compoundVariants: [
    {
      variant: "primary",
      on: "primary",
      css: {
        backgroundColor: "$black",
        color: "$white",
        "@hover": {
          "&:hover": {
            color: "$black",
            borderColor: "$white",
            backgroundColor: "$white",
          },
        },
        "&:focus": {
          "&::after": {
            borderColor: "$black",
          },
        },
        "&:disabled": {
          backgroundColor: "rgba(255,255,255,.75)",
          borderColor: "rgba(255,255,255,.75)",
          cursor: "default",
        },
      },
    },
    {
      variant: "secondary",
      on: "primary",
      css: {
        backgroundColor: "$accent",
        color: "$black",
        "@hover": {
          "&:hover": {
            color: "$black",
            borderColor: "$white",
            backgroundColor: "$white",
          },
        },
        "&:focus": {
          "&::after": {
            borderColor: "$black",
          },
        },
        "&:disabled": {
          backgroundColor: "rgba(255,255,255,.75)",
          borderColor: "rgba(255,255,255,.75)",
          cursor: "default",
        },
      },
    },
  ],

  defaultVariants: {
    variant: "primary",
    on: "default",
    size: "md",
  },
});

type ButtonCSSProp = { css?: CSS };
type ButtonVariants = StitchesVariants<typeof StyledButton>;
type ButtonOwnProps = ButtonCSSProp & ButtonVariants;

type ButtonComponent = Polymorphic.ForwardRefComponent<
  typeof DEFAULT_TAG,
  ButtonOwnProps
>;

export const Button = forwardRef((props, forwardedRef) => {
  return <StyledButton {...props} ref={forwardedRef} />;
}) as ButtonComponent;

Button.toString = () => `.${StyledButton.className}`;
