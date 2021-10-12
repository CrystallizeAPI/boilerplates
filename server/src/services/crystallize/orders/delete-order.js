const { callPimApi } = require("../utils");

module.exports = async function deleteOrder(id) {
  const response = await callPimApi({
    variables: { id },
    query: `
      mutation deleteOrder($id: ID!) {
        order {
          delete(id: $id)
        }
      }
    `,
  });

  return response.data.order.delete;
};
