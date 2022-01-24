import { useState } from "react";
import { FrontpageFragment } from "@/crystallize/shapes/documents/frontpage.generated";
import { componentContent } from "@/crystallize/utils/componentContent";
import { Flex, Typography, Spacer, Button } from "@/design-system";
import { Talk } from "@/components/talk";

interface ScheduleProps {
  header: FrontpageFragment["scheduleHeader"];
  schedule: FrontpageFragment["schedule"];
}

export const Schedule = ({ header, schedule }: ScheduleProps) => {
  let talks = componentContent(schedule.content, "ContentChunkContent").chunks;
  let talksArr = []
  let [date, setDate] = useState("2022-07-18T10:00:00.000Z");
 
  talks.forEach((talk) => {
    talk.map((item) => {
      if (
        componentContent(item.content, "DatetimeContent")?.datetime === date
      ) {
        talksArr.push(talk);
      }
    });
  });

  return (
    <Flex
      direction="column"
      align="center"
      css={{ pt: "$16", pb: "$24", width: "$content", mx: "auto", "@bp3": {width: "$full"} }}
      id="schedule"
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
      <Flex css={{ gap: "20px", mx: "0 auto" }}>
        <Button onClick={() => setDate("2022-07-18T10:00:00.000Z")}>
          Day 1
        </Button>
        <Button onClick={() => setDate("2022-07-19T10:00:00.000Z")}>
          Day 2
        </Button>
        <Button onClick={() => setDate("2022-07-20T10:00:00.000Z")}>
          Day 3
        </Button>
      </Flex>
      <Spacer space={10} />
      <Flex
        align="start"
        direction="column"
        css={{ width: "$full", gap: "20px" }}
      >
        {talksArr.map((talk, index) => (
          //@ts-ignore
          <Talk talk={talk} key={index} />
        ))}
      </Flex>
    </Flex>
  );
};
