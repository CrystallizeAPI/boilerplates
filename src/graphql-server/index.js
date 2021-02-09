const createContext = require("./create-context");
const resolvers = require("./resolvers");
const typeDefs = require("./type-defs");

module.exports = function createGraphqlServerConfig({ apiPathPrefix = "" }) {
  const context = createContext({ apiPathPrefix });

  return {
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
  };
};
