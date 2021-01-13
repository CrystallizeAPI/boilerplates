const { callCatalogueApi } = require("../crystallize/utils");
const voucherService = require("../voucher-service");

module.exports = {
  async get({ simpleCart }, user) {
    const { language, ...cartFromClient } = simpleCart;

    /**
     * Resolve all the voucher codes to valid vouchers for the user
     */
    const vouchers = await Promise.all(
      (cartFromClient.voucherCodes || []).map((code) => {
        return voucherService.get({ code, user });
      })
    );

    /**
     * Get all products from Crystallize from their paths
     */
    const productDataFromCrystallize = await getProducts({
      paths: cartFromClient.items.map((p) => p.path),
      language,
    });

    /**
     * Compose the complete cart items enriched with
     * data from Crystallize
     */
    const items = productDataFromCrystallize
      .map((product) => {
        const itemFromClient = cartFromClient.items.find(
          (p) => p.path === product.path
        );

        /**
         * Could not find this product for some reason. Happens if an
         * old product path is given and it no longer exists
         */
        if (!itemFromClient) {
          return null;
        }

        const { vatType } = product;
        const variant = product.variants.find(
          (v) => v.sku === itemFromClient.sku
        );
        const { price, currency } =
          variant.priceVariants.find(
            (pv) => pv.identifier === itemFromClient.priceVariantIdentifier
          ) || variant.priceVariants.find((p) => p.identifier === "default");

        const gross = price;
        const net = (price * 100) / (100 + vatType.percent);
        const vat = gross - net;

        return {
          path: product.path,
          quantity: itemFromClient.quantity,
          vatType,
          price: {
            gross,
            net,
            vat,
            currency,
          },
          ...variant,
        };
      })
      .filter(Boolean);

    // Calculate the totals
    const total = items.reduce(
      (acc, curr) => {
        const { quantity, price } = curr;
        if (price) {
          acc.gross += price.gross * quantity;
          acc.net += price.net * quantity;
          acc.currency = price.currency;
        }
        acc.quantity += quantity;

        return acc;
      },
      { gross: 0, net: 0, quantity: 0 }
    );
    total.vat = parseInt((total.gross - total.net) * 100, 10) / 100;

    return {
      vouchers: vouchers.filter(Boolean),
      items,
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
