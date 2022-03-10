import React from "react";
import { styled, StitchesVariants, CSS } from "@/design-system/theme";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { Box } from "../box";

import type * as Polymorphic from "@radix-ui/react-polymorphic";

const StyledAvatar = styled(AvatarPrimitive.Root, {
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "middle",
  overflow: "hidden",
  userSelect: "none",
  boxSizing: "border-box",
  display: "flex",
  flexShrink: 0,
  position: "relative",
  border: "none",
  fontFamily: "inherit",
  lineHeight: "1",
  margin: "0",
  outline: "none",
  padding: "0",
  fontWeight: "500",
  borderRadius: "$full",

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: "inherit",
    boxShadow: "inset 0px 0px 1px rgba(0, 0, 0, 0.12)",
  },

  variants: {
    size: {
      "1": {
        width: "$8",
        height: "$8",
      },
      "2": {
        width: "$10",
        height: "$10",
      },
      "3": {
        width: "$12",
        height: "$12",
      },
      "4": {
        width: "$16",
        height: "$16",
      },
      "5": {
        width: "$20",
        height: "$20",
      },
    },
  },
  defaultVariants: {
    size: "2",
  },
});

const StyledAvatarImage = styled(AvatarPrimitive.Image, {
  display: "flex",
  objectFit: "cover",
  boxSizing: "border-box",
  height: "100%",
  verticalAlign: "middle",
  width: "100%",
});

const StyledAvatarFallback = styled(AvatarPrimitive.Fallback, {
  textTransform: "uppercase",

  variants: {
    size: {
      "1": {
        fontSize: "10px",
        lineHeight: "15px",
      },
      "2": {
        fontSize: "$3",
      },
      "3": {
        fontSize: "$6",
      },
      "4": {
        fontSize: "$7",
      },
      "5": {
        fontSize: "$8",
      },
      "6": {
        fontSize: "$9",
      },
    },
  },
  defaultVariants: {
    size: "2",
  },
});

export const AvatarNestedItem = styled("div", {
  boxShadow: "0 0 0 2px $colors$loContrast",
  borderRadius: "50%",
});

export const AvatarGroup = styled("div", {
  display: "flex",
  flexDirection: "row-reverse",
  [`& ${AvatarNestedItem}:nth-child(n+2)`]: {
    marginRight: "-$1",
  },
});

type AvatarCSSProp = { css?: CSS };
type AvatarVariants = StitchesVariants<typeof StyledAvatar>;
type AvatarOwnProps = Polymorphic.OwnProps<typeof AvatarPrimitive.Root> &
  AvatarCSSProp &
  AvatarVariants & {
    alt?: string;
    src?: string;
    fallback?: React.ReactNode;
  };

type AvatarComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof AvatarPrimitive.Root>,
  AvatarOwnProps
>;

export const Avatar = React.forwardRef(
  ({ alt, src, fallback, size, css, ...props }, forwardedRef) => {
    return (
      <Box
        css={{
          ...(css as any),
          position: "relative",
          height: "fit-content",
          width: "fit-content",
        }}
      >
        <StyledAvatar {...props} ref={forwardedRef} size={size}>
          <StyledAvatarImage alt={alt} src={src} />
          <StyledAvatarFallback size={size}>{fallback}</StyledAvatarFallback>
        </StyledAvatar>
      </Box>
    );
  }
) as AvatarComponent;
