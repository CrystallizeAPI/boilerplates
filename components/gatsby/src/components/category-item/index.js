import React from "react"

import { useT, useLocale } from "lib/i18n"
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
  const locale = useLocale()

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
    const image = images?.content?.images?.[0]

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

  const { priceVariants, images } = variants
    ? variants.find((variant) => variant.isDefault)
    : {}

  const { price, currency } = priceVariants?.find(
    (pv) => pv.identifier === locale.crystallizePriceVariant
  ) || {
    price: "n/a",
    currency: "eur",
  }

  return (
    <ProductOuter to={path}>
      <ProductInner>
        <ContentLine>
          <span>{name}</span>
        </ContentLine>
        <ImageWrapper>
          <Img {...images[0]} alt={name} sizes={imageSizes} />
        </ImageWrapper>
        <ContentLine right>
          <Price>{t("common.price", { value: price, currency })}</Price>
        </ContentLine>
      </ProductInner>
    </ProductOuter>
  )
}
