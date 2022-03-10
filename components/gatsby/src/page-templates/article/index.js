import React from "react"
import { graphql } from "gatsby"
import ItemMicroformat from "components/item-microformat"
import { DocumentHeader } from "./components/header"
import { DocumentRelatedContentSection } from "./components/related-content"
import Layout from "components/layout"
import ShapeComponents from "components/shape-components"
import { getArticlesWithoutRepeatedElements } from "./utils"

import {
  Img,
  Outer,
  DocumentContent,
  HeroImage,
  Article,
  Sidebar,
} from "./styles"

const DocumentPage = (props) => {
  const { data } = props

  const asPath = props.location.pathname

  const {
    crystallize: {
      document,
      headerItems: { children: headerItems },
    },
  } = data

  const images = document?.components?.find((c) => c.name === "Image")
  const featured = document?.components?.find((c) => c.name === "Featured")
  const body = document?.components?.find((c) => c.name === "Body")
  const topics = document?.topics

  // Find all topic maps, as a parent, then filter on "document" type
  // Comment in the first filter line with your topic name to filter on a specific topic
  // Comment in the "document" if to only show articles
  const relatedArticles = topics
    // ?.filter((topic) => topic?.parent?.name === '[YOUR-TOPIC-MAP-NAME]')
    ?.map((topic) => topic?.items?.edges)
    ?.flat()
    ?.filter((node) => node?.node?.path !== asPath)

  const relatedArticlesWithoutRepeatedElements = getArticlesWithoutRepeatedElements(
    relatedArticles
  )
  const featuredItems = featured?.content?.items
  const hasFeaturedItems = Boolean(featuredItems?.length)
  const hasRelatedArticles = Boolean(
    relatedArticlesWithoutRepeatedElements?.length
  )
  const hasContentToShowOnTheSide = hasFeaturedItems || hasRelatedArticles

  return (
    <Layout title={document.name} headerItems={headerItems}>
      <Outer>
        <DocumentHeader document={document} />
        <DocumentContent>
          <Article>
            <HeroImage>
              {images?.content?.images?.map((img, i) => (
                <Img
                  {...img}
                  key={img.url}
                  alt={img.altText}
                  sizes={i > 0 ? "40vw" : "80vw"}
                />
              ))}
            </HeroImage>
            <ShapeComponents components={[body]} />
          </Article>

          {hasContentToShowOnTheSide && (
            <Sidebar>
              {hasFeaturedItems && (
                <DocumentRelatedContentSection title="Featured">
                  {featuredItems.map((item, i) => (
                    <ItemMicroformat key={i} item={item} />
                  ))}
                </DocumentRelatedContentSection>
              )}
              {hasRelatedArticles && (
                <DocumentRelatedContentSection title="Related">
                  {relatedArticlesWithoutRepeatedElements.map((item, i) => (
                    <ItemMicroformat key={i} item={item?.node} />
                  ))}
                </DocumentRelatedContentSection>
              )}
            </Sidebar>
          )}
        </DocumentContent>
      </Outer>
    </Layout>
  )
}

export default DocumentPage

export const query = graphql`
  query getArticle(
    $cataloguePath: String!
    $crystallizeCatalogueLanguage: String!
  ) {
    crystallize {
      headerItems: catalogue(
        language: $crystallizeCatalogueLanguage
        path: "/"
      ) {
        children {
          name
          path
          language
        }
      }

      document: catalogue(
        language: $crystallizeCatalogueLanguage
        path: $cataloguePath
      ) {
        id
        name
        publishedAt
        topics {
          id
          name
          items {
            edges {
              node {
                ...crystallize_item
              }
            }
          }
        }
        components {
          name
          type
          meta {
            key
            value
          }
          content {
            ...crystallize_singleLineContent
            ...crystallize_richTextContent
            ...crystallize_imageContent
            ...crystallize_paragraphCollectionContent
            ...crystallize_itemRelations
          }
        }
      }
    }
  }
`

// export const query = graphql`
//   query getDocument(
//     $cataloguePath: String!
//     $crystallizeCatalogueLanguage: String!
//   ) {
//     crystallize {
//       headerItems: catalogue(
//         language: $crystallizeCatalogueLanguage
//         path: "/"
//       ) {
//         children {
//           name
//           path
//           language
//         }
//       }

//       document: catalogue(
//         language: $crystallizeCatalogueLanguage
//         path: $cataloguePath
//       ) {
//         ...crystallize_item

//         children {
//           ...crystallize_item
//           ...crystallize_product
//         }
//       }
//     }
//   }
// `
