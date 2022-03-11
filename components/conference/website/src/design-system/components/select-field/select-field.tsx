import { forwardRef } from "react";

import { styled, CSS, StitchesVariants } from "@/design-system/theme";
import type * as Polymorphic from "@radix-ui/react-polymorphic";

import { ChevronDownIcon } from "@radix-ui/react-icons";

{
  /* <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6H11L7.5 10.5L4 6Z" fill="currentColor"></path></svg> */
}

import { Box } from "@/design-system";
import { url } from "inspector";

const DEFAULT_TAG = "select";

const StyledSelectField = styled(DEFAULT_TAG, {
  // Reset
  appearance: "none",
  WebkitAppearance: "none",

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

  //custom
  backgroundImage: `url('data:image/svg+xml;utf8,<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6H11L7.5 10.5L4 6Z" fill="currentColor"></path></svg>')`,
  backgroundPosition: "right $space$4 top 50%",
  backgroundSize: "15px",
  backgroundRepeat: "no-repeat",

  px: "$4",
  py: "$2",
  color: "$black",
  backgroundColor: "$white",

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

const StyledSelectWrapper = styled("div", {});

const StyledChevronDownIcon = styled(ChevronDownIcon, {
  position: "absolute",
  pointerEvents: "none",
  display: "inline",

  right: 0,
  top: 0,
});

type SelectFieldCSSProp = { css?: CSS };
type SelectFieldVariants = StitchesVariants<typeof StyledSelectField>;
type SelectFieldOwnProps = SelectFieldCSSProp & SelectFieldVariants;

type SelectFieldComponent = Polymorphic.ForwardRefComponent<
  typeof DEFAULT_TAG,
  SelectFieldOwnProps
>;

export const SelectField = forwardRef(
  ({ css, children, ...props }, forwardedRef) => {
    const defaultCSS: CSS = {
      $$leadingIconWidth: "0px",
    };

    return (
      <StyledSelectWrapper css={{ ...defaultCSS, ...css }}>
        <StyledSelectField {...props} ref={forwardedRef}>
          {children}
        </StyledSelectField>
        {/* <StyledChevronDownIcon /> */}
      </StyledSelectWrapper>
    );
  }
) as SelectFieldComponent;

SelectField.toString = () => `.${StyledSelectField.className}`;
