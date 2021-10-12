const { callSubscriptionsApi } = require("../utils");
const { getProduct } = require("../products");

function createSubscriptionContractInput({
  customerIdentifier,
  product,
  paymentMethodId,
}) {
  const plan = product.subscriptionPlans[0];

  const date = new Date();
  const activeUntil = new Date();
  activeUntil.setMonth(date.getMonth() + 1);

  const recurring = {
    price: plan.periods[0].recurring.priceVariants[0].price,
    currency: plan.periods[0].recurring.priceVariants[0].currency,
  };

  return {
    tenantId: process.env.CRYSTALLIZE_TENANT_ID,
    customerIdentifier: customerIdentifier,
    subscriptionPlan: {
      identifier: plan.identifier,
      periodId: plan.periods[0].id,
    },
    item: {
      name: product.name,
      sku: product.sku,
    },
    recurring: recurring,
    status: {
      ...recurring,
      activeUntil: activeUntil.toISOString(),
      renewAt: activeUntil.toISOString(),
    },
    payment: {
      provider: "stripe",
      stripe: {
        paymentMethodId: paymentMethodId,
      },
    },
  };
}

module.exports = async function createSubscriptionContract(
  itemPath,
  customerIdentifier,
  paymentMethodId
) {
  const product = await getProduct(itemPath);

  const input = createSubscriptionContractInput({
    customerIdentifier,
    product,
    paymentMethodId,
  });

  const response = await callSubscriptionsApi({
    variables: { input },
    query: `
      mutation createSubscriptionContract($input: CreateSubscriptionContractInput!) {
        subscriptionContracts {
          create(input: $input) {
            id
          }
        }
      }
    `,
  });

  return response.data.subscriptionContracts.create;
};
