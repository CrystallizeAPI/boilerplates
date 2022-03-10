const { callOrdersApi } = require("../utils");

module.exports = async function getByCustomer(customerIdentifier) {
  const response = await callOrdersApi({
    variables: {
      customerIdentifier: customerIdentifier,
    },
    query: `
      query getOrdersByCustomer($customerIdentifier: String!){
        orders {
          getAll(customerIdentifier: $customerIdentifier) {
            edges {
              node {
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
                meta {
                  key
                  value
                }
                additionalInformation
                payment {
                  ... on StripePayment {
                    provider
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
                  meta {
                    key
                    value
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
                createdAt
                updatedAt
              }
            }
          }
        }
      }
    `,
  });

  return response.data.orders.getAll;
};
