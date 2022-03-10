import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { catalogueClient } from "@/crystallize/clients";
import { normalizeDocumentNode } from "@/crystallize/utils/normalizeDocumentNode";
import {
  AllFeaturesDocument,
  AllFeaturesQuery,
} from "@/crystallize/queries/allFeatures.generated";
import {
  FeatureDocument,
  FeatureQuery,
} from "@/crystallize/queries/feature.generated";
import { FeatureHero } from "@/components/feature-hero";
import { FeatureBody } from "@/components/feature-body";
import { CtaSection } from "@/components/cta-section";

type FeaturePageProps = FeatureQuery & { path: string };

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await catalogueClient.request<AllFeaturesQuery>(
    normalizeDocumentNode(AllFeaturesDocument),
    {
      path: "/features",
    }
  );
  return {
    paths:
      data?.allFeaturesPage?.features?.map((feature) => ({
        params: { feature: feature.path },
      })) || [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<FeaturePageProps> = async ({
  params,
}) => {
  const path = `/features/${params.feature}`;
  const data = await catalogueClient.request<FeatureQuery>(
    normalizeDocumentNode(FeatureDocument),
    { path }
  );
  return { props: { ...data, path } };
};

export const FeaturePage: NextPage<FeaturePageProps> = ({ feature }) => {
  if (!feature) return null;

  return (
    <>
      <FeatureHero
        title={feature.title}
        intro={feature.intro}
        heroImage={feature.heroImage}
        features={feature.parent.features}
      />
      <FeatureBody body={feature.body} />
      <CtaSection />
    </>
  );
};

export default FeaturePage;
