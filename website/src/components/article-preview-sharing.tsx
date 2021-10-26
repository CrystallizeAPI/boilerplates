import {
  Box,
  Spacer,
  Typography,
  Link,
  Flex,
  TwitterIcon,
  FacebookIcon,
} from "@/design-system";

export const ArticlePreviewSharing = () => {
  return (
    <>
      <Box
        css={{
          position: "relative",
          width: "$auth",
          mx: "auto",
          flex: "1",
          border: "1px solid $colors$dropShadow",
          borderRadius: "$sm $none $none $sm",
          boxShadow: "$card",
          "&:before": {
            content: '""',
            position: "absolute",
            height: "100%",
            width: "1px",
            bg: "$dropShadow",
            top: 0,
            left: "50%",
          },
        }}
      >
        <Box
          css={{
            height: "$16",
            width: "$1_2",
            alignItems: "center",
            display: "inline-flex",
            flexShrink: 0,
            justifyContent: "center",
            color: "$primary",
          }}
        >
          <Link
            href="#"
            css={{
              textDecoration: "none",
              display: "inline-flex",
              flexShrink: 0,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Flex css={{ "& svg": { width: 23, height: 23 } }}>
              <FacebookIcon />
            </Flex>

            <Spacer space="4" direction="horizontal" />

            <Typography
              as="h1"
              size={{
                "@initial": 3,
                "@bp1": 4,
              }}
              variant="heading"
              css={{ lineHeight: "$relaxed" }}
            >
              Share on Facebook
            </Typography>
          </Link>
        </Box>

        <Box
          css={{
            height: "$16",
            width: "$1_2",
            alignItems: "center",
            display: "inline-flex",
            flexShrink: 0,
            justifyContent: "center",
            color: "$primary",
          }}
        >
          <Link
            href="#"
            css={{
              textDecoration: "none",
              display: "inline-flex",
              flexShrink: 0,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Flex css={{ "& svg": { width: 23, height: 23 } }}>
              <TwitterIcon />
            </Flex>

            <Spacer space="4" direction="horizontal" />

            <Typography
              as="h1"
              size={{
                "@initial": 3,
                "@bp1": 4,
              }}
              variant="heading"
              css={{ lineHeight: "$relaxed" }}
            >
              Share on Twitter
            </Typography>
          </Link>
        </Box>
      </Box>

      <Spacer space="12" />

      <Box css={{ width: "$auth", mx: "auto" }}>
        <Box
          css={{
            alignItems: "center",
            display: "inline-flex",
            flexShrink: 0,
            justifyContent: "start",
          }}
        >
          <Typography
            as="h1"
            size={{
              "@initial": 3,
              "@bp1": 4,
            }}
            variant="heading"
            css={{ lineHeight: "$relaxed" }}
          >
            Tags :
          </Typography>

          <Link
            href="#"
            css={{
              display: "inline-flex",
              flexShrink: 0,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Spacer space="4" direction="horizontal" />

            <Typography
              as="p"
              size={{
                "@initial": 3,
                "@bp1": 4,
              }}
              css={{ lineHeight: "$relaxed", fontWeight: 600 }}
            >
              photography,
            </Typography>
          </Link>

          <Link
            href="#"
            css={{
              display: "inline-flex",
              flexShrink: 0,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Spacer space="4" direction="horizontal" />

            <Typography
              as="p"
              size={{
                "@initial": 3,
                "@bp1": 4,
              }}
              css={{ lineHeight: "$relaxed", fontWeight: 600 }}
            >
              stock photos
            </Typography>
          </Link>
        </Box>
      </Box>
    </>
  );
};
