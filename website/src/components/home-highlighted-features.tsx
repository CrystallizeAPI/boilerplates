import { HomeFragment } from "@/crystallize/shapes/folders/home.generated";
import { componentContent } from "@/crystallize/utils/componentContent";
import { ContentTransformer } from "@crystallize/react-content-transformer";
import { Image } from "@crystallize/react-image";
import { Box, Flex, Spacer, Typography } from "@/design-system";

interface HomeHighlightedFeaturesProps {
  highlightedFeatures: HomeFragment["highlightedFeatures"];
}

export const HomeHighlightedFeatures = ({
  highlightedFeatures,
}: HomeHighlightedFeaturesProps) => {
  const features = componentContent(
    highlightedFeatures.content,
    "ContentChunkContent"
  ).chunks;

  return (
    <Box css={{ backgroundColor: "$accent" }}>
      <Flex
        direction="row"
        css={{
          width: "$content",
          mx: "auto",
          py: "$14",
          justifyContent: "center",
          gap: "$8",
        }}
      >
        {features.map((feature, index) => (
          <Flex key={index} direction="column" css={{ alignItems: "center" }}>
            <Image
              {...componentContent(feature[2].content, "ImageContent")
                .images[0]}
              style={{ maxWidth: "200px" }}
            />
            <Spacer space={6} />
            <Typography as="h2" variant="heading" size="4">
              {componentContent(feature[0].content, "SingleLineContent").text}
            </Typography>
            <Spacer space={6} />
            <Typography
              as="span"
              variant="text"
              size="3"
              css={{ textAlign: "center", lineHeight: "$snug" }}
            >
              <ContentTransformer
                json={
                  componentContent(feature[1].content, "RichTextContent")
                    ?.json as [any]
                }
              />
            </Typography>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};
