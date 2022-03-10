import styled from "styled-components";
import { Image } from "@crystallize/react-image";
import { ContentTransformer } from "@crystallize/react-content-transformer";
import toText from "@crystallize/content-transformer/toText";
import { fetcher } from "lib/graphql";
import Layout from "components/layout";
import Meta from "components/meta";
import SchemaOrg from "./schema";

const Outer = styled.div``;
const ProductWrapper = styled.section`
  background: #fff;
  display: grid;
  ${({ theme }) => theme.responsive.mdPlus} {
    grid-template-columns: 1fr 1fr;
    min-height: 90vh;
  }
`;

const Btn = styled.a`
  border: 3px solid black;
  background: transparent;
  font-size: 20px;
  margin-top: 35px;
  font-weight: 800;
  padding: 20px 45px;
  border-radius: 45px;
  &:hover {
    color: #fff;
    background: black;
  }
`;

const ImgWrapper = styled.div`
  background: ${({ theme }) => theme.colors.productBg};
  position: relative;
  margin-top: 140px;
  height: auto;
  border-radius: ${({ theme }) => theme.styles.borderRadius};
  figure,
  picture {
    width: 100%;

    height: 100%;
    position: relative;
    overflow: hidden;
    ${({ theme }) => theme.responsive.mdPlus} {
      border-radius: ${({ theme }) => theme.styles.borderRadius};
    }
  }
  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
  }
  ${({ theme }) => theme.responsive.lg} {
    margin-left: 100px;
  }
  ${({ theme }) => theme.responsive.mdPlus} {
    height: 85vh;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
const Content = styled.div`
  padding: 50px 25px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1,
  h2,
  p {
    max-width: 600px;
    margin: 0;
  }
  h1 {
    font-size: calc(12px + 2vw);
  }
  h2 {
    padding: 10px 0 0;
  }
  p {
    line-height: 1.6em;
  }
  ${({ theme }) => theme.responsive.mdPlus} {
    padding: 0 100px;
  }
`;
const RichContent = styled.section`
  background: #fff;
  /* min-height: 100vh; */
  padding: 100px 25px;
  ${({ theme }) => theme.responsive.mdPlus} {
    padding: 100px 100px;
  }
  ${({ theme }) => theme.responsive.sm} {
    padding: 100px 50px;
  }
`;

const Section = styled.section`
  display: grid;
  margin: 50px auto;
  grid-template-columns: 1fr;

  h3 {
    margin: 0 0 25px 0;
  }

  ${({ theme }) => theme.responsive.smPlus} {
    margin: 200px auto;

    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
const Bulk = styled.div`
  h5 {
    margin: 0;
    padding: 0;
    font-size: 20px;
  }
`;

const BulkOuter = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-column-end: span 3;
  grid-template-columns: 1fr;
  ${({ theme }) => theme.responsive.mdPlus} {
    grid-template-columns: 1fr 1fr;
  }
  ${({ theme }) => theme.responsive.smPlus} {
    grid-column-start: 2;
    grid-gap: 50px;
  }
`;

const Collection = styled.div`
  margin: 0 auto;
  display: grid;
  ${({ theme }) => theme.responsive.smPlus} {
    grid-template-columns: 1fr 1fr;
  }
`;
const CollectionOuter = styled.div`
  grid-column-end: span 3;
`;
const Paragraph = styled.div`
  padding: 50px 0;
  font-size: 18px;

  ${({ theme }) => theme.responsive.smPlus} {
    padding: 150px 0;

    h4 {
      font-size: 24px;
    }
    p {
      line-height: 1.8em;
    }
  }

  ${({ theme }) => theme.responsive.sm} {
    padding: 75px 0;
    grid-column-end: span 2;
  }
`;

const MediaWrapper = styled.div`
  grid-column-end: span 2;
  display: grid;
  position: relative;
  grid-gap: 10px;
  grid-template-columns: 1fr;
  img {
    border-radius: ${({ theme }) => theme.styles.borderRadius};
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${({ theme }) => theme.responsive.smPlus} {
    grid-template-columns: ${(p) => `repeat(${p.count}, 1fr)`};
  }
`;
const Offer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  h2 {
    grid-column-end: span 2;
  }
`;
// Fine tune the query in the playground: https://api.crystallize.com/<your-tenant-identifier>/catalogue
const query = `
query GET_PRODUCT($path: String!) {
 product: catalogue(path: $path, language: "en") {
    name
    path
    publishedAt
    id
    name
    ...on Product {
      name
      path
      variants {
        id
        name
        sku
        priceVariants {
          identifier
          price
          currency
        }
        stock
        isDefault
        attributes {
          attribute
          value
        }
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
      defaultVariant{
        price
        stock
        sku
        images{
          url
          variants{
            width
            url
          }
        }
      }

    }   
    summary: component(id: "summary") {
      id
      content {
        ... on RichTextContent {
          json
        }
      }
    }
    features: component(id: "features") {
      content {
        ... on PropertiesTableContent {
          sections {
            title
            properties {
              key
              value
            }
          }
        }
      }
    }
    description: component(id: "description") {
      id
      name
      type
      content {
        ... on ParagraphCollectionContent {
          paragraphs {
            title {
              text
            }
            body {
              json
            }
            images {
              url
              altText
              variants {
                url
                width
                height
              }
            }
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
    }  
  }
}
`;

export async function getStaticProps({ params }) {
  const path = `/shop/${params.product}`;
  const data = await fetcher([query, { path }]);
  return { props: { data }, revalidate: 1 };
}

export async function getStaticPaths() {
  const data = await fetcher(`
    {
      catalogue(path: "/shop", language: "en") {
        children {
          path
        }
      }
    }
  `);

  return {
    paths: data?.data?.catalogue?.children?.map((c) => c.path) || [],
    fallback: "blocking",
  };
}

export default function Story({ data }) {
  const product = data?.data?.product;
  const defaultImage = data?.data?.product?.defaultVariant?.images;
  const name = product?.name;
  const price = product?.defaultVariant?.price;
  const sku = product?.defaultVariant?.sku;
  // const stock = product?.defaultVariant?.stock;
  const summary = product?.summary?.content?.json;
  const features = product?.features?.content?.sections;
  const description = product?.description;

  const meta = {
    title: name,
    description: toText(product?.summary?.content?.json),
    mediaUrl: defaultImage?.[0]?.url,
    type: "product",
  };

  return (
    <>
      <Meta {...meta} />
      <SchemaOrg {...product} />
      <Layout tint="black">
        <Outer>
          <ProductWrapper itemScope itemType="http://schema.org/Product">
            <ImgWrapper itemProp="image">
              <Image
                {...defaultImage?.[0]}
                itemProp="image"
                sizes="@media(min-width:1024px) 50vw, 100vw"
              />
            </ImgWrapper>

            <Content>
              <h1 itemProp="name">{name}</h1>
              <span itemProp="sku" style={{ display: "none" }}>
                {sku}
              </span>
              <span itemProp="description" style={{ display: "none" }}>
                {meta.description}
              </span>

              <Offer
                itemScope
                itemProp="offers"
                itemType="https://schema.org/Offer"
              >
                <h2>
                  <span itemProp="priceCurrency" content="USD">
                    $
                  </span>
                  <span itemProp="price">{price}</span>
                </h2>
              </Offer>
              <ContentTransformer itemProp="description" json={summary} />
              <Btn
                onClick={() =>
                  alert(
                    "Functionality not implemented yet in this boiler, see our next.js boilerplate "
                  )
                }
              >
                Buy
              </Btn>
            </Content>
          </ProductWrapper>
          <RichContent>
            {features?.map((feature, ti) => (
              <Section key={`properties-table-${ti}`}>
                <h3>{feature?.title}</h3>
                <BulkOuter>
                  {feature?.properties?.map((property, i) => (
                    <Bulk key={`properties-table-${ti}-${i}`}>
                      <h5>{property?.key}</h5>
                      <p>{property?.value}</p>
                    </Bulk>
                  ))}
                </BulkOuter>
              </Section>
            ))}

            {!!description?.content?.paragraphs?.length && (
              <Section>
                <h3>{description?.name}</h3>
                <CollectionOuter>
                  {description.content.paragraphs.map((paragraph, i) => (
                    <Collection
                      key={`paragraph-${i}-${paragraph?.title?.text}`}
                    >
                      {!!paragraph?.images?.length && (
                        <MediaWrapper count={paragraph.images.length}>
                          {paragraph?.images?.map((img) => (
                            <Image
                              key={img?.url}
                              {...img}
                              sizes={`@media(min-width:1024px) ${
                                100 / paragraph.images.length
                              }vw, 100vw`}
                            />
                          ))}
                        </MediaWrapper>
                      )}
                      <Paragraph>
                        <h4>{paragraph?.title?.text}</h4>
                        <ContentTransformer json={paragraph?.body?.json} />
                      </Paragraph>
                    </Collection>
                  ))}
                </CollectionOuter>
              </Section>
            )}
          </RichContent>
        </Outer>
      </Layout>
    </>
  );
}
