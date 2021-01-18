const MOLLIE_API_KEY = process.env.MOLLIE_API_KEY;

module.exports = {
  enabled: false && Boolean(MOLLIE_API_KEY),
  frontendConfig: {},
};
