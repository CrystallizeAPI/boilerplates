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
      }
    `,
  });

  return response.data.customer.get;
};
