module.exports = {
  async get({ basketModel, context }) {
    const { locale, voucherCode, ...basketFromClient } = basketModel;

    /**
     * Resolve all the voucher codes to valid vouchers for the user
     */
    let voucher;
    if (voucherCode) {
      const voucherService = require("../voucher-service");
      const response = await voucherService.get({ code: voucherCode, context });

      if (response.isValid) {
        voucher = response.voucher;
      }
    }

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
      { gross: 0, net: 0, tax: vatType, discount: 0, currency: "N/A" }
    );

    // Add a voucher
    if (voucher) {
      const {
        calculateVoucherDiscountAmount,
      } = require("./calculate-voucher-discount-amount");
      const discountAmount = calculateVoucherDiscountAmount({
        voucher,
        amount: total.gross,
      });

      const voucherCartItem = {
        name: voucher.code,
        quantity: 1,
        price: {
          gross: discountAmount * -1,
          net: discountAmount * -1,
          currency: total.currency,
        },
      };

      /**
       * Identify the voucher item by using the syntax
       * --voucher--{name}
       */
      const voucherIdentifier = `--voucher--${voucher.code
        .toLowerCase()
        .replace(/\s/g, "-")}`;
      voucherCartItem.sku = voucherIdentifier;

      cart.push(voucherCartItem);

      // Adjust totals
      total.discount = discountAmount;
      total.gross -= discountAmount;
      total.net -= discountAmount;
    }

    return {
      voucher,
      cart,
      total,
    };
  },
};
