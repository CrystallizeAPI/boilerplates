import NextLink from "next/link";
import { FrontpageFragment } from "@/crystallize/shapes/documents/frontpage.generated";
import { componentContent } from "@/crystallize/utils/componentContent";
import { ContentTransformer } from "@crystallize/react-content-transformer";
import { Image } from "@crystallize/react-image";
import { Flex, Box, Spacer, Typography, Button } from "@/design-system";

type FrontpageHeroProps = {
  title: FrontpageFragment["title"];
  description: FrontpageFragment["description"];
  hero: FrontpageFragment["hero"];
  heroCTA: FrontpageFragment["heroCTA"];
};

export const FrontpageHero = ({
  title,
  description,
  hero,
  heroCTA,
}: FrontpageHeroProps) => {
  const buttons = componentContent(
    heroCTA.content,
    "ContentChunkContent"
  ).chunks.filter((chunks) => !chunks.some((c) => c.content === null));

  return (
    <Flex
      direction="column"
      css={{
        width: "$full",
        mx: "auto",
        pt: "$12",
        pb: "$24",
        "@bp3": { pb: "0" },
      }}
    >
      <Flex
        direction={{ "@initial": "row", "@bp3": "column" }}
        justify={{ "@initial": "between", "@bp3": "center" }}
        css={{
          width: "$content",
          mx: "auto",
          "@bp3": { width: "$full" },
        }}
      >
        <Flex css={{ flex: 2 }} direction="column" align="start">
          <Typography
            as="h1"
            variant="heading"
            size={{ "@initial": "10", "@bp3": "8" }}
            css={{
              lineHeight: "$tight",
              textAlign: "start",
            }}
          >
            {componentContent(title.content, "SingleLineContent").text}
          </Typography>

          <Spacer space="6" />

          <Typography
            as="span"
            size={{ "@initial": "5", "@bp3": "3" }}
            css={{
              lineHeight: "$relaxed",
              textAlign: "start",
            }}
          >
            <ContentTransformer
              json={
                componentContent(description?.content, "RichTextContent")
                  ?.json as [any]
              }
            />
          </Typography>

          <Spacer space="7" />

          <Flex css={{ gap: "$2" }}>
            {buttons.map((button, index) => (
              <NextLink
                href={
                  componentContent(button[1].content, "SingleLineContent")?.text
                }
                key={index}
              >
                <Button as="a" variant="primary">
                  {
                    componentContent(button[0].content, "SingleLineContent")
                      ?.text
                  }
                </Button>
              </NextLink>
            ))}
          </Flex>
        </Flex>

        <Box css={{ pl: "$6" }}>
          <Image
            {...componentContent(hero?.content, "ImageContent")?.images[0]}
            style={{ maxWidth: "90vw" }}
            sizes="(max-width: 1023px) 100vw, 70vw"
          />
        </Box>
      </Flex>
    </Flex>
  );
};
