const { callPimApi, getTenantId } = require("../utils");

// const CRYSTALLIZE_SUBSCRIPTION_PLAN_IDENTIFIER = process.env.CRYSTALLIZE_SUBSCRIPTION_PLAN_IDENTIFIER;
const CRYSTALLIZE_SUBSCRIPTION_PLAN_IDENTIFIER = "plan";

module.exports = async function getSubscriptionPlan() {
  const response = await callPimApi({
    variables: {
      identifier: CRYSTALLIZE_SUBSCRIPTION_PLAN_IDENTIFIER,
      tenantId: await getTenantId(),
    },
    query: `
      query getSubscriptionPlan($identifier: String!, $tenantId: ID!) {
        subscriptionPlan {
          get(identifier: $identifier, tenantId: $tenantId) {
            identifier
            name
            meteredVariables {
              id
              name
              unit
              identifier
            }
            periods {
              name
              id
              initial {
                period
                unit
              }
              recurring {
                period
                unit
              }
            }
          }
        }
      }
    `,
  });
  return response.data.subscriptionPlan.get;
};
