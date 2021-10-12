const { callPimApi } = require("../utils");

module.exports = async function deleteSubscriptionContract(id) {
  const response = await callPimApi({
    variables: { id },
    query: `
      mutation deleteSubscriptionContract($id: ID!) {
        subscriptionContract {
          delete(id: $id)
        }
      }
    `,
  });

  return response.data.subscription.delete;
};
