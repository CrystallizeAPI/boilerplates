import NextLink from "next/link";
import { useAuth } from "@/contexts/auth";
import {
  Box,
  Flex,
  Link,
  Button,
  Spacer,
  IconButton,
  HamburgerMenuIcon,
} from "@/design-system";
import { Logo } from "@/components/logo";

export const Nav = () => {
  const user = useAuth();

  return (
    <Box css={{ width: "$full", py: "$6" }}>
      <Flex
        css={{
          width: "$content",
          mx: "auto",
          "& [data-desktop-only]": {
            display: "none",
            "@bp1": { display: "flex" },
          },
          "& [data-mobile-only]": {
            display: "block",
            "@bp1": { display: "none" },
          },
        }}
        align="center"
      >
        <NextLink href="/">
          <a>
            <Logo />
          </a>
        </NextLink>

        <Flex
          id="links"
          justify="center"
          css={{ flex: 1, "& a + a": { ml: "$2" } }}
          data-desktop-only
        >
          <Link variant="nav" href="/gallery">
            Gallery
          </Link>
          <Link variant="nav" href="/features">
            Features
          </Link>
          <Link variant="nav" href="/about">
            About
          </Link>
          <Link variant="nav" href="/blog">
            Blog
          </Link>
          <Link variant="nav" href="/contact">
            Contact
          </Link>
        </Flex>

        {user.isLoggedIn ? (
          <NextLink href="/account" passHref>
            <Button size="sm" variant="secondary">
              My Account
            </Button>
          </NextLink>
        ) : (
          <>
            <Flex css={{ ml: "auto" }} data-desktop-only>
              <Link variant="nav" href="/login">
                Login
              </Link>
              <Spacer direction="horizontal" space="5" />
              <NextLink href="/signup" passHref>
                <Button as="a" size="sm">
                  Sign up
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
            >
              <HamburgerMenuIcon />
            </IconButton>
          </>
        )}
      </Flex>
    </Box>
  );
};
