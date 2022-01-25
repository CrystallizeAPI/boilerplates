import { componentContent } from "@/crystallize/utils/componentContent";
import { Image } from "@crystallize/react-image";
import { Flex, Typography, Spacer, Box } from "@/design-system";
import {
  FacebookIcon,
  TwitterIcon,
  LinkedInIcon,
  GitHubIcon,
} from "@/design-system/theme/icons";
import Background from "@/design-system/theme/assets/speaker-background.svg";

export const Speaker = ({ speaker }) => {
  return (
    <Flex
      direction="column"
      css={{ width: "250px", gap: "10px", "@bp3": { width: "100%" } }}
    >
      <Box
        css={{
          backgroundImage: `url(${Background.src})`,
          width: "100%",
          textAlign: "center",
          backgroundPosition: "bottom",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Image
          {...componentContent(speaker.image.content, "ImageContent").images[0]}
          loading="lazy"
          sizes="150px"
        />
      </Box>
      <Spacer space={6} />
      <Typography css={{ fontWeight: "700" }}>
        {componentContent(speaker.name.content, "SingleLineContent").text}
      </Typography>
      <Typography>
        {componentContent(speaker.job.content, "SingleLineContent").text} at{" "}
        {componentContent(speaker.company.content, "SingleLineContent").text}
      </Typography>
      <Flex
        css={{ width: "$full", gap: "10px" }}
        align="center"
        justify="center"
      >
        <FacebookIcon />
        <TwitterIcon />
        <LinkedInIcon />
        <GitHubIcon />
      </Flex>
    </Flex>
  );
};
