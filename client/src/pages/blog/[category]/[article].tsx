import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import Link from "next/link";
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
import { componentContent } from "@/crystallize/utils/componentContent";
import { ContentTransformer } from "@crystallize/react-content-transformer";
import { Image } from "@crystallize/react-image";
import { HeroMedia } from "@/components/hero-media";
import { ArticlePreview } from "@/components/article-preview";

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

  const author = componentContent(
    article.byline?.content,
    "ItemRelationsContent"
  ).items[0];
  const authorImage = author
    ? componentContent(author.avatar.content, "ImageContent")?.images[0]
    : null;

  return (
    <>
      <h1>
        {componentContent(article.title.content, "SingleLineContent")?.text}
      </h1>
      <ContentTransformer
        json={
          componentContent(article.lead.content, "RichTextContent")?.json as [
            any
          ]
        }
      />
      <HeroMedia heroMedia={article.heroMedia} />

      {author && (
        <div
          style={{
            marginTop: "30px",
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          {authorImage && (
            <Image
              {...authorImage}
              sizes="30px"
              style={{ width: "30px", marginBlock: 0, marginInline: 0 }}
            />
          )}
          <div>
            <div>
              {componentContent(author.name?.content, "SingleLineContent").text}
            </div>
            <div>
              {new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(
                new Date(article.publishedAt)
              )}
            </div>
          </div>
        </div>
      )}

      <section>
        {componentContent(
          article.body?.content,
          "ParagraphCollectionContent"
        ).paragraphs.map((paragraph, index) => (
          <div key={index} style={{ paddingTop: "30px" }}>
            {paragraph.title && <h2>{paragraph.title.text}</h2>}
            {paragraph.body && (
              <ContentTransformer json={paragraph.body?.json as [any]} />
            )}
            {paragraph.images && <Image {...paragraph.images[0]} />}
          </div>
        ))}
      </section>

      <hr style={{ marginTop: "80px", marginBottom: "20px" }} />

      {author && (
        <div
          style={{
            marginTop: "30px",
            display: "flex",
            gap: "20px",
            alignItems: "flex-start",
          }}
        >
          {authorImage && (
            <Image
              {...authorImage}
              sizes="60px"
              style={{ width: "60px", marginBlock: 0, marginInline: 0 }}
            />
          )}
          <div>
            <div>
              {componentContent(author.name?.content, "SingleLineContent").text}
            </div>
            <ContentTransformer
              json={
                componentContent(author.bio?.content, "RichTextContent")
                  ?.json as [any]
              }
            />
          </div>
        </div>
      )}

      <div style={{ marginTop: "80px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2>What to Read Next</h2>
          <Link href="/blog">See all blog articles</Link>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "20px",
          }}
        >
          {componentContent(
            article.relatedArticles?.content,
            "ItemRelationsContent"
          )?.items.map((article) => (
            <ArticlePreview key={article.id} article={article} />
          ))}
        </div>
      </div>

      <style jsx global>{`
        figure {
          margin-block: 0;
          margin-inline: 0;
        }
      `}</style>
    </>
  );
};

export default ArticlePage;
