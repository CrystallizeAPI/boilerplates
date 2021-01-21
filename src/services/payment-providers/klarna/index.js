const KLARNA_USERNAME = process.env.KLARNA_USERNAME;
const KLARNA_PASSWORD = process.env.KLARNA_PASSWORD;

const renderCheckout = require("./render-checkout");
const { getClient } = require("./utils");

module.exports = {
  enabled: Boolean(KLARNA_USERNAME && KLARNA_PASSWORD),
  frontendConfig: {},
  getClient,
  renderCheckout,
};
