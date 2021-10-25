import React from "react";
import { Flex, Typography, Spacer, Box, Link, Button } from "@/design-system";

export const ContactBody: React.FC = () => {
  return (
    <Box css={{ maxWidth: "$content", mx: "auto" }}>
      <Flex
        direction="column"
        justify="around"
        align={{ "@initial": "center", "@bp1": "stretch" }}
        css={{
          "@bp1": {
            width: "$2_5",
            paddingTop: "$10",
            height: "600px",
          },
        }}
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
            Office Address
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
              __html: "Kverndalsgata 8<br/>3717, Skien<br/>Norway",
            }}
          />
        </Box>

        <Spacer space={8} />

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
                "@bp1": 5,
              }}
            >
              Vew on Google Map
            </Typography>
          </Link>
        </Box>

        <Spacer space={20} />

        <Box
          css={{
            width: "$3_4",
            height: "$26",
            borderRadius: "$3xl",
            backgroundColor: "$primary",
            boxShadow: "$card",
            padding: "$7",
            color: "$white",
          }}
        >
          <Typography css={{ fontWeight: "bold" }} size="4">
            Phone
          </Typography>
          <br />
          <br />
          <Typography size="6">+47 997 37 609</Typography>
        </Box>

        <Spacer space={8} />

        <Box
          css={{
            width: "$3_4",
            height: "$26",
            borderRadius: "$3xl",
            backgroundColor: "$white",
            boxShadow: "$card",
            padding: "$7",
          }}
        >
          <Typography css={{ fontWeight: "bold" }} size="4">
            Email
          </Typography>
          <br />
          <br />
          <Typography size="6">hello@startup.com</Typography>
        </Box>
      </Flex>
    </Box>
  );
};
