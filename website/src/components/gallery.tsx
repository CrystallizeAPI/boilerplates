import { FrontpageFragment } from "@/crystallize/shapes/documents/frontpage.generated";
import { componentContent } from "@/crystallize/utils/componentContent";
import { Box, Flex, Typography, Button, Spacer } from "@/design-system";
import { Image } from "@crystallize/react-image";

interface GalleryProps {
  gallery: FrontpageFragment["gallery"];
}

export const Gallery = ({ gallery }: GalleryProps) => {
  let galleryInfo = componentContent(gallery.content, "ContentChunkContent")
    .chunks[0];
  let galleryImages = componentContent(gallery.content, "ContentChunkContent")
    .chunks[0][1].content;
  let images = componentContent(galleryImages, "ImageContent").images;

  return (
    <Box
      css={{
        width: "$content",
        mx: "auto",
        pt: "$16",
        pb: "$24",
        "@bp3": { width: "$full" },
      }}
    >
      <Typography as="h2" variant="heading" size={9}>
        {componentContent(galleryInfo[0].content, "SingleLineContent").text}
      </Typography>
      <Spacer space={10} />
      <Flex
        align={{ "@intial": "start", "@bp3": "center" }}
        wrap="wrap"
        justify="start"
        css={{ width: "$full", gap: "$8" }}
      >
        {images.map((image, index) => (
          <Box
            key={index}
            css={{
              maxWidth: "300px",
              overflow: "hidden",
              img: { width: "100%", objectFit: "cover", borderRadius: "20px" },
              "@bp3": { maxWidth: "100%" },
            }}
          >
            <Image
              {...image}
              loading="lazy"
              sizes="(min-width: 1024px) 100vw, 300px"
            />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};
