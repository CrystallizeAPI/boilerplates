import React from "react"
import { graphql } from "gatsby"
import Grid from "@crystallize/grid-renderer/react"
import styled from "styled-components"

import Layout from "components/layout"
import CategoryItem from "components/category-item"
import { useT } from "lib/i18n"
import { Outer } from "ui"

const StyledGrid = styled(Grid)`
  grid-gap: 1rem !important;

  @media (max-width: 767px) {
    grid-template-columns: 1fr !important;
  }
`

export default function IndexPage({ data }) {
  const t = useT()
  const {
    crystallize: {
      frontpage,
      headerItems: { children: headerItems },
    },
  } = data

  const [grid] =
    frontpage?.components?.find(
      (c) => c.content.__typename === "CRYSTALLIZE_GridRelationsContent"
    )?.content?.grids || []

  return (
    <Layout title={t("frontpage.title")} headerItems={headerItems}>
      <Outer>
        {grid && (
          <StyledGrid
            model={grid}
            cellComponent={({ cell, totalColSpan }) => (
              <CategoryItem
                gridCell={cell}
                gridTotalColSpan={totalColSpan}
                data={cell.item}
              />
            )}
          />
        )}
      </Outer>
    </Layout>
  )
}

export const query = graphql`
  query getFrontpage($crystallizeCatalogueLanguage: String!) {
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

      frontpage: catalogue(
        language: $crystallizeCatalogueLanguage
        path: "/web-frontpage"
      ) {
        components {
          content {
            ... on CRYSTALLIZE_GridRelationsContent {
              grids {
                id
                name
                rows {
                  columns {
                    layout {
                      rowspan
                      colspan
                    }
                    itemType
                    itemId
                    item {
                      ...crystallize_item
                      ...crystallize_product
                    }
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
