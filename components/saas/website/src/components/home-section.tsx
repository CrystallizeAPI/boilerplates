import { SectionFragment } from "@/crystallize/shapes/documents/section.generated";
import { componentContent } from "@/crystallize/utils/componentContent";
import { ContentTransformer } from "@crystallize/react-content-transformer";
import { Image } from "@crystallize/react-image";
import { Typography } from "@/design-system";

type HomeSectionProps = {
  section: SectionFragment;
};

export const HomeSection = ({ section }: HomeSectionProps) => {
  const webDisplaySettings = componentContent(
    section.webDisplaySettings.content,
    "ContentChunkContent"
  ).chunks[0];
  const titleTag = componentContent(
    webDisplaySettings[0].content,
    "SelectionContent"
  ).options[0].value;
  const contentAlignment = componentContent(
    webDisplaySettings[1].content,
    "SelectionContent"
  ).options[0].value;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: contentAlignment === "left" ? "row" : "row-reverse",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "grid", placeContent: "center" }}>
        <Typography
          as={titleTag as "h1" | "h2" | "h3" | "h4" | "h5" | "h6"}
          variant="heading"
          size="6"
        >
          {componentContent(section.title.content, "SingleLineContent").text}
        </Typography>
        <ContentTransformer
          json={
            componentContent(section.description.content, "RichTextContent")
              ?.json as [any]
          }
        />
      </div>
      <div>
        <Image
          {...componentContent(section.image.content, "ImageContent").images[0]}
          style={{ maxWidth: "600px" }}
        />
      </div>
    </div>
  );
};
