import React, { useState, useEffect } from "react"
import produce from "immer"

import { useT } from "lib/i18n"
import { screen, Button } from "ui"

import {
  FacetsMobileButtonWrap,
  FacetsMobileButton,
  FacetsMobileShowResults,
  FacetsWrapper,
  Facet,
  FacetTitle,
} from "./styles"

import Price from "./price"
import SingleFacetValue from "./single-facet-value"
import SearchBox from "./search-box"

function groupAttributes({ variantAttributes = [] }) {
  const groups = []

  variantAttributes.forEach(({ attribute, value, count }) => {
    const existingGroup = groups.find((g) => g.attribute === attribute)
    if (!existingGroup) {
      groups.push({
        attribute,
        values: [{ value, count }],
      })
    } else {
      existingGroup.values.push({ value, count })
    }
  })

  return groups
}

function singleAttrToQuery(attr) {
  return `${attr.attribute}:${attr.values.join(",")}`
}

function Facets({ changeQuery, spec, aggregations, totalResults }) {
  const t = useT()
  const { priceRange } = spec.filter.productVariants
  const { price } = aggregations
  const [show, setShow] = useState(false)

  // Auto hide mobile facets filter if view is changed to desktop
  useEffect(() => {
    function onMediaMatch(evt) {
      if (evt.matches && show) {
        setShow(false)
      }
    }

    const matcher = matchMedia(`(min-width: ${screen.md}px)`)

    const isModern = "addEventListener" in matcher
    if (isModern) {
      matcher.addEventListener("change", onMediaMatch)
    } else {
      matcher.addListener(onMediaMatch)
    }

    return () => {
      if (isModern) {
        matcher.removeEventListener("change", onMediaMatch)
      } else {
        matcher.removeListener(onMediaMatch)
      }
    }
  }, [show, setShow])

  const handleSearchTermChange = (value) => {
    changeQuery((query) => {
      if (value) {
        query.searchTerm = value
      } else {
        delete query.searchTerm
      }
    })
  }

  const onPriceChange = (priceRange) => {
    changeQuery((query) => {
      delete query.min
      delete query.max

      if (priceRange.min !== price.min) {
        query.min = priceRange.min.toString()
      }
      if (priceRange.max !== price.max) {
        query.max = priceRange.max.toString()
      }
    })
  }

  const onSingleFacetValueChange = ({ attribute, value, checked }) => {
    changeQuery((query) => {
      const newAttrs = produce(
        spec.filter.productVariants.attributes || [],
        (draft) => {
          const existingAttr = draft.find(
            (attr) => attr.attribute === attribute
          )

          if (existingAttr) {
            if (checked) {
              existingAttr.values.push(value)
            } else {
              existingAttr.values.splice(existingAttr.values.indexOf(value), 1)
            }
          } else {
            draft.push({
              attribute,
              values: [value],
            })
          }
        }
      ).filter(({ values }) => values.length > 0)

      if (newAttrs && newAttrs.length > 0) {
        query.attrs = newAttrs.map(singleAttrToQuery)

        if (query.attrs.length === 1) {
          query.attrs = query.attrs[0]
        }
      } else {
        delete query.attrs
      }
    })
  }

  return (
    <>
      <FacetsMobileButtonWrap>
        <FacetsMobileButton onClick={() => setShow(true)}>
          {t("search.filterResults")}
        </FacetsMobileButton>
      </FacetsMobileButtonWrap>
      <FacetsWrapper $show={show}>
        <SearchBox
          searchTerm={spec.filter.searchTerm}
          onChange={handleSearchTermChange}
        />
        <Facet>
          <FacetTitle>{t("search.facets.price.title")}</FacetTitle>
          <Price
            {...price}
            onChange={onPriceChange}
            value={{
              ...price,
              ...priceRange,
            }}
          />
        </Facet>
        {groupAttributes(aggregations).map(({ attribute, values }) => (
          <Facet key={attribute}>
            <FacetTitle>{attribute}</FacetTitle>
            {values.map(({ value, count }) => (
              <SingleFacetValue
                key={value}
                attribute={attribute}
                value={value}
                count={count}
                spec={spec}
                onChange={onSingleFacetValueChange}
              />
            ))}
          </Facet>
        ))}
        <FacetsMobileShowResults>
          <Button onClick={() => setShow(false)}>
            {t("search.facets.viewNResults", { count: totalResults })}
          </Button>
        </FacetsMobileShowResults>
      </FacetsWrapper>
    </>
  )
}

export default Facets
