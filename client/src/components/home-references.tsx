import { HomeFragment } from "@/crystallize/shapes/folders/home.generated";
import { componentContent } from "@/crystallize/utils/componentContent";
import { Image } from "@crystallize/react-image";
import { Flex, Typography, Box, Spacer } from "@/design-system";

interface HomeReferencesProps {
  references: HomeFragment["references"];
}

export const HomeReferences = ({ references }: HomeReferencesProps) => {
  const values = componentContent(references.content, "ContentChunkContent")
    .chunks[0];
  const title = componentContent(values[0].content, "SingleLineContent").text;
  const images = componentContent(values[1].content, "ImageContent").images;

  return (
    <Flex
      direction="column"
      justify="center"
      css={{ backgroundColor: "$accent", py: "$12", "@bp1": { py: "$24" } }}
    >
      <Typography as="h2" variant="heading" size={{ "@initial": 1, "@bp2": 5 }}>
        {title}
      </Typography>

      <Spacer space={{ "@initial": 10, "@bp1": 16 }} />

      <Flex
        direction="row"
        css={{
          width: "$content",
          mx: "auto",
          px: "$6",
          gap: "$3",
          "@bp1": { gap: "$16" },
        }}
      >
        {images.map((image, index) => (
          <Box
            key={index}
            css={{
              justifySelf: "center",
              alignSelf: "center",
              minWidth: "150px",
            }}
          >
            <Image {...image} style={{ width: "100%", height: "100%" }} />
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};
