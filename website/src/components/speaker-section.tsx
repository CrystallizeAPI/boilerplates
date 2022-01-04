import { FrontpageFragment } from "@/crystallize/shapes/documents/frontpage.generated";
import { componentContent } from "@/crystallize/utils/componentContent";
import { Flex, Typography, Button, Spacer } from "@/design-system";
import NextLink from "next/link";
import { ContentTransformer } from "@crystallize/react-content-transformer";
import { Speaker } from "@/components/speaker";

interface SpeakersProps {
  speakersInfo: FrontpageFragment["speakers"];
}

export const SpeakerSection = ({ speakersInfo }: SpeakersProps) => {
  let speakers = componentContent(speakersInfo.content, "ContentChunkContent")
    .chunks[0];
  const speakersArr = componentContent(
    speakers[2].content,
    "ItemRelationsContent"
  ).items;

  return (
    <Flex
      direction="column"
      align="start"
      css={{
        pt: "$16",
        pb: "$24",
        width: "$content",
        mx: "auto",
        "@bp3": { width: "$full" },
      }}
      id="speakers"
    >
      <Typography
        as="h2"
        variant="heading"
        size="9"
        css={{ lineHeight: "$snug" }}
      >
        {componentContent(speakers[0].content, "SingleLineContent").text}
      </Typography>

      <Spacer space={4} />

      <Flex
        direction={{ "@initial": "row", "@bp3": "column" }}
        align="start"
        justify="between"
        css={{ width: "$full", "@bp3": {gap: "$6"} }}
      >
        <Typography size={4} css={{ lineHeight: "$relaxed" }}>
          <ContentTransformer
            json={
              componentContent(speakers[1].content, "RichTextContent").json as [
                any
              ]
            }
          />
        </Typography>
        <NextLink href="/" passHref>
          <Button as="a" css={{ maxWidth: "150px", height: "40px" }}>
            {componentContent(speakers[3].content, "SingleLineContent")?.text}
          </Button>
        </NextLink>
      </Flex>

      <Flex
        direction="row"
        wrap="wrap"
        justify="between"
        css={{
          width: "$full",
          mx: "auto",
          px: "$6",
          gap: "$20",
          "@bp1": { gap: "$16" },
          mt: "80px",
        }}
      >
        {speakersArr.length > 0
          ? speakersArr?.map((item, index) => (
              <Speaker speaker={item} key={index} />
            ))
          : null}
      </Flex>
    </Flex>
  );
};
