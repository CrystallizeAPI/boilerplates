import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
// import { catalogueClient } from "@/crystallize/clients";
import { catalogueClient } from "@/clients";
import { normalizeDocumentNode } from "@/crystallize/utils/normalizeDocumentNode";
import { BlogDocument, BlogQuery } from "@/crystallize/queries/blog.generated";
import { componentContent } from "@/crystallize/utils/componentContent";
import { ContentTransformer } from "@crystallize/react-content-transformer";
import { ArticlePreview } from "@/components/article-preview";
import { Featured } from "@/components/featured";

type BlogPageProps = BlogQuery & { path: string };

export const getStaticProps: GetStaticProps<BlogPageProps> = async () => {
  const path = "/blog";
  const data = await catalogueClient.request<BlogQuery>(
    normalizeDocumentNode(BlogDocument),
    { path }
  );
  return { props: { ...data, path } };
};

export const BlogPage: NextPage<BlogPageProps> = ({ blog }) => {
  return (
    <>
      <h1>{componentContent(blog.title.content, "SingleLineContent")?.text}</h1>
      <ContentTransformer
        json={
          componentContent(blog.brief.content, "RichTextContent")?.json as [any]
        }
      />

      <div style={{ padding: "20px 0" }}>
        <Featured featured={blog.featured} />
        <hr style={{ marginTop: "20px" }} />
      </div>

      {blog.categories?.map((category) => {
        return (
          <div key={category.path} style={{ padding: "30px 0" }}>
            <Link href={category.path}>
              {
                componentContent(category.title.content, "SingleLineContent")
                  ?.text
              }
            </Link>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "20px",
              }}
            >
              {category.articles?.edges?.map(({ node: article }) => {
                return <ArticlePreview key={article.id} article={article} />;
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BlogPage;
