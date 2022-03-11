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

  let siteUrl = `${process.env.NEXT_PUBLIC_SITE_URL}`

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
        <meta
          property="og:image"
          content={
            componentContent(metaData[2].content, "ImageContent")?.images[0]
              ?.url
          }
        />
        <link href={`${siteUrl}`} rel="canonical" />
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            name: componentContent(metaData[0].content, "SingleLineContent")
              .text,
            startDate: "2022-07-18T10:00:00.000Z",
            endDate: "2022-07-20T10:00:00.000Z",
            eventStatus: "https://schema.org/EventScheduled",
            eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
            location: {
              "@type": "VirtualLocation",
              url: "https://conference.superfast.shop/",
            },
            image: [
              componentContent(metaData[2].content, "ImageContent")?.images[0]
                ?.url,
            ],
            description: componentContent(
              metaData[1].content,
              "RichTextContent"
            ).plainText.toString(),
            offers: {
              "@type": "Offer",
              url: "https://conference.superfast.shop/merch/intergalactic-ticket",
              price: "345",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              validFrom: "2022-01-21T12:00",
            },
            organizer: {
              "@type": "Organization",
              name: "Crystallize",
              url: "https://crystallize.com",
            },
          }),
        }}
      />
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
