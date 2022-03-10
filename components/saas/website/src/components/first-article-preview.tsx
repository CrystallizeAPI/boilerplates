import Link from "next/link";
import { componentContent } from "@/crystallize/utils/componentContent";
import { ArticlePreviewFragment } from "@/crystallize/shapes/documents/article.generated";
import { ContentTransformer } from "@crystallize/react-content-transformer";
import { Image } from "@crystallize/react-image";
import { HeroMedia } from "@/components/hero-media";
import { Box, Typography, Spacer } from "@/design-system";

interface FirstArticlePreviewProps {
  article: ArticlePreviewFragment;
}

export const FirstArticlePreview = ({ article }: FirstArticlePreviewProps) => {
  const author = componentContent(
    article.byline?.content,
    "ItemRelationsContent"
  ).items[0];
  const authorImage = author
    ? componentContent(author.avatar.content, "ImageContent")?.images[0]
    : null;

  return (
    <>
      <Link href={article.path}>
        <a
          style={{
            display: "block",
            color: "black",
            textDecoration: "none",
            height: "100%",
          }}
        >
          <Box
            css={{
              display: "flex",
              alignItems: "flex-start",
              position: "relative",
              flexDirection: "column",
              flex: "1",

              "& [space-mobile-only]": {
                display: "block",
                "@bp1": {
                  display: "none",
                },
              },

              "@bp1": {
                flexDirection: "row",
              },
            }}
          >
            <Box css={{ maxWidth: "500px" }}>
              <Box
                css={{
                  "& img": {
                    borderRadius: "$3xl",
                    width: "$full",
                    flexGrow: 0,
                    flexShrink: 0,
                    aspectRatio: "3/2",
                  },
                }}
              >
                <HeroMedia heroMedia={article.heroMedia} />
              </Box>
            </Box>

            <Spacer
              direction={{ "@initial": "horizontal", "@bp1": "vertical" }}
              space={{
                "@initial": 4,
                "@bp1": 16,
              }}
            />

            <Box
              css={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
                flex: 1,
              }}
            >
              <Typography
                as="h3"
                variant="heading"
                size={{
                  "@initial": 6,
                  "@bp1": 8,
                }}
              >
                {
                  componentContent(article.title.content, "SingleLineContent")
                    ?.text
                }
              </Typography>

              <Spacer space={4} />

              <Typography
                as="p"
                size={{
                  "@initial": 4,
                  "@bp1": 5,
                }}
                css={{ lineHeight: "$relaxed" }}
              >
                <ContentTransformer
                  json={
                    componentContent(article.lead.content, "RichTextContent")
                      ?.json as [any]
                  }
                />
              </Typography>

              <Spacer space={4} />

              {author && (
                <div
                  style={{ display: "flex", gap: "20px", alignItems: "center" }}
                >
                  {authorImage && (
                    <Image
                      {...authorImage}
                      sizes="40px"
                      style={{ width: "40px", marginBlock: 0, marginInline: 0 }}
                    />
                  )}

                  <Typography variant="heading" size="3">
                    {
                      componentContent(
                        author.name?.content,
                        "SingleLineContent"
                      ).text
                    }
                  </Typography>
                </div>
              )}
            </Box>
          </Box>
        </a>
      </Link>
    </>
  );
};
