const { callSubscriptionsApi } = require("../utils");

module.exports = async function get(id) {
  const response = await callSubscriptionsApi({
    variables: {
      id: id,
    },
    query: `
      query getSubscription($id: ID!){
        subscriptionContracts {
          get(id: $id) {
            id

            subscriptionPlan {
              tenantId
              identifier
              name
              createdAt
              updatedAt
              meteredVariables {
                id
                name
                identifier
                unit
              }
              periods {
                id
                name
                recurring {
                  period
                  unit
                }
              }
            }

            initial {
              price
              currency
              period
              unit
            }

            recurring {
              price
              currency
              period
              unit
            }

            status {
              activeUntil
              renewAt
              price
              currency
            }

            item {
              name
              sku
              imageUrl
              meta {
                key
                value
              }
            }

            payment {
              ...on PaymentType {
                provider
              }
              ... on StripePayment {
                paymentMethodId
              }
            }
          }
        }
      }
    `,
  });

  return response.data.subscriptionContracts.get;
};
