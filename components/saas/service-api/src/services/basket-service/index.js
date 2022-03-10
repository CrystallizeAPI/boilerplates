// Calculate the totals
function getTotals({ cart, vatType }) {
  return cart.reduce(
    (acc, curr) => {
      const { quantity, price } = curr;
      if (price) {
        const priceToUse = price.discounted || price;
        acc.gross += priceToUse.gross * quantity;
        acc.net += priceToUse.net * quantity;
        acc.currency = price.currency;
      }

      return acc;
    },
    { gross: 0, net: 0, tax: vatType, discount: 0, currency: "N/A" }
  );
}

module.exports = {
  async get({ basketModel }) {
    const { locale, ...basketFromClient } = basketModel;

    /**
     * Get all products from Crystallize from their paths
     */
    const {
      getProductsFromCrystallize,
    } = require("./get-products-from-crystallize");
    const productDataFromCrystallize = await getProductsFromCrystallize({
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
          productId: product.id,
          productVariantId: variant.id,
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
      .filter((p) => !!p);

    // Calculate the totals
    let total = getTotals({ cart, vatType });

    return {
      cart,
      total,
    };
  },
};
