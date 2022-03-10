const { callSubscriptionsApi } = require("../utils");

module.exports = async function update(id, input) {
  const response = await callSubscriptionsApi({
    variables: {
      id: id,
      input: input,
    },
    query: `
      mutation updateSubscriptionContract($id: ID!, $input: UpdateSubscriptionContractInput!){
        subscriptionContracts {
          update(id: $id, input: $input) {
            id
          }
        }
      }
    `,
  });

  return response.data.subscriptionContracts.update;
};
