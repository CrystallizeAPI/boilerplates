const fetch = require("node-fetch");
const { TILLIT_URL } = require("./constants");

module.exports = async function updateOrder(orderId, updates) {
  const data = await fetch(`${TILLIT_URL}/order/${orderId}`, {
    method: "PUT",
    headers: {
      "X-API-Key": process.env.TILLIT_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updates),
  }).then((response) => response.json());

  return data;
};
