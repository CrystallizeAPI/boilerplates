import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import { Outer as O, Header, H1, responsive } from "ui"

import Layout from "components/layout"
import Grid, { GridItem } from "components/grid"
import ShapeComponents from "components/shape-components"
import ItemMicroformat from "components/item-microformat"
export const Outer = styled(O)`
  padding: 0px 75px;
  max-width: 1600px;
  ${responsive.smAndLess} {
    padding: 10px 10px 10px 20px;
    justify-content: space-between;
  }
`

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 1rem;

  ${responsive.xs} {
    display: block;
  }
  ${responsive.sm} {
    grid-template-columns: repeat(12, 1fr);
  }

  ${responsive.md} {
    grid-template-columns: repeat(12, 1fr);
  }

  ${responsive.lg} {
    grid-template-columns: repeat(12, 1fr);
  }
`

export default function FolderPage(props) {
  const { data } = props
  const {
    crystallize: {
      folder,
      headerItems: { children: headerItems },
    },
  } = data

  const { children } = folder

  const gridRelations = folder.components
    ?.filter((c) => c.type === "gridRelations")
    ?.reduce((acc, g) => [...acc, ...(g?.content?.grids || [])], [])
  const summary = folder?.components?.find((c) => c.name === "Brief")
  const icon = folder?.components?.find((c) => c.name === "Icon")
  return (
    <Layout title={folder.name} headerItems={headerItems}>
      <Outer>
        <Header centerContent>
          <ShapeComponents components={[icon]} />
          <H1>{folder.name}</H1>
          <ShapeComponents components={[summary]} />
        </Header>
        {gridRelations?.length > 0
          ? gridRelations?.map((grid, index) => (
              <Grid
                key={index}
                model={grid}
                cellComponent={({ cell }) => (
                  <GridItem data={cell.item} gridCell={cell} />
                )}
              />
            ))
          : children && (
              <List>
                {children.map((item, i) => (
                  <ItemMicroformat item={item} key={i} />
                ))}
              </List>
            )}
      </Outer>
    </Layout>
  )
}

export const query = graphql`
  query getFolder(
    $cataloguePath: String!
    $crystallizeCatalogueLanguage: String!
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
  }
`
