"use strict";

const cookie = require("cookie");
const { ApolloServer } = require("apollo-server-lambda");

const createGraphqlServerConfig = require("../src/graphql-server");
const userService = require("../src/services/user-service");

function normaliseRequest({ event }) {
  const { headers } = event;
  if (headers && !event.cookies) {
    return {
      headers,
      cookies: cookie.parse(headers.cookie || headers.Cookie || ""),
    };
  }
  return event;
}

const apolloServer = new ApolloServer(
  createGraphqlServerConfig({
    apiPathPrefix: "/dev",
    normaliseRequest,
  })
);

const graphqlHandler = apolloServer.createHandler({
  cors: {
    origin: true,
    credentials: true,
  },
});

module.exports = {
  graphql(event, context, callback) {
    graphqlHandler(event, context, function (...args) {
      try {
        // Refresh user token
        if (args[1] && args[1].headers) {
          const { cookies } = normaliseRequest({ event });

          if (cookies) {
            const user = userService.authenticate(
              cookies[userService.COOKIE_USER_TOKEN_NAME]
            );
            if (user) {
              const newUserToken = userService.validateRefreshToken({
                refreshToken: cookies[userService.COOKIE_REFRESH_TOKEN_NAME],
                email: user.email,
              });
              if (newUserToken) {
                args[1].headers[
                  "set-cookie"
                ] = `${userService.COOKIE_USER_TOKEN_NAME}=${newUserToken}; HttpOnly; Max-Age=${userService.COOKIE_USER_TOKEN_MAX_AGE}; Path=/`;
              }
            }
          }
        }
      } catch (e) {
        console.log(e);
      }

      callback.apply(null, args);
    });
  },
};
