import React, { useEffect, useState } from "react"
import { Range } from "rc-slider"

import { useT } from "lib/i18n"

import { PriceWrapper, Values, Input, RangeWrap } from "./styles"

function InputValue({ value, onChange, ...rest }) {
  function onInputChange(evt) {
    onChange(parseFloat(evt.target.value))
  }

  return (
    <Input type="number" value={value} onChange={onInputChange} {...rest} />
  )
}

function Price({ min, max, value, onChange }) {
  const t = useT()
  const [priceValue, setPriceValue] = useState(value)

  useEffect(() => {
    setPriceValue(value)
  }, [value])

  const onRangeChange = (newValue) => {
    setPriceValue({ min: newValue[0], max: newValue[1] })
  }

  const onRangeDone = () => {
    onChange(priceValue)
  }

  const onMinChange = (min) => {
    onChange({
      min,
      max: value.max,
    })
  }

  const onMaxChange = (max) => {
    onChange({
      min: value.min,
      max,
    })
  }

  return (
    <PriceWrapper>
      <Values>
        <InputValue
          value={priceValue.min}
          onChange={onMinChange}
          aria-label={t("search.facets.price.min")}
        />
        <InputValue
          value={priceValue.max}
          onChange={onMaxChange}
          aria-label={t("search.facets.price.max")}
        />
      </Values>
      <RangeWrap>
        <Range
          min={min}
          max={max}
          value={[priceValue.min, priceValue.max]}
          onChange={onRangeChange}
          onAfterChange={onRangeDone}
        />
      </RangeWrap>
    </PriceWrapper>
  )
}

export default Price
