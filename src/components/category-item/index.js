import React from "react"

import { useT } from "lib/i18n"
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
} from "./styles"

export default function CategoryItem({ data, gridCell, gridTotalColSpan }) {
  const t = useT()
  if (!data) {
    return null
  }

  const { name, path, type, variants } = data
  const imageSizes =
    gridCell && gridTotalColSpan
      ? `(min-width ${screen.md}px) ${parseInt(
          (gridCell.layout.colspan / gridTotalColSpan) * 100,
          10
        )}vw, 90vw`
      : "90vw"

  if (type === "folder" || type === "document") {
    const images = data.components.find((c) => c.type === "images")
    const image = images && images.content ? images.content.images[0] : null

    return (
      <Outer type={type} to={path}>
        <Inner>
          <ImageWrapper>
            {image && <Img {...image} alt={name} sizes={imageSizes} />}
          </ImageWrapper>

          <MicroFormat>
            <H3>{name}</H3>
          </MicroFormat>
        </Inner>
      </Outer>
    )
  }

  const { price, image } = variants
    ? variants.find((variant) => variant.isDefault)
    : {}

  return (
    <ProductOuter to={path}>
      <ProductInner>
        <ContentLine>
          <span>{name}</span>
        </ContentLine>
        <ImageWrapper>
          <Img {...image} alt={name} sizes={imageSizes} />
        </ImageWrapper>
        <ContentLine right>
          <Price>{t("common.price", { value: price })}</Price>
        </ContentLine>
      </ProductInner>
    </ProductOuter>
  )
}
