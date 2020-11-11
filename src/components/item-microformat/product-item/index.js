import React from "react"

import { useT, useLocale } from "lib/i18n"
import { H3 } from "ui"

import { Outer, Text, ImageWrapper, Img, Price, Inner } from "./styles"

export default function ProductItem({ data }) {
  const t = useT()
  const locale = useLocale()

  if (!data) {
    return null
  }

  const { name, path, type, variants, matchingVariant } = data
  const { priceVariants, images } =
    matchingVariant || variants?.find((variant) => variant.isDefault) || {}
  const { price, currency } = priceVariants?.find(
    (pv) => pv.identifier === locale.crystallizePriceVariant
  ) || {
    price: matchingVariant?.price || "n/a",
    currency: "eur",
  }

  return (
    <Outer href={path} type={type}>
      <Inner>
        <ImageWrapper>
          {images?.[0] && <Img {...images?.[0]} alt={name} sizes="250px" />}
        </ImageWrapper>

        <Text>
          <Price>
            {t("common.price", {
              value: price,
              currency,
            })}
          </Price>
          <H3>{name}</H3>
        </Text>
      </Inner>
    </Outer>
  )
}
