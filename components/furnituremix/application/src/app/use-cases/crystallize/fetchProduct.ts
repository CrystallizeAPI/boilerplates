import {
    ClientInterface,
    Image as APIImage,
    Item,
    Product as APIProduct,
    ProductPriceVariant,
    ProductStockLocation,
    ProductVariantAttribute,
} from '@crystallize/js-api-client';
import _ from 'lodash';
import { Product } from '~/core/contracts/Product';
import { Image } from '~/core/contracts/Image';
import {
    chunksForChunkComponentWithId,
    itemsForItemRelationComponentWithId,
    paragraphsForParagraphCollectionComponentWithId,
    sectionsForPropertyTableComponentWithId,
    stringForRichTextComponentWithId,
    stringForSingleLineComponentWithId,
} from '~/lib/api-mappers';
import { Price } from '~/core/contracts/Price';
import { getCurrencyFromCode } from '~/lib/pricing/currencies';
import { ProductVariant } from '~/core/contracts/ProductVariant';
import { StockLocation } from '~/core/contracts/StockLocation';

export default async (apiClient: ClientInterface, path: string, version: string, language: string): Promise<any> => {
    const data: { catalogue: any } = await apiClient.catalogueApi(
        `
      query ($language: String!, $path: String!, $version: VersionLabel!) {
      catalogue(language: $language, path: $path, version: $version) {
        meta: component(id:"meta"){
          content {
            ...on ContentChunkContent {
              chunks {
                id
                content {
                  ...on SingleLineContent {
                    text
                  }
                  ...on RichTextContent {
                    plainText
                  }
                  ...on ImageContent {
                    firstImage {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      ...on Product {
        ...product
        topics {
          path
          name
        }
      }
    }
  }
  
  fragment content on ComponentContent {
    ...boolean
    ...singleLine
    ...richText
    ...imageContent
    ...paragraphCollection
    ...itemRelations
    ...gridRelations
    ...location
    ...propertiesTable
    ...dateTime
    ...videoContent
    ...numeric
    ...selection
    ...file
  }
  
  fragment component on Component {
    id
    name
    type
    content {
      ...content
      ...componentChoice
      ...contentChunk
    }
  }
  
  fragment dateTime on DatetimeContent {
    datetime
  }
    
  
  fragment gridRelations on GridRelationsContent {
    grids {
      id
      name
    }
  }
  
  fragment imageContent on ImageContent {
    images {
      ...image
    }
  }
  
  fragment image on Image {
    url
    altText
    key
    variants {
      url
      width
      height
      key
    }
  }
  
  fragment itemRelations on ItemRelationsContent {
    items {
      id
      name
      path
      ...on Product {
        defaultVariant {
          price
          images {
            variants {
              url
              height
              width
            }
          }
        }
      }
    }
  }
  
  fragment location on LocationContent {
    lat
    long
  }
  
  fragment paragraphCollection on ParagraphCollectionContent {
    paragraphs {
      title {
        ...singleLine
      }
      body {
        ...richText
      }
      images {
        ...image
      }
    }
  }
  
  fragment product on Product {
    id
    name
    type
    language
    path
  
    components {
      ...component
    }
  
    variants {
      id
      name
      sku
      price
      priceVariants {
        identifier
        name
        price
        currency
      }
      attributes {
        value
        attribute
      }
      stockLocations {
        identifier
        name
        stock
      }
      isDefault
      images {
        url
        altText
        key
  
        variants {
          key
          height
          width
          url
        }
      }
  
      subscriptionPlans {
        identifier
        name
        periods {
          id
          name
          initial {
            priceVariants {
              identifier
              name
              price
              currency
            }
          }
          recurring {
            priceVariants {
              identifier
              name
              price
              currency
            }
          }
        }
      }
    }
  
    vatType {
      name
      percent
    }
  }
  
  fragment propertiesTable on PropertiesTableContent {
    sections {
      ... on PropertiesTableSection {
        title
        properties {
          key
          value
        }
      }
    }
  }
  
  fragment richText on RichTextContent {
    json
    html
    plainText
  }
  
  fragment boolean on BooleanContent {
    value
  }
  
  fragment singleLine on SingleLineContent {
    text
  }
  
  fragment videoContent on VideoContent {
    videos {
      ...video
    }
  }
  
  fragment video on Video {
    id
    playlists
    title
    thumbnails {
      ...image
    }
  }
  
  fragment numeric on NumericContent {
    number
    unit
  }
  
  fragment componentChoice on ComponentChoiceContent {
    selectedComponent {
      id
      name
      type
      content {
        ...content
      }
    }
  }
  
  fragment contentChunk on ContentChunkContent {
    chunks {
      id
      name
      type
      content {
        ...content
      }
    }
  }
  
  fragment selection on SelectionContent {
    options {
      key
      value
    }
  }
  
  
  fragment file on FileContent {
    files {
      url
      key
      title
      size
    }
  }  

`,
        {
            language,
            path,
            version: version === 'draft' ? 'draft' : 'published',
        },
    );

    return mapToProduct(data.catalogue);
};

function mapToProduct(data: APIProduct & Item & { components: any }): Product {
    const story = paragraphsForParagraphCollectionComponentWithId(data.components, 'story');
    const sections = sectionsForPropertyTableComponentWithId(data.components, 'properties');
    const firstDimensionsChunk = chunksForChunkComponentWithId(data.components, 'dimensions')?.[0];
    const firstSeoChunk = chunksForChunkComponentWithId(data.components, 'meta')?.[0];
    const downloads = chunksForChunkComponentWithId(data.components, 'downloads');
    const relatedItems = itemsForItemRelationComponentWithId(data.components, 'related-items');

    const typedImages = (images?: APIImage[]): Image[] => {
        return (
            images?.map((image) => {
                return {
                    url: image.url!,
                    altText: image.altText || '',
                    variants:
                        image.variants?.map((variant) => {
                            return {
                                url: variant.url!,
                                width: variant.width!,
                                height: variant.height!,
                            };
                        }) || [],
                };
            }) || []
        );
    };

    const variants: ProductVariant[] =
        data?.variants?.map((variant) => ({
            id: variant.id,
            isDefault: !!variant.isDefault,
            name: variant.name || data.name!,
            sku: variant.sku,
            priceVariants:
                variant.priceVariants?.reduce((memo: Record<string, Price>, priceVariant: ProductPriceVariant) => {
                    return {
                        ...memo,
                        [priceVariant.identifier]: {
                            identifier: priceVariant.identifier,
                            price: priceVariant.price || 0.0,
                            value: priceVariant.price || 0.0,
                            currency: getCurrencyFromCode(priceVariant.currency || 'EUR'),
                            name: priceVariant.name || 'Unkonwn',
                        },
                    };
                }, {}) || {},
            stockLocations:
                variant.stockLocations?.reduce(
                    (memo: Record<string, StockLocation>, stockLocation: ProductStockLocation) => {
                        return {
                            ...memo,
                            [stockLocation.identifier]: {
                                identifier: stockLocation.identifier,
                                name: stockLocation.name || 'Unknown',
                                stock: stockLocation.stock || 0,
                            },
                        };
                    },
                    {},
                ) || {},
            images: typedImages(variant.images),
            attributes: variant.attributes,
        })) || [];

    const defaultVariant = variants.find((variant) => variant.isDefault) || variants[0];

    const dto: Product = {
        id: data.id,
        path: data.path!,
        name: data.name!,
        title: stringForSingleLineComponentWithId(data.components, 'title') || data.name!,
        description: stringForRichTextComponentWithId(data.components, 'description') || data.name!,
        story:
            story?.map((paragraph) => {
                return {
                    title: paragraph.title?.text,
                    body: paragraph.body?.json,
                    images: typedImages(paragraph.images),
                };
            }) || [],
        specifications:
            sections?.map((section) => {
                return {
                    title: section.title || '',
                    properties: section.properties || {},
                };
            }) || [],
        dimensions: !firstDimensionsChunk
            ? []
            : firstDimensionsChunk.reduce(
                (
                    memo: Record<
                        string,
                        {
                            title: string;
                            value: number;
                            unit: string;
                        }
                    >,
                    data: any,
                ) => {
                    return {
                        ...memo,
                        [data.id]: {
                            name: data.name,
                            value: data.content.number || 0.0,
                            unit: data.content.unit || '',
                        },
                    };
                },
                {},
            ),
        downloads:
            downloads?.map((chunk) => {
                const mapped = chunk.reduce((memo: Record<string, any>, data: any) => {
                    let value = undefined;
                    switch (data.type) {
                        case 'singleLine':
                            value = data.content?.text || '';
                            break;
                        case 'richText':
                            value = data.content?.json || '';
                            break;
                        case 'files':
                            value =
                                data.content?.files?.map((file: any) => {
                                    return {
                                        url: file.url,
                                        title: file.title || '',
                                    };
                                }) || [];
                            break;
                    }
                    return {
                        ...memo,
                        [data.id]: value,
                    };
                }, {});

                return {
                    title: mapped['title' as keyof typeof mapped] || '',
                    description: mapped['description' as keyof typeof mapped],
                    files: mapped['files' as keyof typeof mapped],
                };
            }) || [],
        relatedItems:
            relatedItems?.map((item) => {
                return {
                    name: item.name,
                    path: item.path,
                    defaultVariant: {
                        price: item.defaultVariant.price,
                        images: item.defaultVariant.images,
                    },
                };
            }) || [],
        topics:
            data.topics?.map((topic) => {
                return {
                    name: topic.name,
                    path: topic.path,
                };
            }) || [],
        seo: !firstSeoChunk
            ? {
                title: '',
            }
            : (firstSeoChunk.reduce(
                (memo: Record<string, string>, data: any) => {
                    let value = undefined;
                    switch (data.type) {
                        case 'singleLine':
                            value = data.content?.text || '';
                            break;
                        case 'richText':
                            value = data.content?.plainText.join(' ');
                            break;
                        case 'images':
                            value = data.content?.images?.[0]?.url;
                            break;
                    }
                    return {
                        ...memo,
                        [data.id]: value,
                    };
                },
                {
                    title: '',
                },
            ) as { title: string }),
        vat: {
            name: data.vatType?.name || 'Exempt.',
            rate: data.vatType?.percent || 0.0,
        },
        variants,
        defaultVariant,
    };
    return dto;
}
