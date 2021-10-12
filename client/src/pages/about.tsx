import { GetStaticProps, NextPage } from "next";
import { TeamDocument, TeamQuery } from "@/crystallize/queries/team.generated";
import { catalogueClient } from "@/clients";
import { normalizeDocumentNode } from "@/crystallize/utils/normalizeDocumentNode";
import { AboutHero } from "@/components/about-hero";
import { AboutValues } from "@/components/about-values";
import { AboutTeam } from "@/components/about-team";

type AboutPageProps = TeamQuery & { path: string };

export const getStaticProps: GetStaticProps<AboutPageProps> = async () => {
  const path = "/about";
  const data = await catalogueClient.request<TeamQuery>(
    normalizeDocumentNode(TeamDocument),
    { path }
  );
  return { props: { ...data, path } };
};

export const AboutPage: NextPage<AboutPageProps> = ({ team }) => {
  return (
    <>
      <AboutHero title={team.title} intro={team.intro} hero={team.hero} />
      <AboutValues values={team.values} />
      <AboutTeam team={team.team} />
    </>
  );
};

export default AboutPage;
