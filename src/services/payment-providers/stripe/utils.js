const stripeSdk = require("stripe");
const invariant = require("invariant");

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;

let client;
module.exports = {
  getClient: () => {
    invariant(
      STRIPE_SECRET_KEY,
      "process.env.STRIPE_SECRET_KEY is not defined"
    );

    if (!client) {
      client = stripeSdk(STRIPE_SECRET_KEY);
    }

    return client;
  },
};
