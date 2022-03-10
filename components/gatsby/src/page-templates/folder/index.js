import React from "react"
import { graphql } from "gatsby"
import { useT } from "lib/i18n"
import { Outer, List, SubNavigation, Item } from "./styles"
import Stackable from "components/stackable"
import Layout from "components/layout"
import PageHeader from "components/page-header"
import Grid, { GridItem } from "components/grid"
import ShapeComponents from "components/shape-components"
import Listformat from "components/listformat"

export default function FolderPage(props) {
  const t = useT()
  const { data } = props
  const {
    crystallize: {
      folder,
      headerItems: { children: headerItems },
    },
  } = data

  const { children, components } = folder

  const title =
    folder?.components?.find((c) => c.name === "Title")?.content?.text ||
    folder?.name
  const description = components?.find((c) => c.name === "Brief")?.content?.json
  const stacks = components?.find((c) => c.name === "Stackable content")
    ?.content?.items
  const body = folder.components?.filter((c) => c.name === "Body")
  const subFolders = children?.filter(isFolderType)
  const hasSubfolders = Boolean(subFolders?.length)
  const gridRelations = components
    ?.filter((c) => c.type === "gridRelations")
    ?.reduce((acc, g) => [...acc, ...(g?.content?.grids || [])], [])
  const hasGridRelation = gridRelations?.length > 0

  return (
    <Layout title={t(title)} headerItems={headerItems}>
      <Outer>
        <>
          <PageHeader title={title} description={description} />

          {hasSubfolders && (
            <SubNavigation>
              {subFolders.map((item, i) => (
                <Listformat item={item} key={i} />
              ))}
            </SubNavigation>
          )}
        </>

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
