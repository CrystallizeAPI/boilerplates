const { callSubscriptionsApi } = require("../utils");
const { getProduct } = require("../products");

function paymentToPaymentInput(payment) {
  switch (payment.provider) {
    case "stripe":
      return {
        provider: "stripe",
        stripe: { paymentMethodId: payment.paymentMethodId },
      };
    default:
      return payment;
  }
}

function createSubscriptionContractInput({
  customerIdentifier,
  product,
  payment,
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
    payment: paymentToPaymentInput(payment),
  };
}

module.exports = async function createSubscriptionContract(
  itemPath,
  customerIdentifier,
  payment
) {
  const product = await getProduct(itemPath);

  const input = createSubscriptionContractInput({
    customerIdentifier,
    product,
    payment,
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
