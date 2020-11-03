import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import { Outer, Header, H1, responsive } from "ui"
import Layout from "components/layout"
import Product from "components/category-item"
import ShapeComponents from "components/shape-components"

import Search from "../page-templates/search"

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  grid-auto-rows: 300px;

  ${responsive.sm} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${responsive.md} {
    grid-template-columns: repeat(4, 1fr);
  }

  ${responsive.lg} {
    grid-template-columns: repeat(4, 1fr);
  }
`

function mostChildrenAreProducts(children) {
  const productsCount = children?.filter((c) => c.type === "product").length
  return productsCount > children?.length / 2
}

export default function FolderPage(props) {
  const { data, location, path } = props
  const {
    crystallize: {
      folder,
      headerItems: { children: headerItems },
    },
  } = data

  const { children } = folder

  const renderSearch = mostChildrenAreProducts(children)

  return (
    <Layout title={folder.name} headerItems={headerItems}>
      <Outer>
        <Header centerContent={!children}>
          <H1>{folder.name}</H1>
          <ShapeComponents components={folder.components} />
        </Header>
        {renderSearch && <Search location={location} path={path} />}
        {children && !renderSearch && (
          <List>
            {children.map((child) => (
              <Product data={child} key={child.id} />
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
