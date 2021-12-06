const { callSubscriptionsApi, getTenantId } = require("../utils");
const { getClient } = require("../../payment-providers/stripe/utils");

module.exports = async function getByCustomer(customerIdentifier) {
  const stripe = getClient();

  const response = await callSubscriptionsApi({
    variables: {
      tenantId: await getTenantId(),
      customerIdentifier: customerIdentifier,
    },
    query: `
      query getSubscriptionsByCustomer($tenantId: ID!, $customerIdentifier: String!){
        subscriptionContracts {
          getMany(tenantId: $tenantId, customerIdentifier: $customerIdentifier) {
            edges {
              node {
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
                  ... on CustomPayment {
                    properties {
                      property
                      value
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  const subscriptionContracts =
    response.data.subscriptionContracts.getMany.edges;

  const subscriptionsWithPaymentMethod = [];

  for (const { node: subscriptionContract } of subscriptionContracts) {
    switch (subscriptionContract.payment?.provider) {
      case "stripe": {
        const paymentMethod = await stripe.paymentMethods.retrieve(
          subscriptionContract.payment.paymentMethodId
        );
        subscriptionsWithPaymentMethod.push({
          node: {
            ...subscriptionContract,
            paymentMethod,
          },
        });
        break;
      }
      case "custom": {
        subscriptionsWithPaymentMethod.push({
          node: {
            ...subscriptionContract,
            paymentMethod: subscriptionContract.payment,
          },
        });
        break;
      }
      default:
        subscriptionsWithPaymentMethod.push({
          node: subscriptionContract,
        });
    }
  }

  return { edges: subscriptionsWithPaymentMethod };
};
