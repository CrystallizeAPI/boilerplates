import { componentContent } from "@/crystallize/utils/componentContent";
import { ContentTransformer } from "@crystallize/react-content-transformer";
import { Image } from "@crystallize/react-image";
import { Flex, Box, Spacer, Typography } from "@/design-system";
import { ArticleFragment } from "@/crystallize/shapes/documents/article.generated";

interface ArticleAuthorIntro {
  article: ArticleFragment;
}

export const ArticleAuthorIntro = ({ article }: ArticleAuthorIntro) => {
  const author = componentContent(
    article.byline?.content,
    "ItemRelationsContent"
  ).items[0];

  const authorImage = author
    ? componentContent(author.avatar.content, "ImageContent")?.images[0]
    : null;

  return (
    author && (
      <Box
        css={{
          borderTop: "1px dotted $colors$border",
          width: "$auth",
          mx: "auto",
        }}
      >
        <Spacer space="6" />

        <Flex direction={{ "@initial": "column", "@bp1": "row" }}>
          {authorImage && (
            <Image
              {...authorImage}
              sizes="60px"
              style={{ width: "60px", marginBlock: 0, marginInline: 0 }}
            />
          )}

          <Spacer
            space="8"
            direction={{ "@initial": "vertical", "@bp1": "horizontal" }}
          />

          <Flex align="start" direction="column">
            <Typography
              size="3"
              css={{
                textTransform: "uppercase",
                fontWeight: "bold",
                lineHeight: "$relaxed",
                textAlign: "center",
                "@bp1": {
                  textAlign: "left",
                },
              }}
            >
              {componentContent(author.name?.content, "SingleLineContent").text}
            </Typography>

            <Typography
              size="3"
              css={{
                lineHeight: "$relaxed",
                textAlign: "center",
                "@bp1": {
                  textAlign: "left",
                },
              }}
            >
              <ContentTransformer
                json={
                  componentContent(author.bio?.content, "RichTextContent")
                    ?.json as [any]
                }
              />
            </Typography>
          </Flex>
        </Flex>
      </Box>
    )
  );
};
