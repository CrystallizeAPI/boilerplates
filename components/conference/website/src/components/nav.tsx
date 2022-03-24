import { useState } from "react";
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
  const [showMenu, setShowMenu] = useState(false);

  function onMenuClick(e) {
    e.preventDefault();
    setShowMenu((m) => !m);
  }

  return (
    <Box
      css={{
        width: "$full",
        py: "$6",
        px: "$3",
        "@bp4": {
          px: 0,
        },
      }}
    >
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
        justify="between"
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
          css={{
            flex: 1,
            "& a + a": { ml: "$2" },
            "@bp2_max": {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              height: "100%",
              zIndex: "$50",
              background: "#fffe",
              p: "$3",
              pt: "$6",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              "& a + a": {
                m: 0,
              },
              "& a": {
                display: "inline-block",
                fontSize: "$7",
              },
            },
          }}
          {...(showMenu ? {} : { "data-desktop-only": true })}
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
              margin: "0",
              position: "relative",
              zIndex: "$max",
            }}
            data-mobile-only
            aria-label="Hamburger menu"
            onClick={onMenuClick}
          >
            <HamburgerMenuIcon />
          </IconButton>
        </>
      </Flex>
    </Box>
  );
};
