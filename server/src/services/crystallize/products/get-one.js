const { callCatalogueApi } = require("../utils");

module.exports = async function getProduct(path) {
  const r = await callCatalogueApi({
    query: `
      query GET_PRODUCT($path: String!) {
        catalogue(path: $path, language: "en") {
          ... on Product {
            variants {
              name
              sku
              subscriptionPlans {
                identifier
                name
                periods {
                  id
                  name
                  initial {
                    ...period
                  }
                  recurring {
                    ...period
                  }
                }
              }
            }
          }
        }
      }

      fragment period on ProductVariantSubscriptionPlanPricing {
        unit
        period
        price
        meteredVariables {
          id
          tierType
          tiers { price threshold priceVariants { price } }
        }
        priceVariants {
          identifier
          name
          currency
          price
        }
      }
    `,
    variables: {
      path,
    },
  });

  return r.data.catalogue.variants[0];
};
