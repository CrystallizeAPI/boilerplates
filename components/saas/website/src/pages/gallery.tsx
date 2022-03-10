import { NextPage, GetStaticProps } from "next";
import Link from "next/link";
import { normalizeDocumentNode } from "@/crystallize/utils/normalizeDocumentNode";
import { componentContent } from "@/crystallize/utils/componentContent";
import {
  GalleryDocument,
  GalleryQuery,
} from "@/crystallize/queries/gallery.generated";
import { catalogueClient } from "@/clients";
import { useOnlyAuthenticated } from "@/contexts/auth";
import { Spacer, Box, Typography } from "@/design-system";
import { ContentTransformer } from "@crystallize/react-content-transformer";
import { Image } from "@crystallize/react-image";

type GalleryPageProps = GalleryQuery & { path: string };

export const getStaticProps: GetStaticProps<GalleryPageProps> = async () => {
  const path = "/gallery";
  const data = await catalogueClient.request<GalleryQuery>(
    normalizeDocumentNode(GalleryDocument),
    { path }
  );
  return { props: { ...data, path } };
};

export const GalleryPage: NextPage<GalleryPageProps> = ({ gallery }) => {
  const auth = useOnlyAuthenticated();

  if (!auth.isChecked) {
    return (
      <Box
        as="h2"
        css={{
          padding: "$7",
          textAlign: "center",
        }}
      >
        <Typography
          css={{
            fontSize: "$3",
          }}
        >
          Checking your subscription...
        </Typography>
      </Box>
    );
  }

  if (!auth.hasActiveSubscriptionContract) {
    return (
      <Box
        as="h2"
        css={{
          padding: "$7",
          textAlign: "center",
        }}
      >
        <Typography
          css={{
            fontSize: "$3",
          }}
        >
          Looks like you don't have an active subscription. Head over to{" "}
          <Link href="/signup">
            <a>signup</a>
          </Link>{" "}
          to get one!
        </Typography>
      </Box>
    );
  }

  return (
    <Box css={{ maxWidth: "$content", mx: "auto" }}>
      <Spacer space={24} />

      <Typography
        as="h1"
        size={8}
        css={{ textAlign: "center", fontWeight: "bold" }}
      >
        {componentContent(gallery.title.content, "SingleLineContent").text}
      </Typography>

      <Spacer space={8} />

      <Typography size={4} css={{ textAlign: "center" }}>
        <ContentTransformer
          json={
            componentContent(gallery.intro.content, "RichTextContent").json as [
              any
            ]
          }
        />
      </Typography>

      <Spacer space={12} />

      <Box
        css={{ display: "grid", gap: "$8", gridTemplateColumns: "1fr 1fr 1fr" }}
      >
        {componentContent(gallery.images.content, "ImageContent").images.map(
          (image, index) => {
            return (
              <Box
                key={index}
                css={{
                  width: "$full",
                  boxShadow: "$card",
                  borderRadius: "$md",
                  p: "$4",
                  img: { borderRadius: "$xl" },
                }}
              >
                <Image {...image} style={{ width: "100%" }} />
              </Box>
            );
          }
        )}
      </Box>

      <Spacer space={12} />
    </Box>
  );
};

export default GalleryPage;
