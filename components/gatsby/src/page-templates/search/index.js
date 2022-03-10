import React, { useCallback, useEffect, useState, useRef } from "react"
import PropTypes from "prop-types"
import { navigate, graphql } from "gatsby"
import produce from "immer"
import { Inner } from "ui"
import styled from "styled-components"

import { useLocale } from "lib/i18n"
import { doSearch } from "lib/api"
import { SEARCH_QUERY, urlToSpec, queryStringToObject } from "lib/search"
import Layout from "components/layout"
import PageHeader from "components/page-header"
import Stackable from "components/stackable"

import { ListOuter, SearchActions, LocateRight } from "./styles"
import OrderBy from "./order-by"
import Results from "./results"
import Facets from "./facets"
import SearchCount from "./count"

const Outer = styled(Inner)``

function cleanFilterForTotalAggregations(filter) {
  return produce(filter, (draft) => {
    delete draft.productVariants.priceRange
    delete draft.productVariants.attributes
  })
}

async function loadPage(spec) {
  const { data } = await doSearch({
    query: SEARCH_QUERY,
    variables: {
      ...spec,
      aggregationsFilter: cleanFilterForTotalAggregations(spec.filter),
    },
  })

  const {
    search,
    aggregations: { aggregations },
  } = data ?? {}

  return {
    search,
    aggregations,
  }
}

function Search(props) {
  const {
    data: { crystallize, crystallize_search } = {},
    location,
    path,
  } = props
  const firstLoad = useRef()
  const locale = useLocale()
  const [data, setData] = useState({
    search: crystallize_search?.search,
    aggregations: crystallize_search?.aggregations?.aggregations,
  })
  const query = location.search

  /**
   * Memoize the load page function so that it only changes
   * if the asPath or locale changes
   */
  const loadPageCb = useCallback(
    async (query) => {
      const queryObject = queryStringToObject(query)

      const newData = await loadPage(
        urlToSpec({ query: queryObject, asPath: path }, locale)
      )
      setData(newData)
    },
    [path, locale]
  )

  // Query changed
  useEffect(() => {
    if (!firstLoad.current) {
      firstLoad.current = true
    }

    loadPageCb(location.search)
  }, [location.search, loadPageCb, firstLoad])

  const spec = urlToSpec({ query, asPath: path }, locale)

  // Change the url query params
  function changeQuery(fn) {
    const queryObject = queryStringToObject(location.search)

    const newQuery = produce(queryObject, (draft) => {
      delete draft.before
      delete draft.after
      fn(draft)
    })
    const pathname = location.pathname.replace(/\/$/, "")
    const newSearchString = new URLSearchParams(newQuery).toString()

    navigate(`${pathname}${newSearchString ? `?${newSearchString}` : ""}`, {
      replace: true,
    })
  }

  function changePage(direction) {
    if (direction === "nextPage") {
      changeQuery((query) => {
        query.after = data.search.pageInfo.endCursor
      })
    } else {
      changeQuery((query) => {
        query.before = data.search.pageInfo.startCursor
      })
    }
  }

  function handleOrderByChange(orderBy, index) {
    changeQuery((query) => {
      if (index > 0) {
        query.orderby = orderBy.value
      } else {
        delete query.orderby
      }
    })
  }

  if (!data.search) {
    return (
      <Layout
        title={"Search"}
        headerItems={crystallize?.headerItems.children}
        loading
      />
    )
  }
  const title =
    crystallize?.folder?.name === "Tenant furniture Catalogue Root"
      ? "Search"
      : crystallize?.folder?.name

  const description = crystallize?.folder?.components?.find(
    (c) => c.name === "Brief"
  )?.content?.json

  const stacks = crystallize?.folder?.components?.find(
    (c) => c.name === "Stackable content"
  )?.content?.items

  const totalResults = data.search.aggregations.totalResults
  return (
    <Layout title={title} headerItems={crystallize?.headerItems.children}>
      <Outer>
        <PageHeader {...{ title, description }} />
        <Stackable stacks={stacks} />
        <ListOuter>
          <SearchActions>
            <Facets
              aggregations={data.aggregations}
              spec={spec}
              changeQuery={changeQuery}
              totalResults={totalResults}
            />
            <LocateRight>
              <OrderBy orderBy={spec.orderBy} onChange={handleOrderByChange} />
            </LocateRight>
          </SearchActions>
          <SearchCount count={totalResults} />
          <Results {...data.search} spec={spec} navigate={changePage} />
        </ListOuter>
      </Outer>
    </Layout>
  )
}

Search.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
    pathname: PropTypes.string,
  }).isRequired,
}

export default Search

export const query = graphql`
  query getSearchPage(
    $cataloguePath: String!
    $crystallizeCatalogueLanguage: String!
    $first: Int
    $after: String
    $orderBy: CRYSTALLIZE_SEARCH_OrderBy
    $filter: CRYSTALLIZE_SEARCH_CatalogueSearchFilter
    $aggregationsFilter: CRYSTALLIZE_SEARCH_CatalogueSearchFilter
  ) {
    crystallize {
      headerItems: catalogue(
        language: $crystallizeCatalogueLanguage
        path: "/"
      ) {
        children {
          name
          path
          language
        }
      }

      folder: catalogue(
        language: $crystallizeCatalogueLanguage
        path: $cataloguePath
      ) {
        ...crystallize_item

        children {
          ...crystallize_item
          ...crystallize_product
        }
      }
    }

    crystallize_search {
      aggregations: search(
        filter: $aggregationsFilter
        language: $crystallizeCatalogueLanguage
      ) {
        aggregations {
          price {
            min
            max
          }
          variantAttributes {
            attribute
            value
            count
          }
        }
      }

      search(
        language: $crystallizeCatalogueLanguage
        first: $first
        after: $after
        orderBy: $orderBy
        filter: $filter
      ) {
        aggregations {
          totalResults
        }
        pageInfo {
          totalNodes
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
        edges {
          cursor
          node {
            id
            name
            path
            type
            ... on CRYSTALLIZE_SEARCH_Product {
              topics {
                id
                name
              }
              matchingVariant {
                priceVariants {
                  identifier
                  name
                  currency
                  price
                }
                images {
                  url
                  variants {
                    width
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
