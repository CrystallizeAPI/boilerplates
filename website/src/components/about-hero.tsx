import { TeamFragment } from "@/crystallize/shapes/folders/team.generated";
import { Image } from "@crystallize/react-image";
import { ContentTransformer } from "@crystallize/react-content-transformer";
import { Box, Flex, Typography, Spacer } from "@/design-system";
import { componentContent } from "@/crystallize/utils/componentContent";

interface AboutHeroProps {
  title: TeamFragment["title"];
  intro: TeamFragment["intro"];
  hero: TeamFragment["hero"];
}

export const AboutHero = ({ title, intro, hero }: AboutHeroProps) => {
  return (
    <Box
      css={{
        maxWidth: "$content",
        mx: "auto",
        pt: "$32",
        pb: "$40",
        px: "$12",
      }}
    >
      <Flex css={{ gap: "$16" }}>
        <Box css={{ width: "40%" }}>
          <Typography
            as="h1"
            variant="heading"
            size={9}
            css={{ lineHeight: "$snug" }}
          >
            {componentContent(title.content, "SingleLineContent").text}
          </Typography>
        </Box>
        <Box css={{ flex: 1 }}>
          <Typography
            as="span"
            size={5}
            css={{ lineHeight: "normal", "* + *": { mt: "$6" } }}
          >
            <ContentTransformer
              json={
                componentContent(intro.content, "RichTextContent").json as [any]
              }
            />
          </Typography>
        </Box>
      </Flex>

      <Spacer space={24} />

      <Image
        {...componentContent(hero.content, "ImageContent").images[0]}
        style={{ width: "100%" }}
      />
    </Box>
  );
};
