import { componentContent } from "@/crystallize/utils/componentContent";
import { Box, Spacer, Typography, Link } from "@/design-system";
import { ArticlePreview } from "@/components/article-preview";
import { ArticleFragment } from "@/crystallize/shapes/documents/article.generated";

interface ArticleRecommendationProps {
  article: ArticleFragment;
}

export const ArticleRecommendation = ({
  article,
}: ArticleRecommendationProps) => {
  return (
    <Box css={{ width: "$content", mx: "auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
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
          What to Read Next
        </Typography>

        <Link href="/blog">
          <Typography
            as="h4"
            variant="heading"
            size={{
              "@initial": 4,
              "@bp1": 6,
            }}
            color="$primary"
          >
            See all blog articles &#62;&#62;
          </Typography>
        </Link>
      </div>

      <Spacer space={14} />

      <Box
        css={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "$16",
        }}
      >
        {componentContent(
          article.relatedArticles?.content,
          "ItemRelationsContent"
        )?.items.map((article) => (
          <ArticlePreview
            key={article.id}
            article={article}
            css={{
              "& [role=author]": {
                mt: "auto",
              },
              "& [role=wrapper]": {
                height: "$full",
              },
            }}
            isHero
            isHeroItem
          />
        ))}
      </Box>
    </Box>
  );
};
