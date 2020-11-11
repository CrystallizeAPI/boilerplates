import React from "react"
import { graphql } from "gatsby"
// import Grid from "@crystallize/grid-renderer/react"
import styled from "styled-components"
import { Outer as O } from "ui"
import Layout from "components/layout"
import { useT } from "lib/i18n"
import Grid, { GridItem } from "components/grid"
const Outer = styled(O)`
  max-width: 1600px;
  padding: 0;
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
          <Grid
            model={grid}
            cellComponent={({ cell }) => (
              <GridItem data={cell.item} gridCell={cell} />
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
