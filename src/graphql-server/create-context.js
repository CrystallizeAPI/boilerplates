const cookie = require("cookie");

const userService = require("../services/user-service");
const getHost = require("../lib/get-host");

function normaliseRequest(args) {
  if (args.event) {
    const { headers } = args.event;
    if (headers && !args.event.cookies) {
      return {
        headers,
        cookies: cookie.parse(headers.cookie || headers.Cookie || ""),
      };
    }
    return args.event;
  }

  if (args.req) {
    return args.req;
  }

  return args;
}

module.exports = function createContext({ apiPathPrefix }) {
  return function context(args) {
    const { cookies, headers } = normaliseRequest(args);

    const user = userService.authenticate(cookies[userService.USER_TOKEN_NAME]);

    // Determine the URL for webhook callbacks (ex: https://service-api.example.com/api)
    const publicHost = getHost({ headers }) + apiPathPrefix;

    /**
     * serviceCallbackHost is used for third party services callbacks
     * It will be used in e.g. payment provider services callbacks
     * when async operations are finished
     *
     * Example for local development:
     *  - publicHost: http://localhost:3001/api
     *  - serviceCallbackHost: https://abcdefgh12345.ngrok.io/api
     *
     * Example for prod development:
     *  - publicHost: https://my-service-api.shop.com/api
     *  - serviceCallbackHost: https://my-service-api.shop.com/api
     */
    let serviceCallbackHost = process.env.SERVICE_CALLBACK_HOST;
    if (serviceCallbackHost) {
      if (!serviceCallbackHost.endsWith(apiPathPrefix)) {
        serviceCallbackHost += apiPathPrefix;
      }
    } else {
      serviceCallbackHost = publicHost;
    }

    return {
      user,
      publicHost,
      serviceCallbackHost,
    };
  };
};
