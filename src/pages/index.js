import React from "react"
import { graphql } from "gatsby"
import Grid from "@crystallize/grid-renderer/react"
import styled from "styled-components"

import Layout from "components/layout"
import Product from "components/category-item"
import { H1, Outer, Header } from "ui"

const GridStyler = styled.div`
  .grid-renderer {
    grid-auto-rows: auto;
  }
`

export default function IndexPage({ data }) {
  const {
    crystallize: {
      grid,
      headerItems: { children: headerItems },
    },
  } = data

  return (
    <Layout title="Home" headerItems={headerItems}>
      <Outer>
        <Header>
          <H1>Oh hi there!</H1>
          <p>Cool of you to join us.</p>
        </Header>

        <GridStyler>
          <Grid
            className="grid-renderer"
            model={grid}
            renderCellContent={cell => <Product data={cell.item} />}
          />
        </GridStyler>
      </Outer>
    </Layout>
  )
}

export const query = graphql`
  query getIndex {
    crystallize {
      headerItems: catalogue(path: "/") {
        children {
          name
          path
        }
      }

      grid(id: "5e1840f5b325b5aae0b7877b", language: "en") {
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
`
