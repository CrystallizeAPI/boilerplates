import { FrontpageFragment } from "@/crystallize/shapes/documents/frontpage.generated";
import { componentContent } from "@/crystallize/utils/componentContent";
import { Flex, Typography, Spacer } from "@/design-system";
import { Organisation } from "./organisation";

interface PartnersProps {
  partners: FrontpageFragment["sponsors"]|FrontpageFragment["partners"]
  }

export const Partners = ({ partners }: PartnersProps) => {
  let itemsArr = componentContent(partners.content, "ContentChunkContent")
  .chunks[0];

  const organisations = componentContent(
    itemsArr[4].content,
    "ItemRelationsContent"
  ).items;

  return (
    <Flex
      direction="column"
      align="center"
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
        size={9}
      >
        {componentContent(itemsArr[0].content, "SingleLineContent").text}
      </Typography>

      <Spacer space={{ "@initial": 10, "@bp1": 16 }} />

      <Flex
        direction="row"
        wrap="wrap"
        justify={{ "@initial": "between", "@bp3": "start" }}
        css={{
          width: "$full",
          mx: "auto",
          px: "$6",
          gap: "$3",
          "@bp1": { gap: "$16" },
          "@bp3": { gap: "$20" },
        }}
      >
        {organisations?.map((item, index) => (
          <Organisation item={item} key={index} />
        ))}
      </Flex>
    </Flex>
  );
};
