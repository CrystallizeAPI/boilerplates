const stripeSdk = require("stripe");
const invariant = require("invariant");

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;

let client;
module.exports = {
  getClient: () => {
    invariant(STRIPE_SECRET_KEY, "STRIPE_SECRET_KEY is not set");

    if (client) {
      return client;
    }

    client = stripeSdk(process.env.STRIPE_SECRET_KEY);

    return client;
  },
};
