const { getClient } = require("../../payment-providers/stripe/utils");
const updateSubscription = require("./update-subscription");

module.exports = async function updatePaymentMethod({
  id,
  paymentMethodId,
  context,
}) {
  const stripe = getClient();
  const user = context.user;

  const stripeCustomers = await stripe.customers.list({ email: user.email });
  const stripeCustomer = stripeCustomers.data[0];

  await stripe.paymentMethods.attach(paymentMethodId, {
    customer: stripeCustomer.id,
  });

  await updateSubscription(id, {
    payment: {
      provider: "stripe",
      stripe: {
        paymentMethodId,
      },
    },
  });

  return true;
};
