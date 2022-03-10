import Script from "next/script";
import styled from "styled-components";

import Layout from "components/layout";
import { fetcher } from "lib/graphql";
import Microformats from "components/microformats";
import Meta from "components/meta";

const Outer = styled.div`
  background: #fff;
  min-height: 100vh;
  padding: 150px 0;
`;

const GridRow = styled.section`
  display: grid;
  margin-bottom: 25px;
  grid-gap: 25px;
  grid-template-columns: 1fr;
  padding: 0 25px;
  ${({ theme }) => theme.responsive.sm} {
    padding: 0 50px;
    grid-template-columns: ${(p) => (p.columns > 1 ? "1fr 1fr" : "1fr")};
  }
  ${({ theme }) => theme.responsive.mdPlus} {
    padding: 0 100px 0 100px;

    grid-template-columns: ${(p) => `repeat(${p.columns}, 1fr)`};
  }
`;

// Fine tune the query in the playground: https://api.crystallize.com/<your-tenant-identifier>/catalogue
// Fetching a grid from our Voyage example directly by ID, change the ID your grid or fetch it from a folder with gridrelation, its up to you.
const query = `
  {
    grid(id:"5f6c7e9033ed22001d27982c"){
      id
      rows{
        columns{
          item {
            
            ...on Document {
              name
              path
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
            shape {
              id
              name
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

export default function Home({ data }) {
  const grid = data?.data?.grid;
  const meta = {
    description: "Great stories happen to those who can tell them",
    type: "website",
  };
  return (
    <>
      <Meta {...meta} />
      {/*crystallize-boilerplates-topbar-start*/}
      <div id="cr-boilers" style={{ height: "52px" }}>
        <Script
          src="https://crystallize.com/static-min/scripts/boilerplate-topbar.min.js"
          strategy="afterInteractive"
          defer
        />
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            #cr-boilers {
              position: relative;
              z-index: 999;
            }

            #cr-boilers a {
              color: inherit;
            }
            
            #cr-boilers .i {
              max-width: none;
              padding: 0 120px;
            }
          `,
        }}
      ></style>
      {/*crystallize-boilerplates-topbar-end*/}
      <Layout tint="black">
        <Outer>
          {grid?.rows?.map((row, i) => (
            <GridRow
              key={`frontpage-grid-row-${i}`}
              columns={row?.columns?.length}
            >
              {row?.columns?.map((column, i) => (
                <Microformats
                  key={`${column?.item?.path}-${i}`}
                  {...column?.item}
                />
              ))}
            </GridRow>
          ))}
        </Outer>
      </Layout>
    </>
  );
}
