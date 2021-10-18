const {
  differenceInCalendarDays,
  subMonths,
  subDays,
  addMonths,
} = require("date-fns");
const get = require("./get-subscription");
const update = require("./update-subscription");
const create = require("./create-subscription-contract");
const {
  createRecurringInput,
  createStatusInput,
  createSubscriptionContractInput,
  createItemInput,
  createSubsciptionPlanInput,
} = require("./utils");
const products = require("../products");
const orders = require("../orders");
const customers = require("../customers");
const { paymentToPaymentInput } = require("../utils");
const createPaymentIntent = require("../../payment-providers/stripe/create-payment-intent-2");

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
async function upgrade({ subscription, product, customerIdentifier }) {
  const today = new Date();
  const activeUntil = new Date(subscription.status.activeUntil);
  const lastActive = subMonths(activeUntil, 1);

  const alreadyPast = differenceInCalendarDays(today, lastActive);
  const fullPeriod = differenceInCalendarDays(activeUntil, lastActive);
  const usage =
    Math.round((alreadyPast / fullPeriod + Number.EPSILON) * 100) / 100;
  const alreadyPaid = subscription.status.price;
  const alreadyUsed = usage * alreadyPaid;

  const variant = product.variants[0];
  const subscriptionPlan = variant.subscriptionPlans[0];
  const newPriceVariant =
    subscriptionPlan.periods[0].recurring.priceVariants[0];
  const newPrice = newPriceVariant.price;
  const toBeCharged = newPrice - alreadyPaid + alreadyUsed;

  await createPaymentIntent({
    email: customerIdentifier,
    amount: toBeCharged * 100,
    currency: newPriceVariant.currency,
    paymentMethodId: subscription.payment.paymentMethodId,
    confirm: true,
  });

  // Create Order
  const customer = await customers.get({ identifier: customerIdentifier });
  const orderInput = {
    total: {
      net: toBeCharged,
      gross: toBeCharged,
      currency: newPriceVariant.currency,
    },
    cart: [
      {
        name: variant.name,
        sku: variant.sku,
        path: product.path,
        quantity: 1,
        priceVariantIdentifier: "default",
        price: {
          net: toBeCharged,
          gross: toBeCharged,
          currency: newPriceVariant.currency,
        },
      },
    ],
    customer: {
      identifier: customerIdentifier,
      firstName: customer.firstName,
      lastName: customer.lastName,
      addresses: [{ type: "billing", email: customerIdentifier }],
    },
    payment: [paymentToPaymentInput(subscription.payment)],
  };
  await orders.create(orderInput);

  // Update subscription
  const recurringInput = createRecurringInput(subscriptionPlan);
  const input = createSubscriptionContractInput({
    customerIdentifier,
    product,
    paymentInput: paymentToPaymentInput(subscription.payment),
  });
  await create(input);
  await update(subscription.id, {
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
async function downgrade({ subscription, product, customerIdentifier }) {
  try {
    await update(subscription.id, { status: { renewAt: null } });
    const variant = product.variants[0];
    const subscriptionPlan = variant.subscriptionPlans[0];
    const recurringInput = createRecurringInput(subscriptionPlan);
    const statusInput = {
      ...createStatusInput(recurringInput),
      activeUntil: null,
    };
    const input = createSubscriptionContractInput({
      customerIdentifier,
      product,
      paymentInput: paymentToPaymentInput(subscription.payment),
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
  const subscription = await get(id);
  const product = await products.getByPath(plan);
  const subscriptionPlan = product.variants[0].subscriptionPlans[0];
  const priceVariant = subscriptionPlan.periods[0].recurring.priceVariants[0];

  if (priceVariant.price < subscription.status.price) {
    return downgrade({ product, subscription, customerIdentifier });
  } else {
    return upgrade({ product, subscription, customerIdentifier });
  }
};
