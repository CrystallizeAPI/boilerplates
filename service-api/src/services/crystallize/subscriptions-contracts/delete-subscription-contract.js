const { callSubscriptionsApi } = require("../utils");

module.exports = async function deleteSubscriptionContract(id) {
  const response = await callSubscriptionsApi({
    variables: { id },
    query: `
      mutation deleteSubscriptionContracts($id: ID!) {
        subscriptionContract {
          delete(id: $id)
        }
      }
    `,
  });

  return response.data.subscriptionContracts.delete;
};
