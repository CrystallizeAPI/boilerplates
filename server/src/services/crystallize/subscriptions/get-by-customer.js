const { callSubscriptionsApi } = require("../utils");
const { getClient } = require("../../payment-providers/stripe/utils");

module.exports = async function getByCustomer(customerIdentifier) {
  const stripe = getClient();

  const response = await callSubscriptionsApi({
    variables: {
      tenantId: process.env.CRYSTALLIZE_TENANT_ID,
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
                }
              }
            }
          }
        }
      }
    `,
  });

  const subscriptions = response.data.subscriptionContracts.getMany.edges;

  const subscriptionsWithPaymentMethod = [];

  for (const { node: subscription } of subscriptions) {
    const paymentMethod = await stripe.paymentMethods.retrieve(
      subscription.payment.paymentMethodId
    );
    subscriptionsWithPaymentMethod.push({
      node: {
        ...subscription,
        paymentMethod,
      },
    });
  }

  return { edges: subscriptionsWithPaymentMethod };
};
