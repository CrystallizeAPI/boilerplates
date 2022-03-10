import { componentContent } from "@/crystallize/utils/componentContent";
import { Image } from "@crystallize/react-image";
import {
  Flex,
  Box,
  Spacer,
  Typography,
  Link,
  TwitterIcon,
  FacebookIcon,
} from "@/design-system";
import { ArticleFragment } from "@/crystallize/shapes/documents/article.generated";

interface ArticleAuthorProps {
  article: ArticleFragment;
}

export const ArticleAuthor = ({ article }: ArticleAuthorProps) => {
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
          maxWidth: "$auth",
          mx: "auto",
        }}
      >
        <Box css={{ borderTop: "1px solid $colors$border" }}>
          <Spacer space="6" />

          <Flex direction={{ "@initial": "column", "@bp1": "row" }}>
            <Flex css={{ width: "$full", flex: "2" }} justify="start">
              <Flex>
                {authorImage && (
                  <Image
                    {...authorImage}
                    sizes="60px"
                    style={{ width: "60px", marginBlock: 0, marginInline: 0 }}
                  />
                )}

                <Spacer space="4" direction="horizontal" />

                <Flex direction="column" align="start">
                  <Typography
                    as="h1"
                    variant="heading"
                    size="3"
                    css={{ textTransform: "uppercase" }}
                  >
                    {
                      componentContent(
                        author.name?.content,
                        "SingleLineContent"
                      ).text
                    }
                  </Typography>

                  <Spacer space="2" />

                  <Typography size="3">
                    {new Intl.DateTimeFormat("en-US", {
                      dateStyle: "long",
                    }).format(new Date(article.publishedAt))}
                  </Typography>
                </Flex>
              </Flex>
            </Flex>

            <Spacer space="8" />

            <Box
              css={{
                position: "relative",
                width: "$full",
                flex: "1",
                border: "1px solid $colors$dropShadow",
                borderRadius: "$sm $none $none $sm",
                boxShadow: "$card",
                "&:before": {
                  content: '""',
                  position: "absolute",
                  height: "100%",
                  width: "1px",
                  bg: "$dropShadow",
                  top: 0,
                  left: "50%",
                },
              }}
            >
              <Box
                css={{
                  height: "$12",
                  width: "$1_2",
                  alignItems: "center",
                  display: "inline-flex",
                  flexShrink: 0,
                  justifyContent: "center",
                  color: "$primary",
                }}
              >
                <Link
                  href="#"
                  css={{ borderRadius: "$none", fontFamily: "none" }}
                >
                  <Box
                    css={{
                      "& svg": {
                        width: 23,
                        height: 23,
                      },
                    }}
                  >
                    <FacebookIcon />
                  </Box>
                </Link>
              </Box>

              <Box
                css={{
                  height: "$12",
                  width: "$1_2",
                  alignItems: "center",
                  display: "inline-flex",
                  flexShrink: 0,
                  justifyContent: "center",
                  color: "$primary",
                }}
              >
                <Link
                  href="#"
                  css={{ borderRadius: "$none", fontFamily: "none" }}
                >
                  <Box
                    css={{
                      "& svg": {
                        width: 23,
                        height: 23,
                      },
                    }}
                  >
                    <TwitterIcon />
                  </Box>
                </Link>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    )
  );
};
