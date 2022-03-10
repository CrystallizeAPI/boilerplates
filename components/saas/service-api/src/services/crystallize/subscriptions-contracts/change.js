const { differenceInCalendarDays, subMonths } = require("date-fns");
const get = require("./get-subscription-contract");
const update = require("./update-subscription-contract");
const create = require("./create-subscription-contract");
const {
  createRecurringInput,
  createStatusInput,
  createSubscriptionContractInput,
} = require("./utils");
const products = require("../products");
const orders = require("../orders");
const customers = require("../customers");
const {
  paymentToPaymentInput,
  createCharge,
  createOrderInput,
} = require("../utils");

/**
 * Make a payment with pro-rated rate from current subscription contract period
 * and extend activeUntil by 1 month
 *
 * For example:
 *   - current sub: $20/m - active from Jan 01 to Feb 01
 *   - new sub: $60/m
 *   - today: Jan 15
 *   - already used 15 days / 31 days --> 15 / 31 * $20 = $9.68
 *   - already paid: $20
 *   - leftover = $20 - $9.68 = $10.32
 *   - ==> charge $60 - $10.32 = $49.68
 *   - ==> new sub active from Jan 15 - Feb 15
 */
async function upgrade({ subscriptionContract, product, customerIdentifier }) {
  const customer = await customers.get({ identifier: customerIdentifier });

  const today = new Date();
  const activeUntil = new Date(subscriptionContract.status.activeUntil);
  const lastActive = subMonths(activeUntil, 1);

  const alreadyPast = differenceInCalendarDays(today, lastActive);
  const fullPeriod = differenceInCalendarDays(activeUntil, lastActive);
  const usage =
    Math.round((alreadyPast / fullPeriod + Number.EPSILON) * 100) / 100;
  const alreadyPaid = subscriptionContract.status.price;
  const alreadyUsed = usage * alreadyPaid;

  const payment = subscriptionContract.payment;
  const variant = product.variants[0];
  const subscriptionPlan = variant.subscriptionPlans[0];
  const newPriceVariant =
    subscriptionPlan.periods[0].recurring.priceVariants[0];
  const newPrice = newPriceVariant.price;
  const toBeCharged = newPrice - alreadyPaid + alreadyUsed;

  console.log("Charge");
  const charge = await createCharge({
    payment,
    item: subscriptionContract.item,
    customer,
    totalValue: toBeCharged,
    currency: newPriceVariant.currency,
  });

  // Create Order
  console.log("Create Order Input");
  const orderInput = createOrderInput({
    customer,
    product,
    payment: subscriptionContract.payment,
    charge,
  });
  console.log("Create Order");
  await orders.create(orderInput);

  // Update subscription
  const input = await createSubscriptionContractInput({
    customerIdentifier,
    product,
    paymentInput: paymentToPaymentInput(subscriptionContract.payment),
  });
  console.log("Create new subscription");
  await create(input);
  console.log("Update existing subscription");
  await update(subscriptionContract.id, {
    status: { renewAt: null, activeUntil: null },
  });

  return true;
}

/**
 * Customer will be on current plan until next renewal.
 *
 * Right now:
 * - we create a new subscription contract with new plan that's not active
 * - we set current subscriptiopn's renewAt to `null`
 */
async function downgrade({
  subscriptionContract,
  product,
  customerIdentifier,
}) {
  try {
    await update(subscriptionContract.id, { status: { renewAt: null } });
    const variant = product.variants[0];
    const subscriptionPlan = variant.subscriptionPlans[0];
    const recurringInput = createRecurringInput(subscriptionPlan);
    const statusInput = {
      ...createStatusInput(recurringInput),
      activeUntil: null,
    };
    const input = await createSubscriptionContractInput({
      customerIdentifier,
      product,
      paymentInput: paymentToPaymentInput(subscriptionContract.payment),
      overrides: { status: statusInput },
    });
    await create(input);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

module.exports = async function change({ id, plan, context }) {
  const customerIdentifier = context.user.email;
  const subscriptionContract = await get(id);
  const product = await products.getByPath(plan);
  const subscriptionPlan = product.variants[0].subscriptionPlans[0];
  const priceVariant = subscriptionPlan.periods[0].recurring.priceVariants[0];

  if (priceVariant.price < subscriptionContract.status.price) {
    return downgrade({ product, subscriptionContract, customerIdentifier });
  } else {
    return upgrade({ product, subscriptionContract, customerIdentifier });
  }
};
