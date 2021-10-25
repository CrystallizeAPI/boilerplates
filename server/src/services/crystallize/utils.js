const invariant = require("invariant");
const fetch = require("node-fetch");
const createPaymentIntent = require("../../services/payment-providers/stripe/create-payment-intent-2");
const stripeToCrystallizeOrderModel = require("../../services/payment-providers/stripe/to-crystallize-order-model-2");
const getTillitAddress = require("../../services/payment-providers/tillit/get-address");
const createTillitOrder = require("../../services/payment-providers/tillit/create-order");
const {
  tillitToCrystallizeOrderModel,
} = require("../../services/payment-providers/tillit/to-crystallize-order-model");

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

// eslint-disable-next-line no-unused-vars
function normaliseOrderModel({ customer, cart, total, voucher, ...rest }) {
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
        identifier: customer.identifier || null,
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

const getTenantId = (function () {
  let tenantId;

  return async () => {
    if (tenantId) {
      return tenantId;
    }

    const tenantIdResponse = await callCatalogueApi({
      query: `
          {
            tenant {
              id
            }
          }
        `,
    });
    tenantId = tenantIdResponse.data.tenant.id;

    return tenantId;
  };
})();

/**
 * Catalogue API is the fast read-only API to lookup data
 * for a given item path or anything else in the catalogue
 */
const callCatalogueApi = createApiCaller(
  `https://api.crystallize.com/${CRYSTALLIZE_TENANT_IDENTIFIER}/catalogue`
);

/**
 * Search API is the fast read-only API to search across
 * all items and topics
 */
const callSearchApi = createApiCaller(
  `https://api.crystallize.com/${CRYSTALLIZE_TENANT_IDENTIFIER}/search`
);

/**
 * Orders API is the highly scalable API to send/read massive
 * amounts of orders
 */
const callOrdersApi = createApiCaller(
  `https://api.crystallize.com/${CRYSTALLIZE_TENANT_IDENTIFIER}/orders`
);

const callSubscriptionsApi = createApiCaller(
  `https://api.crystallize.com/${CRYSTALLIZE_TENANT_IDENTIFIER}/subscriptions`
);

/**
 * The PIM API is used for doing the ALL possible actions on
 * a tenant or your user profile
 */
const callPimApi = createApiCaller("https://pim.crystallize.com/graphql");

function paymentToPaymentInput(payment) {
  switch (payment.provider) {
    case "stripe":
      return {
        provider: "stripe",
        stripe: { paymentMethodId: payment.paymentMethodId },
      };
    case "custom":
      return {
        provider: "custom",
        custom: {
          properties: payment.properties,
        },
      };
    default:
      return payment;
  }
}

function createBasket({ totalValue, currency, product }) {
  const variant = product.variants[0];
  return {
    total: {
      net: totalValue,
      gross: totalValue,
      currency: currency,
    },
    cart: [
      {
        name: variant.name,
        sku: variant.sku,
        path: product.path,
        quantity: 1,
        priceVariantIdentifier: "default",
        price: {
          net: totalValue,
          gross: totalValue,
          currency: currency,
        },
      },
    ],
  };
}

async function createCharge({ payment, item, customer, totalValue, currency }) {
  if (payment.provider === "stripe") {
    console.log("Create Stripe payment intent");
    return createPaymentIntent({
      email: customer.email,
      amount: totalValue * 100,
      currency: currency,
      paymentMethodId: payment.paymentMethodId,
      confirm: true,
    });
  } else if (payment.provider === "custom") {
    console.log("Create Tillit order");

    const company = {
      id: payment.properties?.find((p) => p.property === "companyId")?.value,
      name: payment.properties?.find((p) => p.property === "companyName")
        ?.value,
    };
    const address = await getTillitAddress(company);

    return await createTillitOrder({
      baseUrl: "httt://localhost:3000",
      item: item,
      total: totalValue,
      customer,
      company,
      phone: customer.phone,
      address,
    });
  }
}

function createOrderInput({ customer, payment, charge, product }) {
  if (payment.provider === "stripe") {
    const paymentIntent = charge;
    return stripeToCrystallizeOrderModel({
      customer,
      product,
      payment,
      paymentIntent,
    });
  } else if (payment.provider === "custom") {
    const tillitOrder = charge;
    return tillitToCrystallizeOrderModel({
      customer,
      product,
      order: tillitOrder,
    });
  }
}

module.exports = {
  paymentToPaymentInput,
  normaliseOrderModel,
  callCatalogueApi,
  callSearchApi,
  callOrdersApi,
  callPimApi,
  callSubscriptionsApi,
  getTenantId,
  createBasket,
  createCharge,
  createOrderInput,
};
