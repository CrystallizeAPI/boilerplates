/**
 * Handle language specific VAT types.
 * VAT types in Crystallize gets a name and a percentage, and
 * you later assign products to the VAT types.
 * The percentage might not be the same for all regions, which
 * makes this a good place to make any overrides if needed.
 */
const VATOverrides = [
  {
    locale: "??", // "the locale.locale from the storefront locales here (example: en)"
    vatTypes: [
      {
        name: "Standard",
        percent: 50,
      },
    ],
  },
];

/**
 * Gets information for products using SKU for lookup.
 */
async function getProductsFromCrystallize({ skus, locale }) {
  if (skus.length === 0) {
    return [];
  }

  const language = locale.crystallizeCatalogueLanguage;

  const { callCatalogueApi, callSearchApi } = require("../crystallize/utils");

  const pathsSet = new Set();
  let searchAfterCursor;
  async function getNextSearchPage() {
    const searchAPIResponse = await callSearchApi({
      query: `
        query GET_PRODUCTS_BY_SKU ($skus: [String!], $after: String, $language: String!) {
          search (
            after: $after
            language: $language
            filter: {
              include: {
                skus: $skus
              }
            }
          ) {
            pageInfo {
              endCursor
              hasNextPage
            }
            edges {
              node {
                path
              }
            }
          }
        }
      `,
      variables: {
        skus,
        after: searchAfterCursor,
        language,
      },
    });

    const { edges, pageInfo } = searchAPIResponse.data?.search || {};

    edges?.forEach((edge) => pathsSet.add(edge.node.path));

    if (pageInfo?.hasNextPage) {
      searchAfterCursor = pageInfo.endCursor;
      await getNextSearchPage();
    }
  }

  await getNextSearchPage();

  /**
   * Enrich each product with more information
   * Gets all of the products with a single request
   * by composing the query dynamically
   */
  const paths = Array.from(pathsSet);
  const response = await callCatalogueApi({
    query: `{
      ${paths.map(
        (path, index) => `
        product${index}: catalogue(path: "${path}", language: "${language}") {
          path
          ... on Product {
            id
            vatType {
              name
              percent
            }
            variants {
              id
              sku
              name
              stock
              priceVariants {
                price
                identifier
                currency
              }
              attributes {
                attribute
                value
              }
              images {
                url
                variants {
                  url
                  width
                  height
                }
              }
            }
          }
        }
      `
      )}
    }`,
  });

  const vatTypeOverridesForLocale = VATOverrides.find(
    (v) => v.locale === locale.locale
  );

  return paths
    .map((_, i) => response.data[`product${i}`])
    .filter((p) => !!p)
    .map(function doVATOverride(product) {
      const vatTypeOverride = vatTypeOverridesForLocale?.vatTypes.find(
        (v) => v.name === product.vatType.name
      );
      if (vatTypeOverride) {
        product.vatType = vatTypeOverride;
      }
      return product;
    });
}

module.exports = {
  getProductsFromCrystallize,
};
