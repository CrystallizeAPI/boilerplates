import React from "react";
import styled from "styled-components";
import { fetcher } from "lib/graphql";

import Hero from "components/hero";
import Layout from "components/layout";
import Meta from "components/meta";
import MicroFormats from "components/microformats";

const Outer = styled.div`
  width: 100%;
  background: #fff;
  padding: 50px 25px;
  min-height: 80vh;
  ${({ theme }) => theme.responsive.mdPlus} {
    padding: 150px 100px;
  }
`;
const H2 = styled.h2`
  font-size: calc(12px + 1.3vw);
  margin: 0;
  padding: 50px 0;
`;
const Inner = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 15px;
  ${({ theme }) => theme.responsive.mdPlus} {
    grid-gap: 25px;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const query = `
query GET_FOLDER($path: String!) {
  folder: catalogue(path: $path, language: "en") {
    id
    name
    title : component(id: "title"){
      content {
        ...on SingleLineContent {
          text
        }
      }
    }
    hero_images: component(id: "hero-image") {
      content {
        ... on ImageContent {
          images {
            url
            altText
            variants {
              url
              width
              height
            }
          }
        }
      }
    }
    hero_videos: component(id: "hero-video") {
      content {
        ... on VideoContent {
          videos {
            playlists
            thumbnails {
              url
              altText
              variants {
                url
                width
                height
              }
            }
          }
        }
      }
    }
    intro: component(id: "brief") {
      id
      name
      content {
        ... on RichTextContent {
          json
          plainText
        }
      }
    }
    children {
      ...storyItem

      children {
        ...storyItem
      }
    }
  }
}

fragment storyItem on Item {
  id
  path
  name
  type
  shape {
    name
  }
  isExclusive: component(id: "is-exclusive") {
    content {
      ... on BooleanContent {
        value
      }
    }
  }
  intro: component(id: "intro") {
    id
    name
    content {
      ... on RichTextContent {
        json
      }
    }
  }
  videos: component(id: "hero-video") {
    content {
      ... on VideoContent {
        videos {
          playlists
          thumbnails {
            url
            altText
            variants {
              url
              width
              height
            }
          }
        }
      }
    }
  }
  images: component(id: "hero") {
    content {
      ... on ImageContent {
        images {
          url
          altText
          variants {
            url
            width
            height
          }
        }
      }
    }
  }
}

`;

export async function getStaticProps({ params }) {
  const path = `/stories`;
  const data = await fetcher([query, { path }]);
  return { props: { ...data, path }, revalidate: 1 };
}

const Stories = ({ data, errors }) => {
  if (errors) {
    console.log("error", errors);
    return <div>Ops ...</div>;
  }
  const { folder } = data;
  const hero = {
    images: folder?.hero_images?.content?.images,
    videos: folder?.hero_videos?.content?.videos,
    lead: folder?.intro?.content,
    title: folder?.title?.content?.text,
  };
  const meta = {
    title: folder?.title?.content?.text,
    description: folder?.intro?.content?.plainText?.[0],
    mediaUrl: folder?.hero_images?.content?.images,
    type: "website",
  };
  const hasMedia = !!hero.images || !!hero.videos;

  const publicStories = folder?.children?.filter(
    (c) => c.shape.name === "Story"
  );

  return (
    <>
      <Meta {...meta} />
      <Layout tint={hasMedia ? "white" : "black"}>
        <Hero {...hero} />
        <Outer>
          <H2>Some inspirational stories</H2>
          <Inner>
            {publicStories?.map((child) => (
              <MicroFormats key={child?.id} {...child} />
            ))}
          </Inner>
        </Outer>
      </Layout>
    </>
  );
};

export default Stories;
