/* eslint react/no-multi-comp: 0 */
import React, { useState } from "react"
import { Image } from "@crystallize/react-image"
import ContentTransformer from "ui/content-transformer"

import { graphql } from "gatsby"
import Buy from "./buy"

import { screen } from "ui"
import VariantSelector from "components/variant-selector"
import ShapeComponents from "components/shape-components"
import { useT } from "lib/i18n"

import Layout from "components/layout"

import {
  Sections,
  Media,
  MediaInner,
  Info,
  Summary,
  Description,
  Name,
  Outer,
  Content,
  Specs,
} from "./styles"

const ProductPage = ({ product, defaultVariant }) => {
  const [selectedVariant, setSelectedVariant] = useState(defaultVariant)

  const onVariantChange = (variant) => setSelectedVariant(variant)

  const summaryComponent = product.components.find((c) => c.name === "Summary")
  const descriptionComponent = product.components?.find(
    (c) => c.name === "Description"
  )
  const specs = product.components?.find((c) => c.name === "Specs")

  return (
    <Outer>
      <Sections>
        <Media>
          <MediaInner>
            <Image
              {...selectedVariant.images?.[0]}
              sizes={`(max-width: ${screen.sm}px) 400px, 60vw`}
              alt={product.name}
            />
          </MediaInner>
        </Media>
        <Info>
          <Name>{product.name}</Name>
          {summaryComponent && (
            <Summary>
              <ContentTransformer {...summaryComponent?.content?.json} />
            </Summary>
          )}

          {product.variants?.length > 1 && (
            <VariantSelector
              variants={product.variants}
              selectedVariant={selectedVariant}
              onVariantChange={onVariantChange}
            />
          )}

          <Buy product={product} selectedVariant={selectedVariant} />
        </Info>
      </Sections>
      <Content>
        {descriptionComponent && (
          <Description>
            <ShapeComponents
              className="description"
              components={[descriptionComponent]}
            />
          </Description>
        )}
        {specs && (
          <Specs>
            <ShapeComponents components={[specs]} />
          </Specs>
        )}
      </Content>

      {/* {topics && topics.length && (
        <RelatedTopics>
          <H2>{t("common.related")}</H2>

          {topics.map((topic) => {
            // We only want to show the first 4 products for a topic
            const cells = topic.items.edges
              .filter(({ node }) => node.id !== product.id)
              .slice(0, 4)
              .map(({ node }) => ({
                item: { ...node },
              }))

            if (!cells.length) {
              return null
            }

            return (
              <TopicMap key={topic.id}>
                <TopicTitle>{topic.name}</TopicTitle>
                <List>
                  {cells.map((cell) => (
                    <CategoryItem data={cell.item} key={cell.item.id} />
                  ))}
                </List>
              </TopicMap>
            )
          })}
        </RelatedTopics>
      )} */}
    </Outer>
  )
}

const ProductPageDataLoader = ({ data: { crystallize } }) => {
  const t = useT()
  const { product } = crystallize
  const headerItems = crystallize.headerItems?.children
  const defaultVariant = product.variants?.find((v) => v.isDefault)
  if (!defaultVariant) {
    return <Layout headerItems={headerItems}>{t("product.noVariants")}</Layout>
  }

  return (
    <Layout headerItems={headerItems} title={product.name}>
      <ProductPage product={product} defaultVariant={defaultVariant} />
    </Layout>
  )
}

export const query = graphql`
  query getProduct(
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

      product: catalogue(
        language: $crystallizeCatalogueLanguage
        path: $cataloguePath
      ) {
        ...crystallize_item
        ...crystallize_product

        topics {
          id
          items(first: 4) {
            ... on CRYSTALLIZE_TopicItemConnection {
              edges {
                node {
                  ...crystallize_item
                  ...crystallize_product
                }
              }
            }
          }
        }
      }
    }
  }
`

export default ProductPageDataLoader
