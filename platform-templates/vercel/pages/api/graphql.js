import { ApolloServer } from "apollo-server-micro";

import cors from "../../lib/cors";

import graphQLServerConfig from "../../src/graphql-server";

const apolloServer = new ApolloServer(graphQLServerConfig);

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function (req, res) {
  await cors(req, res);

  return apolloServer.createHandler({ path: "/api/graphql" })(req, res);
}
