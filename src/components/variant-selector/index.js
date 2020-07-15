import React from "react"

import { useT } from "lib/i18n"

import {
  Outer,
  AttributeName,
  AttributeSelector,
  AttributeButton,
  Variant,
  Values,
  Button,
} from "./styles"

const reduceAttributes = (variants) =>
  variants.reduce((acc, variant) => {
    const attrs = acc

    variant.attributes.forEach(({ attribute, value }) => {
      const currentAttribute = attrs[attribute]
      if (!currentAttribute) {
        attrs[attribute] = [value]
        return
      }

      const valueExists = currentAttribute.find((str) => str === value)
      if (!valueExists) {
        attrs[attribute].push(value)
      }
    })

    return attrs
  }, {})

export default ({
  variants,
  selectedVariant,
  onVariantChange,
  onAttributeChange,
}) => {
  const t = useT()
  const attributes = reduceAttributes(variants)

  if (!Object.keys(attributes).length) {
    return (
      <Outer>
        {variants.map((variant) => (
          <Variant key={variant.id}>
            <Values>
              <Button
                key={variant.id}
                selected={variant.id === selectedVariant.id}
                onClick={() => onVariantChange(variant)}
              >
                {variant.name}
              </Button>
            </Values>
          </Variant>
        ))}
      </Outer>
    )
  }

  return (
    <Outer>
      {Object.keys(attributes).map((name) => {
        const attr = attributes[name]
        const selectedAttr = selectedVariant.attributes.find(
          (a) => a.attribute === name
        )

        if (!selectedAttr) {
          return null
        }

        return (
          <div key={name}>
            <AttributeName>{t(`product.attributes.${name}`)}</AttributeName>
            <AttributeSelector>
              {attr.map((value) => (
                <AttributeButton
                  key={`${value}-${name}`}
                  onClick={() =>
                    onAttributeChange(selectedVariant.attributes, {
                      attribute: name,
                      value,
                    })
                  }
                  type="button"
                  selected={value === selectedAttr.value}
                >
                  {t(`product.attributes.${value}`)}
                </AttributeButton>
              ))}
            </AttributeSelector>
          </div>
        )
      })}
    </Outer>
  )
}
