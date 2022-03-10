import { GetStaticProps, NextPage } from "next";
import { HomeDocument, HomeQuery } from "@/crystallize/queries/home.generated";
import { catalogueClient } from "@/clients";
import { normalizeDocumentNode } from "@/crystallize/utils/normalizeDocumentNode";
import { HomeHero } from "@/components/home-hero";
import { HomeReferences } from "@/components/home-references";
import { HomeBody } from "@/components/home-body";
import { HomeHighlightedFeatures } from "@/components/home-highlighted-features";

type IndexPageProps = HomeQuery & { path: string };

export const getStaticProps: GetStaticProps<IndexPageProps> = async () => {
  const path = "/landing-page";
  const data = await catalogueClient.request<HomeQuery>(
    normalizeDocumentNode(HomeDocument),
    { path }
  );
  return { props: { ...data, path } };
};

export const IndexPage: NextPage<IndexPageProps> = ({ home }) => {
  return (
    <div>
      <HomeHero
        title={home.title}
        intro={home.intro}
        hero={home.hero}
        heroCTA={home.heroCTA}
      />
      <HomeReferences references={home.references} />
      <HomeBody body={home.body} />
      <HomeHighlightedFeatures highlightedFeatures={home.highlightedFeatures} />
    </div>
  );
};

export default IndexPage;
