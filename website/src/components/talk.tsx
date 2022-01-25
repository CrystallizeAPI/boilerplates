import { useState } from "react";
import { FrontpageFragment } from "@/crystallize/shapes/documents/frontpage.generated";
import { componentContent } from "@/crystallize/utils/componentContent";
import {
  Flex,
  Typography,
  DownIcon,
  Spacer,
  Box,
  IconButton,
} from "@/design-system";
import { ContentTransformer } from "@crystallize/react-content-transformer";
import { Image } from "@crystallize/react-image";
import ReactPlayer from "react-player";

interface TalkProps {
  talk: FrontpageFragment["schedule"];
}

export const Talk = ({ talk }: TalkProps) => {
  const [isShowing, setIsShowing] = useState(false);

  const speaker = componentContent(talk[4].content, "ItemRelationsContent")
    .items[0];
  const dateComponent = new Date(talk[3].content.datetime);

  //remove the day
  const date = dateComponent.toDateString().replace(/^\S+\s/, "");

  return (
    <Box
      variant="card"
      css={{
        width: "$full",
        padding: "50px",
      }}
    >
      <Flex
        direction={{ "@initial": "row", "@bp3": "column" }}
        justify="between"
        css={{ gap: "30px" }}
      >
        <Box
          css={{
            height: "100px",
            width: "100px",
            background: "$primaryGradient",
            overflow: "hidden",
            borderRadius: "50%",
            transform: "matrix(-1, 0, 0, 1, 0, 0)",
            img: {
              objectPosition: "8px 20px",
              width: "95%",
            },
          }}
        >
          <Image
            {...componentContent(speaker.image.content, "ImageContent")
              .images[0]}
            loading="lazy"
            sizes="100px"
          />
        </Box>
        <Flex
          direction="column"
          align="start"
          css={{
            borderRight: "1px solid $black",
            pr: "$10",
            "@bp3": { border: "none", pr: "0" },
          }}
        >
          <Typography variant="heading" size="5" css={{ lineHeight: "$snug" }}>
            {componentContent(talk[0].content, "SingleLineContent").text}
          </Typography>
          <Typography size="2" css={{ fontWeight: "italics" }}>
            <i>
              {componentContent(speaker.name.content, "SingleLineContent").text}
              ,{" "}
              {componentContent(speaker.job.content, "SingleLineContent").text}{" "}
              at{" "}
              {
                componentContent(speaker.company.content, "SingleLineContent")
                  .text
              }
            </i>
          </Typography>
        </Flex>
        <Flex
          direction="column"
          align={{ "@initial": "start", "@bp3": "center" }}
          css={{ gap: "10px" }}
        >
          <Typography size="5">{date}</Typography>
          <Typography variant="heading" size="5" css={{ lineHeight: "$snug" }}>
            {componentContent(talk[2].content, "SingleLineContent").text}
          </Typography>
        </Flex>
        <IconButton
          onClick={() => setIsShowing(!isShowing)}
          css={{ alignSelf: "center" }}
        >
          <DownIcon />
        </IconButton>
      </Flex>
      <Spacer space={8} />

      <Box
        css={{
          display: isShowing ? "block" : "none",
          borderTop: "1px solid $black",
          pt: "30px",
        }}
      >
        <ReactPlayer
          url={componentContent(talk[5].content, "SingleLineContent").text}
          width="100%"
          height="100%"
          controls
        />
        <Spacer space={10} />
        <Typography size={3} css={{ lineHeight: "$relaxed" }}>
          <ContentTransformer
            json={
              componentContent(talk[1].content, "RichTextContent").json as [any]
            }
          />
        </Typography>
      </Box>

      <Spacer space={12} />
    </Box>
  );
};
