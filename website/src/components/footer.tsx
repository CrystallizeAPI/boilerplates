import NextLink from "next/link";
import { Box, Link, Flex, Spacer, Typography } from "@/design-system";
import { Logo } from "@/design-system/theme/assets/logo";

export const Footer = () => {
  return (
    <Flex css={{ width: "$full", py: "$20" }} direction="column">
      <Box
        css={{
          maxWidth: "$content",
          width: "$full",
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
          align="center"
          justify="between"
          direction={{ "@initial": "row", "@bp3": "column" }}
          css={{ width: "$full" }}
        >
          <NextLink href="/">
            <a aria-label="Conference logo">
              <Logo />
            </a>
          </NextLink>

          <Flex justify="center" align="start">
            <Link variant="nav" href="/#schedule">
              Schedule
            </Link>
            <Link variant="nav" href="/#speakers">
              Speakers
            </Link>
            <Link variant="nav" href="/#partners">
              Partners
            </Link>
            <Link variant="nav" href="/merch/intergalactic-ticket">
              Register
            </Link>
          </Flex>
          <Typography>© Intergalactic 2022</Typography>
        </Flex>
      </Box>
    </Flex>
  );
};
