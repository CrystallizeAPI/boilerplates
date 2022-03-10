import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import flatten from "lodash/fp/flatten";
import { catalogueClient } from "@/crystallize/clients";
import { normalizeDocumentNode } from "@/crystallize/utils/normalizeDocumentNode";
import {
  AllArticlesDocument,
  AllArticlesQuery,
} from "@/crystallize/queries/allArticles.generated";
import {
  ArticleDocument,
  ArticleQuery,
} from "@/crystallize/queries/article.generated";

import { Box, Spacer } from "@/design-system";

import { ArticleHeader } from "@/components/article-header";
import { ArticleAuthor } from "@/components/article-author";
import { ArticleContent } from "@/components/article-content";
import { ArticleSharing } from "@/components/article-sharing";
import { ArticleAuthorIntro } from "@/components/article-author-intro";
import { ArticleRecommendation } from "@/components/article-recommendation";

type ArticlePageProps = ArticleQuery & { path: string };

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await catalogueClient.request<AllArticlesQuery>(
    normalizeDocumentNode(AllArticlesDocument)
  );
  return {
    paths: flatten(
      data?.blog?.categories.map(
        (category) =>
          category.articles?.map((article) => ({
            params: { category: category.path, article: article.path },
          })) || []
      ) || []
    ),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<ArticlePageProps> = async ({
  params,
}) => {
  const path = `/blog/${params.category}/${params.article}`;
  const data = await catalogueClient.request<ArticleQuery>(
    normalizeDocumentNode(ArticleDocument),
    { path }
  );
  return { props: { ...data, path } };
};

export const ArticlePage: NextPage<ArticlePageProps> = ({ article }) => {
  if (!article) return null;

  return (
    <Box
      id="content"
      css={{
        flex: "1 1 100%",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Spacer space={{ "@initial": 11, "@bp1": 32 }} />

      <ArticleHeader article={article} />

      <Spacer space={{ "@initial": 11, "@bp1": 14 }} />

      <ArticleAuthor article={article} />

      <Spacer space="14" />

      <ArticleContent article={article} />

      <Spacer space="12" />

      <ArticleSharing />

      <Spacer space="12" />

      <ArticleAuthorIntro article={article} />

      <Spacer space={{ "@initial": 14, "@bp1": 40 }} />

      <ArticleRecommendation article={article} />

      <Spacer space={{ "@initial": 14, "@bp1": 32 }} />
    </Box>
  );
};

export default ArticlePage;
