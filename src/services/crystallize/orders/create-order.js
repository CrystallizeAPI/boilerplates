const { callOrdersApi } = require("../utils");

function validateVariables({ cart, ...rest }) {
  return {
    ...rest,
    cart: cart.map(function validItem(item) {
      const {
        images = [],
        name,
        sku,
        productid,
        productVariantId,
        quantity,
        price,
      } = item;
      return {
        name,
        sku,
        productid,
        productVariantId,
        quantity,
        price,
        imageUrl: images[0].url,
      };
    }),
  };
}

module.exports = async function createOrder(variables) {
  const response = await callOrdersApi({
    variables: validateVariables(variables),
    query: `
      mutation createOrder(
        $customer: CustomerInput!
        $cart: [OrderItemInput!]!
        $total: PriceInput
        $payment: [PaymentInput!]
        $additionalInformation: String
      ) {
        orders {
          create(
            input: {
              customer: $customer
              cart: $cart
              total: $total
              payment: $payment
              additionalInformation: $additionalInformation
            }
          ) {
            id
          }
        }
      }
    `,
  });

  return response.data.orders.create;
};
