import { ArticleBaseFragment } from "@/crystallize/shapes/documents/article.generated";
import { componentContent } from "@/crystallize/utils/componentContent";
import { Image, Props as ImageProps } from "@crystallize/react-image";

type HeroMediaProps = Omit<ImageProps, "url" | "altText" | "key"> & {
  heroMedia: ArticleBaseFragment["heroMedia"];
};

export const HeroMedia = ({ heroMedia, ...delegated }: HeroMediaProps) => {
  if (!heroMedia) return null;

  // TODO: Account for VideoContent for hero-media
  // @ts-ignore
  const imageContent = componentContent(
    componentContent(heroMedia.content, "ComponentChoiceContent")
      ?.selectedComponent.content,
    "ImageContent"
  )?.images[0];

  return <Image {...imageContent} {...delegated} />;
};
