const { callPimApi, getTenantId } = require("../utils");

module.exports = async function getCustomer({ identifier, externalReference }) {
  const tenantId = await getTenantId();
  const response = await callPimApi({
    variables: {
      tenantId,
      identifier,
      externalReference,
    },
    query: `
      query getCustomer(
        $tenantId: ID!
        $identifier: String
        $externalReference: CustomerExternalReferenceInput
      ){
        customer {
          get(
            tenantId: $tenantId
            identifier: $identifier
            externalReference: $externalReference
          ) {
            identifier
            email
            firstName
            middleName
            lastName
            phone
            meta {
              key
              value
            }
          }
        }

        subscriptionContract {
          getMany (
            tenantId: $tenantId
            customerIdentifier: $identifier
          ) {
            edges {
              node {
                id
                status {
                  activeUntil
                }
              }
            }
          }
        }
      }
    `,
  });

  const customer = response.data.customer.get;

  const [subscriptionContract] =
    response.data.subscriptionContract.getMany?.edges || [];
  if (subscriptionContract) {
    customer.hasActiveSubscriptionContract =
      new Date(subscriptionContract.node.status.activeUntil) >= new Date();
  }

  return customer;
};
