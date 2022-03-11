import React, { ReactNode, ReactComponentElement } from "react";

import { styled, CSS, StitchesVariants } from "@/design-system/theme";
import type * as Polymorphic from "@radix-ui/react-polymorphic";

import { Box } from "@/design-system";

const DEFAULT_TAG = "input";

const StyledTextField = styled(DEFAULT_TAG, {
  // Reset
  appearance: "none",
  boxSizing: "border-box",
  outline: "none",
  m: "0",
  width: "$full",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  "&::before": {
    boxSizing: "border-box",
  },
  "&::after": {
    boxSizing: "border-box",
  },

  // Custom
  px: "$4",
  py: "$2",
  color: "$black",
  backgroundColor: "$white",
  fontSize: "$2",
  fontFamily: "$body",
  fontVariantNumeric: "tabular-nums",
  borderRadius: "$xl",
  borderWidth: "1px",
  borderStyle: "solid",

  transition: ".3s ease",

  "&:disabled": {
    cursor: "not-allowed",
  },

  variants: {
    variant: {
      default: {
        boxShadow: "none",
        backgroundColor: "transparent",
        borderColor: "$border",
        "@hover": {
          "&:hover": {
            boxShadow: "$input",
          },
        },
        "&:focus": {
          borderColor: "$primary",
        },
        "&:disabled": {
          backgroundColor: "$accent",
        },
        "&:read-only": {
          backgroundColor: "$accent",
        },
      },
    },
    state: {
      invalid: {
        borderColor: "$error",
        "&:focus": {
          borderColor: "$error",
        },
      },
    },
    size: {
      sm: { height: "$12" },
      md: { height: "$14" },
      lg: { height: "$16" },
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

const StyledTextFieldWrapper = styled("div", {
  position: "relative",

  "& input": {
    pl: "calc($$leadingIconWidth + $4)",
    pr: "calc($$trailingIconWidth + $4)",
  },

  "& input:focus + [role=LeadingIcon]": {
    color: "$white",
    bg: "$primary",
    borderColor: "$primary",
  },

  "& [role=LeadingIcon]": {
    position: "absolute",
    left: 0,
    top: 0,
    width: "$$leadingIconWidth",
    height: "$full",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    transition: ".3s ease",
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: "$xl 0 0 $xl",
    bg: "$accent",
  },

  "& [role=TrailingIcon]": {
    position: "absolute",
    right: 0,
    top: 0,
    width: "$$trailingIconWidth",
    height: "$full",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

type TextFieldCSSProp = {
  css?: CSS;
  cssForWrapper?: CSS;
  LeadingIcon?: React.FC;
  TrailingIcon?: React.FC;
};
type TextFieldVariants = StitchesVariants<typeof StyledTextField>;
type TextFieldOwnProps = TextFieldCSSProp & TextFieldVariants;

type TextFieldComponent = Polymorphic.ForwardRefComponent<
  typeof DEFAULT_TAG,
  TextFieldOwnProps
>;

export const TextField = React.forwardRef(
  ({ cssForWrapper, LeadingIcon, TrailingIcon, ...props }, forwardedRef) => {
    const defaultCSS: CSS = {
      $$leadingIconWidth: LeadingIcon ? "40px" : "0px",
      $$trailingIconWidth: TrailingIcon ? "40px" : "0px",
    };

    return (
      <StyledTextFieldWrapper css={{ ...defaultCSS, ...cssForWrapper }}>
        <StyledTextField {...props} ref={forwardedRef}></StyledTextField>
        {LeadingIcon && (
          <Box role="LeadingIcon">
            <LeadingIcon />
          </Box>
        )}

        {TrailingIcon && (
          <Box role="TrailingIcon">
            <TrailingIcon />
          </Box>
        )}
      </StyledTextFieldWrapper>
    );
  }
) as TextFieldComponent;

TextField.toString = () => `.${StyledTextField.className}`;
