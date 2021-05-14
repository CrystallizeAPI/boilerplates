import React from "react"
import { IconStock } from "ui/icons"
import { useT } from "lib/i18n"
import { Outer, StockColorIndicator } from "./styles"

const STOCK_LIMIT = 20
const STOCK_COLOR_INDICATOR = {
  NO_STOCK: "red",
  ABOVE_LIMIT: "#DAF5CB",
  BEETWEN_ZERO_AND_LIMIT: "#FFD23F",
}

const Stock = ({ selectedVariant }) => {
  const stockCount = selectedVariant?.stock
  const hasStock = stockCount > 1
  const hasMoreStockThanLimit = stockCount > STOCK_LIMIT

  let stockColor
  if (!hasStock) {
    stockColor = STOCK_COLOR_INDICATOR.NO_STOCK
  } else if (hasMoreStockThanLimit) {
    stockColor = STOCK_COLOR_INDICATOR.ABOVE_LIMIT
  } else {
    stockColor = STOCK_COLOR_INDICATOR.BEETWEN_ZERO_AND_LIMIT
  }

  return (
    <Outer>
      <IconStock />
      {hasStock ? <StockCount count={stockCount} /> : <OutOfStock />}
      <StockColorIndicator color={stockColor} />
    </Outer>
  )
}

export default Stock

function OutOfStock() {
  const t = useT()

  return <span>{t("product.outOfStock")}</span>
}

function StockCount({ count }) {
  const t = useT()
  const stockCountToDisplay = count > STOCK_LIMIT ? `${STOCK_LIMIT}+` : count

  return <span>{stockCountToDisplay} in stock</span>
}
