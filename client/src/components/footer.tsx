import NextLink from "next/link";
import {
  Box,
  Link,
  Flex,
  IconButton,
  Spacer,
  Typography,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/design-system";
import { Logo } from "@/components/logo";

export const Footer = () => {
  return (
    <Flex css={{ width: "$full", py: "$20" }} direction="column">
      <Box
        css={{
          maxWidth: "$content",
          width: "$full",
          borderTop: "1px solid $colors$border",
          "& [data-desktop-only]": {
            display: "none",
            "@bp1": {
              display: "flex",
            },
          },
        }}
      >
        <Spacer space={{ "@initial": "6", "@bp1": "9" }} />
        <Flex
          align="stretch"
          direction={{ "@initial": "column", "@bp1": "row" }}
        >
          <Flex
            direction={{ "@initial": "row", "@bp1": "column" }}
            align="start"
            justify={{ "@initial": "between", "@bp1": "start" }}
          >
            <NextLink href="/">
              <a>
                <Logo variant="small" />
              </a>
            </NextLink>

            <Flex
              justify="end"
              css={{
                transform: "translateX($space$2)",
                "@bp1": { transform: "translateX(-$space$2)" },
              }}
            >
              <IconButton size="4">
                <YoutubeIcon />
              </IconButton>
              <IconButton size="4">
                <InstagramIcon />
              </IconButton>
              <IconButton size="4">
                <TwitterIcon />
              </IconButton>
              <IconButton size="4">
                <LinkedInIcon />
              </IconButton>
            </Flex>
          </Flex>

          <Flex
            css={{ flex: 1, transform: "translateY(-$space$2)" }}
            justify="center"
            align="start"
            direction="column"
            data-desktop-only
          >
            <Flex justify="center" css={{ width: "$full" }}>
              <Link variant="nav" href="/">
                Home
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

            <Flex
              justify="center"
              css={{
                width: "$full",
                fontSize: "$2",
                "& [data-link] + [data-link]": { ml: "$2" },
              }}
            >
              <Link data-link variant="secondary">
                Privacy Policy
              </Link>
              <Box data-link>|</Box>
              <Link data-link variant="secondary">
                Terms & Conditions
              </Link>
            </Flex>
          </Flex>

          <Flex
            direction={{ "@initial": "row", "@bp1": "column" }}
            justify="start"
            align="end"
          >
            <Typography>© Photo Finder 2021.</Typography>
            <Spacer space="2" />
            <Typography>&nbsp;All rights reserved.</Typography>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};
