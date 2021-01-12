const { callOrdersApi } = require("../utils");

module.exports = function updateOrder(variables) {
  return callOrdersApi({
    variables,
    query: `
      mutation updateOrder(
        $id: ID!
        $customer: CustomerInput
        $payment: [PaymentInput!]
        $additionalInformation: String
      ) {
        order {
            update(
            id: $id,
            input: {
              customer: $customer
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
};
