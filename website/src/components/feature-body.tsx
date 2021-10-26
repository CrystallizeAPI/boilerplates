import { FeatureFragment } from "@/crystallize/shapes/folders/feature.generated";
import { componentContent } from "@/crystallize/utils/componentContent";
import { ContentTransformer } from "@crystallize/react-content-transformer";
import { Image } from "@crystallize/react-image";
import { Flex, Box, Typography, Spacer } from "@/design-system";

interface FeatureBodyProps {
  body: FeatureFragment["body"];
}

export const FeatureBody = ({ body }: FeatureBodyProps) => {
  return (
    <Box css={{ py: "$32", backgroundColor: "$accent" }}>
      <Flex
        direction="column"
        css={{ width: "$content", mx: "auto", gap: "$20" }}
      >
        {componentContent(
          body.content,
          "ParagraphCollectionContent"
        ).paragraphs.map((paragraph, index) => (
          <Flex
            key={index}
            direction={index % 2 !== 0 ? "row" : "rowReverse"}
            css={{ width: "$full" }}
          >
            <Box css={{ width: "30%" }}>
              <Image
                {...paragraph.images[0]}
                style={{
                  width: "100%",
                  borderRadius: "1.5rem", // $3xl
                }}
              />
            </Box>

            <Spacer direction="horizontal" space={16} />

            <Box>
              <Typography as="h2" size={6} css={{ fontWeight: 700 }}>
                {paragraph.title.text}
              </Typography>
              <Spacer space={6} />
              <Typography
                as="span"
                size={3}
                css={{ lineHeight: "$relaxed", "p + *": { mt: "$6" } }}
              >
                <ContentTransformer json={paragraph.body.json as [any]} />
              </Typography>
            </Box>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};
