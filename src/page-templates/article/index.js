import React from "react"
import { graphql } from "gatsby"
import ContentTransformer from "ui/content-transformer"
import ItemMicroformat from "components/item-microformat"

import { H1, Header } from "ui"
import Layout from "components/layout"
import ShapeComponents from "components/shape-components"
import { HeroImage, Img, List, H2, Related, Outer } from "./styles"
import { useT } from "lib/i18n"

const DocumentPage = (props) => {
  const { data } = props
  const t = useT()
  const {
    crystallize: {
      article,
      headerItems: { children: headerItems },
    },
  } = data
  const title = article?.components?.find((c) => c.name === "Title")?.content
    ?.text
  const description = article?.components?.find((c) => c.name === "Intro")
  const images = article?.components?.find((c) => c.name === "Image")
  const relatedProducts = article?.components?.find(
    (c) => c.name === "Products"
  )

  const componentsRest = article?.components?.filter(
    (c) => !["Intro", "Title", "Image", "Products"].includes(c.name)
  )
  return (
    <Layout title={article.name} headerItems={headerItems}>
      <Outer>
        <Header centerContent>
          <H1>{title}</H1>
          <ContentTransformer {...description?.content?.json} />
        </Header>
        <HeroImage>
          {images?.content?.images?.map((img, i) => (
            <Img
              key={img.url}
              {...img}
              alt={img.altText}
              sizes={i > 0 ? "40vw" : "80vw"}
            />
          ))}
        </HeroImage>
        <ShapeComponents components={componentsRest} />
      </Outer>
      {relatedProducts?.content?.items?.length && (
        <Related>
          <H2>
            {t("product.relatedProduct", {
              count: relatedProducts.content.items.length,
            })}
          </H2>
          <List>
            {relatedProducts.content.items.map((item, i) => (
              <ItemMicroformat key={i} item={item} />
            ))}
          </List>
        </Related>
      )}
      {/* <Outer>
        <Document>
          <ShapeComponents
            components={article.components}
            overrides={{
              Title: H1,
            }}
          />
        </Document>
      </Outer> */}
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

      article: catalogue(
        language: $crystallizeCatalogueLanguage
        path: $cataloguePath
      ) {
        id
        name

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
          }
        }
      }
    }
  }
`
