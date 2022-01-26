import { GetStaticProps, NextPage } from "next";
import {
  FrontpageDocument,
  FrontpageQuery,
} from "@/crystallize/queries/frontpage.generated";
import { normalizeDocumentNode } from "@/crystallize/utils/normalizeDocumentNode";
import { componentContent } from "@/crystallize/utils/componentContent";
import Head from "next/head";
import { catalogueClient } from "@/clients";
import { FrontpageHero } from "@/components/frontpage-hero";
import { Sponsors } from "@/components/sponsors";
import { SpeakerSection } from "@/components/speaker-section";
import { FrontpageBody } from "@/components/frontpage-body";
import { Schedule } from "@/components/schedule";
import { Box } from "@/design-system";
import { JobBoard } from "@/components/job-board";
import { Gallery } from "@/components/gallery";
import { Partners } from "@/components/partners";

type IndexPageProps = FrontpageQuery & { path: string };

export const getStaticProps: GetStaticProps<IndexPageProps> = async () => {
  const path = "/frontpage";
  const data = await catalogueClient.request<FrontpageQuery>(
    normalizeDocumentNode(FrontpageDocument),
    { path }
  );
  return { props: { ...data, path } };
};

export const IndexPage: NextPage<IndexPageProps> = ({ frontpage }) => {
  let {
    mainSponsors,
    usp,
    speakers,
    schedule,
    jobs,
    gallery,
    sponsors,
    partners,
    meta,
  } = frontpage;


  const metaData = componentContent(meta.content, "ContentChunkContent")
    .chunks[0];

  return (
    <>
      <Head>
        <title>
          {componentContent(metaData[0].content, "SingleLineContent").text}
        </title>
        <meta
          name="description"
          content={componentContent(
            metaData[1].content,
            "RichTextContent"
          ).plainText.toString()}
        ></meta>
      </Head>
      <Box css={{ width: "$full", mx: "0 auto", "@bp3": { padding: "0 $4" } }}>
        <FrontpageHero
          title={frontpage.title}
          description={frontpage.description}
          hero={frontpage.hero}
          heroCTA={frontpage.heroCTA}
        />
        <Sponsors sponsors={mainSponsors} />
        <FrontpageBody body={usp} />
        <SpeakerSection speakersInfo={speakers} />
        <Schedule header={frontpage.scheduleHeader} schedule={schedule} />
        {jobs && <JobBoard header={frontpage.jobBoardHeader} jobs={jobs} />}
        {gallery && <Gallery gallery={gallery} />}
        <Partners partners={partners} />
        <Partners partners={sponsors} />
      </Box>
    </>
  );
};

export default IndexPage;
