const { ApolloGateway } = require("@apollo/gateway");

const createContext = require("./create-context");
const resolvers = require("./resolvers");
const typeDefs = require("./type-defs");

const CRYSTALLIZE_TENANT_IDENTIFIER = process.env.CRYSTALLIZE_TENANT_IDENTIFIER;

module.exports = function createGraphqlServerConfig({ apiPathPrefix = "" }) {
  const context = createContext({ apiPathPrefix });

  const gateway = new ApolloGateway({
    serviceList: [
      {
        name: "catalogue",
        url: `https://api.crystallize.com/${CRYSTALLIZE_TENANT_IDENTIFIER}/catalogue`,
      },
      {
        name: "search",
        url: `https://api.crystallize.com/${CRYSTALLIZE_TENANT_IDENTIFIER}/search`,
      },
    ],
    introspectionHeaders: {
      Authorization: "Bearer abc123",
    },
  });

  return {
    gateway,
    context,
    resolvers,
    typeDefs,
    introspection: true,
    playground: {
      endpoint: context.publicHost,
      settings: {
        "request.credentials": "include",
      },
    },
    // Disable subscriptions (not currently supported with ApolloGateway)
    subscriptions: false,
  };
};
