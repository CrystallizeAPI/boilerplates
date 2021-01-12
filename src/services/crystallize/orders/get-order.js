const { callOrdersApi } = require("../utils");

module.exports = function getOrder(id) {
  return callOrdersApi({
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
};
