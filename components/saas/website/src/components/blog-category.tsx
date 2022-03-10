import { componentContent } from "@/crystallize/utils/componentContent";
import { ArticlePreview } from "@/components/article-preview";
import { Flex, Link, Typography, Box, Spacer } from "@/design-system";
import { BlogQuery } from "@/crystallize/queries/blog.generated";

interface BlogCategoryProps {
  category: BlogQuery["blog"]["categories"][number];
}

export const BlogCategory = ({ category }: BlogCategoryProps) => {
  return (
    <Box css={{ maxWidth: "$content", mx: "auto" }}>
      <Flex justify="center">
        <Box css={{ flex: 1 }}>
          <Typography as="h3" variant="heading" size={8}>
            {
              componentContent(category.title.content, "SingleLineContent")
                ?.text
            }
          </Typography>
        </Box>

        <Link href={category.path}>
          <Typography
            as="h4"
            variant="heading"
            size={{
              "@initial": 4,
              "@bp1": 6,
            }}
          >
            {`
              See All ${
                componentContent(category.title.content, "SingleLineContent")
                  ?.text
              } Articles >>
            `}
          </Typography>
        </Link>
      </Flex>

      <Spacer space={14} />

      <Box
        css={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "$8",
        }}
      >
        {category.articles?.edges?.map(({ node: article }) => {
          return (
            <ArticlePreview
              key={article.id}
              article={article}
              isHero
              isHeroItem
            />
          );
        })}
      </Box>

      <Spacer
        space={{
          "@initial": 10,
          "@bp1": 0,
        }}
      />
    </Box>
  );
};
