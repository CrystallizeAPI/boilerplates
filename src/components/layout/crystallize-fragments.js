import { graphql } from "gatsby"

/**
 * Enrich all components from here with shared Crystallize GraphQL fragments.
 * Very useful when doing GraphQL calls down the line
 */
export const query = graphql`
  fragment crystallize_image on CRYSTALLIZE_Image {
    url
    altText
    caption {
      plainText
      html
    }
    variants {
      key
      url
      width
      height
    }
  }
  fragment crystallize_video on CRYSTALLIZE_Video {
    title
    playlists
    thumbnails {
      ...crystallize_image
    }
  }

  fragment crystallize_imageContent on CRYSTALLIZE_ImageContent {
    images {
      ...crystallize_image
    }
  }
  fragment crystallize_videoContent on CRYSTALLIZE_VideoContent {
    videos {
      ...crystallize_video
    }
  }
  fragment crystallize_singleLineContent on CRYSTALLIZE_SingleLineContent {
    text
  }

  fragment crystallize_richTextContent on CRYSTALLIZE_RichTextContent {
    json
  }

  fragment crystallize_propertiesTableContent on CRYSTALLIZE_PropertiesTableContent {
    sections {
      title
      properties {
        key
        value
      }
    }
  }

  fragment crystallize_paragraphCollectionContent on CRYSTALLIZE_ParagraphCollectionContent {
    paragraphs {
      title {
        ...crystallize_singleLineContent
      }
      body {
        ...crystallize_richTextContent
      }
      images {
        ...crystallize_image
      }
      videos {
        ...crystallize_video
      }
    }
  }

  fragment crystallize_itemRelations on CRYSTALLIZE_ItemRelationsContent {
    items {
      id
      name
      path
      type
      shape {
        name
        id
      }
      topics {
        id
        name
      }
      ... on CRYSTALLIZE_Product {
        variants {
          priceVariants {
            identifier
            price
            currency
          }
          isDefault
          name
          images {
            ...crystallize_image
          }
        }
      }
      components {
        name
        type
        content {
          ...crystallize_singleLineContent
          ...crystallize_richTextContent
          ...crystallize_imageContent
          ...crystallize_videoContent
          ...crystallize_gridRelations
          ... on CRYSTALLIZE_ItemRelationsContent {
            items {
              id
              name
              type
              path
              ... on CRYSTALLIZE_Item {
                components {
                  name
                  type
                  meta {
                    key
                    value
                  }
                  content {
                    ...crystallize_singleLineContent
                    ...crystallize_richTextContent
                    ...crystallize_imageContent
                    ...crystallize_videoContent
                  }
                }
              }
              ... on CRYSTALLIZE_Product {
                variants {
                  priceVariants {
                    identifier
                    price
                    currency
                  }
                  isDefault
                  name
                  images {
                    ...crystallize_image
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  fragment crystallize_gridRelations on CRYSTALLIZE_GridRelationsContent {
    grids {
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
            id
            name
            path
            type
            language
            ...crystallize_product
            components {
              name
              type
              content {
                ...crystallize_imageContent
                ...crystallize_videoContent
              }
            }
          }
        }
      }
    }
  }

  fragment crystallize_item on CRYSTALLIZE_Item {
    id
    name
    type
    path
    language
    topics {
      name
      children {
        name
      }
      parent {
        name
      }
    }
    components {
      name
      type
      meta {
        key
        value
      }
      content {
        ...crystallize_singleLineContent
        ...crystallize_richTextContent
        ...crystallize_imageContent
        ...crystallize_videoContent
        ...crystallize_paragraphCollectionContent
        ...crystallize_propertiesTableContent
        ...crystallize_gridRelations
        ...crystallize_itemRelations
      }
    }
  }

  fragment crystallize_product on CRYSTALLIZE_Product {
    id
    language
    vatType {
      name
      percent
    }
    isVirtual
    isSubscriptionOnly
    variants {
      id
      name
      sku
      priceVariants {
        price
        identifier
        currency
      }
      stock
      isDefault
      attributes {
        attribute
        value
      }
      images {
        ...crystallize_image
      }
      subscriptionPlans {
        id
        name
        initialPeriod
        initialPrice
        recurringPeriod
        recurringPrice
      }
    }
  }
`
