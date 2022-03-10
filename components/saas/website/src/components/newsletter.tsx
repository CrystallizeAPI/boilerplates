import NextLink from "next/link";
import {
  Button,
  Flex,
  Spacer,
  TextField,
  Typography,
  Box,
} from "@/design-system";

interface NewsletterProps {
  description: string;
}

export const Newsletter = ({ description }: NewsletterProps) => {
  return (
    <Flex justify="center" css={{ py: "$20", backgroundColor: "$accent" }}>
      <Flex
        direction="column"
        justify="center"
        css={{
          maxWidth: "$auth",
          mx: "auto",
          "@bp1": { width: "$1_2" },
          padding: "$2",
        }}
      >
        <Spacer space={{ "@initial": 14, "@bp1": 24 }} />

        <Typography variant="heading" size={{ "@initial": 7, "@bp1": 9 }}>
          Newsletter
        </Typography>

        <Spacer space={14} />

        <Typography size={4} css={{ textAlign: "center" }}>
          {description}
        </Typography>

        <Spacer space={14} />

        <Box
          css={{
            width: "$full",
            borderRadius: "$2xl",
            backgroundColor: "$white",
            padding: "$3",
            "@bp1": { padding: "$6" },
          }}
        >
          <Flex direction={{ "@initial": "column", "@bp1": "row" }}>
            <Box css={{ width: "$full" }}>
              <TextField placeholder="Enter Your Email" />
            </Box>
            <Spacer direction="horizontal" space={5} />
            <NextLink href="/signup" passHref>
              <Button as="a" size="md">
                Sign up
              </Button>
            </NextLink>
          </Flex>
        </Box>

        <Spacer space={{ "@initial": 14, "@bp1": 24 }} />
      </Flex>
    </Flex>
  );
};
