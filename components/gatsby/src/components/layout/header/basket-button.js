import React from "react"
import { LayoutContext } from "@crystallize/react-layout"
import { useT } from "lib/i18n"

import { useBasket } from "components/basket"
import IconBasket from "ui/icons/basket"

import { Btn, BasketQuantity } from "./styles"

const BasketButton = () => {
  const { totalWithoutDiscounts } = useBasket()
  const layout = React.useContext(LayoutContext)
  const t = useT()

  return (
    <Btn
      onClick={layout?.actions?.showRight}
      type="button"
      aria-label={t("basket.title")}
    >
      <IconBasket />
      <BasketQuantity>{totalWithoutDiscounts.quantity}</BasketQuantity>
    </Btn>
  )
}

export default BasketButton
