import React, { useState } from "react"
import { Image as Img } from "@crystallize/react-image"
import ContentTransformer from "ui/content-transformer"
import { graphql } from "gatsby"
import Buy from "./components/buy"
import getRelativePriceVariants from "lib/pricing"
import ShapeComponents from "components/shape-components"
import { useT, useLocale } from "lib/i18n"
import Collection from "components/item-collection"

import TopicTag from "components/topic-tag"
import VariantSelector from "./components/variant-selector"
import Layout from "components/layout"
import Stock from "./components/stock"

import {
  Inner,
  Media,
  ImgContainer,
  Actions,
  ActionsSticky,
  Title,
  Summary,
  Content,
  Specs,
  Description,
  DescriptionWrapper,
  RelatedContainer,
} from "./styles"

const ProductPage = ({ product, defaultVariant }) => {
  const t = useT()
  const locale = useLocale()

  const { name, components = [], variants = [], topics = [] } = product

  const [selectedVariant, setSelectedVariant] = useState(defaultVariant)

  const onVariantChange = (variant) => setSelectedVariant(variant)
  const pricing = getRelativePriceVariants({
    variant: selectedVariant,
    locale,
  })

  // Find content from the GraphQl response:
  const summaryComponent = components.find(isSumaryComponent)
  const descriptionComponent = components.find(isDescriptionComponent)
  const specs = components.find(isSpecsComponent)
  const relatedProducts = components.find(isRelatedProductsComponent)?.content
    ?.items

  const hasMoreThanOneVariant = variants.length > 1

  return (
    <>
      <Inner>
        <Content>
          <Media>
            {selectedVariant?.images?.map((img) => {
              const isPrortraitImage =
                img?.variants?.[0].height >= img?.variants?.[0]?.width
              return (
                <ImgContainer key={img?.url} portrait={isPrortraitImage}>
                  <Img {...img} alt={name} />
                </ImgContainer>
              )
            })}
          </Media>
          <Specs>
            <ShapeComponents components={[specs]} />
          </Specs>
          {descriptionComponent && (
            <Description>
              <DescriptionWrapper>
                <ShapeComponents
                  className="description"
                  components={[descriptionComponent]}
                />
              </DescriptionWrapper>
            </Description>
          )}
        </Content>
        <Actions>
          <ActionsSticky>
            <Title>{name}</Title>
            {summaryComponent && (
              <Summary>
                <ContentTransformer {...summaryComponent?.content?.json} />
              </Summary>
            )}
            {topics?.map((topic) => (
              <TopicTag {...topic} key={topic.id} />
            ))}
            {hasMoreThanOneVariant && (
              <VariantSelector
                variants={variants}
                selectedVariant={selectedVariant}
                onVariantChange={onVariantChange}
              />
            )}
            <Buy
              product={product}
              selectedVariant={selectedVariant}
              pricing={pricing}
            />
            <Stock selectedVariant={selectedVariant} />
          </ActionsSticky>
        </Actions>
      </Inner>

      <RelatedContainer>
        {Boolean(relatedProducts) && (
          <Collection
            items={relatedProducts}
            title={t("You might also be interested in")}
          />
        )}
      </RelatedContainer>
    </>
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

function isSumaryComponent({ name }) {
  return name === "Summary"
}

function isDescriptionComponent({ name }) {
  return name === "Description"
}

function isSpecsComponent({ name }) {
  return name === "Specs"
}

function isRelatedProductsComponent({ name }) {
  return name === "Related products"
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
