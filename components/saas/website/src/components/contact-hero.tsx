import React from "react";
import { Flex, Typography, Spacer, Box, Link } from "@/design-system";
import { ContactForm } from "./contact-form";

export const ContactHero: React.FC = () => {
  return (
    <Box
      css={{
        position: "relative",
        width: "$full",
        mx: "auto",
        "@bp1": { width: "$content" },
      }}
    >
      <Flex
        justify={{ "@initial": "center", "@bp1": "start" }}
        align={{ "@initial": "center", "@bp1": "start" }}
        direction={{ "@initial": "column", "@bp1": "row" }}
      >
        <Flex
          direction="column"
          align="stretch"
          justify="around"
          css={{
            maxWidth: "$full",
            padding: "$8",
            "@bp1": {
              paddingTop: "$10",
              maxWidth: "$2_5",
              padding: "$none",
            },
          }}
        >
          <Spacer space={{ "@initial": 16, "@bp1": 32 }} />

          <Box
            css={{
              width: "$full",
              textAlign: "center",

              "@bp1": {
                textAlign: "left",
              },
            }}
          >
            <Typography variant="heading" size={{ "@initial": 7, "@bp1": 9 }}>
              Get in touch
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
            <Typography
              size={{ "@initial": "3", "@bp1": "4" }}
              dangerouslySetInnerHTML={{
                __html:
                  "Cras id nulla fringilla, tincidunt tellus eget, euismod leo. Ut finibus, elit et mattis malesuada.<br /> <br />Donec elementum est lobortis neque pretium, eget ultrices sapien faucibus. Quisque id scelerisque orci. Pellentesque eget neque sed.",
              }}
            />
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
            <Link href="#">
              <Typography
                as="h4"
                variant="heading"
                size={{
                  "@initial": 4,
                  "@bp1": 6,
                }}
              >
                {`Pellentesque eget >>`}
              </Typography>
            </Link>
          </Box>

          <Spacer space={{ "@initial": 8, "@bp1": 28 }} />
        </Flex>

        <Box
          css={{
            "@bp1": { position: "absolute", right: 0, top: 100 },
          }}
        >
          <ContactForm />
        </Box>

        <Spacer space={{ "@initial": 16, "@bp1": 0 }} />
      </Flex>
    </Box>
  );
};
