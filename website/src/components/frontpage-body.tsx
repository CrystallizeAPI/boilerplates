import NextLink from "next/link";
import { FrontpageFragment } from "@/crystallize/shapes/documents/frontpage.generated";
import { componentContent } from "@/crystallize/utils/componentContent";
import { ContentTransformer } from "@crystallize/react-content-transformer";
import { Image } from "@crystallize/react-image";
import { Box, Flex, Spacer, Typography, Button } from "@/design-system";

interface FrontpageBodyProps {
  body: FrontpageFragment["usp"];
}

export const FrontpageBody = ({ body }: FrontpageBodyProps) => {
  const bodies = componentContent(body.content, "ContentChunkContent").chunks;

  return (
    <Flex
      align="center"
      justify="start"
      direction="column"
      css={{ width: "$content", mx: "auto", "@bp3": { width: "$full" } }}
    >
      {bodies.map((body, index) => (
        <Flex
          key={index}
          direction={{ "@initial": "rowReverse", "@bp3": "column" }}
          justify="between"
        >
          <Box
            css={{
              display: "grid",
              placeContent: "center",
              width: "40%",
              "@bp3": { width: "100%" },
            }}
          >
            <Typography
              as="h2"
              variant="heading"
              size="9"
              css={{ lineHeight: "$snug" }}
            >
              {componentContent(body[0].content, "SingleLineContent").text}
            </Typography>
            <Spacer space={6} />
            <Typography
              variant="text"
              size="3"
              css={{ lineHeight: "$relaxed" }}
            >
              <ContentTransformer
                json={
                  componentContent(body[1].content, "RichTextContent")
                    ?.json as [any]
                }
              />
            </Typography>
            <Spacer space={6} />
            <NextLink
              href={
                componentContent(body[4].content, "SingleLineContent")?.text
              }
              passHref
            >
              <Button as="a" css={{ maxWidth: "150px", height: "40px" }}>
                {componentContent(body[3].content, "SingleLineContent")?.text}
              </Button>
            </NextLink>
          </Box>
          <Box css={{ width: "55%", "@bp3": { width: "100%" } }}>
            <Image
              {...componentContent(body[2].content, "ImageContent").images[0]}
              style={{ width: "100%" }}
              sizes="55vw"
              loading="lazy"
            />
          </Box>
        </Flex>
      ))}
    </Flex>
  );
};
