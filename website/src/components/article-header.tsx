import { componentContent } from "@/crystallize/utils/componentContent";
import { ContentTransformer } from "@crystallize/react-content-transformer";
import { HeroMedia } from "@/components/hero-media";
import { Flex, Box, Spacer, Typography } from "@/design-system";
import { ArticleFragment } from "@/crystallize/shapes/documents/article.generated";

interface ArticleHeaderProps {
  article: ArticleFragment;
}

export const ArticleHeader = ({ article }: ArticleHeaderProps) => {
  return (
    <>
      <Typography
        as="h1"
        variant="heading"
        size={9}
        css={{ textAlign: "center", maxWidth: "$content", mx: "auto" }}
      >
        {componentContent(article.title.content, "SingleLineContent")?.text}
      </Typography>
      <Spacer space={{ "@initial": 11, "@bp1": 14 }} />
      <Flex justify="center">
        <Typography
          as="h1"
          size={{
            "@initial": 3,
            "@bp1": 4,
          }}
          css={{
            lineHeight: "$relaxed",
            textAlign: "center",
            maxWidth: "$content",
            mx: "auto",
          }}
        >
          <ContentTransformer
            json={
              componentContent(article.lead.content, "RichTextContent")
                ?.json as [any]
            }
          />
        </Typography>
      </Flex>
      <Spacer space={{ "@initial": 11, "@bp1": 14 }} />
      <Box css={{ textAlign: "center", "&img": { aspectRatio: 2 / 1 } }}>
        <HeroMedia heroMedia={article.heroMedia} style={{ width: "100%" }} />
      </Box>
    </>
  );
};
