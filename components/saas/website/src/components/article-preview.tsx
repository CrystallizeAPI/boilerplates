import Link from "next/link";
import { componentContent } from "@/crystallize/utils/componentContent";
import { ArticlePreviewFragment } from "@/crystallize/shapes/documents/article.generated";
import { ContentTransformer } from "@crystallize/react-content-transformer";
import { Image } from "@crystallize/react-image";
import { Box, Flex, Typography, Spacer, CSS } from "@/design-system";
import { HeroMedia } from "@/components/hero-media";

interface ArticlePreviewProps {
  article: ArticlePreviewFragment;
  isHero?: boolean;
  isHeroItem?: boolean;
  css?: CSS;
}

export const ArticlePreview = ({
  article,
  isHero = false,
  isHeroItem = false,
  css,
}: ArticlePreviewProps) => {
  if (!article) {
    return null;
  }

  const author = componentContent(
    article?.byline?.content,
    "ItemRelationsContent"
  ).items[0];
  const authorImage = author
    ? componentContent(author.avatar.content, "ImageContent")?.images[0]
    : null;

  return (
    <Flex css={css}>
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
            role="wrapper"
            css={{
              display: "flex",
              alignItems: "flex-start",
              position: "relative",
              flexDirection: isHero ? "column" : "row",
              flex: "1",

              "& [space-mobile-only]": {
                display: "block",
                "@bp1": {
                  display: "none",
                },
              },

              "@bp1": {
                flexDirection: isHero ? "column" : "row",
              },
            }}
          >
            <Box
              css={{
                "& img": {
                  borderRadius: "$3xl",
                  width: isHero ? "$full" : "$36",
                  flexGrow: 0,
                  flexShrink: 0,
                  aspectRatio: isHero ? "3/2" : "1/1",
                },
              }}
            >
              <HeroMedia heroMedia={article.heroMedia} />
            </Box>

            <Spacer
              direction={isHero ? "vertical" : "horizontal"}
              space={{
                "@initial": isHero ? 4 : 6,
                "@bp1": isHero ? 4 : 6,
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
              <Spacer space={isHero ? 4 : 0} />

              <Typography
                as="h3"
                variant="heading"
                size={{
                  "@initial": isHero ? 6 : 4,
                  "@bp1": isHero ? (isHeroItem ? 5 : 8) : 6,
                }}
              >
                {
                  componentContent(article.title.content, "SingleLineContent")
                    ?.text
                }
              </Typography>

              <Spacer space={4} />

              <Typography
                as="h1"
                size={{
                  "@initial": isHero ? 4 : 3,
                  "@bp1": isHero ? (isHeroItem ? 2 : 5) : 3,
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

              <Spacer space={isHero ? 4 : 0} />

              {author && isHero && (
                <div
                  role="author"
                  style={{ display: "flex", gap: "20px", alignItems: "center" }}
                >
                  {authorImage && (
                    <Image
                      {...authorImage}
                      sizes="40px"
                      style={{ width: "40px", marginBlock: 0, marginInline: 0 }}
                    />
                  )}

                  <Typography as="h1" variant="heading" size="3">
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
    </Flex>
  );
};
