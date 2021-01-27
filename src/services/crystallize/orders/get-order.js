const { callOrdersApi } = require("../utils");

module.exports = async function getOrder(id) {
  const response = await callOrdersApi({
    variables: {
      id,
    },
    query: `
      query getOrder($id: ID!){
        orders {
          get(id: $id) {
            id
            total {
              net
              gross
              currency
              tax {
                name
                percent
              }
            }
            additionalInformation
            payment {
              ... on StripePayment {
                paymentMethod
              }
              ... on CustomPayment {
                provider
                properties {
                  property
                  value
                }
              }
            }
            cart {
              sku
              name
              quantity
              imageUrl
              price {
                net
                gross
                currency
              }
            }
            customer {
              firstName
              lastName
              addresses {
                type
                email
              }
            }
          }
        }
      }
    `,
  });

  const order = response.data.orders.get;

  if (!order) {
    throw new Error(`Cannot retrieve order "${id}"`);
  }

  return order;
};
