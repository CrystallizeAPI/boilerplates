import { HomeFragment } from "@/crystallize/shapes/folders/home.generated";
import { componentContent } from "@/crystallize/utils/componentContent";
import { ContentTransformer } from "@crystallize/react-content-transformer";
import { Image } from "@crystallize/react-image";
import {
  Box,
  Flex,
  Spacer,
  Typography,
  PhotoEditorIcon,
  SelectColorIcon,
} from "@/design-system";

interface HomeBodyProps {
  body: HomeFragment["body"];
}

export const HomeBody = ({ body }: HomeBodyProps) => {
  const bodies = componentContent(body.content, "ContentChunkContent").chunks;

  return (
    <Flex
      align="center"
      justify="start"
      direction="column"
      css={{ width: "$content", mx: "auto", py: "$14", "@bp1": { py: "$24" } }}
    >
      {bodies.map((body, index) => (
        <Flex
          key={index}
          direction={
            componentContent(body[3].content, "BooleanContent").value
              ? "rowReverse"
              : "row"
          }
          css={{ justifyContent: "space-between", mt: index === 0 ? 0 : "$36" }}
        >
          <Box css={{ display: "grid", placeContent: "center", width: "40%" }}>
            <Typography as="h2" variant="heading" size="6">
              {componentContent(body[0].content, "SingleLineContent").text}
            </Typography>
            <Spacer space={6} />
            <Typography variant="text" size="4" css={{ lineHeight: "$normal" }}>
              <ContentTransformer
                json={
                  componentContent(body[1].content, "RichTextContent")
                    ?.json as [any]
                }
              />
            </Typography>
          </Box>
          <Box css={{ width: "40%" }}>
            <Image
              {...componentContent(body[2].content, "ImageContent").images[0]}
              style={{ width: "100%" }}
            />
          </Box>
        </Flex>
      ))}
    </Flex>
  );
};
