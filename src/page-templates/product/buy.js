import React from "react"

import { Button } from "ui"
import { useT, useLocale } from "lib/i18n"

import { ProductFooter, Price } from "./styles"

export default function BuyButton({ product, selectedVariant }) {
  const t = useT()
  const locale = useLocale()

  const { price, currency } = selectedVariant.priceVariants.find(
    (pv) => pv.identifier === locale.priceVariant
  ) || {
    price: "n/a",
    currency: "eur",
  }

  return (
    <ProductFooter>
      <Price>
        <strong>{t("common.price", { value: price, currency })}</strong>
      </Price>
      <Button width="200px" onClick={() => alert("buy")} disabled={!currency}>
        {t("product.addToBasket")}
      </Button>
    </ProductFooter>
  )
}
