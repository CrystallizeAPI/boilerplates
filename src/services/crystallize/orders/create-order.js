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
        $payment: [PaymentInput!]
        $total: PriceInput
        $additionalInformation: String
      ) {
        orders {
          create(
            input: {
              customer: $customer
              cart: $cart
              payment: $payment
              total: $total
              additionalInformation: $additionalInformation
            }
          ) {
            id
          }
        }
      }
    `,
  });

  if (response.errors) {
    console.log(JSON.stringify(response.errors, null, 1));
  }

  return response.data.orders.create;
};
