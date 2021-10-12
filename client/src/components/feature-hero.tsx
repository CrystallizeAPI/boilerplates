import NextLink from "next/link";
import { useRouter } from "next/router";
import { FeatureFragment } from "@/crystallize/shapes/folders/feature.generated";
import { componentContent } from "@/crystallize/utils/componentContent";
import { ContentTransformer } from "@crystallize/react-content-transformer";
import { Image } from "@crystallize/react-image";
import { Flex, Typography, Spacer, Button } from "@/design-system";
import { AllFeaturesQuery } from "@/crystallize/queries/allFeatures.generated";

interface FeatureHeroProps {
  title: FeatureFragment["title"];
  intro: FeatureFragment["intro"];
  heroImage: FeatureFragment["heroImage"];
  features: AllFeaturesQuery["allFeaturesPage"]["features"];
}

export const FeatureHero = ({
  title,
  intro,
  heroImage,
  features,
}: FeatureHeroProps) => {
  const router = useRouter();

  return (
    <Flex
      direction="column"
      css={{
        p: "$3",
        width: "$content",
        mx: "auto",
        flex: "1 1 100%",
        "& [data-image]": {
          width: "$full",
          flexShrink: 0,
        },
        "@bp1": {
          pt: "$20",
          pb: "$32",
        },
      }}
    >
      <Flex direction="column" css={{ maxWidth: "786px", width: "$full" }}>
        <Typography
          variant="heading"
          size={{ "@initial": 8, "@bp1": 9 }}
          css={{ textAlign: "center", lineHeight: "$normal" }}
        >
          {componentContent(title.content, "SingleLineContent").text}
        </Typography>
      </Flex>

      <Spacer space={14} />

      <Flex css={{ gap: "$8" }}>
        {features.map((feature) => (
          <NextLink key={feature.path} href={feature.path} passHref>
            <Button
              as="a"
              variant={
                router.asPath.includes(feature.path) ? "primary" : "secondary"
              }
              size="sm"
            >
              {feature.name}
            </Button>
          </NextLink>
        ))}
      </Flex>

      <Spacer space={{ "@initial": 14, "@bp1": 24 }} />

      <Flex
        direction={{ "@initial": "column", "@bp1": "row" }}
        align="center"
        css={{ width: "$full", flex: "1 1 100%" }}
      >
        <Image
          {...componentContent(heroImage.content, "ImageContent").images[0]}
          style={{
            borderRadius: "1.5rem", // $3xl
          }}
        />

        <Spacer direction="horizontal" space={16} />

        <Typography as="span" size="4" css={{ lineHeight: "$relaxed" }}>
          <ContentTransformer
            json={
              componentContent(intro.content, "RichTextContent")?.json as [any]
            }
          />
        </Typography>
      </Flex>
    </Flex>
  );
};
