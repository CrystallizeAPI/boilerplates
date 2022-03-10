const fetch = require("node-fetch");
const { TILLIT_URL } = require("./constants");

module.exports = async function getOrder(id) {
  const data = await fetch(`${TILLIT_URL}/order/${id}`, {
    headers: {
      "X-API-Key": process.env.TILLIT_API_KEY,
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
  return data;
};
