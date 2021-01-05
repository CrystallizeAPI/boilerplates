import { ApolloServer, gql } from "apollo-server-micro";

import { typeDefs, resolvers } from "../../../../src/graphql";

const apolloServer = new ApolloServer({ typeDefs: typeDefs(gql), resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: "/api/graphql" });
