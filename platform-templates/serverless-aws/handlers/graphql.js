"use strict";

const { ApolloServer } = require("apollo-server-lambda");

const createGraphqlServerConfig = require("../src/graphql-server");

const apolloServer = new ApolloServer(
  createGraphqlServerConfig({
    apiPathPrefix: "/dev",
  })
);

module.exports = {
  graphql: apolloServer.createHandler({
    cors: {
      origin: true,
      credentials: true,
    },
  }),
};
