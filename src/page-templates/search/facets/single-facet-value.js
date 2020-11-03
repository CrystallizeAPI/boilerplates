import React from "react"

import { SingleFacetValueWrapper, Count } from "./styles"

function SingleFacetValue({ attribute, value, count, spec, onChange }) {
  const checked = !!spec.filter?.productVariants?.attributes?.some((attr) => {
    return attr.attribute === attribute && attr.values.includes(value)
  })

  function onInputChange(evt) {
    onChange({ attribute, value, checked: evt.target.checked })
  }

  return (
    <SingleFacetValueWrapper>
      <label>
        <span>
          <input type="checkbox" checked={checked} onChange={onInputChange} />
          {value}
        </span>
        <Count>({count})</Count>
      </label>
    </SingleFacetValueWrapper>
  )
}

export default SingleFacetValue
