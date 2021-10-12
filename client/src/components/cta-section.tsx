import NextLink from "next/link";
import { Button, Flex, Spacer, Typography } from "@/design-system";

export const CtaSection = () => {
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      css={{ py: "$32" }}
    >
      <Typography variant="heading" size={{ "@initial": 6, "@bp1": 8 }}>
        Ready to get started?
      </Typography>

      <Spacer space={7} />

      <Typography
        size={{ "@initial": 3, "@bp1": 5 }}
        css={{ lineHeight: "$relaxed", textAlign: "center" }}
      >
        Create your free account and start downloading incredible images now.
      </Typography>

      <Spacer space={{ "@initial": 7, "@bp1": 14 }} />

      <NextLink href="/signup" passHref>
        <Button as="a">Sign Up</Button>
      </NextLink>
    </Flex>
  );
};
