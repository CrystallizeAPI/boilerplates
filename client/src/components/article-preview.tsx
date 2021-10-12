// import "./article-preview.module.css";
import Link from "next/link";
import { Image } from "@crystallize/react-image";
import { ContentTransformer } from "@crystallize/react-content-transformer";

import { componentContent } from "@/crystallize/utils/componentContent";
import { ArticlePreviewFragment } from "@/crystallize/shapes/documents/article.generated";
import { HeroMedia } from "@/components/hero-media";

// import {} from "@/design-system/button"

interface ArticlePreviewProps {
  article: ArticlePreviewFragment;
}

export const ArticlePreview = ({ article }: ArticlePreviewProps) => {
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
          <div
            style={{
              backgroundColor: "lightgray",
              padding: "10px",
              height: "100%",
              boxSizing: "border-box",
            }}
          >
            <HeroMedia
              heroMedia={article.heroMedia}
              sizes="200px"
              style={{ width: "200px" }}
            />

            <h2>
              {
                componentContent(article.title.content, "SingleLineContent")
                  ?.text
              }{" "}
            </h2>
            <ContentTransformer
              json={
                componentContent(article.lead.content, "RichTextContent")
                  ?.json as [any]
              }
            />

            {author && (
              <div
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
              >
                {authorImage && (
                  <Image
                    {...authorImage}
                    sizes="30px"
                    style={{ width: "30px", marginBlock: 0, marginInline: 0 }}
                  />
                )}
                <div>
                  {
                    componentContent(author.name?.content, "SingleLineContent")
                      .text
                  }
                </div>
              </div>
            )}
          </div>
        </a>
      </Link>

      <style jsx global>{`
        figure {
          margin-block: 0;
          margin-inline: 0;
        }
      `}</style>
    </>
  );
};
