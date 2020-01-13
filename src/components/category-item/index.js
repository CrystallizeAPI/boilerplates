import React from "react"
import { Link } from "gatsby"

import { CurrencyValue } from "components/currency-value"

import { screen, H3 } from "ui"
import {
  Outer,
  ProductOuter,
  Inner,
  ProductInner,
  MicroFormat,
  ImageWrapper,
  Img,
  ContentLine,
  Price,
  imageSize,
} from "./styles"

class CategoryItem extends React.Component {
  render() {
    const { data } = this.props

    if (!data) {
      return null
    }

    const { name, path, type, variants } = data

    if (type === "folder" || type === "document") {
      const images = data.components.find(c => c.type === "images")
      const image = images && images.content ? images.content.images[0] : null
      return (
        <Outer type={type} to={path}>
          <Inner>
            <ImageWrapper>
              {image && (
                <Img
                  {...image}
                  alt={name}
                  sizes={`(min-width ${screen.md}px) ${imageSize.lg}, ${imageSize.xs}`}
                />
              )}
            </ImageWrapper>

            <MicroFormat>
              <H3>{name}</H3>
            </MicroFormat>
          </Inner>
        </Outer>
      )
    }

    const { price, image } = variants
      ? variants.find(variant => variant.isDefault)
      : {}

    return (
      <ProductOuter to={path}>
        <ProductInner>
          <ContentLine>
            <span>{name}</span>
          </ContentLine>
          <ImageWrapper>
            <Img
              {...image}
              alt={name}
              sizes={`(min-width ${screen.md}px) ${imageSize.lg}, ${imageSize.xs}`}
            />
          </ImageWrapper>
          <ContentLine right>
            <Price>
              <CurrencyValue value={price} />
            </Price>
          </ContentLine>
        </ProductInner>
      </ProductOuter>
    )
  }
}

export default CategoryItem
