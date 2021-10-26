import { componentContent } from "@/crystallize/utils/componentContent";
import { ContentTransformer } from "@crystallize/react-content-transformer";
import { Image } from "@crystallize/react-image";
import { Box, Spacer, Typography } from "@/design-system";
import { ArticleFragment } from "@/crystallize/shapes/documents/article.generated";

interface ArticleContentProps {
  article: ArticleFragment;
}

export const ArticleContent = ({ article }: ArticleContentProps) => {
  return (
    <Box css={{ lineHeight: "$relaxed", maxWidth: "$auth", mx: "auto" }}>
      <section>
        {componentContent(
          article.body?.content,
          "ParagraphCollectionContent"
        ).paragraphs.map((paragraph, index) => (
          <div key={index}>
            <Spacer space="3" />

            {paragraph.title && (
              <Typography
                as="h2"
                size={{
                  "@initial": 7,
                  "@bp1": 7,
                }}
                variant="heading"
                css={{ lineHeight: "$relaxed" }}
                dangerouslySetInnerHTML={{
                  __html: `${paragraph.title.text}`,
                }}
              />
            )}

            <Spacer space="10" />

            {paragraph.body && (
              <Typography
                as="div"
                size={{
                  "@initial": 3,
                  "@bp1": 4,
                }}
                css={{ lineHeight: "$relaxed", "p + p": { mt: "$6" } }}
              >
                <ContentTransformer json={paragraph.body?.json as [any]} />
              </Typography>
            )}

            <Spacer space="10" />

            {paragraph.images && (
              <Typography
                css={{
                  "& img": { width: "$full" },
                  "& p": {
                    textAlign: "center",
                    color: "$grey",
                    mt: "$4",
                    fontWeight: 500,
                  },
                }}
              >
                <Image {...paragraph.images[0]} />
              </Typography>
            )}
          </div>
        ))}
      </section>
    </Box>
  );
};
