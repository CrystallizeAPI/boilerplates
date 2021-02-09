import { ApolloServer } from "apollo-server-micro";

import cors from "../../lib/cors";

import createGraphQLServerConfig from "../../src/graphql-server";

const apolloServer = new ApolloServer(
  createGraphQLServerConfig({
    apiPathPrefix: "/api",
  })
);

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function (req, res) {
  await cors(req, res);

  return apolloServer.createHandler({ path: "/api/graphql" })(req, res);
}
