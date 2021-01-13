const KLARNA_USERNAME = process.env.KLARNA_USERNAME;
const KLARNA_PASSWORD = process.env.KLARNA_PASSWORD;

module.exports = {
  enabled: Boolean(KLARNA_USERNAME && KLARNA_PASSWORD),
  frontendConfig: {},
};
