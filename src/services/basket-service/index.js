const { callCatalogueApi } = require("../crystallize/utils");
const voucherService = require("../voucher-service");

module.exports = {
  async get({ basketModel, context }) {
    const { locale, voucherCode, ...basketFromClient } = basketModel;
    const { user } = context;

    /**
     * Resolve all the voucher codes to valid vouchers for the user
     */
    let voucher;
    if (voucherCode) {
      voucher = await voucherService.get({ code: voucherCode, user });
    }

    /**
     * Get all products from Crystallize from their paths
     */
    const productDataFromCrystallize = await getProducts({
      paths: basketFromClient.cart.map((p) => p.path),
      language: locale.crystallizeCatalogueLanguage,
    });

    let vatType;

    /**
     * Compose the complete cart items enriched with
     * data from Crystallize
     */
    const cart = basketFromClient.cart
      .map((itemFromClient) => {
        const product = productDataFromCrystallize.find((p) =>
          p.variants.some((v) => v.sku === itemFromClient.sku)
        );

        /**
         * Could not find this product for some reason. Happens if an
         * old product path is given and it no longer exists
         */
        if (!product) {
          return null;
        }

        vatType = product.vatType;

        const variant = product.variants.find(
          (v) => v.sku === itemFromClient.sku
        );
        const { price, currency } =
          variant.priceVariants.find(
            (pv) => pv.identifier === itemFromClient.priceVariantIdentifier
          ) || variant.priceVariants.find((p) => p.identifier === "default");

        const gross = price;
        const net = (price * 100) / (100 + vatType.percent);

        return {
          path: product.path,
          quantity: itemFromClient.quantity || 1,
          vatType,
          price: {
            gross,
            net,
            tax: vatType,
            currency,
          },
          ...variant,
        };
      })
      .filter(Boolean);

    // Calculate the totals
    const total = cart.reduce(
      (acc, curr) => {
        const { quantity, price } = curr;
        if (price) {
          acc.gross += price.gross * quantity;
          acc.net += price.net * quantity;
          acc.currency = price.currency;
        }

        return acc;
      },
      { gross: 0, net: 0, tax: 0, currency: "N/A" }
    );
    total.tax = vatType;

    return {
      voucher,
      cart,
      total,
    };
  },
};

/**
 * Gets information for products with a given path.
 * Gets all of the products with a single request
 * by composing the query dynamically
 */
async function getProducts({ paths, language }) {
  if (paths.length === 0) {
    return [];
  }

  const response = await callCatalogueApi({
    query: `{
      ${paths.map(
        (path, index) => `
        product${index}: catalogue(path: "${path}", language: "${language}") {
          path
          ... on Product {
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
