const createContext = require("./create-context");
const resolvers = require("./resolvers");
const typeDefs = require("./type-defs");

module.exports = function createGraphqlServerConfig({ apiPathPrefix = "" }) {
  return {
    context: createContext({ apiPathPrefix }),
    resolvers,
    typeDefs,
    introspection: true,
    playground: {
      settings: {
        "request.credentials": "include",
      },
    },
  };
};
