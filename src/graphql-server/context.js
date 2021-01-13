const userService = require("../services/user-service");
const emailService = require("../services/email-service");
const getHost = require("../lib/get-host");

module.exports = ({ req }) => {
  const user = userService.authenticate(
    req.cookies[userService.USER_TOKEN_NAME]
  );

  return {
    user,
    host: getHost(req),

    // Expose common services
    userService,
    emailService,
  };
};
