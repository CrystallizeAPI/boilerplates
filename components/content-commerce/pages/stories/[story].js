import { Image } from "@crystallize/react-image";
import { ContentTransformer } from "@crystallize/react-content-transformer";
import { fetcher } from "lib/graphql";
import Section from "components/story/section";
import Paywall from "components/paywall";
import FeaturedProducts from "components/story/featured-products";
import Layout from "components/layout";
import Meta from "components/meta";
import { useIsLoggedIn } from "components/auth";
import {
  Outer,
  ScrollWrapper,
  Title,
  Byline,
  Content,
  ContentInner,
  Lead,
  Author,
  AuthorName,
  AuthorRole,
  AuthorPhoto,
  SectionHeading,
} from "components/story/styles";

const exclusivePathIdentifier = "-_-_-exclusive";

// Fine tune the query in the playground: https://api.crystallize.com/<your-tenant-identifier>/catalogue
const query = `
query GET_STORY($path: String!) {
  story: catalogue(path: $path, language: "en") {
    name
    path
    publishedAt
    title: component(id: "title") {
      id
      name
      type
      content {
        ... on SingleLineContent {
          text
        }
      }
    }
    isExclusive: component(id: "is-exclusive") {
      content {
        ... on BooleanContent {
          value
        }
      }
    }
    hero_images: component(id: "hero") {
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
    intro: component(id: "intro") {
      id
      name
      content {
        ... on RichTextContent {
          json
          plainText
        }
      }
    }
    featuredProducts: component(id:"featured-products"){
      id
      name
      content{
        ...on ItemRelationsContent{
          items{
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
    }
    story: component(id: "story") {
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
    byline: component(id: "byline") {
      id
      name
      content {
        ... on ItemRelationsContent {
          items {
            id
            name: component(id: "name") {
              content {
                ... on SingleLineContent {
                  text
                }
              }
            }
            email: component(id: "email") {
              content {
                ... on SingleLineContent {
                  text
                }
              }
            }
            role: component(id: "role") {
              content {
                ... on SingleLineContent {
                  text
                }
              }
            }
            picture: component(id: "picture") {
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
        }
      }
    }
  }
}`;

export async function getStaticProps({ params, req }) {
  const path = `/stories/${params.story.replace(
    new RegExp(exclusivePathIdentifier, "ig"),
    ""
  )}`;
  const data = await fetcher([query, { path }]);
  const isExclusivePath = params.story.includes(exclusivePathIdentifier);

  return { props: { data, isExclusivePath }, revalidate: 1 };
}

export async function getStaticPaths() {
  const data = await fetcher(`
    {
      catalogue(path: "/stories", language: "en") {
        children {
          path

          isExclusive: component(id: "is-exclusive") {
            content {
              ... on BooleanContent {
                value
              }
            }
          }
        }
      }
    }
  `);

  const children = data?.data?.catalogue?.children || [];
  const publicPaths = children.map((c) => c.path);

  return {
    paths: [
      ...publicPaths,
      ...publicPaths.map((p) => `${p}${exclusivePathIdentifier}`),
    ],
    fallback: "blocking",
  };
}

export default function Story({ data, isExclusivePath }) {
  const story = data?.data?.story;
  const byline = story?.byline?.content?.items;
  const heroImages = story?.hero_images?.content?.images;
  const heroVideos = story?.hero_videos?.content?.videos;
  const storyParagraphs = story?.story?.content?.paragraphs;
  const featuredProducts = story?.featuredProducts?.content?.items;
  const meta = {
    title: story?.name,
    description: story?.intro?.content?.plainText?.[0],
    mediaUrl: heroImages?.[0]?.url,
    type: "article",
  };
  const isExclusive = story?.isExclusive?.content?.value;

  const isLoggedIn = useIsLoggedIn();

  return (
    <>
      <Meta {...meta} />
      <Layout tint="white" hideFooter>
        <ScrollWrapper>
          <Outer itemScope itemType="http://schema.org/Article">
            <Section images={heroImages} videos={heroVideos} nolazy>
              <Content fold={true}>
                <Title h1 itemProp="name">
                  {story?.name}
                </Title>
                <Lead>
                  <ContentTransformer
                    itemProp="description"
                    json={story?.intro?.content?.json}
                  />
                </Lead>
                {!!byline && (
                  <Byline>
                    {byline.map((author, i) => (
                      <Author key={i}>
                        <AuthorPhoto>
                          <Image
                            {...author?.picture?.content?.images?.[0]}
                            sizes="50px"
                          />
                        </AuthorPhoto>
                        <AuthorName itemProp="author">
                          {author?.name?.content?.text}
                        </AuthorName>
                        <AuthorRole>{author?.role?.content?.text}</AuthorRole>
                      </Author>
                    ))}
                  </Byline>
                )}
              </Content>
            </Section>
            {!isExclusive || isExclusivePath || isLoggedIn ? (
              <div itemProp="articleBody">
                {storyParagraphs?.map(({ title, body, images, videos }, i) => {
                  return (
                    <div key={i}>
                      {i === Math.round(storyParagraphs.length / 2) &&
                        !!featuredProducts && (
                          <FeaturedProducts products={featuredProducts} />
                        )}
                      <Section images={images} videos={videos}>
                        <Content mirror={i % 2}>
                          <ContentInner>
                            <SectionHeading>{title?.text}</SectionHeading>
                            <Lead>
                              <ContentTransformer json={body?.json} />
                            </Lead>
                          </ContentInner>
                        </Content>
                      </Section>
                    </div>
                  );
                })}
              </div>
            ) : (
              <Paywall />
            )}

            {!!featuredProducts && (
              <FeaturedProducts products={featuredProducts} />
            )}
          </Outer>
        </ScrollWrapper>
      </Layout>
    </>
  );
}
