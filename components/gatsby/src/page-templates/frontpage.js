import React from "react"
import { graphql } from "gatsby"
import { Outer, Item, List } from "./folder/styles"
import Layout from "components/layout"
import { useT } from "lib/i18n"
import Stackable from "components/stackable"
import Grid, { GridItem } from "components/grid"
import ShapeComponents from "components/shape-components"
import Listformat from "components/listformat"

export default function IndexPage({ data }) {
  const t = useT()
  const {
    crystallize: {
      frontpage,
      headerItems: { children: headerItems },
    },
  } = data
  const { children, components } = frontpage

  const title = frontpage?.components?.find((c) => c.name === "Title")?.content
    ?.text
  const stacks = components?.find((c) => c.name === "Stackable content")
    ?.content?.items
  const body = frontpage.components?.filter((c) => c.name === "Body")
  const gridRelations = components
    ?.filter((c) => c.type === "gridRelations")
    ?.reduce((acc, g) => [...acc, ...(g?.content?.grids || [])], [])
  const hasGridRelation = gridRelations?.length > 0

  return (
    <Layout title={t(title)} headerItems={headerItems}>
      <Outer>
        {body?.length > 0 && <ShapeComponents components={body} />}

        {hasGridRelation &&
          gridRelations.map((grid, index) => (
            <Grid
              key={index}
              model={grid}
              cellComponent={({ cell }) => (
                <GridItem data={cell.item} gridCell={cell} />
              )}
            />
          ))}

        <Stackable stacks={stacks} />
        <List>
          {children
            ?.filter((c) => !isFolderType(c))
            ?.map((item, i) => (
              <Item className={`item-${item?.type}`} key={i}>
                <Listformat item={item} key={i} />
              </Item>
            ))}
        </List>
      </Outer>
    </Layout>
  )
}

function isFolderType({ type }) {
  return type === "folder"
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
        path: "/frontpage-2021"
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
