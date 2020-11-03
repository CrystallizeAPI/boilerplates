/* eslint react/no-multi-comp: 0 */
import React, { useState } from "react"
import Img from "@crystallize/react-image"
import isEqual from "lodash/isEqual"
import { graphql } from "gatsby"

import { H1, H2, screen, Outer } from "ui"
import CategoryItem from "components/category-item"
import VariantSelector from "components/variant-selector"
import ShapeComponents from "components/shape-components"
import { useT, useLocale } from "lib/i18n"
import { attributesToObject } from "lib/variants"

import Layout from "components/layout"

import {
  Sections,
  Media,
  MediaInner,
  Info,
  Price,
  ProductFooter,
  Summary,
  Description,
  RelatedTopics,
  TopicMap,
  TopicTitle,
  List,
} from "./styles"

const ProductPage = ({ product, defaultVariant }) => {
  const t = useT()
  const locale = useLocale()
  const [selectedVariant, setSelectedVariant] = useState(defaultVariant)

  const onAttributeChange = (attributes, newAttribute) => {
    const newAttributes = attributesToObject(attributes)
    newAttributes[newAttribute.attribute] = newAttribute.value

    const newSelectedVariant = product.variants.find((variant) => {
      const variantAttributes = attributesToObject(variant.attributes)
      return isEqual(variantAttributes, newAttributes)
    })

    setSelectedVariant(newSelectedVariant)
  }

  const onVariantChange = (variant) => setSelectedVariant(variant)

  const summaryComponent = product.components.find((c) => c.name === "Summary")
  const description = product.components.find((c) => c.name === "Description")
  const { topics } = product

  const selectedVariantImg = (selectedVariant.image || {}).url
  const placeHolderImg = "/images/placeholder-image.png"

  const { price, currency } = selectedVariant.priceVariants.find(
    (pv) => pv.identifier === locale.priceVariant
  ) || {
    price: "n/a",
    currency: "eur",
  }

  return (
    <Outer>
      <Sections>
        <Media>
          <MediaInner>
            <Img
              src={selectedVariantImg || placeHolderImg}
              sizes={`(max-width: ${screen.sm}px) 400px, 600px`}
              alt={product.name}
            />
          </MediaInner>
        </Media>
        <Info>
          <H1>{product.name}</H1>
          <Summary>
            {summaryComponent && (
              <ShapeComponents components={[summaryComponent]} />
            )}
          </Summary>

          {product.variants.length > 1 && (
            <VariantSelector
              variants={product.variants}
              selectedVariant={selectedVariant}
              onVariantChange={onVariantChange}
              onAttributeChange={onAttributeChange}
            />
          )}

          <ProductFooter>
            <Price>
              <strong>{t("common.price", { value: price, currency })}</strong>
            </Price>
          </ProductFooter>
        </Info>
      </Sections>

      <Description>
        <ShapeComponents className="description" components={[description]} />
      </Description>

      {topics && topics.length && (
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
      )}
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
