const { getClient } = require("./utils");

// const charge = await stripe.charges.create({
//   amount: 2000,
//   currency: 'usd',
//   source: 'tok_amex',
//   description: 'My First Test Charge (created for API docs)',
// });
module.exports = function createCharge({ amount, currency, source }) {
  const stripe = getClient();
  return stripe.charges.create({
    amount: amount,
    currency: currency,
    source: source,
  });
};
