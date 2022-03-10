/**
 * Gets information for products with a given path.
 * Gets all of the products with a single request
 * by composing the query dynamically
 */
async function getProductsFromCrystallize({ paths, language }) {
  if (paths.length === 0) {
    return [];
  }

  const { callCatalogueApi } = require("../crystallize/utils");

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

  return paths.map((_, i) => response.data[`product${i}`]).filter((p) => !!p);
}

module.exports = {
  getProductsFromCrystallize,
};
