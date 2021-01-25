const context = require("./context");
const resolvers = require("./resolvers");
const typeDefs = require("./type-defs");

module.exports = {
  context,
  resolvers,
  typeDefs,
  introspection: true,
  playground: {
    settings: {
      "request.credentials": "include",
    },
  },
};
