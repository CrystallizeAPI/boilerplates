const invariant = require("invariant");
const fetch = require("node-fetch");

const CRYSTALLIZE_TENANT_IDENTIFIER = process.env.CRYSTALLIZE_TENANT_IDENTIFIER;
const CRYSTALLIZE_SECRET_TOKEN = process.env.CRYSTALLIZE_SECRET_TOKEN;
const CRYSTALLIZE_SECRET_TOKEN_ID = process.env.CRYSTALLIZE_SECRET_TOKEN_ID;

invariant(
  CRYSTALLIZE_TENANT_IDENTIFIER,
  "Missing required ENV variable CRYSTALLIZE_TENANT_IDENTIFIER"
);
invariant(
  CRYSTALLIZE_SECRET_TOKEN,
  "Missing required ENV variable CRYSTALLIZE_SECRET_TOKEN"
);
invariant(
  CRYSTALLIZE_SECRET_TOKEN_ID,
  "Missing required ENV variable CRYSTALLIZE_SECRET_TOKEN_ID"
);

function createApiCaller(uri) {
  return async function callApi({ query, variables, operationName }) {
    const response = await fetch(uri, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-Crystallize-Access-Token-Secret": CRYSTALLIZE_SECRET_TOKEN,
        "X-Crystallize-Access-Token-Id": CRYSTALLIZE_SECRET_TOKEN_ID,
      },
      body: JSON.stringify({ operationName, query, variables }),
    });

    return response.json();
  };
}

module.exports = {
  callOrdersApi: createApiCaller(
    `https://api.crystallize.com/${CRYSTALLIZE_TENANT_IDENTIFIER}/orders`
  ),
  callPimApi: createApiCaller("https://pim.crystallize.com/graphql"),
};
