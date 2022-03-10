import NextLink from "next/link";
import { componentContent } from "@/crystallize/utils/componentContent";
import { TeamFragment } from "@/crystallize/shapes/folders/team.generated";
import { Image } from "@crystallize/react-image";
import { ContentTransformer } from "@crystallize/react-content-transformer";
import {
  Box,
  Flex,
  Typography,
  Spacer,
  IconButton,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/design-system";

interface AboutTeamProps {
  team: TeamFragment["team"];
}

export const AboutTeam = (props: AboutTeamProps) => {
  const teamChunks = componentContent(props.team.content, "ContentChunkContent")
    .chunks[0];
  const title = teamChunks[0];
  const members = teamChunks[1];

  return (
    <Box
      css={{ maxWidth: "$content", mx: "auto", py: "$32", textAlign: "center" }}
    >
      <Typography as="h2" variant="heading" size={8}>
        {componentContent(title.content, "SingleLineContent").text}
      </Typography>

      <Spacer space={24} />

      <Box
        css={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          columnGap: "$6",
          rowGap: "$16",
        }}
      >
        {componentContent(members.content, "ItemRelationsContent").items.map(
          (member, index) => {
            const social = componentContent(
              member.social.content,
              "ContentChunkContent"
            ).chunks[0];
            const instagramUrl = social[0];
            const twitterUrl = social[1];
            const linkedinUrl = social[2];

            return (
              <Box key={index}>
                <Box css={{ width: "$full" }}>
                  {componentContent(member.avatar.content, "ImageContent") && (
                    <Image
                      {...componentContent(
                        member.avatar.content,
                        "ImageContent"
                      ).images[0]}
                      style={{ width: "100%", borderRadius: "1rem" }}
                    />
                  )}
                </Box>

                <Spacer space={10} />

                <Typography variant="heading" as="h3" size={4}>
                  {
                    componentContent(member.name.content, "SingleLineContent")
                      .text
                  }
                </Typography>

                <Spacer space={4} />

                <Typography variant="text" as="span" size={4}>
                  {
                    componentContent(member.title.content, "SingleLineContent")
                      .text
                  }
                </Typography>

                <Spacer space={4} />

                <Flex justify="center">
                  <NextLink
                    href={
                      componentContent(
                        instagramUrl.content,
                        "SingleLineContent"
                      ).text
                    }
                    passHref
                  >
                    <IconButton
                      as="a"
                      size="4"
                      target="_blank"
                      rel="noreferer noopener"
                    >
                      <InstagramIcon />
                    </IconButton>
                  </NextLink>
                  <NextLink
                    href={
                      componentContent(twitterUrl.content, "SingleLineContent")
                        .text
                    }
                    passHref
                  >
                    <IconButton
                      as="a"
                      size="4"
                      target="_blank"
                      rel="noreferer noopener"
                    >
                      <TwitterIcon />
                    </IconButton>
                  </NextLink>
                  <NextLink
                    href={
                      componentContent(linkedinUrl.content, "SingleLineContent")
                        .text
                    }
                    passHref
                  >
                    <IconButton
                      as="a"
                      size="4"
                      target="_blank"
                      rel="noreferer noopener"
                    >
                      <LinkedInIcon />
                    </IconButton>
                  </NextLink>
                </Flex>
              </Box>
            );
          }
        )}
      </Box>
    </Box>
  );
};
