import NextLink from "next/link";
import { HomeFragment } from "@/crystallize/shapes/folders/home.generated";
import { componentContent } from "@/crystallize/utils/componentContent";
import { ContentTransformer } from "@crystallize/react-content-transformer";
import { Image } from "@crystallize/react-image";
import { Flex, Box, Spacer, Typography, Button } from "@/design-system";

type HomeHeroProps = {
  title: HomeFragment["title"];
  intro: HomeFragment["intro"];
  hero: HomeFragment["hero"];
  heroCTA: HomeFragment["heroCTA"];
};

export const HomeHero = ({ title, intro, hero, heroCTA }: HomeHeroProps) => {
  const button = componentContent(heroCTA.content, "ContentChunkContent")
    .chunks[0];

  return (
    <Flex
      direction="column"
      css={{
        pt: "$16",
        pb: "$24",
        width: "$content",
        mx: "auto",
        alignItems: "flex-end",
      }}
    >
      <Flex
        direction={{ "@initial": "column", "@bp1": "row" }}
        css={{
          width: "$content",
          mx: "auto",
          flex: "1 1 100%",
          justifyContent: "space-between",
        }}
      >
        <Flex
          css={{ flex: 2, "@bp1": { alignItems: "flex-start" } }}
          direction="column"
        >
          <Typography
            as="h1"
            variant="heading"
            size={{ "@initial": "8", "@bp1": "10" }}
            css={{
              lineHeight: "$tight",
              textAlign: "center",
              "@bp1": { textAlign: "start" },
            }}
          >
            {componentContent(title.content, "SingleLineContent").text}
          </Typography>

          <Spacer space="6" />

          <Typography
            as="span"
            size={{
              "@initial": 4,
              "@bp1": 5,
            }}
            css={{
              lineHeight: "$relaxed",
              textAlign: "center",
              "@bp1": { textAlign: "start" },
            }}
          >
            <ContentTransformer
              json={
                componentContent(intro.content, "RichTextContent")?.json as [
                  any
                ]
              }
            />
          </Typography>

          <Spacer space="12" />

          <div>
            <NextLink
              href={
                componentContent(button[1].content, "SingleLineContent").text
              }
              passHref
            >
              <Button as="a">
                {componentContent(button[0].content, "SingleLineContent").text}
              </Button>
            </NextLink>
          </div>
        </Flex>

        <Box css={{ pl: "$6" }}>
          <Image
            {...componentContent(hero.content, "ImageContent").images[0]}
            style={{ maxWidth: "500px" }}
          />
        </Box>
      </Flex>
    </Flex>
  );
};
