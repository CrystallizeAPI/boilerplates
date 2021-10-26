function createRecurringInput(subscriptionPlan) {
  return {
    price: subscriptionPlan.periods[0].recurring.priceVariants[0].price,
    currency: subscriptionPlan.periods[0].recurring.priceVariants[0].currency,
  };
}

function createStatusInput(recurringInput) {
  const date = new Date();
  const activeUntil = new Date();
  activeUntil.setMonth(date.getMonth() + 1);
  return {
    ...recurringInput,
    activeUntil: activeUntil.toISOString(),
    renewAt: activeUntil.toISOString(),
  };
}

function createItemInput(variant) {
  return { name: variant.name, sku: variant.sku };
}

function createSubsciptionPlanInput(subscriptionPlan) {
  return {
    identifier: subscriptionPlan.identifier,
    periodId: subscriptionPlan.periods[0].id,
  };
}

function createSubscriptionContractInput({
  customerIdentifier,
  product,
  paymentInput,
  overrides = {},
}) {
  const variant = product.variants[0];
  const subscriptionPlan = variant.subscriptionPlans[0];
  const recurringInput = createRecurringInput(subscriptionPlan);

  return {
    tenantId: process.env.CRYSTALLIZE_TENANT_ID,
    customerIdentifier: customerIdentifier,
    subscriptionPlan: createSubsciptionPlanInput(subscriptionPlan),
    item: createItemInput(variant),
    recurring: recurringInput,
    status: createStatusInput(recurringInput),
    payment: paymentInput,
    ...overrides,
  };
}

module.exports = {
  createSubscriptionContractInput,
  createRecurringInput,
  createStatusInput,
  createItemInput,
  createSubsciptionPlanInput,
};
