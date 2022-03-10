const search = require("./search");
const checkout = require("./checkout");
const confirmation = require("./confirmation");

// const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
// const STRIPE_PUBLISHABLE_KEY = process.env.STRIPE_PUBLISHABLE_KEY;

module.exports = {
  search,
  checkout,
  confirmation,
};
