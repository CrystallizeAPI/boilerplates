import styled from "styled-components";

import Hero from "components/hero";
import Layout from "components/layout";
import Product from "components/microformats/product";
import Meta from "components/meta";

const Outer = styled.section`
  background: #fff;
  min-height: 100vh;
`;
const Inner = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 25px;
  padding: 100px 100px 200px;
  ${({ theme }) => theme.responsive.lg} {
    grid-template-columns: repeat(4, 1fr);
  }
  ${({ theme }) => theme.responsive.md} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${({ theme }) => theme.responsive.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${({ theme }) => theme.responsive.xs} {
    padding: 50px 25px;
  }
`;

import { fetcher } from "lib/graphql";

// Fine tune the query in the playground: https://api.crystallize.com/<your-tenant-identifier>/catalogue
const query = `
  {
    catalogue(path: "/shop", language: "en") {
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
          }
        }
      }
      children {
        name
        path
        id
        ...on Product {
          name
          path
          
          defaultVariant{
            price
            images{
              variants{
                width
                url
              }
            }
          }
        }
      }
    }
  }
`;
export async function getStaticProps() {
  const data = await fetcher(query);
  return { props: { data }, revalidate: 1 };
}

export default function Story({ data, path }) {
  const shop = data?.data?.catalogue;
  const hero = {
    images: shop?.hero_images?.content?.images,
    videos: shop?.hero_videos?.content?.videos,
    lead: shop?.intro?.content,
    title: shop?.title?.content?.text,
  };

  const meta = {
    title: shop?.name,
    description: shop?.title?.content?.text,
    mediaUrl: shop?.hero_images?.content?.images,
    type: "website",
  };

  const hasMedia = !!hero.images || !!hero.videos;
  return (
    <>
      <Meta {...meta} />
      <Layout tint={hasMedia ? "white" : "black"}>
        <Outer>
          <Hero {...hero} />
          <Inner>
            {shop?.children?.map((child) => (
              <Product {...child} key={child?.id} />
            ))}
          </Inner>
        </Outer>
      </Layout>
    </>
  );
}
