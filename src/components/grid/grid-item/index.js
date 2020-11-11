import React from "react"
import Link from "components/link"

import DocumentItem from "components/item-microformat/document-item"
import { screen, Button } from "ui"
import { useT } from "lib/i18n"

import { Outer, Text, ImageWrapper, Img, Price, Title } from "./styles"

export default function GridItem({ data, gridCell }) {
  const t = useT()

  if (!data) {
    return null
  }

  const { name, path, type, variants } = data
  const imageMdWidth = 100 / (gridCell?.layout?.colspan ?? 1)
  const cellSize = `cell-${gridCell?.layout?.rowspan}x${gridCell?.layout?.colspan}`
  let image
  let text

  if (type === "folder" || type === "document") {
    const images = data.components?.find((c) => c.type === "images")
    image = images?.content?.images?.[0]
    text = <Title>{name}</Title>
  } else {
    const { priceVariants, images: i } = variants
      ? variants.find((variant) => variant.isDefault)
      : {}

    const { price, currency } = priceVariants?.find(
      (pv) => pv.identifier === "default"
    ) || {
      price: "n/a",
      currency: "eur",
    }
    image = i?.[0]
    text = (
      <div>
        <Price>
          {t("common.price", {
            value: price,
            currency,
          })}
        </Price>
        <Title>{name}</Title>
        <Button>{t("product.buy")}</Button>
      </div>
    )
  }

  if (type === "document") {
    return <DocumentItem data={data} colSpan="1" />
  }
  return (
    <Link href={path} passHref>
      <Outer className={cellSize} type={type}>
        <Text>{text}</Text>
        <ImageWrapper>
          {image && (
            <Img
              {...image}
              alt={name}
              sizes={`(min-width ${screen.md}px) ${imageMdWidth}vw, 60vw`}
            />
          )}
        </ImageWrapper>
      </Outer>
    </Link>
  )
}
