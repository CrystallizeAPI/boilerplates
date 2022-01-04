import { AppProps } from "next/app";
import { Box, Flex, Spacer } from "@/design-system";
import { Logo } from "@/design-system/theme/assets/logo";

export const AuthLayout = ({ Component, pageProps }: AppProps) => {
  return (
    <Box
      css={{
        width: "$full",
        minHeight: "$screenHeight",
        height: "$full",
        backgroundColor: "$accent",
      }}
    >
      <Flex direction="column" align="center" justify="center">
        <Spacer space={10} />

        <Box>
          <Logo />
        </Box>

        <Spacer space={20} />

        <Flex
          direction="column"
          align="center"
          justify="center"
          css={{
            border: "1px solid $color$dropShadow",
            boxShadow: "$card",
            backgroundColor: "$white",
            borderRadius: "$3xl",
            padding: "$3",
            width: "$11_12",
            maxWidth: "$auth",

            "@bp1": {
              padding: "$16",
              width: "$3_4",
            },
          }}
        >
          <Component {...pageProps} />
        </Flex>

        <Spacer space={32} />
      </Flex>
    </Box>
  );
};
