const invariant = require("invariant");
const fetch = require("node-fetch");

const CRYSTALLIZE_TENANT_IDENTIFIER = process.env.CRYSTALLIZE_TENANT_IDENTIFIER;
const CRYSTALLIZE_SECRET_TOKEN = process.env.CRYSTALLIZE_SECRET_TOKEN;
const CRYSTALLIZE_SECRET_TOKEN_ID = process.env.CRYSTALLIZE_SECRET_TOKEN_ID;

invariant(
  CRYSTALLIZE_TENANT_IDENTIFIER,
  "Missing process.env.CRYSTALLIZE_TENANT_IDENTIFIER"
);

function createApiCaller(uri) {
  return async function callApi({ query, variables, operationName }) {
    invariant(
      CRYSTALLIZE_SECRET_TOKEN,
      "Missing process.env.CRYSTALLIZE_SECRET_TOKEN"
    );
    invariant(
      CRYSTALLIZE_SECRET_TOKEN_ID,
      "Missing process.env.CRYSTALLIZE_SECRET_TOKEN_ID"
    );

    const response = await fetch(uri, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-Crystallize-Access-Token-Secret": CRYSTALLIZE_SECRET_TOKEN,
        "X-Crystallize-Access-Token-Id": CRYSTALLIZE_SECRET_TOKEN_ID,
      },
      body: JSON.stringify({ operationName, query, variables }),
    });

    const json = await response.json();

    if (json.errors) {
      console.log(JSON.stringify(json.errors, null, 2));
    }

    return json;
  };
}

function normalizeOrderModel({ customer, cart, ...rest }) {
  return {
    ...rest,
    ...(cart && {
      cart: cart.map(function handleOrderCartItem(item) {
        const {
          images = [],
          name,
          sku,
          productid,
          productVariantId,
          quantity,
          price,
        } = item;

        return {
          name,
          sku,
          productid,
          productVariantId,
          quantity,
          price,
          imageUrl: images[0].url,
        };
      }),
    }),
    ...(customer && {
      customer: {
        firstName: customer.firstName || null,
        lastName: customer.lastName || null,
        addresses: customer.addresses || [
          {
            type: "billing",
            email: customer.email || undefined,
          },
        ],
      },
    }),
  };
}

module.exports = {
  normalizeOrderModel,

  /**
   * Catalogue API is the fast read-only API to query frontend
   * related data
   */
  callCatalogueApi: createApiCaller(
    `https://api.crystallize.com/${CRYSTALLIZE_TENANT_IDENTIFIER}/catalogue`
  ),
  /**
   * Orders API is the highly scalable API to send/read massive
   * amounts of orders
   */
  callOrdersApi: createApiCaller(
    `https://api.crystallize.com/${CRYSTALLIZE_TENANT_IDENTIFIER}/orders`
  ),
  /**
   * The PIM API is used for doing the ALL possible actions on
   * a tenant or your user profile
   */
  callPimApi: createApiCaller("https://pim.crystallize.com/graphql"),
};
