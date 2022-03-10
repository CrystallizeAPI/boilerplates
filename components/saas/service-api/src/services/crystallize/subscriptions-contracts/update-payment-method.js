const { getClient } = require("../../payment-providers/stripe/utils");
const updateSubscriptionContract = require("./update-subscription-contract");

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

  await updateSubscriptionContract(id, {
    payment: {
      provider: "stripe",
      stripe: {
        paymentMethodId,
      },
    },
  });

  return true;
};
