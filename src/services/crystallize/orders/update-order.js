const { callPimApi, normalizeOrderModel } = require("../utils");

module.exports = async function updateOrder(id, variables) {
  const response = await callPimApi({
    variables: {
      id,
      ...normalizeOrderModel(variables),
    },
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

  return response.data.order.update;
};
