"use strict";

const { ApolloServer } = require("apollo-server-lambda");
const gql = require("graphql-tag");

const typeDefs = gql`
  scalar JSON

  type Query {
    hi: String!
  }
`;

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      hi: () => "There",
    },
  },
  introspection: true,
});

module.exports = {
  graphql: apolloServer.createHandler({
    cors: {
      origin: true,
      credentials: true,
    },
  }),
};
