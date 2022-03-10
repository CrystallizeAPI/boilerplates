import { TeamFragment } from "@/crystallize/shapes/folders/team.generated";
import { Image } from "@crystallize/react-image";
import { ContentTransformer } from "@crystallize/react-content-transformer";
import { Box, Flex, Typography, Spacer } from "@/design-system";
import { componentContent } from "@/crystallize/utils/componentContent";

interface AboutValuesProps {
  values: TeamFragment["values"];
}

export const AboutValues = (props: AboutValuesProps) => {
  const valuesChunk = componentContent(
    props.values.content,
    "ContentChunkContent"
  ).chunks[0];
  const title = valuesChunk[0];
  const description = valuesChunk[1];
  const values = valuesChunk[2];

  return (
    <>
      <Box css={{ bg: "$accent" }}>
        <Flex
          align="start"
          css={{ maxWidth: "$content", mx: "auto", py: "$32" }}
        >
          <Box css={{ width: "$3_12" }}>
            <Typography as="h1" variant="heading" size={8}>
              {componentContent(title.content, "SingleLineContent").text}
            </Typography>
            <Spacer space={12} />
            <Typography
              as="span"
              size={5}
              css={{ lineHeight: "$relaxed", "* + *": { mt: "$6" } }}
            >
              <ContentTransformer
                json={
                  componentContent(description.content, "RichTextContent")
                    .json as [any]
                }
              />
            </Typography>
          </Box>

          <Spacer direction="horizontal" space={20} />

          <Box css={{ position: "relative", flex: 1 }}>
            <Box
              css={{
                position: "absolute",
                width: "$full",
                top: 0,
                right: 0,
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(320px, 1fr))",
                gap: "$10",
                padding: "$none",
              }}
            >
              {componentContent(
                values.content,
                "ParagraphCollectionContent"
              ).paragraphs.map((value, index) => (
                <Flex
                  key={value.title.text}
                  direction="column"
                  justify="center"
                  css={{
                    borderRadius: "$3xl",
                    p: "$7",
                    bg: "$white",
                    boxShadow: "$card",
                    transform:
                      index % 2 === 0
                        ? "translateY(-85px)"
                        : "translateY(-175px)",
                    maxWidth: 320,
                  }}
                >
                  <Box css={{ width: "$24" }}>
                    <Image {...value.images[0]} style={{ width: "100%" }} />
                  </Box>

                  <Spacer space={10} />

                  <Typography variant="heading" size={4}>
                    {value.title.text}
                  </Typography>

                  <Spacer space={6} />

                  <Typography
                    as="span"
                    size={3}
                    css={{ textAlign: "center", lineHeight: "$relaxed" }}
                  >
                    <ContentTransformer json={value.body.json as [any]} />
                  </Typography>
                </Flex>
              ))}
            </Box>
          </Box>
        </Flex>
      </Box>
      <Spacer space={48} />
    </>
  );
};
