import { FrontpageFragment } from "@/crystallize/shapes/documents/frontpage.generated";
import { componentContent } from "@/crystallize/utils/componentContent";
import { Flex, Typography, Spacer } from "@/design-system";
import { Organisation } from "./organisation";

interface SponsorsProps {
  sponsors: FrontpageFragment["mainSponsors"];
}

export const Sponsors = ({ sponsors }: SponsorsProps) => {
  const sponsorSection = componentContent(
    sponsors.content,
    "ContentChunkContent"
  ).chunks[0];
  const mainSponsors = componentContent(
    sponsorSection[1].content,
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
    >
      <Typography
        as="h2"
        variant="heading"
        size={{"@initial": 9, "@bp5": 8}}
        css={{ textAlign: "left", "@bp3": {textAlign: "center"} }}
      >
        {componentContent(sponsorSection[0].content, "SingleLineContent").text}
      </Typography>

      <Spacer space={{ "@initial": 10, "@bp1": 16 }} />

      <Flex
        direction="row"
        wrap="wrap"
        justify={{ "@initial": "between", "@bp3": "center" }}
        css={{
          width: "$full",
          mx: "auto",
          px: "$6",
          gap: "$16"
        }}
      >
        {mainSponsors?.map((item, index) => (
          <Organisation item={item} key={index} />
        ))}
      </Flex>
    </Flex>
  );
};
