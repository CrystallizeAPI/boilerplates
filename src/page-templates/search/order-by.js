import React from "react"

import { orderByOptions } from "lib/search"
import { useT } from "lib/i18n"

import { Select } from "./styles"

function OrderBy({ orderBy, onChange }) {
  const t = useT()

  return (
    <Select
      name="order-by"
      id="order-by"
      value={orderBy?.value}
      onChange={(e) => {
        const index = orderByOptions.findIndex(
          (o) => o.value === e.target.value
        )
        onChange(orderByOptions[index], index)
      }}
      aria-label={t("search.orderTitle")}
    >
      {orderByOptions.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {t(`search.order.${option.value}`)}
          </option>
        )
      })}
    </Select>
  )
}

export default OrderBy
