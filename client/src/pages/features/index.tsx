import { GetStaticProps, NextPage } from "next";
import { catalogueClient } from "@/clients";
import { normalizeDocumentNode } from "@/crystallize/utils/normalizeDocumentNode";
import {
  AllFeaturesDocument,
  AllFeaturesQuery,
  AllFeaturesQueryVariables,
} from "@/crystallize/queries/allFeatures.generated";
import { FeatureHero } from "@/components/feature-hero";
import { FeatureBody } from "@/components/feature-body";
import { CtaSection } from "@/components/cta-section";

type FeaturesPageProps = AllFeaturesQuery & { path: string };

export const getStaticProps: GetStaticProps<FeaturesPageProps> = async () => {
  const path = "/features";
  const data = await catalogueClient.request<
    AllFeaturesQuery,
    AllFeaturesQueryVariables
  >(normalizeDocumentNode(AllFeaturesDocument), { path });
  return { props: { ...data, path } };
};

export const FeaturesPage: NextPage<FeaturesPageProps> = ({
  allFeaturesPage,
}) => {
  return (
    <>
      <FeatureHero
        title={allFeaturesPage.title}
        intro={allFeaturesPage.intro}
        heroImage={allFeaturesPage.heroImage}
        features={allFeaturesPage.features}
      />
      <FeatureBody body={allFeaturesPage.body} />
      <CtaSection />
    </>
  );
};

export default FeaturesPage;
