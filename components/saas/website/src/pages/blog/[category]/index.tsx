import { GetStaticProps, GetStaticPaths, NextPage } from "next";

import { catalogueClient } from "@/crystallize/clients";
import { normalizeDocumentNode } from "@/crystallize/utils/normalizeDocumentNode";
import {
  AllCategoriesDocument,
  AllCategoriesQuery,
} from "@/crystallize/queries/allCategories.generated";
import {
  CategoryDocument,
  CategoryQuery,
} from "@/crystallize/queries/category.generated";
import { componentContent } from "@/crystallize/utils/componentContent";
import { ContentTransformer } from "@crystallize/react-content-transformer";
import { Box, Spacer, Flex, Typography } from "@/design-system";
import { Featured } from "@/components/featured";
import { Newsletter } from "@/components/newsletter";
import { ArticlePreview } from "@/components/article-preview";

type CategoryPageProps = CategoryQuery & { path: string };

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await catalogueClient.request<AllCategoriesQuery>(
    normalizeDocumentNode(AllCategoriesDocument)
  );
  return {
    paths:
      data?.blog?.categories?.map((category) => ({
        params: { category: category.path },
      })) || [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<CategoryPageProps> = async ({
  params,
}) => {
  const path = `/blog/${params.category}`;
  const data = await catalogueClient.request<CategoryQuery>(
    normalizeDocumentNode(CategoryDocument),
    { path }
  );
  return { props: { ...data, path } };
};

export const CategoryPage: NextPage<CategoryPageProps> = ({ category }) => {
  if (!category) return null;

  const description =
    "Cras id nulla fringilla, tincidunt tellus eget, euismod leo. Ut finibus.";

  return (
    <Box id="content" css={{ flex: "1 1 100%" }}>
      <Spacer space={{ "@initial": 11, "@bp1": 32 }} />

      <Flex justify="center">
        <Typography
          as="h3"
          variant="heading"
          size={{
            "@initial": 7,
            "@bp1": 11,
          }}
        >
          {componentContent(category.title.content, "SingleLineContent")?.text}
        </Typography>
      </Flex>

      <Spacer space={{ "@initial": 11, "@bp1": 14 }} />

      <Flex justify="center">
        <Typography size={4} css={{ textAlign: "center" }}>
          <ContentTransformer
            json={
              componentContent(category.brief.content, "RichTextContent")
                ?.json as [any]
            }
          />
        </Typography>
      </Flex>

      <Spacer space={{ "@initial": 11, "@bp1": 32 }} />

      <Box css={{ width: "$content", mx: "auto" }}>
        <Featured featured={category.featured} />
      </Box>

      <Spacer space={{ "@initial": 11, "@bp1": 32 }} />

      <Box
        css={{
          width: "$content",
          mx: "auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "$16",
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

      <Spacer space={{ "@initial": 11, "@bp1": 32 }} />

      <Newsletter description={description} />
    </Box>
  );
};

export default CategoryPage;
