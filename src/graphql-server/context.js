const userService = require("../services/user-service");
const emailService = require("../services/email-service");
const getHost = require("../lib/get-host");

module.exports = ({ req }) => {
  const user = userService.authenticate(
    req.cookies[userService.USER_TOKEN_NAME]
  );

  // Determine the public host for the API (ex: https://service-api.example.com)
  const publicHost = getHost(req);

  /**
   * The host used for third party services callbacks
   * It will be used in e.g. payment provider services
   * callbacks when async operations are finished
   *
   * Example for local development:
   *  - publicHost: http://localhost:3001
   *  - serviceCallbackHost: https://abcdefgh12345.ngrok.io
   */
  const serviceCallbackHost = process.env.SERVICE_CALLBACK_HOST || publicHost;

  return {
    user,
    publicHost,
    serviceCallbackHost,

    // Expose common services
    userService,
    emailService,
  };
};
