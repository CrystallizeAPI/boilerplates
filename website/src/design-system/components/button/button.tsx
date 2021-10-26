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
  px: "$6",
  py: "$2",
  fontFamily: "$body",
  fontSize: "$2",
  fontWeight: 700,
  fontVariantNumeric: "tabular-nums",
  lineHeight: "$normal",
  borderRadius: "$xl",
  borderWidth: "1px",
  borderStyle: "solid",

  variants: {
    variant: {
      primary: {
        color: "$white",
        borderColor: "$primary",
        backgroundColor: "$primary",
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
            borderColor: "$primary",
          },
        },
        "&:disabled": {
          backgroundColor: "$transparentPrimary",
        },
      },
      secondary: {
        color: "$black",
        backgroundColor: "transparent",
        borderColor: "rgba(0,0,0,.4)",
        "@hover": {
          "&:hover": {
            color: "$white",
            borderColor: "$primary",
            backgroundColor: "$primary",
          },
          "&:focus": {
            color: "black",
            borderColor: "$primary",
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
