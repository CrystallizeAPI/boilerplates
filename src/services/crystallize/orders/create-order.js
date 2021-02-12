const { callOrdersApi, normaliseOrderModel } = require("../utils");

module.exports = async function createOrder(variables) {
  const response = await callOrdersApi({
    variables: normaliseOrderModel(variables),
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
