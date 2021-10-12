import { CategoryFragment } from "@/crystallize/shapes/folders/category.generated";
import { componentContent } from "@/crystallize/utils/componentContent";
import { ArticlePreview } from "@/components/article-preview";
import Grid from "@crystallize/grid-renderer";

interface FeaturedProps {
  featured: CategoryFragment["featured"];
}

export const Featured = ({ featured }: FeaturedProps) => {
  if (!featured) return null;

  const featuredContent = componentContent(
    featured.content,
    "ComponentChoiceContent"
  ).selectedComponent.content;

  switch (featuredContent.__typename) {
    case "GridRelationsContent":
      return (
        <Grid
          model={featuredContent.grids[0]}
          style={{ gap: 20 }}
          cellComponent={({ cell }) => {
            return <ArticlePreview article={cell.item} />;
          }}
        />
      );
    case "ItemRelationsContent":
      return <ArticlePreview article={featuredContent.items[0]} />;
    default:
      return null;
  }
};
