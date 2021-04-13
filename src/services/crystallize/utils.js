const invariant = require("invariant");
const fetch = require("node-fetch");

const CRYSTALLIZE_TENANT_IDENTIFIER = process.env.CRYSTALLIZE_TENANT_IDENTIFIER;
const CRYSTALLIZE_ACCESS_TOKEN_ID = process.env.CRYSTALLIZE_ACCESS_TOKEN_ID;
const CRYSTALLIZE_ACCESS_TOKEN_SECRET =
  process.env.CRYSTALLIZE_ACCESS_TOKEN_SECRET;

invariant(
  CRYSTALLIZE_TENANT_IDENTIFIER,
  "Missing process.env.CRYSTALLIZE_TENANT_IDENTIFIER"
);

function createApiCaller(uri) {
  return async function callApi({ query, variables, operationName }) {
    invariant(
      CRYSTALLIZE_ACCESS_TOKEN_ID,
      "Missing process.env.CRYSTALLIZE_ACCESS_TOKEN_ID"
    );
    invariant(
      CRYSTALLIZE_ACCESS_TOKEN_SECRET,
      "Missing process.env.CRYSTALLIZE_ACCESS_TOKEN_SECRET"
    );

    const response = await fetch(uri, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-Crystallize-Access-Token-Id": CRYSTALLIZE_ACCESS_TOKEN_ID,
        "X-Crystallize-Access-Token-Secret": CRYSTALLIZE_ACCESS_TOKEN_SECRET,
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

function normaliseOrderModel({ customer, cart, total, ...rest }) {
  return {
    ...rest,
    ...(total && {
      total: {
        gross: total.gross,
        net: total.net,
        currency: total.currency,
        tax: total.tax,
      },
    }),
    ...(cart && {
      cart: cart.map(function handleOrderCartItem(item) {
        const {
          images = [],
          name,
          sku,
          productId,
          productVariantId,
          quantity,
          price,
        } = item;

        return {
          name,
          sku,
          productId,
          productVariantId,
          quantity,
          price,
          imageUrl: images && images[0] && images[0].url,
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
  normaliseOrderModel,

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
