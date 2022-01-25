import { componentContent } from "@/crystallize/utils/componentContent";
import { Image } from "@crystallize/react-image";
import { Box } from "@/design-system";
import Link from "next/link";

export const Organisation = ({ item }) => {
  return (
    <Link href={componentContent(item.url.content, "SingleLineContent").text}>
      <Box
        css={{
          maxWidth: "300px",
          height: "auto",
        }}
      >
        <Image
          {...componentContent(item.logo.content, "ImageContent").images[0]}
          loading="lazy"
        />
      </Box>
    </Link>
  );
};
