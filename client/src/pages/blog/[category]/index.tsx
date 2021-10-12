import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import Link from "next/link";
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
import { ArticlePreview } from "@/components/article-preview";
import { Featured } from "@/components/featured";

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

  return (
    <>
      <h1>
        {componentContent(category.title.content, "SingleLineContent")?.text}
      </h1>
      <ContentTransformer
        json={
          componentContent(category.brief.content, "RichTextContent")?.json as [
            any
          ]
        }
      />

      <div style={{ padding: "20px 0" }}>
        <Featured featured={category.featured} />
        <hr style={{ marginTop: "20px" }} />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "20px",
        }}
      >
        {category.articles?.edges.map(({ node: article }) => {
          return <ArticlePreview key={article.id} article={article} />;
        })}
      </div>
    </>
  );
};

export default CategoryPage;
