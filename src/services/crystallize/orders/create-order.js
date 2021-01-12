const { callOrdersApi } = require("../utils");

module.exports = function createOrder(variables) {
  return callOrdersApi({
    variables,
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
};
