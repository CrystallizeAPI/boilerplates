import NextLink from "next/link";
import {
  Box,
  Flex,
  Link,
  Button,
  Spacer,
  IconButton,
  HamburgerMenuIcon,
} from "@/design-system";
import { Logo } from "@/design-system/theme/assets/logo";
import { BasketButton } from "./basket/basket-button";

export const Nav = () => {

  return (
    <Box css={{ width: "$full", py: "$6" }}>
      <Flex
        css={{
          maxWidth: "$content",
          mx: "auto",
          "& [data-desktop-only]": {
            display: "none",
            "@bp2": { display: "flex" },
          },
          "& [data-mobile-only]": {
            display: "block",
            "@bp2": { display: "none" },
          },
        }}
        align="center"
      >
        <NextLink href="/">
          <a aria-label="Conference logo">
            <Logo />
          </a>
        </NextLink>

        <Flex
          id="links"
          justify="center"
          css={{ flex: 1, "& a + a": { ml: "$2" } }}
          data-desktop-only
        >
          <Link variant="nav" href="/#schedule">
            Schedule
          </Link>
          <Link variant="nav" href="/#speakers">
            Speakers
          </Link>
          <Link variant="nav" href="/#partners">
            Partners
          </Link>
          <Link variant="nav" href="/merch">
            Merch
          </Link>
        </Flex>

        <>
          <Flex css={{ ml: "auto" }} data-desktop-only>
          <BasketButton />
            <Spacer direction="horizontal" space="5" />
            <NextLink href="/merch/intergalactic-ticket" passHref>
              <Button as="a" size="sm">
                Register
              </Button>
            </NextLink>
          </Flex>

          <IconButton
            css={{
              ml: "auto",
              fontWeight: "bolder",
              transform: "translateY(-25%)",
            }}
            data-mobile-only
            aria-label="Hamburger menu"
          >
            <HamburgerMenuIcon />
          </IconButton>
        </>
      </Flex>
    </Box>
  );
};
