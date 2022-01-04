import { FrontpageFragment } from "@/crystallize/shapes/documents/frontpage.generated";
import { componentContent } from "@/crystallize/utils/componentContent";
import { Flex, Typography, Spacer, Box, LocationIcon } from "@/design-system";

interface JobBoardProps {
  header: FrontpageFragment["jobBoardHeader"];
  jobs: FrontpageFragment["jobs"];
}

export const JobBoard = ({ header, jobs }: JobBoardProps) => {
  let jobsArr = componentContent(jobs.content, "ContentChunkContent").chunks;

  return (
    <Flex
      direction="column"
      align={{ "@initial": "start", "@bp3": "center" }}
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
        size="9"
        css={{ lineHeight: "$snug" }}
      >
        {componentContent(header.content, "SingleLineContent").text}
      </Typography>

      <Spacer space={4} />
      <Flex
        direction={{ "@initial": "row", "@bp3": "column" }}
        align={{ "@initial": "start", "@bp3": "center" }}
        justify="between"
        css={{ width: "$full", "@bp3": {gap: "$12"} }}
      >
        {jobsArr.map((job, index) => (
          <Flex
            key={index}
            direction="column"
            align="start"
            css={{
              gap: "15px",
              border: "4px solid",
              borderImage:
                "linear-gradient(90deg, #8218EF -28.2%, #B934FB 111.05%)",
              borderImageSlice: "1",
              padding: "20px 30px",
            }}
          >
            <Typography variant="heading" size={4}>
              {
                componentContent(job[3].content, "ItemRelationsContent")
                  .items[0].name
              }
            </Typography>
            <Typography size={3}>
              <i>
                {componentContent(job[0].content, "SingleLineContent").text}
              </i>
            </Typography>
            <Spacer space={1} />
            <Flex css={{ gap: "10px" }}>
              <LocationIcon />
              <Typography>
                {componentContent(job[1].content, "SingleLineContent").text}
              </Typography>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};
