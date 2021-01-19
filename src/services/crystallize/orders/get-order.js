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
              price {
                net
                gross
                currency
              }
              imageUrl
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

  return response.data.orders.get;
};
