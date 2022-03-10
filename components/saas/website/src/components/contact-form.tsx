import {
  Flex,
  Box,
  Typography,
  Spacer,
  TextField,
  DownIcon,
  Button,
} from "@/design-system";

export const ContactForm = () => {
  return (
    <Box
      css={{
        width: "313px",
        padding: "$8",
        backgroundColor: "$white",
        borderRadius: "$3xl",
        boxShadow: "$card",

        "@bp1": {
          width: "525px",
          padding: "$16",
        },
      }}
    >
      <Flex
        direction="column"
        align="stretch"
        justify="around"
        css={{ width: "$full" }}
      >
        <Box
          css={{
            width: "$full",
            textAlign: "center",

            "@bp1": {
              textAlign: "left",
            },
          }}
        >
          <Typography variant="heading" size="8">
            Contact Us
          </Typography>
        </Box>

        <Spacer space={10} />

        <Box
          css={{
            width: "$full",
            lineHeight: "$relaxed",
            textAlign: "center",

            "@bp1": {
              textAlign: "left",
            },
          }}
        >
          <Typography size={{ "@initial": "3", "@bp1": "4" }}>
            Donec euismod lorem sit amet sceleris que pellentesque. Suspendisse
            mollis est.
          </Typography>
        </Box>

        <Spacer space={10} />

        <Box css={{ width: "$full" }}>
          <TextField
            css={{ width: "$full", fontSize: "$4" }}
            placeholder="Name*"
          />
        </Box>

        <Spacer space={8} />

        <Box css={{ width: "$full" }}>
          <TextField
            css={{ width: "$full", fontSize: "$4" }}
            placeholder="Email*"
          />
        </Box>

        <Spacer space={8} />

        <Box css={{ width: "$full" }}>
          <TextField
            css={{ width: "$full", fontSize: "$4" }}
            placeholder="Phone Number"
          />
        </Box>

        <Spacer space={8} />

        <Box css={{ width: "$full" }}>
          <TextField
            css={{ width: "$full", fontSize: "$4" }}
            placeholder="Company"
          />
        </Box>

        <Spacer space={8} />

        <Box css={{ width: "$full" }}>
          <TextField
            css={{ width: "$full", fontSize: "$4" }}
            TrailingIcon={() => {
              return (
                <Box css={{ width: "$10" }}>
                  <DownIcon />
                </Box>
              );
            }}
            placeholder="How can we help you?"
          />
        </Box>

        <Spacer space={8} />

        <Box css={{ width: "$full" }}>
          <TextField
            css={{
              width: "$full",
              height: "270px",
              fontSize: "$4",
              "@bp1": { height: "340px" },
            }}
            placeholder="Message*"
          />
        </Box>

        <Spacer space={8} />
        <Box css={{ width: "$full" }}>
          <Button css={{ width: "$full", fontSize: "$4" }}>Send Message</Button>
        </Box>
      </Flex>
    </Box>
  );
};
