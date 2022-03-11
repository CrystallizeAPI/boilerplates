import { forwardRef } from "react";
import NextLink from "next/link";
import { styled, CSS, StitchesVariants } from "@/design-system/theme";
import type * as Polymorphic from "@radix-ui/react-polymorphic";

const DEFAULT_TAG = "a";

export const StyledLink = styled(DEFAULT_TAG, {
  color: "inherit",
  lineHeight: "inherit",
  outline: "none",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  borderRadius: "$md",
  cursor: "pointer",
  fontFamily: "$body",

  "&:disable": {
    opacity: 0.45,
  },

  variants: {
    variant: {
      default: { color: "$primary", textDecoration: "underline" },
      nav: {
        px: "$4",
        py: "$2",
        cursor: "pointer",
        textDecoration: "none",
        "@hover": {
          "&:hover": {
            backgroundColor: "$accent",
          },
        },
        "&:focus": {
          textDecorationLine: "underline",
          textDecorationColor: "$primary",
          textDecorationThickness: "2px",
          textUnderlineOffset: "4px",
        },
      },
      secondary: {
        px: "$4",
        py: "$2",
        textDecoration: "underline",
        "@hover": {
          "&:hover": {
            backgroundColor: "$accent",
            color: "$primary",
          },
        },
        "&:focus": {
          color: "$primary",
        },
      },
      social: {
        p: "$2",
        "@hover": {
          "&:hover": {
            backgroundColor: "$accent",
          },
        },
        "&:focus": {
          color: "$primary",
        },
      },
    },
  },

  defaultVariants: {
    variant: "default",
  },
});

type LinkCSSProp = { css?: CSS };
type LinkVariants = StitchesVariants<typeof StyledLink>;
type LinkOwnProps = LinkCSSProp & LinkVariants;

type LinkComponent = Polymorphic.ForwardRefComponent<
  typeof DEFAULT_TAG,
  LinkOwnProps
>;

export const Link = forwardRef(({ href, ...props }, forwardedRef) => {
  if (href?.startsWith("http") || !href) {
    return <StyledLink {...props} href={href} ref={forwardedRef} />;
  }
  return (
    <NextLink href={href} passHref>
      <StyledLink {...props} ref={forwardedRef} />
    </NextLink>
  );
}) as LinkComponent;

Link.toString = () => `.${StyledLink.className}`;
